import {Injectable} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';

/**
 * 重写nzMessageService
 * 重写目的: 1.提供默认的国际化支持;2.提供一个默认的持续时间，3秒后提示自动消失
 */
@Injectable()
export class MessageService {
  option = {
    nzDuration: 3000
  };
  constructor(private messageService: NzMessageService,
  ) {}
  loading(content: string, options: any = this.option) {
    this.create('info', content, options);
  }
  success(content: string, options: any = this.option) {
    this.create('success', content, options);
  }
  error(content: string, options: any = this.option) {
    this.create('error', content, options);
  }
  warning(content: string, options: any = this.option) {
    this.create('warning', content, options);
  }
  info(content: string, options: any = this.option) {
    this.create('info', content, options);
  }
  html(content: string, options: any = this.option) {
    this.create('html', content, options);
  }
  private create(method, content, options) {
    this.messageService[method](content, options);
  }
}
