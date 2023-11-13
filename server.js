const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const userRoute = require("./routes/userRoute.js");

app.use(express.json());

app.use(userRoute);

app.listen(8080, () => {
  console.log(`server running on port ${port}`);
});
