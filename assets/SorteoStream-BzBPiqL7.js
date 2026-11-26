var es=Object.defineProperty,ss=Object.defineProperties;var as=Object.getOwnPropertyDescriptors;var Ee=Object.getOwnPropertySymbols;var rs=Object.prototype.hasOwnProperty,ts=Object.prototype.propertyIsEnumerable;var Le=(r,i,t)=>i in r?es(r,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[i]=t,L=(r,i)=>{for(var t in i||(i={}))rs.call(i,t)&&Le(r,t,i[t]);if(Ee)for(var t of Ee(i))ts.call(i,t)&&Le(r,t,i[t]);return r},W=(r,i)=>ss(r,as(i));var Ce=(r,i,t)=>new Promise((c,p)=>{var u=m=>{try{k(t.next(m))}catch(b){p(b)}},d=m=>{try{k(t.throw(m))}catch(b){p(b)}},k=m=>m.done?c(m.value):Promise.resolve(m.value).then(u,d);k((t=t.apply(r,i)).next())});import{r as o,g as ns,j as e,s as is}from"./index-Bcu6ChRh.js";import{c as os,f as cs,s as de}from"./sorteoLogic-zasGqzHl.js";const $e="sorteo_stream_config_v1",f=10,N=3,ls=1920,ds=1080,A={REVEAL:[" ","Spacebar"],REVEAL_ALL:["Enter"],RESET:["r","R"],SKIP:["s","S"],RETRY:["t","T"]},U={division:"",pilots:Array(f).fill(""),karts:"",reservas:"",countdownSeconds:300,bufferSeconds:5},le="/canary-karting-app/icons/new-logo.jpeg",De=r=>String(r||"").split(/[\n,;]+/).map(i=>i.trim()).filter(Boolean),ps=r=>{const i=Array.isArray(r)?r:[];return Array.from({length:f},(t,c)=>{var p;return String((p=i[c])!=null?p:"")})},ms=()=>{try{const r=localStorage.getItem($e);if(!r)return U;const i=JSON.parse(r);return W(L(L({},U),i),{pilots:ps(i.pilots),countdownSeconds:Number.isFinite(i.countdownSeconds)?i.countdownSeconds:U.countdownSeconds,bufferSeconds:Number.isFinite(i.bufferSeconds)?i.bufferSeconds:U.bufferSeconds})}catch(r){return U}},Te=r=>{const i=Math.max(0,Math.floor(r)),t=Math.floor(i/60),c=i%60;return`${String(t).padStart(2,"0")}:${String(c).padStart(2,"0")}`},fs=r=>/^\d+$/.test(String(r))?String(r).padStart(2,"0"):String(r),us=(r,i,t)=>{const c=[];r.division||c.push("Elige una división.");const u=r.pilots.map(d=>d.trim()).filter(Boolean);return u.length!==f?c.push(`Faltan pilotos: quedan ${f-u.length} casilla(s) vacía(s).`):new Set(u.map(d=>d.toLowerCase())).size!==f&&c.push("Hay nombres de piloto repetidos."),i.length!==f?c.push(`Debes introducir exactamente ${f} karts (ahora ${i.length}).`):i.some(d=>!/^\d+$/.test(d))?c.push("Los karts deben ser números enteros."):new Set(i).size!==i.length&&c.push("Los karts no pueden repetirse."),t.some(d=>!/^\d+$/.test(d))&&c.push("Las reservas deben ser números."),r.countdownSeconds<=0&&c.push("La cuenta atrás debe ser mayor que 0."),r.bufferSeconds<0&&c.push("El buffer no puede ser negativo."),c},_=r=>String(r).toLowerCase().trim(),xs=(r,i,t)=>{const c=new Array(r.length),p=new Set,u=de(r.map((k,m)=>m)),d=k=>{if(k===r.length)return!0;const m=u[k],b=t.get(_(r[m])),h=de(i).filter(v=>!p.has(v)&&!(b&&b.has(_(v))));for(const v of h){if(p.add(v),c[m]=v,d(k+1))return!0;p.delete(v),c[m]=void 0}return!1};return d(0)?c:null},gs=(r,i,t)=>{const p=new Set(r.map(_)).size===r.length&&i.length===r.length?cs(r,i,t):null,u=p?r.map(d=>p[d]):xs(r,i,t)||de(i).slice(0,r.length);return r.map((d,k)=>({name:d,kart:u[k]||"",orden:k+1}))},ks=(r,i)=>{const t=new Map;return Array.from({length:N},(c,p)=>{const u=(f-2)*70,d=2200+Math.round(Math.random()*800),k=gs(r,i,t).map((m,b)=>{const h=b>=f-2;return W(L({},m),{delay:h?u:b*70,animationDuration:h?d:2200+Math.round(Math.random()*800),animList:os(i,m.kart)})});return k.forEach(m=>{const b=_(m.name);t.has(b)||t.set(b,new Set),t.get(b).add(_(m.kart))}),{numero:p+1,assignments:k}})},bs=r=>{const i=Object.create(null);return r.forEach(t=>{var p,u;const c=String(t.name||"").trim().toLowerCase();!c||i[c]||(i[c]={name:t.name,team:(p=t.team)!=null?p:null,division:t.division,season:(u=t.season)!=null?u:null})}),i},hs=()=>typeof crypto!="undefined"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`ck-${Date.now()}-${Math.random().toString(36).slice(2)}`,ys=({item:r})=>{const i=o.useRef(null);return o.useEffect(()=>{const t=i.current;if(!t)return;const c=-72*(r.animList.length-1),p=setTimeout(()=>{const u=t.animate([{transform:"translateY(0px)",filter:"blur(0px)"},{transform:`translateY(${c*.82}px)`,filter:"blur(2px)",offset:.65},{transform:`translateY(${c}px)`,filter:"blur(0px)"}],{duration:r.animationDuration,easing:"cubic-bezier(0.12, 0.8, 0.32, 1)",fill:"forwards"});u&&"onfinish"in u&&(u.onfinish=()=>{t.style.transform=`translateY(${c}px)`})},r.delay);return()=>clearTimeout(p)},[r]),e.jsx("div",{className:"cks-kart-slot",children:e.jsx("div",{className:"cks-kart-list",ref:i,children:r.animList.map((t,c)=>e.jsx("div",{className:"cks-kart-list-item",children:t},c))})})},Ss=()=>{const[r,i]=o.useState("prep"),[t,c]=o.useState(ms),[p,u]=o.useState(!1),[d,k]=o.useState([]),[m,b]=o.useState(!0),[h,v]=o.useState(0),[Z,B]=o.useState(!1),[X,pe]=o.useState([]),[Q,me]=o.useState([]),[fe,ue]=o.useState([]),[y,ee]=o.useState(0),[w,O]=o.useState(0),[xe,P]=o.useState([]),[se,ge]=o.useState(0),[ke,G]=o.useState([]),[H,ae]=o.useState([]),[Ie,re]=o.useState([]),[Ae,C]=o.useState(!1),[,D]=o.useState(!1),[Oe,K]=o.useState(!1),[Pe,Ke]=o.useState(1),[S,F]=o.useState("idle"),[be,q]=o.useState(""),j=o.useRef(!1),T=o.useRef(null),M=o.useRef(new Set),he=o.useRef(""),ye=o.useRef(Object.create(null)),Y=o.useRef(!1),V=o.useRef(!1),R=o.useRef(0),J=o.useMemo(()=>De(t.karts),[t.karts]),we=o.useMemo(()=>De(t.reservas),[t.reservas]),$=o.useMemo(()=>Array.from(new Set(d.map(s=>String(s.season||"2026")))).sort().reverse(),[d])[0]||"2026",Fe=o.useMemo(()=>{const s=new Set;d.forEach(n=>{if(String(n.season)!==$)return;const l=Number(n.division);Number.isFinite(l)&&l>0&&s.add(l)});const a=Array.from(s).sort((n,l)=>n-l);return a.length?a:[1,2,3]},[d,$]),te=o.useMemo(()=>d.filter(s=>String(s.season)===$&&Number(s.division)===Number(t.division)).sort((s,a)=>String(s.name||"").localeCompare(String(a.name||""))),[d,$,t.division]),ne=us(t,J,we),g=fe[y]||null,Ye=o.useMemo(()=>g?new Set(g.assignments.slice(0,w).map(s=>s.kart)):new Set,[g,w]),ve=o.useMemo(()=>new Set([...xe,...ke]),[xe,ke]);o.useEffect(()=>{try{localStorage.setItem($e,JSON.stringify(t))}catch(s){}},[t]),o.useEffect(()=>{let s=!0;return Ce(null,null,function*(){try{const a=yield ns();s&&k(Array.isArray(a)?a:[])}catch(a){console.error("Error fetching drivers",a)}finally{s&&b(!1)}}),()=>{s=!1}},[]),o.useEffect(()=>{const s=()=>{const a=Math.min(window.innerWidth/ls,window.innerHeight/ds);Ke(a>0?a:1)};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),o.useEffect(()=>{if(r==="prep")return;let s=setTimeout(()=>K(!0),2500);const a=()=>{K(!1),clearTimeout(s),s=setTimeout(()=>K(!0),2500)};return window.addEventListener("mousemove",a),()=>{clearTimeout(s),window.removeEventListener("mousemove",a)}},[r]),o.useEffect(()=>{if(r==="prep")return;const s=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=s}},[r]);const I=(s,a)=>{const n=setTimeout(()=>{M.current.delete(n),s()},a);return M.current.add(n),n},ie=()=>{M.current.forEach(s=>clearTimeout(s)),M.current.clear(),T.current&&(clearTimeout(T.current),T.current=null)},je=s=>{j.current=!0,D(!0),T.current&&clearTimeout(T.current),T.current=setTimeout(()=>{j.current=!1,D(!1)},Math.max(140,s))},E=s=>c(a=>L(L({},a),s)),Ne=(s,a)=>{c(n=>{const l=[...n.pilots];return l[s]=a,W(L({},n),{pilots:l})})},Ue=s=>Ne(s,""),Se=(s=t.division)=>{const a=d.filter(l=>String(l.season)===$&&Number(l.division)===Number(s)).sort((l,x)=>String(l.name||"").localeCompare(String(x.name||""))).map(l=>l.name).slice(0,f),n=Array.from({length:f},(l,x)=>a[x]||"");E({pilots:n})},_e=s=>{E({division:s}),Se(s)},Be=()=>{if(u(!0),ne.length>0)return;ie(),j.current=!1,D(!1),C(!1),K(!1),B(!1);const s=t.pilots.map(n=>n.trim()),a=J.slice();he.current=hs(),ye.current=bs(te),Y.current=!1,V.current=!1,R.current+=1,pe(a),me(we.slice()),ue(ks(s,a)),ee(0),O(0),P([]),ge(n=>n+1),G([]),ae([]),re([]),F("idle"),q(""),v(Math.max(0,Math.round(t.countdownSeconds))),i("countdown")},Xe=()=>{window.confirm("¿Reiniciar el sorteo y volver a la preparación? Se perderá el progreso no guardado.")&&(ie(),j.current=!1,D(!1),C(!1),K(!1),Y.current=!1,V.current=!1,B(!1),R.current+=1,F("idle"),q(""),ue([]),ee(0),O(0),P([]),G([]),ae([]),re([]),pe([]),me([]),i("prep"))},Ge=()=>{r==="countdown"&&v(0)},He=s=>{r!=="draw"||Z||Ye.has(s)||G(a=>a.includes(s)?a.filter(n=>n!==s):[...a,s])},qe=()=>({idempotencyKey:he.current,division:Number(t.division),season:$,karts:X,reservas:Q,carreras:fe.map(s=>({numero:s.numero,asignaciones:s.assignments.map(a=>({nombre:a.name,kart:a.kart,orden:a.orden,piloto:ye.current[String(a.name).trim().toLowerCase()]||null}))}))}),oe=()=>{Y.current||(Y.current=!0,F("saving"),q(""),is(qe()).then(s=>{s.success?F("saved"):(F("error"),q(s.error||"No se pudo guardar"))}))},Ve=()=>{S==="error"&&(Y.current=!1,oe())},Je=()=>{if(r!=="draw"||j.current||!g)return;if(w>=f){Re();return}if(w>=f-2){ze();return}const s=w,a=s+1;O(a);const n=g.assignments[s],l=((n==null?void 0:n.delay)||0)+((n==null?void 0:n.animationDuration)||2400)+60,x=R.current;I(()=>{x===R.current&&P(z=>z.includes(n.kart)?z:[...z,n.kart])},l),je(l+90),y===N-1&&a===f&&oe()},ze=()=>{if(r!=="draw"||j.current||!g)return;if(w>=f){Re();return}const s=w;O(f);const a=R.current;let n=0;for(let l=s;l<f;l+=1){const x=g.assignments[l],z=((x==null?void 0:x.delay)||0)+((x==null?void 0:x.animationDuration)||2400)+60;n=Math.max(n,z),I(()=>{a===R.current&&P(ce=>ce.includes(x.kart)?ce:[...ce,x.kart])},z)}je(n+120),y===N-1&&oe()},Re=()=>{j.current||r!=="draw"||y>=N-1||!g||(j.current=!0,D(!0),C(!0),I(()=>{R.current+=1;const s={numero:g.numero,assignments:g.assignments};ae(a=>a.some(n=>n.numero===s.numero)?a:[...a,s]),ee(a=>Math.min(a+1,N-1)),O(0),P([]),ge(a=>a+1),G([]),C(!1),I(()=>{j.current=!1,D(!1)},320)},600))};if(o.useEffect(()=>{if(r!=="countdown")return;if(h<=0){const a=setTimeout(()=>{B(!0),I(()=>i("draw"),320),I(()=>B(!1),720)},200);return()=>clearTimeout(a)}const s=setTimeout(()=>v(a=>a-1),1e3);return()=>clearTimeout(s)},[r,h]),o.useEffect(()=>{if(r!=="draw"||y!==N-1||!g||w<f||V.current)return;V.current=!0;const s=Math.max(0,Number(t.bufferSeconds)||0),a=setTimeout(()=>{C(!0);const n=[...H.filter(x=>x.numero!==N),{numero:N,assignments:g.assignments}].sort((x,z)=>x.numero-z.numero),l=setTimeout(()=>{C(!1),re(n),i("summary")},550);M.current.add(l)},s*1e3);return M.current.add(a),()=>clearTimeout(a)},[r,y,w,g,H,t.bufferSeconds]),o.useEffect(()=>{const s=a=>{if(r==="prep")return;const n=a.key,l=typeof n=="string"?n.toLowerCase():"";if(A.RESET.includes(l)){a.preventDefault(),Xe();return}if(!Z){if(r==="countdown"){(A.SKIP.includes(l)||A.REVEAL.includes(n))&&(a.preventDefault(),Ge());return}if(r==="draw"){if(A.REVEAL.includes(n)){a.preventDefault(),Je();return}if(A.REVEAL_ALL.includes(n)){a.preventDefault(),ze();return}}A.RETRY.includes(l)&&S==="error"&&(a.preventDefault(),Ve())}};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)}),o.useEffect(()=>()=>{ie()},[]),r==="prep")return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cks-prep",children:[e.jsx("h1",{children:"Sorteo en directo"}),e.jsxs("div",{className:"cks-prep-card",children:[e.jsxs("div",{className:"cks-prep-grid",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"cks-row",children:[e.jsxs("div",{className:"cks-field",children:[e.jsx("label",{className:"cks-label",htmlFor:"cks-division",children:"División"}),e.jsxs("select",{id:"cks-division",className:"cks-select",value:t.division,onChange:s=>_e(s.target.value),children:[e.jsx("option",{value:"",children:"— Elige división —"}),Fe.map(s=>e.jsxs("option",{value:s,children:[s,"ª División"]},s))]}),e.jsx("div",{className:"cks-hint",children:m?"Cargando pilotos…":t.division?`${te.length} piloto(s) en la división`:"Selecciona una división para cargar sus pilotos"})]}),e.jsxs("div",{className:"cks-field",children:[e.jsx("label",{className:"cks-label",children:"Rellenar pilotos"}),e.jsxs("button",{type:"button",className:"cks-secondary-btn",onClick:()=>Se(),disabled:!t.division||m,children:[e.jsx("i",{className:"fa-solid fa-rotate"})," Cargar desde división"]})]})]}),e.jsxs("div",{className:"cks-field",style:{marginTop:22},children:[e.jsxs("label",{className:"cks-label",children:["Pilotos ",e.jsxs("span",{className:"cks-badge",children:[t.pilots.filter(s=>s.trim()).length,"/",f]})]}),e.jsx("datalist",{id:"cks-pilots-datalist",children:te.map(s=>e.jsx("option",{value:s.name},`${s.name}-${s.team||""}-${s.division}`))}),e.jsx("div",{className:"cks-slots",children:t.pilots.map((s,a)=>e.jsxs("div",{className:"cks-slot",children:[e.jsx("span",{className:"cks-slot-num",children:a+1}),e.jsx("input",{type:"text",list:"cks-pilots-datalist",value:s,placeholder:`Piloto ${a+1}`,onChange:n=>Ne(a,n.target.value)}),s&&e.jsx("button",{type:"button",className:"cks-slot-clear",onClick:()=>Ue(a),title:"Vaciar",children:e.jsx("i",{className:"fa-solid fa-xmark"})})]},a))})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"cks-field",children:[e.jsxs("label",{className:"cks-label",htmlFor:"cks-karts",children:["Karts disponibles",e.jsxs("span",{className:`cks-badge ${J.length===f?"good":"bad"}`,children:[J.length,"/",f]})]}),e.jsx("textarea",{id:"cks-karts",className:"cks-textarea",value:t.karts,onChange:s=>E({karts:s.target.value}),placeholder:`Uno por línea o separados por coma
33
36
37…`})]}),e.jsxs("div",{className:"cks-field",style:{marginTop:16},children:[e.jsxs("label",{className:"cks-label",htmlFor:"cks-reservas",children:["Reservas",e.jsx("span",{className:"cks-badge",children:"solo visual"})]}),e.jsx("textarea",{id:"cks-reservas",className:"cks-textarea",style:{minHeight:80},value:t.reservas,onChange:s=>E({reservas:s.target.value}),placeholder:"Karts de reserva (no participan)"})]}),e.jsxs("div",{className:"cks-field",style:{marginTop:16},children:[e.jsx("label",{className:"cks-label",children:"Cuenta atrás"}),e.jsxs("div",{className:"cks-inline-inputs",children:[e.jsxs("div",{className:"cks-time-field",children:[e.jsx("span",{className:"cks-hint",children:"Minutos"}),e.jsx("input",{type:"number",min:"0",className:"cks-input",value:Math.floor(t.countdownSeconds/60),onChange:s=>{const a=Math.max(0,parseInt(s.target.value,10)||0),n=t.countdownSeconds%60;E({countdownSeconds:a*60+n})}})]}),e.jsxs("div",{className:"cks-time-field",children:[e.jsx("span",{className:"cks-hint",children:"Segundos"}),e.jsx("input",{type:"number",min:"0",max:"59",className:"cks-input",value:t.countdownSeconds%60,onChange:s=>{const a=Math.min(59,Math.max(0,parseInt(s.target.value,10)||0)),n=Math.floor(t.countdownSeconds/60);E({countdownSeconds:n*60+a})}})]}),e.jsxs("div",{className:"cks-time-field",children:[e.jsx("span",{className:"cks-hint",children:"Buffer final (s)"}),e.jsx("input",{type:"number",min:"0",className:"cks-input",value:t.bufferSeconds,onChange:s=>E({bufferSeconds:Math.max(0,parseInt(s.target.value,10)||0)})})]})]})]})]})]}),p&&ne.length>0&&e.jsxs("div",{className:"cks-form-errors",children:[e.jsxs("strong",{children:[e.jsx("i",{className:"fa-solid fa-triangle-exclamation"})," Revisa esto antes de empezar:"]}),e.jsx("ul",{children:ne.map((s,a)=>e.jsx("li",{children:s},a))})]}),e.jsxs("div",{className:"cks-start-row",children:[e.jsxs("button",{type:"button",className:"cks-start-btn",onClick:Be,children:[e.jsx("i",{className:"fa-solid fa-play"})," Iniciar"]}),e.jsxs("span",{className:"cks-hint",children:[Te(t.countdownSeconds)," de cuenta atrás · ",t.bufferSeconds,"s de buffer antes del resumen"]})]}),e.jsxs("div",{className:"cks-help",children:["En el stream no hay botones. Controles: ",e.jsx("kbd",{children:"Espacio"})," revela el siguiente piloto / pasa de carrera ·",e.jsx("kbd",{children:"Enter"})," sortea la carrera completa · ",e.jsx("kbd",{children:"S"})," salta la cuenta atrás ·",e.jsx("kbd",{children:"R"})," reinicia (con confirmación) · ",e.jsx("kbd",{children:"T"})," reintenta guardar si falla."]})]})]}),e.jsx("style",{children:Me})]});const We=X.filter(s=>!ve.has(s)).length,Ze=!!g&&w>=f,Qe=S!=="idle";return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`cks-stage-wrap${Oe?" cks-cursor-hidden":""}`,children:e.jsxs("div",{className:"cks-stage",style:{"--cks-scale":Pe},children:[e.jsx("div",{className:"cks-bg","aria-hidden":"true"}),r==="countdown"&&e.jsxs("div",{className:"cks-countdown",children:[e.jsx("img",{className:"cks-logo",src:le,alt:"Canary Karting"}),e.jsx("div",{className:"cks-countdown-label",children:"Empezamos en"}),e.jsx("div",{className:`cks-countdown-clock${h<=10?" cks-hot":""}${h===0?" cks-zero":""}`,children:Te(h)},h),e.jsxs("div",{className:"cks-countdown-sub",children:["Sorteo de karts · ",t.division?`${t.division}ª División`:""]})]}),r==="draw"&&e.jsxs("div",{className:`cks-draw${Ae?" cks-descending":""}`,children:[e.jsxs("header",{className:"cks-topbar",children:[e.jsx("div",{className:"cks-logo-frame",children:e.jsx("img",{src:le,alt:"Canary Karting"})}),e.jsxs("div",{className:"cks-topbar-title",children:[e.jsx("span",{className:"cks-title-white",children:"Sorteo de"}),e.jsx("span",{className:"cks-title-blue",children:"Karts"})]}),e.jsx("div",{className:"cks-topbar-div",children:t.division?`${t.division}ª División`:"Sorteo"}),e.jsxs("div",{className:"cks-live",children:[e.jsx("span",{className:"cks-live-dot"})," EN DIRECTO"]})]}),e.jsxs("div",{className:"cks-draw-main",children:[e.jsxs("aside",{className:"cks-side",children:[e.jsxs("section",{className:"cks-panel cks-panel-karts",children:[e.jsxs("div",{className:"cks-panel-title",children:[e.jsxs("span",{className:"cks-panel-titletext",children:[e.jsx("i",{className:"fa-solid fa-flag-checkered"})," Karts activos"]}),e.jsxs("span",{className:"cks-panel-count",children:[We," / ",X.length]})]}),e.jsx("div",{className:"cks-kart-rows",children:X.map((s,a)=>{const n=ve.has(s);return e.jsxs("div",{className:`cks-kart-row${n?" cks-used":""}`,style:{animationDelay:`${(y===0?240:0)+a*50}ms`},onClick:()=>He(s),role:"button",tabIndex:-1,title:"Marcar / desmarcar dorsal",children:[e.jsxs("span",{className:"cks-kart-label",children:["KART ",fs(s)]}),e.jsxs("span",{className:"cks-kart-status",children:[e.jsx("span",{className:"cks-status-dot"}),n?"USADO":"DISPONIBLE"]})]},`${se}-${s}`)})}),e.jsx("div",{className:"cks-kart-hint",children:"Haz clic en un dorsal para marcar/desmarcar"})]}),e.jsxs("section",{className:"cks-panel cks-panel-reservas",children:[e.jsxs("div",{className:"cks-panel-title",children:[e.jsxs("span",{className:"cks-panel-titletext",children:[e.jsx("i",{className:"fa-solid fa-square-parking"})," Reservas"]}),e.jsx("span",{className:"cks-panel-count cks-count-muted",children:"no participan"})]}),Q.length>0?e.jsx("div",{className:"cks-res-list",children:Q.map((s,a)=>e.jsxs("div",{className:"cks-res-card",style:{animationDelay:`${(y===0?460:0)+a*65}ms`},children:[e.jsxs("span",{className:"cks-res-num",children:["#",s]}),e.jsx("span",{className:"cks-res-tag",children:"RES"})]},`${se}-res-${s}-${a}`))}):e.jsx("div",{className:"cks-empty",children:"Sin reservas"})]})]}),e.jsxs("main",{className:"cks-center",children:[e.jsxs("h2",{className:"cks-race-title",children:[e.jsx("span",{className:"cks-race-word",children:"Carrera"}),e.jsx("span",{className:"cks-race-num",children:y+1})]}),e.jsx("div",{className:"cks-cards",children:g==null?void 0:g.assignments.map((s,a)=>{const n=a<w;return e.jsxs("div",{className:`cks-pilot-card${n?" cks-revealed":""}`,style:{animationDelay:`${(y===0?560:40)+a*55}ms`},children:[e.jsx("div",{className:"cks-pilot-name",children:s.name}),n?e.jsx(ys,{item:s}):e.jsx("div",{className:"cks-kart-slot cks-kart-pending",children:e.jsx("span",{className:"cks-dots",children:"···"})})]},`${se}-${a}`)})}),Ze&&y===N-1&&e.jsxs("div",{className:"cks-buffer-hint",children:[e.jsx("i",{className:"fa-solid fa-circle-notch fa-spin"})," Guardando y preparando el resumen…"]})]})]}),e.jsxs("footer",{className:"cks-past",children:[e.jsxs("div",{className:"cks-past-head",children:[e.jsxs("div",{className:"cks-past-label",children:[e.jsx("span",{className:"cks-past-dot"})," Carreras ya sorteadas"]}),e.jsxs("div",{className:"cks-past-hint",children:["Pulsa ",e.jsx("kbd",{children:"ESPACIO"})," para sortear siguiente piloto"]})]}),H.length>0?e.jsx("div",{className:"cks-past-list",children:H.map((s,a)=>e.jsxs("div",{className:"cks-past-race",style:{animationDelay:`${a*90}ms`},children:[e.jsxs("div",{className:"cks-past-racehead",children:[e.jsxs("span",{className:"cks-past-title",children:["Carrera ",s.numero]}),e.jsx("span",{className:"cks-past-done",children:"Completada"})]}),e.jsx("div",{className:"cks-past-rows",children:s.assignments.map((n,l)=>e.jsxs("div",{className:"cks-past-row",style:{animationDelay:`${a*90+l*30}ms`},children:[e.jsx("span",{className:"cks-past-name",children:n.name}),e.jsx("span",{className:"cks-past-kart",children:n.kart})]},`${s.numero}-${n.orden}`))})]},s.numero))}):e.jsx("div",{className:"cks-empty",children:"Aún no hay carreras sorteadas · pulsa ESPACIO o ENTER para empezar"})]})]}),r==="summary"&&e.jsxs("div",{className:"cks-summary",children:[e.jsxs("header",{className:"cks-topbar",children:[e.jsx("div",{className:"cks-logo-frame",children:e.jsx("img",{src:le,alt:"Canary Karting"})}),e.jsxs("div",{className:"cks-topbar-title",children:[e.jsx("span",{className:"cks-title-white",children:"Resumen del"}),e.jsx("span",{className:"cks-title-blue",children:"Sorteo"})]}),e.jsx("div",{className:"cks-topbar-div",children:t.division?`${t.division}ª División`:"Sorteo"}),e.jsxs("div",{className:"cks-live",children:[e.jsx("span",{className:"cks-live-dot"})," EN DIRECTO"]})]}),e.jsx("div",{className:"cks-summary-grid",children:Ie.map((s,a)=>e.jsxs("div",{className:"cks-summary-race",style:{animationDelay:`${a*140}ms`},children:[e.jsxs("div",{className:"cks-summary-racebar",children:[e.jsxs("span",{className:"cks-past-title",children:["Carrera ",s.numero]}),e.jsx("span",{className:"cks-past-done",children:"Completada"})]}),e.jsx("div",{className:"cks-summary-cards",children:s.assignments.map((n,l)=>e.jsxs("div",{className:"cks-summary-card",style:{animationDelay:`${a*140+l*35+120}ms`},children:[e.jsx("span",{className:"cks-summary-cardname",children:n.name}),e.jsx("span",{className:"cks-summary-cardkart",children:n.kart})]},n.orden))})]},s.numero))})]}),Z&&e.jsxs("div",{className:"cks-launch","aria-hidden":"true",children:[e.jsx("div",{className:"cks-launch-flash"}),e.jsx("div",{className:"cks-launch-ring"})]}),Qe&&(r==="draw"||r==="summary")&&e.jsxs("div",{className:`cks-save-notice ${S==="error"?"error":S==="saved"?"ok":""}`,children:[S==="saving"&&e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-circle-notch fa-spin"})," Guardando sorteo…"]}),S==="saved"&&e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-circle-check"})," Sorteo guardado"]}),S==="error"&&e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-triangle-exclamation"})," No se pudo guardar",be?` (${be})`:""," · pulsa T para reintentar"]})]})]})}),e.jsx("style",{children:Me})]})},Me=`
/* ===== Preparación (interfaz normal de la app) ===== */
.cks-prep {
    max-width: 1400px;
    width: 95%;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 60px;
}
.cks-prep-card {
    background: var(--card-bg);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 30px 34px;
}
.cks-prep-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
}
@media (max-width: 900px) {
    .cks-prep-grid { grid-template-columns: 1fr; }
    .cks-slots { grid-template-columns: 1fr; }
}
.cks-row {
    display: flex;
    gap: 22px;
    flex-wrap: wrap;
    align-items: flex-start;
}
.cks-field { min-width: 0; }
.cks-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-muted);
    margin-bottom: 8px;
}
.cks-input, .cks-select, .cks-textarea {
    background: #0a0f1a;
    border: 1px solid #1c2740;
    color: #fff;
    border-radius: 8px;
    padding: 10px 12px;
    font-family: inherit;
    font-size: 1rem;
    outline: none;
}
.cks-select { width: auto; min-width: 240px; }
.cks-input:focus, .cks-select:focus, .cks-textarea:focus { border-color: rgba(79, 141, 255, 0.7); }
.cks-textarea {
    width: 100%;
    min-height: 132px;
    resize: vertical;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    letter-spacing: 1px;
}
.cks-hint { color: #64748b; font-size: 0.82rem; margin-top: 6px; line-height: 1.5; }
.cks-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.75rem;
    padding: 2px 9px;
    border-radius: 999px;
    background: rgba(11, 92, 220, 0.18);
    color: #6fa4ff;
    border: 1px solid rgba(79, 141, 255, 0.3);
    text-transform: none;
    letter-spacing: 0;
}
.cks-badge.good { background: rgba(16, 185, 129, 0.15); color: #6ee7b7; border-color: rgba(16, 185, 129, 0.35); }
.cks-badge.bad { background: rgba(239, 68, 68, 0.15); color: #fca5a5; border-color: rgba(239, 68, 68, 0.35); }
.cks-slots {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}
.cks-slot {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #0a0f1a;
    border: 1px solid #1c2740;
    border-radius: 8px;
    padding: 6px 8px;
}
.cks-slot-num {
    width: 26px;
    height: 26px;
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: rgba(11, 92, 220, 0.25);
    color: #6fa4ff;
    font-family: 'Russo One', sans-serif;
    font-size: 0.85rem;
}
.cks-slot input {
    background: transparent;
    border: none;
    color: #fff;
    font-family: inherit;
    font-size: 0.98rem;
    flex: 1;
    min-width: 0;
    outline: none;
    padding: 6px 2px;
}
.cks-slot-clear {
    background: transparent;
    border: none;
    color: #64748b;
    cursor: pointer;
    padding: 4px 6px;
    border-radius: 6px;
    transition: color 0.2s, background 0.2s;
}
.cks-slot-clear:hover { color: #ef4444; background: rgba(239, 68, 68, 0.1); }
.cks-inline-inputs { display: flex; gap: 16px; flex-wrap: wrap; }
.cks-time-field { display: flex; flex-direction: column; gap: 4px; }
.cks-time-field .cks-input { width: 100px; }
.cks-secondary-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #33415c;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 16px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: opacity 0.2s, transform 0.1s;
}
.cks-secondary-btn:disabled { opacity: 0.45; cursor: not-allowed; }
.cks-secondary-btn:not(:disabled):hover { transform: translateY(-1px); }
.cks-form-errors {
    margin-top: 18px;
    background: rgba(239, 68, 68, 0.12);
    border: 1px solid rgba(239, 68, 68, 0.35);
    border-radius: 10px;
    padding: 12px 16px;
    color: #fca5a5;
    font-size: 0.92rem;
}
.cks-form-errors ul { margin: 8px 0 0 18px; line-height: 1.6; }
.cks-start-row { display: flex; gap: 18px; align-items: center; margin-top: 24px; flex-wrap: wrap; }
.cks-start-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-width: 240px;
    padding: 14px 30px;
    border: none;
    border-radius: 8px;
    background: var(--accent);
    color: #fff;
    font-family: 'Russo One', sans-serif;
    font-size: 1.15rem;
    font-style: italic;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: var(--glow);
    transition: background 0.2s, transform 0.1s;
}
.cks-start-btn:hover { background: var(--accent-hover); transform: translateY(-1px); }
.cks-help { color: #64748b; font-size: 0.85rem; line-height: 1.7; margin-top: 20px; }
.cks-help kbd {
    background: #0a0f1a;
    border: 1px solid #1c2740;
    border-bottom-width: 2px;
    border-radius: 5px;
    padding: 1px 7px;
    font-family: ui-monospace, monospace;
    color: #cbd5e1;
    margin: 0 3px;
}

/* ===== Lienzo del stream ===== */
.cks-stage-wrap {
    position: fixed;
    inset: 0;
    z-index: 100000;
    overflow: hidden;
    background: #04060b;
}
.cks-stage-wrap.cks-cursor-hidden,
.cks-stage-wrap.cks-cursor-hidden * { cursor: none !important; }
.cks-bg {
    position: absolute;
    inset: -12%;
    background:
        radial-gradient(circle at 18% 22%, rgba(11, 92, 220, 0.30), transparent 46%),
        radial-gradient(circle at 82% 76%, rgba(255, 212, 0, 0.14), transparent 46%),
        radial-gradient(circle at 62% 8%, rgba(79, 141, 255, 0.20), transparent 42%),
        #04060b;
    background-size: 140% 140%, 160% 160%, 130% 130%, auto;
    animation: cksBgDrift 18s ease-in-out infinite alternate;
}
.cks-stage {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 1920px;
    height: 1080px;
    transform-origin: center center;
    transform: translate(-50%, -50%) scale(var(--cks-scale, 1));
    overflow: hidden;
    color: var(--text-main);
    font-family: 'Montserrat', sans-serif;
}

/* ===== Cuenta atrás ===== */
.cks-countdown {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
}
.cks-logo {
    width: 210px;
    height: 210px;
    object-fit: contain;
    border-radius: 34px;
    box-shadow: 0 0 70px rgba(11, 92, 220, 0.65);
    animation: cksLogoIn 0.9s cubic-bezier(0.2, 0.9, 0.2, 1) both, cksFloat 5s ease-in-out 1s infinite;
}
.cks-countdown-label {
    font-family: 'Russo One', sans-serif;
    font-size: 3rem;
    font-style: italic;
    text-transform: uppercase;
    letter-spacing: 8px;
    color: var(--text-muted);
    margin-top: 22px;
    animation: cksFadeIn 0.8s 0.25s both;
}
.cks-countdown-clock {
    font-family: 'Russo One', sans-serif;
    font-size: 15rem;
    line-height: 1;
    font-variant-numeric: tabular-nums;
    background: linear-gradient(180deg, #ffffff 8%, #4f8dff 58%, #0b5cdc 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    filter: drop-shadow(0 0 34px rgba(11, 92, 220, 0.65));
    animation: cksTick 0.9s ease-out;
}
.cks-countdown-clock.cks-hot {
    font-size: 16.5rem;
    background: linear-gradient(180deg, #ffffff 8%, #ffd400 55%, #d97706 100%);
    -webkit-background-clip: text;
    background-clip: text;
    filter: drop-shadow(0 0 44px rgba(255, 212, 0, 0.8));
}
.cks-countdown-clock.cks-zero { animation: cksZeroPulse 0.9s ease-out; }
.cks-countdown-sub {
    margin-top: 18px;
    color: var(--text-muted);
    letter-spacing: 4px;
    text-transform: uppercase;
    font-size: 1.05rem;
    animation: cksFadeIn 0.8s 0.5s both;
}

/* ===== Sorteo ===== */
.cks-draw {
    position: absolute;
    inset: 0;
    padding: 38px 56px 34px;
    display: flex;
    flex-direction: column;
    gap: 22px;
}
.cks-draw.cks-descending .cks-center { animation: cksDescend 0.6s cubic-bezier(0.5, 0, 0.75, 0) forwards; }
.cks-topbar { display: flex; align-items: center; gap: 20px; }
.cks-topbar img {
    width: 68px;
    height: 68px;
    border-radius: 16px;
    object-fit: contain;
    box-shadow: 0 0 26px rgba(11, 92, 220, 0.55);
}
.cks-topbar-title {
    font-family: 'Russo One', sans-serif;
    font-size: 2rem;
    font-style: italic;
    text-transform: uppercase;
    letter-spacing: 3px;
    background: linear-gradient(90deg, #ffffff, #4f8dff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
.cks-topbar-div {
    font-family: 'Russo One', sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 7px 16px;
    border-radius: 999px;
    background: rgba(11, 92, 220, 0.2);
    border: 1px solid rgba(79, 141, 255, 0.35);
    color: #bcd4ff;
}
.cks-live {
    margin-left: auto;
    display: inline-flex;
    align-items: center;
    gap: 9px;
    font-family: 'Russo One', sans-serif;
    font-size: 0.9rem;
    letter-spacing: 2px;
    color: #fca5a5;
}
.cks-live-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ef4444;
    box-shadow: 0 0 12px rgba(239, 68, 68, 0.9);
    animation: cksLivePulse 1.4s ease-in-out infinite;
}
.cks-draw-main {
    flex: 1;
    display: grid;
    grid-template-columns: 340px 1fr;
    gap: 28px;
    min-height: 0;
}
.cks-side { display: flex; flex-direction: column; gap: 20px; min-height: 0; }
.cks-panel {
    position: relative;
    overflow: hidden;
    background: rgba(14, 21, 36, 0.72);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 18px;
    padding: 20px 22px;
    backdrop-filter: blur(6px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}
.cks-panel::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, transparent 35%, rgba(79, 141, 255, 0.10) 50%, transparent 65%);
    transform: translateX(-100%);
    animation: cksPanelShimmer 6s linear infinite;
    pointer-events: none;
}
.cks-panel-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    font-family: 'Russo One', sans-serif;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--text-muted);
    margin-bottom: 16px;
}
.cks-panel-count { font-size: 0.85rem; color: #6fa4ff; letter-spacing: 0; }
.cks-panel-reservas .cks-panel-count { color: #64748b; }
.cks-kart-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.cks-kart-pill {
    font-family: 'Russo One', sans-serif;
    font-size: 1.7rem;
    text-align: center;
    padding: 12px 0;
    border-radius: 12px;
    background: #05070d;
    border: 1px solid #1e2c48;
    color: var(--color-secondary-accent);
    transition: opacity 0.35s ease, transform 0.35s ease, color 0.35s ease, border-color 0.35s ease, text-decoration-color 0.35s ease;
}
.cks-kart-pill.cks-used {
    opacity: 0.3;
    transform: scale(0.82);
    color: #64748b;
    border-color: rgba(255, 255, 255, 0.06);
    text-decoration: line-through;
}
.cks-kart-pill.cks-reserve {
    color: #8fa3c4;
    font-size: 1.35rem;
    background: rgba(5, 7, 13, 0.6);
    border-style: dashed;
}
.cks-empty {
    color: #64748b;
    font-style: italic;
    font-size: 0.95rem;
    padding: 12px 0;
    animation: cksBlink 2.6s ease-in-out infinite;
}
.cks-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 0;
    padding-top: 4px;
}
.cks-race-title {
    font-family: 'Russo One', sans-serif;
    font-size: 2.6rem;
    font-style: italic;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin: 0 0 22px;
    text-shadow: 0 0 26px rgba(11, 92, 220, 0.5);
}
.cks-race-title span {
    color: var(--color-secondary-accent);
    text-shadow: 0 0 26px rgba(255, 212, 0, 0.6);
}
.cks-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    width: 100%;
    align-content: start;
}
.cks-cards > :nth-child(9) { grid-column: 2; }
.cks-cards > :nth-child(10) { grid-column: 3; }
.cks-pilot-card {
    background: #0e1524;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 14px;
    padding: 15px 14px;
    text-align: center;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0;
    transform: translateY(18px);
    animation: cksCardIn 0.5s ease forwards;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.cks-pilot-card.cks-revealed {
    border-color: rgba(11, 92, 220, 0.85);
    box-shadow: 0 0 22px rgba(11, 92, 220, 0.45);
}
.cks-pilot-name {
    font-weight: 800;
    font-size: 1.18rem;
    color: #e2e8f0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 10px;
}
.cks-kart-slot {
    height: 96px;
    background: #05070d;
    border-radius: 8px;
    border: 1px solid #1e2c48;
    overflow: hidden;
    position: relative;
    font-family: 'Russo One', sans-serif;
    font-size: 2.7rem;
    color: var(--color-secondary-accent);
}
.cks-kart-list { position: absolute; top: 0; left: 0; width: 100%; will-change: transform; }
.cks-kart-list-item { height: 96px; display: flex; align-items: center; justify-content: center; }
.cks-kart-pending { display: flex; align-items: center; justify-content: center; color: #334b74; }
.cks-dots { letter-spacing: 6px; font-size: 2.2rem; animation: cksBlink 1.1s ease-in-out infinite; }
.cks-buffer-hint {
    margin-top: 18px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: #bcd4ff;
    font-size: 1rem;
    letter-spacing: 1px;
    animation: cksBlink 2s ease-in-out infinite;
}
.cks-past {
    background: rgba(14, 21, 36, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 18px;
    padding: 16px 22px;
    min-height: 168px;
}
.cks-past-label {
    font-family: 'Russo One', sans-serif;
    font-size: 1.02rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--text-muted);
    margin-bottom: 12px;
}
.cks-past-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.cks-past-race {
    background: rgba(5, 7, 13, 0.6);
    border: 1px solid rgba(79, 141, 255, 0.2);
    border-radius: 12px;
    padding: 10px 14px;
    animation: cksSlideUp 0.5s ease both;
}
.cks-past-title {
    font-family: 'Russo One', sans-serif;
    color: var(--accent-bright);
    font-size: 0.98rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 8px;
}
.cks-past-chips { display: grid; grid-template-columns: repeat(2, 1fr); gap: 5px 16px; }
.cks-past-chip { display: flex; justify-content: space-between; gap: 8px; font-size: 0.9rem; color: #cbd5e1; }
.cks-past-chip b { color: var(--color-secondary-accent); font-family: 'Russo One', sans-serif; }

/* ===== Resumen ===== */
.cks-summary {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 26px;
    padding: 46px 64px 40px;
}
.cks-summary-head { display: flex; align-items: center; gap: 22px; }
.cks-summary-head img {
    width: 84px;
    height: 84px;
    border-radius: 18px;
    object-fit: contain;
    box-shadow: 0 0 34px rgba(11, 92, 220, 0.6);
}
.cks-summary-title {
    font-family: 'Russo One', sans-serif;
    font-size: 2.6rem;
    font-style: italic;
    text-transform: uppercase;
    letter-spacing: 4px;
    background: linear-gradient(90deg, #ffffff, #4f8dff 68%, #ffd400);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
.cks-summary-sub { color: var(--text-muted); letter-spacing: 2px; text-transform: uppercase; font-size: 0.95rem; margin-top: 4px; }
.cks-summary .cks-live { margin-left: auto; }
.cks-summary-grid {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 26px;
    min-height: 0;
}
.cks-summary-race {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 0;
    background: rgba(14, 21, 36, 0.8);
    border: 1px solid rgba(79, 141, 255, 0.25);
    border-radius: 20px;
    padding: 22px;
    opacity: 0;
    transform: translateY(30px);
    animation: cksSlideUp 0.6s ease forwards;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.4);
}
.cks-summary-race::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, transparent 30%, rgba(79, 141, 255, 0.09) 50%, transparent 70%);
    transform: translateX(-100%);
    animation: cksPanelShimmer 5s linear infinite;
    pointer-events: none;
}
.cks-summary-race-title {
    font-family: 'Russo One', sans-serif;
    font-size: 1.6rem;
    font-style: italic;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--accent-bright);
    margin-bottom: 14px;
    text-shadow: 0 0 18px rgba(11, 92, 220, 0.5);
}
.cks-summary-rows { display: flex; flex-direction: column; gap: 9px; overflow: hidden; }
.cks-summary-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 8px 13px;
    border-radius: 9px;
    background: #05070d;
    border: 1px solid rgba(255, 255, 255, 0.05);
    opacity: 0;
    transform: translateX(-16px);
    animation: cksRowIn 0.45s ease forwards;
}
.cks-summary-name {
    font-weight: 600;
    font-size: 1.02rem;
    color: #e2e8f0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.cks-summary-kart {
    font-family: 'Russo One', sans-serif;
    font-size: 1.5rem;
    color: var(--color-secondary-accent);
    flex: none;
}

/* ===== Aviso de guardado (discreto) ===== */
.cks-save-notice {
    position: absolute;
    right: 40px;
    bottom: 16px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.88rem;
    color: #94a3b8;
    opacity: 0.85;
    z-index: 5;
    max-width: 760px;
    text-align: right;
}
.cks-save-notice.ok { color: #34d399; }
.cks-save-notice.error { color: #fca5a5; animation: cksBlink 1.6s ease-in-out infinite; }

/* ===== Animaciones ===== */
@keyframes cksBgDrift {
    0% { background-position: 0% 0%, 100% 100%, 50% 0%, 0 0; }
    100% { background-position: 60% 40%, 20% 30%, 30% 40%, 0 0; }
}
@keyframes cksLogoIn {
    from { opacity: 0; transform: translateY(-26px) scale(0.9); }
    to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes cksFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
}
@keyframes cksFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
@keyframes cksTick {
    0% { transform: scale(1.14); opacity: 0.55; }
    35% { transform: scale(1); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
}
@keyframes cksZeroPulse {
    0% { transform: scale(1.3); opacity: 0.4; }
    60% { transform: scale(1); opacity: 1; }
    100% { transform: scale(1.06); opacity: 1; }
}
@keyframes cksLivePulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.35); opacity: 0.55; }
}
@keyframes cksBlink {
    0%, 100% { opacity: 0.55; }
    50% { opacity: 1; }
}
@keyframes cksCardIn {
    to { opacity: 1; transform: translateY(0); }
}
@keyframes cksDescend {
    to { opacity: 0; transform: translateY(240px) scale(0.9); filter: blur(3px); }
}
@keyframes cksSlideUp {
    to { opacity: 1; transform: translateY(0); }
}
@keyframes cksRowIn {
    to { opacity: 1; transform: translateX(0); }
}
@keyframes cksPanelShimmer {
    0% { transform: translateX(-100%); }
    55%, 100% { transform: translateX(100%); }
}

/* ===== Diseño v2 (referencia del stream) ===== */
.cks-stage-wrap { background: #070b14; }
.cks-bg {
    background:
        linear-gradient(rgba(120, 150, 255, 0.045) 1px, transparent 1px) 0 0 / 100% 54px,
        linear-gradient(90deg, rgba(120, 150, 255, 0.045) 1px, transparent 1px) 0 0 / 54px 100%,
        radial-gradient(circle at 50% -10%, rgba(47, 107, 255, 0.16), transparent 55%),
        radial-gradient(circle at 100% 100%, rgba(47, 107, 255, 0.07), transparent 45%),
        #070b14;
    background-size: 100% 54px, 54px 100%, 100% 100%, 100% 100%, auto;
    animation: cksBgDrift 8s ease-in-out infinite alternate;
}
@keyframes cksBgDrift {
    0% { background-position: 0 0, 0 0, 50% -10%, 100% 100%, 0 0; }
    100% { background-position: 0 54px, 54px 0, 50% 4%, 92% 92%, 0 0; }
}

/* Header */
.cks-draw { padding: 26px 42px 26px; gap: 20px; }
.cks-summary { padding: 26px 42px 30px; gap: 22px; }
.cks-topbar { gap: 16px; height: 64px; }
.cks-logo-frame {
    width: auto;
    height: 64px;
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    box-shadow: none;
}
.cks-topbar img,
.cks-logo-frame img {
    width: auto;
    height: 60px;
    max-width: 135px;
    border-radius: 0;
    object-fit: contain;
    box-shadow: none;
    mix-blend-mode: screen;
    animation: cksFloat 6s ease-in-out infinite;
}
.cks-topbar-title {
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-style: italic;
    font-size: 2.05rem;
    letter-spacing: 1px;
    line-height: 1;
    text-transform: uppercase;
    background: none;
    -webkit-background-clip: border-box;
    background-clip: border-box;
    color: #eef3ff;
    filter: none;
}
.cks-title-white { color: #eef3ff; text-shadow: 0 2px 14px rgba(0, 0, 0, 0.55); }
.cks-title-blue { color: #3b82f6; text-shadow: 0 0 20px rgba(59, 130, 246, 0.7); }
.cks-topbar-div {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 0.8rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 8px 16px;
    border-radius: 8px;
    color: #bcd4ff;
    background: rgba(47, 107, 255, 0.12);
    border: 1px solid rgba(96, 146, 255, 0.45);
}
.cks-live {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 15px;
    border-radius: 999px;
    font-size: 0.76rem;
    letter-spacing: 2px;
    color: #ff8a8a;
    background: rgba(239, 68, 68, 0.08);
    border: 1px solid rgba(239, 68, 68, 0.5);
}
.cks-live-dot { width: 9px; height: 9px; }

/* Layout */
.cks-draw-main { grid-template-columns: 330px 1fr; gap: 26px; }
.cks-side { gap: 16px; }
.cks-panel-karts,
.cks-panel-reservas { flex: 0 0 auto; }
.cks-panel {
    padding: 14px 14px 10px;
    border-radius: 14px;
    background: linear-gradient(180deg, rgba(13, 22, 40, 0.96), rgba(9, 16, 30, 0.96));
    border: 1px solid rgba(84, 130, 255, 0.18);
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.38);
    backdrop-filter: none;
}
.cks-panel::after { opacity: 0.5; }
.cks-panel-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 0.9rem;
    letter-spacing: 1.6px;
    color: #dbe6ff;
    margin-bottom: 10px;
}
.cks-panel-titletext { display: inline-flex; align-items: center; gap: 9px; }
.cks-panel-titletext i { color: #f2c400; font-size: 0.82rem; }
.cks-panel-reservas .cks-panel-titletext i { color: #6f8fd6; }
.cks-panel-count {
    font-family: 'Russo One', sans-serif;
    font-size: 0.78rem;
    letter-spacing: 1px;
    color: #f2c400;
    background: rgba(242, 196, 0, 0.1);
    border: 1px solid rgba(242, 196, 0, 0.4);
    border-radius: 6px;
    padding: 3px 9px;
}
.cks-count-muted {
    color: #8ea0c0;
    background: rgba(142, 160, 192, 0.08);
    border-color: rgba(142, 160, 192, 0.28);
}

/* Karts activos */
.cks-kart-rows { display: flex; flex-direction: column; gap: 6px; }
.cks-kart-row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 6px 12px 6px 14px;
    border-radius: 6px;
    background: rgba(8, 14, 27, 0.85);
    border: 1px solid rgba(84, 130, 255, 0.14);
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    animation: cksListIn 0.45s cubic-bezier(0.2, 0.8, 0.25, 1) forwards;
    transition: opacity 0.3s ease, transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
}
.cks-kart-row::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #ffd400, #e0a800);
    transition: background 0.3s ease, opacity 0.3s ease;
}
.cks-kart-row:hover {
    border-color: rgba(96, 146, 255, 0.45);
    background: rgba(12, 20, 38, 0.95);
}
.cks-kart-label {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-style: italic;
    font-size: 0.98rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #f2c400;
}
.cks-kart-status {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-size: 0.63rem;
    font-weight: 800;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #39d98a;
    white-space: nowrap;
}
.cks-status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 8px rgba(34, 197, 94, 0.9);
    transition: background 0.3s ease, box-shadow 0.3s ease;
}
.cks-kart-row.cks-used {
    opacity: 0.42;
    transform: scale(0.98);
    background: rgba(6, 10, 20, 0.7);
    animation: cksUsedPulse 0.55s ease;
}
.cks-kart-row.cks-used::before { background: #33415c; }
.cks-kart-row.cks-used .cks-kart-label { color: #8ea0c0; text-decoration: line-through; }
.cks-kart-row.cks-used .cks-kart-status { color: #8ea0c0; }
.cks-kart-row.cks-used .cks-status-dot { background: #64748b; box-shadow: none; }
.cks-kart-hint {
    margin-top: 8px;
    text-align: center;
    font-size: 0.67rem;
    color: #6b7c99;
    letter-spacing: 0.3px;
}
@keyframes cksListIn {
    from { opacity: 0; transform: translateX(-14px); }
    to { opacity: 1; transform: translateX(0); }
}
@keyframes cksUsedPulse {
    0% { box-shadow: 0 0 0 rgba(34, 197, 94, 0.5); border-color: rgba(34, 197, 94, 0.7); }
    100% { box-shadow: 0 0 0 rgba(34, 197, 94, 0); }
}

/* Reservas */
.cks-res-list { display: flex; flex-wrap: wrap; gap: 9px; }
.cks-res-card {
    min-width: 62px;
    padding: 7px 10px;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    background: rgba(8, 14, 27, 0.85);
    border: 1px solid rgba(84, 130, 255, 0.16);
    opacity: 0;
    animation: cksListIn 0.45s ease forwards;
}
.cks-res-num {
    font-family: 'Russo One', sans-serif;
    font-size: 0.98rem;
    color: #dbe6ff;
    letter-spacing: 0.5px;
}
.cks-res-tag { font-size: 0.58rem; letter-spacing: 1.6px; color: #6b7c99; }

/* Título de carrera */
.cks-race-title {
    display: inline-flex;
    align-items: baseline;
    gap: 14px;
    margin: 0 0 20px;
    padding: 8px 30px;
    border-radius: 14px;
    background: linear-gradient(180deg, rgba(47, 107, 255, 0.22), rgba(13, 28, 60, 0.45));
    border: 1px solid rgba(96, 146, 255, 0.5);
    box-shadow: 0 0 26px rgba(47, 107, 255, 0.25), inset 0 0 18px rgba(47, 107, 255, 0.15);
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    font-weight: 800;
    font-size: 2.35rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-shadow: none;
    animation: cksTitleFloat 4.5s ease-in-out infinite;
}
.cks-race-title .cks-race-word { color: #eef3ff; text-shadow: none; }
.cks-race-title .cks-race-num { color: #f2c400; text-shadow: 0 0 22px rgba(242, 196, 0, 0.6); }
@keyframes cksTitleFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
}

/* Tarjetas */
.cks-cards { gap: 18px 20px; }
.cks-pilot-card {
    padding: 12px 14px 14px;
    min-height: 132px;
    gap: 10px;
    justify-content: flex-start;
    border-radius: 12px;
    background: linear-gradient(180deg, #0d1830 0%, #0a1224 100%);
    border: 1px solid rgba(84, 130, 255, 0.28);
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.03);
}
.cks-pilot-card.cks-revealed {
    border-color: rgba(96, 146, 255, 0.8);
    box-shadow: 0 0 24px rgba(47, 107, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05);
}
.cks-pilot-name {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 1.02rem;
    letter-spacing: 0.6px;
    color: #eef3ff;
    margin-bottom: 0;
}
.cks-kart-slot {
    height: 72px;
    font-size: 2.2rem;
    border-radius: 8px;
    background: #050a14;
    border: 1px solid rgba(84, 130, 255, 0.22);
}
.cks-kart-list-item { height: 72px; }
.cks-kart-pending { color: #3a5688; }
.cks-dots { font-size: 1.9rem; letter-spacing: 5px; }

/* Carreras ya sorteadas */
.cks-past {
    min-height: 0;
    padding: 16px 20px 18px;
    border-radius: 16px;
    background: linear-gradient(180deg, rgba(13, 22, 40, 0.96), rgba(9, 16, 30, 0.96));
    border: 1px solid rgba(84, 130, 255, 0.18);
}
.cks-past-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 14px;
}
.cks-past-label {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 1rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #eef3ff;
}
.cks-past-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #f2c400;
    box-shadow: 0 0 10px rgba(242, 196, 0, 0.9);
    animation: cksLivePulse 2s ease-in-out infinite;
}
.cks-past-hint { font-size: 0.76rem; color: #7f90ad; letter-spacing: 0.4px; }
.cks-past-hint kbd {
    background: #0b1426;
    border: 1px solid rgba(84, 130, 255, 0.3);
    border-bottom-width: 2px;
    border-radius: 5px;
    padding: 2px 7px;
    font-family: ui-monospace, monospace;
    font-size: 0.72rem;
    color: #bcd4ff;
}
.cks-past-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.cks-past-list .cks-past-race:only-child { grid-column: 1 / -1; }
.cks-past-race {
    padding: 12px 16px 14px;
    border-radius: 12px;
    background: linear-gradient(180deg, rgba(11, 19, 35, 0.92), rgba(8, 14, 27, 0.92));
    border: 1px solid rgba(84, 130, 255, 0.2);
    animation: cksSlideUp 0.5s ease both;
}
.cks-past-racehead { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.cks-past-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-style: italic;
    font-size: 0.95rem;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #3b82f6;
}
.cks-past-done {
    font-size: 0.58rem;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #39d98a;
    background: rgba(34, 197, 94, 0.12);
    border: 1px solid rgba(34, 197, 94, 0.4);
    border-radius: 6px;
    padding: 3px 8px;
}
.cks-past-rows { display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px 20px; }
.cks-past-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 6px 8px;
    border-radius: 6px;
    background: rgba(6, 11, 21, 0.45);
    opacity: 0;
    animation: cksRowIn 0.4s ease forwards;
}
.cks-past-name {
    font-size: 0.86rem;
    font-weight: 600;
    color: #cbd7ee;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.cks-past-kart {
    flex: none;
    min-width: 26px;
    text-align: center;
    font-family: 'Russo One', sans-serif;
    font-size: 0.9rem;
    color: #f2c400;
    background: rgba(242, 196, 0, 0.08);
    border: 1px solid rgba(242, 196, 0, 0.45);
    border-radius: 5px;
    padding: 2px 7px;
}

/* Resumen */
.cks-summary-grid { gap: 18px; }
.cks-summary-race {
    padding: 16px 18px;
    border-radius: 16px;
    background: linear-gradient(180deg, rgba(13, 22, 40, 0.96), rgba(9, 16, 30, 0.96));
    border: 1px solid rgba(84, 130, 255, 0.22);
    animation: cksSlideUp 0.6s ease forwards;
}
.cks-summary-rows { display: grid; grid-template-columns: repeat(2, 1fr); gap: 7px 18px; overflow: visible; }
.cks-summary-rows .cks-past-row { padding: 8px 10px; }
.cks-summary-rows .cks-past-name { font-size: 0.95rem; }
.cks-summary-rows .cks-past-kart { font-size: 1rem; min-width: 30px; }

/* Cuenta atrás: logo nuevo (JPEG con fondo negro, se funde con screen) */
.cks-logo {
    width: auto;
    height: auto;
    max-width: 620px;
    padding: 0;
    border-radius: 0;
    object-fit: contain;
    background: none;
    border: none;
    box-shadow: none;
    mix-blend-mode: screen;
}

/* ===== Transición cuenta atrás -> sorteo (equilibrada) ===== */
.cks-draw { animation: cksDrawEnter 0.55s cubic-bezier(0.2, 0.9, 0.25, 1) both; }
@keyframes cksDrawEnter {
    0% { opacity: 0; transform: scale(1.03); filter: blur(4px); }
    100% { opacity: 1; transform: scale(1); filter: blur(0); }
}
.cks-draw::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 3;
    pointer-events: none;
    background: linear-gradient(105deg, transparent 36%, rgba(140, 190, 255, 0.12) 48%, rgba(255, 255, 255, 0.08) 52%, transparent 64%);
    transform: translateX(-130%);
    animation: cksDrawSweep 0.8s ease-out 0.05s both;
}
@keyframes cksDrawSweep { to { transform: translateX(130%); } }

.cks-launch {
    position: absolute;
    inset: 0;
    z-index: 30;
    overflow: hidden;
    pointer-events: none;
    animation: cksLaunchOut 0.72s ease-out both;
}
@keyframes cksLaunchOut {
    0%, 68% { opacity: 1; }
    100% { opacity: 0; }
}
.cks-launch-flash {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(226, 238, 255, 0.9) 0%, rgba(120, 175, 255, 0.5) 22%, rgba(47, 107, 255, 0) 62%);
    opacity: 0;
    animation: cksLaunchFlash 0.6s ease-out forwards;
}
@keyframes cksLaunchFlash {
    0% { opacity: 0; transform: scale(0.5); }
    22% { opacity: 0.7; }
    100% { opacity: 0; transform: scale(1.45); }
}
.cks-launch-ring {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 300px;
    height: 300px;
    margin: -150px 0 0 -150px;
    border-radius: 50%;
    border: 2px solid rgba(150, 195, 255, 0.7);
    box-shadow: 0 0 26px rgba(120, 180, 255, 0.45);
    animation: cksShockwave 0.65s cubic-bezier(0.2, 0.7, 0.3, 1) forwards;
}
@keyframes cksShockwave {
    0% { opacity: 0.55; transform: scale(0.4); }
    100% { opacity: 0; transform: scale(3.1); }
}

/* ===== Resumen: 3 columnas (una por carrera), 1 columna de pilotos ===== */
.cks-summary-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    flex: 1;
    min-height: 0;
}
.cks-summary-race {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height: 0;
    padding: 16px 18px;
    border-radius: 16px;
    background: linear-gradient(180deg, rgba(13, 22, 40, 0.96), rgba(9, 16, 30, 0.96));
    border: 1px solid rgba(84, 130, 255, 0.22);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.4);
    animation: cksSlideUp 0.6s ease forwards;
}
.cks-summary-racebar {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: none;
}
.cks-summary-cards {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
    min-height: 0;
}
.cks-summary-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex: 1;
    min-width: 0;
    min-height: 0;
    padding: 8px 14px;
    border-radius: 10px;
    background: linear-gradient(180deg, rgba(11, 19, 35, 0.95), rgba(8, 14, 27, 0.95));
    border: 1px solid rgba(84, 130, 255, 0.22);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    opacity: 0;
    animation: cksSlideUp 0.45s ease forwards;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.cks-summary-card:hover {
    border-color: rgba(96, 146, 255, 0.6);
    box-shadow: 0 0 20px rgba(47, 107, 255, 0.35);
}
.cks-summary-cardname {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 1.02rem;
    line-height: 1.15;
    letter-spacing: 0.4px;
    color: #eef3ff;
    text-align: left;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
}
.cks-summary-cardkart {
    flex: none;
    font-family: 'Russo One', sans-serif;
    font-size: 1.8rem;
    line-height: 1;
    color: #f2c400;
    background: rgba(242, 196, 0, 0.08);
    border: 1px solid rgba(242, 196, 0, 0.45);
    border-radius: 7px;
    padding: 3px 13px;
    text-shadow: 0 0 18px rgba(242, 196, 0, 0.45);
}

/* ===== Entrada escalonada del sorteo ===== */
.cks-draw { animation: cksDrawEnter 0.45s cubic-bezier(0.2, 0.9, 0.25, 1) backwards; }
@keyframes cksDrawEnter {
    0% { opacity: 0; transform: scale(1.02); filter: blur(3px); }
    100% { opacity: 1; transform: scale(1); filter: blur(0); }
}
.cks-draw::after { animation-delay: 0.75s; animation-duration: 0.7s; }
.cks-draw .cks-topbar { animation: cksEnterDown 0.4s cubic-bezier(0.2, 0.9, 0.25, 1) 0.08s backwards; }
.cks-race-title { animation: cksEnterPop 0.45s cubic-bezier(0.2, 0.9, 0.25, 1) 0.34s both, cksTitleFloat 4.5s ease-in-out 1.1s infinite; }
.cks-panel-karts { animation: cksEnterLeft 0.45s cubic-bezier(0.2, 0.9, 0.25, 1) 0.24s both; }
.cks-panel-reservas { animation: cksEnterLeft 0.45s cubic-bezier(0.2, 0.9, 0.25, 1) 0.46s both; }
.cks-past { animation: cksEnterUp 0.45s cubic-bezier(0.2, 0.9, 0.25, 1) 0.72s both; }
.cks-launch-ring { animation-delay: 0.12s; }
@keyframes cksEnterDown {
    from { opacity: 0; transform: translateY(-16px); }
    to { opacity: 1; transform: translateY(0); }
}
@keyframes cksEnterLeft {
    from { opacity: 0; transform: translateX(-24px); }
    to { opacity: 1; transform: translateX(0); }
}
@keyframes cksEnterUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
}
@keyframes cksEnterPop {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
}
`;export{Ss as default};
