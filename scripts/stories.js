const menuListStories = document.querySelector('.menu__list_style_stories');
const buttonMenuNext = document.querySelector('.menu__arrow');

buttonMenuNext.addEventListener('click',()=>{
  menuListStories.scrollLeft += 450;
})

