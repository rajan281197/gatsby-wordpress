"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[186],{9398:function(e,t,a){a.r(t);var l=a(7294),n=a(5809),r=a(384),s=a(6187),m=a(994),c=a(7408),o=a(1693),u=a(6594),i=a(2082),E=a(1085);t.default=function(e){e.data;var t=(0,l.useState)(!1),a=t[0],d=t[1],f=(0,l.useState)({firstname:"",user_email:"",lastname:""}),Z=f[0],g=f[1],p=(0,l.useState)({}),h=p[0],b=p[1],C=function(e){console.log("handleChange -> "+e.target.name+" : "+e.target.value),g((function(t){var a;return Object.assign({},t,((a={})[e.target.name]=e.target.value,a))}))},v=(0,l.useRef)();return l.createElement(n.Z,{pageTitle:""},l.createElement(l.Fragment,null,l.createElement(s.Z,{fluid:"md"},l.createElement(m.Z,null,l.createElement(c.Z,null,l.createElement(o.Z,{show:a,variant:"success"},l.createElement(o.Z.Heading,null,"Success"),l.createElement("p",null,"Thanks for the message! We Will Get Back to you Shortly."),l.createElement(u.Z,{onClick:function(){return d(!1)},variant:"outline-success"},"Close this alert")))),l.createElement(i.Z,{ref:v,onSubmit:function(e){e.preventDefault(),!function(){console.log("Validate the form....");var e={};return Z.firstname||(e.firstname="First name is required"),Z.lastname||(e.lastname="Last name is required"),Z.user_email?/\S+@\S+\.\S+/.test(Z.user_email)||(e.user_email="Email address is invalid"):e.user_email="Email address is required",b(e),0===Object.keys(e).length}()?d(!1):d(!0),r.ZP.sendForm("service_2yf5pvr","template_u2bz6lf",v.current,"user_ZgnIladycCsitIjLLw8UO").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))},style:{backgroundColor:"#C1F1DC"}},l.createElement("fieldset",{className:"scheduler"},l.createElement("legend",{className:"borderlegend"},"Contact US"),l.createElement(m.Z,null,l.createElement(c.Z,null,l.createElement(i.Z.Group,{className:"mb-3",controlId:"formBasicEmail"},l.createElement(i.Z.Label,null,"First Name"),l.createElement(i.Z.Control,{placeholder:"Enter First name",type:"text",name:"firstname",value:Z.firstname,onChange:C}),h.firstname&&l.createElement("p",{className:"text-danger"},h.firstname))),l.createElement(c.Z,null,l.createElement(i.Z.Group,{className:"mb-3",controlId:"formBasicPassword"},l.createElement(i.Z.Label,null,"Last Name"),l.createElement(i.Z.Control,{placeholder:"Enter Last name",type:"text",name:"lastname",value:Z.lastname,onChange:C}),h.lastname&&l.createElement("p",{className:"text-danger"},h.lastname)))),l.createElement(m.Z,null,l.createElement(c.Z,null,l.createElement(i.Z.Group,{className:"mb-3",controlId:"formBasicPassword"},l.createElement(i.Z.Label,null,"Email"),l.createElement(i.Z.Control,{placeholder:"Enter Email ID",type:"email",name:"user_email",value:Z.user_email,onChange:C}),h.user_email&&l.createElement("p",{className:"text-warning"},h.user_email))),l.createElement(c.Z,null,l.createElement(i.Z.Group,{className:"mb-3",controlId:"formBasicPassword"},l.createElement(i.Z.Label,null,"Phone Number"),l.createElement(i.Z.Control,{placeholder:"Enter Phone number",type:"tel",name:"phone"})))),l.createElement(i.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1"},l.createElement(i.Z.Label,null,"Message"),l.createElement(i.Z.Control,{as:"textarea",name:"message",rows:3})),l.createElement(i.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1"},l.createElement(E.Z,{sitekey:"6LcmbaMdAAAAAJz68enAze1ddTkz5V6seqyQ1--c",onChange:function(e){console.log("Captcha value:",e)},theme:"dark"})),l.createElement(u.Z,{variant:"primary",type:"submit",size:"lg"},"Send"))))))}}}]);
//# sourceMappingURL=component---src-pages-contactus-js-a97bc17a7a4a719c03f4.js.map