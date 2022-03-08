//  iniciante

const tag = document.createElement('p')
tag.innerText ='Oi, eu sou uma tag criada pelo JS'
console.log(tag)
document.querySelector('body').appendChild(tag)

// intermediario

const tagInput = document.createElement('input')
const form = document.querySelector('form')
tagInput.placeholder = 'Digite seu texto aqui'
form.appendChild(tagInput)

// Avançado

const article = document.createElement('article')
const titulo = document.createElement('h1')
const p = document.createElement('p')
const a = document.createElement('a')

titulo.innerText = 'Título do post'
p.innerText = 'Descrição do Post'
a.innerText = 'Ver post completo'
a.href = '#'

document.querySelector('body').appendChild(article)
article.appendChild(titulo)
article.appendChild(p)
article.appendChild(a)
