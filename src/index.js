import Wishlist from "./WishList";

let form = document.querySelector("#submitForm");

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let make = document.querySelector("#makeInput");
    let model = document.querySelector("#modelInput");
    let year = document.querySelector("#yearInput");

    Wishlist.add(make.value, model.value, year.value);

    make.value = "";
    model.value = "";
    year.value = "";
});