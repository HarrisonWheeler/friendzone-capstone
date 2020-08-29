(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7311184e"],{4591:function(t,a,s){},"6b83":function(t,a,s){"use strict";var e=s("4591"),i=s.n(e);i.a},"71b1":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"dashboard row justify-content-center py-4 mt-3"},[t._m(0),t._v(" "),s("profileModal",{attrs:{id:"id"}},[s("div",{attrs:{slot:"body"},slot:"body"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"form-control text-wrap my-2 shadow-lg",attrs:{type:"text",placeholder:"Enter Username...."},domProps:{value:t.userName},on:{input:function(a){a.target.composing||(t.userName=a.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.imgUrl,expression:"imgUrl"}],staticClass:"form-control text-wrap shadow-lg",attrs:{type:"text",placeholder:"Enter Profile Picture Url...."},domProps:{value:t.imgUrl},on:{input:function(a){a.target.composing||(t.imgUrl=a.target.value)}}}),t._v(" "),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.targetTag,expression:"targetTag"}],staticClass:"form-control my-2 shadow-lg",attrs:{type:"text","aria-label":"Text input with dropdown button",placeholder:"Enter GamerTag...."},domProps:{value:t.targetTag},on:{input:function(a){a.target.composing||(t.targetTag=a.target.value)}}}),t._v(" "),s("div",{staticClass:"input-group-prepend my-2"},[s("button",{staticClass:"btn btn-secondary rounded-right dropdown-toggle shadow-lg",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("PICK YOUR PLATFORM")]),t._v(" "),s("div",{staticClass:"dropdown-menu bg-gradient shadow-lg"},["pc"==t.gamerTags.pc?s("a",{staticClass:"dropdown-item",on:{click:function(a){t.saveTag("pc")}}},[t._v("PC")]):t._e(),t._v(" "),"xbox"==t.gamerTags.xbox?s("a",{staticClass:"dropdown-item",on:{click:function(a){t.saveTag("xbox")}}},[t._v("XBOX")]):t._e(),t._v(" "),"playstation"==t.gamerTags.playstation?s("a",{staticClass:"dropdown-item",on:{click:function(a){t.saveTag("playstation")}}},[t._v("PLAYSTATION")]):t._e(),t._v(" "),"nintendo"==t.gamerTags.nintendo?s("a",{staticClass:"dropdown-item",on:{click:function(a){t.saveTag("nintendo")}}},[t._v("NINTENDO")]):t._e()])])]),t._v(" "),"pc"!=t.gamerTags.pc?s("div",{staticClass:"row text-left"},[s("div",{staticClass:"col-12 mt-3"},[s("h5",{staticClass:"mx-2 text-warning"},[s("i",{staticClass:"fas fa-desktop text-warning"}),t._v("\n            :\n            "+t._s(t.gamerTags.pc)+"\n          ")])])]):t._e(),t._v(" "),"xbox"!=t.gamerTags.xbox?s("div",{staticClass:"row text-left"},[s("div",{staticClass:"col-12 mt-3"},[s("h5",{staticClass:"mx-2 text-success"},[s("i",{staticClass:"fab fa-xbox text-success"}),t._v("\n            : "+t._s(t.gamerTags.xbox)+"\n          ")])])]):t._e(),t._v(" "),"playstation"!=t.gamerTags.playstation?s("div",{staticClass:"row text-left"},[s("div",{staticClass:"col-12 mt-3"},[s("h5",{staticClass:"mx-2 text-info"},[s("i",{staticClass:"fab fa-playstation text-info"}),t._v("\n            : "+t._s(t.gamerTags.playstation)+"\n          ")])])]):t._e(),t._v(" "),"nintendo"!=t.gamerTags.nintendo?s("div",{staticClass:"row text-left text-danger"},[s("div",{staticClass:"col-12 mt-3"},[s("h5",{staticClass:"mx-2 text-danger"},[s("span",{staticClass:"iconify",attrs:{"data-icon":"mdi-nintendo-switch","data-inline":"false"}}),t._v("\n            : "+t._s(t.gamerTags.nintendo)+"\n          ")])])]):t._e(),t._v(" "),s("button",{staticClass:"btn btn-secondary shadow-lg btn-block py-2 my-3",on:{click:t.editProfile}},[t._v("SUBMIT")])])])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-12 shadow-lg px-0"},[e("img",{staticClass:"img-fluid mt-1",attrs:{src:s("77ca"),alt:""}}),t._v(" "),e("div",{staticClass:"card"})])}],o=s("01fb"),n={name:"dashboard",data(){return{gamerTags:{pc:"pc",playstation:"playstation",xbox:"xbox",nintendo:"nintendo"},targetTag:"",userName:"",imgUrl:""}},mounted(){$("#id").modal("show")},computed:{profile(){return this.$store.state.profile}},methods:{saveTag(t){t==this.gamerTags.pc&&this.targetTag?(this.gamerTags.pc=this.targetTag,this.targetTag=""):t==this.gamerTags.nintendo&&this.targetTag?(this.gamerTags.nintendo=this.targetTag,this.targetTag=""):t==this.gamerTags.xbox&&this.targetTag?(this.gamerTags.xbox=this.targetTag,this.targetTag=""):t==this.gamerTags.playstation&&this.targetTag&&(this.gamerTags.playstation=this.targetTag,this.targetTag="")},editProfile(){let t={name:this.userName,picture:this.imgUrl,consoles:this.gamerTags,profileId:this.profile._id,firstTimeUser:!1};this.$store.dispatch("editProfile",t),$("#id").modal("hide")}},components:{ProfileModal:o["a"],vSelect:vSelect}},r=n,l=(s("6b83"),s("2877")),g=Object(l["a"])(r,e,i,!1,null,"956f6404",null);a["default"]=g.exports},"77ca":function(t,a,s){t.exports=s.p+"img/game-image.e1f45f07.jpg"}}]);