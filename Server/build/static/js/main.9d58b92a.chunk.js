(this["webpackJsonpbrain-app"]=this["webpackJsonpbrain-app"]||[]).push([[0],{296:function(e,t,a){},298:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),i=a(39),o=a.n(i),r=(a(80),a(17)),l=a(18),c=a(20),m=a(19),u=function(e){var t=e.onRouteChange;return e.isSignedIn?s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim white underline pa2 pointer"},"Sign In"),s.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim white underline pa2 pointer"},"Register"))},h=a(72),p=a.n(h),d=a(73),g=a.n(d),b=(a(81),function(){return s.a.createElement("div",{className:"ma4 mt0"},s.a.createElement(p.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},s.a.createElement("div",{className:"Tilt-inner"},s.a.createElement("img",{src:g.a,alt:"logo",style:{paddingTop:"5px"}}))))}),f=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).onEmailChange=function(t){console.log(t.target.value),e.setState({emailChange:t.target.value})},e.onPasswordChange=function(t){console.log(t.target.value),e.setState({passwordChange:t.target.value})},e.onSubmitSignIn=function(){fetch("http://localhost:5000/signIn",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({email:e.state.emailChange,password:e.state.passwordChange})}).then((function(t){return t.json().then((function(t){console.log(t),t.id&&(e.props.loadUser(t),e.props.onRouteChange("home"))}))}))},e.state={emailChange:"",passwordChange:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6"},"Email"),s.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6"},"Password"),s.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),s.a.createElement("div",{className:""},s.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:this.onSubmitSignIn})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{href:"#0",className:"f6 link dim black db pointer",onClick:function(){return e("register")}},"Register")))))}}]),a}(s.a.Component),v=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).onNameChange=function(t){console.log(t.target.value),e.setState({name:t.target.value})},e.onEmailChange=function(t){console.log(t.target.value),e.setState({email:t.target.value})},e.onPasswordChange=function(t){console.log(t.target.value),e.setState({password:t.target.value})},e.onSubmitRegister=function(){var t=e.state,a=t.email,n=t.password,s=t.name;console.log(a),console.log(n),console.log(s),fetch("http://localhost:5000/register",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({email:a,password:n,name:s})}).then((function(t){return t.json().then((function(t){t.id&&(e.props.loadUser(t),e.props.onRouteChange("home"))}))}))},e.state={email:"",password:"",name:""},e}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6"},"Name"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"name",name:"name",id:"name",onChange:this.onNameChange})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:"register"},s.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register",onClick:this.onSubmitRegister})))))}}]),a}(s.a.Component),w=(a(82),function(e){var t=e.onInputChange,a=e.onSubmit;return s.a.createElement("div",null,s.a.createElement("p",{className:"f3 white"},"This Magic Brain will detect faces.Please give it a try!",s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:" form center pa4 br2 shadow-5"},s.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),s.a.createElement("button",{className:"w-30 grow f4 link ph4 pr2 pv2 dib white bg-light-purple",onClick:a},"Detect")))))}),E=(a(83),function(e){var t=e.imageUrl,a=e.box;return s.a.createElement("div",{className:"center ma"},s.a.createElement("div",{className:"absolute mt2"},s.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",heigh:"auto"}),s.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),N=function(e){var t=e.name,a=e.entries;return s.a.createElement("div",null,s.a.createElement("div",{className:"white f3"},"".concat(t,", Your Entry count is ....")),s.a.createElement("div",{className:"white f3"},a))},C=a(74),y=a.n(C),S=(a(296),{particles:{number:{value:100},density:{enable:!0,value_area:1e3}}}),k={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",password:"",entries:0,joined:new Date}},j=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),s=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*s,rightCol:n-t.right_col*n,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){console.log(t.target.value),e.setState({input:t.target.value})},e.onSubmit=function(){console.log("clicked"),console.log(e.state.input),e.setState({imageUrl:e.state.input}),fetch("http://localhost:5000/imageurl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("http://localhost:5000/image",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log("Sorry not detected",e)}))},e.onRouteChange=function(t){"signOut"===t?e.setState({initialState:k}):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=k,e}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(y.a,{className:"particles",params:S}),s.a.createElement(u,{isSignedIn:this.state.isSignedIn,onRouteChange:this.onRouteChange}),"home"===this.state.route?s.a.createElement("div",null,s.a.createElement(b,null),s.a.createElement(N,{name:this.state.user.name,entries:this.state.user.entries}),s.a.createElement(w,{onInputChange:this.onInputChange,onSubmit:this.onSubmit}),s.a.createElement(E,{box:this.state.box,imageUrl:this.state.imageUrl})):"signin"===this.state.route||"signOut"===this.state.route?s.a.createElement(f,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):s.a.createElement(v,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);a(297),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){e.exports=a.p+"static/media/brain.3d276786.png"},75:function(e,t,a){e.exports=a(298)},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.9d58b92a.chunk.js.map