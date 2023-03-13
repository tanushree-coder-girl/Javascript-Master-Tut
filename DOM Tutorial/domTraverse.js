//10. Dom Traversing 

const rootNode = document.getRootNode();
console.log(rootNode)
console.log(rootNode.childNodes[0]) //root element
const htmlElement = rootNode.firstChild;
console.log(htmlElement.childNodes) // head, text,body = nodelist
const body = document.body
console.log(body)
const head = htmlElement.childNodes[1]
console.log(head)
console.log(head.nextElementSibling) //element node 
console.log(head.nextSibling) // textnode
console.log(head.childNodes)

const p = document.getElementsByTagName('p');
console.log(p[0].parentNode)

console.log(p[0].parentNode.parentNode)

const headTag = document.querySelector('head')
const title = headTag.querySelector('title')
console.log(title)

const container = document.querySelector('.container')
console.log(container)
console.log(container.childNodes)
console.log(container.children)

console.log(container.childElementCount)
console.log(container.hasChildNodes())
console.log(container.ELEMENT_NODE)
console.log(container.TEXT_NODE)
console.log(container.firstChild)
console.log(container.firstElementChild)
console.log(container.getRootNode())
console.log(container.isSameNode(body))
console.log(container.isEqualNode(body))
console.log(container.lastChild)
console.log(container.lastElementChild)
console.log(container.nextElementSibling)
console.log(container.nextSibling)
console.log(container.nodeName)
console.log(container.nodeType)
console.log(container.nodeValue)
console.log(container.parentElement)
console.log(container.parentNode)
console.log(container.previousElementSibling)
console.log(container.previousSibling)
console.log(container.shadowRoot)













