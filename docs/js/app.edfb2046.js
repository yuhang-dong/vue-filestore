(function(e){function t(t){for(var a,s,l=t[0],i=t[1],c=t[2],f=0,d=[];f<l.length;f++)s=l[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,l=1;l<r.length;l++){var i=r[l];0!==o[i]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},o={app:0},n=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("85ec"),o=r.n(a);o.a},"0a30":function(e,t,r){"use strict";var a=r("5dc7"),o=r.n(a);o.a},"1e3b":function(e,t,r){"use strict";var a=r("b3f8"),o=r.n(a);o.a},"245a":function(e,t,r){const a=r("96eb"),o=a.Random;a.mock("/login",/post/i,(function(e){let t=JSON.parse(e.body);return"admin"==t.username&&"123"==t.password?{status:!0}:{status:!1,reason:"密码错误"}})),a.mock("/files",/post/i,(function(e){let t=o.integer(3,10),r=[];for(i=0;i<t;i++)r.push({name:o.cname(),date:o.date(),size:o.float(0,15682),self:!0,public:!0,anoymous:!0});let a="README.md",n=o.paragraph();return{status:!0,directory:r,fileContent:n,fileName:a}}))},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},n=[],s={},l=s,i=(r("034f"),r("2877")),c=Object(i["a"])(l,o,n,!1,null,null,null),u=c.exports,f=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticClass:"min-percent"},[r("el-header",{staticClass:"header"},[r("el-row",{staticStyle:{height:"100%",display:"flex","align-items":"center"}},[r("el-col",{attrs:{span:18,offset:3}},[r("i",{staticClass:"head_title"},[e._v("Vue And Go File Website")])])],1)],1),r("el-main",{staticClass:"main"},[r("el-row",[r("el-col",{attrs:{span:16,offset:4}},[r("el-card",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.paths,(function(t,a){return r("el-breadcrumb-item",{attrs:{to:t.completeUrl}},[e._v(e._s(t.path)+" ")])})),1)],1),r("el-card",[r("el-row",[r("el-col",{attrs:{span:1}},[r("UploadButton")],1),r("el-col",{attrs:{span:1}},[r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:e.hidden}},[r("i",{staticClass:"far",class:e.eyeClass})])],1)],1)],1),r("Directory",{staticStyle:{"margin-bottom":"50px"},attrs:{myfiles:e.directory.data},on:{refresh:e.refresh}}),r("File",{attrs:{fileName:e.fileName,fileContent:e.fileContent}})],1)],1)],1),r("iframe",{attrs:{src:"https://zhanyuzhang.github.io/lovely-cat/cat.html",border:"0",id:"catIframe"}}),r("el-footer",{staticClass:"footer"},[r("el-row",{staticStyle:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}},[r("i",{staticStyle:{color:"gray","font-size":"smaller"}},[e._v("Vue And Go File Website.And Others Information hahaha")])])],1)],1)},p=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{attrs:{shadow:"always"}},[r("el-dialog",{attrs:{title:"文件配置",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",[r("el-form-item",{attrs:{label:"是否公开："}},[r("el-radio",{attrs:{label:!0},model:{value:e.config.row.public,callback:function(t){e.$set(e.config.row,"public",t)},expression:"config.row.public"}},[e._v("公开")]),r("el-radio",{attrs:{label:!1},model:{value:e.config.row.public,callback:function(t){e.$set(e.config.row,"public",t)},expression:"config.row.public"}},[e._v("不公开")])],1),r("el-form-item",{attrs:{label:"公开方式："}},[r("el-radio",{attrs:{label:!0},model:{value:e.config.row.anoymous,callback:function(t){e.$set(e.config.row,"anoymous",t)},expression:"config.row.anoymous"}},[e._v("匿名公开")]),r("el-radio",{attrs:{label:!1},model:{value:e.config.row.anoymous,callback:function(t){e.$set(e.config.row,"anoymous",t)},expression:"config.row.anoymous"}},[e._v("实名公开")])],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.updateConfig}},[e._v("确 定")])],1)],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.myfiles}},[r("el-table-column",{attrs:{prop:"name",label:"Name"}}),r("el-table-column",{attrs:{prop:"size",label:"Size"}}),r("el-table-column",{attrs:{prop:"date",label:"ModTime"}}),r("el-table-column",{attrs:{label:"Actions"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("i",{staticClass:"el-icon-download point",on:{click:function(r){return e.download(t.row)}}}),t.row.self?r("i",{staticClass:"el-icon-delete point",on:{click:function(e){return delete t.row}}}):e._e(),t.row.self?r("i",{staticClass:"el-icon-setting point",on:{click:function(r){return e.mconfig(t.row)}}}):e._e(),r("i",{staticClass:"el-icon-info point"})]}}])})],1)],1)},h=[],b={name:"directory",props:["myfiles"],data(){return{dialogVisible:!1,config:{row:{}}}},methods:{download(e){},delete(e){refresh()},mconfig(e){console.log(e),this.config.row=e,this.dialogVisible=!0},refresh(){this.$emit("refresh")},updateConfig(){this.dialogVisible=!1}}},g=b,w=(r("0a30"),Object(i["a"])(g,m,h,!1,null,null,null)),y=w.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{attrs:{shadow:"always"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v(e._s(e.fileName))]),r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[e._v("操作按钮")])],1),r("mavon-editor",{attrs:{value:e.fileContent,editable:!1,toolbarsFlag:!1,subfield:!1,defaultOpen:"preview"}})],1)},_=[],$={name:"file",components:{},data(){return{}},props:["fileName","fileContent"]},x=$,C=Object(i["a"])(x,v,_,!1,null,null,null),j=C.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-upload",{attrs:{action:"这里写地址",multiple:"","show-file-list":!1,"on-success":e.success,"on-error":e.error,"on-progress":e.progress}},[r("el-button",{attrs:{size:"mini",type:"danger"}},[r("i",{staticClass:"el-icon-upload"})])],1)},O=[],S={name:"UploadButton",data(){return{data:{},success:function(e,t,r){},error:function(e,t,r){},progress:function(e,t,r){}}},methods:{}},F=S,E=Object(i["a"])(F,k,O,!1,null,"1fde075c",null),N=E.exports,P={name:"home",components:{Directory:y,File:j,UploadButton:N},data(){return{hiddenFile:!0,directory:{data:[]},fileName:"",fileContent:""}},created(){this.getData(this.$store.state.urls,!1)},computed:{paths(){let e=[],t="";for(let r of this.$store.state.urls.split("/"))t+="/"+r,e.push({path:r,completeUrl:t});return e},eyeClass(){return{"fa-mavon-eye":this.hiddenFile,"fa-mavon-eye-slash":!this.hiddenFile}}},methods:{refresh(){getData(this.$store.state.urls,!1)},hidden(){this.hiddenFile=!this.hiddenFile},getData(e,t){let r=this;this.$ajax.post("/files",{urls:e,showHidden:t}).then((function(e){let t=e.data;t.status?(r.fileName=t.fileName,r.fileContent=t.fileContent,r.directory.data=t.directory):r.$message.error(t.reason)})).catch((function(e){console.log(e)}))}}},z=P,V=(r("1e3b"),Object(i["a"])(z,d,p,!1,null,null,null)),D=V.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticClass:"bg"},[r("el-card",{staticClass:"login"},[r("el-form",{ref:"elform",attrs:{model:e.user,rules:e.rules}},[r("el-form-item",{attrs:{label:"Username",prop:"username"}},[r("el-input",{attrs:{placeholder:"用户名"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),r("el-form-item",{attrs:{label:"Password",prop:"password"}},[r("el-input",{attrs:{placeholder:"密码","show-password":""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("elform")}}},[e._v("立即创建")]),r("el-button",{on:{click:function(t){return e.resetForm("elform")}}},[e._v("重置")])],1)],1)],1)],1)},U=[],A={name:"login",data(){return{user:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入用户名",trigger:"blur"}]}}},methods:{submitForm(e){let t=this;this.$refs[e].validate(e=>{if(!e)return console.log("error submit!!"),!1;t.$ajax.post("/login",{username:t.user.username,password:t.user.password}).then((function(e){e.data.status?(t.$message.success("登录成功"),t.$store.commit("loginSucessful"),t.$router.push("home")):t.$message.error(`${e.data.reason}`)})).catch((function(e){t.$message.warning("内部错误"+e)}))})},resetForm(e){this.$refs[e].resetFields()}}},T=A,q=(r("d6db"),Object(i["a"])(T,M,U,!1,null,null,null)),B=q.exports,J=r("323e"),G=r.n(J),I=r("2f62");a["default"].use(I["a"]);var R=new I["a"].Store({state:{urls:"home",logined:!1},mutations:{loginSucessful(){this.state.logined=!0}},actions:{},modules:{}});a["default"].use(f["a"]);const W=[{path:"/login",name:"login",component:B},{path:"/",name:"home",component:D,alias:"/home"}],H=new f["a"]({routes:W});H.beforeEach((e,t,r)=>{G.a.start(),"login"===e.name||"register"===e.name?r():R.state.logined?r():(r("login"),G.a.done())}),H.afterEach((e,t,r)=>{G.a.done()});var K=H,L=r("5c96"),Q=r.n(L),X=(r("0fae"),r("b2d8")),Y=r.n(X),Z=(r("64e1"),r("bc3a")),ee=r.n(Z),te=(r("245a"),r("a5d8"),r("ecee")),re=r("c074"),ae=r("b702"),oe=r("f2d1"),ne=r("ad3d");te["c"].add(re["a"],ae["a"],oe["a"]),G.a.inc(.2),G.a.configure({easing:"ease",speed:500,showSpinner:!1}),a["default"].prototype.$ajax=ee.a,a["default"].component("font-awesome-icon",ne["a"]),a["default"].component("font-awesome-layers",ne["b"]),a["default"].component("font-awesome-layers-text",ne["c"]),ee.a.interceptors.request.use((function(e){return G.a.start(),e}),(function(e){return Promise.reject(e)})),ee.a.interceptors.response.use((function(e){return G.a.done(),e}),(function(e){return G.a.done(),Promise.reject(e)})),a["default"].use(Y.a),a["default"].config.productionTip=!1,a["default"].use(Q.a),new a["default"]({router:K,store:R,render:function(e){return e(u)}}).$mount("#app")},"5dc7":function(e,t,r){},"85ec":function(e,t,r){},b3f8:function(e,t,r){},d6db:function(e,t,r){"use strict";var a=r("e67a"),o=r.n(a);o.a},e67a:function(e,t,r){}});
//# sourceMappingURL=app.edfb2046.js.map