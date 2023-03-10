import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();
app.get("/", (req, res) => {
  res.send("Server up!");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
