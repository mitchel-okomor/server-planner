

/**
 * @description Server - this class represent the implementation of ServerSpecificationsInterface
 * 
 * 
 */
 class Server implements ServerSpecifications
 {
	 
	 private cpu;
  
	 private ram;
 
	 private hdd;
	 
	 
	 /**
	  * @description constructor to set cpu , ram and hdd property
	  * 
	  * @param cpu server CPU value
	  * @param ram server RAM value
	  * @param hdd server HDD value
  */
	 public constructor(cpu:number, ram:number, hdd:number)
	 {
		 this.cpu = this.validateResource('CPU', cpu);
		 this.ram = this.validateResource('RAM', ram);
		 this.hdd = this.validateResource('HDD', hdd);
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
 public validateResource(resource:string, input:number) :number
	 {
		 if (input < 1) {
			 throw new Error(`${resource} must be positive value greater than or equal 1. Your input is ${input}`);
		 }
		 return input;
	 }
	
 
	 public  getCpu(): number
	 {
		 return this.cpu;
	 }
		 
  
	 public setCpu(cpu:number)
	 {
		 this.cpu = cpu;
	 }
  
	 public getRam(): number
	 {
		 return this.ram;
	 }
		 
 
	 public setRam( ram: number)
	 {
		 this.ram = ram;
	 }
 
	 public getHdd(): number
	 {
		 return this.hdd;
	 }
 
	 public setHdd(hdd:number)
	 {
		 this.hdd = hdd;
	 }
 
 
	 
	
   
 }
 
 module.exports = Server;