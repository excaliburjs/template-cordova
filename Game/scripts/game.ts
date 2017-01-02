/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts"/>

var game = new ex.Engine({ displayMode: ex.DisplayMode.FullScreen });
var hello = new ex.Label('Hello Cordova', game.getWidth() / 2, 100, 'Segoe UI Light');
hello.color = ex.Color.White;
hello.fontSize = 50;
hello.textAlign = ex.TextAlign.Center;

game.add(hello);