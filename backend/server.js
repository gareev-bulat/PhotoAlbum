import express from "express";
import cors from "cors";
import { supabase } from './supabase-client.ts'


const app = express();
const CORS_OPTIONS = {
  origin: ["http://localhost:5173"]
};


app.use(cors(CORS_OPTIONS));

app.use(express.json());

app.get("/api/photosinfo", async (req, res) => {

  const {data: photos, error} = await supabase.from("photos").select("*").order("created_at", {ascending: false});

  if (error) return res.status(500).json({error: error.message});
  res.json({photos})

})


app.post("/api/photosinfo", async (req, res) => {

  console.log("Form data on the server:", req.body);

  const { title, date, path } = req.body;
  const { data, error } = await supabase.from("photos").insert([{title, date, path}]).single();

  if (error) {
    console.log("Error adding task: ", error.message);
  }
  res.status(201).json({photo: data});
})

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});