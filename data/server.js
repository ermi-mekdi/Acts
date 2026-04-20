const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Middleware to set CSP header
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'none'; connect-src 'self' http://localhost:3000;",
  );
  next();
});

// Serve your HTML file from a folder named 'public'
app.use(express.static("public"));

app.post("/save-data", (req, res) => {
  const newData = req.body;
  const filePath = path.join(__dirname, "./ppls.json"); // Path to your JSON file

  // 1. Read existing file or start with an empty array
  fs.readFile(filePath, "utf8", (err, data) => {
    let jsonArray = [];
    if (!err && data) {
      jsonArray = JSON.parse(data);
    }

    // 2. Add the new entry
    jsonArray.push(newData);

    // 3. Write back to the file
    fs.writeFile(filePath, JSON.stringify(jsonArray, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error saving file" });
      }
      res.json({ message: "Data saved successfully!" });
    });
  });
});
