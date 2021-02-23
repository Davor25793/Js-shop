//Slider
const slides = document.querySelectorAll('.slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const auto = true;
const intervalTime = 7000;
let slideInterval;


const nextSlide = () =>  {
  const current = document.querySelector('.current');
  //Remove current className
  current.classList.remove('current');
  //Check for another siblings
  if(current.nextElementSibling){
    current.nextElementSibling.classList.add('current')
  }else{
    slides[0].classList.add('current');
  }
}


const prevSlide = () =>  {
  const current = document.querySelector('.current');
  //Remove current className
  current.classList.remove('current');
  //Check for another siblings
  if(current.nextElementSibling){
    current.nextElementSibling.classList.add('current')
  }else{
    slides[0].classList.add('current');
  }
}

next.addEventListener('click', () => {
  nextSlide();
  if(auto){
    clearInterval(slideInterval)
    slideInterval = setInterval(nextSlide, intervalTime)
  }
})

prev.addEventListener('click', () => {
  prevSlide();
  if(auto){
    clearInterval(slideInterval)
    slideInterval = setInterval(nextSlide, intervalTime)
  }
})

if(auto){
  slideInterval = setInterval(nextSlide, intervalTime)
}