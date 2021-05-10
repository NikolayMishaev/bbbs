const buttonsCalendarRegistration = document.querySelectorAll('.list__submit_type_register');
const poupEvent = document.querySelector('.popup-calendar_type_event');
const buttonsClosePopupsCalendar = document.querySelectorAll('.popup__close_type_calendar');
const buttonCalendarRegistrationPopup = document.querySelector('.list__submit_type_register-popup');
const popupConfirm = document.querySelector('.popup-calendar_type_confirm');
const buttonConfirmEvent = document.querySelector('.list__submit_confirm');
const popupSuccess = document.querySelector('.popup-calendar_type_done');
const buttonReturnToCalendar =document.querySelector('.list__submit_return');
const calendarCards = document.querySelectorAll('.list__element');

buttonsCalendarRegistration.forEach(button => {
  button.addEventListener('click', () => {
    openPopup(poupEvent)
  });
})

calendarCards.forEach(card => {
  card.addEventListener('click', () => {
    openPopup(poupEvent)
  });
})

buttonsClosePopupsCalendar.forEach(button => {
  button.addEventListener('click', e => {
    closePopup(e.target.closest('.popup'));
  });
})

buttonCalendarRegistrationPopup.addEventListener('click', () => {
  closePopup(poupEvent)
  openPopup(popupConfirm)
});

buttonConfirmEvent.addEventListener('click', () => {
  closePopup(popupConfirm)
  openPopup(popupSuccess)
});
buttonReturnToCalendar.addEventListener('click', e => {
  closePopup(e.target.closest('.popup'));
});
