(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(56),r=a.n(i),m=(a(72),a(27)),c=a(28),u=a(31),s=a(29),o=a(32),d=a(2),p=a(4),h=a(10),v=(a(73),[{id:"1",tyyppi:"Polttoaine",summa:15.5,kilometrit:"26000",kulupaiva:"2019-06-01"},{id:"2",tyyppi:"Huolto",summa:350,kilometrit:"24400",kulupaiva:"2019-05-24"},{id:"3",tyyppi:"Polttoaine",summa:12.25,kilometrit:"24152",kulupaiva:"2019-05-13"},{id:"4",tyyppi:"Polttoaine",summa:10.82,kilometrit:"24001",kulupaiva:"2019-05-10"}]);a(74);var E=function(e){return l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"BIKERY"))},k=a(33),f=a.n(k),b=a(59),y=a.n(b);a(76);var _=function(e){var t,a=f()(e.data.kulupaiva),n="";if(e.data.kaudenalku&&e.data.kaudenloppu){var i=f()(e.data.kaudenalku),r=f()(e.data.kaudenloppu);n=i.format("MM, YYYY");var m=r.diff(i,"days");t=e.data.summa/m*30}return l.a.createElement("div",{className:"kulukortti"},l.a.createElement("div",{className:"kulukortti__ryhma"},l.a.createElement("div",{className:"kulukortti__rivi"},l.a.createElement("div",{className:"kulukortti__tyyppi"},e.data.tyyppi),l.a.createElement("div",{className:"kulukortti__summa"},e.data.summa.toFixed(2)," \u20ac")),l.a.createElement("div",{className:"kulukortti__rivi"},l.a.createElement("div",{className:"kulukortti__kulupaiva"},a.format("D.M.Y")),l.a.createElement("div",{className:"kulukortti__ajanjakso"},n)),l.a.createElement("div",{className:"kulukortti__rivi"},l.a.createElement("div",{className:"kulukortti__keskiarvo"},t?t.toFixed(2)+" \u20ac / kk":""),l.a.createElement("div",{className:"kulukortti__kilometrit"},e.data.kilometrit+" km"))),l.a.createElement("div",{className:"kulukortti__linkki"},l.a.createElement(p.b,{to:"/edit/"+e.data.id},l.a.createElement(y.a,null))))};a(164);var N=function(e){return l.a.createElement("div",{className:"content"},e.children)},j=a(38),O=(a(165),function(e){return e.join(" ")}),S=function(e){var t=e.className,a=void 0===t?"":t,n=e.primary,i=e.secondary,r=Object(j.a)(e,["className","primary","secondary"]);return l.a.createElement("button",Object.assign({type:"button",className:O(["button",a,n?"button--primary":"",i?"button--secondary":""])},r))},g=function(e){var t=e.className,a=void 0===t?"":t,n=Object(j.a)(e,["className"]);return l.a.createElement(S,Object.assign({className:O(["button--floating",a])},n))};var I=function(e){var t=e.data.map(function(e){return l.a.createElement(_,{data:e,key:e.id})});return l.a.createElement(N,null,t,l.a.createElement(p.b,{to:"/add"},l.a.createElement(g,{primary:!0},"+")))};var F=function(e){return l.a.createElement(N,null,l.a.createElement("h2",null,"Stats"))};a(166);var L=function(e){return l.a.createElement(N,null,l.a.createElement("div",{className:"settings"},l.a.createElement("h2",null,"Settings"),l.a.createElement("h3",null,"Kulutyypit "),l.a.createElement("div",{className:"settings__items"},e.selectList.map(function(e){return l.a.createElement("div",{key:e},e)}),l.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a=t.target.elements.kulutyyppi.value;e.onFormSubmit(a),t.target.elements.kulutyyppi.value=""}},l.a.createElement("div",{className:"settingsForm"},l.a.createElement("input",{type:"text",name:"kulutyyppi"}),l.a.createElement(S,{type:"submit",primary:!0},"LIS\xc4\xc4"))))))},C=a(64),D=a.n(C),w=a(61),x=a.n(w),K=a(62),P=a.n(K),Y=a(63),A=a.n(Y);a(167);var B=function(e){return l.a.createElement("div",{className:"menu"},l.a.createElement(p.b,{to:"/"},l.a.createElement("div",{className:"menu__nappi"},l.a.createElement(x.a,{nativeColor:"#fff"}))),l.a.createElement(p.b,{to:"/stats"},l.a.createElement("div",{className:"menu__nappi"},l.a.createElement(P.a,{nativeColor:"#fff"}))),l.a.createElement(p.b,{to:"/settings"},l.a.createElement("div",{className:"menu__nappi"},l.a.createElement(A.a,{nativeColor:"#fff"}))),l.a.createElement(p.b,{to:"/"},l.a.createElement("div",{className:"menu__nappi"},l.a.createElement(D.a,{nativeColor:"#fff"}))))},T=a(30),M=a(65),H=a(66),J=a.n(H),R=(a(170),function(e){function t(e){var a;Object(m.a)(this,t),a=Object(u.a)(this,Object(s.a)(t).call(this,e));var n=e.data?e.data:{tyyppi:"",summa:"",kilometrit:"",kulupaiva:""};return a.state={data:n},a.handleInputChange=a.handleInputChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a.handleCancel=a.handleCancel.bind(Object(d.a)(Object(d.a)(a))),a.handleDeleteItem=a.handleDeleteItem.bind(Object(d.a)(Object(d.a)(a))),a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState({data:Object(M.a)({},this.state.data,Object(T.a)({},n,a))})}},{key:"handleCancel",value:function(e){e.preventDefault(),this.props.history.goBack()}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("l\xe4het\xe4 lomake");var t=Object.assign({},this.state.data);t.summa=parseFloat(t.summa),t.id=t.id?t.id:J.a.v4(),this.props.onFormSubmit(t),this.props.history.push("/")}},{key:"handleDeleteItem",value:function(e){e.preventDefault(),this.props.onDeleteItem(this.state.data.id),this.props.history.push("/")}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"itemform"},l.a.createElement("div",{className:"itemform__row"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"name"},"Kulutyyppi"),l.a.createElement("select",{name:"tyyppi",value:this.state.data.tyyppi,onChange:this.handleInputChange},this.props.selectList.map(function(e){return l.a.createElement("option",{value:e,key:e},e)})))),l.a.createElement("div",{className:"itemform__row"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"summa"},"Summa"),l.a.createElement("input",{type:"number",name:"summa",step:"0.01",value:this.state.data.summa,onChange:this.handleInputChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"kulupaiva"},"Kulup\xe4iv\xe4"),l.a.createElement("input",{type:"date",name:"kulupaiva",size:"10",value:this.state.data.kulupaiva,onChange:this.handleInputChange}))),l.a.createElement("div",{className:"itemform__row"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"kilometrit"},"Kilometrit"),l.a.createElement("input",{type:"text",name:"kilometrit",value:this.state.data.kilometrit,onChange:this.handleInputChange}))),l.a.createElement("div",{className:"itemform__row"},l.a.createElement("div",null,l.a.createElement(S,{onClick:this.handleCancel},"PERU")),l.a.createElement("div",null,l.a.createElement(S,{type:"submit",secondary:!0},this.state.data.id?"TALLENNA":"LIS\xc4\xc4"))),this.props.onDeleteItem?l.a.createElement(S,{onClick:this.onDeleteItem},"POISTA"):""))}}]),t}(l.a.Component)),V=Object(h.d)(R);a(171);var W=function(e){return l.a.createElement(N,null,l.a.createElement("div",{className:"additem"},l.a.createElement("h2",null,"Lis\xe4\xe4 moottoripy\xf6r\xe4n kulu"),l.a.createElement(V,{onFormSubmit:e.onFormSubmit,selectList:e.selectList})))};a(172);var z=function(e){var t=e.data.findIndex(function(t){return t.id===e.match.params.id}),a=e.data[t];return l.a.createElement(N,null,l.a.createElement("div",{className:"edititem"},l.a.createElement("h2",null,"Kulun muokkaaminen"),l.a.createElement(V,{onFormSubmit:e.onFormSubmit,selectList:e.selectList,data:a,onDeleteItem:e.onDeleteItem})))},U=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={data:v,selectList:["Polttoaine","Huolto","Vakuutus","Varaosat"]},a.handleFormSubmit=a.handleFormSubmit.bind(Object(d.a)(Object(d.a)(a))),a.handleSelectListForm=a.handleSelectListForm.bind(Object(d.a)(Object(d.a)(a))),a.handleDeleteItem=a.handleDeleteItem.bind(Object(d.a)(Object(d.a)(a))),a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"handleFormSubmit",value:function(e){var t=this.state.data.slice(),a=t.findIndex(function(t){return t.id===e.id});a>=0?t[a]=e:t.push(e),t.sort(function(e,t){var a=new Date(e.kulupaiva);return new Date(t.kulupaiva).getTime()-a.getTime()}),this.setState({data:t})}},{key:"handleSelectListForm",value:function(e){var t=this.state.selectList.slice();t.push(e),t.sort(),this.setState({selectList:t})}},{key:"handleDeleteItem",value:function(e){var t=this.state.data.slice();t=t.filter(function(t){return t.id!==e}),this.setState({data:t})}},{key:"render",value:function(){var e=this;return l.a.createElement(p.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement(h.a,{path:"/",exact:!0,render:function(){return l.a.createElement(I,{data:e.state.data})}}),l.a.createElement(h.a,{path:"/stats",component:F}),l.a.createElement(h.a,{path:"/settings",render:function(){return l.a.createElement(L,{selectList:e.state.selectList,onFormSubmit:e.handleSelectListForm})}}),l.a.createElement(h.a,{path:"/add",render:function(){return l.a.createElement(W,{onFormSubmit:e.handleFormSubmit,selectList:e.state.selectList})}}),l.a.createElement(h.a,{path:"/edit/:id",render:function(t){return l.a.createElement(z,Object.assign({data:e.state.data,selectList:e.state.selectList,onFormSubmit:e.handleFormSubmit,onDeleteItem:e.handleDeleteItem},t))}}),l.a.createElement(B,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},67:function(e,t,a){e.exports=a(173)},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.58ce2f78.chunk.js.map