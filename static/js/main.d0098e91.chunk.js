(this["webpackJsonpdestiny-2-inventory-manager"]=this["webpackJsonpdestiny-2-inventory-manager"]||[]).push([[0],{203:function(e,t,n){e.exports=n(353)},208:function(e,t,n){},353:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(11),c=n.n(i),o=(n(208),n(21)),s=n(12),l=(n(209),n(210),n(58)),u=n(13),m=n(63);function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a={name:"userAuth",accessToken:e,membershipId:n,expiresIn:Date.now()+1e3*t,membershipType:r};if(e&&window.localStorage.setItem("userAuth",JSON.stringify(a)),!e){var i=JSON.parse(window.localStorage.getItem("userAuth")||"{}");return Object(u.a)({},a,{},i)}return a}function d(e){return Object(u.a)({name:"profile"},e)}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{contentPath:"",version:""};return Object(u.a)({name:"manifest"},e)}function f(e){return Object(u.a)({name:"componentContent"},e)}var v=[p,d,h,f].reduce((function(e,t){var n=t(),r=n.name,a=Object(m.a)(n,["name"]);if(!r)throw new Error("action must return a `type` value");return Object(u.a)({},e,Object(l.a)({},r,a))}),{}),b=Object(r.createContext)(v),y=n(3),g=n(142),O=n(23);var w=n(59),E=n.n(w),P=n(31),j=n.n(P),S="f5a851a085ec464e8c1af199031b6aec",I="https://www.bungie.net/platform";"https://www.bungie.net/en/OAuth/Authorize?client_id=".concat("3770","&response_type=code");function C(e){return e?((!e.accessToken||Date.now()>e.expiresIn)&&(window.location.href="/d2io"),{"x-api-key":S,Authorization:"Bearer ".concat(e.accessToken)}):{"x-api-key":S}}function k(){return Object(r.useContext)(b)}var x=n(60),R=n(62),T=n(139),D=n.n(T),H=[["3961599962","mobility",-10],["275671171","mobility",-10],["2645858828","recovery",-10],["126924337","recovery",-10],["3790655795","resilience",-10],["2850583378","resilience",-10],["3253038666","strength",-10],["3355995799","intellect",-10],["4048838440","discipline",-10],["1708067044","mobility",-5],["1818103563","mobility",-5],["2979815167","strength",-20],["1484685887","mobility",-20],["3523075123","recovery",10],["2263321584","discipline",10],["3523075120","strength",10],["3523075121","intellect",10],["2263321585","intellect",10]];function A(e,t){return e.itemHash&&t.exotic?t.itemHash===e.itemHash:!(e.itemHash&&!t.exotic&&e.content.itemTypeDisplayName===t.content.itemTypeDisplayName)&&!(!e.hash&&t.exotic)}function L(e,t){var n=e.profileInventory.data.items,r=Object.keys(e.characterEquipment.data).map((function(t){return e.characterEquipment.data[t].items})).reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t))}),[]),a=Object.keys(e.characterInventories.data).map((function(t){return e.characterInventories.data[t].items})).reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t))}),[]),i=e.itemComponents.stats.data,c=e.itemComponents.instances.data,l=e.itemComponents.sockets.data;return[].concat(Object(o.a)(n),Object(o.a)(a),Object(o.a)(r)).filter((function(e){return e.itemInstanceId&&t[e.itemHash].equippingBlock&&t[e.itemHash].quality&&i[e.itemInstanceId].stats[144602215]})).map((function(e){return Object(u.a)({},e,{content:t[e.itemHash],exotic:"exotic_armor"===t[e.itemHash].equippingBlock.uniqueLabel,classType:t[e.itemHash].classType,powerCap:t.powercaps[t[e.itemHash].quality.versions[0].powerCapHash].powerCap,intellect:i[e.itemInstanceId].stats[144602215].value,mobility:i[e.itemInstanceId].stats[2996146975].value,strength:i[e.itemInstanceId].stats[4244567218].value,discipline:i[e.itemInstanceId].stats[1735777505].value,recovery:i[e.itemInstanceId].stats[1943323491].value,resilience:i[e.itemInstanceId].stats[392767087].value})})).map((function(e){return function(e,t,n){var r=t[e.itemInstanceId];if(!r||0===r.sockets.length)return e;H.forEach((function(t){var n=Object(s.a)(t,3),a=n[0],i=n[1],c=n[2];(function(e,t){return t.some((function(t){return t.isEnabled&&t.plugHash.toString()===e.toString()}))})(a,r.sockets)&&(e[i]+=c)}));var a=n[e.itemInstanceId];return a&&a.energy&&10===a.energy.energyCapacity&&["mobility","recovery","resilience","strength","intellect","discipline"].forEach((function(t){e[t]-=2})),e}(e,l,c)}))}function M(e){var t=e,n=t.reduce((function(e,t){return e+t.mobility}),0),r=t.reduce((function(e,t){return e+t.resilience}),0),a=t.reduce((function(e,t){return e+t.recovery}),0),i=t.reduce((function(e,t){return e+t.discipline}),0),c=t.reduce((function(e,t){return e+t.intellect}),0),o=t.reduce((function(e,t){return e+t.strength}),0);return{mobility:n,resilience:r,recovery:a,discipline:i,intellect:c,strength:o,total:n+r+a+i+c+o}}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:220,n=M(e),r=n.mobility,a=n.recovery,i=n.discipline,c=n.intellect,o=n.strength,s=n.total;return r<=59&&a>=60&&r%10>=5&&[a%10<=4,c%10<=4,i%10<=4,o%10<=4].filter((function(e){return e})).length>=4&&s>=t}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:220,n=M(e),r=n.mobility,a=n.recovery,i=n.discipline,c=n.intellect,o=n.strength,s=n.total,l=n.resilience;return r<=59&&a>=60&&r%10>=5&&[a%10<=2,c%10<=2,i%10<=2,o%10<=2].filter((function(e){return e})).length>=3&&l<=20&&s>=t}function G(e){var t=M(e),n=t.mobility,r=t.recovery,a=t.discipline,i=t.intellect,c=t.strength,o=t.resilience;return n<=59&&r>=60&&n%10>=5&&o<=30&&[o%10<=2,r%10<=2,i%10<=2,a%10<=2,c%10<=2].filter((function(e){return e})).length>=5}function z(e){var t=M(e),n=t.mobility,r=t.recovery,a=t.discipline,i=t.intellect,c=t.strength,o=t.resilience;return r>=60&&n%10>=5&&o>=10&&o<=12&&[r%10<=2,i%10<=2,a%10<=2,c%10<=2].filter((function(e){return e})).length>=4}function J(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:220,n=M(e),r=n.mobility,a=n.recovery,i=n.discipline,c=n.intellect,o=n.strength,s=n.total;return a>=60&&i>=50&&[r%10<=4,a%10<=4,c%10<=4,i%10<=4,o%10<=4].filter((function(e){return e})).length>=5&&s>=t}function q(e){var t=M(e),n=t.mobility,r=t.recovery,a=t.discipline,i=t.intellect,c=t.strength,o=t.resilience;return r>=60&&a>=50&&[n%10<=2,r%10<=2,i%10<=2,a%10<=2,c%10<=2,o%10<=2].filter((function(e){return e})).length>=6}function B(e){var t=M(e),n=t.resilience;return n<20}function F(e){var t=M(e),n=t.resilience;return n>=10&&n<=12}function W(e){var t=M(e),n=t.mobility,r=t.recovery;return n>=30&&r>=40}function U(e){var t=M(e),n=t.mobility,r=t.recovery,a=t.discipline,i=t.intellect,c=t.strength,o=t.resilience;return n<=59&&n%10>=5&&o<=30&&[r%10<=4,i%10<=4,a%10<=4,c%10<=4].filter((function(e){return e})).length>=4}function $(e){var t=M(e),n=t.mobility,r=t.recovery,a=(t.discipline,t.intellect,t.strength,t.resilience);return n<=59&&n+r>=109&&n%10>=5&&a>=10&&a<=12&&r%10<=4}function K(){var e=Object(x.a)(["\n        font-family: monospace;\n        color: #fff;\n        background: #000;\n        width: 500px;\n        padding: 10px;\n      "]);return K=function(){return e},e}var Q="---------------------------------------------------".length;function V(e){var t=e.items,n=e.stats,r=e.mode,i=n.mobility,c=n.recovery,o=n.discipline,l=n.intellect,u=n.strength,m=n.resilience,p=n.total,d=r.indexOf("PvP")>=0,h=[["Mobility",i,d?35:10],["Resilience",m,10],["Recovery",c,10],["Discipline",o,10],["Intellect",l,10],["Strength",u,d?30:10]];return a.a.createElement("pre",{className:Object(R.a)(K())},"| ".concat("Stat Total".padEnd(13,".")).concat(p," (max: 280)").padEnd(Q-1)+"|",a.a.createElement("br",null),h.map((function(e){var t=Object(s.a)(e,3),n=t[0],r=t[1],i=t[2];return a.a.createElement("div",{key:n},"| ".concat(n.padEnd(13,".")).concat(r," (").concat(r+i,")").padEnd(Q-1)+"|")})),"| ".padEnd(Q-1)+"|",a.a.createElement("br",null),t.map((function(e,t){var n=[["Mobility",e.mobility],["Resilience",e.resilience],["Recovery",e.recovery],["Discipline",e.discipline],["Intellect",e.intellect],["Strength",e.strength]],r=n.reduce((function(e,t){return e+t[1]}),0),i=n.map((function(e){var t=Object(s.a)(e,2),n=t[0],r=t[1];return"".concat(n.substr(0,3)," ").concat(r)})).join("  ");return a.a.createElement("div",{key:t},"| [".concat(e.content.itemTypeDisplayName,"] ").concat(e.content.displayProperties.name," (").concat(r,")").padEnd(Q-1)+"|",a.a.createElement("br",null),"| ".concat(i).padEnd(Q-1)+"|")})))}function X(){var e=Object(x.a)(["justify-content: flex-start;"]);return X=function(){return e},e}var Y=n(140),Z=n(141),ee=n(143),te=n(145),ne=function(e){Object(te.a)(n,e);var t=Object(ee.a)(n);function n(){var e;Object(Y.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(Z.a)(n,[{key:"componentDidCatch",value:function(e,t){console.debug("caught error within ErrorBoundary"),console.error(e,t)}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("div",null,this.props.defaultErrorMessage||"An error has occurred on this page."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(r.Component),re=[["/d2io/optimizer",function(){var e=k(),t=e.state,n=e.dispatch,i=Object(r.useState)(!0),c=Object(s.a)(i,2),l=c[0],m=c[1],p=Object(r.useState)("No Optimization"),v=Object(s.a)(p,2),b=v[0],y=v[1],g=Object(r.useState)(""),w=Object(s.a)(g,2),E=w[0],P=w[1],S=Object(r.useState)(""),x=Object(s.a)(S,2),T=x[0],H=x[1];Object(r.useEffect)((function(){var e;t.manifest.version?m(!1):Promise.all([(e=t.userAuth,j()({url:"https://www.bungie.net/Platform/Destiny2/".concat(e.membershipType,"/Profile/").concat(e.membershipId,"/"),params:{components:"100,102,103,200,201,202,205,300,301,304,305,306,307,800,308,310,309,900,1100"},headers:C(e)})),j()({url:"".concat(I,"/Destiny2/Manifest/"),headers:C()})]).then((function(e){var t=Object(s.a)(e,2),r=t[0],a=t[1];return n(h({contentPath:a.data.Response.jsonWorldComponentContentPaths.en.DestinyRecordDefinition,version:a.data.Response.version})),n(d({data:r.data.Response})),Promise.all([j()({url:"https://www.bungie.net".concat(a.data.Response.jsonWorldComponentContentPaths.en.DestinyInventoryItemLiteDefinition)}),j()({url:"https://www.bungie.net".concat(a.data.Response.jsonWorldComponentContentPaths.en.DestinyPowerCapDefinition)})])})).then((function(e){var t=Object(s.a)(e,2),r=t[0],a=t[1];n(f(Object(u.a)({},r.data,{powercaps:a.data}))),m(!1)}))}),[t.userAuth,t.manifest,m]);var K=Object(r.useCallback)((function(e){return y(e.target.value)}),[]),Q=Object(r.useCallback)((function(e){P(e.target.value),H("")}),[]),Y=Object(r.useCallback)((function(e){return H(e.target.value)}),[]),Z=Object(r.useMemo)((function(){return t.profile.data&&t.profile.data.profileInventory&&0!==Object.keys(t.componentContent).length?L(t.profile.data,t.componentContent):[]}),[t.profile,t.componentContent]),ee=function(e){var t=e.powerCap,n=e.exoticItem,r=e.items,a=e.mainClass,i=[],c=[],o=[],s=[];return 0===r.length||""===a||r.filter((function(e){return e.powerCap>=t})).filter((function(e){return e.classType.toString()===a.toString()})).forEach((function(e){switch(e.content.itemTypeDisplayName){case"Helmet":A(n,e)&&i.push(e);break;case"Gauntlets":A(n,e)&&c.push(e);break;case"Chest Armor":A(n,e)&&o.push(e);break;case"Leg Armor":A(n,e)&&s.push(e)}})),{helmets:i,gauntlets:c,chests:o,legs:s}}({powerCap:1260,exoticItem:Z.filter((function(e){return e.itemHash.toString()===T.toString()}))[0]||{},items:Z,mainClass:E}),te=D()(Z.filter((function(e){return e.exotic&&e.classType.toString()===E.toString()})),(function(e){return e.itemHash})),ne=ee.helmets,re=ee.gauntlets,ae=ee.chests,ie=ee.legs,ce=Object(r.useMemo)((function(){var e,t=[];return"No Optimization"===b&&(e=function(){return!0}),"PvP - Standard"===b&&(e=N),"PvP - Standard (Low Resilience)"===b&&(e=_),"PvP - Perfect"===b&&(e=G),"PvE - Standard"===b&&(e=J),"PvE - Perfect"===b&&(e=q),"PvP - Top Stats (Low Resilience)"===b&&(e=B),"PvP - Low Gear (Low Resilience)"===b&&(e=U),"PvP - Top Stats (Super Low Resilience)"===b&&(e=F),"PvP - Minimum Gear"===b&&(e=W),"PvP - Perfect (Low Resilience)"===b&&(e=z),"PvP - Unchi Mode (9-2-10 build)"===b&&(e=$),ne.forEach((function(n){re.forEach((function(r){ae.forEach((function(a){ie.forEach((function(i){var c=[n,r,a,i];e&&e(c)&&t.push({set:c,stats:M(c)})}))}))}))})),t.sort((function(e,t){return t.stats.total-e.stats.total}))}),[ne,re,ae,ie,b]);return l&&0===Z.length?a.a.createElement("div",null,a.a.createElement(O.Spinner,{className:Object(R.a)(X())}),"Loading profile data..."):a.a.createElement("div",{style:{padding:15}},a.a.createElement("div",{style:{width:320}},a.a.createElement(O.FormGroup,{label:"Optimizer Presets"},a.a.createElement(O.HTMLSelect,{options:["No Optimization","PvP - Standard","PvP - Standard (Low Resilience)","PvP - Perfect","PvP - Perfect (Low Resilience)","PvE - Standard","PvE - Perfect","PvP - Top Stats (Low Resilience)","PvP - Top Stats (Super Low Resilience)","PvP - Low Gear (Low Resilience)","PvP - Minimum Gear","PvP - Unchi Mode (9-2-10 build)"],onChange:K,value:b})),a.a.createElement(O.FormGroup,{label:"Class"},a.a.createElement(O.HTMLSelect,{options:[{label:"",value:""},{label:"Titan",value:0},{label:"Hunter",value:1},{label:"Warlock",value:2}],onChange:Q,value:E})),a.a.createElement(O.FormGroup,{label:"Exotic"},a.a.createElement(O.HTMLSelect,{options:[{label:"-- No Exotic --",value:""}].concat(Object(o.a)(te.map((function(e){return{label:e.content.displayProperties.name,value:e.itemHash}})))),onChange:Y,value:T})),a.a.createElement(O.FormGroup,{label:"Applied Filters"},a.a.createElement("strong",null,"Power Cap Minimum: 1260 / High Gear Only")),a.a.createElement("hr",null)),a.a.createElement("div",null,"Results: ",ce.length," (only showing top 1000)",a.a.createElement("br",null)),b&&ce.filter((function(e,t){return t<1e3})).map((function(e,t){var n=e.set,r=e.stats;return a.a.createElement(V,{key:t,items:n,stats:r,mode:b})})))}]].map((function(e){var t,n=Object(s.a)(e,2),r=n[0],i=n[1];return[r,(t=i,function(e){var n=k().state;return!n.userAuth.accessToken||Date.now()>=n.userAuth.expiresIn?a.a.createElement(y.a,{to:"/d2io"}):a.a.createElement(t,e)})]})),ae=[["/d2io",function(){return a.a.createElement("div",null,a.a.createElement(O.AnchorButton,{href:"https://www.bungie.net/en/OAuth/Authorize?client_id=3770&response_type=code"},"Sync Destiny 2 Characters"))}],["/d2io/auth",function(e){var t=e.location,n=k(),i=n.dispatch,c=n.state,o=Object(y.g)();return Object(r.useEffect)((function(){var e=E.a.parse(t.search);e.code&&function(e){return j()({method:"POST",headers:Object(u.a)({},C(),{"content-type":"application/x-www-form-urlencoded"}),data:E.a.stringify({code:e,grant_type:"authorization_code",client_id:"3770"}),url:(t="/app/oauth/token/",I+t)});var t}(e.code||"").then((function(e){var t,n=p(e.data.access_token,e.data.expires_in);return console.log(e,n),(t=n,j()({url:"".concat(I,"/User/GetMembershipsForCurrentUser/"),headers:C(t)})).then((function(t){if(!t.data.Response.destinyMemberships[0].membershipId)throw new Error("failed to get membership id");return i(p(e.data.access_token,e.data.expires_in,t.data.Response.destinyMemberships[0].membershipId,t.data.Response.destinyMemberships[0].membershipType))}))}))}),[i,t,o]),!(Date.now()>c.userAuth.expiresIn)&&c.userAuth.membershipId?a.a.createElement(y.a,{to:"/d2io/optimizer"}):a.a.createElement("div",null,"authenticating...")}]].concat(Object(o.a)(re)).map((function(e){var t=Object(s.a)(e,2),n=t[0],r=t[1];return a.a.createElement(y.b,{key:n,component:r,path:n,exact:!0})}));var ie=function(){var e=Object(r.useReducer)((function(e,t){var n=t.name,r=Object(m.a)(t,["name"]);return e[n]=r,JSON.parse(JSON.stringify(e))}),v),t=Object(s.a)(e,2),n=t[0],i=t[1];return a.a.createElement(b.Provider,{value:{state:JSON.parse(JSON.stringify(n)),dispatch:i}},a.a.createElement(ne,null,a.a.createElement(g.a,null,a.a.createElement(y.d,null,ae))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[203,1,2]]]);
//# sourceMappingURL=main.d0098e91.chunk.js.map