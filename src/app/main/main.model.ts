export interface Nav {
  label: string;
  code: string;
  route: string;
  iconCls: any;
  isActive?: boolean;
  children?: Nav[];
}
export const navList: Nav[] = [
  {
    label: 'Dashboard',
    code: 'dashboard',
    route: '/main',
    iconCls: {'anticon-area-chart': true},
  },
  {
    label: '我的工作',
    code: 'workList',
    route: '/main/work',
    iconCls: {'anticon-bars': true},
    isActive: true
  },
  {
    label: '人员管理',
    code: 'userManagement',
    route: '/main/user',
    iconCls: {'anticon-team': true},
  },
  {
    label: '商城',
    code: 'mall',
    route: '/main/mall',
    iconCls: {'anticon-shop': true},
  },
  {
    label: '组件',
    code: 'component',
    route: '/main/example',
    iconCls: {'anticon-appstore-o': true},
    children: [
      {
        label: '表格',
        code: 'c_table',
        route: '/main/example',
        iconCls: {'anticon-table': true}
      },
      {
        label: '表单',
        code: 'c_form',
        route: '/main/example/form',
        iconCls: {'anticon-form': true}
      },
    ]
  }
];
