// export function burger () {
//     console.log('burger Function');
    
// }


// burger
let navBar = document.getElementById("navBar");
let burgerBar = document.getElementById("burgerBar");

burgerBar.addEventListener("click", function () {
    navBar.classList.toggle("newNav");
    this.classList.toggle("close");
 })