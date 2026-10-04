const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("NotifyHub Server Running...");
});

// Contact Route
app.post("/contact", (req, res) => {
  const { name, email, department, message } = req.body;

  console.log("New Contact Message");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Department:", department);
  console.log("Message:", message);

  res.json({
    success: true,
    message: "Message received successfully."
  });
});

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
