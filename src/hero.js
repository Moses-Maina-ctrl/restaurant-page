import { content, addClassID } from "./index.js";

export function renderHero() {
  const hero = document.createElement("section")
  const div = document.createElement("div")
  const title = document.createElement("h2")
  const desc = document.createElement("p")
  const menuBtn = document.createElement("a")
  addClassID(hero, "hero", null)
  addClassID(div, "container", null)
  addClassID(title, "hero-title", null)
  addClassID(desc, "hero-subtitle", null)
  addClassID(menuBtn, "btn", null)
  menuBtn.setAttribute("href", "#menu")

  title.textContent = "Experience the Authentic Flavors of Kenya"
  desc.textContent = "Indulge in the rich culinary heritage of Kenya at Kibandaski"
  menuBtn.textContent = "Explore Our Menu"

  hero.appendChild(div)
  div.appendChild(title)
  div.appendChild(desc)
  div.appendChild(menuBtn)
  content.appendChild(hero)
}
