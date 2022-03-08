const paragraph  =     document.createElement('p')
const figure     =     document.createElement('figure')
const image      =     document.createElement('img') 
const figcaption =     document.createElement('figcaption')
const link       =     document.createElement('a')
const uList      =     document.createElement('ul')
const l1         =     document.createElement('li')
const l2         =     document.createElement('li')
const l3         =     document.createElement('li')

paragraph.innerText = 'HTML + CSS + JavaScript = Melhor trio!'
image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png'
image.alt = 'Logo Não-Oficial JavaScript'
figcaption.innerText = 'Logo JavaScript'
link.href = 'https://youtube.com'
link.innerText = 'Youtube'
l1.innerText = 'HTML'
l2.innerText = 'CSS'
l3.innerText = 'JavaScript'

document.querySelector('main').appendChild(paragraph)

document.querySelector('main').appendChild(figure)
figure.appendChild(image)
figure.appendChild(figcaption)

document.querySelector('main').append(link)
document.querySelector('main').appendChild(uList)
uList.appendChild(l1)
uList.appendChild(l2)
uList.appendChild(l3)



// intermediario
// Site: https://g1.globo.com/
// Quantos links existem na tela? 979
// Qual o destino do primeiro? https://www.globo.com/
// Qual o destino do último? https://g1.globo.com/# 
// 


// Avançado

const especial = document.querySelector('main')
especial.classList.add('especial')
especial.classList.remove('especial')

paragraph.innerText = paragraph.innerText + ' - Micaias Silva'
