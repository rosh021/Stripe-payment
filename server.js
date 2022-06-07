import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
const app = express();
const PORT = process.env.PORT || 8000;
const PUBLISHABLE_KEY = process.env.PUBLISHABLE_KEY;
const SECRET_KEY = process.env.SECRET_KEY;

app.use(express.json());
app.use(cors());

const __dirname = path.resolve();

app.use(express.static(path.resolve(__dirname, )))

app.get("/", (req, res) => {});
app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Your Server is running on http://localhost:${PORT}`);
});
