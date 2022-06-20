import VirtualMachine from '../VirtualMachine';
import ServerPlanning from '../ServerPlanning';
import Server from '../Server';

/**
 * @description Tests ServerPlanning.calculate
 * @assert Assert the number of the server is correct
 * @assert Assert the numberOfServers value is of type number.
 */
test('the number of the server is correct', () => {
  const virtualMachines = [
    new VirtualMachine({ CPU: 1, RAM: 16, HDD: 10 }),
    new VirtualMachine({ CPU: 1, RAM: 16, HDD: 10 }),
    new VirtualMachine({ CPU: 2, RAM: 32, HDD: 100 })
  ];
  const serverPlanning = new ServerPlanning();
  const server = new Server({ CPU: 2, RAM: 32, HDD: 100 });
  const numberOfServers = serverPlanning.calculate(server, virtualMachines);

  expect(numberOfServers).toBe(2);
  expect(typeof numberOfServers).toBe('number');
});

/**
 * @description Tests ServerPlanning.calculate calculateCaseserverFitVirtualMachines
 * @assert Assert error is thrown if virtual machine list is empty
 */

test('calculate if server Fit VirtualMachines', () => {
  const serverPlanning = new ServerPlanning();
  const server = new Server({ CPU: 1, RAM: 1, HDD: 1 });
  expect(() => serverPlanning.calculate(server, [])).toThrow(Error);
});

test('Throw error when a negative number is passed to virtual machine', () => {
  expect(() => new VirtualMachine({ CPU: -1, RAM: 16, HDD: 10 })).toThrow(
    Error
  );
});

test('Throw error when a negative number is passed to server', () => {
  expect(() => new Server({ CPU: -1, RAM: 1, HDD: 1 })).toThrow(Error);
});
