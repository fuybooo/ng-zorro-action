import { Component, OnInit } from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {UserService} from './user.service';
import {Router} from '@angular/router';
import {CoreService} from '../../core/core.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  dataSet = [
    {
      abc: 'a',
      def: 'b'
    },
    {
      abc: 'ab',
      def: 'bn'
    },
    {
      abc: 'am',
      def: 'bj'
    },
    {
      abc: 'am',
      def: 'bj'
    },
  ];
  columns = [
    {
      title: '用户名',
      field: 'abc',
    },
    {
      title: 'def',
      field: 'def',
    },
  ];
  constructor(
    private nzModalService: NzModalService,
    private userService: UserService,
    private coreService: CoreService,
  ) {
  }

  ngOnInit() {
  }
  refreshStatus(dataSet) {
  }
  logout() {
    this.coreService.logout();
  }
}
