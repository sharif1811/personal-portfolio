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
//slider section start
    var text = ['Sharif Hossain','Web Designer','Web Developer'];
    var count = 0;
    var index = 0;
    var currentText =0;
    var letter = 0;
    setInterval(myType,200);
    function myType(){
        currentText = text[count];
        letter = currentText.slice(0,index++);
        var place = document.querySelector('.text-type').innerHTML=letter;
        if(letter.length==currentText.length){
            count++;
            index = 0;
        }
        if(count==text.length){
            count = 0;
        }
    }
//slider section end
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

// portfolio animation section start
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

var naber = document.getElementById("ulList").children;
var filter = document.getElementById("work-list").children;
for(var i = 0; i<naber.length; i++){
    naber[i].addEventListener('click',function(){
        for(var j = 0; j<naber.length;j++){
            naber[j].classList.remove("ative");
        }
        this.classList.add("ative");
        var dtarget =this.getAttribute("data-target"); 
        for(var k = 0; k<filter.length; k++){
            filter[k].style.display="none";
            if(dtarget==filter[k].getAttribute("data-id")){
                filter[k].style.display="block"; 
            }
            if(dtarget=="all"){
                filter[k].style.display="block";  
            }
        }
    })
}

//portfolio animation section ENd
//contact animation section start
window.addEventListener("scroll",function(){
    let contact = document.querySelector(".contact");
    let contactscounter = contact.getBoundingClientRect().top;
    let scrolle = window.scrollY;
    if(contactscounter<scrolle){
        contact.classList.add("cactive");
    }
    else{
        contact.classList.remove("cactive");
    }
})
//contact animation section end


// outknoledge
// let hexa = document.querySelector("#hexaNumber");
// let color = document.querySelector("#color");
// color.addEventListener("input",function(){
//     let sharif = color.value;
//     hexa.value = sharif;
//     document.body.style.backgroundColor = sharif
// })
// outknoledge

