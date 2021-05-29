const buttonsToggleAnswer = document.querySelectorAll(
  ".block-questions__button"
);
const answersToQuestions = document.querySelectorAll(
  ".block-questions__answer"
);
const buttonsQuestionTitle = document.querySelectorAll(
  ".block-questions__title"
);

buttonsQuestionTitle.forEach((button, i) => {
  button.addEventListener("click", () => {
    answersToQuestions[i].classList.toggle("display-block");
  });
});
