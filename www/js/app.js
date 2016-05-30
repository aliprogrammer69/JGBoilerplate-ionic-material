/*!
 * @package:  JG Boilerplate Ionic Material
 *
 * @author    Name: Andrea Gentil & Anibal Sanchez, JoomGap.com
 *            Email: team[at]joomgap.com
 *            Url: http://www.JoomGap.com
 *
 * @copyright Copyright (C) 2015 - 2016 Andrea Gentil & Anibal Sanchez.
 *            All rights reserved.
 *
 * @license   http://www.gnu.org/licenses/gpl-3.0.html GNU/GPL
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 */

/* globals angular,cordova */

"use strict";

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material']);

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if ((window.cordova) && (window.cordova.plugins.Keyboard)) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      window.StatusBar.styleDefault();
    }
  });
})

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('app.lists', {
      url: '/lists',
      views: {
        'menuContent': {
          templateUrl: 'templates/lists.html',
          controller: 'ListsCtrl'
        }
      }
    })

    .state('app.ink', {
      url: '/ink',
      views: {
        'menuContent': {
          templateUrl: 'templates/ink.html',
          controller: 'InkCtrl'
        }
      }
    })

    .state('app.motion', {
      url: '/motion',
      views: {
        'menuContent': {
          templateUrl: 'templates/motion.html',
          controller: 'MotionCtrl'
        }
      }
    })

    .state('app.components', {
      url: '/components',
      views: {
        'menuContent': {
          templateUrl: 'templates/components.html',
          controller: 'ComponentsCtrl'
        }
      }
    })

    .state('app.extensions', {
      url: '/extensions',
      views: {
        'menuContent': {
          templateUrl: 'templates/extensions.html',
          controller: 'ExtensionsCtrl'
        }
      }
    })
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/components');
});
