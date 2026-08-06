const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contact");
const noteRoutes = require("./routes/note");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to NotifyHub Backend");
});

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});