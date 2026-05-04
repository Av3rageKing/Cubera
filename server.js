const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files (like index.html)
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
    console.log(`Mini Roblox server running on http://localhost:${PORT}`);
});