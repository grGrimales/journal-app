(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{168:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(32),r=n.n(c),s=n(8),i=n(29),o="[Auth] Login",u="[Auth] Logout",l="[UI] Set Error",d="[UI] Remove Error",j="[UI] Start loading",b="[UI] Finish loading",p="[Notes] New note",m="[Notes] set active note",h="[Notes] Load notes",f="[Notes] Updated note",O="[Notes] Delete note",x="[Notes] Logout cleaning",v=n(63),g=n(6),_={loading:!1,msgError:null},y=n(45),w={notes:[],active:null},N="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,k=Object(i.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return{uid:t.payload.uid,name:t.payload.displayName};case u:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(g.a)(Object(g.a)({},e),{},{msgError:t.payload});case d:return Object(g.a)(Object(g.a)({},e),{},{msgError:null});case j:return Object(g.a)(Object(g.a)({},e),{},{loading:!0});case b:return Object(g.a)(Object(g.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(g.a)(Object(g.a)({},e),{},{active:Object(g.a)({},t.payload)});case p:return Object(g.a)(Object(g.a)({},e),{},{notes:[t.payload].concat(Object(y.a)(e.notes))});case h:return Object(g.a)(Object(g.a)({},e),{},{notes:Object(y.a)(t.payload)});case f:return Object(g.a)(Object(g.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case O:return Object(g.a)(Object(g.a)({},e),{},{actives:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case x:return{active:null,notes:[]};default:return e}}}),E=Object(i.d)(k,N(Object(i.a)(v.a))),C=n(9),S=n.n(C),I=n(13),A=n(20),L=n(21),D=n(10),P=n(28);n(170),n(75);P.a.initializeApp({apiKey:"AIzaSyDRxnlHtM8K2WAARr03YW4XMrREqf9j2Iw",authDomain:"journal-app-843ee.firebaseapp.com",projectId:"journal-app-843ee",storageBucket:"journal-app-843ee.appspot.com",messagingSenderId:"1016192669014",appId:"1:1016192669014:web:afb7c8b6f5597b252532f7"});var U=P.a.firestore(),R=new P.a.auth.GoogleAuthProvider,W=n(22),T=n.n(W),F=function(){var e=Object(I.a)(S.a.mark((function e(t){var n,a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dcxto1nnl/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dcxto1nnl/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.next=17,a.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(I.a)(S.a.mark((function e(t){var n,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(g.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(e,t){return{type:m,payload:Object(g.a)({id:e},t)}},B=function(e,t){return{type:p,payload:Object(g.a)({id:e},t)}},G=function(e){return function(){var t=Object(I.a)(S.a.mark((function t(n){var a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q(e);case 2:a=t.sent,n(J(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},J=function(e){return{type:h,payload:e}},M=function(e){return function(){var t=Object(I.a)(S.a.mark((function t(n,a){var c,r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(g.a)({},e)).id,t.next=6,U.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r);case 6:n(X(e.id,r)),T.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},X=function(e,t){return{type:f,payload:{id:e,note:Object(g.a)({id:e},t)}}},K=function(e){return{type:O,payload:e}},H=n(1),V=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active;return Object(H.jsxs)("div",{className:"notes__appbar",children:[Object(H.jsx)("span",{children:" 17 de Julio 2021"}),Object(H.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(I.a)(S.a.mark((function t(n,a){var c,r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,T.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,onBeforeOpen:function(){T.a.showLoading()}}),t.next=4,F(e);case 4:r=t.sent,c.url=r,n(M(c)),T.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(H.jsxs)("div",{children:[Object(H.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(H.jsx)("button",{className:"btn",onClick:function(){e(M(t))},children:"Save"})]})]})},Y=n(34),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(A.a)(t,2),c=n[0],r=n[1],s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},i=function(e){var t=e.target;r(Object(g.a)(Object(g.a)({},c),{},Object(Y.a)({},t.name,t.value)))};return[c,i,s]},Z=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active,n=Q(t),c=Object(A.a)(n,3),r=c[0],i=c[1],o=c[2],u=r.body,l=r.title,d=r.id,j=Object(a.useRef)(t.id);Object(a.useEffect)((function(){t.id!==j.current&&(o(t),j.current=t.id)}),[t,o]),Object(a.useEffect)((function(){e(z(r.id,Object(g.a)({},r)))}),[r,e]);return Object(H.jsxs)("div",{className:"notes__main-content",children:[Object(H.jsx)(V,{}),Object(H.jsxs)("div",{className:"notes__content",children:[Object(H.jsx)("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",value:l,name:"title",onChange:i}),Object(H.jsx)("textarea",{placeholder:"what happened today",className:"notes__texarea",value:u,name:"body",onChange:i}),t.url&&Object(H.jsx)("div",{className:"notes__image",children:Object(H.jsx)("img",{src:t.url,alt:"imagen"})}),Object(H.jsx)("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(I.a)(S.a.mark((function t(n,a){var c;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.prev=1,t.next=4,U.doc("".concat(c,"/journal/notes/").concat(e)).delete();case 4:console.log(c,e),console.log("termino el borrado en la base de datos"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0.message);case 11:n(K(e));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()}(d))},children:"Delete"})]})]})},$=function(){return Object(H.jsxs)("div",{className:"nothing__main-content",children:[Object(H.jsxs)("p",{children:["Select something",Object(H.jsx)("br",{}),"pr create an entry!"]}),Object(H.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},ee=function(e){return{type:l,payload:e}},te=function(){return{type:b}},ne=function(e,t){return function(n){n({type:j}),P.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(ae(t.uid,t.displayName)),n(te())})).catch((function(e){n(te()),T.a.fire("Error",e.message,"error")}))}},ae=function(e,t){return{type:o,payload:{uid:e,displayName:t}}},ce=function(){return{type:u}},re=n(64),se=n.n(re),ie=function(e){var t=e.id,n=e.date,a=e.title,c=e.body,r=e.url,i=Object(s.b)(),o=se()(n);return Object(H.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn animate__faster",onClick:function(){i(z(t,{date:n,title:a,body:c,url:r}))},children:[r&&Object(H.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object(H.jsxs)("div",{className:"journal__entry-body",children:[Object(H.jsx)("p",{className:"journal__entry-title",children:a}),Object(H.jsx)("p",{className:"journal__entry-content",children:c})]}),Object(H.jsxs)("div",{className:"journal__entry-date-box",children:[Object(H.jsx)("span",{children:o.format("dddd")}),Object(H.jsx)("h4",{children:o.format("Do")})]})]})},oe=function(){var e=Object(s.c)((function(e){return e.notes})).notes;return Object(H.jsx)("div",{className:"jurnal__entries pointer ",children:e.map((function(e){return Object(H.jsx)(ie,Object(g.a)({},e),e.id)}))})},ue=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).name;return Object(H.jsxs)("aside",{className:"journal__sidebar",children:[Object(H.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(H.jsxs)("h3",{className:"mt-5",children:[Object(H.jsx)("i",{className:"far fa-moon"}),Object(H.jsxs)("span",{children:[" ",t]})]}),Object(H.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(I.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.auth().signOut();case 2:t(ce()),t({type:x});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(H.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(I.a)(S.a.mark((function e(t,n){var a,c,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=4,U.collection("".concat(a,"/journal/notes")).add(c);case 4:r=e.sent,t(z(r.id,c)),t(B(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(H.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(H.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(H.jsx)(oe,{})]})},le=function(){var e=Object(s.c)((function(e){return e.notes})).active;return Object(H.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(H.jsx)(ue,{}),Object(H.jsx)("main",{children:e?Object(H.jsx)(Z,{}):Object(H.jsx)($,{})})]})},de=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).loading,n=Q({email:"grediana@gmail.com",password:"123456"}),a=Object(A.a)(n,2),c=a[0],r=a[1],i=c.email,o=c.password;return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("h3",{className:"auth__title",children:"Login"}),Object(H.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(ne(i,o))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(H.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:i,onChange:r}),Object(H.jsx)("input",{type:"password",placeholder:"Introduce una contrase\xf1a",name:"password",className:"auth__input",value:o,onChange:r}),Object(H.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:"Login"}),Object(H.jsx)("hr",{}),Object(H.jsxs)("div",{className:"auth__social-networks",children:[Object(H.jsx)("p",{children:" Login with social networks"}),Object(H.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){P.a.auth().signInWithPopup(R).then((function(t){var n=t.user;e(ae(n.uid,n.displayName))}))}))},children:[Object(H.jsx)("div",{className:"google-icon-wrapper",children:Object(H.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(H.jsx)("p",{className:"btn-text",children:Object(H.jsx)("b",{children:"Sign in with google"})})]})]}),Object(H.jsx)(L.b,{to:"/auth/register",className:"link",children:"Create new account"})]})]})},je=n(65),be=n.n(je),pe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).msgError,n=Q({name:"grediana",email:"grediana@gmail.com",password:"123456",password2:"123456"}),a=Object(A.a)(n,2),c=a[0],r=a[1],i=c.name,o=c.email,u=c.password,l=c.password2,j=function(){return 0===i.trim().length?(e(ee("Name is requered")),!1):be.a.isEmail(o)?u!==l||u.length<5?(e(ee("Contrase\xf1as no coinciden")),!1):(e({type:d}),!0):(e(ee("Email no es valido")),!1)};return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("h3",{className:"auth__title",children:"Login"}),Object(H.jsxs)("form",{onSubmit:function(t){t.preventDefault(),j()&&e(function(e,t,n){return function(a){P.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(I.a)(S.a.mark((function e(t){var c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:a(ae(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){T.a.fire("Error",e.message,"error")}))}}(o,u,i))},className:"animate__animated animate__fadeIn animate__faster",children:[t&&Object(H.jsx)("div",{className:"auth__alert-error",children:t}),Object(H.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:i,onChange:r}),Object(H.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input mt-1",value:o,onChange:r}),Object(H.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password",value:u,onChange:r,className:"auth__input mt-1"}),Object(H.jsx)("input",{type:"password",placeholder:"Password",name:"password2",className:"auth__input mt-1",value:l,onChange:r}),Object(H.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Register"}),Object(H.jsx)(L.b,{to:"/auth/login",className:"link",children:"Already registered?"})]})]})},me=function(){return Object(H.jsx)("div",{className:"auth__main",children:Object(H.jsx)("div",{className:"auth__box-container",children:Object(H.jsxs)(D.d,{children:[Object(H.jsx)(D.b,{exact:!0,path:"/auth/login",component:de}),Object(H.jsx)(D.b,{exact:!0,path:"/auth/register",component:pe}),Object(H.jsx)(D.a,{to:"/auth/login"})]})})})},he=n(36),fe=["isAuthenticated","component"],Oe=function(e){var t=e.isAuthenticated,n=e.component,a=Object(he.a)(e,fe);return Object(H.jsx)(D.b,Object(g.a)(Object(g.a)({},a),{},{component:function(e){return t?Object(H.jsx)(n,Object(g.a)({},e)):Object(H.jsx)(D.a,{to:"/auth/login"})}}))},xe=["isAuthenticated","component"],ve=function(e){var t=e.isAuthenticated,n=e.component,a=Object(he.a)(e,xe);return Object(H.jsx)(D.b,Object(g.a)(Object(g.a)({},a),{},{component:function(e){return t?Object(H.jsx)(D.a,{to:"/"}):Object(H.jsx)(n,Object(g.a)({},e))}}))},ge=function(){var e=Object(s.b)(),t=Object(a.useState)(!0),n=Object(A.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(!1),o=Object(A.a)(i,2),u=o[0],l=o[1];return Object(a.useEffect)((function(){P.a.auth().onAuthStateChanged(function(){var t=Object(I.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(ae(n.uid,n.displayName)),l(!0),e(G(n.uid))):l(!1),r(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,r,l]),c?Object(H.jsx)("h1",{children:"WAIT..."}):Object(H.jsx)(L.a,{children:Object(H.jsx)("div",{children:Object(H.jsxs)(D.d,{children:[Object(H.jsx)(ve,{path:"/auth",component:me,isAuthenticated:u}),Object(H.jsx)(Oe,{exact:!0,isAuthenticated:u,path:"/",component:le}),Object(H.jsx)(D.a,{to:"/auth/login"})]})})})};function _e(){return Object(H.jsx)(s.a,{store:E,children:Object(H.jsx)("div",{children:Object(H.jsx)(ge,{})})})}n(168);r.a.render(Object(H.jsx)(_e,{}),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.67f83450.chunk.js.map