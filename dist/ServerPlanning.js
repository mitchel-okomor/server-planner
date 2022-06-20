"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServerAllocationFitStrategy_1 = __importDefault(require("./ServerAllocationFitStrategy"));
/**
 * @description Server Planning - this class represent server planning for the virtualMachines
 */
class ServerPlanning {
    /**
     * @description return the number of servers that is required, to host a non-empty collection of virtual machines
     * @description If a virtual machine is too 'big' for a server, it should be skipped.
     * @description If the collection of virtual machines is empty, an exception should be thrown.
     *
     * @param server Object of type Server
     * @param virtualMachines  of type VirtualMachine
     *
     * @return Integer the number of servers that is required, to host a non-empty collection of virtual machines
     */
    calculate(server, virtualMachines) {
        if (virtualMachines.length == 0) {
            throw new Error("Empty Virtual Machine Collection");
        }
        const strategy = new ServerAllocationFitStrategy_1.default(server);
        let counter = 0;
        for (const virtualMachine of virtualMachines) {
            if (strategy.fit(virtualMachine)) {
                counter++;
            }
        }
        return counter;
    }
}
exports.default = ServerPlanning;
