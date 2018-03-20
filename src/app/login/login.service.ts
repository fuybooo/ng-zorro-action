import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CoreService} from '../core/core.service';
import {MessageService} from '../core/message.service';
import {loginInfoKey} from '../shared/shared.model';
import {UtilService} from '../core/util.service';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient,
              private coreService: CoreService,
              private messageService: MessageService) {
  }

  static saveLoginInfo(data) {
    localStorage.setItem(loginInfoKey, JSON.stringify(data));
  }

  static getLoginInfo() {
    return JSON.parse(localStorage.getItem(loginInfoKey));
  }

  login(params) {
    return this.http.post(UtilService.getUrl('login'), params);
  }
}
