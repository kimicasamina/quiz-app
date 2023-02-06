const main = document.querySelector('#main')

const questionsAndAnswers = [
  {
    question: 'In what year were the first Air Jordan sneakers released?',
    choiceA: '1984',
    choiceB: '1992',
    choiceC: '1800',
    choiceD: '1999',
    correctAns: '1984'
  },
  {
    question: 'In which European city would you find Orly airport?',
    choiceA: 'Berlin',
    choiceB: 'London',
    choiceC: 'Paris',
    choiceD: 'Philippines'
  }
]

questionsAndAnswers.forEach(qAndA => {
  let html = `
  <div class="question">
        ${qAndA.question}
      </div>
      <div class="choices">
        <div class="choice a">${qAndA.choiceA}.</div>
        <div class="choice b">${qAndA.choiceB}</div>
        <div class="choice c">${qAndA.choiceC}</div>
        <div class="choice d">${qAndA.choiceD}</div>
      </div>
  `
  main.innerHTML = html
})


// questions from obj
// select answers
// check if answer is correct
// at the end show score
