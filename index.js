const express = require("express");
const app = express();
const cors = require("cors");
const { run } = require("./db");

app.use(cors());
app.use(express.json());

app.get("/api/register", function (req, res) {
  res.send("Hello World");
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/api", require("./routes/RegisterRoutes"));
app.use("/api", require("./routes/LoginRoutes"));

(async () => {
  const PORT = process.env.PORT || 4000;

  await run()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`server started on http://127.0.0.1:${PORT}`);
      });
    })
    .catch(console.dir);
})();
