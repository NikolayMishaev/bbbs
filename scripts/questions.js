const buttonsToggleAnswer = document.querySelectorAll('.block-questions__button');
const answersToQuestions = document.querySelectorAll('.block-questions__answer');


buttonsToggleAnswer.forEach((button,i)=>{
  button.addEventListener('click',()=>{
    answersToQuestions[i].classList.toggle('display-block');
  })
})
