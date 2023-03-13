export class CounterService {
  activeCounter = 0;
  inactiveCounter = 0;

  activeToInactiveCounter() {
    this.activeCounter++;
    console.log('Going inactive: ' + this.activeCounter);
  }

  inactiveToActiveCounter() {
    this.inactiveCounter++;
    console.log('going active: ' + this.inactiveCounter);
  }

}
