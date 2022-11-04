const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

const includesOperation = (str) => {
  if (str.includes("add")) {
    return "";
  }
};

app.use(express.json());

app.post("/", (req, res) => {
  let result = null;
  let x = Number(req.body.x);
  let y = Number(req.body.y);
  console.log(req.body.x, typeof x);
  /** 
  @type {string} operationType
 */
  let operation_type = null;
  let operationType = req.body.operation_type;
  if (operationType.includes("add")) {
    operation_type = "addition";
    result = x + y;
  }
  if (operationType.includes("sub")) {
    operation_type = "subtraction";
    result = x - y;
  }

  if (operationType.includes("mul")) {
    operation_type = "multiplication";
    result = x * y;
  }

  //   if (operationType.includes("div")) {
  //     result = x / y;
  //   }

  console.log(result);
  res.json({
    slackUserName: "aaronkenny",
    result,
    operation_type,
  });
});

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
