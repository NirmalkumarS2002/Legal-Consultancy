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

//footer js

const footerMail = document.getElementById("footer-mail");
const footerBtn = document.querySelector(".footer-btn");
const ferror = document.querySelector(".ferror");

footerBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const email = footerMail.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Empty
    if (email === "") {
        ferror.textContent = "Please enter your email address";
        ferror.style.color = "black";
        return;
    }

    // Invalid email
    if (!emailPattern.test(email)) {
        ferror.textContent = "Please enter a valid email address";
        ferror.style.color = "black";
        return;
    }

    // Success
    ferror.textContent = "Subscribed Successfully!";
    ferror.style.color = "green";

    footerMail.value = "";

    // Hide after 3 seconds
    setTimeout(() => {
        ferror.textContent = "";
    }, 3000);
});

//load

const loader = document.getElementById("pageLoader");
        const barFill = document.getElementById("loaderBarFill");
        const percentNum = document.getElementById("loaderPercentNum");

        let progress = 0;

        function updateProgress() {
            // random-ish increment so it doesn't feel robotic
            progress += Math.random() * 12 + 4;
            if (progress >= 100) {
                progress = 100;
            }

            barFill.style.width = progress + "%";
            percentNum.textContent = Math.floor(progress);

            if (progress < 100) {
                setTimeout(updateProgress, 180);
            } else {
                setTimeout(() => {
                    loader.classList.add("hide");
                }, 400);
            }
        }

        window.addEventListener("load", () => {
            updateProgress();
        });