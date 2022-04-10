const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const userRouter = require("./routes/user");
const articleRouter = require("./routes/article");

const app = express();
const PORT = process.env.PORT || 8000;

// Enable CORS (for Dev only)
app.use(cors());

// Automatically parse the incoming JSON
app.use(express.json());

// Configure the Routes
app.use(userRouter);
app.use(articleRouter);

app.get("/", (req, res) => {
  res.send("Ping");
});

// Start Listening on PORT
app.listen(PORT, () => {
    console.log("Server is Running on port", PORT);
});