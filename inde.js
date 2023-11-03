const menuButton = document.querySelector('.header .navlist .navbar .menu');
const mobileMenu = document.querySelector('.header .navlist .content');
const menuItem = document.querySelectorAll('.header .navlist .content li a');
const header = document.querySelector('.header');
const brand = document.querySelector('.header .navlist .navbar .brand');

menuButton.addEventListener('click',() =>{
  menuButton.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  brand.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
  const scrollPosition = window.scrollY;
  if(scrollPosition > 250){
    header.classList.add('dynamic');
  } else{
    header.classList.remove('dynamic');
  }
});

menuItem.forEach((item)=>{
  item.addEventListener('click',()=>{
    menuButton.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    brand.classList.toggle('active');
  })
});

// mobileMenu.array.forEach(element => {
  
// });