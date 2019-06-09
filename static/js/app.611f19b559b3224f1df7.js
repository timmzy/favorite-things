webpackJsonp([1],{"47cN":function(t,a){},"4zGo":function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),i={name:"App",data:function(){return{auth:!1}},created:function(){this.authenticate()},watch:{$route:function(t,a){this.authenticate()}},methods:{goToLogin:function(){this.$router.push("/login")},authenticate:function(){localStorage.getItem("token")?this.auth=!0:(this.auth=!1,"SignUp"===this.$router.currentRoute.name?this.$router.push("/signup"):this.$router.push("/login"))}}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/",exact:""}},[t._v("Favorite Things")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/","active-class":"active",exact:""}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/category","active-class":"active",exact:""}},[t._v("Category")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/activities","active-class":"active",exact:""}},[t._v("Activities")])],1)]),t._v(" "),e("ul",{staticClass:"navbar-nav pull-right"},[!1===t.auth?e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/login","active-class":"active",exact:""}},[t._v("Login")])],1):t._e(),t._v(" "),!1===t.auth?e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/signup","active-class":"active",exact:""}},[t._v("Sign up")])],1):t._e(),t._v(" "),t.auth?e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/logout","active-class":"active",exact:""}},[t._v("Logout")])],1):t._e()])])],1),t._v(" "),e("div",{staticClass:"container",staticStyle:{"padding-top":"20px"}},[e("router-view")],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}]};var o=e("VU/8")(i,r,!1,function(t){e("4zGo")},null,null).exports,n=e("/ocq"),l=e("//Fk"),c=e.n(l),d=e("mtWM"),u=e.n(d).a.create({baseURL:"http://127.0.0.1:8000/api/v1/",headers:{Accept:"application/json"}});u.interceptors.request.use(function(t){return localStorage.getItem("token")&&(t.headers.authorization="token "+localStorage.getItem("token")),t},function(t){return c.a.reject(t)});var v=u,m={data:function(){return{favoriteList:[],categoryList:[],add:!1,id:"",title:"",description:"",ranking:"",metadata:"",category:"",errorMessage:""}},created:function(){this.loadFavoriteList(),this.loadCategoryList()},methods:{loadFavoriteList:function(){var t=this;v.get("").then(function(a){a.data.map(function(a){return t.favoriteList.push({id:a.id,title:a.title,ranking:a.ranking,description:a.description,category:a.category_name,dateCreated:a.created_date,date_update:a.modified_date})})}).catch(function(a){t.errorMessage="Invalid login. "+a})},loadCategoryList:function(){var t=this;v.get("user-category").then(function(a){t.categoryList=a.data}).catch(function(a){t.errorMessage=a})},doEdit:function(t){this.clear(),this.add=!1;var a=this.favoriteList.filter(function(a){if(a.id===t)return a})[0],e=this.categoryList.filter(function(t){if(t.title===a.category)return t})[0];this.id=a.id,this.title=a.title,this.description=a.description,this.metadata=a.metadata,this.ranking=a.ranking,this.category=e.id},doSave:function(){var t=this,a={id:this.id,title:this.title,description:this.description,category:this.category,metadata:this.metadata,ranking:this.ranking};!1===this.add?v.put("/"+a.id+"/",a).then(function(a){var e=t.$refs.closeBtn;200===a.status&&(t.favoriteList=[],t.loadFavoriteList(),e.click())}).catch(function(a){t.errorMessage=a}):a.title&&a.ranking&&a.category&&(delete a.id,v.post("",a).then(function(a){var e=t.$refs.closeBtn;201===a.status&&(e.click(),t.favoriteList=[],t.loadFavoriteList())}).catch(function(a){t.errorMessage=a}))},doAdd:function(){this.add=!0,this.clear()},clear:function(){this.id="",this.title="",this.description="",this.ranking="",this.category="",this.metadata=""}}},p={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"jumbotron jumbotron-fluid",staticStyle:{padding:"2rem"}},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("a",{staticClass:"btn btn-primary btn-md",attrs:{href:"#",role:"button","data-toggle":"modal","data-target":"#favoriteModal"},on:{click:function(a){return t.doAdd()}}},[e("i",{staticClass:"fa fa-plus"}),t._v(" Add Favourite")])])]),t._v(" "),e("div",{staticClass:"row"},t._l(t.favoriteList,function(a,s){return e("div",{key:s,staticClass:"col-lg-4 card-row"},[e("div",{staticClass:"card",staticStyle:{width:"18rem"}},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(a.title))]),t._v(" "),e("h6",{staticClass:"card-subtitle mb-2 text-muted"},[e("i",{staticClass:"far fa-clock"}),t._v(" "+t._s(a.dateCreated))]),t._v(" "),e("hr"),t._v(" "),e("p",{staticClass:"card-text"},[t._v(t._s(a.description))]),t._v(" "),e("hr"),t._v(" "),e("h6",{staticClass:"card-subtitle mb-2 text-muted"},[e("i",{staticClass:"far fa-folder-open"}),t._v(" "+t._s(a.category))]),t._v(" "),e("button",{staticClass:"btn btn-primary card-link",attrs:{href:"#","data-toggle":"modal","data-target":"#favoriteModal"},on:{click:function(e){return t.doEdit(a.id)}}},[t._v("Edit")])]),t._v(" "),e("div",{staticClass:"card-footer text-muted"},[t._v("\n          Ranking "),e("i",{staticClass:"fa fa-sort-up"}),t._v(" "+t._s(a.ranking)+" Updated "),e("i",{staticClass:"fa fa-clock-o"},[t._v(" "+t._s(a.modified_date))])])])])}),0),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"favoriteModal",tabindex:"-1",role:"dialog","aria-labelledby":"favoriteModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(t._s(t.title))]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("Title")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"Enter title",required:""},domProps:{value:t.title},on:{input:function(a){a.target.composing||(t.title=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"description"}},[t._v("Description (Optional)")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{minlength:"10",id:"description","aria-describedby":"descriptionHelp",placeholder:"Enter title"},domProps:{value:t.description},on:{input:function(a){a.target.composing||(t.description=a.target.value)}}}),t._v(" "),e("small",{staticClass:"form-text text-muted",attrs:{id:"descriptionHelp"}},[t._v("Not less than 10 characters")])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("Ranking")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.ranking,expression:"ranking"}],staticClass:"form-control",attrs:{type:"number",minlength:"10",id:"ranking",required:""},domProps:{value:t.ranking},on:{input:function(a){a.target.composing||(t.ranking=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("Metadata")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.metadata,expression:"metadata"}],staticClass:"form-control",attrs:{type:"text",minlength:"10",id:"metadata"},domProps:{value:t.metadata},on:{input:function(a){a.target.composing||(t.metadata=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"category"}},[t._v("Category")]),t._v(" "),e("div",{staticClass:"form-inline"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"form-control",attrs:{type:"text",id:"category",required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.category=a.target.multiple?e:e[0]}}},t._l(t.categoryList,function(a,s){return e("option",{key:s,domProps:{selected:a.id===t.category,value:a.id}},[t._v(t._s(a.title))])}),0),t._v(" "),t._m(2)])])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{ref:"closeBtn",staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal",id:"close"}},[t._v("Close")]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.doSave()}}},[t._v("Save changes")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("h3",[this._v("Favorite Things "),a("i",{staticClass:"fa fa-pencil"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticStyle:{"padding-left":"5px"},attrs:{href:"/category"}},[a("i",{staticClass:"fa fa-plus"}),this._v(" Add")])}]};var f=e("VU/8")(m,p,!1,function(t){e("wmH8")},"data-v-2f2a2ce2",null).exports,g={data:function(){return{username:"",password:"",errorMessage:""}},props:["referrer"],created:function(){localStorage.getItem("token")&&this.goToHome()},methods:{doLogin:function(){var t=this,a={username:this.username,password:this.password};v.post("login",a).then(function(a){localStorage.setItem("token",a.data.token),t.goToHome()}).catch(function(a){t.errorMessage="Invalid login. "+a})},goToHome:function(){this.$router.push("/")}}},h={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-6 mx-auto"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v("\n      Sign In or "),e("router-link",{attrs:{to:"/signup"}},[t._v("Signup")])],1),t._v(" "),e("div",{staticClass:"card-body"},[e("form",{attrs:{method:"post"}},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"input-group"},[t._v("\n            "+t._s(t.errorMessage)+"\n          ")])]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(a){a.target.composing||(t.username=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.doLogin()}}},[t._v("Sign In")])])])])])},staticRenderFns:[]};var _=e("VU/8")(g,h,!1,function(t){e("RErX")},null,null).exports,C={data:function(){return{username:"",password:"",errorMessage:""}},props:["referrer"],created:function(){localStorage.getItem("token")&&this.goToHome()},methods:{doSignup:function(){var t=this,a={username:this.username,password:this.password};v.post("create-user/",a).then(function(a){t.goToHome()}).catch(function(a){t.errorMessage="Error. Try a different username "+a})},goToHome:function(){this.$router.push("/")}}},b={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-6 mx-auto"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v("\n      Sign Up or "),e("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),e("div",{staticClass:"card-body"},[e("form",{attrs:{method:"post"}},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"input-group"},[t._v("\n            "+t._s(t.errorMessage)+"\n          ")])]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(a){a.target.composing||(t.username=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.doSignup()}}},[t._v("Create")])])])])])},staticRenderFns:[]};var y=e("VU/8")(C,b,!1,function(t){e("WG7K")},null,null).exports,k={created:function(){localStorage.getItem("token")?(localStorage.removeItem("token"),this.$router.push("/login")):this.$router.push("/login")}},x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"wrapper"},[this._v("\n      Logging out...\n")])},staticRenderFns:[]};var w=e("VU/8")(k,x,!1,function(t){e("47cN")},null,null).exports,E={data:function(){return{more:!1,add:!1,choices:["person","place","food"],id:"",title:"",errorMessage:"",categories:[]}},created:function(){this.loadCategories()},methods:{loadCategories:function(){var t=this;v.get("user-category").then(function(a){t.categories=a.data}).catch(function(a){t.errorMessage=""+a})},loadChoices:function(){var t=[];for(var a in this.categories)t.push(this.categories[a].title);this.choices=this.choices.filter(function(a){return!t.includes(a)})},doEdit:function(t){var a=this.categories.filter(function(a){if(a.id===t)return a})[0];this.title=a.title,this.id=a.id},doPut:function(){var t=this,a={id:this.id,title:this.title};v.put("user-category/"+a.id+"/",a).then(function(a){var e=t.$refs.closeBtn;200===a.status&&(t.categories=[],t.loadCategories(),e.click())}).catch(function(a){t.errorMessage=a})},addPanel:function(){this.title="",!1===this.more?(this.more=!0,this.add=!0):this.more=!1},doSave:function(){var t=this,a={title:this.title};v.post("user-category/",a).then(function(a){var e=t.$refs.closeBtn2;201===a.status&&(t.categories=[],t.loadCategories(),e.click(),t.add=!1)}).catch(function(a){t.errorMessage=a})},doAdd:function(){this.loadChoices()}}},L={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"row d-flex justify-content-between"},[t._m(0),t._v(" "),e("div",{staticClass:"col-2 text-right"},[e("button",{staticClass:"btn btn-success",attrs:{"data-toggle":"modal","data-target":"#categoryModal"},on:{click:function(a){return t.doAdd()}}},[e("i",{staticClass:"fa fa-plus"}),t._v(" "),e("b",[t._v("Add")])])])]),t._v(" "),e("table",{staticClass:"table table-hover"},[t._m(1),t._v(" "),e("tbody",t._l(t.categories,function(a,s){return e("tr",{key:s},[e("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),t._v(" "),e("td",[t._v(t._s(a.title))]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-primary",attrs:{href:"#","data-toggle":"modal","data-target":"#editModal"},on:{click:function(e){return t.doEdit(a.id)}}},[e("i",{staticClass:"fa fa-edit"}),t._v(" "),e("b",[t._v("Edit")])])])])}),0)]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"categoryModal",tabindex:"-1",role:"dialog","aria-labelledby":"categoryModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),e("div",{staticClass:"modal-body"},[e("a",{attrs:{href:"#","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},on:{click:function(a){return t.addPanel()}}},[e("i",{staticClass:"fa fa-plus"},[t._v(" Add")])]),t._v(" "),e("div",{staticClass:"collapse",attrs:{id:"collapseExample"}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("Title")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"Enter title"},domProps:{value:t.title},on:{input:function(a){a.target.composing||(t.title=a.target.value)}}})])]),t._v(" "),!1===t.more?e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("Title")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.title=a.target.multiple?e:e[0]}}},t._l(t.choices,function(a,s){return e("option",{key:s},[t._v(t._s(a))])}),0)]):t._e()]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{ref:"closeBtn2",staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal",id:"close"}},[t._v("Close")]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.doSave()}}},[t._v("Save changes")])])])])]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"editModal",tabindex:"-1",role:"dialog","aria-labelledby":"editModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(t._s(t.title))]),t._v(" "),t._m(3)]),t._v(" "),e("div",{staticClass:"modal-body"},[e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("Title")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"Enter title"},domProps:{value:t.title},on:{input:function(a){a.target.composing||(t.title=a.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{ref:"closeBtn",staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal",id:"close"}},[t._v("Close")]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.doPut()}}},[t._v("Save changes")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-3"},[a("h1",[this._v("Categories")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[this._v("#")]),this._v(" "),a("th",{attrs:{scope:"col"}},[this._v("Category")]),this._v(" "),a("th",{attrs:{scope:"col"}},[this._v("Edit")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[this._v("Modal title")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}]};var M=e("VU/8")(E,L,!1,function(t){e("VsGL")},"data-v-25f7725e",null).exports,S={props:{},data:function(){return{activity:[],errorMessage:""}},created:function(){this.loadActivity()},methods:{loadActivity:function(){var t=this;v.get("activities").then(function(a){t.activity=a.data}).catch(function(a){t.errorMessage=a})}}},$={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Activities"},[e("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),e("tbody",t._l(t.activity,function(a,s){return e("tr",{key:s},[e("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),t._v(" "),e("td",[t._v(t._s(a.models_objects))]),t._v(" "),e("td",[t._v(t._s(a.title))]),t._v(" "),e("td",[t._v(t._s(a.action_flag))]),t._v(" "),e("td",[t._v(t._s(a.time_stamp))])])}),0)])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Object")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Title")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Action")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Time")])])])}]},A=e("VU/8")(S,$,!1,null,null,null).exports;s.a.use(n.a);var P=new n.a({mode:"history",linkExactActiveClass:"active",routes:[{path:"/",name:"Home",component:f},{path:"/category",name:"Category",component:M},{path:"/activities",name:"Activity",component:A},{path:"/login",name:"Login",component:_},{path:"/logout",name:"Logout",component:w},{path:"/signup",name:"SignUp",component:y}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:P,components:{App:o},template:"<App/>"})},RErX:function(t,a){},VsGL:function(t,a){},WG7K:function(t,a){},wmH8:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.611f19b559b3224f1df7.js.map