let doc = document.body;
let header = doc.querySelector(".header")


//* Removing / Adding Search bar


let search_form = header.querySelector(".search-form")
let search_btn = header.querySelector(".search-btn")

search_btn.addEventListener("click", () => {
    search_form.classList.toggle("search-form-active");
});


//* Toggle for Hamburger menu


let navToggler = header.querySelector(".navbarToggler")
let mainMenu = header.querySelector(".header-menu-main")
let closeIcon = header.querySelector(".closeIcon");


let menuOFF = () => {
    navToggler.classList.toggle("active");
    mainMenu.classList.toggle("menu-on");
}

navToggler.addEventListener("click", menuOFF)
closeIcon.addEventListener("click", menuOFF)

//? Removing non essential hover effects

let hovers = header.querySelectorAll(".hover")

let removeHover = () => {
    // console.log(window.innerWidth)
    if(window.innerWidth<992){
        for(let i=0;i<hovers.length;i++){
            hovers[i].classList.remove("hover")
        }
    }
    else{
        for(let i=0;i<hovers.length;i++){
            hovers[i].classList.add("hover")
        }
    }
};

window.addEventListener("resize", removeHover)
removeHover();

//* Toggle drop down 1 

let trigger1 = header.querySelector('.t1')
let trigger2 = header.querySelector('.t2')
let dropLists = header.querySelectorAll('.dropdown-cont')
let dl1 = dropLists[0]
let dl2 = dropLists[1]

let drop1 = () => {
    dl1.classList.toggle("open");
}

let drop2 = () => {
    dl2.classList.toggle("open")
}

trigger1.addEventListener("click", drop1)
trigger2.addEventListener("click", drop2)