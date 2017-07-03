// @flow
const express = require("express");
const browserify = require("browserify-middleware");
const babelify = require("babelify");

const app = express();
app.get(
  "/",
  (req: express$Request, res: express$Response, next: express$NextFunction) => {
    res.send('<div id="content"></div><script src="/client.js"></script>');
  }
);

app.get(
  "/client.js",
  browserify(__dirname + "/client.js", { transform: babelify })
);

app.listen(3000);
