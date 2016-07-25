
# [JG Boilerplate Material](http://www.joomgap.com/starters.html)

A JoomGap starter project to create a hybrid mobile app for Joomla! CMS, powered by AngularJS, Ionic Framework, Ionic Material and Material Design.

This project is the product of many years of iterative development and
combined community knowledge from open source projects. It does not impose a specific development
philosophy or framework, so you're free to architect your code in the
way that you want.

* Homepage: [http://www.joomgap.com/](http://www.joomgap.com/)
* Source: [https://github.com/JoomGap/JGBoilerplate-ionic-material](https://github.com/JoomGap/JGBoilerplate-ionic-material)
* Twitter: [@JoomGap](https://twitter.com/JoomGap)

## Quick start

Choose one of the following options:

1. Download the latest stable release from
   [joomgap.com](http://www.joomgap.com/joomgap-boilerplate.html).
2. Clone the git repo — `git clone
   https://github.com/JoomGap/JGBoilerplate.git` - and checkout the
   [tagged release](https://github.com/JoomGap/JGBoilerplate/releases)
   you'd like to use.
3. Create a new App in [PhoneGap build](https://build.phonegap.com).
4. Build and download APK (Android) or IPA (iOS) file.
5. Copy the file to your mobile phone and install it.
6. Have fun!

## How to implement Material Design

[Ionic Material](http://ionicmaterial.com/) is a great extension for Ionic SDK. It pours material design into your Ionic hybrid apps for all the sexy and no complexity. Now unlock the depth, motion & ink specs of Google's material design with easy-to-add-on classes. 

### How to add Ionic Material to a project

These are the command to enable [Ionic Material](http://ionicmaterial.com/) in a project:

       bower install ion-md-input
       
       bower install ionic-material
       
       bower install robotodraft

## How to integrate Joomla! CMS

JG Boilerplate includes [JoomGap Simple Library](https://github.com/JoomGap/JGSimple) to integrate Joomla! CMS.

A call to Joomla! can be simply implemented in this way:

    q = JgSimpleResource.get(url, params).$promise;

    q.then(function(response) {
        if ( (response) && (response.success) ) {
            console.log(response.data);
        }
    });

>>>>> Even though JG Simple Library is included to open a connect to Joomla! CMS, it still requires a server-side service, with an API, to access and provide any functionality. For instance, [JG JEDStarter](http://www.joomgap.com/docs/basics/jedstarter) implements a similar app based on JED's "Install from Web" service.
	
## Features

* Cordoba/PhoneGap mobile application.
* Includes:
  * Cordoba/PhoneGap project
  * PhoneGap (iOS / Android / Windows)
  * [PhoneGap build](https://build.phonegap.com)-ready configuration
  * AngularJS
  * AngularJS Animate
  * AngularJS Resource
  * AngularJS Sanitize
  * AngularJS UI Router
  * [JoomGap Simple Library](https://github.com/JoomGap/JGSimple)
  * Ionic Framework
  * ngCordova

## Useful Commands

Start a local development server for app dev/testing.

	ionic serve	
	
Compile Saas to build stylesheets.

	gulp
	
Updating Ionic. Update bower.json, driftyco/ionic-bower#....

	gulp install

## Mobile operating system support

* Android 5 and 6
* Apple iOS 8 and 9

*This doesn't mean that it cannot be used in older OS,
just that we'll ensure compatibility with the ones mentioned above.*

## Screenshots

### Welcome screen - Material Design

![Welcome screen - Android](http://cdn.joomgap.com/images/JG-Boilerplate-Material/JG-Boilerplate-Material-00.jpg)

### Material Design - Menu

![Material Design - Menu - Android](http://cdn.joomgap.com/images/JG-Boilerplate-Material/JG-Boilerplate-Material-00-Menu.jpg)

### Material Design - More color

![Material Design - More color - Android](http://cdn.joomgap.com/images/JG-Boilerplate-Material/JG-Boilerplate-Material-01-More-Color.jpg)

### Material Design - Material Buttons

![Material Design - Material Buttons - Android](http://cdn.joomgap.com/images/JG-Boilerplate-Material/JG-Boilerplate-Material-02-Material-Buttons.jpg)

### Material Design - Ionic Buttons

![Material Design - Ionic Buttons - Android](http://cdn.joomgap.com/images/JG-Boilerplate-Material/JG-Boilerplate-Material-03-Ionic-Buttons.jpg)

### Material Design - Headers

![Material Design - Headers - Android](http://cdn.joomgap.com/images/JG-Boilerplate-Material/JG-Boilerplate-Material-04-Headers.jpg)

### Material Design - Footers and Tabs

![Material Design - Footers and Tabs - Android](http://cdn.joomgap.com/images/JG-Boilerplate-Material/JG-Boilerplate-Material-05-Footers-Tabs.jpg)

### Material Design - Buttons Bars and Plain List

![Material Design - Buttons Bars and Plain List - Android](http://cdn.joomgap.com/images/JG-Boilerplate-Material/JG-Boilerplate-Material-06-Button-bars-Plain-list.jpg)

### Material Design - Icon List and Button List

![Material Design - Icon List and Button List - Android](http://cdn.joomgap.com/images/JG-Boilerplate-Material/JG-Boilerplate-Material-08-Icon-button-list.jpg)

### Material Design - Avatar List and Thumbnail List

![Material Design - Avatar List and Thumbnail List - Android](http://cdn.joomgap.com/images/JG-Boilerplate-Material/JG-Boilerplate-Material-09-Avatar-thumbnail-list.jpg)

### Material Design - Inset List and Cards

![Material Design - Inset List and Cards - Android](http://cdn.joomgap.com/images/JG-Boilerplate-Material/JG-Boilerplate-Material-10-Inset-Card-list.jpg)

### Material Design - Forms

![Material Design - Forms - Android](http://cdn.joomgap.com/images/JG-Boilerplate-Material/JG-Boilerplate-Material-11-Form.jpg)

### Material Design - Ionic Extensions / Loading, Pop-up, Action Sheet, Modal and Popover

![Material Design - Ionic Extensions - Android](http://cdn.joomgap.com/images/JG-Boilerplate-Material/JG-Boilerplate-Material-12-Extensions.jpg)

### Material Design - List Motions

![Material Design - List Motions - Android](http://cdn.joomgap.com/images/JG-Boilerplate-Material/JG-Boilerplate-Material-14-Motion-Lists.jpg)

### Material Design - Motion Elements

![Material Design - Motion Elements - Android](http://cdn.joomgap.com/images/JG-Boilerplate-Material/JG-Boilerplate-Material-15-Hardware-Accelerated-Motion.jpg)

### Material Design - Inks

![Material Design - Inks - Android](http://cdn.joomgap.com/images/JG-Boilerplate-Material/JG-Boilerplate-Material-16-Ink.jpg)

## License

The code is available under the [GNU GENERAL PUBLIC LICENSE Version 3](LICENSE).

## Feedback

We welcome feedback! Leave a comment by clicking the icon in upper right corner of the banner.

* [We are always open for a quick chat!](http://www.joomgap.com/more/contact-us.html)
* [Facebook](https://twitter.com/joomgap)
* [Twitter](https://www.facebook.com/joomgap)
* [RSS](http://www.joomgap.com/more/blog.feed?type=rss)
* Post issues and pull requests on JoomGap github repositories.

## Copyright

Copyright © 2007-2016 [Extly Extensions](http://www.extly.com/) - All Rights Reserved.

Joomla! name is used under a limited license from Open Source Matters in the United States and other countries. Extly.com is not affiliated with or endorsed by Open Source Matters or the Joomla! project.
