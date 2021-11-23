const express = require("express");
const json_server = require("json-server");
const jwks_data = require("./jwks");

const server = express();

server.use(json_server.defaults())
server.use(express.json());

server.get("/keys", (req, res) => res.json(jwks_data));

server.get("/redirect-page*", (req, res) => {
    console.log("`/redirect-page` received:", { body: req.body, query: req.query });
    res.sendStatus(200);
})


server.get("/revocation*", (req, res) => {
    console.log("`/revocation` received:", { body: req.body, query: req.query });
    res.sendStatus(204);
})


const port = process.env.PORT || 3000;
console.info(`[server]: running on port ${port}`);
server.listen(port);
