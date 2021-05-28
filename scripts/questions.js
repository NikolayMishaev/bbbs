const buttonsToggleAnswer = document.querySelectorAll('.block-questions__button');
const answersToQuestions = document.querySelectorAll('.block-questions__answer');
const buttonsQuestionTitle = document.querySelectorAll('.block-questions__title');

buttonsQuestionTitle.forEach((button,i)=>{
  button.addEventListener('click',()=>{
    buttonsToggleAnswer[i].classList.toggle('block-questions__button_active');
    answersToQuestions[i].classList.toggle('display-block');
  })
})
