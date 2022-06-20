"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const VirtualMachine_1 = __importDefault(require("./VirtualMachine"));
const ServerPlanning_1 = __importDefault(require("./ServerPlanning"));
const Server_1 = __importDefault(require("./Server"));
const hostname = '0.0.0.0';
const port = 3000;
const server = http_1.default.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200);
        res.end('Server planner service running correctly');
    }
    if (req.url === '/' && req.method === 'POST') {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        req.on("end", () => {
            // converts buffer stream into readable string format
            let parsedBody = Buffer.concat(body).toString(); //
            const input = JSON.parse(parsedBody);
            const { servertype, virtualMachines } = input;
            try {
                const machines = virtualMachines.map((machine) => {
                    return new VirtualMachine_1.default(machine);
                });
                const serverPlanning = new ServerPlanning_1.default();
                const server = new Server_1.default(servertype);
                const numberOfServers = serverPlanning.calculate(server, machines);
                console.log("Number: ", numberOfServers);
                res.writeHead(200);
                res.end(numberOfServers.toString());
            }
            catch (error) {
                res.writeHead(403);
                res.end(error.toString());
            }
        });
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
