/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts"/>
var game = new ex.Engine({ displayMode: ex.DisplayMode.FullScreen });
var hello = new ex.Label('Hello Cordova', game.getWidth() / 2, 100, 'Segoe UI Light');
hello.color = ex.Color.White;
hello.fontSize = 50;
hello.textAlign = ex.TextAlign.Center;
game.add(hello);
/// <reference path="game.ts"/>
// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var Game;
(function (Game) {
    "use strict";
    var Application;
    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;
        function onDeviceReady() {
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
            // Start game
            game.start();
        }
        function onPause() {
            // TODO: This application has been suspended. Save application state here.
        }
        function onResume() {
            // TODO: This application has been reactivated. Restore application state here.
        }
    })(Application = Game.Application || (Game.Application = {}));
    window.onload = function () {
        Application.initialize();
    };
})(Game || (Game = {}));
//# sourceMappingURL=appBundle.js.map