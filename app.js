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

//Variables
const cartBtn = document.querySelector('.cartBtn');
//Up in navbar
const totalItems = document.querySelector('.total-items');
//Products CONTAINER
const productsContainer = document.querySelector('.products-container')
//Add to the cart button
const addToCart = document.querySelector('.add-item');
//Close cart
const closeCart = document.querySelector('.cart-close');
//CART CONTAINER
const cartContainer = document.querySelector('.cart-content');
//Remove item 
const removeItem = document.querySelector('.remove-item');
//Item amount
const amount = document.querySelector('.item-amount')
//CART DOM TOTAL
const cartDomTotal = document.querySelector('.cart-total');

//Cart 
let cart = []


class Items{

  async getItems(){
    const response = await fetch('items.json')
    const data = await response.json();
    return data;
  }
}


class UI{
  showItems(data){
   let output = ''
    
   //Loop through json file
   data.forEach(item => {
     output += `
     <div class="product">
      <div class="image">
       <img src=${item.img} alt="" class="image-img">
       <button class="add-item" data-id=${item.id}>
         <i class="fas fa-shopping-cart"></i>
           Add to the cart
       </button>
      </div>
      <h3>${item.name}</h3>
       <h4>$${item.price}</h4>
      </div>
     `
     productsContainer.innerHTML = output;
   })
  }
}


class Storage{
  static addToLocalStorage(items){
   localStorage.setItem('items', JSON.stringify(items))
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const items = new Items()
  const ui = new UI()

  items.getItems()
    .then(items => {
        ui.showItems(items)
        Storage.addToLocalStorage(items)
      })
    .catch(err => console.log(err))


})


