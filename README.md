# Wisconsin Land Cover Mapping Field Validation Tool Mobile Application

The Wisconsin State Cartographer's office at the University of Wisconsin-Madison is leading a statewide land cover mapping project beginning in the spring of 2014. The land cover project will utilize satellite imagery from 2012-2014 to map the distribution of 30+ broad land cover classes found in the state.  Examples include deciduous forests, evergreen forests, wetlands, barren lands, shrubland, urban, agriculture, and so on.
To assess the accuracy of the mapping, field agents must physically visit several thousand field sites scattered across the state. The Wisconsin Land Cover Mapping Field Validation Tool will be a device agnostic application that will display on an interactive map the locations that field staff are assigned to validate. There will be two major components to our project, a web application and a mobile application. This repository holds the initial version of the mobile application.The web application will be used in an office setting to manage assignments and view collected data. Based on the assignments, staff will travel to locations and collect data using the mobile application. Once on location, the validation tool will provide functionality to document what land cover actually exists at the site and to take 1-3 photos.The field staff will be able to cache collected data for many sites on their device and synchronize with a central database at a later time. 

The web application can be found at:

https://github.com/Wisc-Land-Map-Tool/Wisc-Land-Web-App

# Set up for local use

Cordova 3.4 is being used for this application. For tutorials on how to install the Cordova CLI, see the following link:

http://cordova.apache.org/docs/en/3.4.0/guide_cli_index.md.html#The%20Command-Line%20Interface

The linked site also includes guides for getting started and what dependencies are needed.


Clone the repository to your local machine with the following command:

git clone https://github.com/Wisc-Land-Map-Tool/Wisc-Land-Mobile-App

Navigate into directory and ensure you have emulators set up for iOS and Android:


cordova emulate iOS

cordova emulate Android

The emulators will run the corresponding platforms.

To run the application in a web browser instead of an emulator, find the following file:

/www/index.html

Run this html file in a web browser to view the application. For development purposes, the application is currently calling the web application, assuming that it is running a server on the same machine at localhost. In order to test at this stage, the web application found at:

https://github.com/Wisc-Land-Map-Tool/Wisc-Land-Web-App

must be running simultaneously to respond to the client calls of this application.

If running in the browser, security must be disabled by using --disable-web-security in the url box (Chrome) for making cross origin AJAX calls in our application.

# Use of application

The workflow for entering data is as follows:

Log in using your credentials

A map should show up with your assigned points, you can browse the map.

Once a polygon is clicked, a data entry form will show up.

Enter data using the data entry points.  Tree specific fields should only show up when the land type is forest, or wetland->forested wetland.

After clicking submit, you should return to the map.


# Running tests

To run the tests, go to

/www/js/test.html

To see code coverage, check the code coverage check on the tests page.


