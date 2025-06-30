import express from "express";
import cors from "cors";

const app = express();


const CORS_OPTIONS = {
  origin: ["http://localhost:5173"]
};


const photos = [];


app.use(cors(CORS_OPTIONS));

app.use(express.json());

app.get("/api/photosinfo", (req, res) => {
  res.json({photos})

})


app.post("/api/photosinfo", (req, res) => {
  console.log("Form data on the server:", req.body);
  photos.push(req.body);
  res.status(201).json({success: true});
})

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});