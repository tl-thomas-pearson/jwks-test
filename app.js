const json_server = require("json-server");

const server = json_server.create();
const router = json_server.router("jwks.json"); 
const middleware = json_server.defaults();
const port = process.env.PORT || 3000;

server.use(middleware);
server.use(router);
server.listen(port);
