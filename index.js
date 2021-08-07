const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const port = 8000;

app.listen(port, () => {
    console.log(`App is listening on http:localhost:${port}...`);
});