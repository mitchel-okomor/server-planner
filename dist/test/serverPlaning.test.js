"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VirtualMachine_1 = __importDefault(require("../VirtualMachine"));
const ServerPlanning_1 = __importDefault(require("../ServerPlanning"));
const Server_1 = __importDefault(require("../Server"));
/**
 * @description Tests ServerPlanning.calculate
 * @assert Assert the number of the server is correct
 * @assert Assert the numberOfServers value is of type number.
 */
test('the number of the server is correct', () => {
    const virtualMachines = [
        new VirtualMachine_1.default({ CPU: 1, RAM: 16, HDD: 10 }),
        new VirtualMachine_1.default({ CPU: 1, RAM: 16, HDD: 10 }),
        new VirtualMachine_1.default({ CPU: 2, RAM: 32, HDD: 100 }),
        // new VirtualMachine(1,16,10),
        // new VirtualMachine(1,16,10),
        // new VirtualMachine(2,32,100),
    ];
    const serverPlanning = new ServerPlanning_1.default();
    const server = new Server_1.default({ CPU: 2, RAM: 32, HDD: 100 });
    const numberOfServers = serverPlanning.calculate(server, virtualMachines);
    expect(numberOfServers).toBe(2);
    expect(typeof numberOfServers).toBe("number");
});
/**
 * @description Tests ServerPlanning::calculate calculateCaseserverFitVirtualMachines
 * @assert Assert there is exception thrown case virtual machine list is empty
 */
test('calculate if server Fit VirtualMachines', () => {
    const serverPlanning = new ServerPlanning_1.default();
    const server = new Server_1.default({ CPU: 1, RAM: 1, HDD: 1 });
    expect(() => serverPlanning.calculate(server, [])).toThrow(Error);
});
test('Throw error when a negative number is passed to virtual machine', () => {
    expect(() => new VirtualMachine_1.default({ CPU: -1, RAM: 16, HDD: 10 })).toThrow(Error);
});
test('Throw error when a negative number is passed to server', () => {
    expect(() => new Server_1.default({ CPU: -1, RAM: 1, HDD: 1 })).toThrow(Error);
});
