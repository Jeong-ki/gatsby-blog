!function(){var e={3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,r){var o=r(3897);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var o=r(3405),n=r(9498),s=r(6116),u=r(2281);e.exports=function(e){return o(e)||n(e)||s(e)||u()},e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,r){var o=r(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}!function(){var e=r(861);const t={getDifference(e,t){postMessage({queryMethodListener:"difference",queryMethodArguments:[e-t]})},getMultiple(e,t){postMessage({queryMethodListener:"multiple",queryMethodArguments:[e*t]})},getFibonacci(e,t){function r(e){return e<=0?0:1===e?1:r(e-1)+r(e-2)}postMessage({queryMethodListener:"fibonacci",queryMethodArguments:[r(e),r(t)]})}};onmessage=r=>{const{queryMethod:o,queryMethodArguments:n}=r.data;o in t?t[o].apply(t,e(n)):postMessage({error:"Unknown queryMethod"})}}()}();
//# sourceMappingURL=277-c88be29ea4496ecfc45e.js.map