const popupAdviceForm = document.querySelector(".popup-advice");
const buttonAdviceForm = document.querySelector(".block-message__button");
const buttonFormSelect = document.querySelector(".popup__select");
const selectHead = document.querySelector('.popup__select-head');
const selectList = document.querySelector('.popup__select-list');
const selectItems = document.querySelectorAll('.popup__select-item')
const selectInput = document.querySelector('.popup__select-input');

const popupAdviceContainer = document.querySelector(
  ".popup__container_type_advice"
);
const buttonSubmitFormAdvice = document.querySelector(
  ".popup__button-submit_type_advice"
);
const popupAdviceSucess = document.querySelector(".popup_type_advice-sucess");
const formAdvice = document.querySelector(".popup__form_type_advice");

buttonAdviceForm.addEventListener("click", () => {
  openPopup(popupAdviceForm);
  formAdvice.reset();
  selectHead.textContent = 'Тип отдыха*';
  selectHead.style.color = "#a7a6a6";
});

buttonFormSelect.addEventListener("click", (e) => {
  if (e.target.classList.contains('popup__select-head')) {
    buttonFormSelect.classList.toggle("popup__select_type_active");
    selectHead.classList.toggle("popup__select-head_type_active");
    selectList.classList.toggle("display-none");
  }
});

popupAdviceContainer.addEventListener("click", (e) => {
  if (!e.target.classList.contains('popup__select-head')) {
    buttonFormSelect.classList.remove("popup__select_type_active");
    selectHead.classList.remove("popup__select-head_type_active");
    selectList.classList.add("display-none");
  }
});

buttonSubmitFormAdvice.addEventListener("click", () => {
  closePopup(popupAdviceForm);
  openPopup(popupAdviceSucess);
});

formAdvice.addEventListener("submit", (e) => {
  e.preventDefault();
});

selectItems.forEach(i => i.addEventListener('click', () => {
  selectInput.value = i.textContent;
  selectHead.textContent = selectInput.value;
  selectHead.style.color = "black";
}))
