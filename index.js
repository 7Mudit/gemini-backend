const express = require("express");
const geminiRoutes = require("./routes/route");
const cors = require("cors");
const app = express();

app.use(cors());

require("dotenv").config();

app.use(express.json());
app.use("/api/v1", geminiRoutes);

const PORT = 8000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started running at ${PORT} `);
});
