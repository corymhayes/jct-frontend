(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{bbok:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var a=n("o0o1"),r=n.n(a),u=n("1OyB"),o=n("vuIU"),c=n("JX7q"),i=n("md7G"),l=n("foSv"),s=n("Ji7U"),f=n("rePB"),p=n("q1tI"),m=n.n(p),h=(n("gFX4"),n("vcXL")),v=n.n(h),b=n("5Yp1"),d=n("6XN1"),w=n("A0tZ"),y=m.a.createElement;function V(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var O=function(e){Object(s.a)(a,e);var t,n=(t=a,function(){var e,n=Object(l.a)(t);if(V()){var a=Object(l.a)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return Object(i.a)(this,e)});function a(){var e;Object(u.a)(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return e=n.call.apply(n,[this].concat(r)),Object(f.a)(Object(c.a)(e),"state",{companies:[]}),e}return Object(o.a)(a,[{key:"render",value:function(){return this.props.isMobileView?y(d.a,{company_name:"Doghouse Oil & Gas",site_name:"Anchor Battery"},this.props.equipment.map((function(e){return y(w.a,{key:e.id,name:e.name,currentValue:e.currentLevel,totalValue:e.totalLevel,alarmOn:e.on_level,alarmOff:e.off_level,mon:e.monValue,tue:e.tueValue,wed:e.wedValue,thu:e.thuValue,fri:e.friValue,sat:e.satValue,sun:e.sunValue})}))):y(b.a,{company_name:"Doghouse Oil & Gas",site_name:"Anchor Battery"},this.props.equipment.map((function(e){return y(w.a,{key:e.id,name:e.name,currentValue:e.currentLevel,totalValue:e.totalLevel,alarmOn:e.on_level,alarmOff:e.off_level,mon:e.monValue,tue:e.tueValue,wed:e.wedValue,thu:e.thuValue,fri:e.friValue,sat:e.satValue,sun:e.sunValue})})))}}],[{key:"getInitialProps",value:function(e){var t,n,a,u,o;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.query,n=t.name,a=t.site,c.next=3,r.a.awrap(v()("http://jct-systems.com/api/".concat(n,"/").concat(a)));case 3:return u=c.sent,c.next=6,r.a.awrap(u.json());case 6:if(o=c.sent,!(e.req.headers["user-agent"].search(/Android|iPhone/i)<0)){c.next=12;break}return c.abrupt("return",{isMobileView:!1,equipment:o[1]});case 12:return c.abrupt("return",{isMobileView:!0,equipment:o[1]});case 13:case"end":return c.stop()}}),null,null,null,Promise)}}]),a}(p.Component);Object(f.a)(O,"defaultProps",{company:[]})},sLvl:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[name]/[site]",function(){return n("bbok")}])}},[["sLvl",0,1,4,2,3,5,6]]]);