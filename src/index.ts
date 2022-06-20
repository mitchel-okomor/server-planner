import http from 'http';
import VirtualMachine from './VirtualMachine';
import ServerPlanning from './ServerPlanning';
import Server from './Server';
import { Machine } from './types';
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req: any, res: any) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200);
    res.end('Server planner service running correctly');
  }
  if (req.url === '/' && req.method === 'POST') {
    const body: any = [];

    req.on('data', (chunk: any) => {
      body.push(chunk);
    });

    req.on('end', () => {
      // converts buffer stream into readable string format
      let parsedBody: any = Buffer.concat(body).toString(); //
      const input = JSON.parse(parsedBody);

      const { servertype, virtualMachines } = input;

      try {
        const machines = virtualMachines.map((machine: Machine) => {
          return new VirtualMachine(machine);
        });
        const serverPlanning = new ServerPlanning();
        const server = new Server(servertype);
        const numberOfServers = serverPlanning.calculate(server, machines);
        console.log('Number: ', numberOfServers);

        res.writeHead(200);
        res.end(numberOfServers.toString());
      } catch (error: any) {
        res.writeHead(403);
        res.end(error.toString());
      }
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
