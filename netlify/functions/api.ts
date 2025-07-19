import serverless from "serverless-http";

import express from "express";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/hello", router);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

export const handler = serverless(app);
