const headerMenu = document.querySelector(".header");
const content = document.querySelector('.content');
const contentStories = document.querySelector('.content__stories');

const popupSignIn = document.querySelector(".popup-sign-in");
const buttonSignIn = document.querySelector(".header__account");
const buttonClosePopupSignIn = document.querySelector(".popup__close");

const popupMobileMenu = document.querySelector(".popup-menu");
const buttonMobileMenu = document.querySelector(".header__menu");
const buttonCloseMobileMenu = document.querySelector(".popup-menu__close");
const buttonSignInMobileMenu = document.querySelector(".popup-menu__account");

const buttonHeaderSearch = document.querySelector(".header__search");
const navigationMenuHeader = document.querySelector(".navigation_place_header");
const searchFormHeader = document.querySelector(".header__form-search");
const header = document.querySelector(".header");
const headerDivisor = document.querySelector(".header__divisor");
const buttonSearchMobileMenu = document.querySelector(".popup-menu__search");
const headerFormSearchList = document.querySelector(".header__search-list");

const exitMobileMenu = document.querySelector(".popup-menu__exit");

const buttonChangeCity = document.querySelector(".popup-menu__change-city");
const popupCity = document.querySelector(".popup-city");

const popups = document.querySelectorAll(".popup");

const buttonSignInSubmit = document.querySelector(".popup__button-submit");
const formSignIn = document.querySelector(".popup__form");

const page = document.querySelector(".page");

const menuStories = document.querySelector(".menu_type_stories");

const blockCalendar = document.querySelector(".block-calendar");
const blockGuest = document.querySelector(".block-guest");
const messageAdviceForm = document.querySelector(".message");

const headerInput = document.querySelector('.header__input');
const menuStory = document.querySelector('.block-stories__menu');

const buttonsMenu = document.querySelectorAll('.menu__button');

const handleEscClosePopup = (e) => {
  if (e.key === 'Escape') {
    closePopup(document.querySelector('.visible-block'))
  }
}

const openPopup = (popup) => {
  document.addEventListener('keydown',handleEscClosePopup)
  popup.classList.add("visible-block");
  headerMenu.classList.remove("header_type_position-fixed");
  document.removeEventListener("scroll", checkScroll);
  navigationMenuHeader.classList.remove("display-none");
  searchFormHeader.classList.remove("display-block");
  header.classList.remove("header_type_search");
  headerDivisor.classList.remove("header__divisor_type_search");
  buttonHeaderSearch.classList.remove("header__search_type_search");
  menuStory ? menuStory.classList.remove('block-stories__menu_type_position-fixed') : '';
  searchFormHeader.classList.remove('header__form-search_visible');
  headerInput.classList.remove('header__input_animation');
};

const closePopup = (popup) => {
  document.removeEventListener('keydown',handleEscClosePopup)
  popup.classList.remove("visible-block");
  document.addEventListener("scroll", checkScroll);
};

popups.forEach((popup) => {
  popup.addEventListener("click", (e) => {
    if (e.target.classList.contains("visible-block")) {
      closePopup(e.target);
    }
  });
});

buttonSearchMobileMenu.addEventListener("click", () => {
    headerInput.classList.add('header__input_animation');
    navigationMenuHeader.classList.add("display-none");
    searchFormHeader.classList.add("header__form-search_visible");
    headerFormSearchList.classList.add('display-block');
    header.classList.add("header_type_search");
    headerDivisor.classList.add("header__divisor_type_search");
    buttonHeaderSearch.classList.add("header__search_type_search");
  closePopup(popupMobileMenu);
});

buttonHeaderSearch.addEventListener("click", () => {
  if (buttonHeaderSearch.classList.contains("header__search_type_search")) {
    navigationMenuHeader.classList.remove("display-none");
    searchFormHeader.classList.remove("header__form-search_visible");
    headerFormSearchList.classList.remove('display-block');
    header.classList.remove("header_type_search");
    headerDivisor.classList.remove("header__divisor_type_search");
    buttonHeaderSearch.classList.remove("header__search_type_search");
    headerInput.classList.remove('header__input_animation');
    menuStory ? menuStory.classList.remove('block-stories__menu_type_position-fixed') : '';
  } else {
    headerInput.classList.add('header__input_animation');
    navigationMenuHeader.classList.add("display-none");
    searchFormHeader.classList.add("header__form-search_visible");
    headerFormSearchList.classList.add('display-block');
    header.classList.add("header_type_search");
    headerDivisor.classList.add("header__divisor_type_search");
    buttonHeaderSearch.classList.add("header__search_type_search");
  }
});

buttonSignIn.addEventListener("click", () => {
  buttonSignInMobileMenu.classList.toggle("popup-menu__account_authorized");
  buttonSignIn.classList.toggle("header__account_authorized");
  if (blockCalendar) blockCalendar.classList.toggle("display-none");
  if (blockGuest) blockGuest.classList.toggle("display-none");
  if (messageAdviceForm) messageAdviceForm.classList.toggle("display-none");
  openPopup(popupSignIn);
});
buttonClosePopupSignIn.addEventListener("click", (e) => {
  closePopup(e.target.closest(".popup"));
});

buttonSignInMobileMenu.addEventListener("click", () => {
  buttonSignInMobileMenu.classList.toggle("popup-menu__account_authorized");
  buttonSignIn.classList.toggle("header__account_authorized");
  if (blockCalendar) blockCalendar.classList.toggle("display-none");
  if (blockGuest) blockGuest.classList.toggle("display-none");
  if (messageAdviceForm) messageAdviceForm.classList.toggle("display-none");
  closePopup(popupMobileMenu);
  openPopup(popupSignIn);
});
buttonMobileMenu.addEventListener("click", () => {
  openPopup(popupMobileMenu);
});
buttonCloseMobileMenu.addEventListener("click", () => {
  closePopup(popupMobileMenu);
});
exitMobileMenu.addEventListener("click", () => {
  closePopup(popupMobileMenu);
});
buttonChangeCity.addEventListener("click", () => {
  closePopup(popupMobileMenu);
  openPopup(popupCity);
});

buttonSignInSubmit.addEventListener("click", () => {
  window.location.href = "./personal_account.html";
});
formSignIn.addEventListener("submit", (e) => {
  e.preventDefault();
});

page.addEventListener("click", (e) => {
  if (e.target.classList.contains("header")) {
    headerMenu.classList.remove("header_type_position-fixed");
    navigationMenuHeader.classList.remove("display-none");
    searchFormHeader.classList.remove("header__form-search_visible");
    headerFormSearchList.classList.remove('display-block');
    header.classList.remove("header_type_search");
    headerDivisor.classList.remove("header__divisor_type_search");
    buttonHeaderSearch.classList.remove("header__search_type_search");
    headerInput.classList.remove('header__input_animation');
    menuStory ? menuStory.classList.remove('block-stories__menu_type_position-fixed') : '';
  }
});

if (buttonsMenu) buttonsMenu.forEach(i=>i.addEventListener('click',()=>{i.classList.toggle('menu__button_active')}));

// при обратном скролле показываем header с display: fixed. При возврщании к началу страницы скрываем класс с фиксом
let current = 0;

const checkScroll = () => {
  const scrollStartPosition = contentStories ? 310 : 50;
  if (
    window.pageYOffset < current &&
    window.pageYOffset > scrollStartPosition &&
    !popupSignIn.classList.contains("visible-block")
  ) {
    headerMenu.classList.add("header_type_position-fixed");
    content.classList.add('content_style_header-fixed');
    if (menuStories) {
      menuStories.classList.add("block-stories__menu_type_position-fixed")
      contentStories.classList.add('content__stories_style_menu-fixed');
    }
  } else {
    headerMenu.classList.remove("header_type_position-fixed");
    content.classList.remove('content_style_header-fixed');
    if (menuStories) {
      menuStories.classList.remove("block-stories__menu_type_position-fixed")
      contentStories.classList.remove('content__stories_style_menu-fixed');
    }
  }
  current = window.pageYOffset;
};

document.addEventListener("scroll", checkScroll);
