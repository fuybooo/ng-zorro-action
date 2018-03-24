import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';
import {HttpRes} from '../shared/shared.model';
declare let $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private messageService: NzMessageService,
              private loginService: LoginService) {
  }

  ngOnInit() {
    const cookieRemember = $.cookie('remember') === 'true';
    this.form = this.fb.group({
      username: [cookieRemember ? ($.cookie('username') || '') : '', [Validators.required]],
      password: [cookieRemember ? ($.cookie('password') || '') : '', [Validators.required]],
      remember: [cookieRemember],
    });
  }
  login() {
    this.loginService.login({
      username: 'admin',
      password: 'adminA',
      method: 'post'
    }).subscribe((res: HttpRes) => {
      LoginService.saveLoginInfo({
        username: 'fuybooo'
      });
      const cookieConfig = {expires: 7};
      $.cookie('username', 'admin', cookieConfig);
      $.cookie('password', '123456', cookieConfig);
      $.cookie('permission', '1', cookieConfig);
      $.cookie('remember', this.form.get('remember').value, cookieConfig);
      this.router.navigate(['/main']);
    });
  }
}
