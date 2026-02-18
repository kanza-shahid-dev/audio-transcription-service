import express from "express";
import multer from "multer";
import "dotenv/config";

import { handleTranscription } from "./controllers/transcribeController.js";

const app = express();
const PORT = 3000;

// Multer setup: store uploaded files in 'uploads/'
const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => res.send("Transcription Service Running!"));

app.post("/upload", upload.single("audio"), (req, res) => {
  if (!req.file) return res.status(400).send("No file uploaded.");
  res.send({ message: "File uploaded", filePath: req.file.path });
});

app.post("/transcribe", upload.single("audio"), handleTranscription);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
