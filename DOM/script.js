

// const parent = document.querySelector(".parent")
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML)

// for(let i = 0 ; i < parent.children.length;i++){
//     console.log(parent.children[i].innerHTML)
// }
// parent.children [1].style.color = "orange"
// console.log(parent.firstElementChild)
// console.log(parent.lastElementChild)

// const div = document.createElement('div')
// console.log(div);
// div.className = "main"
// div.id = Math.random(Math.random()*10 + 1)
// div.setAttribute("title", "generated title")
// div.style.backgroundColor = "green"
// div.style.padding = "12px"
// const addText = document.createTextNode("chai aur code")
// div.appendChild(addText)
// document.body.appendChild(div)

function addLanguage(LangName) {
    const li = document.createElement('li')
    li.innerHTML = `${LangName}`
    document.querySelector('.Language').appendChild(li)
}
addLanguage("python")
addLanguage("typescript")

function addOptiLanguage(LangName) {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(LangName))
    document.querySelector('.Language').appendChild(li)
}
addOptiLanguage('goLang')

//edit
const secondLang = document.querySelector("li:nth-child(2)")
console.log(secondLang);
// secondLang.innerHTML = "mojo"
const newLi = document.createElement('li')
newLi.textContent = "mojo"
secondLang.replaceWith(newLi)


//remove

const lastlang = document.querySelector("li:Last-child")
lastlang.remove()