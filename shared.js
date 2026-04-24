/* ===== TOOLSPARK shared.js — 8 tools ===== */

const TOOLS = [
  { id:'comprimir-imagenes',  name:'Comprimir imágenes',    icon:'🖼️', desc:'Reduce el peso de JPG y PNG hasta un 90%.',            cat:'imagen', file:'comprimir-imagenes.html',   badge:'b-pop',  badgeTxt:'Popular' },
  { id:'recortar-imagen',     name:'Recortar imagen',        icon:'✂️', desc:'Selección visual interactiva con proporciones.',       cat:'imagen', file:'recortar-imagen.html',      badge:'b-free', badgeTxt:'Gratis' },
  { id:'unir-pdf',            name:'Unir PDF',               icon:'📄', desc:'Combina varios PDFs en uno. Arrastra para reordenar.', cat:'pdf',   file:'unir-pdf.html',             badge:'b-pop',  badgeTxt:'Popular' },
  { id:'dividir-pdf',         name:'Dividir PDF',             icon:'📑', desc:'Extrae páginas o divide un PDF en archivos.',         cat:'pdf',   file:'dividir-pdf.html',          badge:'b-free', badgeTxt:'Gratis' },
  { id:'comprimir-pdf',       name:'Comprimir PDF',           icon:'🗜️', desc:'Reduce el tamaño de tus PDFs sin perder calidad.',   cat:'pdf',   file:'comprimir-pdf.html',        badge:'b-pop',  badgeTxt:'Popular' },
  { id:'excel-a-pdf',         name:'Excel / CSV a PDF',       icon:'📊', desc:'Convierte tablas CSV o Excel a PDF bien maquetado.',   cat:'conv', file:'excel-a-pdf.html',          badge:'b-pop',  badgeTxt:'Popular' },
  { id:'contar-palabras',     name:'Contador de palabras',    icon:'📝', desc:'Palabras, caracteres, párrafos y keywords.',           cat:'texto', file:'contar-palabras.html',      badge:'b-free', badgeTxt:'Gratis' },
  { id:'generador-qr',        name:'Generador de QR',         icon:'📱', desc:'Crea códigos QR para cualquier URL o texto.',          cat:'util',  file:'generador-qr.html',         badge:'b-hot',  badgeTxt:'Útil' },
];

function initPage(currentId) {
  /* visit tracking */
  (function(){
    const t=new Date().toDateString();
    let s=JSON.parse(localStorage.getItem('ts_v3')||'{"t":0,"d":0,"dt":"","m":0,"lv":""}');
    s.t++;s.d=s.dt!==t?1:s.d+1;s.dt=t;s.lv=new Date().toLocaleString('es-ES');
    localStorage.setItem('ts_v3',JSON.stringify(s));
    if(new URLSearchParams(location.search).get('admin')==='true'){
      const box=document.getElementById('adminBox');
      if(box){box.style.display='block';
        document.getElementById('adm-total').textContent=s.t.toLocaleString('es');
        document.getElementById('adm-today').textContent=s.d.toLocaleString('es');
        document.getElementById('adm-last').textContent=s.lv;
        document.getElementById('adm-msgs').textContent=(s.m||0).toLocaleString('es');
      }
    }
  })();
  /* related tools */
  const rel=document.getElementById('relatedGrid');
  if(rel){
    const cur=TOOLS.find(t=>t.id===currentId);
    const others=TOOLS.filter(t=>t.id!==currentId);
    const same=others.filter(t=>cur&&t.cat===cur.cat).slice(0,2);
    const diff=others.filter(t=>!same.includes(t)).slice(0,2);
    rel.innerHTML=[...same,...diff].slice(0,4).map(t=>`
      <a href="${t.file}" class="related-card">
        <div class="rc-icon">${t.icon}</div>
        <div class="rc-name">${t.name}</div>
        <div class="rc-desc">${t.desc}</div>
        <div class="rc-arrow">Usar herramienta →</div>
      </a>`).join('');
  }
  /* active nav link */
  const page=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const h=(a.getAttribute('href')||'').split('/').pop();
    if(h===page)a.classList.add('active');
  });
}

function fmtSize(b){if(b<1024)return b+' B';if(b<1048576)return (b/1024).toFixed(1)+' KB';return (b/1048576).toFixed(2)+' MB';}

function setupDrop(zoneId,inputId,onFiles){
  const zone=document.getElementById(zoneId),inp=document.getElementById(inputId);
  if(!zone||!inp)return;
  zone.addEventListener('dragover',e=>{e.preventDefault();zone.classList.add('drag');});
  zone.addEventListener('dragleave',()=>zone.classList.remove('drag'));
  zone.addEventListener('drop',e=>{e.preventDefault();zone.classList.remove('drag');onFiles(e.dataTransfer.files);});
  inp.addEventListener('change',e=>onFiles(e.target.files));
}

async function enviar(formspreeId){
  const n=document.getElementById('cName').value.trim();
  const e=document.getElementById('cEmail').value.trim();
  const m=document.getElementById('cMsg').value.trim();
  if(!n||!m){alert('Por favor, completa el nombre y el mensaje.');return;}

  const btn=document.querySelector('.cf-submit');
  if(btn){btn.disabled=true;btn.textContent='Enviando...';}

  try{
    // ★ Formspree: reemplaza FORMSPREE_ID con tu ID real de formspree.io
    const endpoint=`https://formspree.io/f/${formspreeId||'YOUR_FORM_ID'}`;
    const res=await fetch(endpoint,{
      method:'POST',
      headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify({name:n,email:e||'No indicado',message:m,_subject:'ToolSpark — Nuevo mensaje de '+n})
    });
    if(res.ok){
      let s=JSON.parse(localStorage.getItem('ts_v3')||'{}');
      s.m=(s.m||0)+1;localStorage.setItem('ts_v3',JSON.stringify(s));
      document.getElementById('cfOk').style.display='block';
      ['cName','cEmail','cMsg'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
    }else{
      const data=await res.json();
      alert('Error al enviar: '+(data.error||'Inténtalo de nuevo.')+'\n\nSi el problema persiste, escríbenos a: tuemail@gmail.com');
    }
  }catch(err){
    alert('Error de conexión. Comprueba tu internet e inténtalo de nuevo.');
  }
  if(btn){btn.disabled=false;btn.textContent='Enviar mensaje →';}
}
