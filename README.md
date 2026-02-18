# Audio Transcription Service

A simple Node.js transcription pipeline that accepts audio files, converts them to WAV (if needed), and transcribes them using OpenAI Whisper.

LIVE URL: https://audio-transcription-service.onrender.com/

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

- OpenAI Whisper API

### Project Structure

```bash
project/
│
├── controllers/
│ └── transcribeController.js
│
├── public/
│ └── index.js
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

## Key Design Decisions

1️⃣ Express.js for API Layer

Chosen because:

- Lightweight and minimal

- Fast to set up

- Well-suited for REST APIs

2️⃣ Multer for File Upload Handling

- Middleware-based

- Supports file filtering and size limits

- Integrates easily with Express

- Stores files temporarily for processing

3️⃣ Audio Format Validation + Conversion

- Only mp3 and wav are directly supported.

- If another format is uploaded:

- It is converted to WAV.

- Conversion added as it
  - Standardizes audio format
  - Reduces runtime transcription issues

4️⃣ OpenAI Whisper for Transcription

- Used whisper-1 model via OpenAI SDK.
- Used verbose_json response format as it provides:
  - Full transcription text
  - Timestamped segments
