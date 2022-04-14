const text = document.querySelector('.container__text')

function getMonthName(month) {
    let monthString
  
    switch (month) {
    case 0:
      monthString = 'Janeiro';
      return monthString
    case 1:
      monthString = 'Fevereiro';
      return monthString
    case 2:
      monthString = 'Março';
      return monthString
    case 3:
      monthString = 'Abril';
      return monthString
    case 4:
      monthString = 'Maio';
      return monthString
    case 5:
      monthString = 'Junho';
      return  monthString
    case 6:
      monthString = 'Julho';
      return monthString
    case 7:
      monthString = 'Agosto';
      return  monthString
    case 8:
      monthString = 'Setembro';
      return monthString
    case 9:
      monthString = 'Outubro';
      return monthString
    case 10:
      monthString = 'Novembro';
      return monthString
    case 11:
      monthString = 'Dezembro';
      return monthString
  }
}

function getWeekDayName(weekDay) {
  let weekDayText
  switch (weekDay ) {
    case 0:
      weekDayText = 'Domingo'
      return weekDayText
    case 1:
      weekDayText = "Segunda-Feira"
      return weekDayText
    case 2:
      weekDayText = "Terça-Feira"
      return weekDayText
    case 3:
      weekDayText = "Quarta-Feira"
      return weekDayText
    case 4:
      weekDayText = "Quinta-Feira"
      return weekDayText
    case 5:
      weekDayText = "Sexta-Feira"
      return weekDayText
    case 6:
      weekDayText = "Sábado"
      return weekDayText
  }
}

function setDisplayDate() {
  
const date = new Date()

const weekDay = date.getDay()
const day = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()
const hour = date.getHours()
const minute = date.getMinutes()

const monthText = getMonthName(month)
const weekDayText = getWeekDayName(weekDay)

text.innerHTML = `${weekDayText}, ${day} de ${monthText} de ${year} às ${hour}:${minute}`

}
