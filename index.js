const express = require("express");
const app = express();
const userRouter = require("./routers/users");

app.use(express.json());

app.use("/api/v1/users", userRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
