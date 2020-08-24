(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["games"],{"4bb0":function(a,e,t){"use strict";var s=t("56aa"),i=t.n(s);i.a},"54c3":function(a,e,t){"use strict";var s=t("7641"),i=t.n(s);i.a},"56aa":function(a,e,t){},7641:function(a,e,t){},c027:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"gamesMainPage row justify-content-center mt-4"},[t("div",{staticClass:"col-10"},[t("form",{staticClass:"text-center my-2 ml-2 ml-md-0",on:{submit:a.findGames}},[t("div",{staticClass:"input-group mb-3 shadow-lg"},[a._m(0),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.query,expression:"query"}],staticClass:"form-control",attrs:{type:"text",placeholder:"SEARCH ALL GAMES...","aria-label":"Recipient's username","aria-describedby":"button-addon2"},domProps:{value:a.query},on:{input:function(e){e.target.composing||(a.query=e.target.value)}}})])]),a._v(" "),t("button",{staticClass:"btn btn-primary text-center shadow-lg py-1 px-2 ml-1",attrs:{type:"button","data-toggle":"button","aria-pressed":"false",autocomplete:"off"},on:{click:a.previousPage}},[t("i",{staticClass:"fa fa-angle-double-left fa fa-1x"}),a._v("\n      PREVIOUS\n    ")]),a._v(" "),t("button",{staticClass:"btn btn-primary text-center shadow-lg mr-4 py-1 px-4",attrs:{type:"button","data-toggle":"button","aria-pressed":"false",autocomplete:"off"},on:{click:a.nextPage}},[a._v("\n      NEXT\n      "),t("i",{staticClass:"fa fa-angle-double-right fa fa-1x"})])]),a._v(" "),t("div",{staticClass:"col-12"},[t("div",{staticClass:"d-flex flex-wrap justify-content-center"},a._l(a.games,(function(e,s){return t("flippedGame",{key:e.id,attrs:{gameData:e,searchedGameData:a.searchGames[s]}})})))])])},i=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"input-group-prepend"},[t("button",{staticClass:"btn btn-primary",attrs:{type:"button",id:"button-addon2"}},[a._v("SEARCH")])])}],r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("transition",{attrs:{name:"fade"}},[t("div",{staticClass:"flip-container m-3",class:{flip:a.flipped}},[t("div",{staticClass:"flipper"},[t("div",{staticClass:"front card rounded flippedGame text-white shadow-lg"},[t("div",{staticClass:"embed-responsive embed-responsive-4by3"},[t("img",{staticClass:"card-img-top embed-responsive-item cursor",attrs:{src:a.gameData.background_image},on:{click:function(e){a.openDeetz(a.gameData.id)}}})]),a._v(" "),t("div",{staticClass:"card-body rounded-bottom bg-gradient p-2"},[t("h3",{staticClass:"mt-1"},[a._v(a._s(a.gameData.name||""))]),a._v(" "),t("p",{staticClass:"mb-0"},[a._v(a._s(a.gameData.genres[0]?a.gameData.genres[0].name:"")+a._s(a.gameData.genres[1]?"/"+a.gameData.genres[1].name:""))]),a._v(" "),t("p",{staticClass:"mb-0",class:a.gameData.rating>=4?"text-success":"text-danger"},[a._v("Rating: "+a._s(Math.floor(a.gameData.rating))+"/5")]),a._v(" "),t("p",{staticClass:"text-warning mb-0"},[a._v("Metacritic Score: "+a._s(a.gameData.metacritic))]),a._v(" "),t("p",{staticClass:"mb-2",on:{click:function(e){a.platformVisible=!a.platformVisible}}},[t("u",{staticClass:"cursor"},[a._v("Available Platforms")])]),a._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:a.platformVisible,expression:"platformVisible"}],staticClass:"mb-2"},a._l(a.gameData.platforms,(function(e,s){return t("span",{key:JSON.stringify(e.platform)},[a._v(a._s(e.platform?e.platform.name:"")+a._s(s<a.gameData.platforms.length-1?", ":""))])})))])]),a._v(" "),a.searchedGameData?t("div",{staticClass:"back card rounded flippedGame text-white shadow-lg m-2"},[t("div",{staticClass:"embed-responsive embed-responsive-4by3"},[t("img",{staticClass:"card-img-top embed-responsive-item cursor",attrs:{src:a.searchedGameData.background_image},on:{click:function(e){a.openDeetz(a.searchedGameData.id)}}})]),a._v(" "),t("div",{staticClass:"card-body rounded-bottom bg-gradient p-2"},[t("h3",{staticClass:"mt-1"},[a._v(a._s(a.searchedGameData.name))]),a._v(" "),t("p",{staticClass:"mb-0"},[a._v(a._s(a.searchedGameData.genres[0]?a.searchedGameData.genres[0].name:"")+a._s(a.searchedGameData.genres[1]?"/"+a.searchedGameData.genres[1].name:""))]),a._v(" "),t("p",{staticClass:"mb-0",class:a.searchedGameData.rating>=4?"text-success":"text-danger"},[a._v("Rating: "+a._s(Math.floor(a.searchedGameData.rating))+"/5")]),a._v(" "),t("p",{staticClass:"text-warning mb-0"},[a._v("Metacritic Score: "+a._s(a.searchedGameData.metacritic))]),a._v(" "),t("p",{staticClass:"mb-2",on:{click:function(e){a.platformVisible=!a.platformVisible}}},[t("u",{staticClass:"cursor"},[a._v("Available Platforms")])]),a._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:a.platformVisible,expression:"platformVisible"}],staticClass:"mb-2"},a._l(a.searchedGameData.platforms,(function(e,s){return t("span",{key:JSON.stringify(e.platform)},[a._v(a._s(e.platform?e.platform.name:"")+a._s(s<a.searchedGameData.platforms.length-1?", ":""))])})))])]):a._e()])])])},n=[],c={name:"flippedGame",props:["gameData","searchedGameData"],data(){return{platformVisible:!1,name:""}},computed:{flipped(){return this.$store.state.flipped}},methods:{openDeetz(a){this.$router.push({name:"GameDetails",params:{id:a}})}},components:{}},o=c,m=(t("54c3"),t("2877")),l=Object(m["a"])(o,r,n,!1,null,"297f197a",null),p=l.exports,d={name:"gamesMainPage",data(){return{page:1,query:"",searchedGames:!1,allGamesShow:!0}},mounted(){this.$store.dispatch("getGames"),this.$store.commit("setFlipped",!1)},computed:{games(){return this.$store.state.games},searchGames(){return this.$store.state.searchedGames}},methods:{nextPage(){this.page++,this.$store.dispatch("getGames",this.page)},previousPage(){this.page--,this.$store.dispatch("getGames",this.page)},findGames(){this.$store.commit("setFlipped",!1),this.searchedGames=!0,this.$store.dispatch("getSearchedGames",this.query),this.query=""}},components:{flippedGame:p}},u=d,g=(t("4bb0"),Object(m["a"])(u,s,i,!1,null,"83e82a2e",null));e["default"]=g.exports}}]);