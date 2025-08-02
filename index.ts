import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ status: "success", message: "Hello, Bun!" });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
