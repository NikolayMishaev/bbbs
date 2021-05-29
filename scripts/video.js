const popupVideo = document.querySelector('.popup_type_video');
const buttonsPlayVideo = document.querySelectorAll('.block-video__category');
const buttonPlayVideoHeader = document.querySelector('.block-video-header__category');

buttonsPlayVideo.forEach(button=>{
  button.addEventListener('click', ()=>{
    openPopup(popupVideo);
  })
})

buttonPlayVideoHeader.addEventListener('click', ()=>{
  openPopup(popupVideo);
})

