import { Machine } from './types';
import IServerSpecifications from './IServerSpecification';

/**
 * @description Server - this class represent the implementation of ServerSpecificationsInterface
 */
class Server implements IServerSpecifications {
  private cpu;
  private ram;
  private hdd;

  /**
	  * @description constructor to set cpu , ram and hdd property
	  * @param machine server machine
	 
  */
  public constructor(machine: Machine) {
    this.cpu = this.validateResource('CPU', machine.CPU);
    this.ram = this.validateResource('RAM', machine.RAM);
    this.hdd = this.validateResource('HDD', machine.HDD);
  }
  /**
   * @description Validate the passed input for the passed resource to be sure it is a number and is greater than 1
   * @ and throw an error in case the resource input value is invalid
   * @param resource the resource its values needs to be validated (CPU,RAM,HDD)
   * @param input value of the passed resource
   * @return return the passed input if its greater than or equal 1.
   */
  public validateResource(resource: string, input: number): number {
    if (typeof input !== 'number' || input < 1) {
      throw new Error(
        `${resource} must be positive value greater than or equal 1. Your input is ${input}`
      );
    }
    return input;
  }

  public getCpu(): number {
    return this.cpu;
  }

  public setCpu(cpu: number) {
    this.cpu = cpu;
  }

  public getRam(): number {
    return this.ram;
  }

  public setRam(ram: number) {
    this.ram = ram;
  }

  public getHdd(): number {
    return this.hdd;
  }

  public setHdd(hdd: number) {
    this.hdd = hdd;
  }
}
export default Server;
