import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightTextDirective implements OnInit {
    @Input('highlight') color: boolean;

    constructor(private _element: ElementRef) { 
        
    }

    ngOnInit() {
        console.log(this.color);
        
        this._element.nativeElement.style.color = this.color || 'black';
        this._element.nativeElement.style.fontWeight = '700';
    }
}