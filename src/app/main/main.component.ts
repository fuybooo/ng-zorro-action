import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CoreService} from '../core/core.service';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  isCollapsed = false;
  isImgCollapsed = false;
  currentItem;
  currentUser;
  navList: any = [
    {
      label: '新建任务',
      code: 'taskCreate',
      route: '/main/taskCreate',
      iconCls: {'anticon-file-add': true},
      isActive: false
    },
    {
      label: '任务列表',
      code: 'taskList',
      route: '/main',
      iconCls: {'anticon-bars': true},
      isActive: true
    },
    {
      label: '人员管理',
      code: 'userManagement',
      route: '/main/user',
      iconCls: {'anticon-team': true},
      isActive: false
    },
    {
      label: '测试新功能',
      code: 'test',
      route: '/main/test',
      iconCls: {'anticon-frown': true},
      isActive: false
    }
  ];
  constructor(
    private router: Router,
    private coreService: CoreService,
  ) { }

  ngOnInit() {
    this.currentUser = LoginService.getLoginInfo();
    if (this.currentUser.role === '1') {
      this.navList = this.navList.filter(v => v.code !== 'userManagement');
    }
    if (this.currentUser && !this.currentUser.displayname) {
      this.currentUser.displayname = this.currentUser.username;
    }
    this.initNavList();
    // 路由改变时,改变导航栏状态
    this.coreService.routeChangeEvent.subscribe(() => {
      this.initNavList();
    });
  }
  initNavList() {
    this.navList.forEach(item => {
      if (item.route === this.router.routerState.snapshot.url) {
        item.isActive = true;
        this.currentItem = item;
      } else {
        item.isActive = false;
      }
    });
  }
  switchSide() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      // 图片延迟变小
      setTimeout(() => this.isImgCollapsed = true, 150);
    } else {
      // 直接变大
      this.isImgCollapsed = false;
    }
  }
  onClickItem(item) {
    this.currentItem = item;
    this.navList.map(value => value.isActive = (item.code === value.code));
    this.router.navigate([item.route]);
  }
  logout() {
    this.coreService.logout();
  }

}
