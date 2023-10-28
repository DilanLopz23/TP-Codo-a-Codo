

let sliderInner = document.querySelector(".sliderInner");

let image = sliderInner.querySelectorAll("img");

let index = 0;

sliderFunction();

leftClick();

rightClick();

navBarShow();

function leftClick(){
    let arrowLeft = document.querySelector("#left");
    arrowLeft.addEventListener('click', function hasClick(){
        if(sliderInner.style.transform =="translateX(0%)"){
            sliderInner.style.transform ="translateX(-200%)"
        }else if(sliderInner.style.transform =="translateX(-100%)"){
            sliderInner.style.transform ="translateX(0%)"
        }else if(sliderInner.style.transform =="translateX(-200%)"){
            sliderInner.style.transform ="translateX(-100%)"
        }
       
    })  

}
function rightClick(){
    let arrowRight = document.querySelector("#right");
    arrowRight.addEventListener('click', function hasClick(){
        if(sliderInner.style.transform =="translateX(0%)"){
            sliderInner.style.transform ="translateX(-100%)"
        }else if(sliderInner.style.transform =="translateX(-100%)"){
            sliderInner.style.transform ="translateX(-200%)"
        }else if(sliderInner.style.transform =="translateX(-200%)"){
            sliderInner.style.transform ="translateX(0%)"
        }
       
    })  

}

function sliderFunction(){
    let percentage = index* -100;
    sliderInner.style.transform = "translateX("+ percentage +"%)";
    setInterval(function(){
        let percentage = index* -100;
        sliderInner.style.transform = "translateX("+ percentage +"%)";
        index++;
        if (index > image.length -1){
            index = 0;
            
        }
    }, 5000);
}

function navBarShow(){
    let menuToggle = document.querySelector('.menu-toggle');
    let navBar = document.querySelector('.nav');
    let conter = 0;

    menuToggle.addEventListener('click', function toggle(){
        if(conter == 0){
            navBar.style.visibility = "visible";
            navBar.style.left = "0%";
            conter++;
        }
        else if(conter>0){
            navBar.style.left = "100%";
            navBar.style.visibility = "hidden";
            conter = 0;
        }
    })
}

