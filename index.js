import express from "express";
import bodyparser from "body-parser";

const app = express();

app.use(bodyparser.json());

const PORT = 5000;

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT} `)
);
