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

app.controller('AppCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  var navIcons = document.getElementsByClassName('ion-navicon');
  for (var i = 0; i < navIcons.length; i++) {
    navIcons.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  }

  var fab = document.getElementById('fab');
  fab.addEventListener('click', function () {
    //location.href = 'https://twitter.com/satish_vr2011';
    window.open('https://twitter.com/satish_vr2011', '_blank');
  });

  // .fromTemplate() method
  var template = '<ion-popover-view>' +
    '   <ion-header-bar>' +
    '       <h1 class="title">My Popover Title</h1>' +
    '   </ion-header-bar>' +
    '   <ion-content class="padding">' +
    '       My Popover Contents' +
    '   </ion-content>' +
    '</ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });
  $scope.closePopover = function () {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function () {
    $scope.popover.remove();
  });
});
