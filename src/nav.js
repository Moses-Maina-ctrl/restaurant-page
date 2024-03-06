import { addClassID } from "./index.js";


function renderNav() {
  const nav = document.createElement("nav");
  navItems = ['home', 'menu', 'contact']

  navItems.forEach(item => {
    navBtn = document.createElement("button")
    navBtn.innerHTML = item;
    nav.appendChild(navBtn)
    addClassID(navBtn, 'nav-button', null)
  });
}

export { renderNav }
