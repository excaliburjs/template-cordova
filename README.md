# Excalibur Cordova Example

## Prerequisites

- Visual Studio 2015 Community or higher
- Apache Tools for Cordova
- TypeScript for Visual Studio

## Launch

1. `npm install`
2. Launch (F5)

The npm postinstall task copies the Excalibur distribution files to the **www/scripts/vendor** directory. You
could just as easily use a Gulp or other task runner to do the bundling.

The TypeScript files are in the **scripts** folder, which get bundled into the **www/scripts/appBundle.js** file.
You can learn more about using TypeScript with Cordova at: http://taco.visualstudio.com/en-us/docs/tutorial-typescript/