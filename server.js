import "dotenv/config";
import app from "./src/app.js";
import {
  testConnection
} from "./config/postgres.js";

const PORT = process.env.PORT || 3000;

//make me root path
app.get("/", (req, res) => {
  res.send(new Date().toISOString());
});

app.listen(PORT, async () => {
  await testConnection();
  console.log(`🚀 Server running on http://localhost:${PORT}`);
}); 