const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

app.set("view engine", "ejs");

// Serve static files from "./public"
// const staticDir = process.env.STATIC_DIR || path.join(__dirname, "public");
// app.use(express.static(staticDir));
// app.use(express.static("public"));

// const viewsDir = process.env.VIEWS_DIR || path.join(__dirname, "views");
const viewsDir = process.env.VIEWS_DIR
  ? path.resolve(process.env.VIEWS_DIR)
  : path.join(__dirname, "views");
app.set("views", viewsDir);

// Define a basic route
app.get("/", (req, res) => {
  res.send(`4 - ${viewsDir}`);
});

app.get("/ejstemp", (req, res) => {
  res.render("index.ejs");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
