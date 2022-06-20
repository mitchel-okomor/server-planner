"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description VirtualMachine - this class represent the implementation of ServerSpecificationsInterface
 *
 *
 */
class VirtualMachine {
    /**
     * @description constructor to set cpu , ram and hdd property
     *
     * @param cpu server CPU value
     * @param ram server RAM value
     * @param hdd server HDD value
 */
    constructor(machine) {
        this.cpu = this.validateResource('CPU', machine.CPU);
        this.ram = this.validateResource('RAM', machine.RAM);
        this.hdd = this.validateResource('HDD', machine.HDD);
    }
    /**
   * @description Validate the passed input for the passed resource to be sure it is a number and is greater than 1
   * @description and throw an error in case the resource input value is invalid

   *
   * @param resource the resource that we need to validate its value (CPU,RAM,HDD)
   * @param input value of the passed resource
   *
   * @return Boolean return true if the passed input is integer greater than or equal 1 for the passed resource.
   */
    validateResource(resource, input) {
        if (typeof input !== "number" || input < 1) {
            throw new Error(`${resource} must be a positive number greater than or equal 1. Your input is ${input}`);
        }
        return input;
    }
    getCpu() {
        return this.cpu;
    }
    setCpu(cpu) {
        this.cpu = cpu;
    }
    getRam() {
        return this.ram;
    }
    setRam(ram) {
        this.ram = ram;
    }
    getHdd() {
        return this.hdd;
    }
    setHdd(hdd) {
        this.hdd = hdd;
    }
}
exports.default = VirtualMachine;
