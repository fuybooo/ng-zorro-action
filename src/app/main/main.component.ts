import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CoreService} from '../core/core.service';
import {LoginService} from '../login/login.service';
import {navList} from './main.model';
declare let $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent implements OnInit {
  isCollapsed = false;
  currentItem;
  projectName = '管理系统';
  navList = [];
  breadcrumbList = [];
  constructor(
    private router: Router,
    private coreService: CoreService,
  ) { }

  ngOnInit() {
    this.initNavList();
    // 路由改变时,改变导航栏状态
    this.coreService.routeChangeEvent.subscribe(() => {
      this.initNavList();
    });
  }
  initNavList() {
    this.navList = $.extend(true, [], navList);
    this.navList.forEach(item => {
      if (item.children) {
        item.children.forEach(child => {
          if (child.route === this.router.routerState.snapshot.url) {
            child.isActive = true;
            item.child = true;
            this.currentItem = child;
            this.breadcrumbList = [item, this.currentItem];
          } else {
            child.isActive = false;
          }
        });
      } else if (item.route === this.router.routerState.snapshot.url) {
        item.isActive = true;
        this.currentItem = item;
        this.breadcrumbList = [this.currentItem];
      } else {
        item.isActive = false;
      }
    });
  }
  switchSide() {
    this.isCollapsed = !this.isCollapsed;
  }
  onClickItem(item) {
    this.currentItem = item;
    this.navList.map(value => {
      value.isActive = (item.code === value.code);
      if (value.children) {
        value.children.map( v => v.isActive = item.code === v.code);
      }
    });
    this.router.navigate([item.route]);
  }
  logout() {
    this.coreService.logout();
  }

}
