(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){e.exports=n.p+"static/media/logo.5857ad01.png"},114:function(e,t,n){e.exports=n(219)},119:function(e,t,n){},127:function(e,t){},128:function(e,t){},129:function(e,t){},147:function(e,t){},218:function(e,t,n){},219:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(34),i=n.n(c),l=(n(119),n(221)),o=n(103),s=n.n(o),u=function(){return r.a.createElement("div",{className:"logo"},r.a.createElement("div",{className:"title"},r.a.createElement("img",{alt:"",src:s.a,width:100})," Convert css style to flutter style"),r.a.createElement("div",null,"Source code is here",r.a.createElement("a",{style:{padding:6},href:"https://github.com/flutterkit/c2f",rel:"noopener noreferrer",target:"_blank"},"https://github.com/flutterkit/c2f")))},p=n(6),h=n.n(p),d=n(28),f=n(10),v=n(11),m=n(25),b=n(24),k=n(26),g=n(222),y=n(223),C=n(220),w=n(104);n(121),n(122),n(123),n(124),n(125);var E=function(e){function t(){return Object(f.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(v.a)(t,[{key:"onChange",value:function(e,t,n){this.props.onChange&&this.props.onChange(n)}},{key:"render",value:function(){return r.a.createElement(w.UnControlled,{className:"code-mirror",value:this.props.value,options:Object.assign({theme:"material",tabSize:2,lineNumbers:!0},this.props.options),onChange:this.onChange.bind(this)})}}]),t}(r.a.Component),x=function(e){function t(){return Object(f.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,null)}}]),t}(r.a.Component),O=n(33),j=n.n(O),V=function(e){return e?new Promise(function(t,n){var a=[];e.walkDecls(function(e){var t=j.a.list.space(e.value);a.push({decl:e,valueList:t,key:e.prop,val:e.value})}),setTimeout(function(){return t(a)},80)}):null},N=function(e){if(e){for(var t=0;t<e.length;t++){var n=e[t];n.valueList.length>1&&n.key}return e}},D="<- prop ->",H="\nnew Container( \n  ".concat("<- children ->","\n  ").concat(D,"\n),\n").trim(),S='\nnew Text(\n  "Hello World",\n  style: new TextStyle(\n    '.concat(D,"\n  ),\n),\n").trim(),B=("\nnew Center(\n  child:  ".concat(S,",\n  ),\n").trim(),function(){function e(t){switch(Object(f.a)(this,e),this.children=[],this.type=t,t){case"container":this.template=H;break;case"text":this.template=S}}return Object(v.a)(e,[{key:"addChild",value:function(e){this.children.push(e)}},{key:"prop",value:function(e,t){if(e){var n="".concat(e,": ").concat(t,",\n  ").concat(D);this.template=this.template.replace(D,n)}}},{key:"assemble",value:function(){for(var e=0;e<this.children;e++);return this.normalize(this.template)}},{key:"normalize",value:function(e){return e.replace(new RegExp("<- children ->","g"),"").replace(new RegExp("<- child ->","g"),"").replace(new RegExp("<- class ->","g"),"").replace(new RegExp(D,"g"),"").replace(new RegExp(/  \n/,"ig"),"")}},{key:"toString",value:function(){return this.template}}]),e}()),R=n(105),A=n.n(R),T=function(e){try{var t=A()(e).hex().replace(/^#/,"0x");return"Color(".concat(t,"00)")}catch(a){var n=(e+"").replace(/^#/,"0x");return"Color(".concat(n,"00)")}},U=n(106),z=n.n(U),J=n(72),L=n.n(J),F=function(e){return e=e.replace(/(px|dpx)$/,""),e=L()(e),e=z()(e)?"".concat(e,".0"):"".concat(e)},G=function(e,t){var n={key:null,val:null};switch(e){case"background-color":n.key="color",n.val=T(t);break;case"width":case"height":n.key=e,n.val=F(t)}return n},I=function(e){if(!e||!e.length)return null;for(var t=new B("container"),n=0;n<e.length;n++){var a=e[n],r=a.key,c=a.val;if(a.isText){var i=new B("text");i.prop(r,c),t.addChild(i)}else{var l=G(r,c);t.prop(l.key,l.val)}}return t.assemble()},M=function(){var e=Object(d.a)(h.a.mark(function e(t){var n,a,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()([]).process(t);case 2:return n=e.sent,e.next=5,V(n.root);case 5:return a=e.sent,a=N(a),r=I(a),e.abrupt("return",r);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),P=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(m.a)(this,Object(b.a)(t).call(this,e))).cssOptions={mode:"css"},n.dartOptions={mode:"dart"},n.cssVal="",n.dartVal="",n}return Object(k.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.cssVal="\nbackground-color: #e0e0e0;\nwidth: 320px;\nheight: 240px;\nborder:5px solid red;\nfont: 900 24px Georgia;\n    ".trim(),e.next=3,this.convertAndUpdateDartCoder();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"clearBtnClickHandler",value:function(e){this.setState({cssVal:"",dartVal:""})}},{key:"convertBtnClickHandler",value:function(){var e=Object(d.a)(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.convertAndUpdateDartCoder();case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"codeChangeHadler",value:function(e){this.cssVal=e}},{key:"convertAndUpdateDartCoder",value:function(){var e=Object(d.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(this.cssVal);case 2:t=e.sent,this.updateDartCoder(t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"updateDartCoder",value:function(e){this.dartVal=e,this.setState({})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(x,null),r.a.createElement(g.a,null,r.a.createElement(y.a,{span:12},r.a.createElement("div",{className:"coder-title"},"Css"),r.a.createElement(E,{options:this.cssOptions,value:this.cssVal,onChange:this.codeChangeHadler.bind(this)})),r.a.createElement(y.a,{span:12},r.a.createElement("div",{className:"coder-title"},"Flutter"),r.a.createElement(E,{options:this.dartOptions,value:this.dartVal}))),r.a.createElement(g.a,{className:"btns"},r.a.createElement(C.a,{type:"danger",onClick:this.clearBtnClickHandler.bind(this)},"Clear"),r.a.createElement(C.a,{type:"primary",onClick:this.convertBtnClickHandler.bind(this)},"Convert")))}}]),t}(r.a.Component),W=(n(218),l.a.Content);var $=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(W,null,r.a.createElement(u,null),r.a.createElement(P,null))))};i.a.render(r.a.createElement($,null),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.3c6e51ae.chunk.js.map