const express = require("express");
const geminiRoutes = require("./routes/route");
const app = express();

require("dotenv").config();

app.use(express.json());
app.use("/api/v1", geminiRoutes);

const PORT = 8000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started running at ${PORT} `);
});
