var j=Object.defineProperty;var Q=(e,s,t)=>s in e?j(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var O=(e,s,t)=>(Q(e,typeof s!="symbol"?s+"":s,t),t);import{r as v,o as u,c as h,a,b as l,w as g,d as _,e as B,t as A,F as $,f as x,g as m,h as X,i as Z,u as ee,B as P,j as te,k as ne,l as se,m as oe,p as ae,n as ie}from"./vendor.ada3c6e4.js";const re=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}};re();var q,E,p={GlobalStorage:(q=class{},O(q,"store",{addUsers:{amount:0}}),q),PasswordHashes:(E=class{},O(E,"hashes",{}),E),saveTemplateAsFile:(e,s)=>{const t=new Blob([JSON.stringify(s,null,2)],{type:"text/json"}),r=document.createElement("a");r.download=e,r.href=window.URL.createObjectURL(t),r.dataset.downloadurl=["text/json",r.download,r.href].join(":");const n=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});r.dispatchEvent(n),r.remove()},copy:function(e){var s=document.createElement("textarea");s.innerHTML=e,document.body.appendChild(s),s.select();var t=document.execCommand("copy");return document.body.removeChild(s),t},setupFormComponentWatcher:(e,s,t)=>{e!==void 0&&"methods"in e&&"watchFormData"in e.methods&&s(t,async(r,n)=>{e.methods.watchFormData(r,n)})},uid:()=>(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,""),getFormKey:(e,s,t)=>e+"_"+s+"_"+t,getFormValue:function(e,s,t,r){return s[this.getFormKey(e,t,r)]}},y=(e,s)=>{for(const[t,r]of s)e[t]=r;return e};const le={},ce={class:"navbar navbar-expand-lg navbar-light fixed-top py-3",id:"mainNav"},de={class:"container px-4 px-lg-5"},ue=_("Fuel Ignition \u{1F680}"),he=B('<button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarResponsive"><ul class="navbar-nav ms-auto my-2 my-lg-0"><li class="nav-item"><a class="nav-link" href="#/">Start</a></li><li class="nav-item"><a class="nav-link" href="#about">About</a></li><li class="nav-item"><a class="nav-link" href="https://microos.opensuse.org/" target="_blank" rel="noopener noreferrer">MicroOS</a></li><li class="nav-item"><a class="nav-link" href="https://kubic.opensuse.org/" target="_blank" rel="noopener noreferrer">Kubic</a></li><li class="nav-item"><a class="nav-link" href="https://coreos.github.io/ignition/" target="_blank" rel="noopener noreferrer">Ignition Docs</a></li></ul></div>',2);function pe(e,s){const t=v("router-link");return u(),h("nav",ce,[a("div",de,[l(t,{class:"navbar-brand",to:"/"},{default:g(()=>[ue]),_:1}),he])])}var me=y(le,[["render",pe]]);const fe={},ve={class:"page-section bg-primary",id:"about"},ge=B('<div class="container px-4 px-lg-5"><div class="row gx-4 gx-lg-5 justify-content-center"><div class="col-lg-8 text-center"><h2 class="text-white mt-0">We&#39;ve got what you need!</h2><hr class="divider divider-light"><p class="text-white-75 mb-4">Looking for an easy way to write and edit Ignition configs? Look no further than Fuel Ignition! Our user-friendly web application makes it a breeze to create the config files you need. No strings attached!</p><a class="btn btn-light btn-xl" href="/fuel-ignition/edit">Get Started!</a></div></div></div>',1),_e=[ge];function ye(e,s){return u(),h("section",ve,_e)}var be=y(fe,[["render",ye]]);const we={class:"bg-light py-5"},$e={class:"container px-4 px-lg-5"},xe={class:"small text-center text-muted"},ke={setup(e){return(s,t)=>{const r=v("router-view");return u(),h($,null,[l(me),l(r),l(be),a("footer",we,[a("div",$e,[a("div",xe," Copyright \xA9 "+A(new Date().getFullYear())+" \u2013 built with \u{1F49A}, Vue, and openSUSE ",1)])])],64)}}},Se={},Fe={class:"masthead"},Ce={class:"container px-4 px-lg-5 h-75"},Ke={class:"row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center"},Te=a("div",{class:"col-lg-8 align-self-end"},[a("h1",{class:"text-white font-weight-bold"},[_(" Ignition & Combustion "),a("br"),_("Config Generator ")]),a("hr",{class:"divider"})],-1),Oe={class:"col-lg-8 align-self-baseline"},Ae=a("p",{class:"text-white-75 mb-5"},[_(" Easily generate new or edit existing Ignition configs. "),a("br"),_("No more fiddling around with JSON or Butane. ")],-1),Ie={class:"container-fluid"},Ve={class:"row"},Le={class:"col-xs-6 mb-3"},Ue=_("Let's get started"),qe={class:"col-xs-6"},Ee=_("Edit Existing Config");function Ne(e,s){const t=v("router-link");return u(),h("header",Fe,[a("div",Ce,[a("div",Ke,[Te,a("div",Oe,[Ae,a("div",Ie,[a("div",Ve,[a("div",Le,[l(t,{class:"btn btn-primary btn-xl",to:"/edit"},{default:g(()=>[Ue]),_:1})]),a("div",qe,[l(t,{class:"btn btn-primary btn-xl",to:"/import"},{default:g(()=>[Ee]),_:1})])])])])])])])}var Be=y(Se,[["render",Ne]]),Pe="/fuel-ignition/assets/undraw_programming_re_kg9v.a835d9b3.svg";const He={style:{width:"100% !important"},class:"expandable-comp text-white"},Re={key:0},Je={key:0,class:"mb-5"},Me=a("hr",{class:"divider"},null,-1),ze=[Me],k={props:{displayAtLeastOne:{type:Boolean,default:!0},maxComponents:{type:Number,default:-1},title:String},setup(e){const s=e,t=x(s.displayAtLeastOne?1:0);return(r,n)=>(u(),h("div",He,[s.title!==void 0?(u(),h("h4",Re,A(s.title),1)):m("",!0),(u(!0),h($,null,X(t.value,o=>(u(),h("div",{key:o},[Z(r.$slots,"default"),o<t.value?(u(),h("div",Je,ze)):m("",!0)]))),128)),e.maxComponents===-1||e.maxComponents!==-1&&e.maxComponents>t.value?(u(),h("button",{key:1,class:"btn btn-primary mr-5 mb-5",onClick:n[0]||(n[0]=o=>t.value++)}," \xA0\xA0\xA0Add\xA0\xA0\xA0 ")):m("",!0),t.value>1||!s.displayAtLeastOne&&t.value>0?(u(),h("button",{key:2,class:"btn btn-danger ml-5 mr-5 mb-5",onClick:n[1]||(n[1]=o=>t.value>1||!s.displayAtLeastOne?t.value--:t.value)}," Remove ")):m("",!0)]))}},We={key:0,class:"sk-folding-cube"},Ge=a("div",{class:"sk-cube1 sk-cube"},null,-1),De=a("div",{class:"sk-cube2 sk-cube"},null,-1),Ye=a("div",{class:"sk-cube4 sk-cube"},null,-1),je=a("div",{class:"sk-cube3 sk-cube"},null,-1),Qe=[Ge,De,Ye,je],Xe={props:["ignJson"],setup(e){const s=e;x(!1),String.prototype.replaceAt=function(i,c){return this.substring(0,i)+c+this.substring(i+c.length)};function t(i){return[...new Uint8Array(i)].map(c=>c.toString(16).padStart(2,"0")).join("")}function r(i){for(var c="",d=0;d<i.length;d++)c+=i.charCodeAt(d).toString(16);return c}let n=async function(){this.loading=!0,console.log("loading: "+this.loading);let i=r(JSON.stringify(s.ignJson)),c=JSON.stringify(s.ignJson).length;console.log(c.toString(16)),console.log("flipped tuple: "+(c>255));let d=c.toString(16);if(d.length%2!=0&&(d="0"+d),c>255){console.log(d);let C=d.length/2;d=d.substring(C)+d.substring(0,C)}console.log(d);let f=await fetch("src/assets/template/ignition-new.img").then(C=>C.blob());console.log(f),console.log("jsonSize(dec): "+JSON.stringify(s.ignJson).length),console.log("jsonSize(hex): "+d);let b=61564*2,G=await f.arrayBuffer().then(),T=t(G);console.log(new Blob([T]).size),console.log(T.slice(b,b+4));let S=T.replace("6c6f72656d697073756d",i).replaceAt(b,d);if(console.log(S.slice(b,b+4)),S.length%2){alert("Error: cleaned hex string length is odd.");return}JSON.stringify(s.ignJson).length>2048&&alert(`Warning. The resulting image is most likely corrupt, since this config is quite large.

If you have problems, kindly try again with a smaller config. We are actively working on fixing this limitation.
Fuel-Ignition is still in active development.`);for(var N=new Array,F=0;F<S.length/2;F++){var D=S.substr(F*2,2);N[F]=parseInt(D,16)}this.loading=!1;var Y=new Uint8Array(N),w=window.document.createElement("a");w.href=window.URL.createObjectURL(new Blob([Y],{type:"application/octet-stream"})),w.download="ignition-"+o[Math.floor(Math.random()*o.length)].toLowerCase()+".img",document.body.appendChild(w),w.click(),document.body.removeChild(w)},o=["Alfa","Bravo","Charlie","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu","Nico","Ignaz"];return(i,c)=>(u(),h($,null,[a("button",{class:"btn btn-primary mb-4",style:{width:"100%"},onClick:c[0]||(c[0]=d=>ee(n)())}," Convert and Download "),this.loading?(u(),h("div",We,Qe)):m("",!0)],64))}},K="user",Ze={setup:()=>{const e=p.uid();return{uid:e,Utils:p,formKey:s=>p.getFormKey(K,s,e)}},methods:{encodeToIgn:function(e,s){p.GlobalStorage.store.addUsers.amount=0;const t=(n,o)=>p.getFormValue(K,s,n,o),r=K+"_name_";Object.keys(s).filter(n=>n.includes(r)).map(n=>n.replace(r,"")).forEach(n=>{if(e.passwd="passwd"in e?e.passwd:{users:[]},p.GlobalStorage.store.addUsers.amount++,t("name",n)!=="root"&&(p.GlobalStorage.store.addUsers.onlyUsernameRoot=!1),t("runs_on_suse",n)===!0&&(e.storage===void 0&&(e.storage={}),e.storage.filesystems===void 0&&(e.storage.filesystems=[]),e.storage.filesystems.push({device:"/dev/disk/by-label/ROOT",format:"btrfs",mountOptions:["subvol=/@/home"],path:"/home",wipeFilesystem:!1})),e.passwd.users!==void 0){const o=t("ssh_keys",n),i=o!==void 0&&o.includes(",")?o.replaceAll(" ","").split(","):[o],c=t("passwd",n)===""||t("passwd",n)===void 0;e.passwd.users.push({name:t("name",n),passwordHash:c?void 0:p.PasswordHashes.hashes[n],sshAuthorizedKeys:o===void 0||o===""?void 0:i})}})},watchFormData:async function(e,s){const t=(r,n)=>e[p.getFormKey(K,r,n)];Object.keys(e).filter(r=>r.includes("user_passwd")&&!r.includes("hashed")).map(r=>r.replace("user_passwd_","")).forEach(async r=>{const n=t("passwd",r),o=t("hash_type",r),i=n===""||n===void 0,c=e["user_passwd_"+r]===s["user_passwd_"+r];i||c||et(n,o).then(d=>p.PasswordHashes.hashes[r]=d)})}}};async function et(e,s){if(s==="Hash Yourself")return e;var t=await P.genSalt(10).then();return P.hash(e,t)}const tt={class:"users"},nt={key:0};function st(e,s,t,r,n,o){const i=v("FormKit");return u(),h("div",tt,[l(i,{class:"form-control",name:e.formKey("name"),label:"Username (required)",placeholder:"write your os username here",validation:"required","validation-behavior":"live",value:"root",help:"A new user will be created, if it does not exist."},null,8,["name"]),l(i,{name:e.formKey("hash_type"),label:"Password Hash Type",placeholder:"bcrypt",type:"select",validation:"optional","validation-behavior":"live",value:"bcrypt",options:["bcrypt","Hash Yourself"],help:"The way you want your password to be hashed."},null,8,["name"]),l(i,{name:e.formKey("passwd"),label:"Password",placeholder:"write the corresponding password here",type:"password",validation:"optional","validation-behavior":"live",help:"Your password is never sent over the internet, everything is local."},null,8,["name"]),l(i,{name:e.formKey("ssh_keys"),label:"SSH Public Keys",placeholder:"write the corresponding ssh keys here, separated by commas, spaces are ignored",type:"textarea",validation:"optional","validation-behavior":"live",help:"Your keys are never sent over the internet, everything is local."},null,8,["name"]),e.Utils.GlobalStorage.store.addUsers.amount==0?(u(),h("div",nt,[l(i,{name:e.formKey("runs_on_suse"),label:"Mount /home",validation:"required",type:"checkbox","validation-behavior":"live",help:"Required on SUSE related systems for creating users not named root. Otherwise, the system will boot in emergency mode"},null,8,["name"])])):m("",!0)])}var H=y(Ze,[["render",st]]);const I="create_file",ot={setup:()=>{const e=p.uid();return{sourceType:x("data"),formKey:t=>p.getFormKey(I,t,e)}},methods:{encodeToIgn:function(e,s){const t=(o,i)=>p.getFormValue(I,s,o,i),r=function(o){return window.btoa(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g,function(c,d){return String.fromCharCode("0x"+d)}))},n=I+"_path_";Object.keys(s).filter(o=>o.includes(n)).map(o=>o.replace("create_file_path_","")).forEach(o=>{e.storage===void 0&&(e.storage={}),e.storage.files===void 0&&(e.storage.files=[]);let i,c={};switch(t("source_type",o)){case"data":let d=t("data_content",o);i="data:text/plain;charset=utf-8;base64,"+r(d===void 0?"":d);break;case"data-vagrant":let f=t("data_vagrant_content",o);i="data:,"+encodeURIComponent(f===void 0?"":f);break;case"https":i=t("https_content",o);break;case"http":i=t("http_content",o);let b=t("http_verification",o);b&&(c.verification={hash:b});break;case"tftp":case"s3":case"gs":i=t("tftp_s3_gs_content",o);break}e.storage.files.push(Object.assign({path:t("path",o),mode:parseInt(t("mode",o)),overwrite:t("overwrite",o),contents:{source:i}},c))})}}},at={class:"createfiles"},it={class:"source"},rt={key:0,class:"data"},lt={key:1,class:"data-vagrant"},ct={key:2,class:"https"},dt={key:3,class:"http"},ut={key:4,class:"tftp-s3-gs"};function ht(e,s,t,r,n,o){const i=v("FormKit");return u(),h("div",at,[l(i,{name:e.formKey("path"),label:"File Path (required)",placeholder:"path on the filesystem",validation:"required","validation-behavior":"live",value:"/etc/someconfig",help:"The absolute path to the file"},null,8,["name"]),l(i,{name:e.formKey("overwrite"),label:"Overwrite",placeholder:"path on the filesystem",validation:"required",type:"checkbox","validation-behavior":"live",help:"Whether to delete preexisting nodes at the path"},null,8,["name"]),l(i,{name:e.formKey("mode"),label:"File Mode (required)",type:"number",value:"420",validation:"required","validation-behavior":"live",help:"The file's permission mode. Note that the mode must be properly specified as a decimal value (i.e. 0644 -> 420)."},null,8,["name"]),a("div",it,[l(i,{type:"select",name:e.formKey("source_type"),modelValue:e.sourceType,"onUpdate:modelValue":s[0]||(s[0]=c=>e.sourceType=c),label:"Scheme for file contents url (use data for plain text)",help:"If source is omitted and a regular file already exists at the path, Ignition will do nothing. If source is omitted and no file exists, an empty file will be created.",options:["data","data-vagrant","https","http","tftp","s3","gs","omit"]},null,8,["name","modelValue"])]),e.sourceType==="data"?(u(),h("div",rt,[l(i,{name:e.formKey("data_content"),label:"File Content Data (required)",placeholder:"write the file content here, spaces, newlines etc. are preserved",type:"textarea",validation:"required","validation-behavior":"live",help:"Leaving this empty will create an empty file"},null,8,["name"])])):m("",!0),e.sourceType==="data-vagrant"?(u(),h("div",lt,[l(i,{name:e.formKey("data_vagrant_content"),label:"File Content Data (required)",placeholder:"write the file content here, spaces, newlines etc. are preserved",type:"textarea",validation:"required","validation-behavior":"live",help:"Leaving this empty will create an empty file"},null,8,["name"])])):m("",!0),e.sourceType==="https"?(u(),h("div",ct,[l(i,{name:e.formKey("https_content"),label:"HTTPS Url (required)",placeholder:"the URL of the file contents",type:"text",validation:"required|url","validation-behavior":"live"},null,8,["name"])])):m("",!0),e.sourceType==="http"?(u(),h("div",dt,[l(i,{name:e.formKey("http_content"),label:"HTTP Url (required)",placeholder:"the URL of the file contents",type:"text",validation:"required|url","validation-behavior":"live"},null,8,["name"]),l(i,{name:e.formKey("http_verification"),label:"Verification Hash (optional)",placeholder:"e.g. sha512-012345678..",type:"text",validation:"optional","validation-behavior":"live",help:"The hash of the contents, in the form <type>-<value> where type is either sha512 or sha256."},null,8,["name"])])):m("",!0),!e.sourceType.includes("http")&&e.sourceType!=="data"&&e.sourceType!=="data-vagrant"&&e.sourceType!=="omit"?(u(),h("div",ut,[l(i,{name:e.formKey("tftp_s3_gs_content"),label:e.sourceType.toUpperCase()+" Url (required)",placeholder:"the URL of the file contents",type:"text",validation:"required","validation-behavior":"live"},null,8,["name","label"])])):m("",!0)])}var R=y(ot,[["render",ht]]);const V="start_service",pt={setup:()=>{const e=p.uid();return{sourceType:x("data"),formKey:t=>p.getFormKey(V,t,e)}},methods:{encodeToIgn:function(e,s){const t=(n,o)=>p.getFormValue(V,s,n,o),r=V+"_name_";Object.keys(s).filter(n=>n.includes(r)).map(n=>n.replace(r,"")).forEach(n=>{e.systemd="systemd"in e?e.systemd:{units:[]};let o=t("enabled",n);console.log(o);let i=o==="omit";e.systemd.units.push({name:t("name",n),enabled:i?void 0:o==="yes",contents:t("contents",n)})})}}},mt={class:"startservices"};function ft(e,s,t,r,n,o){const i=v("FormKit");return u(),h("div",mt,[l(i,{name:e.formKey("name"),label:"Service Name (required)",validation:"required","validation-behavior":"live",value:"example.service",help:"Every unit must have a unique name. This must be suffixed with a valid unit type (e.g. \u201Cthing.service\u201D)."},null,8,["name"]),l(i,{name:e.formKey("enabled"),label:"enabled",value:"yes",validation:"optional",type:"select","validation-behavior":"live",help:"Whether or not the service shall be enabled. When true, the service is enabled. When false, the service is disabled. When omitted, the service is unmodified.",options:["yes","no","omit"]},null,8,["name"]),l(i,{name:e.formKey("contents"),label:"Service Unit Content (optional)",placeholder:"write the service unit content here, spaces, newlines etc. are preserved",type:"textarea",validation:"optional","validation-behavior":"live",help:"The contents of the unit."},null,8,["name"])])}var J=y(pt,[["render",ft]]);const L="modify_service",vt={setup:()=>{const e=p.uid();return{formKey:s=>p.getFormKey(L,s,e)}},methods:{encodeToIgn:function(e,s){const t=(n,o)=>p.getFormValue(L,s,n,o),r=L+"_name_";Object.keys(s).filter(n=>n.includes(r)).map(n=>n.replace(r,"")).forEach(n=>{console.log(e),e.systemd="systemd"in e?e.systemd:{units:[]};let o=e.systemd.units.find(c=>c.name===t("name",n)),i={name:t("dropin_name",n),contents:t("contents",n)};if(o!==void 0){if(o.dropins!==void 0){o.dropins.push(i);return}o.dropins=[i];return}e.systemd.units.push({name:t("name",n),dropins:[i]})})}}},gt={class:"modifyservice"};function _t(e,s,t,r,n,o){const i=v("FormKit");return u(),h("div",gt,[l(i,{name:e.formKey("name"),label:"Name of the service that you want to modify (required)",validation:"required","validation-behavior":"live",placeholder:"e.g. systemd-journald.service",help:"The name of the unit. This must be suffixed with a valid unit type (e.g. \u201Cthing.service\u201D)."},null,8,["name"]),l(i,{name:e.formKey("dropin_name"),label:"Name of the drop-in file",validation:"required","validation-behavior":"live",value:"debug.conf",help:"The name of the drop-in. This must be suffixed with \u201C.conf\u201D."},null,8,["name"]),l(i,{name:e.formKey("contents"),label:"Drop-In Unit Content (required)",placeholder:"write the service unit content here, spaces, newlines etc. are preserved",type:"textarea",validation:"required","validation-behavior":"live",help:"This unit will be enabled as a dependency of multi-user.target and therefore start on boot."},null,8,["name"])])}var M=y(vt,[["render",_t]]);const U="debug_bytes",yt={setup:()=>{const e=p.uid();return{uid:e,formKey:s=>p.getFormKey(U,s,e)}},methods:{encodeToIgn:function(e,s){const t=(n,o)=>p.getFormValue(U,s,n,o),r=U+"_size_";Object.keys(s).filter(n=>n.includes(r)).map(n=>n.replace(r,"")).forEach(n=>{var o=new Array(parseInt(t("size",n)-128)+1).join("B");e.debugBytes=e.debugBytes!==void 0?e.debugBytes:[],e.debugBytes.push(o)})}}},bt={class:"users"};function wt(e,s,t,r,n,o){const i=v("FormKit");return u(),h("div",bt,[l(i,{name:e.formKey("size"),label:"Bytes To Add",type:"number",validation:"required","validation-behavior":"live",value:"2048",help:"This is a debug form."},null,8,["name"])])}var z=y(yt,[["render",wt]]);const $t={class:"page-section p-2 bg-dark",id:"edit"},xt={class:"container mt-5 px-0"},kt=a("div",{class:"row gx-4 gx-lg-5 justify-content-center"},[a("div",{class:"col-lg-8 col-xl-6 text-white text-center"},[a("h1",{class:"mt-5"},"Ignition Config Generator"),a("hr",{class:"divider"}),a("div",{class:"d-grid mb-5"},[a("img",{class:"text-center mx-auto w-50",src:Pe})])])],-1),St={class:"row gx-4 gx-lg-5 justify-content-center mb-5"},Ft={class:"col-lg-6"},Ct={class:"form-floating mb-3"},Kt={key:0},Tt=a("hr",{class:"divider"},null,-1),Ot={class:"page-section p-2",id:"export"},At={class:"container mt-5 px-0"},It={class:"row gx-4 gx-lg-5 justify-content-center"},Vt={class:"col-lg-8 col-xl-6"},Lt=a("h1",{class:"mt-5 text-center"},"config.ign",-1),Ut=a("hr",{class:"divider"},null,-1),qt={class:"d-grid mb-5"},Et={class:"form-data"},Nt={class:"double"},Bt=_(" Copy "),Pt=a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-clipboard",viewBox:"0 0 16 16"},[a("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}),a("path",{d:"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"})],-1),Ht=[Bt,Pt],Rt=a("h2",{class:"mt-5"},"Convert to IMG in the Browser (In Dev)",-1),Jt=a("h2",{class:"mt-5"},"Convert to ISO FileSystem with mkisofs",-1),Mt=a("pre",{class:"form-data"},"# mkisofs -o ignition.iso -V ignition config.ign",-1),zt={setup(e){const s=[H,R,J,M,z],t=x({debug:!1});s.forEach(i=>p.setupFormComponentWatcher(i,te,t));const r=i=>{console.log("downloading.."),p.saveTemplateAsFile("config.ign",o(i))},n=i=>{p.copy(JSON.stringify(o(i),null,2))},o=i=>{let c={ignition:{version:"3.2.0"}};return s.filter(d=>d.methods.hasOwnProperty("encodeToIgn")).forEach(d=>d.methods.encodeToIgn(c,i)),i.debug&&(c["debug:form"]=i),c};return(i,c)=>{const d=v("FormKit");return u(),h($,null,[a("section",$t,[a("div",xt,[kt,a("div",St,[a("div",Ft,[a("div",Ct,[l(d,{type:"group",modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=f=>t.value=f)},{default:g(()=>[l(k,{title:"Add Users",displayAtLeastOne:!1},{default:g(()=>[l(H)]),_:1}),l(k,{title:"Create Files",displayAtLeastOne:!1},{default:g(()=>[l(R)]),_:1}),l(k,{title:"Start Services",displayAtLeastOne:!1},{default:g(()=>[l(J)]),_:1}),l(k,{title:"Modify Services",displayAtLeastOne:!1},{default:g(()=>[l(M)]),_:1}),t.value.debug?(u(),h("div",Kt,[l(k,{title:"DEBUG: Add Bytes",displayAtLeastOne:!1},{default:g(()=>[l(z)]),_:1})])):m("",!0)]),_:1},8,["modelValue"])])])])]),Tt]),a("section",Ot,[a("div",At,[a("div",It,[a("div",Vt,[Lt,Ut,a("div",qt,[a("pre",Et,A(o(t.value)),1),a("div",Nt,[l(d,{modelValue:t.value.debug,"onUpdate:modelValue":c[1]||(c[1]=f=>t.value.debug=f),type:"checkbox",label:"Debug",name:"debug"},null,8,["modelValue"]),a("button",{class:"btn btn-outline-secondary mb-2",onClick:c[2]||(c[2]=f=>n(t.value))},Ht)]),a("button",{class:"btn btn-primary mb-4",onClick:c[3]||(c[3]=f=>r(t.value))}," Download "),a("div",null,[Rt,l(Xe,{ignJson:o(t.value)},null,8,["ignJson"])]),Jt,Mt])])])])])],64)}}};var W="/fuel-ignition/assets/undraw_freelancer_re_irh4.f098216d.svg";const Wt={},Gt={class:"page-section bg-dark",id:"import"},Dt={class:"container px-4 px-lg-5"},Yt={class:"row gx-4 gx-lg-5 justify-content-center"},jt=a("div",{class:"d-grid"},[a("img",{class:"text-center mx-auto",src:W})],-1),Qt={class:"col-lg-8 col-xl-6 text-white text-center"},Xt=a("h2",{class:"mt-2"},"Sorry, this is not implemented yet!",-1),Zt=a("hr",{class:"divider"},null,-1),en=a("p",{class:"mb-5"}," For now, Fuel Ignition can only create new configs. ",-1),tn=_("Back Home");function nn(e,s){const t=v("router-link");return u(),h("section",Gt,[a("div",Dt,[a("div",Yt,[jt,a("div",Qt,[Xt,Zt,en,l(t,{class:"btn btn-primary btn-xl",to:"/"},{default:g(()=>[tn]),_:1})])])])])}var sn=y(Wt,[["render",nn]]);const on=a("section",{class:"page-section bg-dark",id:"contact"},[a("div",{class:"container px-4 px-lg-5"},[a("div",{class:"row gx-4 gx-lg-5 justify-content-center"},[a("div",{class:"d-grid"},[a("img",{class:"text-center mx-auto",src:W})])])])],-1),an=a("section",{class:"page-section p-2",id:"export"},[a("div",{class:"container mt-5 px-0"},[a("div",{class:"row gx-4 gx-lg-5 justify-content-center"},[a("h2",{class:"mt-5 text-center"},"Convert to ISO in the Browser (Alpha)"),a("hr",{class:"divider"}),a("div",{class:"d-grid mb-5"},[a("div",{class:"mx-auto"})])])])],-1),rn={setup(e){return(s,t)=>(u(),h($,null,[on,an],64))}},ln="/fuel-ignition/",cn=[{path:"/",name:"Home",component:Be},{path:"/edit",name:"Edit",component:zt},{path:"/import",name:"Import",component:sn},{path:"/test",name:"Test",component:rn}],dn=ne({history:se(ln),routes:cn});window.addEventListener("DOMContentLoaded",e=>{var s=function(){const n=document.body.querySelector("#mainNav");!n||(window.scrollY===0?n.classList.remove("navbar-shrink"):n.classList.add("navbar-shrink"))};s(),document.addEventListener("scroll",s);const t=document.body.querySelector(".navbar-toggler");[].slice.call(document.querySelectorAll("#navbarResponsive .nav-link")).map(function(n){n.addEventListener("click",()=>{window.getComputedStyle(t).display!=="none"&&t.click()})})});oe(ke).use(ae,ie).use(dn).mount("#app");
