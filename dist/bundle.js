!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t,...n){const o=document.createElement(e);return Object.keys(t).forEach(e=>o[e]=t[e]),n.forEach(e=>{let t=e;"string"==typeof e&&(t=document.createTextNode(e)),o.appendChild(t)}),o}function r(e,t,n={}){const o=new URL(e+t);return Object.keys(n).forEach(e=>o.searchParams.set(e,n[e])),o}function s(e,t,n){const o=Object.assign({},t,n);Object.keys(o).forEach(t=>e.setRequestHeader(t,o[t]))}n.r(t);var a=class{constructor({baseUrl:e,headers:t}){this.baseUrl=e,this.headers=t}get(e,t){const{headers:n,params:o,responseType:a="json",onDownloadProgress:p=(e=>console.log(e)),transformResponse:u=(e=>e)}=t,l=r(this.baseUrl,e,o);return new Promise((e,t)=>{const o=new XMLHttpRequest;o.open("GET",l,!0),o.responseType=a,s(o,this.headers,n),o.onprogress=(e=>p(e)),o.onloadend=(e=>p(e)),o.onload=(()=>e(u(o))),o.send(),o.timeout=3e4,o.ontimeout=(()=>t(new Error("server is not responding")))})}post(e,t){const{data:n,headers:o,responseType:a="json",onUploadProgress:p=(e=>console.log(e)),transformResponse:u=(e=>e)}=t,l=r(this.baseUrl,e);return new Promise((e,t)=>{const r=new XMLHttpRequest;r.open("POST",l,!0),r.responseType=a,s(r,this.headers,o),r.onprogress=(e=>p(e)),r.onloadend=(e=>p(e)),r.onload=(()=>e(u(r))),n?r.send(n):r.send(),r.timeout=3e4,r.ontimeout=(()=>t(new Error("server is not responding")))})}};document.addEventListener("DOMContentLoaded",function(){const e=o("input",{type:"file",name:"sampleFile"}),t=o("input",{type:"submit",value:"upload"}),n=o("form",{id:"uploadForm",encType:"multipart/form-data"},e,t),r=o("input",{type:"text",name:"sampleFile"}),s=o("input",{type:"submit",value:"download"}),p=o("form",{id:"downloadForm",encType:"multipart/form-data"},r,s),u=o("div",{className:"main-wrapper"},n,p);document.querySelector(".app").appendChild(u),document.getElementById("uploadForm").onsubmit=function(e){e.preventDefault();const t=new FormData;(new Headers).append("Content-Type","multipart/form-data"),t.append("sampleFile",e.target.sampleFile.files[0]),new a({baseUrl:"http://localhost:8000"}).post("/upload",{responseType:"blob",data:t}).then(e=>console.log(e))}})}]);