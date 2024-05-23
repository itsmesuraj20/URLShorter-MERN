const express = require("express");
const { connectToMongoDB } = require('./database/connection');
const urlRoute = require('./routes/url');

const app = express();
const PORT = 8001;

app.use(express.json());


connectToMongoDB('mongodb://localhost:27017/short-url')
    .then(() => console.log("Connected to database"))
    .catch((error) => console.error("Failed to connect to database", error));

app.use(express.json()); // Middleware to parse JSON bodies
app.use("/url", urlRoute); // Fixed the route path by adding a leading slash

app.listen(PORT, () => console.log(`Server has started at PORT: ${PORT}`));
//Hello
