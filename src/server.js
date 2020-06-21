// @flow
const express = require("express");
const browserify = require("browserify-middleware");
const babelify = require("babelify");

const app = express();
app.get(
  "/",
  (req: express$Request, res: express$Response, next: express$NextFunction) => {
    res.send(`
      <div id="content"></div><script src="/client.js"></script>
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-170217693-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-170217693-1');
      </script>
      `);
  }
);

app.get(
  "/client.js",
  browserify(__dirname + "/client.js", { transform: babelify })
);

module.exports = app.listen(3000);
