import {Injectable} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {apiPathKey} from '../shared/shared.model';
import {urls} from './urls.model';

@Injectable()
export class UtilService {
  static urls = urls;
  constructor(private http: HttpClient) {
  }

  /**
   * 获取请求的url
   * @param urlKey
   * @returns {string}
   */
  static getUrl(urlKey) {
    const getSafeStr = (str: string) => {
      if (str.slice(-1) === '/') {
        return str.slice(0, str.length - 2);
      } else {
        return str;
      }
    };
    let path = getSafeStr(environment.apiPath);
    const localStorage_apiPath = localStorage.getItem(apiPathKey);
    if (environment.apiPathChangeable && localStorage && localStorage_apiPath) {
      environment.apiPath = path = getSafeStr(localStorage_apiPath);
    }
    return environment.isStatic ?
      (environment.deployPath + '/assets/mock' + UtilService.urls[urlKey] + '.json') : (path + UtilService.urls[urlKey] + '/');
  }

  /**
   * 将参数对象转化为查询参数
   */
  static getParams(paramsObject): HttpParams {
    let params = new HttpParams();
    for (const p in paramsObject) {
      if (paramsObject.hasOwnProperty(p)) {
        if (paramsObject[p] !== null) {
          let value = paramsObject[p];
          if (typeof value === 'string') {
            value = value.trim();
          }
          params = params.set(p, value);
        }
      }
    }
    return params;
  }

  /**
   * 将参数对象转化为查询参数
   */
  static getWholeParams(paramsObject) {
    return {params: UtilService.getParams(paramsObject)};
  }

  /**
   * 去空格后判断是否为空
   * @param {FormControl} control
   * @returns {any}
   */
  static required(control: FormControl) {
    if (typeof control.value === 'string') {
      return control.value.trim().length === 0 ? {required: true} : null;
    } else if (control.value instanceof Array) {
      return control.value.length === 0 ? {required: true} : null;
    } else {
      return null;
    }
  }

  /**
   * 验证控件的值是否符合要求
   * @param specialCharacter 特殊字符正则表达式
   * @param mode 如何进行校验
   * true：正则匹配通过则字符串不符合要求 - 例如：验证控件不允许输入特殊字符
   * false：正则匹配不通过则字符串不符合要求 - 例如：验证控件只能输入某些字符
   * @returns {(control:FormControl)=>any}
   */
  static getSpecialCharacterValidator(specialCharacter: RegExp, mode = true) {
    return function (control: FormControl) {
      if (control.value && control.value.trim() !== '') {
        if (mode) {
          if (specialCharacter.test(control.value.trim())) {
            return {error: true, specialCharacter: true};
          } else {
            return null;
          }
        } else {
          if (!specialCharacter.test(control.value.trim())) {
            return {error: true, specialCharacter: true};
          } else {
            return null;
          }
        }
      }
    };
  }

  /**
   * 判断控件与本地的list是否重复
   * @param list
   * @param key
   * @returns {(control:FormControl)=>{error: boolean, duplicated: boolean}}
   */
  static getIsDupValidator(list, key) {
    return function (control: FormControl) {
      if (control.value && control.value.trim() !== '') {
        // 判断控件是否重复
        for (const item of list) {
          if (control.value === item[key]) {
            return {error: true, duplicated: true};
          }
        }
      }
    };
  }
  /**
   * 判断是否为空对象即 {}
   */
  static isEmptyObject(object) {
    let hasPro = false;
    if (object && typeof object === 'object') {
      for (const i in object) {
        if (object.hasOwnProperty(i)) {
          hasPro = true;
          break;
        }
      }
      // 另一种方案
      // hasPro = JSON.stringify(object) !== '{}';
    }
    return !hasPro;
  }

  /**
   * 远程验证表单中的值是否与数据库中的重复
   * @param url
   * @param extend
   * @param field
   * @returns {(control:FormControl)=>any}
   */
  getSyncValidator(url, extend = {}, field = 'value') {
    const _this = this;
    return function (control: FormControl) {
      return Observable.create((observer) => {
        _this.http.get(UtilService.getUrl(url), {
          params: UtilService.getParams(Object.assign({
            [field]: control.value.trim() || ''
          }, extend))
        }).subscribe((res: any) => {
          if (res.code === 200) {
            if (res.data.isExist) {
              observer.next({error: true, duplicated: true});
            } else {
              observer.next(null);
            }
          } else {
            observer.next(null);
          }
          observer.complete();
        });
      });
    };
  }

}
