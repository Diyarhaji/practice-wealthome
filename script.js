'use strict';
// 1 menu 

const $navbar=document.querySelector("[data-navbar]");
const $navtoggler=document.querySelector("[data-nav-toggler]")
$navtoggler.addEventListener("click",()=>$navbar.classList.toggle("active"));
window.addEventListener("scroll",()=>{
   if (window.scrollY < 20) { $navbar.classList.remove("active"); } 
})

// 2 header show/hidden

const header=document.querySelector("[data-header]")
window.addEventListener("scroll",e=>{
    header.classList[window.scrollY > 50 ? "add" : "remove"]("active")
})

//5 HOW TO ADD/remove heart

const $togglebtn=document.querySelectorAll("[data-toggle-btn]")

$togglebtn.forEach($togglebtns=>{
    $togglebtns.addEventListener("click",()=>{
        $togglebtns.classList.toggle("active")
    })
})

