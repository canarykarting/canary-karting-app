var Oe=Object.defineProperty,Fe=Object.defineProperties;var He=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var ue=(o,l,d)=>l in o?Oe(o,l,{enumerable:!0,configurable:!0,writable:!0,value:d}):o[l]=d,k=(o,l)=>{for(var d in l||(l={}))ge.call(l,d)&&ue(o,d,l[d]);if(J)for(var d of J(l))be.call(l,d)&&ue(o,d,l[d]);return o},D=(o,l)=>Fe(o,He(l));var U=(o,l)=>{var d={};for(var i in o)ge.call(o,i)&&l.indexOf(i)<0&&(d[i]=o[i]);if(o!=null&&J)for(var i of J(o))l.indexOf(i)<0&&be.call(o,i)&&(d[i]=o[i]);return d};var ee=(o,l,d)=>new Promise((i,b)=>{var L=p=>{try{w(d.next(p))}catch(u){b(u)}},C=p=>{try{w(d.throw(p))}catch(u){b(u)}},w=p=>p.done?i(p.value):Promise.resolve(p.value).then(L,C);w((d=d.apply(o,l)).next())});import{r as m,j as t,D as ye,g as _e,l as Be,R as We}from"./index-Bcu6ChRh.js";import{f as Ke,s as qe,c as Je,p as Ge}from"./sorteoLogic-zasGqzHl.js";import{h as Ye}from"./html2canvas.esm-V-rdnldR.js";const tt=()=>{const o=m.useRef(null),l=e=>{if(!e)return e;if(e.historial&&e.pilotosRows){const{map:a}=Ge(e.historial),r=e.pilotosRows.map(f=>{const R=(f.name||"").trim().toLowerCase();if(R&&a.has(R)){const K=Array.from(a.get(R)).join(", "),q=f.history?f.history+", ":"";return D(k({},f),{history:q+K})}return D(k({},f),{history:f.history||""})}),s=e,{historial:c}=s,S=U(s,["historial"]);return D(k({},S),{pilotosRows:r})}return e.pilotosRows&&(e.pilotosRows=e.pilotosRows.map(a=>D(k({},a),{history:a.history||""}))),e},i=(()=>{try{const e=localStorage.getItem("sorteo_auto_save");return e?l(JSON.parse(e)):null}catch(e){return null}})(),[b,L]=m.useState((i==null?void 0:i.karts)||""),[C,w]=m.useState((i==null?void 0:i.reservas)||""),[p,u]=m.useState((i==null?void 0:i.results)||[]),[I,H]=m.useState(!1),[_,ve]=m.useState((i==null?void 0:i.isOscuroMode)||!1),[te,G]=m.useState("Copiar al Historial"),[A,z]=m.useState((i==null?void 0:i.lastAssignments)||[]),[O,we]=m.useState([]),[j,se]=m.useState((i==null?void 0:i.activeDivision)||1),[T,Qe]=m.useState((i==null?void 0:i.activeSeason)||"2026"),[g,M]=m.useState((i==null?void 0:i.pilotosRows)||[]),[N,ae]=m.useState(()=>{try{return JSON.parse(localStorage.getItem("sorteo_saves")||"[]")}catch(e){return[]}}),[B,Y]=m.useState(""),[F,re]=m.useState(""),[oe,W]=m.useState(""),V=m.useMemo(()=>(O||[]).filter(e=>String(e.season)===String(T)).sort((e,s)=>e.name.localeCompare(s.name)),[O,T]),ie=m.useMemo(()=>{const e={};return(O||[]).filter(s=>String(s.season)===String(T)).forEach(s=>{const a=s.name.trim().toLowerCase();e[a]?e[a].division!==j&&s.division===j&&(e[a]=s):e[a]=s}),e},[O,T,j]),ne=m.useMemo(()=>new Set(g.map(e=>e.name.trim().toLowerCase()).filter(Boolean)),[g]),je=m.useMemo(()=>V.filter(e=>!ne.has(e.name.trim().toLowerCase())).sort((e,s)=>{const a=e.division===0?99:e.division,r=s.division===0?99:s.division;return a!==r?a-r:e.name.localeCompare(s.name)}),[V,ne]);m.useEffect(()=>{const e={karts:b,reservas:C,results:p.map(s=>{const c=s,{listaAnimada:a}=c;return U(c,["listaAnimada"])}),pilotosRows:g,activeDivision:j,lastAssignments:A,isOscuroMode:_,activeSeason:T};localStorage.setItem("sorteo_auto_save",JSON.stringify(e))},[b,C,p,g,j,A,_,T]);const Q=(e,s=O)=>{if(!s||s.length===0)return;const a=s.filter(r=>r.division===e&&r.season===T).sort((r,c)=>r.name.localeCompare(c.name)).map(r=>({name:r.name,weight:"",history:"",photo:r.photo||""}));M(a)};m.useEffect(()=>{ee(null,null,function*(){try{const s=yield _e();we(s),g.length===0&&Q(j,s)}catch(s){console.error("Error fetching drivers",s)}})},[]);const ke=()=>{const e=window.prompt("Introduce un nombre para guardar esta sesión:",`Carrera - Div ${j} - ${new Date().toLocaleDateString()}`);if(!e)return;const s={id:Date.now().toString(),name:e,karts:b,reservas:C,activeDivision:j,pilotosRows:g,results:p,lastAssignments:A},a=N.findIndex(S=>S.name===e);let r,c=s.id;if(a!==-1)if(window.confirm(`Ya existe una sesión llamada "${e}". ¿Deseas sobreescribirla?`))r=[...N],c=N[a].id,r[a]=D(k({},s),{id:c});else return;else r=[...N,s];ae(r),localStorage.setItem("sorteo_saves",JSON.stringify(r)),Y(c)},Ne=e=>{const s=e.target.value;if(Y(s),!s)return;const a=N.find(r=>r.id===s);if(a&&window.confirm(`¿Cargar la sesión "${a.name}"? Se sobrescribirán los datos actuales en pantalla.`)){const r=l(a);L(r.karts||""),w(r.reservas||""),se(r.activeDivision||1),M(r.pilotosRows||[]),u(r.results||[]),z(r.lastAssignments||[])}},Ce=()=>{if(!B){alert("Por favor, selecciona una sesión de la lista para borrarla.");return}const e=N.find(s=>s.id===B);if(e&&window.confirm(`¿Seguro que quieres borrar la sesión "${e.name}"?`)){const s=N.filter(a=>a.id!==B);ae(s),localStorage.setItem("sorteo_saves",JSON.stringify(s)),Y("")}},Se=e=>{const s=parseInt(e.target.value);se(s),Q(s)},X=(e,s,a)=>{const r=[...g];if(s==="name"){const c=ie[a.trim().toLowerCase()];r[e].photo=(c==null?void 0:c.photo)||""}r[e][s]=a,M(r)},Re=()=>{M([...g,{name:"",weight:"",history:"",photo:""}])},De=()=>{if(!F)return;const e=ie[F.trim().toLowerCase()]||{};M([...g,{name:F,weight:"",history:"",photo:e.photo||""}]),re("")},Le=e=>{const s=[...g];s.splice(e,1),M(s)},Ie=()=>ee(null,null,function*(){if(o.current)try{const e=yield Ye(o.current,{scale:2,logging:!1,useCORS:!0,imageTimeout:65e3}),s=document.createElement("a");s.download=`sorteo-karts-${Date.now()}.png`,s.href=e.toDataURL("image/png"),s.click()}catch(e){console.error("Error al generar la imagen:",e)}}),Ae=()=>{const e=g.filter(n=>n.name.trim()),s=e.map(n=>n.name.trim()),a=b.split(/[\n;]+/).map(n=>n.trim()).filter(n=>n),r=new Map,c=new Map;e.forEach(n=>{const x=n.name.trim().toLowerCase();c.set(x,n.name.trim());const h=(n.history||"").split(",").map(v=>v.trim().toLowerCase()).filter(Boolean);r.set(x,new Set(h))});const S=["51","60","61","39"];if(e.forEach(n=>{const x=parseFloat(n.weight);if(!isNaN(x)&&75-x>15){const h=n.name.trim().toLowerCase();let v=r.get(h);v||(v=new Set,r.set(h,v)),S.forEach(P=>v.add(P)),c.has(h)||c.set(h,n.name.trim())}}),u([]),z([]),s.length===0||a.length===0){alert("⚠️ Debes introducir al menos un corredor y un kart.");return}if(s.length>a.length){alert("⚠️ Hay más corredores que karts disponibles.");return}let f=[...s],R=[...a],K={};const q=e.find(n=>n.name.trim().toLowerCase()==="richard"),Pe=a.some(n=>n.trim()==="55");if(q&&Pe){const n=q.name.trim();K[n]="55",f=f.filter(x=>x!==n),R=R.filter(x=>x.trim()!=="55")}const le=Ke(f,R,r);if(!le){const n=[];f.forEach(h=>{const v=r.get(h.toLowerCase().trim());if(v&&v.size>=R.length){const P=c.get(h.toLowerCase().trim())||h;n.push(P)}});let x="No ha sido posible encontrar una asignación perfecta sin repeticiones.";if(n.length>0?x=`No hay suficientes karts distintos para evitar repetir con: ${n.join(", ")}. ¿Deseas continuar permitiendo repeticiones?`:x+=" ¿Continuar?",!window.confirm(x))return}const Z=k(k({},le||{}),K);H(!0);let E=qe(a.slice());const ce=100,de=[],pe=[];s.forEach((n,x)=>{let h=null;if(Z&&Z.hasOwnProperty(n)){h=Z[n];const y=E.indexOf(h);y!==-1&&E.splice(y,1)}else{const y=r.get(n.toLowerCase().trim());if(E.length>0){for(let $=0;$<E.length;$++){const xe=E[$],ze=xe.trim().toLowerCase();if(!y||!y.has(ze)){h=xe,E.splice($,1);break}}h||(h=E.shift())}}pe.push({name:n,kart:h});const v=Je(a,h),P=e.find(y=>y.name.trim()===n),me=parseFloat(P==null?void 0:P.weight);let fe="",he="var(--text-muted)";if(!isNaN(me)){const y=75-me,$=y>0?y.toFixed(1):"0";fe=y>0?`+${$}kg`:"0kg",he=y>0?"#ffd400":"#22c55e"}de.push({name:n,kart:h,diffTxt:fe,diffColor:he,listaAnimada:v,delay:x*ce,animationDuration:2500+Math.random()*1e3})}),z(pe),u(de),Be("sorteo_karts",{pilotos_count:s.length,karts_count:a.length,has_history:e.some(n=>n.history&&n.history.trim())});const $e=s.length*ce+3500;setTimeout(()=>{H(!1)},$e),setTimeout(()=>{const n=document.getElementById("grid");if(n){const x=n.offsetTop;window.scrollTo({top:x-80,behavior:"smooth"})}},100)},Te=()=>{if(!A||A.length===0){alert("⚠️ No hay asignaciones recientes para copiar.");return}const e=g.map(s=>{const a=A.find(r=>r.name.trim().toLowerCase()===s.name.trim().toLowerCase());if(a&&a.kart){const r=s.history?s.history.trim():"",c=r?", ":"";return D(k({},s),{history:r+c+a.kart})}return s});M(e),G("Copiado"),setTimeout(()=>G("Copiar al Historial"),2e3)},Me=()=>{window.confirm(`¿Estás seguro de que quieres limpiar la pantalla (borrar Pilotos, Karts, Reservas y Resultados actuales)? 
Esto NO borrará las sesiones guardadas.`)&&(Q(j),L(""),w(""),u([]),z([]),G("Copiar al Historial"))},Ee=(e,s,a)=>{const r=[...p];if(r[e]=D(k({},r[e]),{[s]:a}),u(r),s==="kart"){const c=[...A];c[e]&&(c[e].kart=a,z(c))}};return t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"panel",children:[t.jsxs("div",{className:"division-select-wrapper",style:{marginBottom:"25px",display:"flex",alignItems:"center",gap:"15px"},children:[t.jsxs("label",{style:{margin:0},children:[t.jsx("i",{className:"fa-solid fa-list-ol"})," División:"]}),t.jsxs("select",{value:j,onChange:Se,style:{width:"auto",minWidth:"250px",padding:"8px 12px",borderRadius:"8px",background:"#131c2e",color:"white",border:"1px solid #1c2740",fontSize:"1rem"},children:[t.jsx("option",{value:"1",children:"1ª División"}),t.jsx("option",{value:"2",children:"2ª División"}),t.jsx("option",{value:"3",children:"3ª División"})]}),t.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:"10px",alignItems:"center",flexWrap:"wrap",flexGrow:1,justifyContent:"flex-end"},children:[t.jsxs("select",{value:B,onChange:Ne,style:{padding:"8px 12px",borderRadius:"8px",background:"#0a0f1a",color:"white",border:"1px solid #1c2740",fontSize:"0.9rem",width:"auto",minWidth:"180px",maxWidth:"350px"},children:[t.jsx("option",{value:"",disabled:!0,children:"Cargar sesión..."}),N.map(e=>t.jsx("option",{value:e.id,children:e.name},e.id))]}),t.jsxs("button",{onClick:ke,className:"btn-secondary",style:{padding:"8px 12px",fontSize:"0.9rem",width:"auto"},title:"Guardar estado actual",children:[t.jsx("i",{className:"fa-solid fa-floppy-disk"})," Guardar"]}),N.length>0&&t.jsx("button",{onClick:Ce,className:"btn-danger",style:{padding:"8px 12px",fontSize:"0.9rem",width:"auto"},title:"Borrar la sesión seleccionada",children:t.jsx("i",{className:"fa-solid fa-trash"})})]})]}),t.jsx("div",{style:{marginTop:"15px",display:"flex",alignItems:"center"},children:t.jsxs("label",{style:{cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",color:_?"#ffd400":"var(--text-muted)"},children:[t.jsx("input",{type:"checkbox",checked:_,onChange:e=>ve(e.target.checked),style:{width:"18px",height:"18px",cursor:"pointer",accentColor:"#ffd400"}}),t.jsx("i",{className:"fa-solid fa-moon"})," Modo Oscuro"]})}),t.jsx("br",{}),t.jsxs("div",{className:"inputs-container",children:[t.jsxs("div",{className:"table-left",children:[t.jsxs("div",{className:"row-header",children:[t.jsxs("div",{children:[t.jsx("i",{className:"fa-solid fa-user"})," Piloto"]}),t.jsxs("div",{children:[t.jsx("i",{className:"fa-solid fa-weight-scale"})," Peso"]}),t.jsxs("div",{children:[t.jsx("i",{className:"fa-solid fa-timeline"})," Karts previos"]}),t.jsxs("div",{children:[t.jsx("i",{className:"fa-solid fa-scale-balanced"})," Ajuste"]}),t.jsx("div",{})]}),t.jsx("datalist",{id:"sorteo-pilotos-list",children:V.map(e=>t.jsx("option",{value:e.name},`${e.name}-${e.team||""}-${e.division}`))}),g.map((e,s)=>{const a=parseFloat(e.weight),r=isNaN(a)?null:75-a,c=r!==null?r>0?`+${r.toFixed(1)}kg`:"0kg":"-";let S="var(--color-secondary-accent)";return r!==null&&(S=r>0?"#ffd400":"#22c55e"),t.jsxs("div",{className:"pilot-row",children:[t.jsxs("div",{className:"pilot-name-cell",children:[t.jsx("img",{src:e.photo||ye,alt:e.name,className:"pilot-thumb",onClick:f=>W(f.currentTarget.src),onError:f=>{f.target.src=ye}}),t.jsx("input",{type:"text",list:"sorteo-pilotos-list",value:e.name,onChange:f=>X(s,"name",f.target.value),placeholder:"Nombre del piloto"})]}),t.jsx("input",{type:"number",step:"0.1",value:e.weight,onChange:f=>X(s,"weight",f.target.value),placeholder:"Ej: 65"}),t.jsx("input",{type:"text",value:e.history||"",onChange:f=>X(s,"history",f.target.value),placeholder:"Ej: 33, 45",title:"Separados por coma"}),t.jsx("div",{className:"diff-display",style:{color:S},children:c}),t.jsx("button",{className:"remove-btn",onClick:()=>Le(s),children:t.jsx("i",{className:"fa-solid fa-xmark"})})]},s)}),t.jsxs("div",{style:{marginTop:"10px",display:"flex",gap:"10px",alignItems:"center",flexWrap:"wrap"},children:[t.jsxs("button",{className:"btn-secondary",style:{width:"fit-content"},onClick:Re,children:[t.jsx("i",{className:"fa-solid fa-plus"})," Añadir Piloto Extra"]}),t.jsxs("select",{value:F,onChange:e=>re(e.target.value),style:{flex:1,minWidth:"200px",maxWidth:"380px",padding:"10px 12px",borderRadius:"8px",background:"#0a0f1a",color:"white",border:"1px solid #1c2740",fontSize:"0.95rem"},children:[t.jsx("option",{value:"",children:"Selecciona piloto de la lista..."}),[1,2,3,0].map(e=>{const s=je.filter(a=>a.division===e);return s.length===0?null:t.jsx("optgroup",{label:e===0?"Reservas":`Div ${e}`,children:s.map(a=>t.jsx("option",{value:a.name,children:a.name},`av-${a.name}-${a.team||""}`))},`div-${e}`)})]}),t.jsxs("button",{className:"btn-secondary",style:{width:"fit-content"},onClick:De,disabled:!F,children:[t.jsx("i",{className:"fa-solid fa-user-plus"})," Añadir"]})]})]}),t.jsx("div",{className:"table-right",children:t.jsxs("div",{style:{display:"flex",gap:"15px",height:"calc(100% - 40px)",flexWrap:"wrap"},children:[t.jsxs("div",{style:{flex:1,minWidth:"150px"},children:[t.jsxs("label",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsxs("span",{children:[t.jsx("i",{className:"fa-solid fa-car-side"})," Karts"]}),t.jsxs("span",{style:{fontSize:"0.85em",background:"rgba(11,92,220, 0.2)",color:"#6fa4ff",padding:"2px 8px",borderRadius:"12px"},children:[b.split(/[\n;]+/).map(e=>e.trim()).filter(e=>e).length," total"]})]}),t.jsx("textarea",{id:"karts",placeholder:`Separados por salto de línea
33
36
37`,value:b,onChange:e=>L(e.target.value),style:{height:"100%",minHeight:"150px"}})]}),t.jsxs("div",{style:{flex:1,minWidth:"150px"},children:[t.jsx("label",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:t.jsxs("span",{children:[t.jsx("i",{className:"fa-solid fa-car-on"})," Reservas"]})}),t.jsx("textarea",{id:"reservas",placeholder:`Para sustituciones
35
40`,value:C,onChange:e=>w(e.target.value),style:{height:"100%",minHeight:"150px"}})]})]})})]}),t.jsxs("small",{style:{marginTop:"15px",display:"block",lineHeight:"1.5"},children:[t.jsx("i",{className:"fa-solid fa-circle-info"})," El sistema asignará karts intentando no repetir los que estén en el historial de cada piloto. Mínimo 75kg.",t.jsx("br",{}),t.jsxs("span",{style:{color:"#ffd400"},children:[t.jsx("i",{className:"fa-solid fa-triangle-exclamation"})," Karts sin lastre (","51, 60, 61, 39",") excluidos para pilotos con ajuste > 15kg."]})]}),t.jsxs("div",{className:"btn-group",children:[t.jsxs("button",{id:"copyHistBtn",className:"btn-secondary",title:"Guardar resultado actual en historial",onClick:Te,children:[t.jsx("i",{className:`fa-regular ${te==="Copiado"?"fa-check":"fa-copy"}`})," ",te]}),t.jsxs("button",{id:"clearHistBtn",className:"btn-danger",title:"Borrar todos los datos",onClick:Me,children:[t.jsx("i",{className:"fa-solid fa-trash-can"})," Limpiar Todo"]}),t.jsx("button",{id:"sortearBtn",className:"btn-primary",onClick:Ae,disabled:I,children:I?t.jsxs(t.Fragment,{children:[t.jsx("i",{className:"fa-solid fa-spinner fa-spin"})," Sorteando..."]}):t.jsxs(t.Fragment,{children:[t.jsx("i",{className:"fa-solid fa-shuffle"})," INICIAR SORTEO"]})}),t.jsx("button",{className:"btn-secondary",style:{display:!p.length||I?"none":"block"},onClick:Ie,children:"Exportar como Imagen"})]})]}),t.jsx("div",{className:"grid",id:"grid",children:p.map((e,s)=>t.jsx(Ve,{item:e,onUpdate:(a,r)=>Ee(s,a,r)},`${s}-${e.animationDuration||Math.random()}`))}),t.jsx("br",{}),t.jsx("div",{ref:o,className:"grid",style:{display:"grid",position:"absolute",width:"93%",left:"-9999px",zIndex:-1},children:p.map((e,s)=>t.jsxs("div",{className:"card",style:{opacity:1,transform:"translateY(0)",animation:"none"},children:[t.jsx("div",{className:"nombre",children:e.name}),e.diffTxt&&t.jsxs("div",{className:"lastre-badge",style:{color:e.diffColor},children:[t.jsx("i",{className:"fa-solid fa-weight-hanging"})," Lastre: ",e.diffTxt]}),t.jsx("div",{className:"kart-slot",children:t.jsx("div",{className:"kart-list",style:{top:"0px",filter:"none",transition:"none",animation:"none"},children:t.jsx("div",{children:e.kart})})})]},`clon-${s}`))}),oe&&t.jsxs("div",{className:"photo-modal",onClick:()=>W(""),children:[t.jsx("button",{className:"photo-modal-close",onClick:()=>W(""),"aria-label":"Cerrar",children:t.jsx("i",{className:"fa-solid fa-xmark"})}),t.jsx("img",{src:oe,alt:"Foto del piloto",onClick:()=>W("")})]}),t.jsx("style",{children:`
                /* Sorteo Specific Styles */
                .inputs-container {
                    display: grid;
                    grid-template-columns: 3fr 1fr;
                    gap: 30px;
                }
                @media (max-width: 800px) {
                    .inputs-container {
                        grid-template-columns: 1fr;
                    }
                }
                .table-left {
                    display: flex;
                    flex-direction: column;
                }
                .table-right {
                    display: flex;
                    flex-direction: column;
                }
                .row-header, .pilot-row {
                    display: grid;
                    grid-template-columns: 2fr 1fr 2fr 1fr 40px;
                    gap: 15px;
                    align-items: center;
                }
                .row-header {
                    font-weight: 600;
                    color: var(--text-muted);
                    text-transform: uppercase;
                    margin-bottom: 5px;
                    font-size: 0.9rem;
                    letter-spacing: 1px;
                }
                .pilot-row {
                    margin-bottom: 10px;
                }
                .pilot-name-cell {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    min-width: 0;
                }
                .pilot-name-cell input {
                    flex: 1;
                    min-width: 0;
                }
                .pilot-thumb {
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    object-fit: cover;
                    object-position: center 0%;
                    flex-shrink: 0;
                    background: #0a0f1a;
                    border: 2px solid rgba(79, 141, 255, 0.6);
                    box-shadow: 0 0 8px rgba(11, 92, 220, 0.4);
                    cursor: pointer;
                    transition: transform 0.15s, box-shadow 0.15s;
                }
                .pilot-thumb:hover {
                    transform: scale(1.12);
                    box-shadow: 0 0 12px rgba(79, 141, 255, 0.7);
                }
                .photo-modal {
                    position: fixed;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.88);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    cursor: zoom-out;
                    animation: photoModalFade 0.2s ease;
                }
                .photo-modal img {
                    max-width: 85vw;
                    max-height: 85vh;
                    border-radius: 12px;
                    border: 2px solid rgba(79, 141, 255, 0.6);
                    box-shadow: 0 0 30px rgba(11, 92, 220, 0.5);
                    object-fit: contain;
                }
                .photo-modal-close {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    color: white;
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    font-size: 1.3rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10;
                }
                .photo-modal-close:hover {
                    background: rgba(255, 255, 255, 0.25);
                }
                @keyframes photoModalFade {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @media (max-width: 600px) {
                    .pilot-thumb {
                        width: 28px;
                        height: 28px;
                    }
                }
                .pilot-row input {
                    height: 42px;
                    padding: 8px 12px;
                    background-color: #0a0f1a;
                    border: 1px solid #1c2740;
                    color: white;
                    border-radius: 8px;
                    font-family: inherit;
                    width: 100%;
                }
                .diff-display {
                    background: #0a0f1a;
                    border: 1px solid #1c2740;
                    height: 42px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    font-weight: bold;
                    color: var(--color-secondary-accent);
                    font-size: 0.95rem;
                }
                .remove-btn {
                    background: transparent;
                    color: #ef4444;
                    border: none;
                    cursor: pointer;
                    font-size: 1.2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 42px;
                    border-radius: 8px;
                    transition: background 0.2s;
                }
                .remove-btn:hover {
                    background: rgba(239, 68, 68, 0.1);
                }
                
                .lastre-badge {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    background: rgba(14,21,36, 0.5);
                    color: #6fa4ff;
                    padding: 4px 10px;
                    border-radius: 12px;
                    font-size: 0.85em;
                    margin-bottom: 10px;
                    font-weight: bold;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    min-height: 28px;
                    min-width: 115px;
                    white-space: nowrap;
                }

                .panel {
                    background-color: var(--card-bg);
                    padding: 40px;
                    border-radius: 16px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    margin-bottom: 30px;
                }

                .container {
                    padding-top: 30px;
                    padding-bottom: 50px;
                    max-width: 1400px;
                    width: 95%;
                    margin: 0 auto;
                }

                @media (max-width: 600px) {
                    .panel {
                        padding: 15px;
                    }
                }
                
                label {
                    display: block;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    color: var(--text-muted);
                    font-size: 1.1rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                textarea {
                    width: 100%;
                    height: 150px;
                    background-color: #0a0f1a;
                    border: 1px solid #1c2740;
                    color: white;
                    padding: 15px;
                    border-radius: 8px;
                    resize: vertical;
                    font-family: monospace;
                    font-size: 1.1rem;
                }

                input[type="text"],
                input[type="tel"] {
                    width: 100%;
                    background-color: #0a0f1a;
                    border: 1px solid #1c2740;
                    color: white;
                    padding: 12px 15px;
                    border-radius: 8px;
                    font-size: 1rem;
                }

                .btn-group {
                    display: flex;
                    gap: 10px;
                    margin-top: 20px;
                    flex-wrap: wrap;
                }

                .btn-primary, .btn-secondary, .btn-danger {
                    font-size: 1.1rem;
                    padding: 14px 24px;
                    border: none;
                    border-radius: 8px;
                    font-weight: bold;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: transform 0.1s, opacity 0.2s;
                    flex-grow: 1;
                    justify-content: center;
                }
                
                .btn-primary { background-color: var(--accent); color: white; }
                .btn-secondary { background-color: #33415c; color: white; }
                .btn-danger { background-color: #ef4444; color: white; }

                .btn-primary:hover { background-color: var(--accent-hover); }
                .btn-primary:disabled { opacity: 0.7; cursor: wait; }

                /* Grid de Resultados */
                .grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                    gap: 15px;
                    padding-bottom: 50px;
                }

                .card {
                    background-color: #0e1524;
                    border-radius: 10px;
                    padding: 15px;
                    text-align: center;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
                    opacity: 0; /* Start hidden for fade-up */
                    transform: translateY(20px);
                }
                
                .card.fade-up {
                    animation: fadeUp 0.5s forwards;
                }
                
                .card.name-up {
                    border-color: var(--accent);
                    box-shadow: 0 0 15px rgba(11,92,220, 0.4);
                }

                @keyframes fadeUp {
                    to { opacity: 1; transform: translateY(0); }
                }

                .nombre {
                    font-weight: bold;
                    margin-bottom: 10px;
                    color: #e2e8f0;
                    font-size: 1.1em;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .kart-slot {
                    height: 60px;
                    background-color: #05070d;
                    border-radius: 6px;
                    overflow: hidden;
                    position: relative;
                    border: 1px solid #1e2c48;
                    font-family: 'Russo One', sans-serif;
                    font-size: 1.8em;
                    color: var(--color-secondary-accent);
                }

                .kart-list {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    /* Initial state handled by JS animation */
                }

                .kart-list div {
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `})]})},Ve=({item:o,onUpdate:l})=>{var w;const d=m.useRef(null),[i,b]=m.useState(!1);We.useEffect(()=>{if(i)return;if(!o.listaAnimada||o.listaAnimada.length===0){b(!0);return}const p=d.current;if(!p)return;const I=-60*(o.listaAnimada.length-1),H=setTimeout(()=>{p.animate([{top:"0px",filter:"blur(0px)"},{top:`${I*.8}px`,filter:"blur(2px)",offset:.6},{top:`${I}px`,filter:"blur(0px)"}],{duration:o.animationDuration,easing:"cubic-bezier(0.12, 0.8, 0.32, 1)",fill:"forwards"}).onfinish=()=>{b(!0),d.current&&(d.current.style.top=`${I}px`)}},o.delay+200);return()=>clearTimeout(H)},[o,i]);const L=p=>{l&&l("kart",p.target.value)},C=()=>{const p=o.lastradoMsg||"Verificado",u=window.prompt("Introduce lastre aplicado (o vacío para quitar):",p);u!==null&&(u.trim()===""?(l&&l("isLastrado",!1),l&&l("lastradoMsg","")):(l&&l("isLastrado",!0),l&&l("lastradoMsg",u)))};return t.jsxs("div",{className:`card fade-up ${i?"name-up":""}`,style:{animationDelay:`${o.delay}ms`},children:[t.jsx("div",{className:"nombre",children:o.name}),o.diffTxt&&t.jsxs("div",{onClick:C,className:"lastre-badge",style:{color:o.isLastrado?"#22c55e":o.diffColor,cursor:"pointer",border:o.isLastrado?"1px solid #22c55e":"1px solid rgba(255, 255, 255, 0.1)"},title:"Click para marcar o editar lastre",children:[t.jsx("i",{className:o.isLastrado?"fa-solid fa-check":"fa-solid fa-weight-hanging"})," Lastre: ",o.isLastrado&&o.lastradoMsg?o.lastradoMsg:o.diffTxt]}),t.jsx("div",{className:"kart-slot",children:i?t.jsx("input",{type:"text",value:o.kart||"",onChange:L,style:{width:"100%",height:"100%",background:"transparent",border:"none",color:"inherit",font:"inherit",textAlign:"center",outline:"none"}}):t.jsx("div",{className:"kart-list",ref:d,children:(w=o.listaAnimada)==null?void 0:w.map((p,u)=>t.jsx("div",{children:p},u))})})]})};export{tt as default};
