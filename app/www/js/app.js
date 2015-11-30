// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'rapidMobile' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'rapidMobile.controllers' is found in controllers.js
angular.module('rapidMobile', ['ionic', 'rapidMobile.controllers', 'rapidMobile.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider 

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'LoginCtrl',
    onEnter: function($state, Auth){
        if(!Auth.isLoggedIn()){
           $state.go('login');
        }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html'
      }
    }
  })

  .state('login', {
    url: "/login",
    templateUrl: "components/user/login.html",
    controller: 'LoginCtrl'
  })
  
  .state('app.mis-flown', {
    url: '/mis/flown',
    views: {
      'menuContent': {
        templateUrl: 'components/mis/flown.html'
      }
    }
  })
  .state('app.mis-sales', {
    url: '/mis/sales',
    views: {
      'menuContent': {
        templateUrl: 'components/mis/sales.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
