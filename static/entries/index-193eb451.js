import{_ as l,o as c,f as u,g as o,t as h,h as k,i as m,F as I,j as F,k as d,p as v,l as y,s as $,c as g,m as B,n as C}from"../chunks/vendor-5fd4ea64.js";import{S as R,u as f}from"../chunks/common-6323595d.js";const j={name:"RadioButton",emits:["changeRating"],setup(e,{emit:t}){return{updateRating:n=>{const s=n.target.value;t("changeRating",s)}}},props:{name:{type:String,default:"rating",required:!0},value:{type:Number,default:1,required:!0},checked:{type:Boolean,default:!1,required:!0}},methods:{inputId(){return`${this.name}-value-${this.value}`}}},z=["name","id","value","checked"],A=["for"];function N(e,t,a,n,s,r){return c(),u("div",null,[o("input",{type:"radio",name:a.name,id:r.inputId(),value:a.value,checked:a.checked,onChange:t[0]||(t[0]=(...i)=>n.updateRating&&n.updateRating(...i))},null,40,z),o("label",{for:r.inputId(),class:"bg-neutral-600 text-neutral-400"},h(a.value),9,A)])}const V=l(j,[["render",N],["__scopeId","data-v-22322064"]]);const q={name:"RatingForm",components:{SvgIcon:R,RadioButton:V},setup(){let e=k();const t=f();return{sendForm:()=>{e.value?(t.updateRating(e.value),setTimeout(()=>{t.$reset()},3e3)):alert("You should choose a rating before send!")},updateRating:s=>{e.value=s},rating:e}}},w=e=>(v("data-v-ec319695"),e=e(),y(),e),P={class:"form"},T={class:"favorite bg-neutral-600"},Y=w(()=>o("div",null,[o("h1",{class:"fw-bold fs-800"},"How did we do?")],-1)),J=w(()=>o("div",null,[o("p",{class:"text-neutral-300"}," Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! ")],-1)),O={class:"flex flex-direction-row justify-content-space-between"};function X(e,t,a,n,s,r){const i=d("svg-icon"),p=d("radio-button");return c(),u("div",P,[o("div",null,[o("div",T,[m(i,{name:"icon-star"})])]),Y,J,o("div",O,[(c(),u(I,null,F(5,_=>m(p,{key:_,name:"rating",value:_,checked:_==n.rating,modelValue:n.rating,"onUpdate:modelValue":t[0]||(t[0]=b=>n.rating=b),onChangeRating:n.updateRating},null,8,["value","checked","modelValue","onChangeRating"])),64))]),o("div",null,[o("button",{type:"submit",onClick:t[1]||(t[1]=(..._)=>n.sendForm&&n.sendForm(..._)),class:"bg-primary-400 text-neutral-100 fw-bold"}," Submit ")])])}const D=l(q,[["render",X],["__scopeId","data-v-ec319695"]]);const E={name:"ShowResult",components:{SvgIcon:R},setup(){const e=f(),{rating:t}=$(e);return{rating:t}}},x=e=>(v("data-v-89467f2d"),e=e(),y(),e),H={class:"result"},L={class:"flex justify-content-center"},U={class:"flex justify-content-center"},W={class:"choice bg-neutral-600 text-primary-400"},G=x(()=>o("div",{class:"flex justify-content-center"},[o("h1",{class:"fs-800 fw-bold"},"Thank You!")],-1)),K=x(()=>o("div",{class:"flex justify-content-center"},[o("p",{class:"text-neutral-400 text-center"}," We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate tot get in touch! ")],-1));function M(e,t,a,n,s,r){const i=d("svg-icon");return c(),u("div",H,[o("div",L,[m(i,{name:"illustration-thank-you"})]),o("div",U,[o("span",W," You selected "+h(n.rating)+" out of 5 ",1)]),G,K])}const Q=l(E,[["render",M],["__scopeId","data-v-89467f2d"]]);const Z={name:"RatingComponent",components:{RatingForm:D,ShowResult:Q},setup(){const e=f(),{showForm:t}=$(e);return{showForm:t}}},ee={role:"main",class:"bg-neutral-700"};function te(e,t,a,n,s,r){const i=d("rating-form"),p=d("show-result");return c(),u("main",ee,[n.showForm?(c(),g(i,{key:0,class:"animate__animated animate__flipInX"})):(c(),g(p,{key:1,class:"animate__animated animate__flipInX"}))])}const ne=l(Z,[["render",te]]);const oe={name:"App",components:{RatingComponent:ne},setup(){return{}}};function ae(e,t,a,n,s,r){const i=d("rating-component");return c(),g(i)}const se=l(oe,[["render",ae]]),S=B();S.use(e=>{const t=e.store.$id,a={serialize:JSON.stringify,deserialize:JSON.parse},n=a.deserialize(window.localStorage.getItem(t));n&&e.store.$patch(n),e.store.$subscribe((s,r)=>{window.localStorage.setItem(t,a.serialize(r))})});const ie=C(se);ie.use(S).mount("#app");