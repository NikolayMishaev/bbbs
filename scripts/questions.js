const buttonsToggleAnswer = document.querySelectorAll('.block-questions__button');
const answersToQuestions = document.querySelectorAll('.block-questions__answer');
const buttonsQuestionTitle = document.querySelectorAll('.block-questions__title');
const questionsCategory = document.querySelectorAll('.block-questions__category');

buttonsQuestionTitle.forEach((button,i)=>{
  button.addEventListener('click',()=>{
    buttonsToggleAnswer[i].classList.toggle('block-questions__button_active');
    answersToQuestions[i].classList.toggle('display-block');
    questionsCategory[i].classList.toggle('block-questions__category_style_on-answer');
  })
})
