(this["webpackJsonpwould-you-rather"]=this["webpackJsonpwould-you-rather"]||[]).push([[0],{72:function(e,t,n){},79:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(44),o=n.n(a),i=(n(72),n(10)),r=n(11),c=n(13),u=n(12),d=n(22),l=n(9),j=n(7),h=n(19),b=n(4),O=n(5),p={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"../../images/optimized/woman.png",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionOne",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"../../images/optimized/beared-man.png",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"../../../images/optimized/old-man.png",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionOne"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},m={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillian"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function x(e){return new Promise((function(t,n){var s=e.author,a=function(e){var t=e.optionOneText,n=e.optionTwoText,s=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:s,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout((function(){m=Object(O.a)(Object(O.a)({},m),{},Object(b.a)({},a.id,a)),p=Object(O.a)(Object(O.a)({},p),{},Object(b.a)({},s,Object(O.a)(Object(O.a)({},p[s]),{},{questions:p[s].questions.concat([a.id])}))),t(a)}),1e3)}))}function v(e){return x(e)}var f="RECEIVE_USERS",g="ADD_QUESTION_ANSWER",y="ADD_QUESTION";var w=n(26),q=n.n(w),T="RECEIVE_QUESTIONS",U="ADD_QUESTION",N="ADD_QUESTION_ANSWER";function S(e){var t=e.optionOneText,n=e.optionTwoText;return function(e,s){var a=s().authedUser;return e(Object(w.showLoading)()),v({optionOneText:t,optionTwoText:n,author:a}).then((function(t){return e(function(e){return{type:U,question:e}}(t))})).then((function(){return e(Object(w.hideLoading)())}))}}function k(e){var t=e.id,n=e.authedUser,s=e.answer;return function(e){return e(Object(w.showLoading)()),e(function(e){var t=e.id,n=e.authedUser,s=e.answer;return{type:N,id:t,authedUser:n,answer:s}}({id:t,authedUser:n,answer:s})),setTimeout((function(){e(Object(w.hideLoading)())}),500),null}}var C=n(23),L="SET_AUTHED_USER",D="UNSET_AUTHED_USER";n(79);var E=n(1),z=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).logout=function(){},e.handleLogout=function(t){var n;t.preventDefault(),(0,e.props.dispatch)((n=e.state.selsectedUser,{type:D,id:n})),e.setState((function(){return{toHome:!0}})),e.logout()},e.state={selsectedUser:"",toHome:!1},e.onChange=e.onClick.bind(Object(C.a)(e)),e.handleSubmit=e.handleLogout.bind(Object(C.a)(e)),e}return Object(r.a)(n,[{key:"onClick",value:function(e){this.setState({selsectedUser:null})}},{key:"render",value:function(){var e=this.props,t=e.users,n=e.authedUser;return!0===e.toHome?Object(E.jsx)(l.a,{to:"/"}):Object(E.jsxs)("nav",{className:"nav",children:[Object(E.jsxs)("ul",{children:[Object(E.jsx)("li",{children:Object(E.jsx)(d.c,{to:"/",exact:!0,activeClassName:"active",children:"Home"})}),Object(E.jsx)("li",{children:Object(E.jsx)(d.c,{to:"/add",exact:!0,activeClassName:"active",children:"New Question"})}),Object(E.jsx)("li",{children:Object(E.jsx)(d.c,{to:"/leaderboard",exact:!0,activeClassName:"active",children:"Leader Board"})})]}),this.props.users[n]?Object(E.jsxs)("div",{className:"current-user",children:[Object(E.jsxs)("span",{children:["Hello,"," ",Object(E.jsx)("span",{style:{fontWeight:600},children:t[n].name}),"!"]}),Object(E.jsx)("span",{children:Object(E.jsx)("img",{src:t[n].avatarURL,alt:t[n].name})}),Object(E.jsx)(d.b,{to:"/login",children:Object(E.jsx)("button",{className:"logout-btn",onClick:this.handleLogout,children:"Logout"})})]}):null]})}}]),n}(s.Component),A=Object(j.connect)()(z),R=(n(83),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleLogin=function(t){var n;t.preventDefault(),(0,e.props.dispatch)((n=e.state.selsectedUser,{type:L,id:n}))},e.state={selsectedUser:""},e.onChange=e.onChange.bind(Object(C.a)(e)),e.handleLogin=e.handleLogin.bind(Object(C.a)(e)),e}return Object(r.a)(n,[{key:"onChange",value:function(e){this.setState({selsectedUser:e.target.value})}},{key:"render",value:function(){var e=this,t=this.props.users,n=Object.keys(t);return Object(E.jsx)(E.Fragment,{children:0!==n.length?Object(E.jsx)("div",{className:"login",children:Object(E.jsxs)("div",{className:"login-info",children:[Object(E.jsxs)("h1",{style:{fontWeight:600},children:["Please Login",Object(E.jsx)("br",{})]}),Object(E.jsx)("h3",{children:"Who are your?"}),Object(E.jsx)("form",{onSubmit:this.handleLogin,children:Object(E.jsxs)("div",{className:"radio ui container center",style:{width:"90%",padding:"5px 10px"},children:[Object(E.jsx)("div",{className:"ui three column grid",style:{margin:"-15px 0 40px 0"},children:n.map((function(n){return Object(E.jsxs)("label",{style:{width:"33.33%"},children:[Object(E.jsx)("input",{style:{visibility:"hidden"},type:"radio",value:n,checked:e.state.selsectedUser===t[n].id,onChange:e.onChange,name:"user",className:"card-input-element"}),Object(E.jsxs)("div",{className:"ui fluid card card-input",onChange:e.onChange,value:n,children:[Object(E.jsx)("div",{className:"image",style:{backgroundColor:"#fff"},children:Object(E.jsx)("img",{style:{width:"100%",height:"100%"},alt:t[n].name,src:t[n].avatarURL})}),Object(E.jsx)("div",{className:"content",value:n,children:Object(E.jsx)("span",{className:"names",value:n,children:t[n].name})})]})]},n)}))}),Object(E.jsx)("button",{className:"btn view",type:"submit",disabled:""===this.state.selsectedUser,children:"Login"})]})})]})}):null})}}]),n}(s.Component));var W=Object(l.g)(Object(j.connect)((function(e,t){var n=e.authedUser,s=e.users;return t.id,{authedUser:n,users:s}}))(R)),H=n(109),I=n(112);function _(e,t){var n=e.id,s=e.timestamp,a=e.optionOne,o=e.optionTwo;return{name:t.name,id:n,timestamp:s,avatar:t.avatarURL,optionOne:a,optionTwo:o}}n(84);var M=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.question;if(null===e)return Object(E.jsx)("p",{children:"This question doesn't exist."});var t=e.name,n=e.avatar,s=e.optionOne,a=e.id;return Object(E.jsxs)("div",{className:"question",children:[Object(E.jsx)("img",{className:"avatar",src:n,alt:"Avatar of ".concat(t)}),Object(E.jsxs)("div",{className:"question-info",children:[Object(E.jsx)("h4",{children:"".concat(t," asks: ")}),Object(E.jsxs)("p",{style:{fontWeight:600},children:["Would You Rather",Object(E.jsx)("span",{style:{fontWeight:400},children:" ".concat(s.text,"...")})]}),Object(E.jsx)(d.b,{to:"questions/".concat(a),children:Object(E.jsx)("button",{className:"btn view",children:"View Poll"})})]})]})}}]),n}(s.Component);var F=Object(j.connect)((function(e,t){var n=e.authedUser,s=e.users,a=e.questions[t.id];return{authedUser:n,question:a?_(a,s[a.author]):null}}))(M),P=(n(85),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).handleChange=function(e){0===s.state.selectedTab?s.setState({selectedTab:1}):s.setState({selectedTab:0})},s.state={selectedTab:0},s}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.authedUser,n=e.questions;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(H.a,{value:this.state.selectedTab,onChange:this.handleChange,children:[Object(E.jsx)(I.a,{label:"Un-Answered"}),Object(E.jsx)(I.a,{label:"Answered"})]}),0===this.state.selectedTab&&Object(E.jsx)("div",{children:Object(E.jsx)("ul",{className:"outer-list",style:{padding:15},children:this.props.questionIds.map((function(e){return!0===n[e].optionOne.votes.includes(t)||!0===n[e].optionTwo.votes.includes(t)?null:Object(E.jsx)("li",{className:"answered-question-item",children:Object(E.jsx)(F,{id:e})},e)}))})}),1===this.state.selectedTab&&Object(E.jsx)("div",{children:Object(E.jsx)("ul",{className:"outer-list",style:{padding:15},children:this.props.questionIds.sort((function(e,t){return n[t].timestamp-n[e].timestamp})).map((function(e){return!0===n[e].optionOne.votes.includes(t)||!0===n[e].optionTwo.votes.includes(t)?Object(E.jsx)("li",{className:"answered-question-item",children:Object(E.jsx)(F,{id:e})},e):null}))})})]})}}]),n}(s.Component));var Q=Object(j.connect)((function(e){var t=e.questions,n=e.authedUser;return{questionIds:Object.keys(t).sort((function(e,n){return t[n].timestamp-t[e].timestamp})),questions:t,authedUser:n}}))(P),V=(n(88),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={optionOneText:"",optionTwoText:"",toHome:!1},e.handleOptionOneText=function(t){var n=t.target.value;e.setState((function(){return{optionOneText:n}}))},e.handleOptionTwoText=function(t){var n=t.target.value;e.setState((function(){return{optionTwoText:n}}))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,s=n.optionOneText,a=n.optionTwoText;(0,e.props.dispatch)(S({optionOneText:s,optionTwoText:a})),e.setState((function(){return{optionOneText:"",optionTwoText:"",toHome:!0}}))},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.optionOneText,n=e.optionTwoText;return!0===e.toHome?Object(E.jsx)(l.a,{to:"/"}):Object(E.jsxs)("div",{className:"new-question-container",children:[Object(E.jsx)("h1",{className:"center",children:"Create New Question"}),Object(E.jsxs)("div",{children:[Object(E.jsx)("h3",{className:"center",children:"Would you rather..."}),Object(E.jsxs)("form",{className:"new-question",onSubmit:this.handleSubmit,children:[Object(E.jsx)("input",{type:"text",id:"name",className:"option-1",name:"name",value:t,onChange:this.handleOptionOneText,placeholder:"Do this...",required:!0,maxLength:100}),Object(E.jsx)("span",{className:"or-seperator",children:"OR"}),Object(E.jsx)("input",{type:"text",id:"name",className:"option-2",name:"name",value:n,onChange:this.handleOptionTwoText,placeholder:"Do this...",required:!0,maxLength:100}),Object(E.jsx)("button",{className:"btn",type:"submit",disabled:""===t||""===n,children:"Submit"})]})]})]})}}]),n}(s.Component)),B=Object(j.connect)()(V),J=(n(89),function(e){var t=Object.keys(e.user.answers).length,n=Object.keys(e.user.questions).length,s=t+n;return Object(E.jsxs)("div",{className:"question",children:[Object(E.jsx)("img",{className:"avatar",src:e.user.avatarURL,alt:"Avatar of ".concat(e.user.name)}),Object(E.jsxs)("div",{className:"question-info",children:[Object(E.jsx)("h3",{children:"".concat(e.user.name)}),Object(E.jsx)("p",{children:"Answered questions ".concat(t)}),Object(E.jsx)("p",{children:"Created questions ".concat(n)}),Object(E.jsx)("p",{children:"Score:  ".concat(s)})]})]})}),Y=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.users).sort((function(t,n){return Object.keys(e.props.users[n].answers).length+Object.keys(e.props.users[n].questions).length-(Object.keys(e.props.users[t].answers).length+Object.keys(e.props.users[t].questions).length)}));return Object(E.jsx)("div",{children:Object(E.jsx)("ul",{style:{padding:"10px 30px"},children:t.map((function(t){return Object(E.jsx)("li",{className:"leader-card",children:Object(E.jsx)(J,{user:e.props.users[t]})},t)}))})})}}]),n}(s.Component);var G=Object(j.connect)((function(e){return{users:e.users,questions:e.questions}}))(Y),$=function(){return Object(E.jsxs)("div",{children:[Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)("h1",{children:"This page doesn't exist."}),Object(E.jsx)("h2",{children:"Check if there's any typos in the URL and try again"}),Object(E.jsx)("h3",{children:"Or go to Home from the Navigation above"}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{})]})},K=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleSubmit=function(t){t.preventDefault();var n=e.props,s=n.dispatch,a=n.question,o=n.authedUser;s(k({id:a.id,authedUser:o,answer:e.state.selectedOption}))},e.state={selectedOption:""},e.onChange=e.onChange.bind(Object(C.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(C.a)(e)),e}return Object(r.a)(n,[{key:"onChange",value:function(e){this.setState({selectedOption:e.target.value})}},{key:"render",value:function(){var e=this.props.question;if(null===e||void 0===e)return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsxs)("div",{style:{margin:"auto",width:580,textAlign:"center"},children:[Object(E.jsx)("h1",{children:" This question doesn't exist."}),Object(E.jsx)("h2",{children:"Go to Home from the Navigation above to find new polls from friends!"})]}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{})]});var t=e.name,n=e.avatar,s=e.optionOne,a=e.optionTwo;return Object(E.jsxs)("div",{className:"question",children:[Object(E.jsx)("img",{className:"avatar",src:n,alt:"Avatar of ".concat(t)}),Object(E.jsxs)("div",{className:"question-info",children:[Object(E.jsx)("h4",{children:"".concat(t," asks: ")}),Object(E.jsxs)("p",{style:{fontWeight:600},children:["Would You Rather ",Object(E.jsx)("br",{})]}),Object(E.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(E.jsx)("div",{className:"radio",children:Object(E.jsxs)("label",{children:[Object(E.jsx)("input",{type:"radio",value:"optionOne",checked:"optionOne"===this.state.selectedOption,onChange:this.onChange}),s.text]})}),Object(E.jsx)("div",{className:"radio",children:Object(E.jsxs)("label",{children:[Object(E.jsx)("input",{type:"radio",value:"optionTwo",checked:"optionTwo"===this.state.selectedOption,onChange:this.onChange}),a.text]})}),Object(E.jsx)("button",{className:"btn view",type:"submit",disabled:""===this.state.selectedOption,children:"Submit"})]})]})]})}}]),n}(s.Component);var X=Object(j.connect)((function(e,t){var n=e.authedUser,s=e.users,a=e.questions,o=a[t.id];return{authedUser:n,questions:a,question:o?_(o,s[o.author]):null}}))(K),Z=(n(90),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={selectedOption:""},e.onValueChange=e.onValueChange.bind(Object(C.a)(e)),e.formSubmit=e.formSubmit.bind(Object(C.a)(e)),e}return Object(r.a)(n,[{key:"onValueChange",value:function(e){this.setState({selectedOption:e.target.value})}},{key:"formSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this.props.question;if(null===e||void 0===e)return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsxs)("div",{style:{margin:"auto",width:580,textAlign:"center"},children:[Object(E.jsx)("h1",{children:" This question doesn't exist."}),Object(E.jsx)("h2",{children:"Go to Home from the Navigation above to find new polls from friends!"})]}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{})]});var t=e.name,n=e.avatar,s=e.optionOne,a=e.optionTwo,o=!0===s.votes.includes(this.props.authedUser),i=o?s.votes:a.votes,r=s.votes.length+a.votes.length,c=i.length/r;return Object(E.jsxs)("div",{className:"answered-question-card",children:[Object(E.jsx)("img",{className:"avatar",src:n,alt:"Avatar of ".concat(t)}),Object(E.jsxs)("div",{className:"question-info",children:[Object(E.jsx)("h4",{children:"".concat(t," asks: ")}),o?Object(E.jsxs)("div",{children:[Object(E.jsxs)("div",{className:"answer",children:[Object(E.jsxs)("p",{children:["Would you rather ",e.optionOne.text]}),Object(E.jsx)("p",{style:{fontWeight:600,color:"#59cd5d"},children:"Your Answer!"}),Object(E.jsx)("div",{style:{width:[c]},children:"".concat(Math.round(100*c)," %")}),Object(E.jsxs)("p",{className:"percentage",children:[r*c," out of ",r," votes"]})]}),Object(E.jsxs)("div",{className:"other-answer",children:["Would you rather ",e.optionTwo.text,Object(E.jsx)("div",{style:{width:[c]},children:"".concat(Math.round(100*(1-c))," %")}),Object(E.jsxs)("p",{className:"percentage",children:[r*(1-c)," out of ",r," ","votes"]})]})]}):Object(E.jsxs)("div",{children:[Object(E.jsxs)("div",{className:"other-answer",children:["Would you rather ",e.optionOne.text,Object(E.jsx)("div",{children:Object(E.jsx)("div",{style:{width:[c]},children:"".concat(Math.round(100*(1-c))," %")})}),Object(E.jsxs)("p",{className:"percentage",children:[r*(1-c)," out of ",r," ","votes"]})]}),Object(E.jsxs)("div",{className:"answer",children:[Object(E.jsxs)("p",{children:["Would you rather ",e.optionTwo.text]}),Object(E.jsx)("p",{style:{fontWeight:600,color:"#59cd5d"},children:"Your Answer!"}),Object(E.jsx)("div",{children:Object(E.jsx)("div",{style:{width:[c]},children:"".concat(Math.round(100*c)," %")})}),Object(E.jsxs)("p",{className:"percentage",children:[r*c," out of ",r," votes"]})]})]})]})]})}}]),n}(s.Component));var ee=Object(j.connect)((function(e,t){var n=e.authedUser,s=e.users,a=e.questions,o=a[t.id];return{authedUser:n,questions:a,question:o?_(o,s[o.author]):null}}))(Z),te=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.setState({loading:!1})}},{key:"render",value:function(){var e=this.props,t=e.question,n=e.authedUser,a=e.id;return Object(E.jsx)(s.Fragment,{children:t&&!0===t.optionOne.votes.includes(n)||t&&!0===t.optionTwo.votes.includes(n)?Object(E.jsx)(ee,{id:a}):Object(E.jsx)(X,{id:a})})}}]),n}(s.Component);var ne=Object(j.connect)((function(e,t){var n=e.authedUser,s=e.questions,a=t.match.params.id;return{id:a,authedUser:n,question:s[a],notFound:!s[a]}}))(te),se=n(63),ae=["component"];var oe=Object(j.connect)((function(e){return{authedUser:e.authedUser}}))((function(e){var t=e.component,n=Object(se.a)(e,ae);return Object(E.jsx)(l.b,Object(O.a)(Object(O.a)({},n),{},{render:function(e){return null!==e.authedUser&&""!==e.authedUser?Object(E.jsx)(t,Object(O.a)({},e)):Object(E.jsx)(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))})),ie=(n(91),n(92),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.handleInitialData()}},{key:"render",value:function(){return Object(E.jsx)(d.a,{children:Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(q.a,{}),Object(E.jsx)(A,{authedUser:this.props.authedUser,users:this.props.users}),null===this.props.authedUser||""===this.props.authedUser?Object(E.jsx)(d.b,{to:"/login",component:W}):null,!1===this.props.loading&&""!==this.props.authedUser&&null!==this.props.authedUser?Object(E.jsx)("div",{className:"app",children:Object(E.jsxs)(l.d,{children:[Object(E.jsx)(oe,{exact:!0,path:"/",component:Q}),Object(E.jsx)(oe,{exact:!0,path:"/questions/:id",component:ne}),Object(E.jsx)(oe,{exact:!0,path:"/add",component:B}),Object(E.jsx)(oe,{exact:!0,path:"/leaderboard",component:G}),Object(E.jsx)(oe,{exact:!0,path:"/login",component:W}),Object(E.jsx)(oe,{path:"*",component:$})]})}):null]})})}}]),n}(s.Component));var re=Object(j.connect)((function(e){var t=e.authedUser;return{loading:null===t,authedUser:t,users:e.users}}),{handleInitialData:function(){return function(e){return e(Object(w.showLoading)()),Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(O.a)({},p))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(O.a)({},m))}),1e3)}))]).then((function(e){var t=Object(h.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(t){var n=t.users,s=t.questions;e(function(e){return{type:f,users:e}}(n)),e(function(e){return{type:T,questions:e}}(s)),e(Object(w.hideLoading)())}))}}})(ie),ce=n(37);var ue=Object(ce.b)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:case D:return t.id;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(O.a)(Object(O.a)({},e),t.users);case y:var n=t.question,s=n.author,a=n.id;return Object(O.a)(Object(O.a)({},e),{},Object(b.a)({},s,Object(O.a)(Object(O.a)({},e[s]),{},{questions:e[s].questions.concat(a)})));case g:return Object(O.a)(Object(O.a)({},e),{},Object(b.a)({},t.authedUser,Object(O.a)(Object(O.a)({},e[t.authedUser]),{},{answers:Object(O.a)(Object(O.a)({},e[t.authedUser].answers),{},Object(b.a)({},t.id,t.answer))})));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(O.a)(Object(O.a)({},e),t.questions);case U:return Object(O.a)(Object(O.a)({},e),{},Object(b.a)({},t.question.id,t.question));case N:return Object(O.a)(Object(O.a)({},e),{},Object(b.a)({},t.id,Object(O.a)(Object(O.a)({},e[t.id]),{},Object(b.a)({},t.answer,Object(O.a)(Object(O.a)({},e[t.id][t.answer]),{},{votes:e[t.id][t.answer].votes.concat([t.authedUser])})))));default:return e}},loadingBar:w.loadingBarReducer}),de=n(61),le=function(e){return function(t){return function(n){console.group(n.type),console.log("the action",n);var s=t(n);return console.log("The new state: ",e.getState()),console.groupEnd(n.type),s}}},je=Object(ce.a)(de.a,le),he=Object(ce.c)(ue,je);o.a.render(Object(E.jsx)(j.Provider,{store:he,children:Object(E.jsx)(re,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.b769ed23.chunk.js.map