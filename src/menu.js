import { content, addClassID } from "./index";


export function renderMenu() {
  const menu = document.createElement("section")
  const container = document.createElement("div");
  const title = document.createElement("h2")
  const menuItems1 = document.createElement("div");
  const menuItems_1 = document.createElement("div");
  const menuItems_2 = document.createElement("div");
  const menuItems_3 = document.createElement("div");
  const img_1 = document.createElement("img")
  const img_2 = document.createElement("img")
  const img_3 = document.createElement("img")
  const item_title1 = document.createElement("h3")
  const item_title2 = document.createElement("h3")
  const item_title3 = document.createElement("h3")
  const desc1 = document.createElement("p")
  const desc2 = document.createElement("p")
  const desc3 = document.createElement("p")

  addClassID(menu, "menu", "menu")
  addClassID(container, "container", null)
  addClassID(title, "section-title", null)
  addClassID(menuItems1, "menu-items", null)
  addClassID(menuItems_1, "menu-item", null)
  addClassID(menuItems_2, "menu-item", null)
  addClassID(menuItems_3, "menu-item", null)
  addClassID(item_title1, "item-title", null)
  addClassID(item_title2, "item-title", null)
  addClassID(item_title3, "item-title", null)
  addClassID(desc1, "item-description", null)
  addClassID(desc2, "item-description", null)
  addClassID(desc3, "item-description", null)

  title.textContent = "Our Menu"
  item_title1.textContent = "Pilau";
  item_title2.textContent = "Nyama Choma"
  item_title3.textContent = "Samosa"
  desc1.textContent = "Fragrant rice dish cooked with spices, meat and vegetable."
  desc2.textContent = "Grilled meat served with kachumbari and ugali"
  desc3.textContent = "Crispy pastry filled with spiced meat or vegetables."

  img_1.setAttribute("src", "./assests/pexels-alesia-kozik-6066056.jpg")
  img_2.setAttribute("src", "./assests/pexels-felipe-balduino-4253619.jpg")
  img_3.setAttribute("src", "./assests/pexels-satyam-verma-4449068.jpg")

  content.appendChild(menu)
  menu.appendChild(container)
  menu.appendChild(title)
  menu.appendChild(menuItems1)
  menuItems1.appendChild(menuItems_1)
  menuItems1.appendChild(menuItems_2)
  menuItems1.appendChild(menuItems_3)
  menuItems_1.appendChild(img_1)
  menuItems_1.appendChild(item_title1)
  menuItems_1.appendChild(desc1)
  menuItems_2.appendChild(img_2)
  menuItems_2.appendChild(item_title2)
  menuItems_2.appendChild(desc2)
  menuItems_3.appendChild(img_3)
  menuItems_3.appendChild(item_title3)
  menuItems_3.appendChild(desc3)


}
