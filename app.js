const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
const port = 3001;

app.use(cors());

app.get("/", (req, res) => {
  const html = fs.readFileSync("public/index.html", { encoding: "utf-8" });
  let token = req.query["token"];
  console.log(token);
  let replacedToken = html.replace("${token}", token);
  res.send(replacedToken);
});
app.use("/", express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
