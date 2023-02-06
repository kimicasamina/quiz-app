const quizData = [
  {
    question: 'In what year were the first Air Jordan sneakers released?',
    a: '1984',
    b: '1992',
    c: '1800',
    d: '1999',
    answer: '1984'
  },
  {
    question: 'In which European city would you find Orly airport?',
    a: 'Berlin',
    b: 'London',
    c: 'Paris',
    d: 'Philippines',
    answer: 'Paris'
  },
  {
    question: 'Water has a pH level of around',
    a: '4',
    b: '6',
    c: '7',
    d: '9',
    answer: '7'
  },
  {
    question: 'What did the Crocodile swallow in Peter Pan',
    a: 'A pair of scissors',
    b: 'An alarm clock',
    c: 'A donut',
    d: 'Peter Pan',
    answer: 'An alarm clock'
  },
  {
    question: 'Which horoscope sign has a crab',
    a: 'sagitarius',
    b: 'taurus',
    c: 'scorpion',
    d: 'cancer',
    answer: 'cancer'
  },
  {
    question: 'The Statue of Liberty was given to the US by which country?',
    a: 'Malaysia',
    b: 'United States',
    c: 'France',
    d: 'Sweden',
    answer: 'France'
  },
  {
    question: 'Who invented scissors',
    a: 'Leonardo Da Vinci',
    b: 'Albert Eintein',
    c: 'Marie Curie',
    d: 'Isaac Newton',
    answer: 'Leonardo Da Vinci'
  },
  {
    question: 'In which film did father and son actors Will and Jaden Smith first appear together',
    a: 'Fight Club',
    b: 'The pursuit of happiness',
    c: 'Into the wild',
    d: 'The karate kid',
    answer: 'Leonardo Da Vinci'
  }
]

const main = document.querySelector('#main')
const question = document.querySelector('.question')
const a = document.querySelector('.a')
const b = document.querySelector('.b')
const c = document.querySelector('.c')
const d = document.querySelector('.d')
const choices = document.querySelector('.choices')
const score = document.querySelector('#score')

let quizIndex = 0
let currentQuizData
let playersAnswer
let playersScore = 0


loadQuiz()

function loadQuiz(){
  currentQuizData = quizData[quizIndex]
  console.log(currentQuizData['question'])
  question.innerText = currentQuizData['question']
  console.log(a.childNodes[1].textContent)
  a.childNodes[1].textContent = currentQuizData['a']
  b.childNodes[1].textContent = currentQuizData['b']
  c.childNodes[1].textContent = currentQuizData['c']
  d.childNodes[1].textContent = currentQuizData['d']
}


choices.addEventListener('click', (e) => {
  // gets players answer
  playersAnswer = e.target.childNodes[1].textContent
  // move on to the next questions
  quizIndex++
  
  // checkAnswer(playersAnswer, currentQuizData['answer'])
  if(playersAnswer === currentQuizData['answer']){
    console.log('correct!')
    playersScore++
  }
  // updates players score
  score.innerText = playersScore

  // load quiz if there are still quiz left, otherwise show alert
  if (quizIndex < quizData.length -1 ){
    loadQuiz()

  } else {
    window.alert(`You completed the quiz! Your total score is ${playersScore}`)
  }
})
