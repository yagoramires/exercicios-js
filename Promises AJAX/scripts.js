// const request = obj => {
//   const xhr = new XMLHttpRequest();
//   xhr.open(obj.method , obj.url , true)
//   xhr.send()

//   xhr.addEventListener('load', (e) => {

//     if(xhr.status >= 200 && xhr.status < 300) {
//       obj.success(xhr.responseText)
//     } else {
//       obj.error({
//         code: xhr.status,
//         msg: xhr.statusText
//       })
//     }
//   })
// }

// document.addEventListener('click', (e) => {
//   const el = e.target
//   const tag = el.tagName.toLowerCase()
  
//   if(tag === 'a') {
//     e.preventDefault()
//     loadPage(el)
//   }
// })

// function loadPage(el) {
//   const href = el.getAttribute('href')

//   request({
//     method: 'GET',
//     url: href,
//     success(response) {
//       loadResult(response)
//     },
//     error(errorText) {
//       console.log(errorText)
//     }
//   })
// }

// function loadResult(response) {
  //   const result = document.querySelector('.resultado')
  //   result.innerHTML = response
  // }
//   document.addEventListener('click', (e) => {
//     const el = e.target
//     const tag = el.tagName.toLowerCase()
//     if(tag === 'a') {
//     e.preventDefault()
//     loadPage(el)
//     }
//   })
  
//   async function loadPage(el) {
//     const href = el.getAttribute('href')
  
//     try {
//       const response = await request({
//         method: 'GET',
//         url: href,
//       })
//       loadResult(response)
  
//     } catch (e) {
//       console.log(e)
//     }
//   }

// const request = obj => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true)
//     xhr.send()
  
//     xhr.addEventListener('load', () => {
//         if(xhr.status >= 200 && xhr.status < 300) {
//           resolve(xhr.responseText)
//         } else {
//           reject(xhr.statusText) 
//         }
//     })
//   })
// }


// function loadResult(response) {
//   const result = document.querySelector('.resultado')
//   result.innerHTML = response
// }

document.addEventListener('click', (e) => {
  const el = e.target
  const tag = el.tagName.toLowerCase()
  
  if(tag === 'a') {
    e.preventDefault()
    loadPage(el)
  }
})

async function loadPage(el) {
  try {
    const href = el.getAttribute('href')
    const response = await fetch(href)
    const html = await response.text()
    loadResult(html)

  } catch (e) {
    console.error(e)
  }


}

function loadResult(response) {
  const result = document.querySelector('.resultado')
  result.innerHTML = response
}