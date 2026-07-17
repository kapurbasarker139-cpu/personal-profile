// ===============================
// Dark / Light Mode
// ===============================

const themeBtn = document.getElementById("theme-btn");

themeBtn.onclick = () => {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("dark")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

};
// ===============================
// Typing Effect
// ===============================

const text = "Graphic Designer";

let i = 0;

function typing(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,120);

    }

}

typing();
// ===============================
// Back To Top
// ===============================

const topBtn = document.getElementById("topBtn");

window.onscroll = ()=>{

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

};

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
// ===============================
// Active Menu
// ===============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});
// ===============================
// Scroll Reveal
// ===============================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});
