import { Component } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
})
export class TestComponent {
  testNumber = 1.333333333333333333333333;
  color = 'green';
  currentNumber = 0;

  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  printItems = this.items;

  onIncrease() {
    console.log('increase button clicked!');
    this.currentNumber += 1;
  }

  onDecrease() {
    console.log('decrease button clicked!');
    this.currentNumber -= 1;
  }

  onFilter(cutOffNum) {
    this.printItems = this.items.slice(0, cutOffNum);
  }
}