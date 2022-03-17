const btn = document.querySelector(".btn");
const img = document.querySelector("img");

console.log(btn, img);
function openImage() {
  img.classList.toggle("image-active");
}

btn.addEventListener("click", openImage);
