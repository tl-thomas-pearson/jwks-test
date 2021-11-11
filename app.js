const express = require("express");
const json_server = require("json-server");
const jwks_data = require("./jwks");

const server = express();

server.use(json_server.defaults())
server.use(express.json());

server.get("/keys", (req, res) => res.json(jwks_data));

server.get("/redirect-page", (req, res) => {
    console.log("`/redirect-page` received:", { body: req.body, params: req.params });
    res.sendStatus(200);
})


const port = process.env.PORT || 3000;
console.info(`[server]: running on port ${port}`);
server.listen(port);
