import{b as f,o as t,j as n,F as s,k as r,e as d,h as l,t as u,n as c,c as m,p as k}from"./index-BUSVDCl2.js";const v={__name:"BookReviewC",props:{customerReviewRank:{type:Number,default:0},size:{type:String,default:"default"},fontClass:{type:String,default:"text-red-darken-3"}},setup(e){return(a,R)=>{const i=f("v-icon");return t(),n("div",null,[e.customerReviewRank<1?(t(),n(s,{key:0},[(t(),n(s,null,r(5,o=>d(i,{key:o,icon:"mdi-star-outline",size:e.size},null,8,["size"])),64)),l("span",{class:c(["font-weight-bold",e.fontClass])}," ( "+u(e.customerReviewRank.toFixed(1))+" ) ",3)],64)):(t(),n(s,{key:1},[(t(!0),n(s,null,r(Math.floor(e.customerReviewRank),o=>(t(),n(s,{key:o},[o%2===0?(t(),m(i,{key:0,icon:"mdi-star",size:e.size},null,8,["size"])):k("",!0)],64))),128)),e.customerReviewRank%2>=1?(t(),m(i,{key:0,icon:"mdi-star-half",size:e.size},null,8,["size"])):k("",!0),l("span",{class:c(["font-weight-bold",e.fontClass])}," ( "+u(e.customerReviewRank.toFixed(1))+" ) ",3)],64))])}}},w=(e,a)=>{if(!(!e||!a))return 100-e/a*100},z=(e,a="-")=>{if(e)return new Date(e).getFullYear()+a+("0"+(new Date(e).getMonth()+1)).slice(-2)};export{v as _,z as a,w as g};
