import { addClassID, content } from "./index";

export function renderContact() {
  const contact = document.createElement("section")
  const container = document.createElement("div")
  const title = document.createElement("h2")
  const info_1 = document.createElement("p")
  const info_2 = document.createElement("p")
  const info_3 = document.createElement("p")
  const info_4 = document.createElement("p")
  const socials = document.createElement("div")
  const socials_link = document.createElement("a")
  const socials_link2 = document.createElement("a")
  const socials_link3 = document.createElement("a")


  info = [info_1, info_2, info_3, info_4]
  socio = [socials_link, socials_link2, socials_link3]

  socio.forEach(links => {
    addClassID(links, "social-link", null)
    links.setAttribute("href", "#")
  });
  info.forEach(infos => {
    addClassID(infos, "contact-info", nul)
  });
  addClassID(contact, "contact", "contact")
  addClassID(container, "container", null)
  addClassID(title, "section-title", null)
  addClassID(socials, "social-links", null)

  info_1.textContent = "Location: 123 Street, Nairobi, Kenya"
  info_2.textContent = "Phone: +254 123 456 798"
  info_3.textContent = "Email: info@kibandaski.co.ke"
  info_4.textContent = "Follow us on social media:"
  title.textContent = "Contact us"

  content.appendChild(contact)
  contact.appendChild(container)
  container.appendChild(title)
  container.appendChild(info_1)
  container.appendChild(info_2)
  container.appendChild(info_3)
  container.appendChild(info_4)
  container.appendChild(socials)
  container.appendChild(socials_link)
  container.appendChild(socials_link2)
  container.appendChild(socials_link3)
}
