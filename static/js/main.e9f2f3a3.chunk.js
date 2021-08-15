(this["webpackJsonpdict-todos"]=this["webpackJsonpdict-todos"]||[]).push([[0],{102:function(e,t,n){},208:function(e,t,n){},211:function(e,t,n){"use strict";n.r(t);var c,r,o=n(0),i=n.n(o),a=n(10),l=n.n(a),s=n(40),d=n(251),u=n(249),j=n(248),b=(n(102),n(60)),O=(n(51),n(61)),x=n(79),h="CREATE_TODO",p="MARK_TODO_AS_COMPLETED",f="DELETE_TODO",m="LOAD_WORD_IN_PROGRESS",y="LOAD_WORD_SUCCESS",v="LOAD_WORD_FAILURE",g=n(18),C=n(87),w=n.n(C),k=n(243),L=n(252),S=n(2),D=Object(O.b)(c||(c=Object(b.a)(["",""])),x.fadeInRight),A=O.a.div(r||(r=Object(b.a)(["\n  animation: 1s ",";\n"])),D),T=Object(g.b)(null,(function(e){return{onCompletedClicked:function(t){return e(function(e){return{type:p,payload:{text:e}}}(t))},onDeleteClicked:function(t){return e(function(e){return{type:f,payload:{text:e}}}(t))}}}))((function(e){var t=e.todo,n=e.onCompletedClicked,c=e.onDeleteClicked;return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(A,{className:"todoListItem",children:[Object(S.jsx)("div",{children:t.text}),Object(S.jsxs)("div",{className:"todoButton",children:[Object(S.jsx)(k.a,{"aria-label":"isCompleted",disabled:t.isCompleted,onClick:function(){return n(t.text)},children:Object(S.jsx)(L.a,{checked:t.isCompleted,color:"primary",style:{color:"#36345af6"}})}),Object(S.jsx)(k.a,{color:"inherit",onClick:function(){return c(t.text)},children:Object(S.jsx)(w.a,{})})]})]})})})),N=Object(g.b)()((function(e){var t=e.todos;return Object(S.jsx)("div",{className:"todoList",children:Object(S.jsx)("div",{className:"todoListItems",children:t.map((function(e,t){return Object(S.jsx)(T,{todo:e},t)}))})})})),R=n(250),E=n(247),_=Object(g.b)(null,(function(e){return{onCreateClicked:function(t){return e(function(e){return{type:h,payload:{text:e}}}(t))}}}))((function(e){var t=e.onCreateClicked,n=Object(o.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1];return Object(S.jsxs)("form",{autoComplete:"off",className:"newTodoForm",onSubmit:function(e){e.preventDefault()},children:[Object(S.jsx)(R.a,{value:r,id:"outlined-basic",label:"Todo text",variant:"outlined",onChange:function(e){return i(e.target.value)}}),Object(S.jsx)(E.a,{color:"primary",style:{backgroundColor:"white",marginLeft:"10px"},type:"submit",onClick:function(){t(r),i("")},children:"Add"})]})})),I=n(49),B=function(e){return e.todos},W=Object(I.a)(B,(function(e){return e.filter((function(e){return!e.isCompleted}))})),P=Object(I.a)(B,(function(e){return e.filter((function(e){return e.isCompleted}))})),F=function(e){return e.words},M=Object(I.a)(F,(function(e){return e[0].phonetics})),z=Object(I.a)(F,(function(e){return e[0].meanings})),U=n(43),G=Object(j.a)({root:{overflowX:"auto",justifySelf:"center",backgroundColor:"#181313",color:"white"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:30,borderRadius:50},pos:{marginBottom:12},table:{display:"block",alignItems:"center",justifySelf:"center",justifyContent:"center"},tableItem:{borderRadius:50}}),J=Object(g.b)((function(e){return{word:F(e)}}))((function(e){var t=e.word,n=G();if(!t)return null;var c=t[0];return Object(S.jsx)("div",{children:Object.keys(c).map((function(e){return Object(S.jsx)("table",{children:Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{className:n.tableItem,children:[Object(S.jsx)("td",{children:Object(S.jsx)("h4",{style:{fontSize:"25px",color:"wheat"},children:e})}),Object(S.jsx)("td",{style:{fontSize:"30px",color:"white"},children:"-"}),Object(S.jsx)("td",{style:{fontSize:"25px",color:"white"},children:typeof c[e]===typeof{}?Object(S.jsxs)(U.b,{to:"/dict-todos/showdetails",exact:"true",style:{textDecoration:"none",color:"rgba(80, 78, 128, 0.965)"},children:[c[e].length,"  -- See Details"]}):c[e]})]})})},e)}))})})),K=n(64),X=n.n(K),q=n(88),H=n(89),Q=n.n(H),V=function(e){return function(){alert("Error : ".concat(e))}},Y=Object(g.b)((function(e){return{isLoading:e.isLoading}}),(function(e){return{startLoadingWords:function(t){return e(function(e){return function(){var t=Object(q.a)(X.a.mark((function t(n,c){var r,o;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,n({type:m}),t.next=5,Q.a.get("https://api.dictionaryapi.dev/api/v2/entries/en_US/"+e);case 5:return r=t.sent,t.next=8,r.data;case 8:o=t.sent,n({type:y,payload:{wordData:o}}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),n({type:v}),n(V(t.t0));case 16:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,n){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.isLoading,n=e.startLoadingWords,c=Object(o.useState)(""),r=Object(s.a)(c,2),i=r[0],a=r[1],l=Object(o.useState)(""),d=Object(s.a)(l,2),u=d[0],j=d[1],b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(){clearTimeout(u);var n=setTimeout(e,t);j(n)}}((function(){n(i)}));Object(o.useEffect)((function(){""!==i&&b()}),[i]);var O=Object(S.jsx)("div",{style:{backgroundColor:"white",width:"100%",height:"50vh",textAlign:"center",fontSize:"20px",alignItems:"center"},children:"Loading word data ..."});return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"newTodoForm",children:Object(S.jsx)(R.a,{value:i,id:"outlined-basic",label:"Word",variant:"outlined",onChange:function(e){return function(e){a(e.target.value)}(e)}})}),t?O:Object(S.jsx)(J,{})]})})),Z=Object(j.a)((function(){return{tabButton:{marginRight:"25px",backgroundColor:"#22222269",borderRadius:30,border:"solid 1px grey",color:"white"}}})),$=function(e){var t=e.children,n=e.value,c=e.index;return Object(S.jsx)("div",{children:n===c&&Object(S.jsx)(S.Fragment,{children:t})})},ee=Object(g.b)((function(e){return{completedTodos:P(e),incompleteTodos:W(e)}}))((function(e){var t=e.completedTodos,n=e.incompleteTodos,c=Object(o.useState)(0),r=Object(s.a)(c,2),i=r[0],a=r[1],l=Z();return Object(S.jsxs)("div",{className:"menuContainer",children:[Object(S.jsxs)(d.a,{TabIndicatorProps:{style:{display:"none"}},value:i,onChange:function(e,t){a(t)},className:"tabs",variant:"scrollable",scrollButtons:"on",children:[Object(S.jsx)(u.a,{label:"completed",className:l.tabButton}),Object(S.jsx)(u.a,{label:"incomplete",className:l.tabButton}),Object(S.jsx)(u.a,{label:"add todo",className:l.tabButton}),Object(S.jsx)(u.a,{label:"dictionary",className:l.tabButton})]}),Object(S.jsx)($,{value:i,index:0,classes:{color:"red"},children:Object(S.jsx)(N,{todos:t})}),Object(S.jsx)($,{value:i,index:1,children:Object(S.jsx)(N,{todos:n})}),Object(S.jsx)($,{value:i,index:2,children:Object(S.jsx)(_,{})}),Object(S.jsx)($,{value:i,index:3,children:Object(S.jsx)(Y,{})})]})})),te=function(e){var t=e.phonetics;return Object(S.jsx)("div",{style:{padding:"0"},children:Object.keys(t).map((function(e,n){return Object(S.jsxs)("ul",{style:{border:"1px solid white",backgroundColor:"black"},children:[Array.isArray(t)?null:Object(S.jsx)("li",{style:{backgroundColor:"black",color:"purple",fontWeight:"bold"},children:e.toLocaleUpperCase()}),Object(S.jsx)("li",{children:typeof t[e]===typeof{}?Object(S.jsx)(ne,{meanings:t[e]}):Object(S.jsx)("li",{style:{color:"white",backgroundColor:"black"},children:t[e]})})]},n)}))})},ne=function e(t){var n=t.meanings;return Object(S.jsx)("div",{style:{padding:"0"},children:Object.keys(n).map((function(t,c){return Object(S.jsxs)("ul",{style:{backgroundColor:"whitesmoke",border:"1px solid black"},children:[Array.isArray(n)?null:Object(S.jsx)("li",{style:{backgroundColor:"white",color:"purple",fontWeight:"bold"},children:t.toLocaleUpperCase()}),Object(S.jsx)("li",{children:typeof n[t]===typeof{}?Object(S.jsx)(e,{meanings:n[t]}):Object(S.jsx)("li",{style:{color:"black"},children:n[t]})})]},c)}))})},ce=Object(g.b)((function(e){return{wordMeanings:z(e),wordPhonetics:M(e)}}),null)((function(e){var t=e.wordMeanings,n=e.wordPhonetics;return Object(S.jsxs)("div",{style:{},children:[Object(S.jsx)(U.b,{to:"/dict-todos/",style:{textDecoration:"none"},children:Object(S.jsx)(E.a,{color:"primary",style:{backgroundColor:"white",marginLeft:"10px"},children:"Back"})}),Object(S.jsx)("div",{style:{textAlign:"center",color:"white"},children:Object(S.jsx)(E.a,{color:"primary",style:{backgroundColor:"white",marginLeft:"10px"},children:"Meanings"})}),Object(S.jsx)(ne,{meanings:t}),Object(S.jsx)("div",{style:{textAlign:"center",color:"white"},children:Object(S.jsx)("h1",{children:"Phonetics"})}),Object(S.jsx)(te,{phonetics:n})]})})),re=(n(208),n(13));var oe=function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(U.a,{children:Object(S.jsxs)(re.c,{children:[Object(S.jsx)(re.a,{path:"/dict-todos/",exact:!0,component:ee}),Object(S.jsx)(re.a,{path:"/dict-todos/showdetails",exact:!0,component:ce})]})})})},ie=n(56),ae=n(90),le=n(35),se=n(91),de=n.n(se),ue=n(55),je=n(65),be=n(92),Oe={todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{text:"your completed todos will appear here",isCompleted:!0},{text:"your incomplete todos will appear here!",isCompleted:!1}],t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case h:var r={text:c.text,isCompleted:!1};return e.concat(r);case p:var o=c.text;return e.map((function(e){return e.text===o?Object(je.a)(Object(je.a)({},e),{},{isCompleted:!0}):e}));case f:var i=c.text;return e.filter((function(e){return e.text!==i}));default:return e}},isLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case m:return!0;case y:case v:return!1;default:return e}},words:function(e,t){var n=t.type,c=t.payload;switch(n){case y:return c.wordData;case m:case v:default:return null}}},xe={key:"root",storage:de.a,stateReconciler:ue.a},he=Object(le.b)(Oe),pe=Object(ie.a)(xe,he),fe=Object(le.c)(pe,Object(le.a)(be.a)),me=Object(ie.b)(fe);l.a.render(Object(S.jsx)(g.a,{store:fe,children:Object(S.jsx)(ae.PersistGate,{loading:Object(S.jsx)("div",{children:"loading..."}),persistor:me,children:Object(S.jsx)(i.a.StrictMode,{children:Object(S.jsx)(oe,{})})})}),document.getElementById("root"))},51:function(e,t,n){}},[[211,1,2]]]);
//# sourceMappingURL=main.e9f2f3a3.chunk.js.map