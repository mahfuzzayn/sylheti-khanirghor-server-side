const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("Sylhet Khanirghor server running...");
})

app.listen(port, () => {
    console.log(`Sylheti Khanirghor server is listening on port: ${port}`);
})