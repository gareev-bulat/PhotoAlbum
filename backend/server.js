import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import path from "path";
import { supabaseAdmin } from "./supabase-client.ts";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const upload = multer({ dest: "uploads/" });

app.get("/api/photosinfo", async (req, res) => {
  const { data: photos, error } = await supabaseAdmin
    .from("photos")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json({ photos });
});

app.post("/api/photosinfo", upload.single("image"), async (req, res) => {
  try {
    const { title, date } = req.body;
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No file uploaded" });

    const ext = path.extname(file.originalname);
    const bucketPath = `images/${file.filename}${ext}`;
    const fileBuffer = fs.readFileSync(file.path);

    const { error: uploadError } = await supabaseAdmin.storage
      .from("images")
      .upload(bucketPath, fileBuffer, {
        contentType: file.mimetype,
        cacheControl: "3600",
        upsert: false,
      });
    if (uploadError) throw uploadError;

    const { data: urlData, error: urlError } = supabaseAdmin.storage
      .from("images")
      .getPublicUrl(bucketPath);

    if (urlError) throw urlError;
    const publicUrl = urlData.publicUrl;

    const { data: row, error: dbError } = await supabaseAdmin
      .from("photos")
      .insert([{ title, date, path: publicUrl }])
      .single();
    if (dbError) throw dbError;

    fs.unlinkSync(file.path);

    res.status(201).json({ photo: row });
  } catch (err) {
    if (req.file?.path) fs.unlinkSync(req.file.path);

    console.error("POST /api/photosinfo error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(8080, () => console.log("Server running on http://localhost:8080"));
