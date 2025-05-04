// 'use strict'
let mainDiv = document.getElementById("post-wraper");

function ajax() {
  let requist = new XMLHttpRequest();
  requist.open("GET", "https://fakestoreapiserver.reactbd.com/comments");

  requist.addEventListener("load", function () {
    console.log(this);
    let responseJs = JSON.parse(this.responseText);
    console.log(responseJs); 

    responseJs.forEach((element) => {
      console.log(element); //titoeuli
      createPostDiv(element);
    });
  });
  requist.send();
}
ajax();

//
function createPostDiv(item) {
  
  let divElement = document.createElement("div");
  divElement.classList.add("div-post");

  let titleId = document.createElement("h3");
  titleId.textContent = item.name;

  let titleNew = document.createElement("h2");
  titleNew.textContent = item.email;

  divElement.appendChild(titleId);
  divElement.appendChild(titleNew);
  mainDiv.appendChild(divElement);
  console.log(divElement);
}