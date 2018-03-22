import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';

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
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }
  login() {
    // this.loginService.login({
    //   username: this.form.controls.username.value,
    //   password: this.form.controls.password.value,
    //   method: 'post'
    // }).subscribe((res: HttpRes) => {
    LoginService.saveLoginInfo({
      username: 'fuybooo'
    });
    this.router.navigate(['/main']);
    // });
  }
}
