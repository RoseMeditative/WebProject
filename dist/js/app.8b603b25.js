(function(t){function a(a){for(var s,i,o=a[0],l=a[1],c=a[2],u=0,v=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&v.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(a);while(v.length)v.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,o=1;o<e.length;o++){var l=e[o];0!==n[l]&&(s=!1)}s&&(r.splice(a--,1),t=i(i.s=e[0]))}return t}var s={},n={app:0},r=[];function i(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=s,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)i.d(e,s,function(a){return t[a]}.bind(null,s));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var d=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-parallax",{attrs:{src:"https://images7.alphacoders.com/958/958598.jpg"}},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("h1",[t._v("What will you choose ?")])])],1),e("v-form",{model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[!1===t.notConnect?e("v-container",[e("v-row",{attrs:{align:"center",justify:"center"}},[e("h1",[t._v("Ok "+t._s(t.username)+", Let's play !")]),e("v-btn",{staticClass:"ma-12",attrs:{tile:"",color:"red"},on:{click:t.logout}},[t._v("Quit")])],1),e("questPage")],1):t._e(),t.notConnect?e("v-container",[e("br"),e("br"),e("v-row",{attrs:{align:"center",justify:"center"}},[e("div",{staticClass:"center-text"},[e("v-btn",{attrs:{rounded:"",color:"orange",dark:""},on:{click:t.onClickNotRegister}},[t._v("Not Registered")]),e("v-btn",{attrs:{rounded:"",color:"blue",dark:""},on:{click:t.onClickRegister}},[t._v("Already Registered")])],1),t.notRegister?e("v-container",[e("h1",{attrs:{align:"center",justify:"center"}},[t._v("Create your Account")]),e("v-text-field",{attrs:{label:"Create Username",required:""},model:{value:t.username,callback:function(a){t.username=a},expression:"username"}}),e("v-text-field",{attrs:{label:"Create Password",type:"password",required:""},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-btn",{staticClass:"mx-12",attrs:{fab:"",dark:"",color:"green"},on:{click:t.newUser}},[e("v-icon",{attrs:{dark:""}},[t._v("mdi-check")])],1)],1)],1):t._e(),t.Register?e("v-container",[e("h1",{attrs:{align:"center",justify:"center"}},[t._v("Connection")]),e("v-text-field",{attrs:{label:"Username",required:""},model:{value:t.username,callback:function(a){t.username=a},expression:"username"}}),e("v-text-field",{attrs:{label:"Password",type:"password",required:""},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-btn",{staticClass:"mx-12",attrs:{fab:"",dark:"",color:"green"},on:{click:t.login}},[e("v-icon",{attrs:{dark:""}},[t._v("mdi-check")])],1)],1)],1):t._e()],1)],1):t._e()],1)],1)},r=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-timeline",{attrs:{dense:t.$vuetify.breakpoint.smAndDown}},[e("v-timeline-item",{attrs:{color:"purple lighten-2","fill-dot":"",right:""}},[e("v-card",[e("v-card-title",{staticClass:"purple lighten-2"},[e("h2",{staticClass:"display-1 white--text font-weight-light"},[t._v("Tu préfères")])]),e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",md:"10"}},[t._v("Avoir tout le temps faim OU Avoir tout le temps soif ?")]),e("v-col",{staticClass:"hidden-sm-and-down text-right",attrs:{md:"2"}}),e("v-row",{attrs:{align:"center",justify:"center"}},[!1===t.answ1?e("v-btn",{attrs:{rounded:"",color:"pink",dark:""},on:{click:function(a){return t.addStats(11)}}},[t._v("Faim")]):t._e(),!1===t.answ1?e("v-btn",{attrs:{rounded:"",color:"orange",dark:""},on:{click:function(a){return t.addStats(12)}}},[t._v("Soif")]):t._e(),!0===t.answ1?e("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"pink"}},[t._v(t._s(t.Data11)+"%")]):t._e(),!0===t.answ1?e("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"orange"}},[t._v(t._s(t.Data12)+"%")]):t._e()],1)],1)],1)],1)],1),e("v-timeline-item",{attrs:{color:"amber lighten-1","fill-dot":"",left:"",small:""}},[e("v-card",[e("v-card-title",{staticClass:"amber lighten-1 justify-end"},[e("h2",{staticClass:"display-1 mr-4 white--text font-weight-light"},[t._v("Tu préfères")])]),e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",md:"10"}},[t._v("Vivre le même jour toute ta vie OU Oublier chaque jour ce que tu as fait la veille ?")]),e("v-col",{staticClass:"hidden-sm-and-down text-right",attrs:{md:"2"}}),e("v-row",{attrs:{align:"center",justify:"center"}},[!1===t.answ2?e("v-btn",{attrs:{rounded:"",color:"pink",dark:""},on:{click:function(a){return t.addStats(21)}}},[t._v("Meme jour")]):t._e(),!1===t.answ2?e("v-btn",{attrs:{rounded:"",color:"orange",dark:""},on:{click:function(a){return t.addStats(22)}}},[t._v("Oublier")]):t._e(),!0===t.answ2?e("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"pink"}},[t._v(t._s(t.Data21)+"%")]):t._e(),!0===t.answ2?e("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"orange"}},[t._v(t._s(t.Data22)+"%")]):t._e()],1)],1)],1)],1)],1),e("v-timeline-item",{attrs:{color:"cyan lighten-1","fill-dot":"",right:""}},[e("v-card",[e("v-card-title",{staticClass:"cyan lighten-1"},[e("h2",{staticClass:"display-1 white--text font-weight-light"},[t._v("Tu préfères")])]),e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",md:"10"}},[t._v("Avoir une trompe sur le ventre OU Avoir un doigt sur le front ?")]),e("v-col",{staticClass:"hidden-sm-and-down text-right",attrs:{md:"2"}}),e("v-row",{attrs:{align:"center",justify:"center"}},[!1===t.answ3?e("v-btn",{attrs:{rounded:"",color:"pink",dark:""},on:{click:function(a){return t.addStats(31)}}},[t._v("Trompe")]):t._e(),!1===t.answ3?e("v-btn",{attrs:{rounded:"",color:"orange",dark:""},on:{click:function(a){return t.addStats(32)}}},[t._v("Doigt")]):t._e(),!0===t.answ3?e("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"pink"}},[t._v(t._s(t.Data31)+"%")]):t._e(),!0===t.answ3?e("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"orange"}},[t._v(t._s(t.Data32)+"%")]):t._e()],1)],1)],1)],1)],1),e("v-timeline-item",{attrs:{color:"green lighten-1","fill-dot":"",left:"",small:""}},[e("v-card",[e("v-card-title",{staticClass:"green lighten-1 justify-end"},[e("h2",{staticClass:"display-1 mr-4 white--text font-weight-light"},[t._v("Tu préfères")])]),e("v-container",[e("v-row",[e("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"2"}}),e("v-col",{attrs:{cols:"12",md:"10"}},[t._v("Avoir les pouvoirs de Superman OU Avoir la plus belle femme en tant que petite amie ?")]),e("v-row",{attrs:{align:"center",justify:"center"}},[!1===t.answ4?e("v-btn",{attrs:{rounded:"",color:"pink",dark:""},on:{click:function(a){return t.addStats(41)}}},[t._v("Superman")]):t._e(),!1===t.answ4?e("v-btn",{attrs:{rounded:"",color:"orange",dark:""},on:{click:function(a){return t.addStats(42)}}},[t._v("Belle femme")]):t._e(),!0===t.answ4?e("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"pink"}},[t._v(t._s(t.Data41)+"%")]):t._e(),!0===t.answ4?e("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"orange"}},[t._v(t._s(t.Data42)+"%")]):t._e()],1)],1)],1)],1)],1),e("v-timeline-item",{attrs:{color:"red lighten-1","fill-dot":"",right:""}},[e("v-card",[e("v-card-title",{staticClass:"red lighten-1"},[e("h2",{staticClass:"display-1 white--text font-weight-light"},[t._v("Tu préfères")])]),e("v-container",[e("v-row",[e("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"2"}}),e("v-col",{attrs:{cols:"12",md:"10"}},[t._v("Voler aussi haut que tu veux mais seulement à 10 kmh OU Voler à 1 m du sol mais aussi vite que tu veux ?")]),e("v-row",{attrs:{align:"center",justify:"center"}},[!1===t.answ5?e("v-btn",{attrs:{rounded:"",color:"pink",dark:""},on:{click:function(a){return t.addStats(51)}}},[t._v("Aussi haut")]):t._e(),!1===t.answ5?e("v-btn",{attrs:{rounded:"",color:"orange",dark:""},on:{click:function(a){return t.addStats(52)}}},[t._v("1m du sol")]):t._e(),!0===t.answ5?e("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"pink"}},[t._v(t._s(t.Data51)+"%")]):t._e(),!0===t.answ5?e("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"orange"}},[t._v(t._s(t.Data52)+"%")]):t._e()],1)],1)],1)],1)],1)],1)],1)},o=[],l={data:()=>({answ1:!1,answ2:!1,answ3:!1,answ4:!1,answ5:!1,Data11:0,Data12:0,Data21:0,Data22:0,Data31:0,Data32:0,Data41:0,Data42:0,Data51:0,Data52:0,Data1:0,Data2:0,totalData:0,url:"http://localhost:4000"}),methods:{async addStats(t){const a=await this.axios.post(this.url+"/api/addStats",{ans:t});console.log(a),this.Data1=a.data.message1,this.Data2=a.data.message2,this.totalData=this.Data1+this.Data2,this.Data1=this.Data1/this.totalData*100,this.Data2=this.Data2/this.totalData*100,11!==t&&12!==t||(this.answ1=!0,this.Data11=this.Data1,this.Data12=this.Data2),21!==t&&22!==t||(this.answ2=!0,this.Data21=this.Data1,this.Data22=this.Data2),31!==t&&32!==t||(this.answ3=!0,this.Data31=this.Data1,this.Data32=this.Data2),41!==t&&42!==t||(this.answ4=!0,this.Data41=this.Data1,this.Data42=this.Data2),51!==t&&52!==t||(this.answ5=!0,this.Data51=this.Data1,this.Data52=this.Data2)}}},c=l,d=e("2877"),u=e("6544"),v=e.n(u),h=e("7496"),p=e("8336"),m=e("b0af"),f=e("99d9"),g=e("62ad"),w=e("a523"),_=e("0fd9"),b=e("8414"),k=e("1e06"),D=Object(d["a"])(c,i,o,!1,null,null,null),y=D.exports;v()(D,{VApp:h["a"],VBtn:p["a"],VCard:m["a"],VCardTitle:f["a"],VCol:g["a"],VContainer:w["a"],VRow:_["a"],VTimeline:b["a"],VTimelineItem:k["a"]});var C={name:"App",components:{questPage:y},data:()=>({valid:!1,notConnect:!0,notRegister:!1,Register:!1,username:"",password:"",answer:0,todos:[],url:"http://localhost:4000"}),methods:{async login(){const t=await this.axios.post(this.url+"/api/login",{login:this.username,password:this.password});alert(t.data.message),"connected"===t.data.message&&(this.notConnect=!1,alert("CONNECTED !"))},async onClickNotRegister(){this.notRegister=!0,this.Register=!1},async onClickRegister(){this.notRegister=!1,this.Register=!0},async newUser(){const t=await this.axios.post(this.url+"/api/newUser",{login:this.username,password:this.password});alert(t.data.message)},async logout(){const t=await this.axios.post(this.url+"/api/logout",{});alert(t.data.message),"disconnected"===t.data.message&&(alert(t.data.message),this.notConnect=!0)}}},x=C,j=e("4bd4"),O=e("132d"),S=e("8b9c"),V=e("8654"),R=Object(d["a"])(x,n,r,!1,null,null,null),T=R.exports;v()(R,{VApp:h["a"],VBtn:p["a"],VContainer:w["a"],VForm:j["a"],VIcon:O["a"],VParallax:S["a"],VRow:_["a"],VTextField:V["a"]});var A=e("f309");s["a"].use(A["a"]);var P=new A["a"]({theme:{dark:!0},icons:{iconfont:"mdi"}}),q=e("bc3a"),U=e.n(q),M=e("a7fe"),N=e.n(M);s["a"].config.productionTip=!1,U.a.defaults.withCredentials=!0,s["a"].use(N.a,U.a),new s["a"]({vuetify:P,render:t=>t(T)}).$mount("#app")}});
//# sourceMappingURL=app.8b603b25.js.map