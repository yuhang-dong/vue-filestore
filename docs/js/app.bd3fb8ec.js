(function(e){function t(t){for(var a,s,i=t[0],l=t[1],c=t[2],f=0,d=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],a=!0,i=1;i<o.length;i++){var l=o[i];0!==n[l]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=o[0]))}return e}var a={},n={app:0},r=[];function s(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=a,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(o,a,function(t){return e[t]}.bind(null,a));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var a=o("85ec"),n=o.n(a);n.a},"03bd":function(e,t,o){"use strict";var a=o("0d0d"),n=o.n(a);n.a},"0d0d":function(e,t,o){},"245a":function(e,t,o){const a=o("96eb"),n=a.Random;a.mock("/login",/post/i,(function(e){let t=JSON.parse(e.body);return"admin"==t.username&&"123"==t.password?{status:!0}:{status:!1,reason:"密码错误"}})),a.mock("/files",/post/i,(function(e){let t=n.integer(3,10),o=[];for(i=0;i<t;i++)o.push({name:n.cname(),date:n.date(),size:n.float(0,15682),self:n.boolean(),public:n.boolean(),anoymous:n.boolean(),id:1234});let a="README.md",r=n.paragraph();return{status:!0,directory:o,fileContent:r,fileName:a}})),a.mock(RegExp("/info.*"),"get",(function(e){return{status:!0,info:{username:n.cname(),uploadtime:n.datetime(),filesize:n.integer(),md5:n.id()}}}))},"56d7":function(e,t,o){"use strict";o.r(t);var a=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},r=[],s={},i=s,l=(o("034f"),o("2877")),c=Object(l["a"])(i,n,r,!1,null,null,null),u=c.exports,f=o("8c4f"),d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-container",{staticClass:"min-percent"},[o("el-header",{staticClass:"header"},[o("el-row",{staticStyle:{height:"100%",display:"flex","align-items":"center"}},[o("el-col",{attrs:{span:9,offset:3}},[o("i",{staticClass:"head_title"},[e._v("Vue And Go File Website")])]),o("el-col",{attrs:{offset:7,span:5}},[o("el-popover",{attrs:{placement:"bottom",width:"200",trigger:"hover"}},[o("div",[o("el-progress",{attrs:{percentage:50}}),o("el-progress",{attrs:{percentage:100,status:"success"}}),o("el-progress",{attrs:{percentage:100,status:"warning"}}),o("el-progress",{attrs:{percentage:50,status:"exception"}})],1),o("el-badge",{staticClass:"point",attrs:{slot:"reference",value:-1,hidden:!1},slot:"reference"},[o("el-avatar",[e._v(" user ")])],1)],1)],1)],1)],1),o("el-main",{staticClass:"main"},[o("el-row",[o("el-col",{attrs:{span:16,offset:4}},[o("el-card",[o("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.paths,(function(t,a){return o("el-breadcrumb-item",{attrs:{to:t.completeUrl}},[e._v(e._s(t.path)+" ")])})),1)],1),o("el-card",[o("el-row",[o("UploadButton",{staticClass:"margin_left"}),o("el-button",{staticClass:"margin_left",attrs:{size:"mini",type:"danger"},on:{click:e.hidden}},[o("i",{staticClass:"far",class:e.eyeClass})])],1)],1),o("Directory",{staticStyle:{"margin-bottom":"50px"},attrs:{myfiles:e.directory.data},on:{refresh:e.refresh}}),o("File",{attrs:{fileName:e.fileName,fileContent:e.fileContent}})],1)],1)],1),o("iframe",{attrs:{src:"https://zhanyuzhang.github.io/lovely-cat/cat.html",border:"0",id:"catIframe"}}),o("el-footer",{staticClass:"footer"},[o("el-row",{staticStyle:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}},[o("i",{staticStyle:{color:"gray","font-size":"smaller"}},[e._v("Vue And Go File Website.And Others Information hahaha")])])],1)],1)},p=[],m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-card",{attrs:{shadow:"always"}},[o("el-dialog",{staticClass:"min_dialog",attrs:{title:"文件配置",visible:e.config.dialogVisible,width:"30%"},on:{"update:visible":function(t){return e.$set(e.config,"dialogVisible",t)}}},[o("el-form",[o("el-form-item",{attrs:{label:"是否公开："}},[o("el-radio",{attrs:{label:!0},model:{value:e.config.row.public,callback:function(t){e.$set(e.config.row,"public",t)},expression:"config.row.public"}},[e._v("公开")]),o("el-radio",{attrs:{label:!1},model:{value:e.config.row.public,callback:function(t){e.$set(e.config.row,"public",t)},expression:"config.row.public"}},[e._v("不公开")])],1),o("el-form-item",{attrs:{label:"公开方式："}},[o("el-radio",{attrs:{label:!0},model:{value:e.config.row.anoymous,callback:function(t){e.$set(e.config.row,"anoymous",t)},expression:"config.row.anoymous"}},[e._v("匿名公开")]),o("el-radio",{attrs:{label:!1},model:{value:e.config.row.anoymous,callback:function(t){e.$set(e.config.row,"anoymous",t)},expression:"config.row.anoymous"}},[e._v("实名公开")])],1)],1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.config.dialogVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.updateConfig}},[e._v("确 定")])],1)],1),o("el-dialog",{staticClass:"min_dialog",attrs:{title:"文件配置",visible:e.info.visible,width:"30%"},on:{"update:visible":function(t){return e.$set(e.info,"visible",t)}}},[o("el-form",{attrs:{"label-width":"80px"}},[o("el-form-item",{attrs:{label:"上传人"}},[o("el-input",{attrs:{readonly:!0},model:{value:e.info.info.username,callback:function(t){e.$set(e.info.info,"username",t)},expression:"info.info.username"}})],1),o("el-form-item",{attrs:{label:"上传时间"}},[o("el-date-picker",{attrs:{readonly:!0,type:"datetime"},model:{value:e.info.info.uploadtime,callback:function(t){e.$set(e.info.info,"uploadtime",t)},expression:"info.info.uploadtime"}})],1),o("el-form-item",{attrs:{label:"文件大小"}},[o("el-input",{attrs:{readonly:!0},model:{value:e.info.info.filesize,callback:function(t){e.$set(e.info.info,"filesize",t)},expression:"info.info.filesize"}},[o("template",{slot:"append"},[e._v("KB")])],2)],1),o("el-form-item",{attrs:{label:"文件md5"}},[o("el-input",{attrs:{readonly:!0},model:{value:e.info.info.md5,callback:function(t){e.$set(e.info.info,"md5",t)},expression:"info.info.md5"}})],1)],1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.info.visible=!1}}},[e._v("确 定")])],1)],1),o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.myfiles}},[o("el-table-column",{attrs:{prop:"name",label:"Name"}}),o("el-table-column",{attrs:{prop:"size",label:"Size"}}),o("el-table-column",{attrs:{prop:"date",label:"ModTime"}}),o("el-table-column",{attrs:{label:"Actions"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("i",{staticClass:"el-icon-download point",on:{click:function(o){return e.download(t.row)}}}),t.row.self?o("i",{staticClass:"el-icon-delete point",on:{click:function(e){return delete t.row}}}):e._e(),t.row.self?o("i",{staticClass:"el-icon-setting point",on:{click:function(o){return e.mconfig(t.row)}}}):e._e(),o("i",{staticClass:"el-icon-info point",on:{click:function(o){return e.showInfo(t.row)}}})]}}])})],1)],1)},g=[],b={name:"directory",props:["myfiles"],data(){return{config:{dialogVisible:!1,row:{}},info:{visible:!1,info:{}}}},methods:{download(e){},delete(e){refresh()},mconfig(e){console.log(e),this.config.row=e,this.config.dialogVisible=!0},refresh(){this.$emit("refresh")},updateConfig(){this.config.dialogVisible=!1},showInfo(e){let t=this;this.$ajax.get(`/info?fileid=${e.id}`).then((function(e){let o=e.data;o.status?(t.info.info=o.info,t.info.visible=!0):t.$message.warning(o.reason)})).catch((function(e){t.$message.warning(e)}))}}},h=b,v=(o("c313"),Object(l["a"])(h,m,g,!1,null,"0386179e",null)),w=v.exports,y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-card",{attrs:{shadow:"always"}},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[e._v(e._s(e.fileName))]),o("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[e._v("操作按钮")])],1),o("mavon-editor",{attrs:{value:e.fileContent,editable:!1,toolbarsFlag:!1,subfield:!1,defaultOpen:"preview"}})],1)},_=[],$={name:"file",components:{},data(){return{}},props:["fileName","fileContent"]},x=$,C=Object(l["a"])(x,y,_,!1,null,null,null),k=C.exports,j=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-upload",{attrs:{action:"这里写地址",multiple:"","show-file-list":!1,"on-success":e.success,"on-error":e.error,"on-progress":e.progress}},[o("el-button",{attrs:{size:"mini",type:"danger"}},[o("i",{staticClass:"el-icon-upload"})])],1)},O=[],S={name:"UploadButton",data(){return{data:{},success:function(e,t,o){},error:function(e,t,o){},progress:function(e,t,o){}}},methods:{}},F=S,z=Object(l["a"])(F,j,O,!1,null,"1fde075c",null),E=z.exports,N={name:"home",components:{Directory:w,File:k,UploadButton:E},data(){return{hiddenFile:!0,directory:{data:[]},fileName:"",fileContent:""}},created(){this.getData(this.$store.state.urls,!1)},computed:{paths(){let e=[],t="";for(let o of this.$store.state.urls.split("/"))t+="/"+o,e.push({path:o,completeUrl:t});return e},eyeClass(){return{"fa-mavon-eye":this.hiddenFile,"fa-mavon-eye-slash":!this.hiddenFile}}},methods:{refresh(){getData(this.$store.state.urls,!1)},hidden(){this.hiddenFile=!this.hiddenFile},getData(e,t){let o=this;this.$ajax.post("/files",{urls:e,showHidden:t}).then((function(e){let t=e.data;t.status?(o.fileName=t.fileName,o.fileContent=t.fileContent,o.directory.data=t.directory):o.$message.error(t.reason)})).catch((function(e){o.$message.warning(e)}))}}},P=N,V=(o("03bd"),Object(l["a"])(P,d,p,!1,null,"14586852",null)),D=V.exports,M=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-container",{staticClass:"bg"},[o("el-card",{staticClass:"login"},[o("el-form",{ref:"elform",attrs:{model:e.user,rules:e.rules}},[o("el-form-item",{attrs:{label:"Username",prop:"username"}},[o("el-input",{attrs:{placeholder:"用户名"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),o("el-form-item",{attrs:{label:"Password",prop:"password"}},[o("el-input",{attrs:{placeholder:"密码","show-password":""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("elform")}}},[e._v("登录")]),o("el-button",{on:{click:function(t){return e.resetForm("elform")}}},[e._v("重置")])],1)],1)],1)],1)},U=[],A={name:"login",data(){return{user:{username:"admin",password:"123"},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入用户名",trigger:"blur"}]}}},methods:{submitForm(e){let t=this;this.$refs[e].validate(e=>{if(!e)return console.log("error submit!!"),!1;t.$ajax.post("/login",{username:t.user.username,password:t.user.password}).then((function(e){e.data.status?(t.$message.success("登录成功"),t.$store.commit("loginSucessful"),t.$router.push("home")):t.$message.error(`${e.data.reason}`)})).catch((function(e){t.$message.warning("内部错误"+e)}))})},resetForm(e){this.$refs[e].resetFields()}}},B=A,I=(o("d6db"),Object(l["a"])(B,M,U,!1,null,null,null)),T=I.exports,q=o("323e"),J=o.n(q),R=o("2f62");a["default"].use(R["a"]);var G=new R["a"].Store({state:{urls:"home",logined:!1},mutations:{loginSucessful(){this.state.logined=!0}},actions:{},modules:{}});a["default"].use(f["a"]);const W=[{path:"/login",name:"login",component:T},{path:"/",name:"home",component:D,alias:"/home"}],H=new f["a"]({routes:W});H.beforeEach((e,t,o)=>{J.a.start(),"login"===e.name||"register"===e.name?o():G.state.logined?o():(o("login"),J.a.done())}),H.afterEach((e,t,o)=>{J.a.done()});var K=H,L=o("5c96"),Q=o.n(L),X=(o("0fae"),o("b2d8")),Y=o.n(X),Z=(o("64e1"),o("bc3a")),ee=o.n(Z),te=(o("245a"),o("a5d8"),o("ecee")),oe=o("c074"),ae=o("b702"),ne=o("f2d1"),re=o("ad3d");te["c"].add(oe["a"],ae["a"],ne["a"]),J.a.inc(.2),J.a.configure({easing:"ease",speed:500,showSpinner:!1}),a["default"].prototype.$ajax=ee.a,a["default"].component("font-awesome-icon",re["a"]),a["default"].component("font-awesome-layers",re["b"]),a["default"].component("font-awesome-layers-text",re["c"]),ee.a.interceptors.request.use((function(e){return J.a.start(),e}),(function(e){return Promise.reject(e)})),ee.a.interceptors.response.use((function(e){return J.a.done(),e}),(function(e){return J.a.done(),Promise.reject(e)})),a["default"].use(Y.a),a["default"].config.productionTip=!1,a["default"].use(Q.a),new a["default"]({router:K,store:G,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,o){},"9a26":function(e,t,o){},c313:function(e,t,o){"use strict";var a=o("9a26"),n=o.n(a);n.a},d6db:function(e,t,o){"use strict";var a=o("e67a"),n=o.n(a);n.a},e67a:function(e,t,o){}});
//# sourceMappingURL=app.bd3fb8ec.js.map