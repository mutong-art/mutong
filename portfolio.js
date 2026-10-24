let language='en';
try{language=localStorage.getItem('mutong-portfolio-v2-language')==='zh'?'zh':'en'}catch{}
function updateThemeLabel(){const dark=document.documentElement.dataset.theme==='dark';document.querySelectorAll('.theme-toggle').forEach(button=>{button.setAttribute('aria-pressed',String(dark));button.textContent=language==='zh'?'深色模式':'Dark mode'});document.querySelector('meta[name="theme-color"]').content=dark?'#171717':'#ffffff'}
document.querySelectorAll('.theme-toggle').forEach(button=>button.addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;try{localStorage.setItem('mutong-theme',theme)}catch{}updateThemeLabel()}));
function setLanguage(value){language=value;document.documentElement.lang=value==='zh'?'zh-CN':'en';document.querySelectorAll('[data-en][data-zh]').forEach(el=>el.textContent=el.dataset[value]);document.querySelectorAll('[data-language]').forEach(el=>el.setAttribute('aria-pressed',el.dataset.language===value));try{localStorage.setItem('mutong-portfolio-v2-language',value)}catch{}updateThemeLabel()}
document.querySelectorAll('[data-language]').forEach(el=>el.addEventListener('click',()=>setLanguage(el.dataset.language)));
setLanguage(language);
const menu=document.querySelector('#menu-toggle'),sidebar=document.querySelector('#sidebar');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',open);menu.textContent=open?'Close −':'Index +';sidebar.classList.toggle('open',open)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&sidebar.classList.contains('open')){sidebar.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Index +';menu.focus()}});
const lightbox=document.querySelector('.lightbox');
document.querySelectorAll('[data-enlarge]').forEach(button=>button.addEventListener('click',()=>{const image=button.querySelector('img'),target=lightbox.querySelector('img');target.src=image.src;target.alt=image.alt;lightbox.querySelector('p').textContent=document.querySelector('h1').textContent;lightbox.showModal();document.body.style.overflow='hidden'}));
document.querySelector('.lightbox-close').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('close',()=>document.body.style.overflow='');
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});
let toastTimer;
function toast(text){const box=document.querySelector('.toast');box.textContent=text;box.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>box.classList.remove('visible'),2800)}
document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(button.dataset.copy);toast(language==='en'?'Copied: '+button.dataset.copy:'已复制：'+button.dataset.copy)}catch{toast(language==='en'?'Please copy: '+button.dataset.copy:'请手动复制：'+button.dataset.copy)}}));
