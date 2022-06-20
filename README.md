SERVER PLANNER SERVICE

---

Write an API that calculates the server hardware for a data center (to host virtual machines).
Your API should return the number of servers that are required to host a non-empty collection of virtual machines.
This means you should implement the following operation (in UML definition):
+calculate(serverType: Server, virtualMachines: VirtualMachine[1..*]): int
All servers are from the same type. This type defines the hardware resources each server provides: CPU, RAM, HDD.
Each virtual machine is defined by the virtual hardware resources it needs (on a server): CPU, RAM, HDD.
The algorithm for the virtual machine distribution should implement a 'first fit' strategy.
This means there is no resource optimization or 'look back': Virtual machines are always allocated on the current or the next server (in case of limited resources).
If a virtual machine is too 'big' for a new server, skip it.

---

Example:
Server type = {CPU: 2, RAM: 32, HDD: 100}
Virtual Machines = [{CPU: 1, RAM: 16, HDD: 10}, {CPU: 1, RAM: 16, HDD: 10}, {CPU: 2, RAM: 32, HDD: 100}]
Result = 2

---

General Requirements:
Create a rest API service, in any language of your choice
Ensure the service runs in Docker
The code should contain ReadMe on how to run the service
Your submission should compile and run successfully
Free choice of dependencies, but keep it simple
Your code should be fully (unit) tested!
Endeavor to write clean, maintainable code.
These requirements are just the bare minimum, add more functionality.

# How to run the program without Docker

### npm install

install dependecies

### npm test

run all unit test cases

### npm start

Build and start the application

### Server address

localhost:3000

### test with Postman

make http POST request in the format below
{
"servertype":{"CPU": 6, "RAM": 64, "HDD": 300},
"virtualMachines": [{"CPU": 3, "RAM": 16, "HDD": 10}, {"CPU": 1, "RAM": 16, "HDD": 10}, {"CPU": 2, "RAM": 32, "HDD": 100}]
}

# How to run the program with Docker

### docker build -t server-planner .

Build the docker image

### docker run -p 3000:3000 server-planner

### test with Postman

make http POST request in the format below
{
"servertype":{"CPU": 6, "RAM": 64, "HDD": 300},
"virtualMachines": [{"CPU": 3, "RAM": 16, "HDD": 10}, {"CPU": 1, "RAM": 16, "HDD": 10}, {"CPU": 2, "RAM": 32, "HDD": 100}]
}

### Server address

localhost:3000
