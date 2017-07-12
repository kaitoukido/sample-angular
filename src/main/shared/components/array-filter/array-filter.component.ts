import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'array-filter',
  templateUrl: './array-filter.component.html',
})
export class ArrayFilterComponent {
    filterNumber = 0;

    @Output() onFilter = new EventEmitter();
}