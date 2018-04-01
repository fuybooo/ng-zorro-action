import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
declare let $: any;
@Directive({
  selector: '[appScrollbar]'
})
export class ScrollbarDirective implements AfterViewInit {
  defaultOptions = {
    axis: 'y',
    theme: 'minimal-dark',
    autoDraggerLength: true,
    scrollInertia: 100
  };
  @Input() createScrollbar = true;
  @Input() options: any = {};
  constructor(private elementRef: ElementRef) { }
  ngAfterViewInit() {
    Object.assign(this.options, this.defaultOptions);
    if (this.createScrollbar) {
      $(this.elementRef.nativeElement).mCustomScrollbar(this.options);
    }
  }
}
