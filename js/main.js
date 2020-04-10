const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");

cartButton.addEventListener("click", toggleModal);

const close = document.querySelector(".close");
close.addEventListener("click", toggleModal);

function toggleModal(){
    modal.classList.toggle("is-open");
}

new WOW().init();
