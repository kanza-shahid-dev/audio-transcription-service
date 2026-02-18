# Audio Transcription Service

A simple Node.js transcription pipeline that accepts audio files, converts them to WAV (if needed), and transcribes them using OpenAI Whisper.

## Features

- Upload audio files (MP3, WAV, others supported via conversion)

- Automatic format validation

- Converts unsupported formats to WAV using ffmpeg

- Transcribes audio using OpenAI Whisper (whisper-1)

- Returns:
  - Full transcript

  - Timestamped segments

## Tech Stack

- Node.js

- Express.js

- Multer (file uploads)

- FFmpeg (audio conversion)

## OpenAI Whisper API

### Project Structure

```bash
project/
│
├── controllers/
│ └── transcribeController.js
│
├── services/
│ └── transcribe.js
│
├── utils/
│ └── audioConverter.js
│
├── uploads/
│
├── .env
├── server.js
└── package.json
```

## Installation

- Clone the repository

```bash
    git clone https://github.com/kanza-shahid-dev/audio-transcription-service
```

- Install dependencies

```bash
    npm install
```

- Run the Server

```bash
    node server.js
```

- Server runs at: http://localhost:3000

## API Endpoints

- Health Check

```bash
GET /
Response: "Transcription Service Running!"
```

- Transcribe Audio

```bash
    POST /transcribe
    Form-data:
    audio: <audio file>
    Response:
        {
        "full_text": "Hello world...",
        "segments": [
                        {
                            "start": 0,
                            "end": 3.2,
                            "text": "Hello world"
                        }
                    ]
        }
```
