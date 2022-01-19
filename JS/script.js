let doc = document.body;
let header = doc.querySelector(".header")
let search_form = header.querySelector(".search-form")
let search_btn = header.querySelector(".search-btn")

//* Removing / Adding search bar

search_btn.addEventListener("click", () => {
    console.log("here")
    search_form.classList.toggle("search-form-active");
});