webpackJsonp([1],{"+BTi":function(e,t){},"+Rdb":function(e,t){},"4/hK":function(e,t){},"8TV2":function(e,t){e.exports={type:"object",properties:{array:{type:"array",title:"array1","x-schema-form":{startEmpty:!1},items:{type:"object",properties:{a:{title:"item a",type:"string",default:"1"},b:{title:"item b",type:"string"}}}}}}},DZFw:function(e,t){},DnJY:function(e,t){},E0VZ:function(e,t){},GXEp:function(e,t){},HWMT:function(e,t){e.exports={type:"string",title:"字符串",maxLength:5,default:"333"}},I4nB:function(e,t){},Kt62:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),r=n("mvHQ"),i=n.n(r),a=(n("GXEp"),n("+BTi"),n("mtrD")),s=n.n(a),l=(n("I4nB"),n("STLj")),m=n.n(l),c=(n("cDSy"),n("e0Bm")),u=n.n(c),p=n("D1Ni"),f=n.n(p),d=n("E5Az"),h=n.n(d),v=n("kbi+"),y=n.n(v),g=n("TXmL"),b=(n("5IAE"),n("qunJ"),n("vqwl")),x=n.n(b),S=n("woOf"),_=n.n(S),E=n("pFYg"),T=n.n(E),$=n("fZjL"),j=n.n($),M=n("Dd8w"),k=n.n(M),w=n("TcPO"),F=n.n(w),C=n("jNuQ"),A=n.n(C),O=n("NYxO");var V=n("fcsF"),P=n("qrK1");o.default.use(P),o.default.use(O.a);var W=n("wEM1");o.default.use(g.a);var I={name:"Form10",beforeCreate:function(){this.$store=new O.a.Store({state:{model:null,selected:null},mutations:{setModel:function(e,t){var n=t.path,o=t.value;n?P.vuexSet(n,o):e.model=o},setSelected:function(e,t){e.selected=t},VUEX_DEEP_SET:P.VUEX_DEEP_SET}})},provide:function(){return{options:this.sfOptions}},computed:k()({},Object(O.b)(["model"]),{schema:function(){var e=A()(this.sfSchema||{});return function e(t){"object"===t.type&&t.properites?(t.required&&t.required.forEach(function(e){t.properites[e].required=!0}),j()(t.properites).forEach(function(n){e(t.properites[n])})):"array"===t.type&&e(t.items)}(e),e}}),watch:{sfOptions:{immediate:!0,deep:!0,handler:function(e){var t=this;j()(e).forEach(function(n){t.$set(t.options,n,e[n])})}},model:{deep:!0,handler:function(e){this.$emit("input",e)}},sfSchema:{deep:!0,handler:function(){this.uid++}},form:{deep:!0,handler:function(){this.uid++}},value:{immediate:!0,handler:function(e){this.$store.commit("setModel",{value:e})}}},methods:{__validate:function(){},submit:function(){var e=JSON.parse(i()(this.value));e&&"object"===(void 0===e?"undefined":T()(e))?function e(t){j()(t).forEach(function(n){"string"==typeof t[n]?(t[n]=t[n].trim(),t[n]||delete t[n]):t[n]&&"object"===T()(t[n])&&e(t[n])})}(e):"string"==typeof e&&((e=e.trim())||(e=null));var t=function(e,t){var n=F.a.validate(e,t),o=F.a.error,r=void 0;return n||302===o.code&&(r=function(e,t){return"没有填写字段: "+function(e,t){return function e(t,n){return n.length?""===n[0]?e(t,n.slice(1)):e(t.properties[n[0]],n.slice(1)):t}(t,e.dataPath.split("/")).properties[e.params.key]}(e,t).title}(o,t)),r&&(o.message=r),o}(e,this.schema);return t?{error:t}:{value:e}},getAnyTypeCompMap:function(){var e={};return this.options.formats.forEach(function(t){var n=t.name,o=t.component;e["format-"+n]=o}),this.options.types.forEach(function(t){var n=t.type,o=t.component;e["type-"+n]=o}),e},use:function(e){if(e.render){(o=e).mixins?o.mixins.push(W.a):o.mixins=[W.a],o.form10||(o.form10={});var t=(e=o).form10||{};if(t.format){var n=t.format;this.options.formats.push(_()({component:e},n)),n.format instanceof RegExp?this.options.tv4.addFormat(n.name,function(e){return n.format.test(e)?null:"invalid format"}):this.options.tv4.addFormat(n.name,n.format)}t.type&&this.options.types.push({type:t.type,component:e})}var o}},props:["sf-schema","value","sf-form","sf-options","plugins"],beforeMount:function(){var e=this;this.options.tv4=F.a,this.plugins&&(this.plugins.forEach(function(t){e.use(t)}),this.$set(this.options,"compMap",this.getAnyTypeCompMap()))},data:function(){return{rootPath:["model"],uid:0,componentId:"div",compForm:{},options:{formats:[],types:[],$rootParent:this.$parent,$root:this}}},components:{AnyType:V.default,"el-form":x.a}},D={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-form",this._b({staticClass:"vue-form10"},"el-form",this.options.formProps,!1),[t("AnyType",{key:this.uid,attrs:{"parent-path":this.rootPath,parent:"root","sf-schema":this.schema,options:this.options}})],1)},staticRenderFns:[]};var N=n("VU/8")(I,D,!1,function(e){n("E0VZ")},"data-v-0e459267",null).exports,U=n("Gu7T"),R=n.n(U),L=n("Q7hp"),q=n.n(L);function J(e,t){var n=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{left:300},o=arguments[2];if(!t||"object"!==(void 0===t?"undefined":T()(t)))return!0;var r=j()(t);function a(e){return n.left-=e.length,!!(n.left<=0||isNaN(n.left))}if(a(r))return r;for(var s in t)try{var l=e(t[s],n,r);if(r=[].concat(R()(r),R()(l)),a(l))return r}catch(e){return console.log(e,i()(r),t,n.left,o),[]}return r}(e);n.length>190&&console.log(n);try{if(!t.length)return JSON.parse(i()(e))}catch(n){return console.log(n,e,j()(e),t),{}}return e.properties?J(e.properties[t[0]],t.slice(1)):e.items?J(e.items,t.slice(1)):void 0}var B={name:"Editor",methods:{get:q.a,updateEditorSchema:function(){var e=this;if(!this.editingSchema)return null;var t=this.editingSchema.type||this.editingSchema["x-schema-form"].type,n=void 0;if(t&&(n=this.plugins.find(function(n){var o=q()(n,"form10.format.shouldUse");return!(!o||!o(e.editingSchema["x-schema-form"]||{},e.editingSchema))||q()(n,"form10.format.name")===t})),n||(n=this.plugins.find(function(t){return q()(t,"form10.type")===e.editingSchema.type})),i()(this.value)===i()(this.preValue)&&this.targetPlugin===n)return this.preSchema;this.targetPlugin=n,this.preValue=this.value,this.editorSchema={type:"object",properties:{title:{type:"string",title:"标题"},type:{type:"string",title:"类型","x-schema-form":{titleMap:["object","array","string","boolean","number"].map(function(t){return{value:t,name:e.$t(t)}})}},format:{type:"string",title:"格式","x-schema-form":{titleMap:this.formats.map(function(e){return e.name}).map(function(t){return{value:t,name:e.$t(t)}})}},description:{type:"string",title:"描述"},"x-schema-form":{type:"object",title:"样式",properties:{placeholder:{title:this.$t("placeholder"),type:this.editingSchema.type,"x-schema-form":{condition:'(model&&(model.type==="string"))'}},startEmpty:{title:"是否一开始一项都没有",type:"boolean","x-schema-form":{condition:'(model&&(model.type==="array"))'}}}}}},this.preSchema=this.editorSchema}},data:function(){return{model:null,form:["*"],options:{},preValue:"",preSchema:null,editorSchema:null,targetPlugin:null}},computed:{editingSchema:function(){return this.path?J(this.value,this.path.slice(1)):null},formats:function(){return this.plugins.filter(function(e){return e.form10.format}).map(function(e){return e.form10.format})}},watch:{value:{immediate:!0,handler:function(e){this.model=e}},model:{handler:function(e){if(this.path){var t=function e(t,n,o){return n.length?(t.properties?t.properties[n[0]]=e(t.properties[n[0]],n.slice(1),o):t.items&&(t.items=e(t.items,n.slice(1),o)),t):o}(this.value,this.path.slice(1),e);this.$emit("input",t),this.updateEditorSchema()}}},path:{immediate:!0,handler:function(e){e&&(this.model=this.editingSchema),this.updateEditorSchema()}}},props:["value","path","plugins"],components:{Form10:N}},H={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.editorSchema&&e.path?n("div",[n("Form10",{key:e.path.toString(),attrs:{"sf-schema":e.editorSchema,"sf-form":e.form,"sf-options":e.options,plugins:e.plugins},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1):e._e()},staticRenderFns:[]},X=n("VU/8")(B,H,!1,null,null,null).exports,Z=(n("isgN"),n("tLa+")),z={name:"TimestampType",form10:{format:{name:"timestamp",format:/^\d{13}$/}},components:{"el-date-picker":n.n(Z).a}},Y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TypeWrapper",{ref:"typeWrapper",attrs:{form:e.form}},[n("div",{attrs:{slot:"input"},slot:"input"},[n("el-date-picker",{attrs:{disabled:e.form.readonly,type:"datetime",placeholder:e.form.placeholder,"value-format":"timestamp"},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)])},staticRenderFns:[]},Q=n("VU/8")(z,Y,!1,null,null,null).exports,G={name:"EnumType",form10:{format:{name:"select",format:"",shouldUse:function(e,t){return e.titleMap||t.enum}}},computed:{titleMap:function(){var e=[];if(this.form.titleMap){var t=this.form.titleMap;Array.isArray(t)?e=t:"object"===(void 0===t?"undefined":T()(t))?e=j()(t).map(function(e){return{value:e,name:t[e]}}):console.warn("invalid titleMap:",this.form.titleMap)}else this.form.schema.enum&&(e=this.form.schema.enum.map(function(e){return{value:e,name:e}}));return e}},components:{"el-select":u.a,"el-option":m.a}},K={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TypeWrapper",{ref:"typeWrapper",attrs:{form:e.form}},[n("el-select",{attrs:{slot:"input",placeholder:e.form.placeholder,disabled:e.form.readonly},slot:"input",model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},e._l(e.titleMap,function(e,t){return n("el-option",{key:t,attrs:{label:e.name,value:e.value}})}))],1)},staticRenderFns:[]};var ee=n("VU/8")(G,K,!1,function(e){n("Kt62")},"data-v-35fbf390",null).exports,te=n("DAYN"),ne={};var oe={name:"ArrayType",form10:{type:"array"},beforeCreate:function(){this.$options.components.AnyType=n("fcsF").default},props:[],data:function(){return{}},mounted:function(){this.model&&this.model.length||!1===this.form.startEmpty&&this.addItem()},methods:{addItem:function(){var e=function e(t,n){if(!t)return t;if(t.default)return t.default;if("object"===t.type){var o={};return t.properties?(j()(t.properties).forEach(function(n){var r=e(t.properties[n]);r!==ne&&(o[n]=r)}),j()(o).length?o:{}):{}}return n?void 0:ne}(this.form.schema.items),t=this.model;Array.isArray(t)||(t=[]),t.push(e),this.model=t},deleteItem:function(e){this.model.splice(e,1)}},components:{draggable:n.n(te).a,"el-button":s.a}},re={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TypeWrapper",{ref:"typeWrapper",attrs:{form:e.form}},[n("div",{staticClass:"array-wrap",attrs:{slot:"input"},slot:"input"},[e.model&&e.model.length?n("draggable",{staticClass:"list-group",attrs:{element:"ol",list:e.model,options:{animation:150,handle:".sort-handle"}}},e._l(e.model,function(t,o){return n("li",{key:o,staticClass:"list-group-item"},[n("AnyType",{attrs:{options:e.options,"sf-schema":e.form.schema.items,"parent-path":e.path,parent:"array",name:o,"is-last":o===e.model.length-1}}),e._v(" "),n("i",{staticClass:"el-icon-sort sort-handle",attrs:{title:"drag to sort (index:"+o+")"}}),e._v(" "),n("i",{staticClass:"el-icon-delete delete-btn",attrs:{title:"delete"},on:{click:function(t){e.deleteItem(o)}}})],1)})):e._e(),e._v(" "),n("el-button",{staticClass:"add-btn",attrs:{type:"default"},on:{click:e.addItem}},[n("i",{staticClass:"el-icon-plus"}),e._v(" Add")])],1)])},staticRenderFns:[]};var ie=n("VU/8")(oe,re,!1,function(e){n("XwIG")},"data-v-131d7aab",null).exports,ae=(n("WzZF"),n("wxbk")),se={name:"BooleanType",form10:{type:"boolean"},components:{"el-switch":n.n(ae).a}},le={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TypeWrapper",{ref:"typeWrapper",attrs:{form:e.form,"hide-title":""}},[n("template",{slot:"input"},[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#aaaaaa","active-text":e.form.notitle?"":e.form.title,disabled:e.form.readonly},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],2)},staticRenderFns:[]},me=n("VU/8")(se,le,!1,null,null,null).exports,ce=(n("Zki6"),n("0kY3")),ue={name:"NumberType",form10:{type:"number"},components:{"el-input-number":n.n(ce).a}},pe={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TypeWrapper",{ref:"typeWrapper",attrs:{form:e.form}},[n("div",{staticStyle:{width:"100%"},attrs:{slot:"input"},slot:"input"},[n("el-input-number",{attrs:{disabled:e.form.readonly,min:void 0===e.form.minimum?-1/0:e.form.minimum,max:void 0===e.form.maximum?1/0:e.form.maximum},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)])},staticRenderFns:[]},fe=n("VU/8")(ue,pe,!1,null,null,null).exports,de={name:"ObjectType",form10:{type:"object"},beforeCreate:function(){this.$options.components.AnyType=n("fcsF").default},methods:{remove:function(e,t){delete e[t]}},beforeMount:function(){this.model&&"object"===T()(this.model)||(this.model={})},computed:{keys:function(){return this.form.schema.properties?j()(this.form.schema.properties):[]}}},he={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TypeWrapper",{ref:"typeWrapper",attrs:{form:e.form,"hide-title":!0}},[n("div",{attrs:{slot:"input"},slot:"input"},[void 0!==e.name&&null!==e.name&&"array"!==e.parent?n("fieldset",[n("legend",[e._v(e._s(e.form.title))]),e._v(" "),e._l(e.keys,function(t,o){return n("AnyType",{key:t,attrs:{options:e.options,"parent-path":e.path,name:t,"sf-schema":e.form.schema.properties[t],"is-last":o===e.keys.length-1,parent:"object"},on:{remove:function(n){e.remove(e.model,t)}}})})],2):e._l(e.keys,function(t,o){return n("AnyType",{key:t,attrs:{"parent-path":e.path,options:e.options,name:t,"sf-schema":e.form.schema.properties[t],"is-last":o===e.keys.length-1,parent:"object"},on:{remove:function(n){e.remove(e.model,t)}}})})],2)])},staticRenderFns:[]};var ve=n("VU/8")(de,he,!1,function(e){n("POQb")},"data-v-c573cd46",null).exports,ye=(n("X+ky"),n("HJMx")),ge={name:"StringType",form10:{type:"string",form:{placeholder:{title:"placeholder",type:"string"}}},components:{"el-input":n.n(ye).a}},be={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TypeWrapper",{ref:"typeWrapper",attrs:{form:e.form}},[n("el-input",{attrs:{slot:"input",type:"textarea"===e.type?"textarea":"text",placeholder:e.form.placeholder,disabled:e.form.readonly},slot:"input",model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)},staticRenderFns:[]};var xe=n("VU/8")(ge,be,!1,function(e){n("DnJY")},"data-v-032eaa26",null).exports;n("4/hK");o.default.use(h.a),o.default.component(u.a.name,u.a),o.default.component(m.a.name,m.a),o.default.component(s.a.name,s.a);var Se=localStorage.getItem("vue-form10-json")||"";o.default.use(g.a);var _e={name:"Home",i18n:{locale:"zh",silentTranslationWarn:!0,messages:{zh:{placeholder:"占位内容",string:"字符串",array:"数组",object:"对象",number:"数字",boolean:"布尔变量",timestamp:"时间戳",select:"下拉框"}}},computed:{showForm10:function(){return!window.angular}},methods:{submit:function(){console.log(this.$refs.form10.submit())},onSelect:function(e){this.selectingPath=e,console.log("onselect",e)},timeoutSetSchema:function(e){var t=this;clearTimeout(this.setSchemaTimeout),this.setSchemaTimeout=setTimeout(function(){t.schema=e,localStorage.setItem("vue-form10-json",f.a.stringify(e,!1,4))},500)}},beforeDestroy:function(){clearTimeout(this.setSchemaTimeout)},mounted:function(){var e,t=(e=n("wyA1")).keys().map(function(t){return{value:e(t),name:t.match(/([^/\\]+)\.json5$/)[1]}});this.examples=t,this.code||(this.selectingExample=this.examples[0].name)},watch:{model:{handler:function(){},deep:!0},code:{immediate:!0,handler:function(e,t){if(!t){var n=void 0;try{n=f.a.parse(e),this.timeoutSetSchema(n),this.errMsg&&(this.errMsg="")}catch(e){n=null,this.errMsg=e.message}}}},schema:{deep:!0,handler:function(e){this.code=f.a.stringify(e,!1,4),this.model=null}},selectingExample:function(e){this.model=null,this.code=f.a.stringify(y()(this.examples,{name:e}).value,!1,4)}},data:function(){return{plugins:[Q,ee,ie,me,fe,ve,xe],selectingPath:null,selectingExample:null,examples:[],setSchemaTimeout:0,errMsg:"",code:Se,cmOptions:{lineWrapping:!0,tabSize:4,mode:"text/javascript",lineNumbers:!0,line:!0},schema:null,model:JSON.parse(i()(null)),form:null,options:{mode:"editor"}}},components:{Form10:N,Editor:X}},Ee={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[e.showForm10?n("div",{staticClass:"left",style:{padding:e.showForm10?"10px":""}},[n("label",[e._v("schema")]),e._v(" "),n("el-select",{attrs:{placeholder:"select an example"},model:{value:e.selectingExample,callback:function(t){e.selectingExample=t},expression:"selectingExample"}},e._l(e.examples,function(e){return n("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),e._v(" "),n("Editor",{staticStyle:{"margin-bottom":"30px"},attrs:{path:e.selectingPath,plugins:e.plugins},model:{value:e.schema,callback:function(t){e.schema=t},expression:"schema"}}),e._v(" "),n("codemirror",{staticStyle:{height:"50vh"},attrs:{options:e.cmOptions},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),e._v(" "),e.errMsg?n("pre",{staticClass:"err-msg"},[e._v(e._s(e.errMsg))]):e._e(),e._v(" "),n("br"),e._v(" "),n("label",[e._v("model")]),e._v(" "),n("pre",[e._v(e._s(JSON.stringify(e.model,!1,4)))])],1):e._e(),e._v(" "),e.showForm10?n("div",{staticClass:"right"},[n("Form10",{ref:"form10",attrs:{"sf-schema":e.schema,"sf-form":e.form,"sf-options":e.options,plugins:e.plugins},on:{select:e.onSelect},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),n("el-button",{on:{click:e.submit}},[e._v(e._s(e.$t("Submit")))])],1):e._e()])},staticRenderFns:[]};var Te={name:"App",components:{Home:n("VU/8")(_e,Ee,!1,function(e){n("aDCo")},"data-v-78ae38f4",null).exports}},$e={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Home")],1)},staticRenderFns:[]};var je=n("VU/8")(Te,$e,!1,function(e){n("RpkB")},null,null).exports;o.default.config.productionTip=!1,new o.default({el:"#app",components:{App:je},template:"<App/>"})},POQb:function(e,t){},RpkB:function(e,t){},SXpD:function(e,t){},StS2:function(e,t){},WzZF:function(e,t){},"X+ky":function(e,t){},XwIG:function(e,t){},Zki6:function(e,t){},aDCo:function(e,t){},cDSy:function(e,t){},fcsF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("fZjL"),r=n.n(o),i=n("woOf"),a=n.n(i),s=n("Dd8w"),l=n.n(s),m=n("NYxO"),c=n("hygk"),u=n.n(c),p=n("wEM1"),f={name:"AnyType",methods:{isEqual:u.a,onClick:function(){"editor"!==this.options.mode||u()(this.selected,this.path)||(this.$store.commit("setSelected",this.path),this.options.$root.$emit("select",this.path))},remove:function(e){switch(e){case"retain":break;case"null":this.model=null;break;case"empty":switch(this.form.schema.type){case"string":this.model="";break;case"object":this.model={};break;case"array":this.model=[]}case"remove":this.model=void 0,this.$emit("remove");break;default:console.warn("invalid destroyStrategy:",e)}}},watch:{condition:function(e,t){if(!0===t&&!1===e){var n=void 0;n=this.form.destroyStrategy?this.form.destroyStrategy:"remove",this.remove(n)}}},computed:l()({},Object(m.b)({rootModel:function(e){return e.model}}),Object(m.b)(["selected"]),{form:function(){var e=Object(p.b)(this.name,this.sfSchema);return e.schema.format&&(e.type=e.schema.format),this.sfSchema["x-schema-form"]&&a()(e,this.sfSchema["x-schema-form"]),e},model:{set:function(e){this.$emit("update:sfModel",e)},get:function(){return this.sfModel}},componentId:function(){var e=this,t=this.form;if(!this.sfSchema||!r()(this.sfSchema).length)return null;var n=void 0;if(n=this.options.formats.find(function(t){var n=t.shouldUse;return!(!n||!n(e.form,e.form.schema))}))return"format-"+n.name;if(t.type){if(n=this.options.formats.find(function(n){var o=n.name,r=n.shouldUse;return!(!r||!r(e.form,e.form.schema))||o===t.type}))return"format-"+n.name;console.error("unknown format ",this.sfSchema,t.type,this)}return t.schema.type||console.error("schema needs type",t),"type-"+t.schema.type},condition:function(){var e=void 0;if(this.form.condition)try{e=new Function("model","return "+this.form.condition+";")(this.rootModel)}catch(t){e=!1}else e=!0;return e},path:function(){return"root"===this.parent?this.parentPath.concat([]):this.parentPath.concat([this.name])}}),beforeMount:function(){a()(this.$options.components,this.options.compMap)},props:["sf-model","sf-schema","options","name","parent","is-last","parent-path"],data:function(){return{}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap",class:{selected:e.isEqual(e.selected,e.path)},on:{click:function(t){return t.stopPropagation(),e.onClick(t)}}},[e.condition?n(e.componentId,{tag:"component",attrs:{"sf-schema":e.sfSchema,"sf-model":e.model,parent:e.parent,path:e.path,options:e.options,name:e.name,"is-last":e.isLast},on:{"update:sfModel":function(t){e.model=t}}}):e._e()],1)},staticRenderFns:[]};var h=n("VU/8")(f,d,!1,function(e){n("SXpD")},"data-v-391255cc",null);t.default=h.exports},isgN:function(e,t){},lSJM:function(e,t){e.exports={type:"object",properties:{obj:{type:"object",title:"obj",properties:{a:{type:"string"},b:{type:"number"}}}}}},qunJ:function(e,t){},tznM:function(e,t){e.exports={type:"object",required:["string"],properties:{string:{type:"string",title:"字符串",maxLength:5,default:"333","x-schema-form":{disableSuccessState:!0,placeholder:"string哦",validationMessage:{maxLength:'{{title}}"{{value}}"太长了,最长{{schema.maxLength}}个字',minLength:"太短了"}}},array:{type:"array",title:"array1",items:{title:"item",type:"string",default:"b","x-schema-form":{htmlClass:"items"}}},array2:{type:"array",title:"array1","x-schema-form":{startEmpty:!1},items:{type:"object",properties:{a:{title:"itema",type:"string",default:"1"},b:{title:"itemb",type:"string"}}}},readonly:{type:"string",title:"字符串",description:"readonly","x-schema-form":{readonly:!0}},boolean:{type:"boolean",title:"测试boolean","x-schema-form":{destroyStrategy:"empty",condition:"model.number>10"}},number:{type:"number",title:"测试number",maximum:3},enum:{type:"string",title:"测试enum","x-schema-form":{titleMap:[{value:"Andersson",name:"Andersson"},{value:"Johansson",name:"Johansson"},{value:"1112223334445",name:"The right one"}],placeholder:"enum哦"}},time:{type:"number",title:"测试时间戳",format:"timestamp"},money:{type:"number",title:"测试money"},obj:{type:"object",title:"obj",properties:{a:{type:"string"},b:{type:"number"}}}}}},ubTu:function(e,t){e.exports={type:"object",properties:{enum1:{type:"string",title:"测试enum",enum:["A","B","C"],placeholder:"enum哦"},enum2:{type:"string",title:"测试enum","x-schema-form":{titleMap:[{value:"value1",name:"name1"},{value:"value2",name:"name2"},{value:"another value",name:"the last name"}],placeholder:"enum哦"}}}}},wEM1:function(e,t,n){"use strict";var o=n("Dd8w"),r=n.n(o),i=n("pFYg"),a=n.n(i),s=n("mvHQ"),l=n.n(s),m=n("woOf"),c=n.n(m),u=n("Gu7T"),p=n.n(u),f=n("fZjL"),d=n.n(f),h=n("Q7hp"),v=n.n(h),y=n("nHsE"),g=n.n(y),b=n("NYxO"),x=(n("+Rdb"),n("+BTi"),n("Mezo")),S={name:"TypeWrapper",mixins:[],mounted:function(){},props:{form:{},options:{},"hide-title":{type:Boolean}},computed:{marginBottom:function(){return this.$parent.isLast?0:"object"===this.$parent.parent||"array"===this.$parent.parent?"15px":"0"}},data:function(){return{}},components:{"el-form-item":n.n(x).a}},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form-item",{ref:"formItem",class:[e.form.htmlClass],style:{marginBottom:e.marginBottom},attrs:{label:e.hideTitle||e.form.notitle?"":e.$t(e.form.title),required:e.form.required}},[n("div",{staticStyle:{clear:"both"}},[e._t("input")],2),e._v(" "),e.form.description?n("span",{staticClass:"form10-description"},[e._v("\n        "+e._s(e.form.description)+"\n    ")]):e._e()])},staticRenderFns:[]};var E=n("VU/8")(S,_,!1,function(e){n("StS2"),n("DZFw")},"data-v-7e5b53ae",null).exports;function T(e,t,n){var o=(n=n||{}).global&&n.global.formDefaults?c()({},n.global.formDefaults):{};return t?(n.global&&!0===n.global.supressPropertyTitles?o.title=t.title:o.title=t.title||e,t.description&&(o.description=t.description),!0!==n.required&&!0!==t.required||(o.required=!0),t.maxLength&&(o.maxlength=t.maxLength),t.minLength&&(o.minlength=t.minLength),(t.readOnly||t.readonly)&&(o.readonly=!0),t.minimum&&(o.minimum=t.minimum+(t.exclusiveMinimum?1:0)),t.maximum&&(o.maximum=t.maximum-(t.exclusiveMaximum?1:0)),o.schema=t,o):o}t.b=T;t.a={methods:{interpolate:function(e,t){return"function"==typeof e?e(t):e?e.replace(/{{([\s\S]*?)}}/g,function(e,n){return""+v()(t,n)}):""}},watch:{model:{immediate:!0,handler:function(e,t){var n=this;if(e!==t){if(this.form.onChange){var o=this.form.onChange;"function"==typeof o?o(e,this.form):"string"==typeof o&&(r=o,i=c()(this.options.$rootParent,{modelValue:this.modelValue,form:this.form}),s=d()(i),(new(Function.prototype.bind.apply(Function,[null].concat(p()(s),[r])))).apply(void 0,p()(s.map(function(e){return i[e]}))))}var r,i,s;if(this.form.copyValueTo&&this.form.copyValueTo.forEach(function(t){n.$vuexSet(["model"].concat(p()(g()(t))).slice(),e)}),"object"!==this.type&&"array"!==this.type){var m=JSON.parse(l()(this.form.schema));this.form.type&&(m.format=this.form.type);var u=void 0,f=void 0===e||null===e;if(f)u=!0;else{var h=this.options.tv4.validate(e,m);u=h}var v=this.options.tv4.error;this.$nextTick(function(){var e=void 0,t=void 0;if(u)f?e=null:(e="success",t="");else{e="error",t=v.message;var o=v.schemaPath.slice(1),r=n.form.validationMessage,i="";if(r){var s={error:v,title:n.form.schema.title,value:n.model,valueValue:n.model,form:n.form,schema:n.form.schema};"object"===(void 0===r?"undefined":a()(r))&&r[o]?i=r[o]:"function"==typeof r&&(i=r),i&&(t=n.interpolate(i,s))}}n.form.disableErrorState&&"error"===e&&(e=null),n.form.disableSuccessState&&"success"===e&&(e=null);var l=n.$refs.typeWrapper;l&&("error"===e?(l.$refs.formItem.validateMessage=t,l.$refs.formItem.validateState="error"):"success"===e?(l.$refs.formItem.validateMessage="",l.$refs.formItem.validateState="success"):(l.$refs.formItem.validateMessage="",l.$refs.formItem.validateState="")),n.$validationState=e})}}}}},computed:r()({},Object(b.b)({rootModel:function(e){return e.model}}),{type:function(){return this.form.type||this.form.schema.type},modelValue:function(){return this.model},model:{set:function(e){this.$vuexSet(this.path.slice(),e)},get:function(){return v()(this.$store.state,this.path)}},form:function(){var e=T(this.name,this.sfSchema);return e.schema.format&&(e.type=e.schema.format),this.sfSchema["x-schema-form"]&&c()(e,this.sfSchema["x-schema-form"]),e}}),mounted:function(){this.sfSchema.default&&void 0===this.model&&(this.model=this.sfSchema.default)},data:function(){return{$validateState:null,$errorMessage:"a"}},props:["sf-schema","options","name","parent","is-last","path"],components:{TypeWrapper:E}}},wyA1:function(e,t,n){var o={"./array.json5":"8TV2","./complicated.json5":"tznM","./enum.json5":"ubTu","./object.json5":"lSJM","./string.json5":"HWMT"};function r(e){return n(i(e))}function i(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id="wyA1"}},["NHnr"]);
//# sourceMappingURL=app.760c4bf53735a7195bb0.js.map