import { addClassID, content } from "./index";

function renderFooter() {
  const footer = document.createElement("footer")
  const container = document.createElement("div")
  const footerMessage = document.createElement("p")

  addClassID(footer, "footer", null)
  addClassID(container, "container", null)

  footerMessage.textContent = "&copy; 2024 Kibandaski - Taste of Kenya"

  content.appendChild(footer)
  footer.appendChild(container)
  container.appendChild(footerMessage)

}

export { renderFooter }
