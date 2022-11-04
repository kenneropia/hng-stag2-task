const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  let result = null;
  let x = Number(req.body.x);
  let y = Number(req.body.y);
  console.log(req.body);
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
  if (operationType.includes("sum")) {
    operation_type = "sum";
    result = x + y;
  }

  if (operationType.includes("pro")) {
    operation_type = "production";
    result = x * y;
  }
  //   if (operationType.includes("div")) {
  //     result = x / y;
  //   }

  console.log({
    slackUserName: "aaronkenny",
    result,
    operation_type,
  });
  res.json({
    slackUserName: "aaronkenny",
    result,
    operation_type,
  });
});

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
