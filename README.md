Magicwindow JSSDK Example
=====================

本示例是魔窗官方Demo，基于Ionic(Cordova)开发

## 如何启动项目

启动此项目需要安装NodeJS以及Ionic命令行工具，NodeJS的安装请查看[NodeJS官网](https://nodejs.org/en/), 关于Ionic-cli命令行工具可以查看[Ionic CLI 文档](https://github.com/driftyco/ionic-cli)

首先，请确保已经在您的计算机上安装了NodeJS，安装NodeJS后，使用npm安装ionic:

```bash
$ npm install -g ionic
```

然后，在此项目源代码根目录下启动项目：

```bash
$ ionic emulate android # 模拟Android平台
$ ionic emulate ios # 模拟iOS平台
```
## 集成Magicwindow Native SDK

JSSDK必须与MagicWindow Native SDK配合使用，那么，如何在Hybrid App中如何集成MagicWindow Native SDK呢？

1. 集成Magicwindow Android SDK: 
正在完善...

2. 集成Magicwindow iOS SDK:
正在完善...

## 集成MagicWindow JSSDK

通过CDN使用JSSDK:
```html
<script src="http//magicwindow.com/code/mw-sdk.min.js"></script>
```

使用Bower下载JSSDK:
```bash
$ bower install mw-sdk --save
```

使用Npm下载JSSDK:
```bash
$ npm install mw-sdk --save
```

## Custom URL Scheme
- mwjssdk://
- [mwjssdk://tab/dash](mwjssdk://tab/dash) (所有魔窗位)
- [mwjssdk://tab/trips](mwjssdk://tab/trips) (自助游)
- [mwjssdk://tab/trips/10000](mwjssdk://tab/trips/10000) (自助游 > 阿里,一个人的转山路)
- [mwjssdk://tab/trips/10001](mwjssdk://tab/trips/10001) (自助游 > 自驾横穿美国20天)
- [mwjssdk://tab/trips/10002](mwjssdk://tab/trips/10002) (自助游 > 希腊&意大利自由行14天)
- [mwjssdk://tab/trips/10003](mwjssdk://tab/trips/10003) (自助游 > 长白山~红海滩逐秋)
- [mwjssdk://tab/trips/10004](mwjssdk://tab/trips/10004) (自助游 > 走在西行向北的路上)
- [mwjssdk://tab/account](mwjssdk://tab/account) (设置)

## 更多
如果您想了解关于Magicwindow JSSDK更多的资料，请前往[MagicWindow JSSDK](https://github.com/magicwindow/mw-jssdk)的Repository。