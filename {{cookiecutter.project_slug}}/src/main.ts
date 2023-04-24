import createjs from "createjs-module";

const stage = new createjs.Stage("stage");

const text = new createjs.Text("Hello, world!");
text.x = 100;
text.y = 100;

stage.addChild(text);
stage.update();
