
/**
 * @description This class represent the implementation ServerAllocationFirstFitStrategy 
 */
class ServerAllocationFirstFitStrategy implements ServerAllocationStrategy
{

    private availableCpu = 0;
    private availableRam = 0;
    private availableHdd = 0;
    
    /**
     * @description constructor to set availableCpu , availableRam and availableHdd property
     * @param server Object of type Server 
     * @return void
     */
    public constructor(server:Server)
    {
        this.availableCpu = server.getCpu();
        this.availableRam =server.getRam();
    this.availableHdd = server.getHdd();
    }

    /**
     * @description To check if the passed VirtualMachine fit to the server according to the used ServerAllocationFirstFitStrategy 
     * @param vm object of type VirtualMachine
     *
     * @return Boolean true in case passed virtual machine fit and false incase if it does not fit according to the ServerAllocationFirstFitStrategy 
     */
    public fit(vm: VirtualMachine): boolean
    {
      const  cpu = this.availableCpu - vm.getCpu();
        const ram = this.availableRam - vm.getRam();
       const hdd = this.availableHdd - vm.getHdd();
        
        if (cpu >= 0 && ram >= 0 && hdd >= 0) {
            
            this.availableCpu -= vm.getCpu();
            this.availableRam -= vm.getRam();
            this.availableHdd -= vm.getHdd();
            
            return true;
            
        } else {
            
            return false;
        }
    }
}

module.exports = ServerAllocationFirstFitStrategy;