(function(e){function t(t){for(var s,o,n=t[0],l=t[1],c=t[2],d=0,m=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,o=1;o<a.length;o++){var n=a[o];0!==i[n]&&(s=!1)}s&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var s={},o={app:0},i={app:0},r=[];function n(e){return l.p+"js/"+({gamedetails:"gamedetails",games:"games"}[e]||e)+"."+{"chunk-74f2d060":"5d00df54","chunk-78c93f57":"b9e5810e",gamedetails:"4132413c",games:"38781c4c"}[e]+".js"}function l(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"chunk-74f2d060":1,"chunk-78c93f57":1,gamedetails:1,games:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var s="css/"+({gamedetails:"gamedetails",games:"games"}[e]||e)+"."+{"chunk-74f2d060":"cf88c591","chunk-78c93f57":"95d281a8",gamedetails:"e8bd19d6",games:"f1a96f30"}[e]+".css",i=l.p+s,r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var c=r[n],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===s||d===i))return t()}var m=document.getElementsByTagName("style");for(n=0;n<m.length;n++){c=m[n],d=c.getAttribute("data-href");if(d===s||d===i)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var s=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete o[e],u.parentNode.removeChild(u),a(r)},u.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(u)})).then((function(){o[e]=0})));var s=i[e];if(0!==s)if(s)t.push(s[2]);else{var r=new Promise((function(t,a){s=i[e]=[t,a]}));t.push(s[2]=r);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=n(e);var m=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(u);var a=i[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",m.name="ChunkLoadError",m.type=s,m.request=o,a[1](m)}i[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=s,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(a,s,function(t){return e[t]}.bind(null,s));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var u=d;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"01fb":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal fade",attrs:{id:e.id,tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content bg-gradient shadow-lg p-3 border border-dark"},[a("div",{staticClass:"modal-header text-light"},[e._t("header",[e._m(0)]),e._v(" "),e._m(1)],2),e._v(" "),e._t("body")],2)])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h5",{staticClass:"shadow-lg"},[a("u",[e._v("CREATE YOUR PROFILE")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{staticClass:"text-danger",attrs:{"aria-hidden":"true"}},[e._v("×")])])}],i={name:"profileModal",data(){return{}},props:["id"],computed:{},methods:{},components:{}},r=i,n=(a("23b8"),a("2877")),l=Object(n["a"])(r,s,o,!1,null,"1ed33e01",null);t["a"]=l.exports},1:function(e,t){},"23b8":function(e,t,a){"use strict";var s=a("493d"),o=a.n(s);o.a},"25d4":function(e,t,a){},"338c":function(e,t,a){"use strict";var s=a("d6df"),o=a.n(s);o.a},3792:function(e,t,a){"use strict";var s=a("6dd8"),o=a.n(s);o.a},4601:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard row justify-content-center text-light py-2"},[e.profile?e._e():a("div",[a("h1",[e._v("Loading....")])]),e._v(" "),e.profile?a("div",{staticClass:"col-12 col-md-3 mt-2"},[a("div",{staticClass:"card shadow-lg text-center bg-gradient border border-dark p-3 h-100"},[a("div",{staticClass:"card shadow-lg bg-card-gradient p-2"},[a("div",{staticClass:"text-right"},[e.editContent?e._e():a("i",{staticClass:"fa fa-pencil fa-1x cursor",on:{click:e.edit}}),e._v(" "),e.editContent?a("i",{staticClass:"fa fa-floppy-o fa-1x cursor",on:{click:e.saveContent}}):e._e()]),e._v(" "),a("h1",{directives:[{name:"show",rawName:"v-show",value:!e.editContent,expression:"!editContent"}],staticClass:"text-center text-shadow mb-3"},[e._v(e._s(e.profile.name))]),e._v(" "),e.editContent?e._e():a("h1",{directives:[{name:"show",rawName:"v-show",value:e.editContent,expression:"editContent"}],staticClass:"text-center m-3"},[e._v(e._s(e.editedUsername))]),e._v(" "),e.editContent?a("input",{directives:[{name:"model",rawName:"v-model",value:e.editedUsername,expression:"editedUsername"}],staticClass:"form-control mb-3",attrs:{type:"text",required:""},domProps:{value:e.editedUsername},on:{input:function(t){t.target.composing||(e.editedUsername=t.target.value)}}}):e._e(),e._v(" "),e.profile.picture?a("img",{directives:[{name:"show",rawName:"v-show",value:!e.editContent,expression:"!editContent"}],staticClass:"mb-4 mx-auto rounded-circle border border-dark shadow-lg img-fluid img-size",attrs:{src:e.profile.picture,alt:""}}):e._e(),e._v(" "),e.profile.picture?a("img",{directives:[{name:"show",rawName:"v-show",value:e.editContent,expression:"editContent"}],staticClass:"mb-4 mx-auto rounded-circle border border-dark shadow-lg img-fluid img-size",attrs:{src:e.editedImg,"aria-placeholder":"Please Provide Profile image Url",alt:""}}):e._e(),e._v(" "),e.profile.picture?e._e():a("img",{staticClass:"mb-4 rounded-circle",attrs:{src:""}}),e._v(" "),e.editContent?a("input",{directives:[{name:"model",rawName:"v-model",value:e.editedImg,expression:"editedImg"}],staticClass:"form-control mb-3",attrs:{type:"text",required:""},domProps:{value:e.editedImg},on:{input:function(t){t.target.composing||(e.editedImg=t.target.value)}}}):e._e(),e._v(" "),e.editContent?a("div",{staticClass:"my-3"},[e._m(0),e._v(" "),a("div",{},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mt-3"},[a("i",{staticClass:"fas fa-desktop text-warning"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.editedPc,expression:"editedPc"}],attrs:{type:"text"},domProps:{value:e.editedPc},on:{input:function(t){t.target.composing||(e.editedPc=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mt-3"},[a("i",{staticClass:"fab fa-xbox text-success"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.editedXbox,expression:"editedXbox"}],attrs:{type:"text"},domProps:{value:e.editedXbox},on:{input:function(t){t.target.composing||(e.editedXbox=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mt-3"},[a("i",{staticClass:"fab fa-playstation text-info"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.editedPlaystation,expression:"editedPlaystation"}],attrs:{type:"text"},domProps:{value:e.editedPlaystation},on:{input:function(t){t.target.composing||(e.editedPlaystation=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row text-danger"},[a("div",{staticClass:"col-12 mt-3"},[a("span",{staticClass:"iconify",attrs:{"data-icon":"mdi-nintendo-switch","data-inline":"false"}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.editedNintendo,expression:"editedNintendo"}],attrs:{type:"text"},domProps:{value:e.editedNintendo},on:{input:function(t){t.target.composing||(e.editedNintendo=t.target.value)}}})])])])]):e._e(),e._v(" "),a("h5",{staticClass:"mb-2 text-shadow"},[e._m(1),e._v(" "),a("br"),e._v(" "),a("b",[e._v(e._s(e.profile.rep))])]),e._v(" "),e.editContent?e._e():a("div",[e._m(2),e._v(" "),a("div",{staticClass:"row justify-content-center mb-2"},[a("div",{staticClass:"col-1",class:"pc"!=e.profile.consoles.pc&&e.profile.consoles.pc?"pc-shadow":""},["pc"!=e.profile.consoles.pc&&e.profile.consoles.pc?e.profile.consoles.pc?a("i",{staticClass:"fas fa-desktop text-warning cursor hover",on:{click:function(t){e.setDisplayGamerTag(e.profile.consoles.pc)}}}):e._e():a("i",{staticClass:"fas fa-desktop text-warning"})]),e._v(" "),a("div",{staticClass:"col-1",class:"xbox"!=e.profile.consoles.xbox&&e.profile.consoles.xbox?"xbox-shadow":""},["xbox"!=e.profile.consoles.xbox&&e.profile.consoles.xbox?e.profile.consoles.xbox?a("i",{staticClass:"fab fa-xbox text-success cursor hover",on:{click:function(t){e.setDisplayGamerTag(e.profile.consoles.xbox)}}}):e._e():a("i",{staticClass:"fab fa-xbox text-success"})]),e._v(" "),a("div",{staticClass:"col-1",class:"playstation"!=e.profile.consoles.playstation&&e.profile.consoles.playstation?"playstation-shadow":""},["playstation"!=e.profile.consoles.playstation&&e.profile.consoles.playstation?e.profile.consoles.playstation?a("i",{staticClass:"fab fa-playstation text-info cursor hover",on:{click:function(t){e.setDisplayGamerTag(e.profile.consoles.playstation)}}}):e._e():a("i",{staticClass:"fab fa-playstation text-info"})]),e._v(" "),a("div",{staticClass:"col-1 text-danger cursor hover",class:"nintendo"!=e.profile.consoles.nintendo&&e.profile.consoles.nintendo?"nintendo-shadow":""},["nintendo"!=e.profile.consoles.nintendo&&e.profile.consoles.nintendo?e.profile.consoles.nintendo?a("div",{on:{click:function(t){e.setDisplayGamerTag(e.profile.consoles.nintendo)}}},[a("span",{staticClass:"iconify",attrs:{"data-icon":"mdi-nintendo-switch","data-inline":"false"}})]):e._e():a("div",[a("span",{staticClass:"iconify",attrs:{"data-icon":"mdi-nintendo-switch","data-inline":"false"}})])])]),e._v(" "),e.displayGamerTag?a("h5",[e._v(e._s(e.displayGamerTag))]):e._e()]),e._v(" "),e.profile.following.length<1?a("p",{staticClass:"mb-2 text-shadow cursor hover"},[e._m(3),e._v(" "),a("br"),e._v(" "),a("b",[e._v(e._s(e.profile.following.length))])]):a("p",{staticClass:"mb-2 text-shadow cursor hover",on:{click:e.followingModal}},[e._m(4),e._v(" "),a("br"),e._v(" "),a("b",[e._v(e._s(e.profile.following.length))])]),e._v(" "),e.follows<1?a("p",{staticClass:"mb-2 text-shadow cursor hover"},[e._m(5),e._v(" "),a("br"),e._v(" "),a("b",[e._v(e._s(e.follows.length))])]):a("p",{staticClass:"mb-2 text-shadow cursor hover",on:{click:e.followersModal}},[e._m(6),e._v(" "),a("br"),e._v(" "),a("b",[e._v(e._s(e.follows.length))])])])])]):e._e(),e._v(" "),e.profile?a("div",{staticClass:"col-10 col-md-8 px-0 mt-2"},[a("div",{staticClass:"row shadow-lg bg-gradient border border-dark ml-md-2 mb-2 p-3"},[e._m(7),e._v(" "),a("div",{staticClass:"row overflow width mx-1"},e._l(e.profile.games,(function(e){return a("FollowedGames",{key:e.id,attrs:{gameData:e}})})))]),e._v(" "),e._m(8)]):e._e(),e._v(" "),a("ProfileModal",{attrs:{id:"id"}},[a("h1",{staticClass:"text-shadow",attrs:{slot:"header"},slot:"header"},[a("u",[e._v("FOLLOWING")])]),e._v(" "),a("div",{attrs:{slot:"body"},slot:"body"},[a("div",{staticClass:"col-12"},e._l(e.profile.following,(function(t){return a("div",{key:t.id},[a("div",{staticClass:"row text-left p-3 m-2 shadow-lg card cursor bg-card-gradient"},[a("h2",{staticClass:"mb-0 text-shadow",on:{click:function(a){e.routeToDash(t._id)}}},[t.picture?a("img",{staticClass:"img-fluid w-25 rounded shadow-lg",attrs:{src:t.picture}}):e._e(),e._v("\n              "+e._s(t.name)+"\n            ")])])])})))])]),e._v(" "),a("ProfileModal",{attrs:{id:"two"}},[a("h1",{attrs:{slot:"header"},slot:"header"},[a("u",[e._v("FOLLOWERS")])]),e._v(" "),a("div",{attrs:{slot:"body"},slot:"body"},[a("div",{staticClass:"col-12"},e._l(e.follows,(function(t){return a("div",{key:t.id},[a("div",{staticClass:"row text-left p-3 m-2 shadow-lg card cursor bg-card-gradient"},[a("h2",{staticClass:"mb-0 text-shadow",on:{click:function(a){e.routeToDash(t._id)}}},[t.picture?a("img",{staticClass:"img-fluid w-25 rounded shadow-lg",attrs:{src:t.picture}}):e._e(),e._v("\n              "+e._s(t.name)+"\n            ")])])])})))])])],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"mb-1"},[a("b",[e._v("GAMERTAGS:")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("u",[a("b",[e._v("REPUTATION")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"mb-1 text-shadow"},[a("u",[a("b",[e._v("GAMERTAGS")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("u",[a("b",[e._v("FOLLOWING")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("u",[a("b",[e._v("FOLLOWING")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("u",[a("b",[e._v("FOLLOWERS")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("u",[a("b",[e._v("FOLLOWERS")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h4",{staticClass:"col-12 text-shadow"},[a("u",[e._v("GAMES FOLLOWING")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row card shadow-lg bg-gradient border border-dark ml-md-2 my-3 h-45 p-2"},[a("h4",{staticClass:"text-shadow"},[a("u",[e._v("MY GAME CLIPS:")])]),e._v(" "),a("h1",{staticClass:"my-4 text-shadow"},[e._v("COMING SOON......")])])}],i=a("01fb"),r=a("c7e4"),n=a("6a5e"),l={name:"dashboard",data(){return{editedUsername:"",editContent:!1,editedImg:"",displayGamerTag:"",editedPc:"",editedXbox:"",editedPlaystation:"",editedNintendo:""}},mounted(){this.$store.dispatch("getFollowers",this.profile._id),this.$store.dispatch("getMyProfile",this.profile._id)},computed:{profile(){return this.$store.state.profile},followers(){return this.$store.state.activeGame},follows(){return this.$store.state.profileFollowers||[]},gameFollowers(){return this.$store.state.gameFollowers}},methods:{edit(){this.editContent=!0,this.editedUsername=this.profile.name,this.editedImg=this.profile.picture,"pc"==this.profile.consoles.pc?this.editedPc="":this.editedPc=this.profile.consoles.pc,"xbox"==this.profile.consoles.xbox?this.editedXbox="":this.editedXbox=this.profile.consoles.xbox,"playstation"==this.profile.consoles.playstation?this.editedPlaystation="":this.editedPlaystation=this.profile.consoles.playstation,"nintendo"==this.profile.consoles.nintendo?this.editedNintendo="":this.editedNintendo=this.profile.consoles.nintendo},saveContent(){this.editContent=!1;let e={name:this.editedUsername,picture:this.editedImg,following:this.profile.following,games:this.profile.games,rep:this.profile.rep,videoClip:this.profile.videClip,consoles:{pc:this.editedPc,xbox:this.editedXbox,playstation:this.editedPlaystation,nintendo:this.editedNintendo},id:this.profile._id,firstTimeUser:!1};this.$store.dispatch("editProfile",e),n["a"].toast("Saved Changes!")},setDisplayGamerTag(e){this.displayGamerTag==e?this.displayGamerTag="":this.displayGamerTag=e},followingModal(){$("#id").modal("show")},followersModal(){$("#two").modal("show")},routeToDash(e){$("#id").modal("hide"),$("#two").modal("hide"),this.$router.push({name:"friendDashboard",params:{id:e}})}},components:{ProfileModal:i["a"],FollowedGames:r["a"]}},c=l,d=(a("3792"),a("2877")),m=Object(d["a"])(c,s,o,!1,null,"b3612a4a",null);t["default"]=m.exports},"493d":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("navbar"),e._v(" "),a("div",{staticClass:"container-fluid bg-image"},[a("transition",{attrs:{name:"fade"}},[a("router-view",{key:e.$route.fullPath})],1)],1)],1)},i=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar container-fluid sticky-top navbar-expand-lg navbar-secondary bg-gradient shadow-lg p-2"},[e._m(0),e._v(" "),e._m(1),e._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor03"}},[a("ul",{staticClass:"navbar-nav mr-auto text-light"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link text-shadow hover",attrs:{to:{name:"home"}}},[e._v("HOME")])],1),e._v(" "),e.$auth.isAuthenticated?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link text-shadow hover",attrs:{to:{name:"dashboard"}}},[e._v("MY DASHBOARD")])],1):e._e(),e._v(" "),e.$auth.isAuthenticated?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link text-shadow hover",attrs:{to:{name:"Games"}}},[e._v("GAMES")])],1):e._e()]),e._v(" "),e._m(2),e._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"}),e._v(" "),a("form",{staticClass:"form-inline my-2 my-lg-0 mx-1 shadow-lg",on:{submit:function(t){return t.preventDefault(),e.onInput(t)}}},[a("div",{staticClass:"input-group border-primary"},[a("autocomplete",{attrs:{items:e.profiles,type:"text","input-class":"form-control",placeholder:"Search...","aria-label":"Recipient's username","aria-describedby":"button-addon2"},on:{input:e.onInput,result:e.onResult},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),e._v(" "),e._m(3)],1)]),e._v(" "),a("span",{staticClass:"navbar-text"},[e.$auth.isAuthenticated?a("button",{staticClass:"btn btn-outline-danger border border-danger shadow-lg",on:{click:e.logout}},[e._v("LOGOUT")]):a("button",{staticClass:"btn btn-outline-success shadow-lg",on:{click:e.login}},[e._v("LOGIN")])])])])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a("h3",{staticClass:"text-shadow"},[e._v("FRIENDZONE")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor03","aria-controls":"navbarColor03","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-primary border border-secondary",attrs:{type:"submit",id:"button-addon2"}},[e._v("SEARCH")])])}],l=a("bc3a"),c=a.n(l);const d=location.host.includes("localhost")?"http://localhost:3000/":"/",m=c.a.create({baseURL:d+"api",timeout:5e3,withCredentials:!0});let u="https://api.rawg.io/api";const h=c.a.create({baseURL:u,timeout:1e4});var p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"autocomplete"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.search,expression:"search",modifiers:{trim:!0}}],class:e.inputClass,attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.search},on:{input:[function(t){t.target.composing||(e.search=t.target.value.trim())},e.onChange],keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"]))return null;e.onArrow(1)},function(t){if(!("button"in t)&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"]))return null;e.onArrow(-1)},function(t){return!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onEnter(t)}],blur:function(t){e.$forceUpdate()}}}),e._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],ref:"resultbox",staticClass:"autocomplete-results bg-gradient",attrs:{id:"autocomplete-results"}},[e.isLoading?a("li",{staticClass:"loading"},[e._v("Loading results...")]):e._l(e.results,(function(t,s){return a("li",{key:s,staticClass:"autocomplete-result",class:{"is-active":s===e.index},attrs:{tabIndex:s},domProps:{innerHTML:e._s(t.html?t.html:t.text)},on:{click:function(a){e.setResult(t)},mouseover:function(t){e.setIndex(s)}}})}))],2)])},f=[],g={name:"autocomplete",props:{items:{type:Array,required:!1,default:()=>[]},async:{type:Boolean,required:!1,default:!1},inputClass:String,placeholder:String,canOpen:{type:Boolean,required:!1,default:!0}},data(){return{isOpen:!1,results:[],search:"",isLoading:!1,index:0}},methods:{onChange(){this.$emit("input",this.search.toLowerCase()||""),this.async?this.isLoading=!0:(this.filterResults(),this.open())},filterResults(){this.results=this.items.filter(e=>e.text.toLowerCase().indexOf(this.search.toLowerCase())>-1)},setResult(e){e&&(this.search=e.text,this.$emit("result",{component:this,result:e}),this.close())},onArrow(e){let t=this.index+e;this.results[t]&&(this.$refs.resultbox.scroll(0,32*t),this.setIndex(t))},setIndex(e){this.index=e},onEnter(){this.setResult(this.results[this.index])},open(){this.canOpen&&(this.isOpen=!0,document.body.classList.add("no-scroll"))},close(){this.isOpen=!1,this.index=-1,document.body.classList.remove("no-scroll")},handleEscape(e){27==e.keyCode&&this.close()},handleClickOutside(e){this.$el.contains(e.target)||this.close()}},watch:{items:function(e,t){this.results=e,this.isLoading=!1,e.length?this.open():this.close()}},mounted(){document.addEventListener("keydown",this.handleEscape),document.addEventListener("click",this.handleClickOutside)},destroyed(){document.removeEventListener("keydown",this.handleEscape),document.removeEventListener("click",this.handleClickOutside)}},v=g,b=(a("e2d5"),a("2877")),_=Object(b["a"])(v,p,f,!1,null,null,null),w=_.exports,C=a("6a5e");c.a.create({baseURL:"https://localhost:3000",withCredentials:!0});var y={name:"Navbar",data(){return{query:"",profiles:[]}},methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"),this.$router.push({name:"dashboard"}),console.log("this.$auth.user: "),console.log(this.$auth.user),C["a"].toast("Logged In!")},async logout(){await this.$auth.logout({returnTo:window.location.origin}),C["a"].toast("Logged Out!")},findProfiles(){this.$store.dispatch("searchDashboard",this.query),this.query=""},onInput(e){this.autocompleteError="",e.length&&(this.delay&&clearTimeout(this.delay),this.delay=setTimeout(async()=>{this.profiles=[],this.delay=null,await this.findUsers(e),await this.findGames(e)},250))},async findUsers(e){let t=await m.get("profile/find?q="+e);this.profiles=t.data.map(e=>({text:e.name,profile:!0,html:`<div class="d-flex align-items-center">\n              <img class="mr-1" src="${e.picture}"/>\n              <b class="mr-1">${e.name}</b>\n            </div>\n          `,data:e}))},async findGames(e){let t=e.toLowerCase().replace(/ /g,"-"),a=await h.get("games?search="+t);this.profiles=[...this.profiles,...a.data.results.map(e=>({text:e.name,html:`<div class="d-flex align-items-center">\n              <img class="mr-1" src="${e.background_image}"/>\n              <b class="mr-1">${e.name}</b>\n            </div>\n          `,data:e,game:!0}))]},async onResult(e){return e.result.profile?this.$router.push({name:"friendDashboard",params:{id:e.result.data._id}}):e.result.game?this.$router.push({name:"GameDetails",params:{id:e.result.data.id}}):void console.log("you picked something",arguments)}},components:{Autocomplete:w}},x=y,k=(a("df91"),Object(b["a"])(x,r,n,!1,null,"3e338f1c",null)),O=k.exports,E=a("335d"),D={name:"App",async beforeCreate(){try{await Object(E["d"])(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"),this.$store.dispatch("initializeSocket")}catch(e){this.$router.push({name:"home"})}},components:{Navbar:O}},$=D,G=(a("5c0b"),Object(b["a"])($,o,i,!1,null,null,null)),P=G.exports,L=a("8c4f"),T=a("bb51"),N=a("4601"),I=a("2f62"),F={mounted(){this.$store.dispatch("getProfileGames",this.$route.params.id)},state:{},mutations:{},actions:{async getProfileGames(e){await m.get("profile/"+e+"/games")},async getMyProfile({commit:e,dispatch:t},a){let s=await m.get("profile/"+a);e("setUser",s.data)},async votes({commit:e,dispatch:t},a){let s=await m.put("profile/"+a.id+"/votes",a);console.log(s),t("getDashboard",a.id)},async follow({commit:e,dispatch:t},a){let s=await m.put("profile/"+a.id+"/following",a);console.log(s),e("setUser",s.data),t("getFollowers",a.following)},async unfollow({commit:e,dispatch:t},a){let s=await m.delete("profile/"+a.id+"/following/"+a.following);console.log(s),e("setUser",s.data),t("getFollowers",a.following)},async getFollowers({commit:e,dispatch:t},a){let s=await m.get("profile/"+a+"/followers");e("setFollowers",s.data.data)},async getDashboard({commit:e,dispatch:t},a){let s=await m.get("profile/user/"+a);console.log(s.data),e("setFriendDashboard",s.data)},async editProfile({commit:e,dispatch:t},a){let s=await m.put("profile/"+a.profileId,a);console.log(s),e("setUser",s.data),X.push({name:"dashboard"})}}},M={state:{},mutations:{},actions:{async getOtherProfile({commit:e,dispatch:t},a){let s=await m.get("user");console.log(s.data),t("getDashboard",s.data._id)},async createProfile({commit:e,dispatch:t},a){let s=await m.post("user",a);e("setDashboard",s.data)}}},U={actions:{async getGames({commit:e,dispatch:t},a=1){try{let t=await h.get("games?page="+a);console.log(t.data.results),e("setGames",t.data.results)}catch(s){console.error(s)}},async getActiveGame({commit:e,dispatch:t},a){try{let t=await h.get("games/"+a);console.log(t.data),e("setActiveGame",t.data)}catch(s){console.error(s)}},async getSearchedGames({commit:e,dispatch:t},a){try{let t=a.toLowerCase().replace(/ /g,"-");console.log(t);let s=await h.get("games?search="+t);e("setSearchedGames",s.data.results),e("setFlipped",!0)}catch(s){console.error(s)}},async followGame({commit:e,dispatch:t},a){try{let t=await m.post("profile/"+a.id+"/games",a);e("setUser",t.data),e("setGameFollowers",a.followers)}catch(s){console.error(s)}},async unfollowGame({commit:e,dispatch:t},a){try{let t=await m.delete("profile/"+a.id+"/games/"+a.gameId);e("setUser",t.data)}catch(s){console.error(s)}},async showFollowedGames({commit:e,dispatch:t},a){try{let t=await m.get("profile/games/"+a+"/users");console.log(t.data);let s={gameId:a,data:t.data};e("setGameFollowers",s)}catch(s){console.error(s)}}}};class A{constructor(){this.status="",this.listeners=[]}async getProfile(e){if("done"===status)return e(z.state.profile);if(-1===this.listeners.indexOf(e)&&this.listeners.push(e),"pending"===status)return;status="pending",z.dispatch("setBearer",Object(E["a"])().bearer);let t=await m.get("profile/"+z.state.profile.id);const a=t.data;z.commit("setUser",a),this.listeners.forEach(e=>e(a)),this.listeners=[],status="done"}}const R=new A;var S=a("4bea"),j=a.n(S);let B={};function q(e,t={}){B.emit("dispatch",{action:e,data:t})}const W={actions:{initializeSocket({commit:e,dispatch:t}){B=j()(d),B.on("CONNECTED",e=>{console.log(e.message+" Let the villany commence"),t("authenticateSocket")}),B.on("AUTHENTICATED",e=>{console.log(e)}),B.on("roomData",e=>{console.log(e),z.commit("setActiveRoom",e)}),B.on("newMessage",e=>{console.log(e);let t=[...z.state.messages,e];z.commit("setMessages",t)}),B.on("new-user",e=>{let t=[...z.state.messages,e];z.commit("setMessages",t)})},sendMessage({commit:e,dispatch:t},a){B.emit("dispatch",{action:"messageRoom",data:a})},joinRoom({commit:e,dispatch:t},a){B.emit("dispatch",{action:"JoinRoom",data:a})},leaveRoom({commit:e,dispatch:t},a){B.emit("disconnect",{action:"leaveRoom",data:a})},authenticateSocket({commit:e,dispatch:t}){q("Authenticate",Object(E["a"])().bearer)}}};s["a"].use(I["a"]);var z=new I["a"].Store({state:{profile:{games:[],consoles:{},following:[],voted:[]},games:[],activeGame:[],searchedGames:[],gameDetails:{},dashboard:{},friendDashboard:{consoles:{},following:[],voted:[]},profileFollowers:0,gameFollowers:{},flipped:!1,activeRoom:{},messages:[]},mutations:{setMessages(e,t){e.messages=t},setActiveRoom(e,t){e.activeRoom=t},setFlipped(e,t){e.flipped=t},setUser(e,t){e.profile=t},setDashboard(e,t){e.dashboard=t},setGames(e,t){e.games=t},setActiveGame(e,t){e.activeGame=t},setSearchedGames(e,t){e.searchedGames=t},setFriendDashboard(e,t){e.friendDashboard=t},setFollowers(e,t){e.profileFollowers=t},setGameFollowers(e,t){s["a"].set(e.gameFollowers,t.gameId,t.data.data),console.log(e.gameFollowers)}},actions:{setBearer({},e){m.defaults.headers.authorization=e},resetBearer(){m.defaults.headers.authorization=""},async getProfile({commit:e},t=(()=>{})){try{R.getProfile(t)}catch(a){console.error(a)}}},modules:{dashBoardModule:F,profileModule:M,gamesModule:U,socketStore:W}});function H(e){return()=>a("9dac")("./"+e)}s["a"].use(L["a"]);var X=new L["a"]({routes:[{path:"/",name:"home",component:T["default"]},{path:"/onBoarding",name:"onBoarding",component:H("UserOnboarding.vue"),beforeEnter:E["c"]},{path:"/gameDetails/:id",name:"GameDetails",component:()=>a.e("gamedetails").then(a.bind(null,"a0b5"))},{path:"/games",name:"Games",component:()=>a.e("games").then(a.bind(null,"c027"))},{path:"/dashboard/:id",name:"friendDashboard",component:H("FriendDashboard.vue"),beforeEnter:E["c"]},{path:"/dashboard",name:"dashboard",component:N["default"],beforeEnter(e,t,a){async function s(){return z.state.profile.id?z.state.profile.firstTimeUser?a("/onBoarding"):void a():await R.getProfile(e=>{if(e.firstTimeUser)return a("/onBoarding");a()})}Object(E["c"])(e,t,s)}},{path:"*",redirect:"/"}]});const V="bcw-harrisonw.us.auth0.com",J="https://friendzone.com",Z="7sQZxfusj0GZgsvsuCNAs940IWDOoPp3";s["a"].use(E["b"],{domain:V,clientId:Z,audience:J,onRedirectCallback:e=>{X.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}}),new s["a"]({router:X,store:z,render:function(e){return e(P)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var s=a("9c0c"),o=a.n(s);o.a},"6a5e":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var s=a("ac68"),o=a.n(s);class i{static toast(e="Unfollow"){o.a.fire({title:e,type:"success",icon:"success",timer:1500,toast:!0,position:"top-right",showConfirmButton:!1,timerProgressBar:!0})}}},"6dd8":function(e,t,a){},"8a54":function(e,t,a){},"9c0c":function(e,t,a){},"9dac":function(e,t,a){var s={"./FriendDashboard":["37fa","chunk-78c93f57"],"./FriendDashboard.vue":["37fa","chunk-78c93f57"],"./GameDetails":["a0b5","gamedetails"],"./GameDetails.vue":["a0b5","gamedetails"],"./GamesMainPage":["c027","games"],"./GamesMainPage.vue":["c027","games"],"./Home":["bb51"],"./Home.vue":["bb51"],"./UserOnboarding":["71b1","chunk-74f2d060"],"./UserOnboarding.vue":["71b1","chunk-74f2d060"],"./dashboard":["4601"],"./dashboard.vue":["4601"]};function o(e){if(!a.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],o=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(o)}))}o.keys=function(){return Object.keys(s)},o.id="9dac",e.exports=o},ad83:function(e,t,a){"use strict";var s=a("8a54"),o=a.n(s);o.a},bb51:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home row justify-content-center container-fluid ml-0"},[e._m(0),e._v(" "),a("div",{staticClass:"row justify-content-center mt-4"},e._l(e.games,(function(e){return a("games",{key:e.id,attrs:{gameData:e}})})))])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12 home-img img-fluid d-flex justify-content-center shadow-lg px-0 pt-2 mt-4"},[a("div",{staticClass:"fade-in text-light mt-2 mb-0"},[a("h1",{staticClass:"text-height text-shadow outline mb-0"},[e._v("WELCOME TO THE FRIENDZONE")]),e._v(" "),a("br"),e._v(" "),a("h1",{staticClass:"text-light sub-height text-shadow outline"},[e._v("WHERE GAMERS COME TO FIND THEIR SQUAD")])])])}],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card rounded games col-12 col-md-2 text-white m-2 shadow-lg px-0"},[a("div",{staticClass:"embed-responsive embed-responsive-4by3"},[a("img",{staticClass:"card-img-top embed-responsive-item cursor",attrs:{src:e.gameData.background_image},on:{click:function(t){e.openDeetz(e.gameData.id)}}})]),e._v(" "),a("div",{staticClass:"card-body rounded-bottom bg-gradient p-2"},[a("h3",{staticClass:"mt-1"},[e._v(e._s(e.gameData.name||""))]),e._v(" "),a("p",{staticClass:"mb-0"},[e._v(e._s(e.gameData.genres[0]?e.gameData.genres[0].name:"")+e._s(e.gameData.genres[1]?"/"+e.gameData.genres[1].name:""))]),e._v(" "),a("p",{staticClass:"mb-0",class:e.gameData.rating>=4?"text-success":"text-danger"},[e._v("Rating: "+e._s(Math.floor(e.gameData.rating))+"/5")]),e._v(" "),a("p",{staticClass:"text-warning mb-0"},[e._v("Metacritic Score: "+e._s(e.gameData.metacritic))]),e._v(" "),a("p",{staticClass:"mb-2",on:{click:function(t){e.platformVisible=!e.platformVisible}}},[a("u",{staticClass:"cursor"},[e._v("Available Platforms")])]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.platformVisible,expression:"platformVisible"}],staticClass:"mb-2"},e._l(e.gameData.platforms,(function(t,s){return a("span",{key:JSON.stringify(t.platform)},[e._v(e._s(t.platform?t.platform.name:"")+e._s(s<e.gameData.platforms.length-1?", ":""))])})))])])},r=[],n={name:"games",props:["gameData"],data(){return{platformVisible:!1,name:""}},computed:{},methods:{openDeetz(e){this.$router.push({name:"GameDetails",params:{id:e}})}},components:{}},l=n,c=(a("338c"),a("2877")),d=Object(c["a"])(l,i,r,!1,null,"8f249f36",null),m=d.exports,u={name:"home",data(){return{}},mounted(){this.$store.dispatch("getGames"),setTimeout(()=>window.scrollTo(0,0),75)},computed:{games(){return this.$store.state.games}},methods:{},components:{Games:m}},h=u,p=(a("e373"),Object(c["a"])(h,s,o,!1,null,"6ade9240",null));t["default"]=p.exports},bc64:function(e,t,a){},c7e4:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"followed-games card col-12 col-md-6 col-lg-3 px-0 shadow-lg bg-card-gradient m-1"},[a("div",[a("img",{staticClass:"card-img-top img-fluid game-size cursor",attrs:{src:e.gameData.backgroundImg,alt:""},on:{click:function(t){e.openDeetz(e.gameData.gameId)}}})]),e._v(" "),a("div",{staticClass:"card-body rounded-bottom bg-gradient p-1"},[a("h4",{staticClass:"pt-3"},[e._v(e._s(e.gameData.name))]),e._v(" "),e.followedGames?a("p",{staticClass:"cursor hover",on:{click:function(t){e.gameModal("modal"+e.gameData.gameId)}}},[e._m(0),e._v(" "),a("br"),e._v("\n      "+e._s(e.followedGames.length)+"\n    ")]):a("p",[a("u",[e._v("FOLLOWERS")]),e._v(" "),a("br"),e._v("0\n    ")])]),e._v(" "),a("ProfileModal",{attrs:{id:"modal"+e.gameData.gameId}},[a("h1",{staticClass:"text-shadow",attrs:{slot:"header"},slot:"header"},[e._v("FOLLOWING")]),e._v(" "),a("div",{attrs:{slot:"body"},slot:"body"},[a("div",{staticClass:"col-12"},e._l(e.followedGames,(function(t){return a("div",{key:t.id},[a("div",{staticClass:"row text-left p-3 m-2 shadow-lg card cursor bg-card-gradient"},[a("h1",{staticClass:"text-left",on:{click:function(a){e.routeToDash(t._id,"modal"+e.gameData.gameId)}}},[t.picture?a("img",{staticClass:"img-fluid w-25 rounded shadow-lg",attrs:{src:t.picture}}):e._e(),e._v("\n              "+e._s(t.name)+"\n            ")])])])})))])])],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b",[a("u",[e._v("FOLLOWERS")])])}],i=a("01fb"),r={name:"followed-games",props:["gameData"],data(){return{}},mounted(){this.$store.dispatch("showFollowedGames",this.gameData.gameId)},computed:{followedGames(){return this.$store.state.gameFollowers[this.gameData.gameId]||[]}},methods:{openDeetz(e){this.$router.push({name:"GameDetails",params:{id:e}})},gameModal(e){$("#"+e).modal("show")},routeToDash(e,t){$("#"+t).modal("hide"),this.$router.push({name:"friendDashboard",params:{id:e}})}},components:{ProfileModal:i["a"]}},n=r,l=(a("ad83"),a("2877")),c=Object(l["a"])(n,s,o,!1,null,"0c7442dd",null);t["a"]=c.exports},d012:function(e,t,a){},d6df:function(e,t,a){},df91:function(e,t,a){"use strict";var s=a("d012"),o=a.n(s);o.a},e2d5:function(e,t,a){"use strict";var s=a("25d4"),o=a.n(s);o.a},e373:function(e,t,a){"use strict";var s=a("bc64"),o=a.n(s);o.a}});