(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Xf2F:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),l=a("vOnD"),o=a("UIkl"),m=a("TH2N"),r=i.a.createElement,u=l.b.div.withConfig({displayName:"Alarms__Container",componentId:"sc-17pmkb0-0"})(["display:flex;flex-flow:column;@media ","{margin-left:1rem;}@media ","{margin-left:1rem;}"],o.c.tabletP,o.c.tabletL),f=l.b.h3.withConfig({displayName:"Alarms__Title",componentId:"sc-17pmkb0-1"})(["font-weight:bold;color:",";font-size:1.8rem;margin-bottom:.25rem;@media ","{font-size:1.5rem;}@media ","{font-size:1.5rem;}@media ","{font-size:1.8rem;}"],o.a.jctOrange,o.c.tabletP,o.c.tabletL,o.b.laptopM),s=l.b.ul.withConfig({displayName:"Alarms__AlarmList",componentId:"sc-17pmkb0-2"})(["list-style:none;margin-bottom:1rem;"]),c=l.b.li.withConfig({displayName:"Alarms__AlarmListItem",componentId:"sc-17pmkb0-3"})(["color:",";font-size:1.8rem;margin-bottom:.25rem;@media ","{font-size:1.5rem;}@media ","{font-size:1.5rem;}@media ","{font-size:1.8rem;}"],o.a.jctLightGray,o.c.tabletP,o.c.tabletL,o.b.laptopM),d=function(e){return r(u,null,r(f,null,e.title),r(s,null,r(c,null,"On: ",void 0!==e.on?e.on.toFixed(2):e.on),r(c,null,"Off: ",void 0!==e.off?e.off.toFixed(2):e.off)))},p=i.a.createElement,b=function(e){return p(g,null,p(m.a,{currentValue:e.currentValue,totalValue:e.totalValue,unitOfMeasure:e.unitOfMeasure,alarmOn:e.alarmOn,alarmOff:e.alarmOff}),p(w,null,p(d,{title:"Transfer Pump",on:e.tPumpOn,off:e.tPumpOff}),p(d,{title:"Alarm",on:e.alarmOn,off:e.alarmOff})))},g=l.b.div.withConfig({displayName:"DoughnutAlarms__Container",componentId:"sc-9gubyt-0"})(["display:flex;margin-top:2rem;margin-bottom:2rem;justify-content:space-around;align-items:center;"]),w=l.b.div.withConfig({displayName:"DoughnutAlarms__AlarmsContainer",componentId:"sc-9gubyt-1"})(["display:flex;flex-flow:column;&:first-child{margin-bottom:1rem;}"]),O=(a("khvv"),i.a.createElement),h=l.b.div.withConfig({displayName:"FullDetails__DetailsContainer",componentId:"sc-1tojwhx-0"})(["display:flex;flex-flow:column;background-color:",";@media ","{max-width:35rem;}@media ","{padding:2rem;}"],o.a.jctWhite,o.c.desktop,o.b.mobile),_=l.b.h1.withConfig({displayName:"FullDetails__DetailsName",componentId:"sc-1tojwhx-1"})(["color:#FF7E26;font-size:3rem;font-weight:bold;margin-bottom:1rem;@media ","{font-size:2rem;}@media ","{font-size:2rem;}@media ","{font-size:3rem;}"],o.c.tabletP,o.c.tabletL,o.b.laptopM),y=l.b.div.withConfig({displayName:"FullDetails__Underline",componentId:"sc-1tojwhx-2"})(["height:2px;background-color:rgba(41,41,41,.15);"]);t.a=function(e){return O(h,null,O(_,null,e.name),O(y,null),O(b,{currentValue:e.currentValue,totalValue:e.totalValue,unitOfMeasure:e.unitOfMeasure,tPumpOn:e.tPumpOn,tPumpOff:e.tPumpOff,alarmOn:e.alarmOn,alarmOff:e.alarmOff}))}},qv0Z:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSP",(function(){return f}));var n=a("q1tI"),i=a.n(n),l=a("5Yp1"),o=a("6XN1"),m=a("Xf2F"),r=a("A0tZ"),u=i.a.createElement,f=!0;t.default=function(e){var t=e.data,a=e.isMobileView;return u(a?o.a:l.a,{company_name:"Mammoth",site_name:"University",date:t[0].mDate,time:"".concat(t[0].mTime.substr(0,4)," ").concat(t[0].mTime.substr(-2))},u(m.a,{name:t[0].S1,currentValue:t[0].V1,totalValue:16,unitOfMeasure:t[0].S2.toLowerCase(),tPumpOn:t[0].V3,tPumpOff:t[0].V4,alarmOn:t[0].V5,alarmOff:t[0].V6}),u(r.a,{name:t[0].S3,currentValue:t[0].V2,totalValue:16,unitOfMeasure:t[0].S4.toLowerCase()}))}},rsys:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mammoth/university",function(){return a("qv0Z")}])}},[["rsys",0,1,4,2,3]]]);