const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const chefs = require("./data/chefs.json");

app.use(cors());

app.get("/", (req, res) => {
    res.send("Sylhet Khanirghor server running...");
});

app.get("/chefs", (req, res) => {
    res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
    const id = req.params.id;
    const selectedChef = chefs.find((chef) => chef._id === id);
    res.send(selectedChef);
});

app.listen(port, () => {
    console.log(`Sylheti Khanirghor server is listening on port: ${port}`);
});
