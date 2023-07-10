let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
let sidemenu = document.getElementById("sidemenu");
let arrow = document.querySelector(".arrow");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
function openmenu(){
    sidemenu.style.right="0";
}

function closemenu(){
    sidemenu.style.right="-200px";
}

//arrow key start
window.onscroll = function(){
    let scroll = scrollY;
    if(scroll>100){
        arrow.classList.add("active");
    }
    else{
        arrow.classList.remove("active");
    }
}
//arrow key end
//about animation section start
window.addEventListener("scroll",function(){
    let about = document.querySelector(".about");
    let aboutcounter = about.getBoundingClientRect().top;
    let scrolle = window.scrollY;
    if(aboutcounter<scrolle){
        about.classList.add("actives");
    }
    else{
        about.classList.remove("actives");
    }
})
//about animation section ENd
//services animation section start
window.addEventListener("scroll",function(){
    let service = document.querySelector(".service");
    let servicescounter = service.getBoundingClientRect().top;
    let scrolle = window.scrollY;
    if(servicescounter<scrolle){
        service.classList.add("activess");
    }
    else{
        service.classList.remove("activess");
    }
})
//services animation section End
//portfolio animation section start
window.addEventListener("scroll",function(){
    let portfolio = document.querySelector(".portfolio");
    let portfoliocounter = portfolio.getBoundingClientRect().top;
    let scrolle = window.scrollY;
    if(portfoliocounter<scrolle){
        portfolio.classList.add("activeses");
    }
    else{
        portfolio.classList.remove("activeses");
    }
})
//portfolio animation section ENd


// outknoledge
// let hexa = document.querySelector("#hexaNumber");
// let color = document.querySelector("#color");
// color.addEventListener("input",function(){
//     let sharif = color.value;
//     hexa.value = sharif;
//     document.body.style.backgroundColor = sharif
// })
// outknoledge

