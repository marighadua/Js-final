// import { serverApi } from './server.js';
// import { burger } from './burger.js';
// import { accordJs } from './accordion.js';
// import { validation } from './form&cookies.js';
// accordJs();
// validation();
// burger();
// serverApi();


// splide/slide
var splide = new Splide( '.splide', {
    type    : 'loop',
    perPage : 3,
    autoplay: true,
  } );
  
  splide.mount();


//  scroll
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//  to do 
//  to do
let inputElement = document.querySelector ('.inputel');
let btnItem = document.querySelector('.btn-item');
let ulItem = document.querySelector('.ul-item');
let clearBtn = document.querySelector('.clear-all');
let formel = document.querySelector ('.form-el');


formel.addEventListener('submit', function(e) {
  e.preventDefault();
})
btnItem.addEventListener('click', function () {
  let valueitem = inputElement.value;
   if (valueitem === ' ') {
    return;
   }

  let li = document.createElement('li');
  li.textContent = valueitem;
  let removeItem = document.createElement ('i');
  removeItem.classList.add("fa-solid","fa-xmark");
  removeItem.addEventListener('click', function () {
    li.remove ()
  })

  li.appendChild(removeItem);
  ulItem.appendChild(li);
  inputElement.value = ' ';

})
  

clearBtn.addEventListener('click', function() {
  ulItem.innerHTML = ' ';
})