//navbar

let menubtn=document.querySelector(".menu-btn")
let closebtn=document.querySelector(".close-btn")
let navcontainer=document.querySelector(".nav-container")
menubtn.addEventListener("click",()=>{
    navcontainer.classList.add("active")
})

closebtn.addEventListener("click",()=>{
        navcontainer.classList.remove("active")
})

//

let header=document.querySelector(".header")
window.addEventListener("scroll",()=>{
    if(window.scrollY>700){
        header.classList.add("active")
    }
    else{
        header.classList.remove("active")
    }
})

//errorpage

let errorpage=document.querySelectorAll(".errorpage")
errorpage.forEach((error)=>{
   error.addEventListener("click",()=>{
    window.location.href="404.html"
   })
})


// reveal animation 

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("showed");
        }
    })
}, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
})

document.querySelectorAll(".reveal, .reveal-right, .reveal-left").forEach((el) => {
    observer.observe(el)
})