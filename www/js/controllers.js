angular.module('starter.controllers', [])

.run(function($rootScope, $http) {

    //var server = mw.var('server'),
    //    url = 'macketing/v2?ak={AK}&';
    //$http.get('');
})
.controller('DashCtrl', function($scope) {

    $scope.share = function() {

      //Wechat.setOptions({
      //  appId: 'mwadmin' // your app id here
      //});

      Wechat.isInstalled(function (installed) {

        //alert("Wechat installed: " + (installed ? "Yes" : "No"));

        Wechat.share({
          text: "This is just a plain string",
          scene: Wechat.Scene.TIMELINE   // share to Timeline
        }, function () {
          alert("Success");
        }, function (reason) {
          alert("Failed: " + reason);
        });


        var scope = "snsapi_userinfo";
        Wechat.auth(scope, function (response) {
          // you may use response.code to get the access token.

          alert('authed');

        }, function (reason) {
          alert("Failed: " + reason);
        });

      }, function (reason) {
        alert("Failed: " + reason);
      });
    }

  })

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true,
    enableWifiDownload: true,
    enablePush: false
  };
});
