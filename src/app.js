import express from "express";
import cors from "cors";
import villaController from "./controller/villa.controller.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.get('/villas', villaController.getAllVillas);
app.get('/villa/:id', villaController.getVillaById);
app.post('/create-villa', villaController.createVilla);
app.post('/roi', villaController.inputRoi);

app.use((err, req, res, next) => {
  console.error(err);
  const status = err?.status || 500;
  res.status(status).json({ message: err?.message || "Internal Server Error" });
});

export default app;