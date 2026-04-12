/* ===== TOOLSPARK shared.js — 37 tools ===== */

const TOOLS = [
  { id:'comprimir-imagenes',  name:'Comprimir imágenes',    icon:'🖼️', desc:'Reduce el peso de JPG y PNG hasta un 90%.',            cat:'imagen', file:'comprimir-imagenes.html',   badge:'b-pop',  badgeTxt:'Popular' },
  { id:'convertir-imagen',    name:'Convertir imagen',       icon:'🔄', desc:'Convierte entre JPG, PNG y WebP en segundos.',          cat:'imagen', file:'convertir-imagen.html',     badge:'b-new',  badgeTxt:'Nuevo' },
  { id:'recortar-imagen',     name:'Recortar imagen',        icon:'✂️', desc:'Selección visual interactiva con proporciones.',       cat:'imagen', file:'recortar-imagen.html',      badge:'b-free', badgeTxt:'Gratis' },
  { id:'redimensionar-imagen',name:'Redimensionar imagen',   icon:'📐', desc:'Cambia el tamaño de tus imágenes en píxeles o %.',    cat:'imagen', file:'redimensionar-imagen.html', badge:'b-hot',  badgeTxt:'Útil' },
  { id:'marca-de-agua',       name:'Añadir marca de agua',  icon:'💧', desc:'Añade texto como marca de agua a tus fotos.',          cat:'imagen', file:'marca-de-agua.html',        badge:'b-new',  badgeTxt:'Nuevo' },
  { id:'girar-imagen',        name:'Girar y voltear',        icon:'🔃', desc:'Gira imágenes 90°/180° o voltéalas en segundos.',     cat:'imagen', file:'girar-imagen.html',         badge:'b-free', badgeTxt:'Gratis' },
  { id:'convertir-webp',      name:'Imagen a WebP',          icon:'⚡', desc:'Convierte cualquier imagen al formato WebP moderno.',  cat:'imagen', file:'convertir-webp.html',       badge:'b-new',  badgeTxt:'Nuevo' },
  { id:'base64-imagen',       name:'Imagen a Base64',        icon:'🔢', desc:'Codifica o decodifica imágenes en Base64.',            cat:'imagen', file:'base64-imagen.html',        badge:'b-free', badgeTxt:'Gratis' },
  { id:'unir-pdf',            name:'Unir PDF',               icon:'📄', desc:'Combina varios PDFs en uno. Arrastra para reordenar.', cat:'pdf',   file:'unir-pdf.html',             badge:'b-pop',  badgeTxt:'Popular' },
  { id:'dividir-pdf',         name:'Dividir PDF',             icon:'📑', desc:'Extrae páginas o divide un PDF en archivos.',         cat:'pdf',   file:'dividir-pdf.html',          badge:'b-free', badgeTxt:'Gratis' },
  { id:'comprimir-pdf',       name:'Comprimir PDF',           icon:'🗜️', desc:'Reduce el tamaño de tus PDFs sin perder calidad.',   cat:'pdf',   file:'comprimir-pdf.html',        badge:'b-pop',  badgeTxt:'Popular' },
  { id:'rotar-pdf',           name:'Rotar páginas PDF',       icon:'🔄', desc:'Rota las páginas de un PDF a 90°, 180° o 270°.',     cat:'pdf',   file:'rotar-pdf.html',            badge:'b-free', badgeTxt:'Gratis' },
  { id:'numerar-pdf',         name:'Numerar páginas PDF',     icon:'🔢', desc:'Añade números de página a cualquier PDF.',            cat:'pdf',   file:'numerar-pdf.html',          badge:'b-new',  badgeTxt:'Nuevo' },
  { id:'pdf-a-imagenes',      name:'PDF a imágenes',          icon:'🖼️', desc:'Convierte cada página de un PDF en JPG o PNG.',      cat:'pdf',   file:'pdf-a-imagenes.html',       badge:'b-pop',  badgeTxt:'Popular' },
  { id:'proteger-pdf',        name:'Proteger PDF',            icon:'🔒', desc:'Añade contraseña a tu PDF en segundos.',              cat:'pdf',   file:'proteger-pdf.html',         badge:'b-new',  badgeTxt:'Nuevo' },
  { id:'marca-agua-pdf',      name:'Marca de agua en PDF',   icon:'💧', desc:'Añade texto como marca de agua en todas las páginas.',cat:'pdf',   file:'marca-agua-pdf.html',       badge:'b-free', badgeTxt:'Gratis' },
  { id:'word-a-pdf',          name:'Word a PDF',              icon:'📝', desc:'Convierte documentos .docx a PDF con todo el formato.', cat:'conv', file:'word-a-pdf.html',           badge:'b-hot',  badgeTxt:'Muy usado' },
  { id:'pdf-a-word',          name:'PDF a Word',              icon:'📄', desc:'Extrae el texto de un PDF en formato editable.',       cat:'conv', file:'pdf-a-word.html',           badge:'b-hot',  badgeTxt:'Muy usado' },
  { id:'excel-a-pdf',         name:'Excel / CSV a PDF',       icon:'📊', desc:'Convierte tablas CSV o Excel a PDF bien maquetado.',   cat:'conv', file:'excel-a-pdf.html',          badge:'b-pop',  badgeTxt:'Popular' },
  { id:'pdf-a-excel',         name:'PDF a Excel / CSV',       icon:'📊', desc:'Extrae tablas de un PDF y descárgalas como CSV.',      cat:'conv', file:'pdf-a-excel.html',          badge:'b-pop',  badgeTxt:'Popular' },
  { id:'ppt-a-pdf',           name:'PowerPoint a PDF',        icon:'🗂️', desc:'Convierte presentaciones .pptx a PDF al instante.',   cat:'conv', file:'ppt-a-pdf.html',            badge:'b-new',  badgeTxt:'Nuevo' },
  { id:'pdf-a-ppt',           name:'PDF a PowerPoint',        icon:'🗂️', desc:'Convierte páginas PDF en diapositivas exportables.',  cat:'conv', file:'pdf-a-ppt.html',            badge:'b-new',  badgeTxt:'Nuevo' },
  { id:'html-a-pdf',          name:'HTML a PDF',              icon:'🌐', desc:'Convierte código HTML en un archivo PDF listo.',        cat:'conv', file:'html-a-pdf.html',           badge:'b-hot',  badgeTxt:'Muy usado' },
  { id:'contar-palabras',     name:'Contador de palabras',    icon:'📝', desc:'Palabras, caracteres, párrafos y keywords.',           cat:'texto', file:'contar-palabras.html',      badge:'b-free', badgeTxt:'Gratis' },
  { id:'cambiar-mayusculas',  name:'Cambiar mayúsculas',      icon:'🔤', desc:'Convierte texto a MAYÚSCULAS, minúsculas o Título.',   cat:'texto', file:'cambiar-mayusculas.html',   badge:'b-free', badgeTxt:'Gratis' },
  { id:'eliminar-espacios',   name:'Eliminar espacios extra', icon:'⎵',  desc:'Limpia espacios dobles y saltos innecesarios.',        cat:'texto', file:'eliminar-espacios.html',    badge:'b-free', badgeTxt:'Gratis' },
  { id:'texto-a-slug',        name:'Texto a Slug URL',        icon:'🔗', desc:'Convierte cualquier texto en un slug para URLs SEO.',  cat:'texto', file:'texto-a-slug.html',         badge:'b-new',  badgeTxt:'Nuevo' },
  { id:'invertir-texto',      name:'Invertir texto',          icon:'↩️', desc:'Invierte el orden de los caracteres de tu texto.',     cat:'texto', file:'invertir-texto.html',       badge:'b-free', badgeTxt:'Gratis' },
  { id:'lorem-ipsum',         name:'Generador Lorem Ipsum',  icon:'📖', desc:'Genera texto de relleno Lorem Ipsum al instante.',     cat:'texto', file:'lorem-ipsum.html',          badge:'b-new',  badgeTxt:'Nuevo' },
  { id:'json-formateador',    name:'Formateador JSON',        icon:'{}', desc:'Formatea, valida y embellece código JSON.',            cat:'util',  file:'json-formateador.html',     badge:'b-new',  badgeTxt:'Nuevo' },
  { id:'color-picker',        name:'Selector de color',       icon:'🎨', desc:'Elige colores y obtén HEX, RGB y HSL.',                cat:'util',  file:'color-picker.html',         badge:'b-pop',  badgeTxt:'Popular' },
  { id:'generador-qr',        name:'Generador de QR',         icon:'📱', desc:'Crea códigos QR para cualquier URL o texto.',          cat:'util',  file:'generador-qr.html',         badge:'b-hot',  badgeTxt:'Útil' },
  { id:'conversor-unidades',  name:'Conversor de unidades',   icon:'📏', desc:'Convierte longitud, peso, temperatura y más.',         cat:'util',  file:'conversor-unidades.html',   badge:'b-free', badgeTxt:'Gratis' },
  { id:'calculadora-imc',     name:'Calculadora de IMC',      icon:'⚖️', desc:'Calcula tu índice de masa corporal al instante.',      cat:'util',  file:'calculadora-imc.html',      badge:'b-free', badgeTxt:'Gratis' },
  { id:'generador-contrasena',name:'Generador de contraseña', icon:'🔑', desc:'Genera contraseñas seguras y aleatorias.',             cat:'util',  file:'generador-contrasena.html', badge:'b-hot',  badgeTxt:'Útil' },
  { id:'codificador-url',     name:'Codificador URL',         icon:'🌐', desc:'Codifica y decodifica URLs y parámetros.',              cat:'util',  file:'codificador-url.html',      badge:'b-free', badgeTxt:'Gratis' },
  { id:'temporizador',        name:'Temporizador online',     icon:'⏱️', desc:'Cronómetro y cuenta atrás en el navegador.',           cat:'util',  file:'temporizador.html',         badge:'b-free', badgeTxt:'Gratis' },
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
