(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-fb07"],{"+tmS":function(e,t,a){"use strict";var n=a("HCx2");a.n(n).a},"0W2r":function(e,t,a){},"0o2y":function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"a",function(){return i}),a.d(t,"c",function(){return s}),a.d(t,"d",function(){return r});var n=a("t3Un");function l(e){return Object(n.a)({url:"/user/gameTagsManage",method:"post",data:e})}function i(e){return Object(n.a)({url:"/user/userTagsList",method:"post",data:e})}function s(e){return Object(n.a)({url:"/user/userTagsDel",method:"post",data:e})}function r(e){return Object(n.a)({url:"/user/userTagsManage",method:"post",data:e})}},"1jBe":function(e,t,a){"use strict";a.r(t);var n=a("cLjf"),l=a.n(n),i=a("hDQ3"),s=a.n(i),r=a("bS4n"),o=a.n(r),u=a("Mz3J"),c=a("Qn0k"),p=a("2wEF"),d=a("IL3p"),m=a.n(d),f={props:{gameDialogVisible:{type:Boolean,required:!0},title:{type:String,default:"请选择游戏"},allGames:{type:Array,default:function(){return[]}},selectGames:{type:Array,default:function(){return[]}}},data:function(){return{type:[]}},methods:{handleOpen:function(){this.type=m()(this.selectGames)},handleCancel:function(){this.type=[],this.$emit("update:gameDialogVisible",!1)},handleConfirm:function(){this.$emit("on-confirm",this.type)}}},g=(a("5aJA"),a("AcaB"),a("ZrdR")),b=Object(g.a)(f,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.gameDialogVisible,title:e.title,"append-to-body":"",width:"36%"},on:{open:e.handleOpen,close:e.handleCancel}},[a("div",{staticClass:"checkbox-container"},[a("el-checkbox-group",{model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.allGames,function(t,n){return a("el-checkbox",{key:n,attrs:{label:t.id}},[e._v(e._s(t.gamename))])}),1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.handleCancel}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleConfirm}},[e._v("确 定")])],1)])},[],!1,null,"d88a2642",null);b.options.__file="chooseGameDialog.vue";var y=b.exports,h={props:{playerDialogVisible:{type:Boolean,required:!0},title:{type:String,default:"请选择标签"},selectTags:{type:Array,default:function(){return[]}},allPlayerTags:{type:Array,default:function(){return[]}}},data:function(){return{type:[]}},methods:{handleOpen:function(){this.type=m()(this.selectTags)},handleCancel:function(){this.type=[],this.$emit("update:playerDialogVisible",!1)},handleConfirm:function(){this.$emit("on-confirm",this.type)}}},v=(a("Pm0I"),a("rqwi"),Object(g.a)(h,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.playerDialogVisible,title:e.title,"append-to-body":"",width:"36%"},on:{open:e.handleOpen,close:e.handleCancel}},[a("div",{staticClass:"checkbox-container"},[a("el-checkbox-group",{model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.allPlayerTags,function(e,t){return a("el-checkbox",{key:t,attrs:{label:e}})}),1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.handleCancel}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleConfirm}},[e._v("确 定")])],1)])},[],!1,null,"19cea8ea",null));v.options.__file="choosePlayerDialog.vue";var _=v.exports,L=[{key:"Longtugame",display_name:"龙图游戏"},{key:"Other",display_name:"其他"}].reduce(function(e,t){return e[t.key]=t.display_name,e},{}),k={components:{chooseGameDialog:y,choosePlayerDialog:_},filters:{platformFilter:function(e){return L[e]}},props:{visibility:{type:Boolean,required:!0},title:{type:String,required:!0},fullscreen:{type:Boolean,default:!1},userData:{type:Object,required:!0},allPlayerTags:{type:Array,default:function(){return[]}},allGames:{type:Object,default:function(){return{}}},buttonDisable:{type:Boolean,default:!1},top:{type:String,default:"10vh"},confirmBtnText:{type:String,default:"确定"}},data:function(){return{gameDialogVisible:!1,playerDialogVisible:!1,listQuery:{openid:""},gamesLabelList:[],allGamesName:[],allGamesList:[],playerLabelList:[]}},computed:{styleWidth:function(){return{width:"180px"}},selectGameid:function(){return this.gamesLabelList.map(function(e){return e.id})}},methods:{handleOpen:function(){var e=m()(this.userData),t=e.usergames;this.listQuery.openid=e.user_id,this.playerLabelList=e.player_tag,this.gamesLabelList=this.getNameAndItem(this.allGames,t)},handleCancel:function(){this.allGamesName=[],this.allGamesList=[],this.$emit("update:visibility",!1)},handleConfirm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var a={openid:t.listQuery.openid,playertags:t.playerLabelList,usergames:t.selectGameid};t.$emit("on-manage",a)})},openGameDialog:function(){this.gameDialogVisible=!0},openPlayerDialog:function(){this.playerDialogVisible=!0},getNameAndItem:function(e,t){for(var a in e)this.allGamesName.push({id:e[a].id,gamename:e[a].gamename}),this.allGamesList.push(e[a]);return this._getGameList(this.allGamesList,t)},handleSelectGame:function(e){this.gamesLabelList=this._getGameList(this.allGamesList,e),this.gameDialogVisible=!1},handleSelectTags:function(e){this.playerLabelList=e,this.playerDialogVisible=!1},_getGameList:function(e,t){var a=[];t=t.map(Number);for(var n=0;n<t.length;n++)for(var l=0;l<e.length;l++)t[n]===e[l].id&&a.push(e[l]);return a}}},w=(a("8kjE"),Object(g.a)(k,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.visibility,title:e.title,fullscreen:e.fullscreen,top:e.top,width:"80%"},on:{open:e.handleOpen,close:e.handleCancel}},[a("el-form",{ref:"vipForm",staticClass:"form-inline",attrs:{inline:!0,model:e.listQuery}},[a("el-form-item",{attrs:{label:"用户ID"}},[a("el-input",{style:e.styleWidth,attrs:{disabled:!0},model:{value:e.listQuery.openid,callback:function(t){e.$set(e.listQuery,"openid",t)},expression:"listQuery.openid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户游戏标签"}},[a("span",{staticClass:"select-tags"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.openGameDialog}},[e._v("管理用户标签")])],1)]),e._v(" "),a("el-form-item",{attrs:{label:"玩家认定标签"}},[a("span",{staticClass:"select-tags"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.openPlayerDialog}},[e._v("管理用户标签")])],1)])],1),e._v(" "),e.gamesLabelList.length>0?a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.gamesLabelList,border:"",fit:""}},[a("el-table-column",{attrs:{label:"游戏名称",width:"150",prop:"gamename",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"所属平台",width:"150",prop:"platform",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("platformFilter")(t.row.platform)))])]}}],null,!1,637489951)}),e._v(" "),a("el-table-column",{staticClass:"tags-item",attrs:{label:"玩法标签"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.play_tags,function(t,n){return a("el-tag",{key:n,staticClass:"tag",attrs:{type:"info"}},[e._v(e._s(t))])})}}],null,!1,2719446709)}),e._v(" "),a("el-table-column",{staticClass:"tags-item",attrs:{label:"风格标签"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.style_tags,function(t,n){return a("el-tag",{key:n,staticClass:"tag",attrs:{type:"info"}},[e._v(e._s(t))])})}}],null,!1,4163140326)})],1):e._e(),e._v(" "),e.playerLabelList.length>0?a("div",{staticClass:"player-label-container"},[a("h1",{staticClass:"title-first"},[e._v("玩家认定标签")]),e._v(" "),e._l(e.playerLabelList,function(t,n){return a("el-tag",{key:n,staticClass:"tag",attrs:{type:"info"}},[e._v(e._s(t))])})],2):e._e(),e._v(" "),a("choose-game-dialog",{attrs:{"game-dialog-visible":e.gameDialogVisible,"all-games":e.allGamesName,"select-games":e.selectGameid},on:{"update:gameDialogVisible":function(t){e.gameDialogVisible=t},"update:game-dialog-visible":function(t){e.gameDialogVisible=t},"on-confirm":e.handleSelectGame}}),e._v(" "),a("choose-player-dialog",{attrs:{"player-dialog-visible":e.playerDialogVisible,"select-tags":e.playerLabelList,"all-player-tags":e.allPlayerTags},on:{"update:playerDialogVisible":function(t){e.playerDialogVisible=t},"update:player-dialog-visible":function(t){e.playerDialogVisible=t},"on-confirm":e.handleSelectTags}}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.handleCancel}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{disabled:e.buttonDisable,type:"primary"},on:{click:function(t){return e.handleConfirm("vipForm")}}},[e._v(e._s(e.confirmBtnText))])],1)],1)},[],!1,null,"258a1ac3",null));w.options.__file="index.vue";var x=w.exports,D=a("2nGb"),C=a("0o2y"),T=a("8t5x"),O=a("ct8p"),G=[{key:"Longtugame",display_name:"龙图游戏"},{key:"Other",display_name:"其他"}].reduce(function(e,t){return e[t.key]=t.display_name,e},{}),V={components:{Pagination:u.a,ManageLabel:c.a,AddGame:p.a,UserLabelManage:x},filters:{platformFilter:function(e){return G[e]}},provide:function(){return{refreshLabel:this.getUserTagsList}},mixins:[O.a],data:function(){return{listQuery:{openid:"",username:"",play_tags:"",style_tags:"",page:1,limit:10},total:0,loading:!0,userLabelVisible:!1,manageLabelVisible:!1,labelList:[],userData:{},playTagOptions:[],styleTagOptions:[],playerTags:[],gameNames:null,userTagList:[],buttonDisable:!1}},computed:o()({styleWidth:function(){return{width:"240px"}}},Object(T.b)(["rules"])),created:function(){var e=this;setTimeout(function(){e.getUserTagsList()},20)},methods:{getUserTagsList:function(){var e=this;return s()(l.a.mark(function t(){var a,n,i;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(C.a)(e.listQuery);case 3:a=t.sent,n=a.code,i=a.data,e.loading=!1,n===D.a&&(e.userTagList=i.list,e.total=i.total,e.playTagOptions=i.playTagOptions,e.styleTagOptions=i.styleTagOptions,e.playerTags=i.playerTags,e.gameNames=i.gameNames,e.labelList=e.collectTags(i));case 8:case"end":return t.stop()}},t,e)}))()},onQuery:function(){this.listQuery.page=1,this.getUserTagsList()},onReset:function(e){this.$refs[e].resetFields(),this.listQuery.page=1,this.getUserTagsList()},handleManageLabel:function(){this.manageLabelVisible=!0},showAddGame:function(){this.addGameVisible=!0},handleManagement:function(e){this.userData=e,this.userLabelVisible=!0},handleDeleteTag:function(e){var t=this,a=e.user_id,n=e.game_id;this.$confirm("此操作将永久删除该用户标签, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.deleteUserTags(a,n)}).catch(function(){})},deleteUserTags:function(e,t){var a=this;return s()(l.a.mark(function n(){var i,s,r;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(C.c)({userid:e,gameid:t});case 2:i=n.sent,s=i.code,r=i.msg,s===D.a?(a.$message({type:"success",message:r}),a.getUserTagsList()):a.$message({type:"warning",message:r});case 6:case"end":return n.stop()}},n,a)}))()},onManageLabel:function(e){var t=this;return s()(l.a.mark(function a(){var n,i,s;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.buttonDisable=!0,a.next=3,Object(C.d)(e);case 3:n=a.sent,i=n.code,s=n.msg,t.buttonDisable=!1,i===D.a?(t.getUserTagsList(),t.$message({type:"success",message:s}),t.userLabelVisible=!1):t.$message({type:"warning",message:s});case 8:case"end":return a.stop()}},a,t)}))()}}},$=(a("9XX1"),Object(g.a)(V,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{ref:"usertagForm",staticClass:"form-inline",attrs:{inline:!0,model:e.listQuery,"label-width":"90px"}},[a("el-form-item",{attrs:{label:"用户ID",prop:"openid"}},[a("el-input",{style:e.styleWidth,attrs:{placeholder:"请输入"},model:{value:e.listQuery.openid,callback:function(t){e.$set(e.listQuery,"openid",t)},expression:"listQuery.openid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{style:e.styleWidth,attrs:{placeholder:"请输入"},model:{value:e.listQuery.username,callback:function(t){e.$set(e.listQuery,"username",t)},expression:"listQuery.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"玩法标签",prop:"play_tags"}},[a("el-select",{style:e.styleWidth,attrs:{clearable:"",placeholder:"请选择"},model:{value:e.listQuery.play_tags,callback:function(t){e.$set(e.listQuery,"play_tags",t)},expression:"listQuery.play_tags"}},e._l(e.playTagOptions,function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"风格标签",prop:"style_tags"}},[a("el-select",{style:e.styleWidth,attrs:{clearable:"",placeholder:"请选择"},model:{value:e.listQuery.style_tags,callback:function(t){e.$set(e.listQuery,"style_tags",t)},expression:"listQuery.style_tags"}},e._l(e.styleTagOptions,function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})}),1)],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-left":"20px"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.onQuery}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:function(t){return e.onReset("usertagForm")}}},[e._v("重置")])],1)],1)],1),e._v(" "),a("div",{staticClass:"top-operate"},[e.rules.TagsAddGames?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.showAddGame}},[e._v("添加游戏")]):e._e(),e._v(" "),e.rules.TagsManage?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.handleManageLabel}},[e._v("管理标签")]):e._e()],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.userTagList,border:"",fit:""}},[a("el-table-column",{attrs:{label:"用户ID",fixed:"",prop:"user_id",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"用户名",prop:"user_name",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"游戏名称",width:"120",prop:"game_name",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"所属平台",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("platformFilter")(t.row.platform)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"玩法标签","min-width":"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.play_tags,function(t,n){return a("el-tag",{key:n,staticClass:"tag",attrs:{type:"info"}},[e._v(e._s(t))])})}}])}),e._v(" "),a("el-table-column",{attrs:{label:"风格标签","min-width":"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.style_tags,function(t,n){return a("el-tag",{key:n,staticClass:"tag",attrs:{type:"info"}},[e._v(e._s(t))])})}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"148",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.rules.TagsUserLabel?a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(a){return e.handleManagement(t.row)}}},[e._v("管理")]):e._e(),e._v(" "),e.rules.TagsLabelDelete?a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleDeleteTag(t.row)}}},[e._v("删除")]):e._e()]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getUserTagsList}}),e._v(" "),a("manage-label",{attrs:{visible:e.manageLabelVisible,"label-data":e.labelList,title:"管理标签"},on:{"update:visible":function(t){e.manageLabelVisible=t}}}),e._v(" "),a("add-game",{attrs:{visible:e.addGameVisible,play_tags:e.playTagOptions,style_tags:e.styleTagOptions,type:"on-add",title:"添加游戏"},on:{"update:visible":function(t){e.addGameVisible=t},"on-add":e.handleAddGame}}),e._v(" "),a("user-label-manage",{attrs:{visibility:e.userLabelVisible,"user-data":e.userData,"all-player-tags":e.playerTags,"all-games":e.gameNames,"button-disable":e.buttonDisable,"confirm-btn-text":"确定",title:"用户标签管理"},on:{"update:visibility":function(t){e.userLabelVisible=t},"on-manage":e.onManageLabel}})],1)},[],!1,null,"7a07b146",null));$.options.__file="index.vue";t.default=$.exports},"2wEF":function(e,t,a){"use strict";var n=a("bS4n"),l=a.n(n),i=a("6ZY3"),s=a.n(i),r=a("IL3p"),o=a.n(r),u={props:{visible:{type:Boolean,default:!1},title:{type:String,required:!0},width:{type:String,default:"800px"},play_tags:{type:Array,default:function(){return[]}},style_tags:{type:Array,default:function(){return[]}},type:{type:String,required:!0},data:{type:Object,default:function(){return{}}}},data:function(){return{formData:{gamename:"",platform:null,play_tags:[],style_tags:[]},cloneFormData:null,rules:{gamename:[{required:!0,message:"请输入游戏名称",trigger:"blur"}],play_tags:[{validator:function(e,t,a){t.length<=0?a(new Error("请至少选择一个玩法标签")):t.length>8?a(new Error("最多可选择8个玩法标签")):a()},trigger:"change"}],style_tags:[{validator:function(e,t,a){t.length<=0?a(new Error("请至少选择一个风格标签")):t.length>12?a(new Error("最多可选择12个玩法标签")):a()},trigger:"change"}],platform:[{required:!0,message:"请选择所属平台",trigger:"change"}]}}},methods:{handleOpen:function(){this.cloneFormData=o()(this.formData),this.formData=s()({},this.formData,this.data)},handleCancel:function(){this.$emit("update:visible",!1),this._resetFields()},handleConfirm:function(){var e=this;this.$refs.addGameForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;var a=l()({},e.formData,{play_tags:e.formData.play_tags.join(","),style_tags:e.formData.style_tags.join(",")});e.$emit(e.type,a)})},_resetFields:function(){this.$refs.addGameForm.resetFields(),this.formData=this.cloneFormData}}},c=(a("d7aY"),a("IpcV"),a("ZrdR")),p=Object(c.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.visible,title:e.title,width:e.width},on:{open:e.handleOpen,close:e.handleCancel}},[a("div",{staticClass:"form-container"},[a("el-form",{ref:"addGameForm",attrs:{model:e.formData,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"游戏名称",prop:"gamename"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入游戏"},model:{value:e.formData.gamename,callback:function(t){e.$set(e.formData,"gamename",t)},expression:"formData.gamename"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"所属平台",prop:"platform"}},[a("el-radio-group",{model:{value:e.formData.platform,callback:function(t){e.$set(e.formData,"platform",t)},expression:"formData.platform"}},[a("el-radio",{attrs:{label:"Longtugame"}},[e._v("龙图游戏")]),e._v(" "),a("el-radio",{attrs:{label:"Other"}},[e._v("其他")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"玩法标签",prop:"play_tags"}},[a("el-checkbox-group",{model:{value:e.formData.play_tags,callback:function(t){e.$set(e.formData,"play_tags",t)},expression:"formData.play_tags"}},e._l(e.play_tags,function(e,t){return a("el-checkbox",{key:t,attrs:{label:e,name:"type"}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"风格标签",prop:"style_tags"}},[a("el-checkbox-group",{model:{value:e.formData.style_tags,callback:function(t){e.$set(e.formData,"style_tags",t)},expression:"formData.style_tags"}},e._l(e.style_tags,function(e,t){return a("el-checkbox",{key:t,attrs:{label:e,name:"type"}})}),1)],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.handleCancel}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleConfirm}},[e._v("确 定")])],1)])},[],!1,null,"c940ddaa",null);p.options.__file="index.vue";t.a=p.exports},"30X5":function(e,t,a){},"5aJA":function(e,t,a){"use strict";var n=a("94W7");a.n(n).a},"8kjE":function(e,t,a){"use strict";var n=a("aedj");a.n(n).a},"94W7":function(e,t,a){},"9XX1":function(e,t,a){"use strict";var n=a("CCHy");a.n(n).a},AcaB:function(e,t,a){"use strict";var n=a("30X5");a.n(n).a},CCHy:function(e,t,a){},F7Cd:function(e,t,a){a("VHJ/"),e.exports=a("g24s").Object.entries},G8Qi:function(e,t,a){},G8w8:function(e,t,a){var n=a("Tx3c"),l=a("/bUn"),i=a("X4Qt").f;e.exports=function(e){return function(t){for(var a,s=l(t),r=n(s),o=r.length,u=0,c=[];o>u;)i.call(s,a=r[u++])&&c.push(e?[a,s[a]]:s[a]);return c}}},HCx2:function(e,t,a){},IpcV:function(e,t,a){"use strict";var n=a("0W2r");a.n(n).a},Pm0I:function(e,t,a){"use strict";var n=a("hQSO");a.n(n).a},Qn0k:function(e,t,a){"use strict";var n=a("cLjf"),l=a.n(n),i=a("hDQ3"),s=a.n(i),r=a("bS4n"),o=a.n(r),u={props:{title:{type:String,default:""},tags:{type:Array,default:function(){return[]}}},data:function(){return{newLabel:"",inputVisible:!1}},computed:{paddingStyle:function(){return{padding:"10px 0"}}},methods:{deletePlayTag:function(e){this.tags.splice(this.tags.indexOf(e),1),this.$emit("update:tags",this.tags)},addLabel:function(){var e=this;this.inputVisible=!0,this.$nextTick(function(t){e.$refs.saveTagInput.focus()})},handleInputConfirm:function(){var e=this.newLabel;if(e){if(this.tags.includes(e))return void this.$message({message:"当前标签已存在",type:"warning"});this.tags.push(e)}this.inputVisible=!1,this.newLabel="",this.$emit("update:tags",this.tags)}}},c=(a("dYe2"),a("ZrdR")),p=Object(c.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"label-item-wrap"},[a("span",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.addLabel}},[e._v("添加")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.tags.length<=0&&!e.inputVisible,expression:"tags.length<=0&&!inputVisible"}],staticClass:"nodata"},[e._v("暂无该标签")]),e._v(" "),a("div",{staticClass:"tags-wrap",style:e.tags.length>0||e.inputVisible?e.paddingStyle:""},[e._l(e.tags,function(t){return a("el-tag",{key:t.name,staticClass:"tag-item",attrs:{"disable-transitions":!1,type:"info",closable:""},on:{close:function(a){return e.deletePlayTag(t)}}},[e._v("\n      "+e._s(t)+"\n    ")])}),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:e.inputVisible,expression:"inputVisible"}],ref:"saveTagInput",staticStyle:{width:"90px","vertical-align":"middle"},attrs:{size:"mini"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputConfirm(t)}},model:{value:e.newLabel,callback:function(t){e.newLabel=t},expression:"newLabel"}})],2)],1)},[],!1,null,"1b6deec0",null);p.options.__file="labelItem.vue";var d=p.exports,m=a("IL3p"),f=a.n(m),g=a("0o2y"),b=a("2nGb"),y=a("8t5x"),h=[{id:"1",label:"playTagOptions",title:"玩法标签"},{id:"2",label:"styleTagOptions",title:"风格标签"},{id:"3",label:"playerTags",title:"玩家认证标签"},{id:"4",label:"lostReason",title:"流失原因"},{id:"5",label:"ortherGames",title:"其他游戏"},{id:"6",label:"isRecack",title:"回归意愿"},{id:"7",label:"connectionState",title:"接通状态"}],v={components:{LabelItem:d},props:{visible:{type:Boolean,default:!1},title:{type:String,required:!0},width:{type:String,default:"800px"},labelData:{type:Array,default:function(){return[]}}},inject:["refreshLabel"],data:function(){return{labelList:[],loading:!1}},computed:o()({},Object(y.b)(["nick_name"])),methods:{handleOpen:function(){var e=f()(this.labelData);this.labelList=this.installLabel(e,h)},handleCancel:function(){this.$emit("update:visible",!1)},handleConfirm:function(){var e=this;return s()(l.a.mark(function t(){var a,n,i,s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={labelList:e.labelList},e.loading=!0,t.next=4,Object(g.b)(a);case 4:n=t.sent,i=n.code,s=n.msg,e.loading=!1,i===b.a?(e.$message({type:"success",message:s}),e.refreshLabel(),e.$emit("update:visible",!1)):e.$message({type:"warning",message:s});case 9:case"end":return t.stop()}},t,e)}))()},installLabel:function(e,t){var a=[];return t.map(function(t){return e.map(function(e){t.label===e.label&&a.push({id:t.id,label:t.label,title:t.title,tags:e.tags})})}),a}}},_=(a("+tmS"),Object(c.a)(v,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.visible,title:e.title,width:e.width,"append-to-body":!0},on:{open:e.handleOpen,close:e.handleCancel}},[a("el-scrollbar",[a("div",{staticClass:"label-container"},e._l(e.labelList,function(t,n){return a("label-item",{key:n,staticClass:"label-item",attrs:{tags:t.tags,title:t.title},on:{"update:tags":function(a){return e.$set(t,"tags",a)}}})}),1)]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.handleCancel}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.handleConfirm}},[e._v("确 定")])],1)],1)},[],!1,null,"76a492e0",null));_.options.__file="index.vue";t.a=_.exports},"VHJ/":function(e,t,a){var n=a("Rx2n"),l=a("G8w8")(!0);n(n.S,"Object",{entries:function(e){return l(e)}})},Vkta:function(e,t,a){e.exports={default:a("F7Cd"),__esModule:!0}},aedj:function(e,t,a){},ct8p:function(e,t,a){"use strict";var n=a("Vkta"),l=a.n(n),i=a("rerW"),s=a.n(i),r=a("+XIM"),o=a.n(r),u=a("cLjf"),c=a.n(u),p=a("bS4n"),d=a.n(p),m=a("hDQ3"),f=a.n(m),g=a("icuI"),b=a("2nGb"),y=[{key:"Longtugame",display_name:"龙图游戏"},{key:"Other",display_name:"其他"}].reduce(function(e,t){return e[t.key]=t.display_name,e},{});t.a={data:function(){return{addGameVisible:!1}},filters:{platformFilter:function(e){return y[e]}},methods:{handleAddGame:function(e){var t=this;return f()(c.a.mark(function a(){var n,l,i,s;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=d()({},e),a.next=3,Object(g.a)(n);case 3:l=a.sent,i=l.code,s=l.msg,i===b.a?(t.$message({type:"success",message:"游戏添加成功"}),t.$options.regetList&&t.getGameList(),t.addGameVisible=!1):t.$message({type:"warning",message:s});case 7:case"end":return a.stop()}},a,t)}))()},collectTags:function(e){var t=[],a=!0,n=!1,i=void 0;try{for(var r,u=s()(l()(e));!(a=(r=u.next()).done);a=!0){var c=r.value,p=o()(c,2),d=p[0],m=p[1];if("list"===d||"total"===d)break;t.push({label:d,tags:m})}}catch(e){n=!0,i=e}finally{try{!a&&u.return&&u.return()}finally{if(n)throw i}}return t}}}},"d+u7":function(e,t,a){},d7aY:function(e,t,a){"use strict";var n=a("yVli");a.n(n).a},dYe2:function(e,t,a){"use strict";var n=a("d+u7");a.n(n).a},hQSO:function(e,t,a){},icuI:function(e,t,a){"use strict";a.d(t,"d",function(){return l}),a.d(t,"b",function(){return i}),a.d(t,"a",function(){return s}),a.d(t,"c",function(){return r});var n=a("t3Un");function l(e){return Object(n.a)({url:"/user/gameTagsList",method:"post",data:e})}function i(e){return Object(n.a)({url:"/user/gameTagsDel",method:"post",data:e})}function s(e){return Object(n.a)({url:"/user/gameTagsAdd",method:"post",data:e})}function r(e){return Object(n.a)({url:"/user/gameTagsEdit",method:"post",data:e})}},rqwi:function(e,t,a){"use strict";var n=a("G8Qi");a.n(n).a},yVli:function(e,t,a){}}]);