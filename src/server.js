import express from "express";

import { buildCSS } from "./utils/builder.js";

const app = express();
const PORT = process.env.PORT || 1212;

// Middleware to serve static files
app.use(express.static("sample"));

// Endpoint to build CSS dynamically
app.post("/build-css", buildCSS);
app.get("/build-css", buildCSS);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
