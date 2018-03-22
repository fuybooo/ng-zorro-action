import {Injectable} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
/**
 * 重写nzModalService
 * 重写目的：1.提供默认的国际化支持;2.简写某些常用的弹框
 * 可以根据需求重写其他类型的简化调用方法
 */
@Injectable()
export class ModalService {
  static modalCount = 2802;
  option = {
    okText: '确定',
    cancelText: '取消',
    zIndex: 2802
  };
  constructor(
    private nzModalService: NzModalService,
  ) {}
  confirmSave(okFunction: Function, cancelFunction?: Function, content?: string) {
    this.popupConfirm('确定保存？', okFunction, cancelFunction, content);
  }
  confirmCancel(okFunction: Function, cancelFunction?: Function, content?: string) {
    this.popupConfirm('确定取消？', okFunction, cancelFunction, content);
  }
  confirmLeave(okFunction: Function, cancelFunction?: Function, content?: string) {
    this.popupConfirm('确定离开？', okFunction, cancelFunction, content);
  }
  confirm(options: any) {
    this.nzModalService.confirm(Object.assign(this.option, options));
  }
  confirmDelete(okFunction: Function, cancelFunction?: Function, content?: string) {
    this.popupConfirm('确定删除？', okFunction, cancelFunction, content);
  }
  popupConfirm(title: string, okFunction: Function, cancelFunction?: Function, content?: string) {
    const options: any = {onOk: okFunction, onCancel: cancelFunction};
    if (content) {
      options.content = content;
    }
    this.nzModalService.confirm(Object.assign({
      title,
    }, this.option, options));
  }
}
