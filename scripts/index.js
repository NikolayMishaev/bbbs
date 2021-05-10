const headerMenu = document.querySelector('.header');

const popupSignIn = document.querySelector('.popup-sign-in');
const buttonSignIn = document.querySelector('.header__account');
const buttonClosePopupSignIn = document.querySelector('.popup__close');

const popupMobileMenu = document.querySelector('.popup-menu');
const buttonMobileMenu = document.querySelector('.header__menu');
const buttonCloseMobileMenu = document.querySelector('.popup-menu__close');
const buttonSignInMobileMenu = document.querySelector('.popup-menu__account');

const buttonHeaderSearch = document.querySelector('.header__search');
const navigationMenuHeader = document.querySelector('.navigation_place_header');
const searchFormHeader = document.querySelector('.header__form-search');
const header = document.querySelector('.header');
const headerDivisor = document.querySelector('.header__divisor');
const buttonSearchMobileMenu = document.querySelector('.popup-menu__search');

const exitMobileMenu = document.querySelector('.popup-menu__exit');

const buttonChangeCity = document.querySelector('.popup-menu__change-city');
const popupCity = document.querySelector('.popup-city');

const popups = document.querySelectorAll('.popup');



const openPopup = popup => {
  popup.classList.add("visible-block");
  headerMenu.classList.remove('header_type_position-fixed');
  document.removeEventListener('scroll', checkScroll);
  navigationMenuHeader.classList.remove('display-none');
  searchFormHeader.classList.remove('display-block');
  header.classList.remove('header_type_search');
  headerDivisor.classList.remove('header__divisor_type_search');
  buttonHeaderSearch.classList.remove('header__search_type_search');
};

const closePopup = popup => {
  popup.classList.remove("visible-block");
  document.addEventListener('scroll', checkScroll);
};

popups.forEach(popup => {
  popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('visible-block')) {
      closePopup(e.target);
    }
  })
})

buttonSearchMobileMenu.addEventListener('click', () => {
  navigationMenuHeader.classList.add('display-none');
  searchFormHeader.classList.add('display-block');
  header.classList.add('header_type_search');
  headerDivisor.classList.add('header__divisor_type_search');
  buttonHeaderSearch.classList.add('header__search_type_search');
});

buttonHeaderSearch.addEventListener('click', () => {
  navigationMenuHeader.classList.add('display-none');
  searchFormHeader.classList.add('display-block');
  header.classList.add('header_type_search');
  headerDivisor.classList.add('header__divisor_type_search');
  buttonHeaderSearch.classList.add('header__search_type_search');
});


buttonSignIn.addEventListener('click', () => {
  openPopup(popupSignIn)
});
buttonClosePopupSignIn.addEventListener('click', e => {
  closePopup(e.target.closest('.popup'));
});

buttonSignInMobileMenu.addEventListener('click', () => {
  openPopup(popupSignIn)
  closePopup(popupMobileMenu)
});
buttonMobileMenu.addEventListener('click', () => {
  openPopup(popupMobileMenu)
});
buttonCloseMobileMenu.addEventListener('click', () => {
  closePopup(popupMobileMenu)
});
exitMobileMenu.addEventListener('click', () => {
  closePopup(popupMobileMenu)
});
buttonChangeCity.addEventListener('click', () => {
  openPopup(popupCity)
  closePopup(popupMobileMenu)
});


// при обратном скролле показываем header с display: fixed. При возврщании к началу страницы скрываем класс с фиксом
let current = 0;

const checkScroll = () => {
  if (window.pageYOffset < current && window.pageYOffset > 50 && !popupSignIn.classList.contains("visible-block")) {
    headerMenu.classList.add('header_type_position-fixed');
  } else {
    headerMenu.classList.remove('header_type_position-fixed');
  }
  current = window.pageYOffset;
}

document.addEventListener('scroll', checkScroll);
