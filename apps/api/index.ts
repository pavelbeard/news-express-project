import express from "express";
import router from "./hello";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/hello", router);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

export default app;
