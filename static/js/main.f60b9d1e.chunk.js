(this["webpackJsonpdestiny-2-inventory-manager"]=this["webpackJsonpdestiny-2-inventory-manager"]||[]).push([[0],{203:function(e,t,n){e.exports=n(353)},208:function(e,t,n){},353:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(12),c=n.n(a),o=(n(208),n(21)),l=n(11),s=(n(209),n(210),n(58)),u=n(13),m=n(63);function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i={name:"userAuth",accessToken:e,membershipId:n,expiresIn:Date.now()+1e3*t,membershipType:r};if(e&&window.localStorage.setItem("userAuth",JSON.stringify(i)),!e){var a=JSON.parse(window.localStorage.getItem("userAuth")||"{}");return Object(u.a)({},i,{},a)}return i}function f(e){return Object(u.a)({name:"profile"},e)}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{contentPath:"",version:""};return Object(u.a)({name:"manifest"},e)}function d(e){return Object(u.a)({name:"componentContent"},e)}var h=[p,f,v,d].reduce((function(e,t){var n=t(),r=n.name,i=Object(m.a)(n,["name"]);if(!r)throw new Error("action must return a `type` value");return Object(u.a)({},e,Object(s.a)({},r,i))}),{}),b=Object(r.createContext)(h),y=n(3),g=n(142),E=n(23);var O=n(59),w=n.n(O),j=n(31),P=n.n(j),S="f5a851a085ec464e8c1af199031b6aec",I="https://www.bungie.net/platform";"https://www.bungie.net/en/OAuth/Authorize?client_id=".concat("3770","&response_type=code");function k(e){return e?((!e.accessToken||Date.now()>e.expiresIn)&&(window.location.href="/d2io"),{"x-api-key":S,Authorization:"Bearer ".concat(e.accessToken)}):{"x-api-key":S}}function A(){return Object(r.useContext)(b)}var C=n(60),x=n(62),T=n(139),H=n.n(T),D=[["204137529","mobility",-5],["3682186345","resilience",-5],["555005975","recovery",-5],["2623485440","discipline",-5],["1227870362","intellect",-5],["3699676109","strength",-5],["3961599962","mobility",-10],["275671171","mobility",-10],["2645858828","recovery",-10],["126924337","recovery",-10],["3790655795","resilience",-10],["2850583378","resilience",-10],["3253038666","strength",-10],["3355995799","intellect",-10],["4048838440","discipline",-10],["2979815167","strength",-20],["1484685887","mobility",-20],["3523075123","recovery",10],["2263321584","discipline",10],["3523075120","strength",10],["3523075121","intellect",10],["2263321585","intellect",10]];function R(e,t){return e.itemHash&&t.exotic?t.itemHash===e.itemHash:!(e.itemHash&&!t.exotic&&e.content.itemTypeDisplayName===t.content.itemTypeDisplayName)&&!(!e.hash&&t.exotic)}function M(e,t){var n=e.profileInventory.data.items,r=Object.keys(e.characterEquipment.data).map((function(t){return e.characterEquipment.data[t].items})).reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t))}),[]),i=Object.keys(e.characterInventories.data).map((function(t){return e.characterInventories.data[t].items})).reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t))}),[]),a=e.itemComponents.stats.data,c=e.itemComponents.instances.data,s=e.itemComponents.sockets.data;return[].concat(Object(o.a)(n),Object(o.a)(i),Object(o.a)(r)).filter((function(e){return e.itemInstanceId&&t[e.itemHash].equippingBlock&&t[e.itemHash].quality&&a[e.itemInstanceId]&&a[e.itemInstanceId].stats&&a[e.itemInstanceId].stats[144602215]})).map((function(e){return Object(u.a)({},e,{content:t[e.itemHash],exotic:"exotic_armor"===t[e.itemHash].equippingBlock.uniqueLabel,classType:t[e.itemHash].classType,powerCap:t.powercaps[t[e.itemHash].quality.versions[0].powerCapHash].powerCap,intellect:a[e.itemInstanceId].stats[144602215].value,mobility:a[e.itemInstanceId].stats[2996146975].value,strength:a[e.itemInstanceId].stats[4244567218].value,discipline:a[e.itemInstanceId].stats[1735777505].value,recovery:a[e.itemInstanceId].stats[1943323491].value,resilience:a[e.itemInstanceId].stats[392767087].value})})).map((function(e){return function(e,t,n){var r=t[e.itemInstanceId];if(!r||0===r.sockets.length)return e;D.forEach((function(t){var n=Object(l.a)(t,3),i=n[0],a=n[1],c=n[2];(function(e,t){return t.some((function(t){return t.isEnabled&&t.plugHash.toString()===e.toString()}))})(i,r.sockets)&&(e[a]+=c)}));var i=n[e.itemInstanceId];return i&&i.energy&&10===i.energy.energyCapacity&&["mobility","recovery","resilience","strength","intellect","discipline"].forEach((function(t){e[t]-=2})),e}(e,s,c)}))}function N(e){var t=e,n=t.reduce((function(e,t){return e+t.mobility}),0),r=t.reduce((function(e,t){return e+t.resilience}),0),i=t.reduce((function(e,t){return e+t.recovery}),0),a=t.reduce((function(e,t){return e+t.discipline}),0),c=t.reduce((function(e,t){return e+t.intellect}),0),o=t.reduce((function(e,t){return e+t.strength}),0);return{mobility:n,resilience:r,recovery:i,discipline:a,intellect:c,strength:o,total:n+r+i+a+c+o}}function L(e){return e%10>=5&&e%10<=7||e%10<=3}var W=[["No Optimization",function(){return!0}],["PvP - Standard",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:220,n=N(e),r=n.mobility,i=n.recovery,a=n.discipline,c=n.intellect,o=n.strength,l=n.total;return r<=59&&i>=60&&r%10<=4&&[i%10<=4,c%10<=4,a%10<=4,o%10<=4].filter((function(e){return e})).length>=4&&l>=t}],["PvP - Standard (Low Resilience)",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:220,n=N(e),r=n.mobility,i=n.recovery,a=n.discipline,c=n.intellect,o=n.strength,l=n.total,s=n.resilience;return r<=59&&i>=60&&r%10<=4&&[i%10<=2,c%10<=2,a%10<=2,o%10<=2].filter((function(e){return e})).length>=3&&s<=20&&l>=t}],["PvP - Perfect",function(e){var t=N(e),n=t.mobility,r=t.recovery,i=t.discipline,a=t.intellect,c=t.strength,o=t.resilience;return r>=60&&o<=26&&[L(n),o%10<=2,L(r),L(a),L(i),L(c)].filter((function(e){return e})).length>=5}],["PvE - Standard",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:220,n=N(e),r=n.mobility,i=n.recovery,a=n.discipline,c=n.intellect,o=n.strength,l=n.total;return i>=60&&a>=50&&[r%10<=4,i%10<=4,c%10<=4,a%10<=4,o%10<=4].filter((function(e){return e})).length>=5&&l>=t}],["PvE - Perfect",function(e){var t=N(e),n=t.mobility,r=t.recovery,i=t.discipline,a=t.intellect,c=t.strength,o=t.resilience;return r>=60&&i>=50&&[n%10<=2,r%10<=2,a%10<=2,i%10<=2,c%10<=2,o%10<=2].filter((function(e){return e})).length>=6}],["PvP - Top Stats (Low Resilience)",function(e){var t=N(e),n=t.resilience;return n<20}],["PvP - Low Gear (Low Resilience)",function(e){var t=N(e),n=t.mobility,r=t.recovery,i=t.discipline,a=t.intellect,c=t.strength,o=t.resilience;return n<=59&&n%10<=4&&o<=30&&[r%10<=4,a%10<=4,i%10<=4,c%10<=4].filter((function(e){return e})).length>=4}],["PvP - Top Stats (Super Low Resilience)",function(e){var t=N(e),n=(t.resilience,t.mobility),r=t.recovery;return n+r>=125}],["PvP - Minimum Gear",function(e){var t=N(e),n=t.mobility,r=t.recovery;return n>=30&&r>=40}],["PvP - Perfect (Low Resilience)",function(e){var t=N(e),n=t.mobility,r=t.recovery,i=t.discipline,a=t.intellect,c=t.strength,o=t.resilience;return r>=80&&n>=40&&o>=10&&o<=14&&[L(n),L(r),L(i),L(c),a%10<=4].filter((function(e){return e})).length>=5}],["PvP - Unchi Hunter",function(e){var t=N(e),n=t.mobility,r=t.recovery,i=(t.discipline,t.intellect,t.strength,t.resilience);return n<=59&&n+r>=109&&n%10<=4&&i>=10&&i<=12&&r%10<=4}],["PvP - Unchi Warlock",function(e){var t=N(e),n=t.mobility,r=t.recovery,i=(t.discipline,t.intellect),a=(t.strength,t.resilience);return n<=19&&n+r>=69&&n%10<=4&&a>=10&&a<=22&&r%10<=4&&i%10<=4&&i>=60}],["PvP - Unchi Titan 6",function(e){var t=N(e),n=(t.mobility,t.recovery),r=(t.discipline,t.intellect,t.strength,t.resilience);return r+n>=100}],["PvP - Warlock Trash Gear",function(e){var t=N(e),n=t.mobility,r=t.recovery;return n<=39&&n%10<=4&&r>=50}],["PvP - Warlock Minimum Gear",function(e){var t=N(e),n=t.mobility,r=t.recovery,i=t.discipline,a=t.strength,c=t.resilience;return n<=39&&n%10<=4&&r>=50&&c<=24&&[r%10<=4,i%10<=4,a%10<=4].filter((function(e){return e})).length>=2}],["PvE - Hunter - Minimum - Ability Spam",function(e){var t=N(e),n=t.mobility,r=t.recovery,i=t.resilience;return n>=50&&r>=50&&i<=30}],["PvE - Hunter - Average - Ability Spam",function(e){var t=N(e),n=t.mobility,r=t.recovery,i=t.resilience,a=t.discipline,c=t.intellect;return n>=50&&r>=50&&i<=30&&[n%10<=4,r%10<=4,c%10<=4,i%10<=4,a%10<=4].filter((function(e){return e})).length>=3}],["PvE - Hunter - Above Average - Ability Spam",function(e){var t=N(e),n=t.mobility,r=t.recovery,i=t.resilience,a=t.intellect;return n>=50&&r>=50&&i<=30&&[L(n),L(r),L(a),L(i)].filter((function(e){return e})).length>=4}],["PvE - Warlock - Minimum - Ability Spam",function(e){var t=N(e),n=t.mobility,r=t.recovery,i=t.resilience;return n<=30&&r>=50&&i<=30}],["PvE - Warlock - Average - Ability Spam",function(e){var t=N(e),n=t.mobility,r=t.recovery,i=t.resilience,a=t.discipline,c=t.intellect;return n<=30&&r>=50&&i<=30&&[n%10<=4,r%10<=4,c%10<=4,i%10<=4,a%10<=4].filter((function(e){return e})).length>=3}],["PvE - Warlock - Above Average - Ability Spam",function(e){var t=N(e),n=t.mobility,r=t.recovery,i=t.resilience,a=t.discipline,c=t.intellect;return n<=30&&r>=50&&i<=30&&[n%10<=4,r%10<=4,c%10<=4,i%10<=4,a%10<=4].filter((function(e){return e})).length>=5}],["PvE - Titan - Minimum - Ability Spam",function(e){var t=N(e),n=t.mobility,r=t.recovery,i=t.resilience,a=t.discipline,c=t.intellect;return n<=30&&r>=50&&i>=50&&[n%10<=4,r%10<=4,c%10<=4,i%10<=4,a%10<=4].filter((function(e){return e})).length>=3}],["PvE - Titan - Average - Ability Spam",function(e){var t=N(e),n=t.mobility,r=t.recovery,i=t.resilience,a=t.discipline,c=t.intellect;return n<=30&&r>=50&&i>=50&&[n%10<=4,r%10<=4,c%10<=4,i%10<=4,a%10<=4].filter((function(e){return e})).length>=3}],["PvE - Titan - Above Average - Ability Spam",function(e){var t=N(e),n=t.mobility,r=t.recovery,i=t.resilience,a=t.discipline,c=t.intellect;return n<=30&&r>=50&&i>=50&&[n%10<=4,r%10<=4,c%10<=4,i%10<=4,a%10<=4].filter((function(e){return e})).length>=5}]];function _(){var e=Object(C.a)(["\n        font-family: monospace;\n        color: #fff;\n        background: #000;\n        width: 500px;\n        padding: 10px;\n      "]);return _=function(){return e},e}var z="---------------------------------------------------".length;function G(e){var t=e.items,n=e.stats,r=e.mode,a=n.mobility,c=n.recovery,o=n.discipline,s=n.intellect,u=n.strength,m=n.resilience,p=n.total,f=r.indexOf("PvP")>=0,v=[["Mobility",a,f?30:10],["Resilience",m,10],["Recovery",c,10],["Discipline",o,10],["Intellect",s,10],["Strength",u,f?30:10]];return i.a.createElement("pre",{className:Object(x.a)(_())},"| ".concat("Stat Total".padEnd(13,".")).concat(p," (max: 280)").padEnd(z-1)+"|",i.a.createElement("br",null),v.map((function(e){var t=Object(l.a)(e,3),n=t[0],r=t[1],a=t[2];return i.a.createElement("div",{key:n},"| ".concat(n.padEnd(13,".")).concat(r," (").concat(r+a,")").padEnd(z-1)+"|")})),"| ".padEnd(z-1)+"|",i.a.createElement("br",null),t.map((function(e,t){var n=[["Mobility",e.mobility],["Resilience",e.resilience],["Recovery",e.recovery],["Discipline",e.discipline],["Intellect",e.intellect],["Strength",e.strength]],r=n.reduce((function(e,t){return e+t[1]}),0),a=n.map((function(e){var t=Object(l.a)(e,2),n=t[0],r=t[1];return"".concat(n.substr(0,3)," ").concat(r)})).join("  ");return i.a.createElement("div",{key:t},"| [".concat(e.content.itemTypeDisplayName,"] ").concat(e.content.displayProperties.name," (").concat(r,")").padEnd(z-1)+"|",i.a.createElement("br",null),"| ".concat(a).padEnd(z-1)+"|")})))}function J(){var e=Object(C.a)(["justify-content: flex-start;"]);return J=function(){return e},e}var q=n(140),B=n(141),F=n(143),U=n(145),$=function(e){Object(U.a)(n,e);var t=Object(F.a)(n);function n(){var e;Object(q.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={hasError:!1,error:new Error("")},e}return Object(B.a)(n,[{key:"componentDidCatch",value:function(e,t){console.debug("caught error within ErrorBoundary"),console.error(e,t),this.setState({error:e})}},{key:"render",value:function(){return this.state.hasError?i.a.createElement("div",null,this.props.defaultErrorMessage||"An error has occurred on this page.",i.a.createElement("pre",{style:{whiteSpace:"pre-wrap",wordWrap:"break-word"}},this.state.error.message,"\n",this.state.error.stack)):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(r.Component),K=[["/d2io/optimizer",function(){var e=A(),t=e.state,n=e.dispatch,a=Object(r.useState)(!0),c=Object(l.a)(a,2),s=c[0],m=c[1],p=Object(r.useState)("No Optimization"),h=Object(l.a)(p,2),b=h[0],y=h[1],g=Object(r.useState)(""),O=Object(l.a)(g,2),w=O[0],j=O[1],S=Object(r.useState)(""),C=Object(l.a)(S,2),T=C[0],D=C[1];Object(r.useEffect)((function(){var e;t.manifest.version?m(!1):Promise.all([(e=t.userAuth,P()({url:"https://www.bungie.net/Platform/Destiny2/".concat(e.membershipType,"/Profile/").concat(e.membershipId,"/"),params:{components:"100,102,103,200,201,202,205,300,301,304,305,306,307,800,308,310,309,900,1100"},headers:k(e)})),P()({url:"".concat(I,"/Destiny2/Manifest/"),headers:k()})]).then((function(e){var t=Object(l.a)(e,2),r=t[0],i=t[1];return n(v({contentPath:i.data.Response.jsonWorldComponentContentPaths.en.DestinyRecordDefinition,version:i.data.Response.version})),n(f({data:r.data.Response})),Promise.all([P()({url:"https://www.bungie.net".concat(i.data.Response.jsonWorldComponentContentPaths.en.DestinyInventoryItemLiteDefinition)}),P()({url:"https://www.bungie.net".concat(i.data.Response.jsonWorldComponentContentPaths.en.DestinyPowerCapDefinition)})])})).then((function(e){var t=Object(l.a)(e,2),r=t[0],i=t[1];n(d(Object(u.a)({},r.data,{powercaps:i.data}))),m(!1)}))}),[t.userAuth,t.manifest,m]);var L=Object(r.useCallback)((function(e){return y(e.target.value)}),[]),_=Object(r.useCallback)((function(e){j(e.target.value),D("")}),[]),z=Object(r.useCallback)((function(e){return D(e.target.value)}),[]),q=Object(r.useMemo)((function(){return t.profile.data&&t.profile.data.profileInventory&&0!==Object.keys(t.componentContent).length?M(t.profile.data,t.componentContent):[]}),[t.profile,t.componentContent]),B=function(e){var t=e.powerCap,n=e.exoticItem,r=e.items,i=e.mainClass,a=[],c=[],o=[],l=[];return 0===r.length||""===i||r.filter((function(e){return e.powerCap>=t})).filter((function(e){return e.classType.toString()===i.toString()})).forEach((function(e){switch(e.content.itemTypeDisplayName){case"Helmet":R(n,e)&&a.push(e);break;case"Gauntlets":R(n,e)&&c.push(e);break;case"Chest Armor":R(n,e)&&o.push(e);break;case"Leg Armor":R(n,e)&&l.push(e)}})),{helmets:a,gauntlets:c,chests:o,legs:l}}({powerCap:1260,exoticItem:q.filter((function(e){return e.itemHash.toString()===T.toString()}))[0]||{},items:q,mainClass:w}),F=H()(q.filter((function(e){return e.exotic&&e.classType.toString()===w.toString()})),(function(e){return e.itemHash})),U=B.helmets,$=B.gauntlets,K=B.chests,Q=B.legs,V=Object(r.useMemo)((function(){var e,t=[],n=W.find((function(e){return Object(l.a)(e,1)[0]===b}));return e=n?n[1]:function(){return!0},U.forEach((function(n){$.forEach((function(r){K.forEach((function(i){Q.forEach((function(a){var c=[n,r,i,a];e&&e(c)&&t.push({set:c,stats:N(c)})}))}))}))})),t.sort((function(e,t){return t.stats.total-e.stats.total}))}),[U,$,K,Q,b]);return s&&0===q.length?i.a.createElement("div",null,i.a.createElement(E.Spinner,{className:Object(x.a)(J())}),"Loading profile data..."):i.a.createElement("div",{style:{padding:15}},i.a.createElement("div",{style:{width:320}},i.a.createElement(E.FormGroup,{label:"Optimizer Presets"},i.a.createElement(E.HTMLSelect,{options:W.map((function(e){return Object(l.a)(e,1)[0]})),onChange:L,value:b})),i.a.createElement(E.FormGroup,{label:"Class"},i.a.createElement(E.HTMLSelect,{options:[{label:"",value:""},{label:"Titan",value:0},{label:"Hunter",value:1},{label:"Warlock",value:2}],onChange:_,value:w})),i.a.createElement(E.FormGroup,{label:"Exotic"},i.a.createElement(E.HTMLSelect,{options:[{label:"-- No Exotic --",value:""}].concat(Object(o.a)(F.map((function(e){return{label:e.content.displayProperties.name,value:e.itemHash}})))),onChange:z,value:T})),i.a.createElement("hr",null)),i.a.createElement("div",null,"Results: ",V.length.toLocaleString()," (only showing top 1,000)",i.a.createElement("br",null)),b&&V.filter((function(e,t){return t<1e3})).map((function(e,t){var n=e.set,r=e.stats;return i.a.createElement(G,{key:t,items:n,stats:r,mode:b})})))}]].map((function(e){var t,n=Object(l.a)(e,2),r=n[0],a=n[1];return[r,(t=a,function(e){var n=A().state;return!n.userAuth.accessToken||Date.now()>=n.userAuth.expiresIn?i.a.createElement(y.a,{to:"/d2io"}):i.a.createElement(t,e)})]})),Q=[["/d2io",function(){return i.a.createElement("div",null,i.a.createElement(E.AnchorButton,{href:"https://www.bungie.net/en/OAuth/Authorize?client_id=3770&response_type=code"},"Sync Destiny 2 Characters"))}],["/d2io/auth",function(e){var t=e.location,n=A(),a=n.dispatch,c=n.state,o=Object(y.g)();return Object(r.useEffect)((function(){var e=w.a.parse(t.search);e.code&&function(e){return P()({method:"POST",headers:Object(u.a)({},k(),{"content-type":"application/x-www-form-urlencoded"}),data:w.a.stringify({code:e,grant_type:"authorization_code",client_id:"3770"}),url:(t="/app/oauth/token/",I+t)});var t}(e.code||"").then((function(e){var t,n=p(e.data.access_token,e.data.expires_in);return console.log(e,n),(t=n,P()({url:"".concat(I,"/User/GetMembershipsForCurrentUser/"),headers:k(t)})).then((function(t){if(!t.data.Response.destinyMemberships[0].membershipId)throw new Error("failed to get membership id");return a(p(e.data.access_token,e.data.expires_in,t.data.Response.destinyMemberships[0].membershipId,t.data.Response.destinyMemberships[0].membershipType))}))}))}),[a,t,o]),!(Date.now()>c.userAuth.expiresIn)&&c.userAuth.membershipId?i.a.createElement(y.a,{to:"/d2io/optimizer"}):i.a.createElement("div",null,"authenticating...")}]].concat(Object(o.a)(K)).map((function(e){var t=Object(l.a)(e,2),n=t[0],r=t[1];return i.a.createElement(y.b,{key:n,component:r,path:n,exact:!0})}));var V=function(){var e=Object(r.useReducer)((function(e,t){var n=t.name,r=Object(m.a)(t,["name"]);return e[n]=r,JSON.parse(JSON.stringify(e))}),h),t=Object(l.a)(e,2),n=t[0],a=t[1];return i.a.createElement(b.Provider,{value:{state:JSON.parse(JSON.stringify(n)),dispatch:a}},i.a.createElement($,null,i.a.createElement(g.a,null,i.a.createElement(y.d,null,Q))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[203,1,2]]]);
//# sourceMappingURL=main.f60b9d1e.chunk.js.map