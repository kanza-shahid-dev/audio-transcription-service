import path from "path";
import { convertToWav } from "../utils/audioConverter.js";
import { transcribeAudioWithSegments } from "../services/transcribe.js";

const supportedFormats = ["mp3", "wav"];

export async function handleTranscription(req, res) {
  if (!req.file) return res.status(400).send("No file uploaded.");

  let audioPath = req.file.path;
  const extension = path.extname(audioPath).slice(1).toLowerCase();

  try {
    if (!supportedFormats.includes(extension)) {
      // Convert unsupported format to WAV
      audioPath = await convertToWav(
        audioPath,
        `uploads/converted_${Date.now()}.wav`,
      );
    }

    // Transcribe with segments
    const result = await transcribeAudioWithSegments(audioPath);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error processing audio.");
  }
}
