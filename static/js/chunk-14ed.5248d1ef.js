(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-14ed"],{"102j":function(e,t,a){"use strict";var i=a("36Kv");a.n(i).a},"36Kv":function(e,t,a){},ItEz:function(e,t,a){"use strict";var i=a("zSLU");a.n(i).a},Nlzp:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return l});var i=a("t3Un");function r(){return Object(i.a)({url:"/index/gamelist",method:"get"})}function l(){return Object(i.a)({url:"/index/kefulist",method:"get"})}},qRSU:function(e,t,a){},qiQY:function(e,t,a){"use strict";a.r(t);var i=a("cLjf"),r=a.n(i),l=a("hDQ3"),n=a.n(l),o=a("bS4n"),s=a.n(o),u=a("Mz3J"),d=a("6ZY3"),c=a.n(d),m=a("8t5x"),p={props:{title:{type:String,required:!0},width:{type:String,default:"30%"},visible:{type:Boolean,default:!1},type:{type:String,required:!0},gameList:{type:Array,default:function(){return[]}},data:{type:Object,default:function(){return{}}}},data:function(){return{dialogForm:{id:"",game:"",clientid:"",userid:"",roleid:"",youxianji:"",fankui:"",yanfa_fankui:"",yanfa_fankui_type:"",title:""},customerRules:{game:[{required:!0,message:"请输入隶属游戏",trigger:"blur"}],userid:[{required:!0,message:"请输入用户ID",trigger:"blur"}],roleid:[{required:!0,message:"请输入角色ID",trigger:"blur"}],clientid:[{required:!0,message:"请输入区服",trigger:"blur"}],title:[{required:!0,message:"请输入标题",trigger:"blur"},{min:1,max:20,message:"标题字数应小于等于20个全角字符",trigger:"blur"}],youxianji:[{required:!0,message:"请输入选择优先级",trigger:"blur"}],fankui:[{required:!0,message:"请输入描述内容",trigger:"blur"},{min:1,max:300,message:"描述内容应小于300个字符",trigger:"blur"}]},developerRules:{yanfa_fankui_type:[{required:!0,message:"请输入选择优先级",trigger:"blur"}],yanfa_fankui:[{required:!0,message:"请输入反馈结果",trigger:"blur"},{min:1,max:300,message:"反馈结果应小于300个字符",trigger:"blur"}]},isCustomer:!0}},computed:s()({styleWidth:function(){return{width:"380px"}},isShowButton:function(){return"on-submit"===this.type||"on-feedback"===this.type&&!0===this.rules.FeedbackDev}},Object(m.b)(["rules"])),methods:{handleOpen:function(){this.dialogForm=c()({},this.dialogForm,this.data),this.dialogForm.yanfa_fankui_type=0===this.dialogForm.yanfa_fankui_type?"":this.dialogForm.yanfa_fankui_type},handleCancel:function(e){this._resetForm(),this.$refs[e].clearValidate(),this.$emit("update:visible",!1)},handleConfirm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var a={id:t.dialogForm.id,game:t.dialogForm.game,clientid:t.dialogForm.clientid,userid:t.dialogForm.userid,roleid:t.dialogForm.roleid,youxianji:t.dialogForm.youxianji,fankui:t.dialogForm.fankui,yanfa_fankui:t.dialogForm.yanfa_fankui,yanfa_fankui_type:t.dialogForm.yanfa_fankui_type,title:t.dialogForm.title};t.$emit(t.type,a)})},_resetForm:function(){for(var e in this.dialogForm)this.dialogForm[e]=""}}},f=(a("uWd4"),a("ItEz"),a("ZrdR")),b=Object(f.a)(p,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{"close-on-click-modal":!1,visible:e.visible,width:e.width,title:e.title},on:{open:e.handleOpen,close:function(t){return e.handleCancel("feedbackForm")}}},[a("div",{staticClass:"form-container"},[a("el-form",{ref:"feedbackForm",attrs:{model:e.dialogForm,rules:e.isCustomer?e.customerRules:e.developerRules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"隶属游戏",prop:"game"}},[a("el-select",{style:e.styleWidth,attrs:{disabled:!e.rules.FeedbackSubmit,placeholder:"请选择"},model:{value:e.dialogForm.game,callback:function(t){e.$set(e.dialogForm,"game",t)},expression:"dialogForm.game"}},e._l(e.gameList,function(e,t){return a("el-option",{key:t,attrs:{value:e.gameid,label:e.gamename}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"用户ID",prop:"userid"}},[a("el-input",{style:e.styleWidth,attrs:{disabled:!e.rules.FeedbackSubmit,placeholder:"请输入"},model:{value:e.dialogForm.userid,callback:function(t){e.$set(e.dialogForm,"userid",t)},expression:"dialogForm.userid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"角色ID",prop:"roleid"}},[a("el-input",{style:e.styleWidth,attrs:{disabled:!e.rules.FeedbackSubmit,placeholder:"请输入"},model:{value:e.dialogForm.roleid,callback:function(t){e.$set(e.dialogForm,"roleid",t)},expression:"dialogForm.roleid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"区服",prop:"clientid"}},[a("el-input",{style:e.styleWidth,attrs:{disabled:!e.rules.FeedbackSubmit,placeholder:"请输入"},model:{value:e.dialogForm.clientid,callback:function(t){e.$set(e.dialogForm,"clientid",t)},expression:"dialogForm.clientid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{style:e.styleWidth,attrs:{disabled:!e.rules.FeedbackSubmit,placeholder:"请输入"},model:{value:e.dialogForm.title,callback:function(t){e.$set(e.dialogForm,"title",t)},expression:"dialogForm.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"优先级",prop:"youxianji"}},[a("el-select",{style:e.styleWidth,attrs:{disabled:!e.rules.FeedbackSubmit,placeholder:"请选择"},model:{value:e.dialogForm.youxianji,callback:function(t){e.$set(e.dialogForm,"youxianji",t)},expression:"dialogForm.youxianji"}},[a("el-option",{attrs:{value:1,label:"一星级"}}),e._v(" "),a("el-option",{attrs:{value:2,label:"二星级"}}),e._v(" "),a("el-option",{attrs:{value:3,label:"三星级"}}),e._v(" "),a("el-option",{attrs:{value:4,label:"四星级"}}),e._v(" "),a("el-option",{attrs:{value:5,label:"五星级"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"fankui"}},[a("el-input",{style:e.styleWidth,attrs:{rows:3,disabled:!e.rules.FeedbackSubmit,maxlength:300,type:"textarea",placeholder:"请输入"},model:{value:e.dialogForm.fankui,callback:function(t){e.$set(e.dialogForm,"fankui",t)},expression:"dialogForm.fankui"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"研发反馈",prop:"yanfa_fankui_type"}},[a("el-select",{style:e.styleWidth,attrs:{disabled:!e.rules.FeedbackDev,placeholder:"请选择"},model:{value:e.dialogForm.yanfa_fankui_type,callback:function(t){e.$set(e.dialogForm,"yanfa_fankui_type",t)},expression:"dialogForm.yanfa_fankui_type"}},[a("el-option",{attrs:{value:1,label:"已解决"}}),e._v(" "),a("el-option",{attrs:{value:2,label:"已采纳"}}),e._v(" "),a("el-option",{attrs:{value:3,label:"不采纳"}}),e._v(" "),a("el-option",{attrs:{value:4,label:"暂不解决"}}),e._v(" "),a("el-option",{attrs:{value:5,label:"不予解决"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"",prop:"yanfa_fankui"}},[a("el-input",{style:e.styleWidth,attrs:{rows:3,disabled:!e.rules.FeedbackDev,maxlength:300,type:"textarea",placeholder:"请输入"},model:{value:e.dialogForm.yanfa_fankui,callback:function(t){e.$set(e.dialogForm,"yanfa_fankui",t)},expression:"dialogForm.yanfa_fankui"}})],1)],1)],1),e._v(" "),e.isShowButton?a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.handleCancel("feedbackForm")}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleConfirm("feedbackForm")}}},[e._v("确 认")])],1):e._e()])},[],!1,null,"a69dfff0",null);b.options.__file="feedbackDialog.vue";var g=b.exports,y=a("t3Un");function k(e){return Object(y.a)({url:"/feedback/index",method:"get",params:e})}function _(e){return Object(y.a)({url:"/feedback/add",method:"post",data:e})}function v(e){return Object(y.a)({url:"/feedback/yanfa_edit",method:"post",data:e})}var h=a("Nlzp"),F=a("7Qib"),x=a("2nGb"),w=[{key:"0",display_name:"尚未回复"},{key:"1",display_name:"已解决"},{key:"2",display_name:"已采纳"},{key:"3",display_name:"不采纳"},{key:"4",display_name:"暂不解决"},{key:"5",display_name:"不予解决"}].reduce(function(e,t){return e[t.key]=t.display_name,e},{}),Q={components:{Pagination:u.a,FeedbackDialog:g},filters:{typeFilter:function(e){return w[e]}},data:function(){return{listQuery:{gamename:"",openid:"",roleid:"",note_taker:"",recording_time:"",priority:"",feedback:"",ordey:"",by:"",page:1,limit:10},total:0,feedbackDialogVisible:!1,feedbackItemData:null,feedbackType:"",feedbackList:[],gameNameList:[],loading:!0,exportLoading:!1,pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]}}},computed:s()({styleWidth:function(){return{width:"230px"}},add_time_start:function(){return this.listQuery.recording_time?parseInt(this.listQuery.recording_time[0])/1e3:""},add_time_end:function(){return this.listQuery.recording_time?parseInt(this.listQuery.recording_time[1])/1e3:""}},Object(m.b)(["rules"])),created:function(){var e=this;setTimeout(function(){e.getGameNameList(),e.getFeedbackList()},20)},methods:{onQuery:function(){this.listQuery.page=1,this.getFeedbackList()},onReset:function(e){this.$refs[e].resetFields(),this.listQuery.page=1,this.getFeedbackList()},sortChange:function(e){var t=e.prop,a=e.order,i="ascending"===a?"ASC":"descending"===a?"DESC":"";this.listQuery.ordey=t,this.listQuery.by=i,this.listQuery.pageNumber=1,this.getFeedbackList()},handleDownload:function(){var e=this;return n()(r.a.mark(function t(){var i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getAllFeedbackList();case 2:if(i=t.sent){t.next=6;break}return e.$message({type:"warning",massage:"导出失败，请稍后再试"}),t.abrupt("return");case 6:Promise.all([a.e("chunk-a186"),a.e("chunk-963e")]).then(a.bind(null,"S/jZ")).then(function(t){var a=e._formatJson(["game","clientid","userid","roleid","add_time","title","youxianji","nick_name","yanfa_fankui_type"],i);t.export_json_to_excel({header:["隶属游戏","区服","用户ID","角色ID","记录时间","意见或BUG","优先级","记录人","研发反馈"],data:a,autoWidth:!0,filename:"用户反馈"+Object(F.a)("{y}{m}{d}{h}{i}{s}")})});case 7:case"end":return t.stop()}},t,e)}))()},submitFeedback:function(){this.feedbackItemData={},this.feedbackType="on-submit",this.feedbackDialogVisible=!0},handleCheck:function(e){this.feedbackItemData=e,this.feedbackType="on-feedback",this.feedbackDialogVisible=!0},handleSubmit:function(e){var t=this;return n()(r.a.mark(function a(){var i,l,n,o;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return i={gameid:e.game,clientid:e.clientid,userid:e.userid,roleid:e.roleid,youxianji:e.youxianji,fankui:e.fankui,title:e.title},a.next=3,_(i);case 3:l=a.sent,n=l.code,o=l.msg,n===x.a?(t.$msgbox({title:"温馨提示",message:"您的反馈已经提交，请等待研发人员回馈",type:"success",confirmButtonText:"确定"}),t.getFeedbackList(),t.feedbackDialogVisible=!1):t.$message({type:"error",message:o});case 7:case"end":return a.stop()}},a,t)}))()},handleFeedback:function(e){var t=this;return n()(r.a.mark(function a(){var i,l,n,o;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return i={id:e.id,yanfa_fankui:e.yanfa_fankui,yanfa_fankui_type:e.yanfa_fankui_type},a.next=3,v(i);case 3:l=a.sent,n=l.code,o=l.msg,n===x.a?(t.getFeedbackList(),t.$message({type:"success",message:"反馈成功"}),t.feedbackDialogVisible=!1):t.$message({type:"error",message:o});case 7:case"end":return a.stop()}},a,t)}))()},_formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"yanfa_fankui_type"===e?w[t[e]]:"add_time"===e?Object(F.f)(t[e]):t[e]})})},getFeedbackList:function(){var e=this;return n()(r.a.mark(function t(){var a,i,l,n,o,s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={gameid:e.listQuery.gamename,add_time_start:e.add_time_start,add_time_end:e.add_time_end,ordey:e.listQuery.ordey,by:e.listQuery.by,userid:e.listQuery.openid,roleid:e.listQuery.roleid,youxianji:e.listQuery.priority,nick_name:e.listQuery.note_taker,yanfa_fankui_type:e.listQuery.feedback,pageSize:e.listQuery.limit,pageNumber:e.listQuery.pageNumber},e.loading=!0,t.next=4,k(a);case 4:i=t.sent,l=i.code,n=i.data,o=n.total,s=n.rows,e.loading=!1,l===x.a&&(e.total=o,e.feedbackList=s);case 11:case"end":return t.stop()}},t,e)}))()},getGameNameList:function(){var e=this;return n()(r.a.mark(function t(){var a,i,l;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.b)();case 2:a=t.sent,i=a.code,l=a.data,i===x.a&&(e.gameNameList=l);case 6:case"end":return t.stop()}},t,e)}))()},getAllFeedbackList:function(){var e=this;return n()(r.a.mark(function t(){var a,i,l,n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={pageSize:e.total},e.exportLoading=!0,t.next=4,k(a);case 4:if(i=t.sent,l=i.code,n=i.data.rows,e.exportLoading=!1,l!==x.a){t.next=12;break}return t.abrupt("return",n);case 12:return t.abrupt("return",!1);case 13:case"end":return t.stop()}},t,e)}))()}}},D=(a("102j"),Object(f.a)(Q,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{ref:"feedbackForm",staticClass:"form-inline",attrs:{inline:!0,model:e.listQuery,"label-width":"90px"}},[a("el-form-item",{attrs:{label:"隶属游戏",prop:"gamename"}},[a("el-select",{style:e.styleWidth,attrs:{clearable:"",placeholder:"全部游戏"},model:{value:e.listQuery.gamename,callback:function(t){e.$set(e.listQuery,"gamename",t)},expression:"listQuery.gamename"}},e._l(e.gameNameList,function(e,t){return a("el-option",{key:t,attrs:{label:e.gamename,value:e.gameid}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"用户ID",prop:"openid"}},[a("el-input",{style:e.styleWidth,attrs:{placeholder:"请输入"},model:{value:e.listQuery.openid,callback:function(t){e.$set(e.listQuery,"openid",t)},expression:"listQuery.openid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"角色ID",prop:"roleid"}},[a("el-input",{style:e.styleWidth,attrs:{placeholder:"请输入"},model:{value:e.listQuery.roleid,callback:function(t){e.$set(e.listQuery,"roleid",t)},expression:"listQuery.roleid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"记录人",prop:"note_taker"}},[a("el-input",{style:e.styleWidth,attrs:{placeholder:"请输入"},model:{value:e.listQuery.note_taker,callback:function(t){e.$set(e.listQuery,"note_taker",t)},expression:"listQuery.note_taker"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"记录时间",prop:"recording_time"}},[a("el-date-picker",{style:e.styleWidth,attrs:{"picker-options":e.pickerOptions,type:"daterange","unlink-panels":"","value-format":"timestamp","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.listQuery.recording_time,callback:function(t){e.$set(e.listQuery,"recording_time",t)},expression:"listQuery.recording_time"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"优先级",prop:"priority"}},[a("el-select",{style:e.styleWidth,attrs:{clearable:"",placeholder:"请选择"},model:{value:e.listQuery.priority,callback:function(t){e.$set(e.listQuery,"priority",t)},expression:"listQuery.priority"}},[a("el-option",{attrs:{label:"一星级",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"二星级",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"三星级",value:"3"}}),e._v(" "),a("el-option",{attrs:{label:"四星级",value:"4"}}),e._v(" "),a("el-option",{attrs:{label:"五星级",value:"5"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"研发反馈",prop:"feedback"}},[a("el-select",{style:e.styleWidth,attrs:{clearable:"",placeholder:"请选择"},model:{value:e.listQuery.feedback,callback:function(t){e.$set(e.listQuery,"feedback",t)},expression:"listQuery.feedback"}},[a("el-option",{attrs:{label:"已解决",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"已采纳",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"不采纳",value:"3"}}),e._v(" "),a("el-option",{attrs:{label:"暂不解决",value:"4"}}),e._v(" "),a("el-option",{attrs:{label:"不予解决",value:"5"}}),e._v(" "),a("el-option",{attrs:{label:"尚未恢复",value:"0"}})],1)],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-left":"20px"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.onQuery}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:function(t){return e.onReset("feedbackForm")}}},[e._v("重置")])],1)],1)],1),e._v(" "),a("div",{staticClass:"top-operate"},[e.rules.FeedbackSubmit?a("el-button",{attrs:{type:"primary",icon:"el-icon-upload",size:"mini"},on:{click:e.submitFeedback}},[e._v("提交反馈")]):e._e(),e._v(" "),a("el-button",{attrs:{loading:e.exportLoading,icon:"el-icon-download",type:"primary",size:"mini"},on:{click:e.handleDownload}},[e._v("批量导出")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.feedbackList,border:"",fit:""},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{label:"隶属游戏",fixed:"",width:"180",prop:"game",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"区服",prop:"clientid",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"用户ID",prop:"userid",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"角色ID",prop:"roleid",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"记录时间",prop:"add_time",sortable:"custom",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("parseTime")(t.row.add_time,"{y}-{m}-{d} {h}:{i}")))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"意见或BUG",width:"350",prop:"title",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"优先级",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(+t.row.youxianji,function(e){return a("svg-icon",{key:e,staticClass:"meta-item__icon",attrs:{"icon-class":"star"}})})}}])}),e._v(" "),a("el-table-column",{attrs:{label:"记录人",prop:"nick_name",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"研发反馈",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("typeFilter")(t.row.yanfa_fankui_type)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return e.rules.FeedbackCheck?[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(a){return e.handleCheck(t.row)}}},[e._v("查看")])]:void 0}}],null,!0)})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getFeedbackList}}),e._v(" "),a("feedback-dialog",{attrs:{visible:e.feedbackDialogVisible,data:e.feedbackItemData,type:e.feedbackType,"game-list":e.gameNameList,width:"600px",title:"反馈登记"},on:{"update:visible":function(t){e.feedbackDialogVisible=t},"on-feedback":e.handleFeedback,"on-submit":e.handleSubmit}})],1)},[],!1,null,"8b2c67dc",null));D.options.__file="index.vue";t.default=D.exports},uWd4:function(e,t,a){"use strict";var i=a("qRSU");a.n(i).a},zSLU:function(e,t,a){}}]);