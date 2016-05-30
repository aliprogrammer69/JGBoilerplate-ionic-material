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

/* globals angular,cordova, app */

"use strict";

app.controller('MotionCtrl', function ($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
  var fab = document.getElementById('fab');

  $scope.moveFab = function (dir) {
    fab.style.display = 'none';
    fab.className = fab.className.replace('button-fab-top-left', '');
    fab.className = fab.className.replace('button-fab-top-right', '');
    fab.className = fab.className.replace('button-fab-bottom-left', '');
    fab.className = fab.className.replace('button-fab-bottom-right', '');
    fab.className += ' button-fab-' + dir;
    $timeout(function () {
      fab.style.display = 'block';
    }, 100);
  };

  $scope.motionFab = function (type) {
    var shouldAnimate = false;
    var classes = type instanceof Array ? type : [type];
    for (var i = 0; i < classes.length; i++) {
      fab.classList.toggle(classes[i]);
      shouldAnimate = fab.classList.contains(classes[i]);
      if (shouldAnimate) {
        (function (theClass) {
          $timeout(function () {
            fab.classList.toggle(theClass);
          }, 300);
        })(classes[i]);
      }
    }
  };

  var reset = function () {
    var inClass = document.querySelectorAll('.in');
    for (var i = 0; i < inClass.length; i++) {
      inClass[i].classList.remove('in');
      inClass[i].removeAttribute('style');
    }
    var done = document.querySelectorAll('.done');
    for (var i = 0; i < done.length; i++) {
      done[i].classList.remove('done');
      done[i].removeAttribute('style');
    }
    var ionList = document.getElementsByTagName('ion-list');
    for (var i = 0; i < ionList.length; i++) {
      var toRemove = ionList[i].className;
      if (/animate-/.test(toRemove)) {
        ionList[i].className = ionList[i].className.replace(/(?:^|\s)animate-\S*(?:$|\s)/, '');
      }
    }
  };

  $scope.ripple = function () {
    reset();
    document.getElementsByTagName('ion-list')[0].className += ' animate-ripple';
    setTimeout(function () {
      ionicMaterialMotion.ripple();
    }, 500);
  };

  $scope.fadeSlideInRight = function () {
    reset();
    document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in-right';
    setTimeout(function () {
      ionicMaterialMotion.fadeSlideInRight();
    }, 500);
  };

  $scope.fadeSlideIn = function () {
    reset();
    document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in';
    setTimeout(function () {
      ionicMaterialMotion.fadeSlideIn();
    }, 500);
  };

  $scope.blinds = function () {
    reset();
    document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
    setTimeout(function () {
      ionicMaterialMotion.blinds();
    }, 500);
  };

  $scope.blinds();
  //ionic.material.ink.displayEffect(); ionicMaterialMotion
  ionicMaterialInk.displayEffect();
});
