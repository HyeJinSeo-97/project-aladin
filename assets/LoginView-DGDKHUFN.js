import{f as m,k as C,l as F,y as L,c as N,w as o,r as a,o as _,a as s,O as S,g as T,h as j,F as $,b as u,d as i,t as f,P as D}from"./index-kcm7-d0b.js";import{T as E}from"./TextFieldC-BwmcW7pw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const M=i("p",{class:"login-title"},"로그인",-1),O={class:"mb-5"},R={__name:"LoginView",setup(P){const v=[{key:"id",label:"아이디",type:"text",rules:[e=>!!e||"필수 입력 항목입니다."]},{key:"password",label:"비밀번호",type:"password",rules:[e=>!!e||"필수 입력 항목입니다.",e=>e&&e.length>=8||"비밀번호는 8자리 이상이어야 합니다."]}],d=m(),y=C(),g=F("$alert"),r=L({id:void 0,password:void 0}),n=m(!1),k=async()=>{const{valid:e}=await d.value.validate();e&&g.confirm({text:"로그인하시겠습니까?",confirm:{text:"로그인",cb:async()=>{const l=btoa(JSON.stringify(r.password));await D(l),y.push("/")}}})};return(e,l)=>{const w=a("v-img"),p=a("v-col"),b=a("v-label"),h=a("v-btn"),x=a("v-form"),V=a("v-row"),B=a("v-container");return _(),N(B,{class:"fill-height"},{default:o(()=>[s(V,{justify:"center"},{default:o(()=>[s(p,{cols:"12",class:"d-flex flex-column align-center"},{default:o(()=>[s(w,{src:"images/aladin_logo.jpg",alt:"알라딘",width:"200",class:"login-img"}),M]),_:1}),s(p,{cols:"10",sm:"5"},{default:o(()=>[s(x,{ref_key:"form",ref:d,onSubmit:S(k,["prevent"])},{default:o(()=>[(_(),T($,null,j(v,t=>i("div",{key:t.key,class:"mt-n3"},[s(b,{class:"pl-1 form-label"},{default:o(()=>[u(f(t.label),1)]),_:2},1024),s(E,{modelValue:r[t.key],"onUpdate:modelValue":c=>r[t.key]=c,variant:"outlined",rules:t.rules,"hide-details":!1,"append-icon":t.key==="password"?n.value?"mdi-eye":"mdi-eye-off":"","field-type":t.key==="password"&&n.value?"text":t.type,"onClick:append":l[0]||(l[0]=c=>n.value=!n.value)},{message:o(({message:c})=>[i("div",O,f(c),1)]),_:2},1032,["modelValue","onUpdate:modelValue","rules","append-icon","field-type"])])),64)),s(h,{block:"",type:"submit",color:"primary",class:"mt-5"},{default:o(()=>[u("로그인")]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})}}};export{R as default};
