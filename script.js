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