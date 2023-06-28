"use strict";(self["webpackChunks005"]=self["webpackChunks005"]||[]).push([[8025,3221,8880],{3221:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var a=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("添加IC卡")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"IC卡号",prop:"carNumber"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"","show-word-limit":"",maxlength:"240",placeholder:"请输入IC卡号..."},model:{value:e.form.carNumber,callback:function(t){e.$set(e.form,"carNumber",t)},expression:"form.carNumber"}})],1),t("FormItem",{attrs:{label:"服务电话",prop:"mobile"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"","show-word-limit":"",maxlength:"240",placeholder:"请输入服务电话..."},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),t("FormItem",{attrs:{label:"余额",prop:"balance"}},[t("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000",placeholder:"请输入余额..."},model:{value:e.form.balance,callback:function(t){e.$set(e.form,"balance",t)},expression:"form.balance"}})],1),t("FormItem",{attrs:{label:"归属人",prop:"userId"}},[t("Select",{staticStyle:{width:"570px"},attrs:{placeholder:"请选择归属人...",clearable:""},model:{value:e.form.userId,callback:function(t){e.$set(e.form,"userId",t)},expression:"form.userId"}},e._l(e.userList,(function(s,a){return t("Option",{key:a,attrs:{value:s.id}},[e._v(e._s(s.nickname))])})),1)],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},i=[],r=s(5058);const l={name:"add",components:{},data(){return{submitLoading:!1,form:{carNumber:"",date:"",workUser:"",mobile:"",balance:0,userId:""},formValidate:{},userList:[]}},methods:{init(){this.getUserListFx()},getUserListFx(){var e=this;e.userList=[],(0,r.lE)({type:0}).then((t=>{t.success&&(e.userList=t.result)}))},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,r.Hc)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},o=l;var c=s(1001),n=(0,c.Z)(o,a,i,!1,null,null,null);const m=n.exports},8880:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var a=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("编辑IC卡")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"IC卡号",prop:"carNumber"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"","show-word-limit":"",maxlength:"240",placeholder:"请输入IC卡号..."},model:{value:e.form.carNumber,callback:function(t){e.$set(e.form,"carNumber",t)},expression:"form.carNumber"}})],1),t("FormItem",{attrs:{label:"开卡日期",prop:"date"}},[t("Input",{staticStyle:{width:"570px"},attrs:{readonly:""},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),t("FormItem",{attrs:{label:"服务电话",prop:"mobile"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"","show-word-limit":"",maxlength:"240",placeholder:"请输入服务电话..."},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),t("FormItem",{attrs:{label:"余额",prop:"balance"}},[t("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000",placeholder:"请输入余额..."},model:{value:e.form.balance,callback:function(t){e.$set(e.form,"balance",t)},expression:"form.balance"}})],1),t("FormItem",{attrs:{label:"归属人",prop:"userId"}},[t("Select",{staticStyle:{width:"570px"},attrs:{placeholder:"请选择归属人...",clearable:""},model:{value:e.form.userId,callback:function(t){e.$set(e.form,"userId",t)},expression:"form.userId"}},e._l(e.userList,(function(s,a){return t("Option",{key:a,attrs:{value:s.id}},[e._v(e._s(s.nickname))])})),1)],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},i=[],r=s(5058);const l={name:"edit",components:{},props:{data:Object},data(){return{submitLoading:!1,form:{carNumber:"",date:"",workUser:"",mobile:"",balance:0},formValidate:{},userList:[]}},methods:{init(){this.getUserListFx(),this.handleReset(),this.form=this.data},getUserListFx(){var e=this;e.userList=[],(0,r.lE)({type:0}).then((t=>{t.success&&(e.userList=t.result)}))},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,r.TG)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},o=l;var c=s(1001),n=(0,c.Z)(o,a,i,!1,null,null,null);const m=n.exports},8025:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search"},["add"==e.currView?t("add",{on:{close:function(t){e.currView="index"},submited:e.submited}}):e._e(),"edit"==e.currView?t("edit",{attrs:{data:e.formData},on:{close:function(t){e.currView="index"},submited:e.submited}}):e._e(),t("Card",{directives:[{name:"show",rawName:"v-show",value:"index"==e.currView,expression:"currView=='index'"}]},[t("Row",{directives:[{name:"show",rawName:"v-show",value:e.openSearch,expression:"openSearch"}],nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch.apply(null,arguments)}}},[t("Form",{ref:"searchForm",attrs:{model:e.searchForm,inline:"","label-width":0}},[t("Form-item",{ref:"searchForm",staticStyle:{display:"flex"},attrs:{model:e.searchForm,inline:"","label-width":0}},[t("Form-item",{attrs:{label:"",prop:"carNumber"}},[t("Input",{staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"IC卡号",clearable:""},model:{value:e.searchForm.carNumber,callback:function(t){e.$set(e.searchForm,"carNumber",t)},expression:"searchForm.carNumber"}})],1),t("Form-item",{attrs:{label:"",prop:"workUser"}},[t("Input",{staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"开卡经办人",clearable:""},model:{value:e.searchForm.workUser,callback:function(t){e.$set(e.searchForm,"workUser",t)},expression:"searchForm.workUser"}})],1),t("Form-item",{staticClass:"br",staticStyle:{"margin-left":"10px"}},[t("Button",{attrs:{type:"primary",icon:"ios-search",size:"small",ghost:""},on:{click:e.handleSearch}},[e._v("搜索")]),t("Button",{attrs:{type:"warning",size:"small",icon:"md-refresh",ghost:""},on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"info",size:"small",icon:"md-add",ghost:"",disabled:!e.$route.meta.permTypes.includes("add")},on:{click:e.add}},[e._v("添加")]),t("Button",{attrs:{type:"error",icon:"md-trash",size:"small",ghost:"",disabled:!e.$route.meta.permTypes.includes("delete")},on:{click:e.delAll}},[e._v("删除")]),t("Button",{attrs:{type:"success",icon:"md-paper-plane",size:"small",ghost:""},on:{click:e.excelData}},[e._v("导出")])],1),t("Form-item",{staticStyle:{position:"fixed",right:"50px",top:"130px"}},[t("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"info",icon:"md-settings",size:"small",ghost:""},on:{click:function(t){e.showFilterPanelFlag=!e.showFilterPanelFlag}}},[e._v(" 列筛选")]),t("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"warning",icon:"ios-help-circle-outline",size:"small",ghost:""},on:{click:function(t){e.modal1=!0}}},[e._v(" 使用教程")]),t("Modal",{attrs:{title:"使用教程"},model:{value:e.modal1,callback:function(t){e.modal1=t},expression:"modal1"}},[t("p",[e._v("1.XXXXXXXXXXXXXXXXXXXXXXXX")]),t("p",[e._v("2.XXXXXXXXXXXXXXXXXXXXXXXX")]),t("p",[e._v("3.XXXXXXXXXXXXXXXXXXXXXXXX")])])],1)],1)],1)],1),t("Row",{staticClass:"operation",staticStyle:{position:"relative"}},[t("transition",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showFilterPanelFlag,expression:"showFilterPanelFlag"}],staticClass:"filter-panel"},[t("CheckboxGroup",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.mycolumns,(function(e){return t("div",{key:e.key},[t("Checkbox",{staticStyle:{margin:"2px 5px"},attrs:{label:e.title}})],1)})),0)],1)])],1),t("Row",{directives:[{name:"show",rawName:"v-show",value:e.openTip,expression:"openTip"}]}),t("Row",[t("Table",{ref:"table",attrs:{loading:e.loading,height:e.tableHeight,border:"",stripe:"",size:"small",columns:e.columns,data:e.data,sortable:"custom","row-class-name":e.rowClassNmae},on:{"on-sort-change":e.changeSort,"on-selection-change":e.changeSelect,"on-row-click":e.rowClick}})],1),t("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[t("Page",{attrs:{current:e.searchForm.pageNumber,total:e.total,"page-size":e.searchForm.pageSize,"page-size-opts":[15,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1),t("Modal",{attrs:{title:"工卡充值",draggable:"",mask:!1,"footer-hide":"",width:"800"},model:{value:e.reModal,callback:function(t){e.reModal=t},expression:"reModal"}},[t("Form",{attrs:{"label-width":100,"label-position":"left"}},[t("Row",[t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{label:"充值金额"}},[t("InputNumber",{staticStyle:{width:"100%"},attrs:{min:"0",max:"5000000",placeholder:"请输入充值金额..."},model:{value:e.reNumber,callback:function(t){e.reNumber=t},expression:"reNumber"}})],1)],1),t("Col",{attrs:{span:"24"}},[t("Divider",[t("Button",{attrs:{loading:e.reLoading,type:"success"},on:{click:e.rechargeIcCardFx}},[e._v("确认充值")])],1)],1)],1)],1)],1)],1)},i=[],r=s(5058),l=s(3221),o=s(8880);const c={name:"single-window",components:{add:l["default"],edit:o["default"]},data(){return{reObj:{},reNumber:0,reLoading:!1,reModal:!1,tableHeight:0,selected:["选择","序号","IC卡号","开卡日期","开卡经办人","服务电话","余额","操作"],modal1:!1,openSearch:!0,openTip:!0,formData:{},currView:"index",loading:!0,searchForm:{pageNumber:1,pageSize:15,sort:"createTime",order:"desc"},selectList:[],selectCount:0,selectRow:0,columns:[{type:"selection",width:60,title:"选择",align:"center",fixed:"left"},{title:"序号",width:85,align:"center",fixed:"left",sortType:!0,render:(e,t)=>e("span",t.index+(this.searchForm.pageNumber-1)*this.searchForm.pageSize+1)},{title:"IC卡号",key:"carNumber",minWidth:180,tooltip:!0,sortable:!1},{title:"开卡日期",key:"date",minWidth:180,tooltip:!0,sortable:!1},{title:"开卡经办人",key:"workUser",minWidth:180,tooltip:!0,sortable:!1},{title:"服务电话",key:"mobile",minWidth:180,tooltip:!0,sortable:!1},{title:"余额",key:"balance",minWidth:180,tooltip:!0,sortable:!1},{title:"创建时间",key:"createTime",sortable:!0,sortType:"desc",minWidth:180,align:"center",tooltip:!0},{title:"创建者",key:"createBy",sortable:!0,sortType:"desc",minWidth:100,align:"center",tooltip:!0},{title:"修改时间",key:"updateTime",minWidth:180,align:"center",tooltip:!0},{title:"修改者",key:"updateBy",minWidth:100,align:"center",tooltip:!0},{title:"操作",key:"action",align:"center",width:280,fixed:"right",render:(e,t)=>{var s=this;return r.mG,e("div",[e("Button",{props:{type:"success",size:"small",icon:"ios-settings",ghost:!0},style:{marginRight:"5px"},on:{click:()=>{this.reObj=t.row,this.reNumber=0,this.reModal=!0}}},"充值"),e("Button",{props:{type:"primary",size:"small",icon:"ios-create-outline",ghost:!0,disabled:!(s.$route.meta.permTypes&&s.$route.meta.permTypes.includes("edit"))},style:{marginRight:"5px"},on:{click:()=>{this.edit(t.row)}}},"编辑"),e("Button",{props:{type:"error",size:"small",icon:"md-trash",ghost:!0},on:{click:()=>{this.remove(t.row)}}},"删除")])}}],data:[],pageNumber:1,pageSize:10,total:0,showFilterPanelFlag:!1}},methods:{init(){this.getDataList()},rechargeIcCardFx(){var e=this;e.reLoading=!0,(0,r.mG)({id:e.reObj.id,number:e.reNumber}).then((t=>{e.reModal=!1,e.reLoading=!1,t.success&&(this.$Message.success("充值成功"),e.getDataList())}))},submited(){this.currView="index",this.getDataList()},changePage(e){this.searchForm.pageNumber=e,this.getDataList(),this.clearSelectAll()},changePageSize(e){this.searchForm.pageSize=e,this.getDataList()},rowClick(e,t){this.selectRow=e},rowClassNmae(e,t){return e.id==this.selectRow.id?"rowClassNmaeColor":""},excelData(){this.$refs.table.exportCsv({filename:"导出结果"})},handleSearch(){this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},handleReset(){this.$refs.searchForm.resetFields(),this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},changeSort(e){this.searchForm.sort=e.key,this.searchForm.order=e.order,"normal"===e.order&&(this.searchForm.order=""),this.getDataList()},clearSelectAll(){this.$refs.table.selectAll(!1)},changeSelect(e){this.selectList=e,this.selectCount=e.length},getDataList(){this.loading=!0,(0,r.dX)(this.searchForm).then((e=>{this.loading=!1,e.success&&(this.data=e.result.records,this.total=e.result.total)}))},add(){this.currView="add"},edit(e){for(let a in e)null==e[a]&&(e[a]="");let t=JSON.stringify(e),s=JSON.parse(t);this.formData=s,this.currView="edit"},remove(e){this.$Modal.confirm({title:"确认删除",content:"您确认要删除  ?",loading:!0,onOk:()=>{(0,r.SW)({ids:e.id}).then((e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.getDataList())}))}})},delAll(){this.selectCount<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",loading:!0,onOk:()=>{let e="";this.selectList.forEach((function(t){e+=t.id+","})),e=e.substring(0,e.length-1),(0,r.SW)({ids:e}).then((e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.clearSelectAll(),this.getDataList())}))}})}},mounted(){this.init(),this.tableHeight=Number(window.innerHeight-273),this.mycolumns=this.columns;let e=[];for(var t=0;t<this.selected.length;t++)for(var s=this.selected[t],a=0;a<this.columns.length;a++)this.columns[a].title==s&&e.push(this.columns[a]);this.columns=e},watch:{selected:function(e){let t=[];for(var s=0;s<this.mycolumns.length;s++){var a=this.mycolumns[s];(void 0==a.title||e.includes(a.title))&&t.push(a)}this.columns=t}}},n=c;var m=s(1001),d=(0,m.Z)(n,a,i,!1,null,null,null);const h=d.exports},5058:(e,t,s)=>{s.d(t,{Hc:()=>r,SW:()=>o,TG:()=>l,dX:()=>i,lE:()=>c,mG:()=>n});var a=s(7184);const i=e=>(0,a.A_)("/icCard/getByPage",e),r=e=>(0,a.j0)("/icCard/insert",e),l=e=>(0,a.j0)("/icCard/update",e),o=e=>(0,a.j0)("/icCard/delByIds",e),c=e=>(0,a.A_)("/superUser/getUserList",e),n=e=>(0,a.j0)("/icCard/recharge",e)}}]);