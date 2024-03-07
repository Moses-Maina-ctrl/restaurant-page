import { renderNav } from "./nav"
import { renderHero } from "./hero"
import { renderAbout } from "./about"
import { renderMenu } from "./menu"
import { renderFooter } from "./footer"
import { renderContact } from "./contact"

export const content = document.getElementById('content')

export function addClassID(element, clss, ID) {
  if (!!clss) {
    element.classList.add(clss)
  }
  if (!!ID) {
    element.setAttribute("id", ID)
  }
}

function home() {
  content.innerHTML = "";
  renderNav()
  renderHero()
  renderAbout()
  renderMenu()
  renderFooter()
  renderContact()
}

home()
