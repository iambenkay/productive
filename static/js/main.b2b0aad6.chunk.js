(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(28)},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(17),c=n.n(r),l=n(3),i=n(4),s=n(6),m=n(5),u=n(7),d=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).updateTheme=function(){document.querySelector("#overlay").style.display="block",document.querySelector(".bottom-sheet").style.marginBottom="0%"},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("button",{className:"main-btn btn text-center px-4 m-1",onClick:this.updateTheme},o.a.createElement("span",{className:"fi-paperclip"})," Add Project")}}]),t}(o.a.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"bottom-bar",className:"d-flex bg-white justify-content-center"},o.a.createElement(d,null))}}]),t}(o.a.Component),f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).onFormSubmit=function(e){e.preventDefault(),""!==n.refs.name.value.trim()?(n.props.db.put({_id:(new Date).toJSON(),name:n.refs.name.value,color:n.refs.color.value}),n.refs.name.value="",document.querySelector(".bottom-sheet").style.marginBottom="-100%",document.querySelector("#overlay").style.display="none"):n.setState({valid:!1})},n.onInputChange=function(){""===n.refs.name.value.trim()?n.setState({valid:!1}):n.setState({valid:!0})},n.onBSBlur=function(){n.setState({valid:!0})},n.state={valid:!0},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.valid;return o.a.createElement("div",{className:"bottom-sheet p-3",onBlur:this.onBSBlur},o.a.createElement("form",{className:"text-center pb-2",onSubmit:this.onFormSubmit},o.a.createElement("h3",{className:"my-3"},"New Project"),o.a.createElement("div",{className:"form-group text-left"},o.a.createElement("label",{htmlFor:"project-name"},"project name"),o.a.createElement("input",{type:"text",className:"form-control",onChange:this.onInputChange,ref:"name",id:"project-name",placeholder:"Enter project name"}),o.a.createElement("span",{className:"d-".concat(e?"none":"block"," text-danger"),id:"valid"},"Must specify name")),o.a.createElement("div",{className:"form-group text-left"},o.a.createElement("label",{htmlFor:"project-color"},"project color"),o.a.createElement("input",{type:"color",className:"form-control",ref:"color",defaultValue:"#0e6860",id:"project-color",placeholder:"Enter project color"})),o.a.createElement("button",{type:"submit",className:"btn btn-primary w-50 p-create my-2"},"Create")))}}]),t}(o.a.Component),b=(o.a.Component,n(18)),h=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"p-3 d-flex align-items-center project justify-content-between",style:{borderLeft:"5px solid ".concat(this.props.doc.color)}},this.props.doc.name,o.a.createElement("span",{className:"d-flex flex-row align-items-center justify-content-around"},o.a.createElement("span",{className:"mx-2 time d-flex align-items-center"},o.a.createElement("span",{className:"fi-play play pl-1"})),o.a.createElement("span",{className:"material-icons delete",onClick:function(){e.props.onDelete(e.props.doc)}},"delete")))}}]),t}(o.a.Component),v=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).deleteProject=function(e){window.confirm("Are you sure you want to delete?")&&n.db.remove(e)},n.db=new b.a("productive"),n.state={projects:null},n.db.changes({since:"now",live:!0,include_docs:!0,descending:!0}).on("change",function(e){n.componentDidMount()}).on("error",function(e){console.log(e)}),n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.db.allDocs({include_docs:!0,descending:!0}).then(function(e){return e}).then(function(t){e.setState({projects:t.rows})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.projects;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"toolbar d-flex align-items-center p-3"},o.a.createElement("h3",{className:"cursive"},"Productive")),o.a.createElement("div",{id:"overlay"}),o.a.createElement("div",{id:"main-panel"},t?t.map(function(t){return o.a.createElement(h,{key:t.doc._id,doc:t.doc,onDelete:e.deleteProject})}):""),o.a.createElement(p,null),o.a.createElement(f,{db:this.db}))}}]),t}(o.a.Component);n(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(v,null),document.getElementById("mobile")),document.querySelector("#overlay").addEventListener("click",function(){document.querySelector(".bottom-sheet").style.marginBottom="-100%",document.querySelector("#overlay").style.display="none"}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.b2b0aad6.chunk.js.map