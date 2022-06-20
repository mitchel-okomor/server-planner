import ServerAllocationFirstFitStrategy from './ServerAllocationFitStrategy';
import Server from './Server';
import VirtualMachine from './VirtualMachine';

/**
 * @description Server Planning - this class represent server planning for the virtualMachines
 */

 class ServerPlanning
 {
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
	calculate(server:Server, virtualMachines:Array<VirtualMachine>): number
	 {
		 if (virtualMachines.length == 0) {
			  
			  throw new Error("Empty Virtual Machine Collection");
		 }
		 
		 const strategy = new ServerAllocationFirstFitStrategy(server);
		 let counter = 0;
		 

		 for(const virtualMachine of virtualMachines) {
			 if (strategy.fit(virtualMachine)) {
				 counter++;
			 }
		 }
		 return counter;
	 }
 }

export default ServerPlanning;