let theWeight =  document.querySelector("#weight");
let theHeight =  document.querySelector("#height");
let mydiv = document.querySelector("#message");
let btn = document.querySelector("#calculate");
let bmi ; 

function theMessage(){
    theHeight.value = "";
    theWeight.value = "";
}

btn.onclick = function(){
    if(theHeight.value === "" || (theWeight.value === "")){
        alert("your information not complete!");
    }
    else{
        bmi =  Number(theWeight.value) / (Number(theHeight.value) * Number(theHeight.value));
        if(bmi <= 18.5){
            mydiv.innerHTML = `your BMI score is ${Math.trunc(bmi)} and it's "Underweight"` ;
            mydiv.style.color = "#002bc5";
            theMessage();
        }
        else if(bmi > 18.5 && bmi < 24.9){
            mydiv.innerHTML = `your BMI score is ${Math.trunc(bmi)}and it's "Normalweight"` ;
            mydiv.style.color = "green";
            theMessage();
        }
        else if(bmi > 25 && bmi <29.9){
            mydiv.innerHTML = `your BMI score is ${Math.trunc(bmi)} and it's "Overweight"` ;
            mydiv.style.color = "orange";
            theMessage();
        }
        else{
            mydiv.innerHTML = `your BMI score is ${Math.trunc(bmi)} and it's "Obesity"` ;
            mydiv.style.color = "red";
            theMessage();
        }
    }
}