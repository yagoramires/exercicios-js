const paragrafos = document.querySelector('.paragrafos')
console.log(paragrafos)

const p = paragrafos.querySelectorAll('p')
console.log(p)

const bodyStyle = getComputedStyle(document.body)
console.log(bodyStyle)
const bgColorBody = bodyStyle.backgroundImage
console.log(bgColorBody)



p.forEach((v, i ,a) => {
  console.log(v, i ,a)

  console.log(v.innerText)

  v.style.backgroundImage = bgColorBody
  v.style.borderRadius = '0.25rem'
  v.style.marginTop = '0.25rem'
  v.style.textAlign = 'center'
  v.style.color = '#fff'
})