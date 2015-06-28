var buttons = require("sdk/ui/button/action");
var tabs = require("sdk/tabs");
var self = require("sdk/self");
var pageMod = require("sdk/page-mod");

var handleClick = function(state) {
  tabs.open("http://local.soran.com:5000/");
};

var button = buttons.ActionButton({
  id: "soran-link",
  label: "Visit soran",
  icon: {
    "16": "./icon16.png",
    "32": "./icon48.png",
    "64": "./icon128.png"
  },
  onClick: handleClick
});

pageMod.PageMod({
  include: "*.music.naver.com",
  contentScriptFile: [
    self.data.url('./deps/jquery-2.1.4.min.js'),
    self.data.url("./cs/naver.js")
  ]
});
