🎙️ Audio Transcription Service

A simple Node.js transcription pipeline that accepts audio files, converts them to WAV (if needed), and transcribes them using OpenAI Whisper.

🚀 Features

Upload audio files (MP3, WAV, others supported via conversion)

Automatic format validation

Converts unsupported formats to WAV using ffmpeg

Transcribes audio using OpenAI Whisper (whisper-1)

Returns:

Full transcript

Timestamped segments

Clean modular architecture

🏗️ Tech Stack

Node.js

Express.js

Multer (file uploads)

FFmpeg (audio conversion)

OpenAI Whisper API

📁 Project Structure
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

⚙️ Installation
1️⃣ Clone the repository
git clone <repo-url>
cd project

2️⃣ Install dependencies
npm install

3️⃣ Add environment variables

Create a .env file:

OPENAI_API_KEY=your_openai_api_key

▶️ Run the Server
node server.js

Server runs at:

http://localhost:3000

📡 API Endpoints
1️⃣ Health Check
GET /

Response:

"Transcription Service Running!"

2️⃣ Upload File
POST /upload

Form-data:

audio: <audio file>

Response:

{
"message": "File uploaded",
"filePath": "uploads/xyz"
}

3️⃣ Transcribe Audio
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
