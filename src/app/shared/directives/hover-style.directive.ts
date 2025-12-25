import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]',
  standalone: true
})
export class HoverStyleDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setShadow('0 10px 20px rgba(0,0,0,0.15)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setShadow('none');
  }

  private setShadow(shadow: string) {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', shadow);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'box-shadow 0.3s ease-in-out');
  }
}
