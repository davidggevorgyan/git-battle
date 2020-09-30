(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{48:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return q}));var a=n(14),r=n.n(a),l=n(15),u=n.n(l),c=n(10),s=n.n(c),i=n(16),o=n.n(i),m=n(17),f=n.n(m),p=n(9),d=n.n(p),h=n(18),b=n.n(h),y=n(0),v=n.n(y),E=n(8),g=n(6),w=n.n(g);function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return f()(this,n)}}var S=function(e){o()(n,e);var t=R(n);function n(){var e;r()(this,n);for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];return e=t.call.apply(t,[this].concat(l)),b()(s()(e),"state",{username:""}),b()(s()(e),"handleSubmit",(function(t){t.preventDefault(),e.props.onSubmit(e.state.username)})),b()(s()(e),"handleChange",(function(t){t.preventDefault(),e.setState({username:t.target.value})})),e}return u()(n,[{key:"render",value:function(){return v.a.createElement("form",{onSubmit:this.handleSubmit,className:"player-input"},v.a.createElement("label",{htmlFor:"username"},this.props.label),v.a.createElement("input",{type:"text",id:"username",placeholder:"GitHub username",autoComplete:"off",value:this.state.username,onChange:this.handleChange}),v.a.createElement("button",{type:"submit",disabled:!this.state.username},"Submit"))}}]),n}(v.a.Component);S.propTypes={label:w.a.string.isRequired,onSubmit:w.a.func.isRequired};var C=n(47);function T(e){var t=e.username,n=e.onReset,a=e.label;return v.a.createElement("div",{className:"player-preview"},v.a.createElement("p",null,a),v.a.createElement("img",{src:"https://github.com/".concat(t,".png?size=200"),alt:"avatar for ".concat(t)}),v.a.createElement("a",{href:"https://gihub.com/".concat(t)},t),v.a.createElement("button",{title:"Clear selected user",onClick:n},v.a.createElement(C.f,{color:"#e63946",size:"26"})))}T.propTypes={username:w.a.string.isRequired,onReset:w.a.func.isRequired,label:w.a.string.isRequired};var N=n.p+"72924a18d348adea969d578d41b702f3.svg",D=n.p+"fd5fbd51f0d8c88c227de86435455e2d.svg",P=n.p+"af79ddf80691dc00dd570a8b28db1900.svg";function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return f()(this,n)}}var q=function(e){o()(n,e);var t=k(n);function n(){var e;r()(this,n);for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];return e=t.call.apply(t,[this].concat(l)),b()(s()(e),"state",{playerOne:null,playerTwo:null}),b()(s()(e),"handleReset",(function(t){e.setState(b()({},t,null))})),b()(s()(e),"handleSubmit",(function(t,n){e.setState(b()({},t,n))})),e}return u()(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.playerOne,a=t.playerTwo;return v.a.createElement("div",{className:"battle gray-bg"},v.a.createElement("h2",null,"Instructions"),v.a.createElement("ul",null,v.a.createElement("li",null,v.a.createElement("h3",null,"1. Enter two github users"),v.a.createElement("img",{src:N,alt:"Two users",className:"drawing"})),v.a.createElement("li",null,v.a.createElement("h3",null,"2. Battle"),v.a.createElement("img",{src:D,alt:"Battle",className:"drawing"})),v.a.createElement("li",null,v.a.createElement("h3",null,"3. See the winner"),v.a.createElement("img",{src:P,alt:"See the winner",className:"drawing"}))),v.a.createElement("div",{className:"players"},null===n?v.a.createElement(S,{label:"Player one: ",onSubmit:function(t){return e.handleSubmit("playerOne",t)}}):v.a.createElement(T,{username:n,onReset:function(){return e.handleReset("playerOne")},label:"Player one: "}),null===a?v.a.createElement(S,{label:"Player two: ",onSubmit:function(t){return e.handleSubmit("playerTwo",t)}}):v.a.createElement(T,{username:a,onReset:function(){return e.handleReset("playerTwo")},label:"Player two: "})),n&&a?v.a.createElement(E.b,{"data-testid":"battle-users",to:{pathname:"/battle/results",search:"?playerOne=".concat(n,"&playerTwo=").concat(a)}},v.a.createElement("button",null,"Battle!")):null)}}]),n}(v.a.Component)}}]);