window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  ButtonTest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0a7eaGkEf5Ms60EmSn0JpRz", "ButtonTest");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onButtonClick: function onButtonClick() {
        console.log("Button clicked!");
        this.node.emit("button-test", this.node);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  HelloWorld: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        label: {
          default: null,
          type: cc.Label
        },
        text: "Hello, World!",
        testButton: cc.Node
      },
      onLoad: function onLoad() {
        this.label.string = this.text;
        this.testButton.on("button-test", function(arg) {
          arg.active = false;
        });
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "ButtonTest", "HelloWorld" ]);