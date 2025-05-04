// export function accordJs (){
//     console.log("accordJs Function");
    
// }
let accordionDiv = document.querySelectorAll('.acc-container');
 
accordionDiv.forEach(function(item) {
  item.addEventListener('click', function() {
    this.classList.toggle('active');

  })
})