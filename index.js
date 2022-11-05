const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    slackUsername: "aaronkenny",
    backend: true,
    age: 21,
    bio: "Hi, my name is kenny, Im a backend developer. nice to meet u",
  });
});

app.post("/", (req, res) => {
  let result = null;
  let x = Number(req.body.x);
  let y = Number(req.body.y);
  console.log(req.body);
  /** 
  @type {string} operationType
 */
  let operation_type = null;
  let operationType = req.body.operation_type.toLowerCase();

  if (operationType.includes("add") || operationType.includes("+")) {
    operation_type = "addition";
    result = x + y;
  }
  if (operationType.includes("sub") || operationType.includes("-")) {
    operation_type = "subtraction";
    result = x - y;
  }

  if (operationType.includes("mul") || operationType.includes("*")) {
    operation_type = "multiplication";
    result = x * y;
  }
  if (operationType.includes("sum")) {
    operation_type = "multiplication";
    result = x + y;
  }

  if (operationType.includes("pro")) {
    operation_type = "multiplication";
    result = x * y;
  }
  if (operationType.includes("times")) {
    operation_type = "multiplication";
    result = x * y;
  }
  //   if (operationType.includes("div")) {
  //     result = x / y;
  //   }

  console.log({
    slackUsername: "aaronkenny",
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
