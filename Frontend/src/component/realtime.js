import React, { useState } from 'react'
import RecordRTC, { invokeSaveAsDialog, StereoAudioRecorder } from 'recordrtc';

const Realtimestreaming = ({setValue}) => {

    const [conversation, setConversation] = useState();
    const [isRecord, setIsRecord] = useState(false);
    console.log(isRecord)
    let isRecording = false;
    let socket;
    let recorder ;
    const record = async () => {
        // if (isRecording) {
        if (socket) {
            socket.send(JSON.stringify({ terminate_session: true }));
            socket.close();
            socket = null;
        }

        if (recorder) {
            recorder.pauseRecording();
            recorder = null;
        }
        // } else {
        const response = await fetch('https://6635c6b4-28f2-4b48-a2a5-616ede984a78.id.repl.co/api/realtime'); // get temp session token from server.js (backend)
        const data = await response.json();

        if (data.error) {
            alert(data.error)
        }

        const { token } = data;

        // establish wss with AssemblyAI (AAI) at 16000 sample rate
        socket = await new WebSocket(`wss://api.assemblyai.com/v2/realtime/ws?sample_rate=16000&token=${token}`);
        console.log(socket)
        // handle incoming messages to display transcription to the DOM
        const texts = {};
        socket.onmessage = (message) => {
            let msg = '';
            const res = JSON.parse(message.data);
            texts[res.audio_start] = res.text;
            const keys = Object.keys(texts);
            keys.sort((a, b) => a - b);
            for (const key of keys) {
                if (texts[key]) {
                    msg += ` ${texts[key]}`;
                }
            }
            setValue(msg)
            console.log(msg)
            // messageEl.innerText = msg;
        };

        socket.onerror = (event) => {
            console.error(event);
            socket.close();
        }

        socket.onclose = event => {
            console.log(event);
            socket = null;
        }

        socket.onopen = () => {
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then((stream) => {
                    recorder = new RecordRTC(stream, {
                        type: 'audio',
                        mimeType: 'audio/webm;codecs=pcm', // endpoint requires 16bit PCM audio
                        recorderType: StereoAudioRecorder,
                        timeSlice: 250, // set 250 ms intervals of data that sends to AAI
                        desiredSampRate: 16000,
                        numberOfAudioChannels: 1, // real-time requires only one channel
                        bufferSize: 4096,
                        audioBitsPerSecond: 128000,
                        ondataavailable: (blob) => {
                            const reader = new FileReader();
                            reader.onload = () => {
                                const base64data = reader.result;

                                // audio data must be sent as a base64 encoded string
                                if (socket) {
                                    socket.send(JSON.stringify({ audio_data: base64data.split('base64,')[1] }));
                                }
                            };
                            reader.readAsDataURL(blob);
                        },
                    });

                    recorder.startRecording();
                })
                .catch((err) => console.error(err));
        };
        // }

        isRecording = !isRecording;
        // buttonEl.innerText = isRecording ? 'Stop' : 'Record';
        // titleEl.innerText = isRecording ? 'Click stop to end recording!' : 'Click start to begin recording!'
    };
    const stop = () => {

        if (socket) {
            socket.send(JSON.stringify({ terminate_session: true }));
            socket.close();
            socket = null;
        }

        if (recorder) {
            recorder.pauseRecording();
            recorder = null;
        }
    }

    return (
        <div>
            <button onClick={record}>{isRecording ? 'Stop' : 'Record'}</button>
            <button onClick={stop}>stop111</button>
            {/* <p>{conversation}</p> */}

        </div>
    )
}

export default Realtimestreaming;