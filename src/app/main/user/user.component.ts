import { Component, OnInit } from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {UserService} from './user.service';
import {ModalService} from '../../core/modal.service';
import {Router} from '@angular/router';
import {CoreService} from '../../core/core.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  params = {
    search: ''
  };
  modal;
  constructor(
    private nzModalService: NzModalService,
    private userService: UserService,
    private coreService: CoreService,
  ) {
  }

  ngOnInit() {
  }
  logout() {
    this.coreService.logout();
  }
}
