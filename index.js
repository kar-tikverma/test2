const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

// Serve static files from "./public"
// const staticDir = process.env.STATIC_DIR || path.join(__dirname, "public");
// app.use(express.static(staticDir));
// app.use(express.static("public"));

const viewsDir = process.env.STATIC_DIR || path.join(__dirname, "views");
app.set("views", viewsDir);

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/ejstemp", (req, res) => {
  res.render("index.ejs");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});