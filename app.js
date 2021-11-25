const express = require("express");
const json_server = require("json-server");
const jwks_data = require("./jwks");

const server = express();

server.use(json_server.defaults())
server.use(express.json());

server.get("/keys", (req, res) => res.json(jwks_data));

server.get("/redirect-page*", (req, res) => {
    const json = { body: req.body, query: req.query };
    console.log("`/redirect-page` received:", json);
    res.json(json);
})


server.get("/revocation*", (req, res) => {
    console.log("`/revocation` received:", { body: req.body, query: req.query, params: req.params, route: req.route });
    res.sendStatus(204);
});


server.get("/arrangements/revoke*", (req, res) => {
    console.log("`/revocation` received:", { body: req.body, query: req.query, params: req.params, route: req.route });
    res.sendStatus(204);
});

server.get("/*", (req, res) => {
    console.log("`/*` received:", { body: req.body, query: req.query, params: req.params, route: req.route });
    res.sendStatus(204);
});

const port = process.env.PORT || 3000;
console.info(`[server]: running on port ${port}`);
server.listen(port);
