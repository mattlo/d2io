(this["webpackJsonpdestiny-2-inventory-manager"]=this["webpackJsonpdestiny-2-inventory-manager"]||[]).push([[0],{205:function(e,t,n){e.exports=n(357)},210:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(13),c=n.n(a),o=(n(210),n(21)),l=n(5),s=(n(211),n(212),n(63)),u=n(14),m=n(68);function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i={name:"userAuth",accessToken:e,membershipId:n,expiresIn:Date.now()+1e3*t,membershipType:r};if(e&&window.localStorage.setItem("userAuth",JSON.stringify(i)),!e){var a=JSON.parse(window.localStorage.getItem("userAuth")||"{}");return Object(u.a)({},i,{},a)}return i}function f(e){return Object(u.a)({name:"profile"},e)}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{contentPath:"",version:""};return Object(u.a)({name:"manifest"},e)}function d(e){return Object(u.a)({name:"componentContent"},e)}var h=[p,f,v,d].reduce((function(e,t){var n=t(),r=n.name,i=Object(m.a)(n,["name"]);if(!r)throw new Error("action must return a `type` value");return Object(u.a)({},e,Object(s.a)({},r,i))}),{}),b=Object(r.createContext)(h),y=n(6),g=n(147),O=n(25);var j=n(64),E=n.n(j),w=n(31),S=n.n(w),P="f5a851a085ec464e8c1af199031b6aec",I="https://www.bungie.net/platform";"https://www.bungie.net/en/OAuth/Authorize?client_id=".concat("3770","&response_type=code");function k(e){return e?((!e.accessToken||Date.now()>e.expiresIn)&&(window.location.href="/d2io"),{"x-api-key":P,Authorization:"Bearer ".concat(e.accessToken)}):{"x-api-key":P}}function C(){return Object(r.useContext)(b)}var A=n(65),M=n(67),x=n(144),T=n.n(x),H=n(39),D=n.n(H),R=[["204137529","mobility",-5],["3682186345","resilience",-5],["555005975","recovery",-5],["2623485440","discipline",-5],["1227870362","intellect",-5],["3699676109","strength",-5],["3961599962","mobility",-10],["275671171","mobility",-10],["2645858828","recovery",-10],["126924337","recovery",-10],["3790655795","resilience",-10],["2850583378","resilience",-10],["3253038666","strength",-10],["3355995799","intellect",-10],["4048838440","discipline",-10],["2979815167","strength",-20],["1484685887","mobility",-20],["3523075123","recovery",10],["2263321584","discipline",10],["3523075120","strength",10],["3523075121","intellect",10],["2263321585","intellect",10]];function N(e,t){return e.itemHash&&t.exotic?t.itemHash===e.itemHash:!(e.itemHash&&!t.exotic&&e.content.itemTypeDisplayName===t.content.itemTypeDisplayName)&&!(!e.hash&&t.exotic)}function L(e,t){var n=e.profileInventory.data.items,r=Object.keys(e.characterEquipment.data).map((function(t){return e.characterEquipment.data[t].items})).reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t))}),[]),i=Object.keys(e.characterInventories.data).map((function(t){return e.characterInventories.data[t].items})).reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t))}),[]),a=e.itemComponents.stats.data,c=e.itemComponents.instances.data,s=e.itemComponents.sockets.data;return[].concat(Object(o.a)(n),Object(o.a)(i),Object(o.a)(r)).filter((function(e){return e.itemInstanceId&&t[e.itemHash].equippingBlock&&t[e.itemHash].quality&&a[e.itemInstanceId]&&a[e.itemInstanceId].stats&&a[e.itemInstanceId].stats[144602215]})).map((function(e){return Object(u.a)({},e,{content:t[e.itemHash],exotic:"exotic_armor"===t[e.itemHash].equippingBlock.uniqueLabel,classType:t[e.itemHash].classType,powerCap:t.powercaps[t[e.itemHash].quality.versions[0].powerCapHash].powerCap,intellect:a[e.itemInstanceId].stats[144602215].value,mobility:a[e.itemInstanceId].stats[2996146975].value,strength:a[e.itemInstanceId].stats[4244567218].value,discipline:a[e.itemInstanceId].stats[1735777505].value,recovery:a[e.itemInstanceId].stats[1943323491].value,resilience:a[e.itemInstanceId].stats[392767087].value})})).map((function(e){return function(e,t,n){var r=t[e.itemInstanceId];if(!r||0===r.sockets.length)return e;R.forEach((function(t){var n=Object(l.a)(t,3),i=n[0],a=n[1],c=n[2];(function(e,t){return t.some((function(t){return t.isEnabled&&t.plugHash.toString()===e.toString()}))})(i,r.sockets)&&(e[a]+=c)}));var i=n[e.itemInstanceId];return i&&i.energy&&10===i.energy.energyCapacity&&["mobility","recovery","resilience","strength","intellect","discipline"].forEach((function(t){e[t]-=2})),e}(e,s,c)}))}function W(e){var t=e,n=t.reduce((function(e,t){return e+t.mobility}),0),r=t.reduce((function(e,t){return e+t.resilience}),0),i=t.reduce((function(e,t){return e+t.recovery}),0),a=t.reduce((function(e,t){return e+t.discipline}),0),c=t.reduce((function(e,t){return e+t.intellect}),0),o=t.reduce((function(e,t){return e+t.strength}),0);return{mobility:n,resilience:r,recovery:i,discipline:a,intellect:c,strength:o,total:n+r+i+a+c+o}}function _(e){return e%10>=5&&e%10<=7||e%10<=3}var z=[["No Optimization",function(){return!0}],["PvP - Standard",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:220,n=W(e),r=n.mobility,i=n.recovery,a=n.discipline,c=n.intellect,o=n.strength,l=n.total;return r<=59&&i>=60&&r%10<=4&&[i%10<=4,c%10<=4,a%10<=4,o%10<=4].filter((function(e){return e})).length>=4&&l>=t}],["PvP - Standard (Low Resilience)",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:220,n=W(e),r=n.mobility,i=n.recovery,a=n.discipline,c=n.intellect,o=n.strength,l=n.total,s=n.resilience;return r<=59&&i>=60&&r%10<=4&&[i%10<=2,c%10<=2,a%10<=2,o%10<=2].filter((function(e){return e})).length>=3&&s<=24&&l>=t}],["PvP - Perfect",function(e){var t=W(e),n=t.mobility,r=t.recovery,i=t.discipline,a=t.intellect,c=t.strength,o=t.resilience;return r>=60&&o<=26&&[_(n),o%10<=4,_(r),_(a),_(i),_(c)].filter((function(e){return e})).length>=5}],["PvE - Standard",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:220,n=W(e),r=n.mobility,i=n.recovery,a=n.discipline,c=n.intellect,o=n.strength,l=n.total;return i>=60&&a>=50&&[r%10<=4,i%10<=4,c%10<=4,a%10<=4,o%10<=4].filter((function(e){return e})).length>=5&&l>=t}],["PvE - Perfect",function(e){var t=W(e),n=t.mobility,r=t.recovery,i=t.discipline,a=t.intellect,c=t.strength,o=t.resilience;return r>=60&&i>=50&&[n%10<=2,r%10<=2,a%10<=2,i%10<=2,c%10<=2,o%10<=2].filter((function(e){return e})).length>=6}],["PvP - Top Stats (Low Resilience)",function(e){var t=W(e),n=t.resilience;return n<20}],["PvP - Low Gear (Low Resilience)",function(e){var t=W(e),n=t.mobility,r=t.recovery,i=t.discipline,a=t.intellect,c=t.strength,o=t.resilience;return n<=59&&n%10<=4&&o<=30&&[r%10<=4,a%10<=4,i%10<=4,c%10<=4].filter((function(e){return e})).length>=4}],["PvP - Top Stats (Super Low Resilience)",function(e){var t=W(e),n=(t.resilience,t.mobility),r=t.recovery;return n+r>=125}],["PvP - Minimum Gear",function(e){var t=W(e),n=t.mobility,r=t.recovery;return n>=30&&r>=40}],["PvP - Perfect (Low Resilience)",function(e){var t=W(e),n=t.mobility,r=t.recovery,i=t.discipline,a=t.intellect,c=t.strength,o=t.resilience;return r>=80&&n>=40&&o>=10&&o<=16&&[_(n),_(r),_(i),_(c),a%10<=4].filter((function(e){return e})).length>=5}],["PvP - Unchi Hunter",function(e){var t=W(e),n=t.mobility,r=t.recovery,i=(t.discipline,t.intellect,t.strength,t.resilience);return n<=59&&n+r>=109&&n%10<=4&&i>=10&&i<=12&&r%10<=4}],["PvP - Unchi Warlock",function(e){var t=W(e),n=t.mobility,r=t.recovery,i=(t.discipline,t.intellect),a=(t.strength,t.resilience);return n<=19&&n+r>=69&&n%10<=4&&a>=10&&a<=22&&r%10<=4&&i%10<=4&&i>=60}],["PvP - Unchi Titan 6",function(e){var t=W(e),n=(t.mobility,t.recovery),r=(t.discipline,t.intellect,t.strength,t.resilience);return r+n>=100}],["PvP - Warlock Trash Gear",function(e){var t=W(e),n=t.mobility,r=t.recovery;return n<=39&&n%10<=4&&r>=50}],["PvP - Warlock Minimum Gear",function(e){var t=W(e),n=t.mobility,r=t.recovery,i=t.discipline,a=t.strength,c=t.resilience;return n<=39&&n%10<=4&&r>=50&&c<=24&&[r%10<=4,i%10<=4,a%10<=4].filter((function(e){return e})).length>=2}],["PvE - Hunter - Minimum - Ability Spam",function(e){var t=W(e),n=t.mobility,r=t.recovery,i=t.resilience;return n>=50&&r>=50&&i<=30}],["PvE - Hunter - Average - Ability Spam",function(e){var t=W(e),n=t.mobility,r=t.recovery,i=t.resilience,a=t.discipline,c=t.intellect;return n>=50&&r>=50&&i<=30&&[n%10<=4,r%10<=4,c%10<=4,i%10<=4,a%10<=4].filter((function(e){return e})).length>=3}],["PvE - Hunter - Above Average - Ability Spam",function(e){var t=W(e),n=t.mobility,r=t.recovery,i=t.resilience,a=t.intellect;return n>=50&&r>=50&&i<=30&&[_(n),_(r),_(a),_(i)].filter((function(e){return e})).length>=4}],["PvE - Warlock - Minimum - Ability Spam",function(e){var t=W(e),n=t.mobility,r=t.recovery,i=t.resilience;return n<=30&&r>=50&&i<=30}],["PvE - Warlock - Average - Ability Spam",function(e){var t=W(e),n=t.mobility,r=t.recovery,i=t.resilience,a=t.discipline,c=t.intellect;return n<=30&&r>=50&&i<=30&&[n%10<=4,r%10<=4,c%10<=4,i%10<=4,a%10<=4].filter((function(e){return e})).length>=3}],["PvE - Warlock - Above Average - Ability Spam",function(e){var t=W(e),n=t.mobility,r=t.recovery,i=t.resilience,a=t.discipline,c=t.intellect;return n<=30&&r>=50&&i<=30&&[n%10<=4,r%10<=4,c%10<=4,i%10<=4,a%10<=4].filter((function(e){return e})).length>=5}],["PvE - Titan - Minimum - Ability Spam",function(e){var t=W(e),n=t.mobility,r=t.recovery,i=t.resilience,a=t.discipline,c=t.intellect;return n<=30&&r>=50&&i>=50&&[n%10<=4,r%10<=4,c%10<=4,i%10<=4,a%10<=4].filter((function(e){return e})).length>=3}],["PvE - Titan - Average - Ability Spam",function(e){var t=W(e),n=t.mobility,r=t.recovery,i=t.resilience,a=t.discipline,c=t.intellect;return n<=30&&r>=50&&i>=50&&[n%10<=4,r%10<=4,c%10<=4,i%10<=4,a%10<=4].filter((function(e){return e})).length>=3}],["PvE - Titan - Above Average - Ability Spam",function(e){var t=W(e),n=t.mobility,r=t.recovery,i=t.resilience,a=t.discipline,c=t.intellect;return n<=30&&r>=50&&i>=50&&[n%10<=4,r%10<=4,c%10<=4,i%10<=4,a%10<=4].filter((function(e){return e})).length>=5}]];function G(){var e=Object(A.a)(["\n        font-family: monospace;\n        color: #fff;\n        background: #000;\n        width: 500px;\n        padding: 10px;\n      "]);return G=function(){return e},e}var J="---------------------------------------------------".length;function q(e){var t=e.items,n=e.stats,r=e.mode,a=n.mobility,c=n.recovery,o=n.discipline,s=n.intellect,u=n.strength,m=n.resilience,p=n.total,f=r.indexOf("PvP")>=0,v=[["Mobility",a,f?30:10],["Resilience",m,10],["Recovery",c,10],["Discipline",o,10],["Intellect",s,10],["Strength",u,f?30:10]];return i.a.createElement("pre",{className:Object(M.a)(G())},"| ".concat("Stat Total".padEnd(13,".")).concat(p," (max: 280)").padEnd(J-1)+"|",i.a.createElement("br",null),v.map((function(e){var t=Object(l.a)(e,3),n=t[0],r=t[1],a=t[2];return i.a.createElement("div",{key:n},"| ".concat(n.padEnd(13,".")).concat(r," (").concat(r+a,")").padEnd(J-1)+"|")})),"| ".padEnd(J-1)+"|",i.a.createElement("br",null),t.map((function(e,t){var n=[["Mobility",e.mobility],["Resilience",e.resilience],["Recovery",e.recovery],["Discipline",e.discipline],["Intellect",e.intellect],["Strength",e.strength]],r=n.reduce((function(e,t){return e+t[1]}),0),a=n.map((function(e){var t=Object(l.a)(e,2),n=t[0],r=t[1];return"".concat(n.substr(0,3)," ").concat(r)})).join("  ");return i.a.createElement("div",{key:t},"| [".concat(e.content.itemTypeDisplayName,"] ").concat(e.content.displayProperties.name," (").concat(r,")").padEnd(J-1)+"|",i.a.createElement("br",null),"| ".concat(a).padEnd(J-1)+"|")})))}function B(){var e=Object(A.a)(["justify-content: flex-start;"]);return B=function(){return e},e}var F=n(145),U=n(146),Z=n(148),$=n(150),K=function(e){Object($.a)(n,e);var t=Object(Z.a)(n);function n(){var e;Object(F.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={hasError:!1,error:new Error("")},e}return Object(U.a)(n,[{key:"componentDidCatch",value:function(e,t){console.debug("caught error within ErrorBoundary"),console.error(e,t),this.setState({error:e})}},{key:"render",value:function(){return this.state.hasError?i.a.createElement("div",null,this.props.defaultErrorMessage||"An error has occurred on this page.",i.a.createElement("pre",{style:{whiteSpace:"pre-wrap",wordWrap:"break-word"}},this.state.error.message,"\n",this.state.error.stack)):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(r.Component),Q=[["/d2io/optimizer",function(){var e=C(),t=e.state,n=e.dispatch,a=Object(r.useState)(!0),c=Object(l.a)(a,2),s=c[0],m=c[1],p=Object(r.useState)("No Optimization"),h=Object(l.a)(p,2),b=h[0],y=h[1],g=Object(r.useState)(""),j=Object(l.a)(g,2),E=j[0],w=j[1],P=Object(r.useState)(""),A=Object(l.a)(P,2),x=A[0],H=A[1],R=Object(r.useState)(50),_=Object(l.a)(R,2),G=_[0],J=_[1],F=Object(r.useState)(20),U=Object(l.a)(F,2),Z=U[0],$=U[1],K=Object(r.useState)(60),Q=Object(l.a)(K,2),V=Q[0],X=Q[1],Y=Object(r.useState)(1),ee=Object(l.a)(Y,2),te=ee[0],ne=ee[1],re=Object(r.useState)(1),ie=Object(l.a)(re,2),ae=ie[0],ce=ie[1],oe=Object(r.useState)(1),le=Object(l.a)(oe,2),se=le[0],ue=le[1],me=Object(r.useState)(G),pe=Object(l.a)(me,2),fe=pe[0],ve=pe[1],de=Object(r.useState)(Z),he=Object(l.a)(de,2),be=he[0],ye=he[1],ge=Object(r.useState)(V),Oe=Object(l.a)(ge,2),je=Oe[0],Ee=Oe[1],we=Object(r.useState)(te),Se=Object(l.a)(we,2),Pe=Se[0],Ie=Se[1],ke=Object(r.useState)(ae),Ce=Object(l.a)(ke,2),Ae=Ce[0],Me=Ce[1],xe=Object(r.useState)(se),Te=Object(l.a)(xe,2),He=Te[0],De=Te[1],Re=Object(r.useMemo)((function(){return D()(ve,900)}),[]),Ne=Object(r.useMemo)((function(){return D()(ye,900)}),[]),Le=Object(r.useMemo)((function(){return D()(Ee,900)}),[]),We=Object(r.useMemo)((function(){return D()(De,900)}),[]),_e=Object(r.useMemo)((function(){return D()(Me,900)}),[]),ze=Object(r.useMemo)((function(){return D()(Ie,900)}),[]);Object(r.useEffect)((function(){var e;t.manifest.version?m(!1):Promise.all([(e=t.userAuth,S()({url:"https://www.bungie.net/Platform/Destiny2/".concat(e.membershipType,"/Profile/").concat(e.membershipId,"/"),params:{components:"100,102,103,200,201,202,205,300,301,304,305,306,307,800,308,310,309,900,1100"},headers:k(e)})),S()({url:"".concat(I,"/Destiny2/Manifest/"),headers:k()})]).then((function(e){var t=Object(l.a)(e,2),r=t[0],i=t[1];return n(v({contentPath:i.data.Response.jsonWorldComponentContentPaths.en.DestinyRecordDefinition,version:i.data.Response.version})),n(f({data:r.data.Response})),Promise.all([S()({url:"https://www.bungie.net".concat(i.data.Response.jsonWorldComponentContentPaths.en.DestinyInventoryItemLiteDefinition)}),S()({url:"https://www.bungie.net".concat(i.data.Response.jsonWorldComponentContentPaths.en.DestinyPowerCapDefinition)})])})).then((function(e){var t=Object(l.a)(e,2),r=t[0],i=t[1];n(d(Object(u.a)({},r.data,{powercaps:i.data}))),m(!1)}))}),[t.userAuth,t.manifest,m]),Object(r.useCallback)((function(e){return y(e.target.value)}),[]);var Ge=Object(r.useCallback)((function(e){w(e.target.value),H("")}),[]),Je=Object(r.useCallback)((function(e){return H(e.target.value)}),[]),qe=Object(r.useMemo)((function(){return t.profile.data&&t.profile.data.profileInventory&&0!==Object.keys(t.componentContent).length?L(t.profile.data,t.componentContent):[]}),[t.profile,t.componentContent]),Be=Object(r.useMemo)((function(){return function(e){var t=e.powerCap,n=e.exoticItem,r=e.items,i=e.mainClass,a=[],c=[],o=[],l=[];return 0===r.length||""===i||r.filter((function(e){return e.powerCap>=t})).filter((function(e){return e.classType.toString()===i.toString()})).forEach((function(e){switch(e.content.itemTypeDisplayName){case"Helmet":N(n,e)&&a.push(e);break;case"Gauntlets":N(n,e)&&c.push(e);break;case"Chest Armor":N(n,e)&&o.push(e);break;case"Leg Armor":N(n,e)&&l.push(e)}})),{helmets:a,gauntlets:c,chests:o,legs:l}}({powerCap:1260,exoticItem:qe.filter((function(e){return e.itemHash.toString()===x.toString()}))[0]||{},items:qe,mainClass:E})}),[qe,E]),Fe=T()(qe.filter((function(e){return e.exotic&&e.classType.toString()===E.toString()})),(function(e){return e.itemHash})),Ue=Be.helmets,Ze=Be.gauntlets,$e=Be.chests,Ke=Be.legs,Qe=Object(r.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:220,n=W(e),r=n.mobility,i=n.recovery,a=n.discipline,c=n.intellect,o=n.strength,l=n.total,s=n.resilience;return r>=fe&&s>=be&&i>=je&&c>=Ae&&o>=He&&a>=Pe&&l>=t}),[fe,be,je,Pe,Ae,He]),Ve=Object(r.useMemo)((function(){var e=[],t=z.find((function(e){return Object(l.a)(e,1)[0]===b}));return t?t[1]:function(){return!0},Ue.forEach((function(t){Ze.forEach((function(n){$e.forEach((function(r){Ke.forEach((function(i){var a=[t,n,r,i];Qe(a)&&e.push({set:a,stats:W(a)})}))}))}))})),e.sort((function(e,t){return t.stats.total-e.stats.total}))}),[Ue,Ze,$e,Ke,b,Qe]);return s&&0===qe.length?i.a.createElement("div",null,i.a.createElement(O.Spinner,{className:Object(M.a)(B())}),"Loading profile data..."):i.a.createElement("div",{style:{padding:15}},i.a.createElement("div",{style:{width:320}},i.a.createElement(O.FormGroup,{label:"Class"},i.a.createElement(O.HTMLSelect,{options:[{label:"",value:""},{label:"Titan",value:0},{label:"Hunter",value:1},{label:"Warlock",value:2}],onChange:Ge,value:E})),i.a.createElement(O.FormGroup,{label:"Exotic"},i.a.createElement(O.HTMLSelect,{options:[{label:"-- No Exotic --",value:""}].concat(Object(o.a)(Fe.map((function(e){return{label:e.content.displayProperties.name,value:e.itemHash}})))),onChange:Je,value:x})),i.a.createElement("div",null,[["Min Mobility",G,function(e){Re(e),J(e)}],["Min Resilience",Z,function(e){Ne(e),$(e)}],["Min Recovery",V,function(e){Le(e),X(e)}],["Min Discipline",te,function(e){ze(e),ne(e)}],["Min Intelligence",ae,function(e){_e(e),ce(e)}],["Min Strength",se,function(e){We(e),ue(e)}]].map((function(e){var t=Object(l.a)(e,3),n=t[0],r=t[1],a=t[2];return i.a.createElement("div",null,i.a.createElement(O.FormGroup,{label:n,key:n},i.a.createElement(O.Slider,{min:0,max:100,stepSize:1,labelStepSize:10,onChange:a,value:r})))}))),i.a.createElement("hr",null)),i.a.createElement("div",null,"Results: ",Ve.length.toLocaleString()," (only showing top 1,000)",i.a.createElement("br",null)),i.a.createElement("div",{style:{transform:"translateZ(0)"}},b&&Ve.filter((function(e,t){return t<250})).map((function(e,t){var n=e.set,r=e.stats;return i.a.createElement(q,{key:t,items:n,stats:r,mode:b})}))))}]].map((function(e){var t,n=Object(l.a)(e,2),r=n[0],a=n[1];return[r,(t=a,function(e){var n=C().state;return!n.userAuth.accessToken||Date.now()>=n.userAuth.expiresIn?i.a.createElement(y.a,{to:"/d2io"}):i.a.createElement(t,e)})]})),V=[["/d2io",function(){return i.a.createElement("div",null,i.a.createElement(O.AnchorButton,{href:"https://www.bungie.net/en/OAuth/Authorize?client_id=3770&response_type=code"},"Sync Destiny 2 Characters"))}],["/d2io/auth",function(e){var t=e.location,n=C(),a=n.dispatch,c=n.state,o=Object(y.g)();return Object(r.useEffect)((function(){var e=E.a.parse(t.search);e.code&&function(e){return S()({method:"POST",headers:Object(u.a)({},k(),{"content-type":"application/x-www-form-urlencoded"}),data:E.a.stringify({code:e,grant_type:"authorization_code",client_id:"3770"}),url:(t="/app/oauth/token/",I+t)});var t}(e.code||"").then((function(e){var t,n=p(e.data.access_token,e.data.expires_in);return console.log(e,n),(t=n,S()({url:"".concat(I,"/User/GetMembershipsForCurrentUser/"),headers:k(t)})).then((function(t){if(!t.data.Response.destinyMemberships[0].membershipId)throw new Error("failed to get membership id");return a(p(e.data.access_token,e.data.expires_in,t.data.Response.destinyMemberships[0].membershipId,t.data.Response.destinyMemberships[0].membershipType))}))}))}),[a,t,o]),!(Date.now()>c.userAuth.expiresIn)&&c.userAuth.membershipId?i.a.createElement(y.a,{to:"/d2io/optimizer"}):i.a.createElement("div",null,"authenticating...")}]].concat(Object(o.a)(Q)).map((function(e){var t=Object(l.a)(e,2),n=t[0],r=t[1];return i.a.createElement(y.b,{key:n,component:r,path:n,exact:!0})}));var X=function(){var e=Object(r.useReducer)((function(e,t){var n=t.name,r=Object(m.a)(t,["name"]);return e[n]=r,JSON.parse(JSON.stringify(e))}),h),t=Object(l.a)(e,2),n=t[0],a=t[1];return i.a.createElement(b.Provider,{value:{state:JSON.parse(JSON.stringify(n)),dispatch:a}},i.a.createElement(K,null,i.a.createElement(g.a,null,i.a.createElement(y.d,null,V))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[205,1,2]]]);
//# sourceMappingURL=main.1a1a8dd6.chunk.js.map