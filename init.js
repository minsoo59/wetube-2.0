import "./db";
import "./models/Write";
import app from "./server";

const port = 6100;

const handleListening = () =>
  console.log(`✅ Sever Listening on port http://localhost:${port} 🐱‍🏍`);

app.listen(port, handleListening);
