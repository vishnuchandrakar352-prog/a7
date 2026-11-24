(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
function rt(){var w=+$('rt-s').value,b=+$('rt-b').value;$('rt-sv').textContent=w.toLocaleString()+' mm';$('rt-bv').innerHTML=b.toLocaleString()+' g/m&sup2;/24h';$('rt-mm').textContent=w.toLocaleString()+' mm';$('rt-w').style.height=(w/30000*100)+'%';$('rt-wb').style.width=(w/30000*100)+'%';$('rt-bb').style.width=(b/30000*100)+'%';
 var t,d;if(w<3000){t='Shower-proof';d='Fine for a dash to the car or a light drizzle. Expect it to soak through in steady rain.';}else if(w<8000){t='Light rain';d='Good for short walks and light to moderate showers. Not for long days out.';}else if(w<15000){t='Everyday waterproof';d='Handles most rain on commutes, city walks and day hikes.';}else if(w<20000){t='Heavy rain';d='Copes with long, heavy rain and pressure from straps or sitting down.';}else{t='Storm-proof';d='Built for driving rain, mountains and days when you cannot hide from the weather.';}
 $('rt-t').textContent=t;$('rt-d').textContent=d;$('rt-n').textContent=b<8000?'Low breathability: fine for gentle walking, but you may feel clammy if you work hard.':b<15000?'Moderate breathability: comfortable for walking and easy cycling.':'High breathability: good for hiking uphill, running or cycling hard.';}
if($('rt-s')){$('rt-s').addEventListener('input',rt);$('rt-b').addEventListener('input',rt);rt();}
var ri=1,ai=0;function sg(id,cb){var bs=[].slice.call(document.querySelectorAll('#'+id+' button'));bs.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){bs.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});cb(+b.dataset.v);pl();});});}
function pl(){var h=+$('pl-h').value;$('pl-hv').textContent=h+(h===1?' hour':' hours');var sc=ri*2+(h>3?1:0)+(h>6?1:0)+(ai===2?1:0),t,f=[];
 if(sc<=1){t='Water-resistant jacket';f=['Water-repellent finish','Light and packable'];}else if(sc<=3){t='2.5-layer packable shell';f=['5,000–10,000 mm','Taped seams','Packs into a pocket'];}else if(sc<=5){t='2-layer waterproof jacket';f=['10,000–15,000 mm','Fully taped seams','Adjustable hood','Storm flap over zip'];}else{t='3-layer storm shell';f=['20,000 mm or more','Fully taped seams','Stiff-brimmed hood','Pit zips for venting'];}
 if(ai===1){f.push('Longer back hem','Reflective details');}if(ai===2&&sc>3)f.push('Helmet-compatible hood');if(ai===3)f.push('Hip length or longer','Big inside pocket');if(ri>=2&&ai===0)f.push('Covers the hips');
 $('pl-t').textContent=t;$('pl-f').innerHTML=f.map(function(x,i){return '<li style="animation-delay:'+i*.05+'s">'+x+'</li>';}).join('');
 $('pl-n').textContent=ri===3?'In a real storm, check warnings before you set out and keep trips short.':h>6?'Long days: breathability matters as much as waterproofing, so look for vents.':'Pair it with quick-drying trousers or waterproof shoes for full comfort.';
 var ic=$('pl-i'),n=[2,4,7,10][ri],s='';for(var i=0;i<n;i++)s+='<i style="left:'+(10+i*(50/n))+'px;animation-delay:'+(i*.13)+'s;animation-duration:'+(1.1-ri*.2)+'s"></i>';ic.innerHTML=s;}
if($('pl-h')){sg('pl-r',function(v){ri=v;});sg('pl-a',function(v){ai=v;});$('pl-h').addEventListener('input',pl);pl();}
[].forEach.call(document.querySelectorAll('.rc-ico-s'),function(e){e.innerHTML='<i style="left:16px"></i><i style="left:30px;animation-delay:.3s"></i><i style="left:44px;animation-delay:.6s"></i>';});
})();
