(function(e){function t(t){for(var n,i,l=t[0],s=t[1],c=t[2],d=0,m=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==o[s]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},o={app:0},r=[];function i(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8c6a3598"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=n);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(e);var c=new Error;r=function(t){s.onerror=s.onload=null,clearTimeout(d);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",c.name="ChunkLoadError",c.type=n,c.request=r,a[1](c)}o[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[e._v("Latest Release")]),a("v-icon",[e._v("mdi-open-in-new")])],1)],1),a("v-content",[a("Cliente")],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[e._v("Cadastro de Clientes")]),a("v-spacer"),a("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:function(t){return e.newCliente()}}},[e._v("Novo Cliente")])],1),a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,"items-per-page":5},scopedSlots:e._u([{key:"item.actions",fn:function(t){var n=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editCliente(n)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{title:"Deletar",small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v(" mdi-delete ")])]}}])})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"700px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({attrs:{color:"primary",dark:""}},n),[e._v("Open Dialog")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"10"}},[a("v-text-field",{attrs:{label:"Nome",required:""},model:{value:e.editedItem.nome,callback:function(t){e.$set(e.editedItem,"nome",t)},expression:"editedItem.nome"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"CPF*",required:""},model:{value:e.editedItem.cpf,callback:function(t){e.$set(e.editedItem,"cpf",t)},expression:"editedItem.cpf"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Email"},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Endereço*",required:""},model:{value:e.editedItem.endereco,callback:function(t){e.$set(e.editedItem,"endereco",t)},expression:"editedItem.endereco"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Cidade*",required:""},model:{value:e.editedItem.cidade,callback:function(t){e.$set(e.editedItem,"cidade",t)},expression:"editedItem.cidade"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Bairro*",required:""},model:{value:e.editedItem.bairro,callback:function(t){e.$set(e.editedItem,"bairro",t)},expression:"editedItem.bairro"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Telefone1"},model:{value:e.editedItem.telefone1,callback:function(t){e.$set(e.editedItem,"telefone1",t)},expression:"editedItem.telefone1"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Telefone2"},model:{value:e.editedItem.telefone2,callback:function(t){e.$set(e.editedItem,"telefone2",t)},expression:"editedItem.telefone2"}})],1)],1)],1),a("small",[e._v('Campos indicados com "*" são Obrigatórios')])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("Cancelar")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.saveCliente()}}},[e._v("Salvar")])],1)],1)],1)],1)],1)},l=[],s=a("bc3a"),c=a.n(s),d={name:"HelloWorld",data:()=>({dialog:!1,editedIndex:-1,backend:"https://whiteeletronica.herokuapp.com",headers:[{text:"id",align:"start",sortable:!1,value:"id"},{text:"nome",value:"nome"},{text:"cpf",value:"cpf"},{text:"Actions",value:"actions",sortable:!1}],items:[],editedItem:{id:"",nome:"",cpf:"",endereco:"",cidade:"",bairro:"",telefone1:"",telefone2:"",email:""}}),mounted(){this.getData()},computed:{formTitle(){return-1===this.editedIndex?"Novo Cliente":"Editar Cliente"}},methods:{deleteItem(e){console.log(e),c.a.delete(this.backend+"/clientedelete/",{data:{id:e.id}}).then(e=>{alert("Eliminado com sucesso!"),this.getData()}).catch(e=>{console.error(e),alert("Erro ao Eliminar!")})},newCliente(){this.editedIndex=-1,this.dialog=!0},saveCliente(){-1==this.editedIndex?c.a.post(this.backend+"/clientecreate/",this.editedItem).then(e=>{this.getData(),alert("Inserido com sucesso!"),this.dialog=!1}).catch(e=>{console.error(e),alert("Erro ao Inserir!"),this.dialog=!1}):this.updateCliente()},updateCliente(){c.a.put(this.backend+"/clienteupdate/"+this.editedItem.id+"/",this.editedItem).then(e=>{this.getData(),this.dialog=!1,alert("Atualizado com sucesso!")}).catch(e=>{console.error(e),alert("Erro ao atualizar!")})},editCliente(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},getData(){c.a.defaults.headers.common["Access-Control-Allow-Origin"]="*",c.a.get(this.backend+"/cliente/").then(e=>{console.log(e.data),this.items=e.data})}}},u=d,m=a("2877"),f=a("6544"),p=a.n(f),v=a("8336"),h=a("b0af"),b=a("99d9"),g=a("62ad"),x=a("a523"),C=a("8fea"),I=a("169a"),k=a("132d"),y=a("0fd9"),w=a("2fa4"),_=a("8654"),V=a("71d9"),j=a("2a7f"),O=Object(m["a"])(u,i,l,!1,null,null,null),T=O.exports;p()(O,{VBtn:v["a"],VCard:h["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VCol:g["a"],VContainer:x["a"],VDataTable:C["a"],VDialog:I["a"],VIcon:k["a"],VRow:y["a"],VSpacer:w["a"],VTextField:_["a"],VToolbar:V["a"],VToolbarTitle:j["a"]});var E={name:"App",components:{Cliente:T},data:()=>({})},$=E,S=a("7496"),A=a("40dc"),P=a("a75b"),D=a("adda"),q=Object(m["a"])($,o,r,!1,null,null,null),B=q.exports;p()(q,{VApp:S["a"],VAppBar:A["a"],VBtn:v["a"],VContent:P["a"],VIcon:k["a"],VImg:D["a"],VSpacer:w["a"]});var L=a("8c4f"),M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("Cliente")],1)},N=[],H={name:"Home",components:{Cliente:T}},z=H,F=Object(m["a"])(z,M,N,!1,null,null,null),J=F.exports;n["a"].use(L["a"]);const R=[{path:"/",name:"Home",component:J},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],W=new L["a"]({routes:R});var G=W,K=a("2f62");n["a"].use(K["a"]);var Q=new K["a"].Store({state:{},mutations:{},actions:{},modules:{}}),U=a("f309");n["a"].use(U["a"]);var X=new U["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:G,store:Q,vuetify:X,render:function(e){return e(B)}}).$mount("#app")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.1874fd2b.js.map