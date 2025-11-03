const DATA=[
{id:9,type:'land',title:'100x100 Plot — Ongata Rongai, 500m from Tarmac',price:'KES 26,000,000',loc:'Ongata Rongai',img:'images/ongata.jpg'},
{id:10,type:'land',title:'1 Acre — Naivasha, 2km from Nairobi–Nakuru Highway',price:'KES 6,000,000',loc:'Naivasha',img:'images/naivasha.jpg'},
{id:11,type:'land',title:'50x100 Plot — Konza City',price:'KES 350,000',loc:'Konza',img:'images/konza.jpg'},
{id:12,type:'land',title:'1 Acre — Kitengela Sinket Road, 2km from Lakewood School',price:'KES 9,000,000',loc:'Kitengela',img:'images/kitengela.jpg'}
];
function renderProperties(data){
 const t=document.getElementById('property-list');
 if(!t)return;
 t.innerHTML=data.map(p=>`
 <article class="property-card">
   <img src="${p.img}" alt="${p.title}">
   <div class="property-info">
     <h4>${p.title}</h4>
     <div class="property-loc">📍 ${p.loc}</div>
     <div class="property-price">${p.price}</div>
     <a class="btn" target="_blank" href="https://wa.me/254728865833?text=${encodeURIComponent('Hello Solid Properties! I am interested in '+p.title)}">Book Viewing on WhatsApp</a>
   </div>
 </article>`).join('');
}
function toggleMenu(){document.getElementById('menu').classList.toggle('active');}
document.addEventListener('DOMContentLoaded',()=>renderProperties(DATA));
