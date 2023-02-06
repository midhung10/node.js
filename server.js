const express = require("express");
const app = express();

app.use("/images", express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <img src="/images/your-image.jpg" alt="Your Image">
        <p>Hello, Node.js</p>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
