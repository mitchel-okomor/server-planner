// use ServerPlanning\Server;
// use ServerPlanning\ServerPlanning;
// use ServerPlanning\VirtualMachine;
import VirtualMachine from '../src/VirtualMachine';
import ServerPlanning from '../src/ServerPlanning';
import Server from '../src/Server';

     
    /**
     * @description Tests ServerPlanning.calculate calculateCaseserverFitVirtualMachines
     * @assert Assert the number of the server is correct
     * @assert Assert the numberOfServers value is of type number.
     */
	 test('the number of the server is correct', () => {
	const virtualMachines = [
		new VirtualMachine(1,16,10),
		new VirtualMachine(1,16,10),
		new VirtualMachine(2,32,100),
        ];
        const serverPlanning = new ServerPlanning();
		const server  = new Server(2, 32, 100);
    const numberOfServers = serverPlanning.calculate(server, virtualMachines);

		expect(numberOfServers).toBe(2);
		expect(typeof numberOfServers).toBe("number")
	  });


    
    /**
     * @description Tests ServerPlanning::calculate calculateCaseserverFitVirtualMachines

     * @assert Assert there is exception thrown case virtual machine list is empty
     */

	 test('calculate if server Fit VirtualMachines', () => {
		const virtualMachines = [
			new VirtualMachine(1,16,10),
			new VirtualMachine(1,16,10),
			new VirtualMachine(2,32,100),
			];
			const serverPlanning = new ServerPlanning();
			const server  = new Server(1, 1, 1);
		const numberOfServers = serverPlanning.calculate(server, virtualMachines);
	
			// expect(numberOfServers).toBe(2);
			// expect(typeof numberOfServers).toBe("Number")
			expect(()=>serverPlanning.calculate(server,[])).toThrow(Error)

		  });


    // public function test_calculateCaseVirtualEmptyMachineList2(): void
    // {
    //     $serverPlanning = new ServerPlanning();
    //     $this->expectException(Exception::class);
    //     $server = new Server(0,1,1);
    //     //$this->expectException(Exception::class);
    //     //$serverPlanning->calculate($server, []);
    // }

