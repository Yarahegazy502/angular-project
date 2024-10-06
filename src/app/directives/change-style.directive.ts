import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeStyle]'
})
export class ChangeStyleDirective {

  constructor(
    private element: ElementRef
  ) {
    element.nativeElement.style.color = 'red';
    element.nativeElement.style.backgroundColor = 'pink';
    element.nativeElement.style.padding = '1rem';
    // console.log(element.nativeElement);
    // console.log(element.nativeElement.innerText);
  }

  @HostListener('mouseover') onMouseOver() {
    // this.element.nativeElement.style.color = 'white';
    this.changeColor('white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.element.nativeElement.style.color = 'red';
    this.changeColor('red');
  }

  changeColor(color: string): void {
    this.element.nativeElement.style.color = color;
  }
}
