"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[786],{9134:function(e,t,n){n.r(t);var l=n(7294),a=[{id:1,name:"Matrix",country:9,collection:300,releasedOn:1999},{id:2,name:"Tere Nam",country:3,collection:101,releasedOn:2004},{id:3,name:"Bahubali",country:4,collection:500,releasedOn:1987}];t.default=function(){var e=(0,l.useState)([]),t=e[0],n=e[1],r=(0,l.useState)("albums"),c=r[0],o=r[1];return(0,l.useEffect)((function(){var e,t;e={country:"country",collection:"collection",releasedOn:"releasedOn"}[c],t=[].concat(a).sort((function(t,n){return n[e]-t[e]})),n(t)}),[c]),l.createElement("div",{className:"App"},l.createElement("select",{onChange:function(e){return o(e.target.value)}},l.createElement("option",{value:"country"},"Country"),l.createElement("option",{value:"collection"},"Collection"),l.createElement("option",{value:"releasedOn"},"Release Date")),t.map((function(e){return l.createElement("div",{key:e.id,style:{margin:"30px"}},l.createElement("div",null,"Movie: "+e.name),l.createElement("div",null,"Country: "+e.country),l.createElement("div",null,"Collection: "+e.collection),l.createElement("div",null,"Year of Release: "+e.releasedOn))})))}}}]);
//# sourceMappingURL=component---src-pages-filterpost-js-059fcf62883fc499068c.js.map