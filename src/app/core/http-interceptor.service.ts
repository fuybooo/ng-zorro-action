import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/do';

/**
 * 请求监听拦截器
 * ==
 * 监听所有请求，进行请求成功失败的统一处理
 */
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private router: Router) {
  }

  paramFormat = function (obj) {
    let query = '', name, value;
    for (name in obj) {
      if (obj.hasOwnProperty(name) && obj[name] !== null) {
        value = obj[name];
        if (value !== undefined && value !== null) {
          query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }
      }
    }
    return query.length ? query.substring(0, query.length - 1) : query;
  };

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({withCredentials: true});
    if (req.method === 'POST') {
      req = req.clone({body: this.paramFormat(req.body)}).clone(
        {setHeaders: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
      );
    }
    // 在静态环境中,需要将post请求转化为get请求
    if (environment.isStatic) {
      if (req.method === 'POST') {
        req = req.clone({method: 'GET'});
      }
    }
    return next.handle(req).do((res: HttpResponse<any>) => {
      // 请求成功
    }, (err: HttpErrorResponse) => {
      if (err.status === 403) {
        // 跳转到登录页面
        this.router.navigate(['/login']);
      }
    });
  }

}
