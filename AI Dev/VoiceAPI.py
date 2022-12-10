import requests

# Replace with your Assembly AI API key
api_key = "abd3e27a551b4c67a73b6dc3334d14f3"

# Replace with the path to your audio file
audio_file = r"Test.mp3"

# Replace with the desired transcription options
transcription_options = {
    "add_punctuation": True,
    "add_spacing": True
}

# Set the API endpoint URL
endpoint = "https://api.assemblyai.com/v2/upload"

# Set the request headers
headers = {
    "Authorization": f"Token {api_key}",
    "Content-Type": "audio/mp3"
}

# Read the audio file into memory
with open(audio_file, "rb") as f:
    audio_data = f.read()

# Send the request to the API endpoint
response = requests.post(endpoint, headers=headers, data=audio_data, params=transcription_options)
audio_url =response.json()['upload_url']
print(audio_url)

try:
    response.raise_for_status()
except requests.exceptions.HTTPError as e:
    print(f"Error: {e}")
endpoint = "https://api.assemblyai.com/v2/transcript"

json = {
  "audio_url": audio_url
}

headers = {
    "authorization": api_key,
    "content-type": "application/json"
}

transcript_input_response = requests.post(endpoint, json=json, headers=headers)

print('4. Transcribing uploaded file')


# 5. Extract transcript ID

transcript_id = transcript_input_response.json()["id"]

print('5. Extract transcript ID')

# 6. Retrieve transcription results
endpoint = f"https://api.assemblyai.com/v2/transcript/{transcript_id}"
headers = {
    "authorization": api_key,
}

transcript_output_response = requests.get(endpoint, headers=headers)

print('6. Retrieve transcription results')

# Check if transcription is complete
from time import sleep

while transcript_output_response.json()['status'] != 'completed':
  sleep(5)
  print('Transcription is processing ...')
  transcript_output_response = requests.get(endpoint, headers=headers)


#print(transcript_output_response.json()["status"])


# 7. Print transcribed text

print('----------\n')
print('Output:\n')
print(transcript_output_response.json()["text"])