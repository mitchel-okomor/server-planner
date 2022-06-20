interface ServerAllocationStrategy {
	/**
	* @param vm object of type VirtualMachine
     *
     * @return Boolean true in case passed virtual machine fit and false incase if it does not fit according to the used ServerAllocationStrategy * @description To check if the passed VirtualMachine fit to the server according to the used ServerAllocationStrategy 

	 * function
	 */
fit(vm: VirtualMachine):boolean; 
}