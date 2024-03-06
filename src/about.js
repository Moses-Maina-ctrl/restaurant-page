import { content, addClassID } from "./index";

export function renderAbout() {
  const aboutSection = document.createElement("section")
  const containerDiv = document.createElement("div")
  const title = document.createElement("h2")
  const desc_1 = document.createElement("p")
  const desc_2 = document.createElement("p")
  const desc_3 = document.createElement("p")

  addClassID(aboutSection, "about", "about")
  addClassID(containerDiv, "container", null)
  addClassID(title, "section-title", null)
  addClassID(desc_1, "about-description", null)
  addClassID(desc_2, "about-description", null)
  addClassID(desc_3, "about-description", null)

  title.textContent = "About Kibandaski"
  desc_1.textContent = "Kibandaski brings the essence of Kenyan street food to your table. With a focus on authenticity and quality, we strive to capture the true flavors of Kenya in every dish we  serve."
  desc_2.textContent = "From aromatic pilau to sizzling nyama choma, each bite will transport you to the bustling streets of Nairobi. Our chefs meticulously craft each dish using traditional recipes and fresh, locally-sourced ingredients"
  desc_3.textContent = "Whether you're a Kenyan native or a curious traveller, join us on a culinary journey through the vibrant flavours of Kenya."

  content.appendChild(aboutSection)
  aboutSection.appendChild(containerDiv)
  containerDiv.appendChild(title)
  containerDiv.appendChild(desc_1)
  containerDiv.appendChild(desc_2)
  containerDiv.appendChild(desc_3)

}
