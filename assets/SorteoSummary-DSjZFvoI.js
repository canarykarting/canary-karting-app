var y=(r,p,c)=>new Promise((g,a)=>{var x=o=>{try{m(c.next(o))}catch(u){a(u)}},f=o=>{try{m(c.throw(o))}catch(u){a(u)}},m=o=>o.done?g(o.value):Promise.resolve(o.value).then(x,f);m((c=c.apply(r,p)).next())});import{r as i,m as C,n as v,j as e}from"./index-Bcu6ChRh.js";const D=r=>`${r}ª División`,w=r=>r==="id inválido"?"El servidor del sorteo aún no está actualizado. Reinicia o actualiza el backend.":r,E=r=>{if(!r)return"";const p=String(r).includes("T")?String(r):`${String(r).replace(" ","T")}Z`,c=new Date(p);return Number.isNaN(c.getTime())?String(r):c.toLocaleString("es-ES",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})},L=()=>{const[r,p]=i.useState([]),[c,g]=i.useState(null),[a,x]=i.useState(null),[f,m]=i.useState(!0),[o,u]=i.useState(""),b=i.useRef(0),h=i.useCallback(()=>y(null,null,function*(){var j;const s=++b.current,[t,l]=yield Promise.all([C(),v()]);if(s!==b.current)return;let n=[];if(t.success&&Array.isArray(t.data)&&(n=t.data.map(d=>Number(d.division)).filter(d=>Number.isFinite(d)&&d>0)),l.success&&l.data){const d=l.data,k=Number(d.division);n.includes(k)||(n=[...n,k]),n=Array.from(new Set(n)).sort((R,A)=>R-A),p(n),g(k),x(d)}else n=Array.from(new Set(n)).sort((d,k)=>d-k),p(n),g((j=n[0])!=null?j:null),x(null),l.success||u(w(l.error)||"No se pudo cargar el sorteo.");m(!1)}),[]);i.useEffect(()=>(h(),()=>{b.current+=1}),[h]);const S=s=>y(null,null,function*(){const t=++b.current;g(s),m(!0),u("");const l=yield v(s);t===b.current&&(l.success?x(l.data):(x(null),u(w(l.error)||"No se pudo cargar el sorteo.")),m(!1))}),z=i.useMemo(()=>!a||!Array.isArray(a.carreras)?[]:[...a.carreras].sort((s,t)=>Number(s.numero)-Number(t.numero)),[a]),N=i.useMemo(()=>!a||!Array.isArray(a.reservas)?[]:a.reservas.map(s=>String(s)).filter(Boolean),[a]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"cks-sum",children:e.jsxs("div",{className:"cks-sum-shell",children:[e.jsxs("header",{className:"cks-sum-head",children:[e.jsx("span",{className:"cks-sum-kicker",children:"Canary Karting"}),e.jsx("h1",{className:"cks-sum-title",children:"Resumen del sorteo"}),e.jsx("p",{className:"cks-sum-sub",children:a?`Último sorteo · ${E(a.created_at)}`:"Sorteo de karts"})]}),r.length>0&&e.jsx("div",{className:"cks-sum-tabs",role:"tablist","aria-label":"Seleccionar división",children:r.map(s=>e.jsx("button",{type:"button",role:"tab","aria-selected":Number(c)===s,className:`cks-sum-tab${Number(c)===s?" active":""}`,onClick:()=>S(s),children:D(s)},s))}),f&&e.jsxs("div",{className:"cks-sum-state",children:[e.jsx("i",{className:"fa-solid fa-circle-notch fa-spin"}),e.jsx("span",{children:"Cargando sorteo…"})]}),!f&&o&&e.jsxs("div",{className:"cks-sum-state cks-sum-error",children:[e.jsx("i",{className:"fa-solid fa-triangle-exclamation"}),e.jsx("span",{children:o}),e.jsx("button",{type:"button",className:"cks-sum-retry",onClick:()=>{m(!0),u(""),h()},children:"Reintentar"})]}),!f&&!o&&!a&&e.jsxs("div",{className:"cks-sum-state",children:[e.jsx("i",{className:"fa-solid fa-flag-checkered"}),e.jsx("span",{children:"Todavía no hay ningún resumen de sorteo guardado."})]}),!f&&!o&&a&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"cks-sum-races",children:z.map(s=>e.jsxs("section",{className:"cks-sum-race",children:[e.jsxs("div",{className:"cks-sum-racehead",children:[e.jsxs("span",{className:"cks-sum-racetitle",children:["Carrera ",s.numero]}),e.jsx("span",{className:"cks-sum-done",children:"Completada"})]}),e.jsx("div",{className:"cks-sum-rows",children:(s.asignaciones||[]).map(t=>e.jsxs("div",{className:"cks-sum-row",children:[e.jsx("span",{className:"cks-sum-name",children:t.nombre}),e.jsx("span",{className:"cks-sum-kart",children:t.kart_numero})]},t.orden))})]},s.numero))}),N.length>0&&e.jsxs("div",{className:"cks-sum-reservas",children:[e.jsx("span",{className:"cks-sum-reservas-label",children:"Reservas"}),N.map((s,t)=>e.jsx("span",{className:"cks-sum-reserva",children:s},`${s}-${t}`))]}),e.jsx("p",{className:"cks-sum-note",children:"Se muestra siempre el último sorteo guardado de la división seleccionada."})]})]})}),e.jsx("style",{children:M})]})},M=`
.cks-sum {
    min-height: 100%;
    padding: 26px 0 72px;
}
.cks-sum-shell {
    width: 94%;
    max-width: 1180px;
    margin: 0 auto;
}
.cks-sum-head {
    text-align: center;
    margin-bottom: 16px;
}
.cks-sum-kicker {
    display: block;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #6f88b5;
}
.cks-sum-title {
    margin: 6px 0 4px;
    font-family: 'Russo One', sans-serif;
    font-size: clamp(1.8rem, 4.5vw, 2.6rem);
    font-style: italic;
    letter-spacing: 2px;
    text-transform: uppercase;
    background: linear-gradient(180deg, #ffffff 20%, #4f8dff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    filter: drop-shadow(0 0 8px rgba(11, 92, 220, 0.45));
    margin-bottom: 6px;
}
.cks-sum-sub {
    font-size: 0.86rem;
    color: var(--text-muted);
    letter-spacing: 0.5px;
}
.cks-sum-tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 18px 0 22px;
}
.cks-sum-tab {
    padding: 9px 18px;
    border-radius: 10px;
    border: 1px solid rgba(84, 130, 255, 0.25);
    background: rgba(14, 21, 36, 0.75);
    color: #cbd7ee;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 0.88rem;
    cursor: pointer;
    transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}
.cks-sum-tab:hover {
    border-color: rgba(96, 146, 255, 0.55);
    color: #ffffff;
}
.cks-sum-tab.active {
    background: rgba(47, 107, 255, 0.18);
    border-color: rgba(242, 196, 0, 0.65);
    color: #ffd400;
    box-shadow: 0 0 18px rgba(47, 107, 255, 0.25);
}
.cks-sum-races {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}
.cks-sum-race {
    padding: 14px 16px;
    border-radius: 14px;
    background: linear-gradient(180deg, rgba(13, 22, 40, 0.96), rgba(9, 16, 30, 0.96));
    border: 1px solid rgba(84, 130, 255, 0.2);
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.32);
}
.cks-sum-racehead {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 10px;
}
.cks-sum-racetitle {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-style: italic;
    font-size: 0.95rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #3b82f6;
}
.cks-sum-done {
    padding: 3px 8px;
    border-radius: 6px;
    border: 1px solid rgba(34, 197, 94, 0.4);
    background: rgba(34, 197, 94, 0.12);
    color: #39d98a;
    font-size: 0.56rem;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    white-space: nowrap;
}
.cks-sum-rows {
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.cks-sum-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 8px 10px;
    border-radius: 8px;
    background: rgba(6, 11, 21, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.04);
}
.cks-sum-name {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.92rem;
    font-weight: 600;
    color: #cbd7ee;
}
.cks-sum-kart {
    flex: none;
    padding: 2px 9px;
    border-radius: 6px;
    border: 1px solid rgba(242, 196, 0, 0.45);
    background: rgba(242, 196, 0, 0.08);
    font-family: 'Russo One', sans-serif;
    font-size: 0.95rem;
    color: #f2c400;
}
.cks-sum-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 64px 20px;
    text-align: center;
    color: #8ea0c0;
}
.cks-sum-state i { font-size: 2rem; color: #4f8dff; }
.cks-sum-error { color: #fca5a5; }
.cks-sum-error i { color: #ef4444; }
.cks-sum-retry {
    padding: 10px 18px;
    border: none;
    border-radius: 8px;
    background: var(--accent);
    color: #ffffff;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
}
.cks-sum-reservas {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
}
.cks-sum-reservas-label {
    font-size: 0.66rem;
    font-weight: 800;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: #6f88b5;
}
.cks-sum-reserva {
    padding: 2px 8px;
    border-radius: 6px;
    border: 1px solid rgba(142, 160, 192, 0.3);
    background: rgba(142, 160, 192, 0.08);
    font-family: 'Russo One', sans-serif;
    font-size: 0.78rem;
    color: #8ea0c0;
}
.cks-sum-note {
    margin-top: 18px;
    text-align: center;
    font-size: 0.74rem;
    color: #5f7292;
}
@media (max-width: 900px) {
    .cks-sum-races { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
    .cks-sum { padding-top: 16px; }
    .cks-sum-tabs { gap: 8px; }
    .cks-sum-tab { padding: 8px 14px; font-size: 0.82rem; }
    .cks-sum-race { padding: 12px 13px; }
    .cks-sum-row { padding: 9px 10px; }
    .cks-sum-name { font-size: 0.9rem; }
}
`;export{L as default};
