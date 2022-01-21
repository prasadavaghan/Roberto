//!----------------------------------------------


//* Parallax 2 section

let parallax2 = document.querySelector("#parallax2")

window.addEventListener("scroll", () => {
    let offSet = window.pageYOffset;
    // console.log(offSet)
    // console.log(offSet*(0.5))
    offSet = offSet * 0.5;
    offSet = 426 - offSet;
    parallax2.style.transform = `translate3d(0px, ${offSet}px, 0px)`;
    console.log(offSet)
})