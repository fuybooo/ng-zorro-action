# NgZorroAction
1. 不断更新自己的项目构建，不要停留在固定的阶段，不要想着用一个经典的模版去适应未来的变化，那是不现实的。
### 在新的电脑环境下搭建最新的angular + 最新的ng-zorro
1. 创建项目：ng new ng-zorro-action
2. 安装ng-zorro-antd
3. 测试ng-zorro
### 项目基础目录
    ├── README.md 项目简介
    ├── e2e 端测
    │   ├── app.e2e-spec.ts
    │   ├── app.po.ts
    │   └── tsconfig.e2e.json
    ├── karma.conf.js 测试配置
    ├── package-lock.json
    ├── package.json 项目包管理文件
    ├── protractor.conf.js 端测配置文件
    ├── src 所有的资源文件夹
    │   ├── app 应用文件夹
    │   │   ├── app-route.ts 主路由
    │   │   ├── app.component.html 主组建模版
    │   │   ├── app.component.less 主组建样式
    │   │   ├── app.component.ts 主组建
    │   │   ├── app.module.ts 主模块
    │   │   ├── core 核心模块文件夹
    │   │   │   ├── core.module.ts 核心模块
    │   │   │   ├── core.service.ts 核心服务
    │   │   │   ├── http-interceptor.service.ts 拦截器服务
    │   │   │   ├── message.service.ts 弹出提示服务
    │   │   │   ├── modal.service.ts 弹出层服务
    │   │   │   ├── urls.model.ts 所有url模型
    │   │   │   └── util.service.ts 公共服务
    │   │   ├── login
    │   │   │   ├── login-reset-password
    │   │   │   │   ├── login-reset-password.component.html
    │   │   │   │   ├── login-reset-password.component.less
    │   │   │   │   └── login-reset-password.component.ts
    │   │   │   ├── login-route.ts
    │   │   │   ├── login.component.html
    │   │   │   ├── login.component.less
    │   │   │   ├── login.component.ts
    │   │   │   ├── login.module.ts
    │   │   │   └── login.service.ts
    │   │   ├── main
    │   │   │   ├── main-route.ts
    │   │   │   ├── main.component.html
    │   │   │   ├── main.component.less
    │   │   │   ├── main.component.ts
    │   │   │   ├── main.module.ts
    │   │   │   └── user
    │   │   │       ├── user-route.ts
    │   │   │       ├── user.component.html
    │   │   │       ├── user.component.less
    │   │   │       ├── user.component.ts
    │   │   │       ├── user.module.ts
    │   │   │       └── user.service.ts
    │   │   └── shared 共享文件夹
    │   │       ├── component 共享组建
    │   │       │   └── table 共享表格组建
    │   │       │       ├── table.component.html
    │   │       │       ├── table.component.less
    │   │       │       └── table.component.ts
    │   │       ├── directive 指令文件夹
    │   │       │   └── button-click.directive.ts
    │   │       ├── guard 守卫文件夹
    │   │       │   └── auth-guard.service.ts
    │   │       ├── shared.model.ts 共享模型
    │   │       └── shared.module.ts 共享模块
    │   ├── assets 资源文件夹 --字体、公共样式、图片等
    │   ├── environments 环境配置文件
    │   │   ├── environment.prod.ts 生产环境
    │   │   └── environment.ts 开发环境
    │   ├── favicon.ico 网站图标
    │   ├── index.html html入口
    │   ├── main.ts 程序入口
    │   ├── polyfills.ts 填充库
    │   ├── styles.less 样式入口
    │   ├── test.ts 测试入口
    │   ├── tsconfig.app.json 配置文件
    │   ├── tsconfig.spec.json 测试配置文件
    │   └── typings.d.ts 类型定义文件
    ├── tsconfig.json 配置文件
    ├── tslint.json 格式规范定义文件
    └── yarn.lock

