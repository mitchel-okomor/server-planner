

/**
 * @description Represents the Main server/VirtualMachine specification from CPU,RAM,HDD
 */
export default interface IServerSpecifications
{

    /**
     * @description getter function to get the CPU value
     * @return Integer CPU Value
     */
  getCpu(): number;

    /**
     * @description setter function to set the CPU property
 
     *
     * @param cpu 
     * 
     * @return void
     */
     
setCpu(cpu: number):void;
    
    /**
     * @description getter function to get the RAM value
     * @return RAM Value
     */
	
 getRam(): number;
    
    /**
     * @description setter function to set the RAM property
     * @param ram
     */
setRam(ram: number): void;

    /**
     * @description getter function to get the HDD value
     * @return HDD Value
     */
getHdd(): number;
    
    /**
     * @description setter function to set the HDD property
     *
     * @param hdd 

     */
	setHdd(hdd: number): void;
}