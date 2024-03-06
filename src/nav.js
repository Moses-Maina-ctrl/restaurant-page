import { content, addClassID } from "./index.js";


function renderNav() {
  const nav = document.createElement("nav");
  const navItems = ['home', 'menu', 'contact']

  navItems.forEach(item => {
    const header = document.createElement("header")
    const navBtn = document.createElement("button")
    navBtn.innerHTML = item;
    nav.appendChild(navBtn)
    addClassID(navBtn, 'nav-button', null)
    header.appendChild(nav)
    content.appendChild(header)
  });
}

export { renderNav }
