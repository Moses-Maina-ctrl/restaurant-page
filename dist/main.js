(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{q:()=>n,G:()=>t});const t=document.getElementById("content");function n(e,t,n){t&&e.classList.add(t),n&&e.setAttribute("id",n)}t.innerHTML="",function(){const e=document.createElement("nav");["home","menu","contact"].forEach((a=>{const l=document.createElement("header"),i=document.createElement("button");i.innerHTML=a,e.appendChild(i),n(i,"nav-button",null),l.appendChild(e),t.appendChild(l)}))}(),function(){const e=document.createElement("section"),a=document.createElement("div"),l=document.createElement("h2"),i=document.createElement("p"),o=document.createElement("a");n(e,"hero",null),n(a,"container",null),n(l,"hero-title",null),n(i,"hero-subtitle",null),n(o,"btn",null),o.setAttribute("href","#menu"),l.textContent="Experience the Authentic Flavors of Kenya",i.textContent="Indulge in the rich culinary heritage of Kenya at Kibandaski",o.textContent="Explore Our Menu",e.appendChild(a),a.appendChild(l),a.appendChild(i),a.appendChild(o),t.appendChild(e)}(),function(){const e=document.createElement("section"),a=document.createElement("div"),l=document.createElement("h2"),i=document.createElement("p"),o=document.createElement("p"),d=document.createElement("p");n(e,"about","about"),n(a,"container",null),n(l,"section-title",null),n(i,"about-description",null),n(o,"about-description",null),n(d,"about-description",null),l.textContent="About Kibandaski",i.textContent="Kibandaski brings the essence of Kenyan street food to your table. With a focus on authenticity and quality, we strive to capture the true flavors of Kenya in every dish we  serve.",o.textContent="From aromatic pilau to sizzling nyama choma, each bite will transport you to the bustling streets of Nairobi. Our chefs meticulously craft each dish using traditional recipes and fresh, locally-sourced ingredients",d.textContent="Whether you're a Kenyan native or a curious traveller, join us on a culinary journey through the vibrant flavours of Kenya.",t.appendChild(e),e.appendChild(a),a.appendChild(l),a.appendChild(i),a.appendChild(o),a.appendChild(d)}(),function(){const e=document.createElement("section"),a=document.createElement("div"),l=document.createElement("h2"),i=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div"),r=document.createElement("img"),u=document.createElement("img"),m=document.createElement("img"),p=document.createElement("h3"),s=document.createElement("h3"),h=document.createElement("h3"),C=document.createElement("p"),E=document.createElement("p"),b=document.createElement("p");n(e,"menu","menu"),n(a,"container",null),n(l,"section-title",null),n(i,"menu-items",null),n(o,"menu-item",null),n(d,"menu-item",null),n(c,"menu-item",null),n(p,"item-title",null),n(s,"item-title",null),n(h,"item-title",null),n(C,"item-description",null),n(E,"item-description",null),n(b,"item-description",null),l.textContent="Our Menu",p.textContent="Pilau",s.textContent="Nyama Choma",h.textContent="Samosa",C.textContent="Fragrant rice dish cooked with spices, meat and vegetable.",E.textContent="Grilled meat served with kachumbari and ugali",b.textContent="Crispy pastry filled with spiced meat or vegetables.",r.setAttribute("src","./assests/pexels-alesia-kozik-6066056.jpg"),u.setAttribute("src","./assests/pexels-felipe-balduino-4253619.jpg"),m.setAttribute("src","./assests/pexels-satyam-verma-4449068.jpg"),t.appendChild(e),e.appendChild(a),e.appendChild(l),e.appendChild(i),i.appendChild(o),i.appendChild(d),i.appendChild(c),o.appendChild(r),o.appendChild(p),o.appendChild(C),d.appendChild(u),d.appendChild(s),d.appendChild(E),c.appendChild(m),c.appendChild(h),c.appendChild(b)}()})();