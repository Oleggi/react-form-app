(this["webpackJsonplogin-form-test"]=this["webpackJsonplogin-form-test"]||[]).push([[0],{124:function(e,t,n){e.exports={lds_roller:"Preloader_lds_roller__29w0_"}},159:function(e,t,n){},160:function(e,t,n){},28:function(e,t,n){e.exports={formControl:"formControls_formControl__1ml_V",error:"formControls_error__2RFKt",error_message:"formControls_error_message__l98zT"}},280:function(e,t,n){"use strict";n.r(t);var r,s,a=n(1),c=n(0),o=n.n(c),i=n(30),u=n.n(i),l=(n(159),n(160),n(41)),j=n(116),b=n(117),p=n(36),d=n.n(p),h=n(35),m=n.n(h),g=n(58),f=n(9),O=n(119).create({baseURL:"https://reqres.in/api/",headers:{"Access-Control-Allow-Origin":"http://localhost:3000/","Access-Control-Allow-Credentials":!0,withCredentials:!0}}),x=function(e,t){return O.post("login",{email:e,password:t}).then((function(e){return e}))},v=function(e){return O.get("users?page=".concat(e)).then((function(e){return e.data}))},_="login-from-test/auth/SET_AUTH_DATA",C="login-from-test/auth/SET_IS_FETCHING",w={isAuth:!1,isFetching:null},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(f.a)(Object(f.a)({},e),{},{isAuth:t.isAuth});case C:return Object(f.a)(Object(f.a)({},e),{},{isAuth:t.isFetching});default:return e}},S=n(20),y=n(81),U=n(28),F=n.n(U),k=function(e){var t=e.input,n=e.meta,r=Object(y.a)(e,["input","meta"]),s=n.touched&&n.error;return Object(a.jsxs)("div",{className:F.a.formControl+" "+(s?F.a.error:""),children:[Object(a.jsx)("input",Object(f.a)(Object(f.a)({},t),r)),s&&Object(a.jsx)("span",{className:F.a.error_message,children:n.error})]})},A=function(e){return e?void 0:"This field is required"},E=n(10),N=(r=20,function(e){return e&&e.length>r?"Must be ".concat(r," characters or less"):void 0}),T=(s=8,function(e){return e&&e.length<s?"Must be ".concat(s," characters or more"):void 0}),I=Object(b.a)({form:"login"})((function(e){e.logInUser,e.onSubmit;var t=e.handleSubmit,n=e.error,r=void 0===n?null:n;return Object(a.jsxs)("form",{onSubmit:t,className:d.a.formSignin,children:[Object(a.jsx)("h1",{class:"h3 mb-3 font-weight-normal",children:"Please sign in"}),Object(a.jsx)("label",{for:"email",class:"sr-only",children:"Email address"}),Object(a.jsx)(j.a,{className:d.a.formControl,name:"email",component:k,validate:[A,N,T],type:"email",placeholder:"login"}),Object(a.jsx)("label",{for:"password",class:"sr-only",children:"Password"}),Object(a.jsx)(j.a,{className:d.a.formControl,name:"password",component:k,validate:[A,N,T],type:"password",placeholder:"password"}),Object(a.jsx)("button",{class:"btn btn-lg btn-primary btn-block mt-3",type:"submit",children:"Sign in"}),r&&Object(a.jsx)("div",{className:d.a.commonError,children:r})]})})),z=Object(S.b)((function(e){return{isAuth:e.auth.isAuth,currentPage:e.usersPage.page}}),{logInUser:function(e,t){return function(){var n=Object(g.a)(m.a.mark((function n(r){var s;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,x(e,t);case 3:(s=n.sent)&&200===s.status&&r({type:_,isAuth:!0}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),r(Object(l.b)("login",{_error:"Wrong password or email"}));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(a.jsx)(E.a,{to:"/users/".concat(e.currentPage)}):Object(a.jsx)("div",{className:d.a.container,class:"text-center",children:Object(a.jsx)(I,{onSubmit:function(t,n){var r=t.email,s=t.password;e.logInUser(r,s),n(Object(l.a)("login"))},props:e})})})),D=n(122),L=n(123),M=n(128),R=n(126),q=n(48),H=n(86),G=n.n(H),J=n(62),B=n.n(J),K=function(e){for(var t=e.totalItemsCount,n=e.currentPage,r=e.portionSize,s=e.onPageChange,o=Math.ceil(t/6),i=[],u=1;u<=o;u++)i.push(u);var l=Math.ceil(o/r),j=Object(c.useState)(1),b=Object(q.a)(j,2),p=b[0],d=b[1],h=(p-1)*r,m=p*r;return Object(a.jsxs)("div",{className:B.a.pages_wrapper,children:[p>2&&Object(a.jsx)("button",{onClick:function(){d(p=1)},children:"<<"}),p>1&&Object(a.jsx)("button",{onClick:function(){d(p-=1)},children:"<"}),i.filter((function(e){return e>=h&&e<=m})).map((function(e,t){return Object(a.jsx)("div",{className:e===n?B.a.active_page:B.a.page_item,onClick:function(){return s(e)},children:e},t)})),l>p&&Object(a.jsx)("button",{onClick:function(){d(p+=1)},children:">"}),l-p>1&&Object(a.jsx)("button",{onClick:function(){d(p=l)},children:">>"})]})},V={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:"50px",zIndex:1e3},W=function(e){var t=e.open,n=e.children,r=e.onClose;return t?u.a.createPortal(Object(a.jsxs)("div",{style:V,class:"card",children:[n,Object(a.jsx)("button",{onClick:r,children:"Close"})]}),document.getElementById("portal")):null},X=function(e){var t=Object(c.useState)(!1),n=Object(q.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)({id:null,email:"",avatar:""}),i=Object(q.a)(o,2),u=i[0],l=i[1];console.log(u);var j=e.users.map((function(e){return Object(a.jsxs)("li",{class:"media pt-3",className:G.a.user_item,onClick:function(){s(!0),l(Object(f.a)(Object(f.a)({},u),{},{id:e.id,email:e.email,avatar:e.avatar}))},children:[Object(a.jsx)("img",{class:"mr-3",src:e.avatar,alt:""}),Object(a.jsxs)("div",{class:"media-body text-md-left",children:[Object(a.jsx)("span",{class:"mt-0 mr-2 mb-1",children:e.first_name}),Object(a.jsx)("span",{class:"mt-0 mb-1",children:e.last_name})]})]},e.id)}));return Object(a.jsxs)("div",{className:G.a.container,children:[Object(a.jsx)(K,{onPageChange:e.onPageChange,totalItemsCount:e.totalUsersCount,currentPage:e.currentPage,portionSize:e.portionSize}),Object(a.jsxs)(W,{open:r,onClose:function(){return s(!1)},children:[Object(a.jsx)("img",{src:u.avatar,class:"card-img-top",alt:"..."}),Object(a.jsxs)("div",{class:"card-body",children:[Object(a.jsxs)("div",{children:["ID: ",u.id]}),Object(a.jsxs)("div",{children:["Email: ",u.email]})]})]}),Object(a.jsx)("ul",{class:"list-unstyled ml-5 mb-5",children:j})]})},Q=n(127),Y="social-network/users/SET_USERS",Z="social-network/users/SET_CURRENT_PAGE",$="social-network/users/CHECK_IS_FETCHING",ee="social-network/users/SET_TOTAL_USERS_COUNT",te={totalUsersCount:0,page:1,users:[],portionSize:7,isFetching:!1,isFollowingActive:[]},ne=function(e){return{type:$,isFetching:e}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(f.a)(Object(f.a)({},e),{},{users:Object(Q.a)(t.users)});case Z:return Object(f.a)(Object(f.a)({},e),{},{page:t.page});case $:return Object(f.a)(Object(f.a)({},e),{},{isFetching:t.isFetching});case ee:return Object(f.a)(Object(f.a)({},e),{},{totalUsersCount:t.totalCount});default:return e}},se=n(124),ae=n.n(se),ce=function(e){return Object(a.jsxs)("div",{className:ae.a.lds_roller,children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})},oe=function(e){return e.usersPage.users},ie=function(e){return e.usersPage.totalUsersCount},ue=function(e){return e.usersPage.page},le=function(e){return e.usersPage.isFetching},je=function(e){return e.usersPage.portionSize},be=n(8),pe=function(e){Object(M.a)(n,e);var t=Object(R.a)(n);function n(){var e;Object(D.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).refreshUsersData=function(){var t=e.props.match.params.page;t||(t=e.props.currentPage),e.props.requestUsers(t)},e.onPageChange=function(t){e.props.requestUsers(t)},e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){this.refreshUsersData()}},{key:"componentDidUpdate",value:function(e){this.props.match.params!==e.match.params&&this.refreshUsersData()}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[this.props.isFetching?Object(a.jsx)(ce,{}):null,Object(a.jsx)(X,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,onPageChange:this.onPageChange,portionSize:this.props.portionSize})]})}}]),n}(o.a.Component),de=Object(be.d)(Object(S.b)((function(e){return{users:oe(e),totalUsersCount:ie(e),currentPage:ue(e),isFetching:le(e),portionSize:je(e)}}),{checkIsFetching:ne,requestUsers:function(e){return function(){var t=Object(g.a)(m.a.mark((function t(n){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(ne(!0)),t.next=3,v(e);case 3:r=t.sent,n(ne(!1)),n((a=r.data,{type:Y,users:a})),n((s=r.total,{type:ee,totalCount:s})),n(ne(!1)),n({type:Z,page:e});case 9:case"end":return t.stop()}var s,a}),t)})));return function(e){return t.apply(this,arguments)}}()}}),E.g)(pe);var he=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(E.d,{children:[Object(a.jsx)(E.b,{exact:!0,path:"/",render:function(){return Object(a.jsx)(E.a,{to:"/login"})}}),Object(a.jsx)(E.b,{exact:!0,path:"/users/:page?",render:function(){return Object(a.jsx)(de,{})}}),Object(a.jsx)(E.b,{path:"/login",render:function(){return Object(a.jsx)(z,{})}})]})})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,281)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))},ge=n(40),fe=n(118),Oe=n(125),xe=Object(be.c)({usersPage:re,auth:P,form:fe.a}),ve=Object(be.e)(xe,Object(be.a)(Oe.a));window.__store__=ve;var _e=ve;u.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(ge.a,{children:Object(a.jsx)(S.a,{store:_e,children:Object(a.jsx)(he,{})})})}),document.getElementById("root")),me()},36:function(e,t,n){e.exports={container:"LoginForm_container__1r_sv",formSignin:"LoginForm_formSignin__1tHsi",formControl:"LoginForm_formControl__X35Jh",commonError:"LoginForm_commonError__32UmA"}},62:function(e,t,n){e.exports={pages_wrapper:"Paginator_pages_wrapper__3GIJb",active_page:"Paginator_active_page__11PNi"}},86:function(e,t,n){}},[[280,1,2]]]);
//# sourceMappingURL=main.4cce1b97.chunk.js.map