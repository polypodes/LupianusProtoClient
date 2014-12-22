# Lupianus Client Prototype

[Ionic](http://ionicframework.com/) based hybrid HTML5 app prototype

## Demo

Work in progreess: [polypodes.github.io/LupianusProtoClient](http://quirktools.com/screenfly/#u=http%3A//polypodes.github.io/LupianusProtoClient/client/www/index.html%23/app/carte&w=375&h=667&a=37)

## Cordova / Ionic

Client app generated via `ionic start client sidemenu`

### Installed Corodova plugins :

* org.apache.cordova.device" via plugin registry
* org.apache.cordova.console" via plugin registry
* com.ionic.keyboard" via plugin registry

### Some quick tips:
   
* cd into your project: `$ cd client`
* Setup this project to use Sass: `ionic setup sass`
* Develop in the browser with live reload: `ionic serve`
* Add a platform (ios or Android): `ionic platform add ios [android]`

Note: iOS development requires OS X currently
See the Android Platform Guide for full Android installation instructions:
https://cordova.apache.org/docs/en/edge/guide_platforms_android_index.md.html

* Build your app: `ionic build <PLATFORM>`
* Simulate your app: `ionic emulate <PLATFORM>`
* Run your app on a device: `ionic run <PLATFORM>`
* Package an app using Ionic package service: `ionic package <MODE> <PLATFORM>`

For more help use `ionic --help` or visit the Ionic docs: http://ionicframework.com/docs


## Github-Pages auto-publication based on `master` commits


Set up your `.git/config` file this way:

```
[remote "origin"]
	url = git@github.com:polypodes/LupianusProtoClient.git
	fetch = +refs/heads/*:refs/remotes/origin/*
	push = +refs/heads/master:refs/heads/gh-pages
	push = +refs/heads/master:refs/heads/master
```

Then `git push` will keep `gh-pages` branch mirrored on `master`.

## Licence

[MIT](LICENSE)
