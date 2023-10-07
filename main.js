

let sliderInner = document.querySelector(".sliderInner");

let image = sliderInner.querySelectorAll("img");

let index = 0;

sliderFunction();

leftClick();

rightClick();

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
            console.log(index);
        }
        console.log(index);
        
    }, 5000);
}