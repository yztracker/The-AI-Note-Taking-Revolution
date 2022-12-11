import React, { useState, useRef } from 'react'
import axios from 'axios'

const generateImage = () => {

    const [img, setImg] = useState()

    const inputRef = useRef(null);
    console.log(inputRef)

    const handleOnclick = async () => {
        const response = await axios.post("https://api.openai.com/v1/images/generations", {
            "prompt": inputRef.current.value,
            "n": 1,
            "size": "512x512"
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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"
            },
        });
        console.log(response)
        console.log(response.data.data[0])
        console.log(response.data[0])
        setImg(response.data.data[0].url)
    }
    return (
        <>
            <div>
                <textarea ref={inputRef} placeholder="Write the prompt here..." className=' p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-1/2'>

                </textarea>
            </div>
            <button className='bg-slate-400 rounded font-small text-white p-3' onClick={handleOnclick}>generateImg</button>
            {img && <img src={img} className="w-24 h-24" />}
        </>

    )
}

export default generateImage;