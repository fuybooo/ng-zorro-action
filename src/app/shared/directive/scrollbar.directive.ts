import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
declare let $: any;

/**
 * 全局滚动条指令
 */
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
  /**
   * 是否创建滚动条
   * @type {boolean}
   */
  @Input() createScrollbar = true;
  /**
   * 滚动条的配置
   * @type {{}}
   */
  @Input() options: any = {};
  constructor(private elementRef: ElementRef) { }
  ngAfterViewInit() {
    Object.assign(this.options, this.defaultOptions);
    if (this.createScrollbar) {
      $(this.elementRef.nativeElement).mCustomScrollbar(this.options);
    }
  }
}
