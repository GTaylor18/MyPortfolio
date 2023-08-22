console.log ('hello World')

// document.querySelectorAll(".carousel").forEach(carousel => {
//     const items = carousel.querySelectorAll(".carousel-item");
//     const buttonsHtml = Array.from(items,() => {
//         return `<span class="carousel-button"></span>`;
//     })
//     carousel.insertAdjacentHTML("beforeend", `
//         <div class="carousel-nav">
//         ${ buttonsHtml.join("")}
//         </div>
//     `);
//     const buttons = carousel.querySelectorAll(".carousel-button");
//     buttons.forEach((button, i) => {
//         button.addEventListener("click",() => {
//             // un-select all the items
//             items.forEach(item => item.classList.remove("carousel-item-selected"));
//             buttons.forEach(button => button.classList.remove("carousel-button-selected"));

//             items[i].classList.add("carousel-item-selected");
//             button.classList.add("carousel-button-selected");
//         })
//     })
//     console.log(buttonsHtml);
//     items[0].classList.add("carousel-item-selected");
//     buttons[0].classList.add("carousel-button-selected");
// });

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}