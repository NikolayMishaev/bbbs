const popupVideo = document.querySelector('.popup_type_video');
const buttonsPlayVideo = document.querySelectorAll('.block-video__category');
const buttonPlayVideoHeader = document.querySelector('.block-video-header__category');
const containerPopupVideo = document.querySelector('.popup__container_type_video');

buttonsPlayVideo.forEach(button=>{
  button.addEventListener('click', ()=>{
    openPopup(popupVideo);
  })
})

buttonPlayVideoHeader ?
buttonPlayVideoHeader.addEventListener('click', ()=>{
  openPopup(popupVideo);
}) : '';


containerPopupVideo.addEventListener('click', (e)=>{
  e.target.classList.contains('popup__container_type_video') || e.target.classList.contains('block-video-header__title_type_popup-video') || e.target.classList.contains('block-video-header__caption_type_popup-video') ? closePopup(popupVideo) : '';
})
