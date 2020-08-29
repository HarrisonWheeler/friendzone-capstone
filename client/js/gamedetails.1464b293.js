(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["gamedetails"],{"0cce":function(t,e,a){},6715:function(t,e,a){},"94a9":function(t,e,a){"use strict";var s=a("6715"),i=a.n(s);i.a},a0b5:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"game-details justify-content-center row"},[a("div",{staticClass:"col-11 card text-light m-3 shadow-lg px-0"},[a("div",{staticClass:"card-body bg-gradient p-3"},[a("h3",[t._v(t._s(t.activeGame.name))]),t._v(" "),a("hr"),t._v(" "),a("p",{staticClass:"mb-2"},[t._v(t._s(t.activeGame.description_raw))]),t._v(" "),a("h6",{},[t._v(t._s(t.activeGame.genres[0].name)+"/"+t._s(t.activeGame.genres[1].name))]),t._v(" "),a("h6",{class:t.activeGame.rating>=4?"text-success":"text-danger"},[t._v("Rating: "+t._s(Math.floor(t.activeGame.rating))+"/5")]),t._v(" "),a("p",{staticClass:"text-warning mb-0"},[t._v("Metacritic Score: "+t._s(t.activeGame.metacritic))]),t._v(" "),a("p",{staticClass:"cursor",on:{click:function(e){t.platformVisible=!t.platformVisible}}},[a("u",[t._v("Available Platforms")])]),t._v(" "),t.platformVisible?a("p",t._l(t.activeGame.platforms,(function(e,s){return a("span",{key:e.platform.name},[t._v(t._s(e.platform.name)+t._s(s<t.activeGame.platforms.length-1?", ":""))])}))):t._e(),t._v(" "),a("div",{staticClass:"row mx-1 justify-content-center"},[a("img",{staticClass:"img-fluid rounded w-25 m-md-1 shadow-lg",attrs:{src:t.activeGame.background_image,alt:""}}),t._v(" "),t.activeGame.clip?a("video",{staticClass:"rounded shadow-md-lg p-4 p-md-0 mx-4 mx-md-2",attrs:{src:t.activeGame.clip.clip,controls:"",width:"400"}}):t._e(),t._v(" "),a("img",{staticClass:"img-fluid rounded w-25 m-md-1 shadow-lg",attrs:{src:t.activeGame.background_image_additional,alt:""}})]),t._v(" "),a("div",{staticClass:"row justify-content-center"},[t.joinedChat&&t.profile.games.some((function(e){return e.gameId==t.activeGame.id}))?a("chat-room",{attrs:{gameData:t.activeGame.id}}):t._e()],1),t._v(" "),t.profile.games.some((function(e){return e.gameId==t.activeGame.id}))?a("div",[t.joinedChat?a("button",{staticClass:"border border-warning btn btn-rounded btn-outline-warning btn-block mt-3 py-1",on:{click:function(e){t.joinedChat=!t.joinedChat}}},[t._v("HIDE CHAT")]):a("button",{staticClass:"border border-success btn btn-rounded btn-outline-success btn-block mt-3 py-1",on:{click:t.joinChat}},[t._v("JOIN CHAT")])]):t._e(),t._v(" "),t.profile.games.some((function(e){return e.gameId==t.activeGame.id}))?a("button",{staticClass:"border border-danger btn btn-rounded btn-outline-danger btn-block mt-1 py-1",on:{click:function(e){t.unfollowGame(t.activeGame.id)}}},[t._v("Unfollow Game")]):a("button",{staticClass:"border border-info btn btn-rounded btn-outline-info btn-block mt-3 py-1",on:{click:function(e){t.followGame(t.activeGame.id)}}},[t._v("+Follow Game")])])])])},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 col-md-6 chat-room card border border-dark bg-secondary shadow-lg pb-1 px-4 pt-3 m-4"},[a("div",{staticClass:"card bg-white overflow border border-dark p-1 mx-md-1 height shadow-lg text-dark",attrs:{id:"chatWindow"}},t._l(t.messages,(function(e){return a("div",{key:e.id,staticClass:"chat-message"},[e.profile&&e.profile[0].name!=t.profile.name?a("h6",{staticClass:"text-left ml-2",on:{click:function(e){t.timer=!t.timer}}},[t._v("\n        "+t._s(e.profile[0].name)+"\n        "),a("br"),t._v(" "),t.timer?a("small",[t._v(t._s(new Date(e.time).toLocaleString()))]):t._e(),t._v(" "),a("small",{staticClass:"badge badge-pill badge-success text-height p-3"},[t._v(t._s(e.message))])]):e.profile?a("h6",{staticClass:"text-right mr-2",on:{click:function(e){t.timer=!t.timer}}},[t._v("\n        "+t._s(e.profile[0].name)+"\n        "),a("br"),t._v(" "),a("small",{staticClass:"badge badge-pill badge-info text-height p-3"},[t._v(t._s(e.message))]),t._v(" "),t.timer?a("small",[t._v(t._s(new Date(e.time).toLocaleString()))]):t._e()]):a("h6",{staticClass:"text-right bot-height mr-1",on:{click:function(e){t.timer=!t.timer}}},[a("br"),t._v(" "),a("small",{staticClass:"badge badge-pill badge-warning bot-height"},[t._v(t._s(e.message))])])])}))),t._v(" "),a("form",{on:{submit:t.sendMessage}},[a("div",{staticClass:"input-group my-3 rounded shadow-lg"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newChat,expression:"newChat"}],staticClass:"form-control py-0 border border-dark",attrs:{type:"text",placeholder:"Enter New Message...","aria-label":"Recipient's username","aria-describedby":"button-addon2"},domProps:{value:t.newChat},on:{input:function(e){e.target.composing||(t.newChat=e.target.value)}}}),t._v(" "),t._m(0)])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-dark",attrs:{type:"submit",id:"button-addon2"}},[t._v("SEND")])])}],r={name:"chat-room",props:["gameData"],data(){return{newChat:"",timer:!1}},computed:{profile(){return this.$store.state.profile},activeRoom(){return this.$store.state.activeRoom},messages(){if(this.$store.state.messages.length>0){let t=document.getElementById("chatWindow");return this.$nextTick((function(){t.scrollTo(0,t.scrollHeight)})),this.$store.state.messages}return this.$store.state.messages}},methods:{sendMessage(){event.preventDefault(),this.$store.dispatch("sendMessage",{room:this.gameData,eventName:"newMessage",payload:this.newChat,profile:this.profile,time:new Date}),this.newChat=""}},components:{}},c=r,l=(a("94a9"),a("2877")),m=Object(l["a"])(c,o,n,!1,null,"78260f31",null),d=m.exports,u=a("6a5e"),v={name:"game-details",data(){return{platformVisible:!1,joinedChat:!1}},mounted(){this.$store.dispatch("getActiveGame",this.$route.params.id)},computed:{activeGame(){return this.$store.state.activeGame},profile(){return this.$store.state.profile}},methods:{joinChat(){this.$store.state.messages=[],this.joinedChat=!0;let t={gameId:this.activeGame.id,name:this.activeGame.name,user:this.profile.name};this.$store.dispatch("joinRoom",t)},followGame(t){this.activeGame.followers+=1,this.$store.dispatch("followGame",{id:this.profile.id,name:this.activeGame.name,gameId:this.activeGame.id,backgroundImg:this.activeGame.background_image,followers:1}),u["a"].toast("Followed")},unfollowGame(t){this.activeGame.followers-=1,this.$store.dispatch("unfollowGame",{id:this.profile.id,name:this.activeGame.name,gameId:this.activeGame.id,backgroundImg:this.activeGame.background_image,followers:-1}),u["a"].toast("Unfollowed","")}},components:{chatRoom:d}},h=v,g=(a("fbb9"),Object(l["a"])(h,s,i,!1,null,"06e24dd4",null));e["default"]=g.exports},fbb9:function(t,e,a){"use strict";var s=a("0cce"),i=a.n(s);i.a}}]);