(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{34:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var r=n(0),a=n.n(r),o=n(8),l=n(6),u=n.n(l);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var a=b(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(l,e);var t,n,r,o=p(l);function l(){var e;i(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return h(y(e=o.call.apply(o,[this].concat(n))),"state",{username:""}),h(y(e),"handleSubmit",(function(t){t.preventDefault(),e.props.onSubmit(e.state.username)})),h(y(e),"handleChange",(function(t){t.preventDefault(),e.setState({username:t.target.value})})),e}return t=l,(n=[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.handleSubmit,className:"player-input"},a.a.createElement("label",{htmlFor:"username"},this.props.label),a.a.createElement("input",{type:"text",id:"username",placeholder:"GitHub username",autoComplete:"off",value:this.state.username,onChange:this.handleChange}),a.a.createElement("button",{type:"submit",disabled:!this.state.username},"Submit"))}}])&&f(t.prototype,n),r&&f(t,r),l}(a.a.Component);d.propTypes={label:u.a.string.isRequired,onSubmit:u.a.func.isRequired};var v=n(32);function g(e){var t=e.username,n=e.onReset,r=e.label;return a.a.createElement("div",{className:"player-preview"},a.a.createElement("p",null,r),a.a.createElement("img",{src:"https://github.com/".concat(t,".png?size=200"),alt:"avatar for ".concat(t)}),a.a.createElement("a",{href:"https://gihub.com/".concat(t)},t),a.a.createElement("button",{onClick:n},a.a.createElement(v.f,{color:"#e63946",size:"26"})))}g.propTypes={username:u.a.string.isRequired,onReset:u.a.func.isRequired,label:u.a.string.isRequired};var w=n.p+"72924a18d348adea969d578d41b702f3.svg",E=n.p+"fd5fbd51f0d8c88c227de86435455e2d.svg",S=n.p+"af79ddf80691dc00dd570a8b28db1900.svg";function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k(e);if(t){var a=k(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return T(this,n)}}function T(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(u,e);var t,n,r,l=_(u);function u(){var e;R(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return N(C(e=l.call.apply(l,[this].concat(n))),"state",{playerOne:null,playerTwo:null}),N(C(e),"handleReset",(function(t){e.setState(N({},t,null))})),N(C(e),"handleSubmit",(function(t,n){e.setState(N({},t,n))})),e}return t=u,(n=[{key:"render",value:function(){var e=this,t=this.state,n=t.playerOne,r=t.playerTwo;return a.a.createElement("div",{className:"battle gray-bg"},a.a.createElement("h2",null,"Instructions"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("h3",null,"1. Enter two github users"),a.a.createElement("img",{src:w,alt:"React Logo",className:"drawing"})),a.a.createElement("li",null,a.a.createElement("h3",null,"2. Battle"),a.a.createElement("img",{src:E,alt:"React Logo",className:"drawing"})),a.a.createElement("li",null,a.a.createElement("h3",null,"3. See the winner"),a.a.createElement("img",{src:S,alt:"React Logo",className:"drawing"}))),a.a.createElement("div",{className:"players"},null===n?a.a.createElement(d,{label:"Player one: ",onSubmit:function(t){return e.handleSubmit("playerOne",t)}}):a.a.createElement(g,{username:n,onReset:function(){return e.handleReset("playerOne")},label:"Player one: "}),null===r?a.a.createElement(d,{label:"Player two: ",onSubmit:function(t){return e.handleSubmit("playerTwo",t)}}):a.a.createElement(g,{username:r,onReset:function(){return e.handleReset("playerTwo")},label:"Player two: "})),n&&r?a.a.createElement(o.b,{to:{pathname:"/battle/results",search:"?playerOne=".concat(n,"&playerTwo=").concat(r)}},a.a.createElement("button",null,"Battle")):null)}}])&&P(t.prototype,n),r&&P(t,r),u}(a.a.Component)}}]);