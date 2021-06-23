// require("dotenv").config();
import "dotenv/config";
import "./db";
import "./models/Write";
import "./models/Video";
import "./models/User";
import app from "./server";

const port = 3000;

const handleListening = () =>
  console.log(`✅ Sever Listening on port http://localhost:${port} 🐱‍🏍`);

app.listen(port, handleListening);
