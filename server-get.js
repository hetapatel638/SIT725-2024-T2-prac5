const express = require("express");
const app = express();
app.use(express.static('public'));

const addTwoNumbers = (n1, n2) => {
    return n1 + n2;
};
const subTwoNumbers = (n1, n2) => {
    return n1 - n2;
};
const mulTwoNumbers = (n1, n2) => {
    return n1 * n2;
};
const divTwoNumbers = (n1, n2) => {
    return n1 / n2;
};

app.get("/add", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = addTwoNumbers(n1, n2);
    res.json({ statusCode: 202, data: result });
});

app.get("/sub", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = subTwoNumbers(n1, n2);
    res.json({ statusCode: 200, data: result });
});

app.get("/mul", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = mulTwoNumbers(n1, n2);
    res.json({ statusCode: 201, data: result });
});

app.get("/div", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = divTwoNumbers(n1, n2);
    res.json({ statusCode: 202, data: result });
});

app.get("/Display", (req, res) => {
    const n1 = "<html><body><H1>HELLO THERE </H1></body></html>";
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(n1));
});

app.get("/all", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const addResult = addTwoNumbers(n1, n2);
    const subResult = subTwoNumbers(n1, n2);
    const mulResult = mulTwoNumbers(n1, n2);
    const divResult = divTwoNumbers(n1, n2);
    res.json({
        statusCode: 200,
        data: {
            Addition: addResult,
            Subtraction: subResult,
            Multiplication: mulResult,
            Division: divResult
        }
    });
});

console.log(addTwoNumbers(19, 12));
console.log(subTwoNumbers(19, 12));
console.log(mulTwoNumbers(19, 12));
console.log(divTwoNumbers(19, 12));

const port = 3050;
app.listen(port, () => {
    console.log("The Application has started on port:", port);
});
