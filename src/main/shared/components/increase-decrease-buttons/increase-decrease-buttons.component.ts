import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'increase-decrease-buttons',
  templateUrl: './increase-decrease-buttons.component.html',
})
export class IncreaseDecreaseButtonsComponent {
  @Output() onIncrease = new EventEmitter();
  @Output() onDecrease = new EventEmitter();
}