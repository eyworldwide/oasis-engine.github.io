(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{176:function(r,t){r.exports=[{label:"PBR\u6750\u8d28",src:"pbr"},{label:"\u9aa8\u9abc\u52a8\u753b",src:"skeleton-animation"},{label:"\u805a\u5149\u706f-\u9634\u5f71",src:"spotLighting-shadow"},{label:"\u6f2b\u6e38\u76f8\u673a",src:"controls-free"},{label:"\u5e27\u62fe\u53d6",src:"framebuffer-picker"},{label:"\u73af\u5883\u53cd\u5c04\u63a2\u9488",src:"probe-reflection"},{label:"\u89c6\u9891\u7eb9\u7406",src:"video-texture"},{label:"\u81ea\u5b9a\u4e49\u51e0\u4f55\u4f53",src:"buffer-geometry"},{label:"\u89c6\u9525\u4f53\u5254\u9664",src:"renderer-cull"},{label:"\u7c92\u5b50\u6e32\u67d3\u5668",src:"particle-renderer"},{label:"\u7c92\u5b50\u6e32\u67d3\u5668\u7cbe\u7075\u56fe",src:"particle-renderer-spritesheet"},{label:"\u76f8\u673a\u6e32\u67d3\u906e\u7f69",src:"camera-culling-mask"},{label:"\u52a8\u753b\u6e10\u53d8\u8fc7\u6e21",src:"animation-cross-fade"},{label:"\u81ea\u5b9a\u4e49\u6750\u8d28-\u6c34",src:"shader-water"},{label:"\u7cbe\u7075\u6e32\u67d3\u5668",src:"sprite-renderer"}]},288:function(r,t,n){var e=n(336);r.exports={output:{dir:"dist",publicUrl:"/0.2/playground/"},name:"Oasis Playground",version:"v".concat(e.version),homePage:"https://oasis-engine.github.io",boxTheme:"monokai",globalPackages:{js:["https://cdn.jsdelivr.net/npm/dat.gui@0.7.7/build/dat.gui.min.js","https://gw.alipayobjects.com/os/lib/oasis-engine/0.2.0/dist/browser.min.js","https://gw.alipayobjects.com/os/lib/oasis-engine/controls/0.2.0/dist/browser.js","https://gw.alipayobjects.com/os/lib/oasis-engine/framebuffer-picker/0.2.0/dist/browser.min.js"]}}},333:function(r,t,n){r.exports=n(430)},336:function(r,t){r.exports={private:!0,name:"oasis-playground",version:"0.2.0",description:"",main:"index.js",scripts:{link:"sudo npm link ../engine/packages/* --no-package-lock","dev:vite":"vite",dev:"demosify --serve",build:"demosify --prod","b:mini":"node scripts/to-mini-program.js","add-demo":"node scripts/add-demo.js"},repository:{type:"git",url:"git@gitlab.alipay-inc.com:fetest/fe_hook_test.git"},author:"",license:"ISC",dependencies:{"@oasis-engine/controls":"^0.2.0","@oasis-engine/framebuffer-picker":"^0.2.0","dat.gui":"^0.7.7","oasis-engine":"^0.2.0"},devDependencies:{"@babel/core":"^7.12.1","@babel/generator":"^7.12.1","@babel/parser":"^7.12.1","@babel/plugin-proposal-class-properties":"^7.12.1","@babel/preset-typescript":"^7.12.1","@babel/standalone":"^7.12.6","@babel/traverse":"^7.12.1","@demosify/core":"^0.6.0","@rollup/plugin-babel":"^5.2.1",chalk:"^4.1.0","copy-dir":"^1.3.0","fs-extra":"^9.0.1",husky:"^4.2.5",inquirer:"^7.3.3","lint-staged":"^10.2.11","npm-run-all":"^4.1.5",prettier:"^2.0.5","replace-in-file":"^6.1.0",sass:"^1.26.10",snowpack:"^2.6.4",typescript:"^3.9.6",vite:"^1.0.0-beta.11"},husky:{hooks:{"pre-commit":"lint-staged"}},"lint-staged":{"*.{ts,tsx,json}":["prettier --write"]}}},412:function(r,t,n){var e={"./animation-cross-fade/config.js":413,"./buffer-geometry/config.js":414,"./camera-culling-mask/config.js":415,"./controls-free/config.js":416,"./framebuffer-picker/config.js":417,"./particle-renderer-spritesheet/config.js":418,"./particle-renderer/config.js":419,"./pbr/config.js":420,"./probe-reflection/config.js":421,"./renderer-cull/config.js":422,"./shader-water/config.js":423,"./skeleton-animation/config.js":424,"./spotLighting-shadow/config.js":425,"./sprite-renderer/config.js":426,"./video-texture/config.js":427};function o(r){var t=i(r);return n(t)}function i(r){if(!n.o(e,r)){var t=new Error("Cannot find module '"+r+"'");throw t.code="MODULE_NOT_FOUND",t}return e[r]}o.keys=function(){return Object.keys(e)},o.resolve=i,r.exports=o,o.id=412},413:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),i=n(52);function a(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);e=!0);}catch(c){o=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}function s(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){c(i,e,o,a,u,"next",r)}function u(r){c(i,e,o,a,u,"throw",r)}a(void 0)}))}}t.default=s(o.a.mark((function r(){var t,e,u,c,s;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(1).then(n.bind(null,101)),n.e(62).then(n.bind(null,482)),n.e(0).then(n.bind(null,95))]);case 2:return t=r.sent,e=a(t,3),u=e[0],c=e[1],s=e[2],r.abrupt("return",{javascript:{code:c,transformer:"typescript",transform:i.a,visible:!0},html:{code:u,transformer:"html",visible:!0},css:{code:s,transformer:"css",visible:!0}});case 8:case"end":return r.stop()}}),r)})))},414:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),i=n(52);function a(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);e=!0);}catch(c){o=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}function s(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){c(i,e,o,a,u,"next",r)}function u(r){c(i,e,o,a,u,"throw",r)}a(void 0)}))}}t.default=s(o.a.mark((function r(){var t,e,u,c,s;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(1).then(n.bind(null,101)),n.e(63).then(n.bind(null,483)),n.e(0).then(n.bind(null,95))]);case 2:return t=r.sent,e=a(t,3),u=e[0],c=e[1],s=e[2],r.abrupt("return",{javascript:{code:c,transformer:"typescript",transform:i.a,visible:!0},html:{code:u,transformer:"html",visible:!0},css:{code:s,transformer:"css",visible:!0}});case 8:case"end":return r.stop()}}),r)})))},415:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),i=n(52);function a(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);e=!0);}catch(c){o=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}function s(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){c(i,e,o,a,u,"next",r)}function u(r){c(i,e,o,a,u,"throw",r)}a(void 0)}))}}t.default=s(o.a.mark((function r(){var t,e,u,c,s;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(1).then(n.bind(null,101)),n.e(64).then(n.bind(null,484)),n.e(0).then(n.bind(null,95))]);case 2:return t=r.sent,e=a(t,3),u=e[0],c=e[1],s=e[2],r.abrupt("return",{javascript:{code:c,transformer:"typescript",transform:i.a,visible:!0},html:{code:u,transformer:"html",visible:!0},css:{code:s,transformer:"css",visible:!0}});case 8:case"end":return r.stop()}}),r)})))},416:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),i=n(52);function a(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);e=!0);}catch(c){o=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}function s(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){c(i,e,o,a,u,"next",r)}function u(r){c(i,e,o,a,u,"throw",r)}a(void 0)}))}}t.default=s(o.a.mark((function r(){var t,e,u,c,s;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(1).then(n.bind(null,101)),n.e(65).then(n.bind(null,485)),n.e(0).then(n.bind(null,95))]);case 2:return t=r.sent,e=a(t,3),u=e[0],c=e[1],s=e[2],r.abrupt("return",{javascript:{code:c,transformer:"typescript",transform:i.a,visible:!0},html:{code:u,transformer:"html",visible:!0},css:{code:s,transformer:"css",visible:!0}});case 8:case"end":return r.stop()}}),r)})))},417:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),i=n(52);function a(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);e=!0);}catch(c){o=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}function s(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){c(i,e,o,a,u,"next",r)}function u(r){c(i,e,o,a,u,"throw",r)}a(void 0)}))}}t.default=s(o.a.mark((function r(){var t,e,u,c,s;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(1).then(n.bind(null,101)),n.e(66).then(n.bind(null,486)),n.e(0).then(n.bind(null,95))]);case 2:return t=r.sent,e=a(t,3),u=e[0],c=e[1],s=e[2],r.abrupt("return",{javascript:{code:c,transformer:"typescript",transform:i.a,visible:!0},html:{code:u,transformer:"html",visible:!0},css:{code:s,transformer:"css",visible:!0}});case 8:case"end":return r.stop()}}),r)})))},418:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),i=n(52);function a(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);e=!0);}catch(c){o=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}function s(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){c(i,e,o,a,u,"next",r)}function u(r){c(i,e,o,a,u,"throw",r)}a(void 0)}))}}t.default=s(o.a.mark((function r(){var t,e,u,c,s;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(1).then(n.bind(null,101)),n.e(67).then(n.bind(null,487)),n.e(0).then(n.bind(null,95))]);case 2:return t=r.sent,e=a(t,3),u=e[0],c=e[1],s=e[2],r.abrupt("return",{javascript:{code:c,transformer:"typescript",transform:i.a,visible:!0},html:{code:u,transformer:"html",visible:!0},css:{code:s,transformer:"css",visible:!0}});case 8:case"end":return r.stop()}}),r)})))},419:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),i=n(52);function a(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);e=!0);}catch(c){o=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}function s(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){c(i,e,o,a,u,"next",r)}function u(r){c(i,e,o,a,u,"throw",r)}a(void 0)}))}}t.default=s(o.a.mark((function r(){var t,e,u,c,s;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(1).then(n.bind(null,101)),n.e(68).then(n.bind(null,488)),n.e(0).then(n.bind(null,95))]);case 2:return t=r.sent,e=a(t,3),u=e[0],c=e[1],s=e[2],r.abrupt("return",{javascript:{code:c,transformer:"typescript",transform:i.a,visible:!0},html:{code:u,transformer:"html",visible:!0},css:{code:s,transformer:"css",visible:!0}});case 8:case"end":return r.stop()}}),r)})))},420:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),i=n(52);function a(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);e=!0);}catch(c){o=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}function s(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){c(i,e,o,a,u,"next",r)}function u(r){c(i,e,o,a,u,"throw",r)}a(void 0)}))}}t.default=s(o.a.mark((function r(){var t,e,u,c,s;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(1).then(n.bind(null,101)),n.e(69).then(n.bind(null,489)),n.e(0).then(n.bind(null,95))]);case 2:return t=r.sent,e=a(t,3),u=e[0],c=e[1],s=e[2],r.abrupt("return",{javascript:{code:c,transformer:"typescript",transform:i.a,visible:!0},html:{code:u,transformer:"html",visible:!0},css:{code:s,transformer:"css",visible:!0}});case 8:case"end":return r.stop()}}),r)})))},421:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),i=n(52);function a(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);e=!0);}catch(c){o=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}function s(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){c(i,e,o,a,u,"next",r)}function u(r){c(i,e,o,a,u,"throw",r)}a(void 0)}))}}t.default=s(o.a.mark((function r(){var t,e,u,c,s;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(1).then(n.bind(null,101)),n.e(70).then(n.bind(null,490)),n.e(0).then(n.bind(null,95))]);case 2:return t=r.sent,e=a(t,3),u=e[0],c=e[1],s=e[2],r.abrupt("return",{javascript:{code:c,transformer:"typescript",transform:i.a,visible:!0},html:{code:u,transformer:"html",visible:!0},css:{code:s,transformer:"css",visible:!0}});case 8:case"end":return r.stop()}}),r)})))},422:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),i=n(52);function a(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);e=!0);}catch(c){o=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}function s(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){c(i,e,o,a,u,"next",r)}function u(r){c(i,e,o,a,u,"throw",r)}a(void 0)}))}}t.default=s(o.a.mark((function r(){var t,e,u,c,s;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(1).then(n.bind(null,101)),n.e(71).then(n.bind(null,491)),n.e(0).then(n.bind(null,95))]);case 2:return t=r.sent,e=a(t,3),u=e[0],c=e[1],s=e[2],r.abrupt("return",{javascript:{code:c,transformer:"typescript",transform:i.a,visible:!0},html:{code:u,transformer:"html",visible:!0},css:{code:s,transformer:"css",visible:!0}});case 8:case"end":return r.stop()}}),r)})))},423:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),i=n(52);function a(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);e=!0);}catch(c){o=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}function s(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){c(i,e,o,a,u,"next",r)}function u(r){c(i,e,o,a,u,"throw",r)}a(void 0)}))}}t.default=s(o.a.mark((function r(){var t,e,u,c,s;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(1).then(n.bind(null,101)),n.e(72).then(n.bind(null,492)),n.e(0).then(n.bind(null,95))]);case 2:return t=r.sent,e=a(t,3),u=e[0],c=e[1],s=e[2],r.abrupt("return",{javascript:{code:c,transformer:"typescript",transform:i.a,visible:!0},html:{code:u,transformer:"html",visible:!0},css:{code:s,transformer:"css",visible:!0}});case 8:case"end":return r.stop()}}),r)})))},424:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),i=n(52);function a(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);e=!0);}catch(c){o=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}function s(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){c(i,e,o,a,u,"next",r)}function u(r){c(i,e,o,a,u,"throw",r)}a(void 0)}))}}t.default=s(o.a.mark((function r(){var t,e,u,c,s;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(1).then(n.bind(null,101)),n.e(73).then(n.bind(null,493)),n.e(0).then(n.bind(null,95))]);case 2:return t=r.sent,e=a(t,3),u=e[0],c=e[1],s=e[2],r.abrupt("return",{javascript:{code:c,transformer:"typescript",transform:i.a,visible:!0},html:{code:u,transformer:"html",visible:!0},css:{code:s,transformer:"css",visible:!0}});case 8:case"end":return r.stop()}}),r)})))},425:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),i=n(52);function a(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);e=!0);}catch(c){o=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}function s(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){c(i,e,o,a,u,"next",r)}function u(r){c(i,e,o,a,u,"throw",r)}a(void 0)}))}}t.default=s(o.a.mark((function r(){var t,e,u,c,s;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(1).then(n.bind(null,101)),n.e(74).then(n.bind(null,494)),n.e(0).then(n.bind(null,95))]);case 2:return t=r.sent,e=a(t,3),u=e[0],c=e[1],s=e[2],r.abrupt("return",{javascript:{code:c,transformer:"typescript",transform:i.a,visible:!0},html:{code:u,transformer:"html",visible:!0},css:{code:s,transformer:"css",visible:!0}});case 8:case"end":return r.stop()}}),r)})))},426:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),i=n(52);function a(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);e=!0);}catch(c){o=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}function s(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){c(i,e,o,a,u,"next",r)}function u(r){c(i,e,o,a,u,"throw",r)}a(void 0)}))}}t.default=s(o.a.mark((function r(){var t,e,u,c,s;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(1).then(n.bind(null,101)),n.e(75).then(n.bind(null,495)),n.e(0).then(n.bind(null,95))]);case 2:return t=r.sent,e=a(t,3),u=e[0],c=e[1],s=e[2],r.abrupt("return",{javascript:{code:c,transformer:"typescript",transform:i.a,visible:!0},html:{code:u,transformer:"html",visible:!0},css:{code:s,transformer:"css",visible:!0}});case 8:case"end":return r.stop()}}),r)})))},427:function(r,t,n){"use strict";n.r(t);var e=n(25),o=n.n(e),i=n(52);function a(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);e=!0);}catch(c){o=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return n}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function c(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}function s(r){return function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){c(i,e,o,a,u,"next",r)}function u(r){c(i,e,o,a,u,"throw",r)}a(void 0)}))}}t.default=s(o.a.mark((function r(){var t,e,u,c,s;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(76).then(n.bind(null,496)),n.e(77).then(n.bind(null,497)),n.e(0).then(n.bind(null,95))]);case 2:return t=r.sent,e=a(t,3),u=e[0],c=e[1],s=e[2],r.abrupt("return",{javascript:{code:c,transformer:"typescript",transform:i.a,visible:!0},html:{code:u,transformer:"html",visible:!0},css:{code:s,transformer:"css",visible:!0}});case 8:case"end":return r.stop()}}),r)})))},52:function(r,t,n){"use strict";n.d(t,"a",(function(){return a}));var e=n(331),o={"dat.gui":"dat","oasis-engine":"oasisEngine","@oasis-engine/controls":"@oasisEngine/controls","@oasis-engine/framebuffer-picker":"@oasisEngine/framebufferPicker"},i=[{reg:/import\s+({[\s\S]*?})\s+from\s+['"](.*)['"]/g,to:function(r,t,n){return"const ".concat(t,' = window["').concat(o[n],'"]')}},{reg:/import\s+\*\s+as\s+(\b.*\b)\s+from\s+['"](.*)['"]/g,to:function(r,t,n){return"const ".concat(t,' = window["').concat(o[n],'"]')}}];function a(r){return i.forEach((function(t){var n=t.reg,e=t.to;r=r.replace(n,e)})),e.transform(r,{presets:["es2016"],plugins:["transform-typescript"]}).code}}},[[333,5,3]]]);