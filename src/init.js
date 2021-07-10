import "regenerator-runtime";
import "dotenv/config";
import "./db";
import "./models/Write";
import "./models/Video";
import "./models/User";
import "./models/Comment";
import app from "./server";

const port = process.env.PORT || 7700;

const handleListening = () =>
  console.log(`✅ Sever Listening on port http://localhost:${port} 🐱‍🏍`);

app.listen(port, handleListening);
