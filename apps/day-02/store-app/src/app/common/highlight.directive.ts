import { Directive, ElementRef, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') color: string;
  // el: ElementRef;

  constructor(private el: ElementRef) {
    // this.el = el;
    console.log(el);
  }

  ngOnInit() {}

  @HostListener('mouseover')
  onMouseOver() {
    this.setColor(this.color);
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.setColor('');
  }

  private setColor(color) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
