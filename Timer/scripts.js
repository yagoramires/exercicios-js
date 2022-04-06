const buttons = document.querySelectorAll('button');
const displayTime = document.querySelector('.container__timer')

let valor = 0
let interval


function formatTimer(sec) {
  const initialTime = new Date(sec * 1000)

  return initialTime.toLocaleTimeString('pt-br', {
    hour12: false,
    timeZone: 'GMT',
  })
}


function timer() {
  interval = setInterval(() => {
    valor++
    displayTime.innerText = formatTimer(valor)
  }, 1000)
}

// buttons.forEach((button)=>{
  
//   if (button.classList.contains('container__buttons__start')) {
//     button.addEventListener('click', () => {
//       clearInterval(interval)
//       displayTime.style.color = 'black'
//       timer()
//     })
//   }
//   if (button.classList.contains('container__buttons__stop')) {
//     button.addEventListener('click', () => {
//       displayTime.style.color = '#B22222'
//       clearInterval(interval)
//     })
//   }
//   if (button.classList.contains('container__buttons__zerar')) {
//     button.addEventListener('click', () => {
//       clearInterval(interval)
//       displayTime.style.color = 'black'
//       valor = 0
//       displayTime.innerText = formatTimer(valor)
//     })
//   }
// })

buttons.forEach((button)=>{

  button.addEventListener('click', (el)=>{
    e = el.target

    if (e.classList.contains('container__buttons__start')) {
        clearInterval(interval)
        displayTime.style.color = 'black'
        timer()
    }
    if (e.classList.contains('container__buttons__stop')) {
        displayTime.style.color = '#B22222'
        clearInterval(interval)
    }
    if (e.classList.contains('container__buttons__zerar')) {
        clearInterval(interval)
        displayTime.style.color = 'black'
        valor = 0
        displayTime.innerText = formatTimer(valor)
    }
  })
  
})

// document.addEventListener('click', (e) => {
//   console.log(e.target)
//   let el = e.target

//   if (el.classList.contains('container__buttons__start')) {
//     clearInterval(interval)
//     displayTime.style.color = 'black'
//     timer()
//   }
//   if (el.classList.contains('container__buttons__stop')) {
//       displayTime.style.color = '#B22222'
//       clearInterval(interval)
//   }
//   if (el.classList.contains('container__buttons__zerar')) {
//       clearInterval(interval)
//       displayTime.style.color = 'black'
//       valor = 0
//       displayTime.innerText = formatTimer(valor)
//   }
// })
