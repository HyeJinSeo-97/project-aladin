import{C as G}from"./ContainerC-N3I7K50a.js";import{I as H,J as Q,_ as W,f as h,c as S,w as l,o as v,a as t,b as a,d as e,t as _,g as k,F as b,h as V,i as R,m as X,r as n,s as Z,v as $}from"./index-0a48fI3V.js";import{a as ee,m as te}from"./main-WaYNzA_x.js";import{T as le}from"./TextFieldC-CLRw02pC.js";const oe=te.APIS.LOOK_UP,se=c=>new Promise((d,i)=>{ee.get(oe,c).then(m=>{const{errorCode:o}=m.data;o?i(m.data):d(m.data)}).catch(m=>{i(m)})}),ae=H("lookUp",()=>({actions:{getLookUp:d=>se(d).then(i=>i==null?void 0:i.item[0]).catch(i=>{Q.notice({type:"error",text:i.errorMessage||i.message})})}})),I="like",ne=c=>{const d=z();d.push(c),sessionStorage.setItem(I,JSON.stringify(d))},z=()=>sessionStorage.getItem(I)?JSON.parse(sessionStorage.getItem(I)):[],ie=c=>{const d=z();if(d.length<1)return;const i=d.findIndex(m=>m===c);i<0||(d.splice(i,1),sessionStorage.setItem(I,JSON.stringify(d)))},r=c=>(Z("data-v-ce2181b6"),c=c(),$(),c),ce={class:"d-flex align-center justify-space-between my-3"},de={class:"d-flex justify-space-between ga-2"},re={class:"w-100 d-flex flex-column align-start ga-1"},ue={class:"d-flex align-center"},_e={class:"book-title text-break"},ve={class:"book-author text-break"},me={class:"book-desc text-break text-grey-darken-2"},pe=r(()=>e("th",null,[e("div",null,"정가"),e("div",{class:"font-weight-bold",style:{"font-size":"1.25rem"}},"판매가")],-1)),fe={class:"text-left"},ge={class:"font-weight-bold mr-1",style:{"font-size":"1.25rem"}},he={class:"text-grey-darken-2",style:{"font-size":"1rem"}},ke=r(()=>e("th",null,"마일리지",-1)),be=r(()=>e("th",null,"배송료",-1)),xe=r(()=>e("div",null,"유료 (도서 1만5천원 이상 무료)",-1)),ye={class:"ml-n1 text-orange"},we=r(()=>e("th",null,"Sales Point",-1)),Se=r(()=>e("th",null,"평점",-1)),Ie={class:"font-weight-bold text-red-darken-3"},Le={class:"font-weight-bold text-red-darken-3"},Ve={class:"d-flex align-center"},Re=r(()=>e("span",{class:"mx-1"},"·",-1)),ze=r(()=>e("span",{class:"mx-1"},null,-1)),Ce=r(()=>e("th",null,"결제 헤택",-1)),Ue={class:"mt-1"},Ne={class:"d-flex align-center ga-5"},Be=r(()=>e("div",null,[e("strong",{class:"d-block"},"모바일팝 4% 즉시 할인"),a(" 4/1~6/30 (1인多회) · 모바일팝 앱 이용자는 무제한 · 300원 이상 결제해 주세요 ")],-1)),Pe={class:"d-flex align-center ga-5 mt-1"},Ke=r(()=>e("div",null,[e("strong",{class:"d-block"},"네이버페이 5천 포인트 적립"),a(" 4/1~4/30 (1천명 추첨) · 5만원 이상 결제해 주세요 · 포인트 적립일 : 5/15 주세요 ")],-1)),Oe=r(()=>e("div",{class:"mt-1"},[e("p",null,"* 2~3개월 무이자 : 신한, 국민,현대,롯데,하나,삼성"),e("p",null,"* 2~4개월 무이자 : 농협, 비씨,우리")],-1)),Fe=r(()=>e("div",{class:"mt-1"},[e("p",null,"670원")],-1)),Ae={__name:"ProductView",props:{isbn13:[Number,String]},setup(c){const d=[{label:"읽고 싶어요",value:0},{label:"읽고 있어요",value:1},{label:"읽었어요",value:2}],i=ae(),{actions:m}=i,o=h(void 0),C=h(!1),U=h(5),N=h(1),B=h(void 0),g=h(!1),x=c;(async()=>{const P={itemIdType:"ISBN",ItemId:x.isbn13,Cover:"Big"};o.value=await m.getLookUp(P),z().findIndex(u=>u===x.isbn13)>-1&&(g.value=!0)})();const O=()=>{g.value?(g.value=!1,ie(x.isbn13)):(g.value=!0,ne(x.isbn13))};return(P,p)=>{const y=n("v-img"),u=n("v-btn"),F=n("v-label"),f=n("v-sheet"),w=n("v-divider"),K=n("v-chip"),L=n("v-icon"),A=n("v-rating"),E=n("v-card-title"),J=n("v-radio"),T=n("v-radio-group"),j=n("v-card-actions"),D=n("v-card"),M=n("v-menu"),Y=n("v-table");return v(),S(G,null,{default:l(()=>[o.value?(v(),S(f,{key:0,class:"my-border d-flex ga-15",style:{padding:"28px 50px 26px 49px"}},{default:l(()=>[t(f,null,{default:l(()=>[t(y,{src:o.value.cover,alt:"표지",width:"200",height:"283"},null,8,["src"]),t(u,{block:"",variant:"outlined",color:"primary",size:"small",class:"mt-3","prepend-icon":"mdi-book-open-blank-variant-outline"},{default:l(()=>[a(" 미리보기 ")]),_:1}),e("div",ce,[t(F,{class:"font-size-85"},{default:l(()=>[a("수량")]),_:1}),t(f,{width:"80%"},{default:l(()=>[t(le,{modelValue:N.value,"onUpdate:modelValue":p[0]||(p[0]=s=>N.value=s),type:"number",variant:"outlined"},null,8,["modelValue"])]),_:1})]),t(u,{block:"",color:"pink"},{default:l(()=>[a("장바구니")]),_:1}),t(u,{block:"",color:"red",class:"mt-1 mb-3"},{default:l(()=>[a("바로구매")]),_:1}),e("div",de,[t(u,{variant:"outlined",size:"small",width:"48%","prepend-icon":"mdi-gift"},{default:l(()=>[a(" 선물하기 ")]),_:1}),t(u,{variant:"outlined",color:g.value?"red":"default",size:"small",width:"48%","prepend-icon":g.value?"mdi-heart":"mdi-heart-outline",onClick:O},{default:l(()=>[a(" 좋아요 ")]),_:1},8,["color","prepend-icon"])])]),_:1}),t(f,{class:"d-flex flex-column align-start text-left ga-1"},{default:l(()=>[e("div",null,_(o.value.categoryName),1),e("div",re,[e("div",ue,[e("div",_e,_(o.value.title),1),t(w,{vertical:"",inset:"",class:"mx-3"}),e("div",ve,_(o.value.author),1)]),e("div",me,_(o.value.description),1)]),t(w,{class:"w-100 my-5"}),t(f,{class:"d-flex flex-column align-start"},{default:l(()=>[t(Y,null,{default:l(()=>[e("tbody",null,[e("tr",null,[pe,e("td",fe,[e("div",null,_(o.value.priceStandard.toLocaleString("ko-KR")),1),e("div",null,[e("span",ge,_(o.value.priceSales.toLocaleString("ko-KR")),1),e("span",he," ( "+_(100-o.value.priceSales/o.value.priceStandard*100)+"% 할인 ) ",1)])])]),e("tr",null,[ke,e("td",null,_(o.value.mileage)+"원(5%) + 멤버십(3~1%) + 5만원이상 구매시 2,000원",1)]),e("tr",null,[be,e("td",null,[xe,e("div",ye,[t(K,{color:"orange",size:"small"},{default:l(()=>[a("양탄자배송")]),_:1}),a(" 밤 10시까지 주문하면 내일 아침 7시 출근전 배송 (중구 서소문로 89-31 기준) 지역변경 ")])])]),e("tr",null,[we,e("td",null,_(o.value.salesPoint.toLocaleString("ko-KR"))+"점",1)]),e("tr",null,[Se,e("td",null,[e("div",null,[o.value.customerReviewRank<1?(v(),k(b,{key:0},[(v(),k(b,null,V(5,s=>t(L,{key:s,icon:"mdi-star-outline"})),64)),e("span",Ie," ( "+_(o.value.customerReviewRank.toFixed(1))+" ) ",1)],64)):(v(),k(b,{key:1},[(v(!0),k(b,null,V(Math.floor(o.value.customerReviewRank),s=>(v(),k(b,{key:s},[s%2===0?(v(),S(L,{key:0,icon:"mdi-star"})):R("",!0)],64))),128)),o.value.customerReviewRank%2>=1?(v(),S(L,{key:0,icon:"mdi-star-half"})):R("",!0),e("span",Le," ( "+_(o.value.customerReviewRank.toFixed(1))+" ) ",1)],64))]),e("div",Ve,[t(u,{variant:"plain",class:"pa-0",size:"small"},{default:l(()=>[a("100자평(0)")]),_:1}),Re,t(u,{variant:"plain",class:"pa-0",size:"small"},{default:l(()=>[a("리뷰(0)")]),_:1}),ze,t(M,{modelValue:C.value,"onUpdate:modelValue":p[3]||(p[3]=s=>C.value=s),offset:"10","close-on-content-click":!1},{activator:l(({props:s})=>[t(K,X(s,{color:"primary",size:"small"}),{default:l(()=>[a(" 리뷰를 남겨주세요! ")]),_:2},1040)]),default:l(()=>[t(D,{"min-width":"300"},{default:l(()=>[t(E,{class:"text-center border-b py-1"},{default:l(()=>[t(A,{modelValue:U.value,"onUpdate:modelValue":p[1]||(p[1]=s=>U.value=s),color:"orange",density:"compact"},null,8,["modelValue"])]),_:1}),t(j,{class:"py-0"},{default:l(()=>[t(T,{modelValue:B.value,"onUpdate:modelValue":p[2]||(p[2]=s=>B.value=s),"hide-details":"",class:"review-radio-group"},{default:l(()=>[(v(),k(b,null,V(d,(s,q)=>t(J,{key:q,label:s.label,value:s.value,density:"compact"},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])])]),e("tr",null,[Ce,e("td",null,[t(f,{class:"py-3"},{default:l(()=>[t(u,{variant:"tonal",color:"purple",size:"x-small"},{default:l(()=>[a(" 카드/간편결제 할인 ")]),_:1}),e("div",Ue,[e("div",Ne,[e("div",null,[t(y,{src:"/images/mobilepop.jpg",alt:"모바일팝",width:"60"})]),Be]),e("div",Pe,[e("div",null,[t(y,{src:"/images/93x58_240131.jpg",alt:"네이버페이",width:"60"})]),Ke])])]),_:1}),t(w),t(f,{class:"py-3"},{default:l(()=>[t(u,{variant:"tonal",color:"red",size:"x-small"},{default:l(()=>[a(" 무이자 할부 ")]),_:1}),Oe]),_:1}),t(w),t(f,{class:"py-3"},{default:l(()=>[t(u,{variant:"tonal",color:"green",size:"x-small"},{default:l(()=>[a(" 소득공제 ")]),_:1}),Fe]),_:1})])])])]),_:1})]),_:1})]),_:1})]),_:1})):R("",!0)]),_:1})}}},Me=W(Ae,[["__scopeId","data-v-ce2181b6"]]);export{Me as default};
