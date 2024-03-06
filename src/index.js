const content = document.getElementById('#content')


export function addClassID(element, clss, ID) {
  element.classList.add(clss)
  element.setAttribute("id", ID)
}

