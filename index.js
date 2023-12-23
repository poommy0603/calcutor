const calculatorDisplay = document.querySelector("#text-ans");
const inputBtn = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');
const deleteBtn = document.querySelector('.delete');
const equal = document.querySelector('#equal');
const radio = document.querySelectorAll('input');
const btn1 = document.querySelector('.theme1');
const btn2 = document.querySelector('.theme2');
const btn3 = document.querySelector('.theme3');
const calc = document.getElementById('calc');
const themeText = document.getElementById('theme');
const text = document.getElementById('text'); 
const ans = document.getElementById('answer');
const body = document.querySelector('.container');
const form = document.getElementById('form');
const calbox = document.querySelector('.grid-cal');
const btn = document.querySelectorAll('#change-color');
console.log(btn);


radio.forEach(function(rd){
    rd.addEventListener('click',function(){
        if(rd.classList.contains('theme1')){
            rd.style.backgroundColor = 'red';
            btn2.style.backgroundColor = '#1b233e'
            btn3.style.backgroundColor = '#1b233e'
            calc.style.color = 'white';
            themeText.style.color = 'white';
            body.style.backgroundColor = 'hsl(222, 26%, 31%)';
            text.style.color = 'white';
            ans.style.color = 'white';
            ans.style.backgroundColor = "hsl(224, 36%, 15%)";
            form.style.backgroundColor = "#1b233e";
            calbox.style.backgroundColor = "hsl(223, 31%, 20%)";
            equal.style.backgroundColor = 'hsl(6, 63%, 50%)';
            equal.style.borderBottom = "4px solid hsl(6, 70%, 34%)";
            deleteBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
            deleteBtn.style.borderBottom = "4px solid hsl(224, 28%, 35%)";
            clearBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
            clearBtn.style.borderBottom = "4px solid hsl(224, 28%, 35%)";
            btn.forEach(function(btnAll){
                btnAll.style.color = "hsl(221, 14%, 31%)"
                btnAll.style.backgroundColor = "hsl(30, 25%, 89%)";
                btnAll.style.borderBottom = "4px solid hsl(28, 16%, 65%)"
            });
            equal.style.color = "white"
        }
        if(rd.classList.contains('theme2')){
            rd.style.backgroundColor = 'hsl(25, 98%, 40%)';
            btn1.style.backgroundColor = 'hsl(0, 5%, 81%)';
            btn3.style.backgroundColor = 'hsl(0, 5%, 81%)';
            calc.style.color = 'hsl(60, 10%, 19%)';
            themeText.style.color = 'hsl(60, 10%, 19%)';
            body.style.backgroundColor = 'hsl(0, 0%, 90%)';
            text.style.color = 'hsl(60, 10%, 19%)';
            ans.style.color = 'hsl(60, 10%, 19%)';
            ans.style.backgroundColor = "hsl(0, 0%, 93%)";
            form.style.backgroundColor = "hsl(0, 5%, 81%)";
            calbox.style.backgroundColor = "hsl(0, 5%, 81%)";
            equal.style.backgroundColor = 'hsl(25, 98%, 40%)';
            equal.style.borderBottom = "4px solid hsl(25, 99%, 27%)";
            deleteBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
            deleteBtn.style.borderBottom = "4px solid hsl(185, 58%, 25%)";
            clearBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
            clearBtn.style.borderBottom = "4px solid hsl(185, 58%, 25%)";
            btn.forEach(function(btnAll){
                btnAll.style.color = "hsl(60, 10%, 19%)";
                btnAll.style.backgroundColor = "hsl(45, 7%, 89%)";
                btnAll.style.borderBottom = "4px solid hsl(35, 11%, 61%)"
            });
            equal.style.color = "white"
        }
        if(rd.classList.contains('theme3')){
            rd.style.backgroundColor = 'hsl(176, 100%, 44%)';
            btn1.style.backgroundColor = 'hsl(268, 71%, 12%)'
            btn2.style.backgroundColor = 'hsl(268, 71%, 12%)'
            calc.style.color = 'hsl(52, 100%, 62%)';
            themeText.style.color = 'hsl(52, 100%, 62%)';
            body.style.backgroundColor = 'hsl(268, 75%, 9%)';
            text.style.color = 'hsl(52, 100%, 62%)';
            ans.style.color = 'hsl(52, 100%, 62%)';
            ans.style.backgroundColor = "hsl(268, 71%, 12%)";
            form.style.backgroundColor = "hsl(268, 71%, 12%)";
            calbox.style.backgroundColor = "hsl(268, 71%, 12%)";
            equal.style.color = "black"
            equal.style.backgroundColor = 'hsl(176, 100%, 44%)';
            equal.style.borderBottom = "4px solid hsl(177, 92%, 70%)";
            deleteBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
            deleteBtn.style.borderBottom = "4px solid hsl(285, 91%, 52%)";
            clearBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
            clearBtn.style.borderBottom = "4px solid hsl(285, 91%, 52%)";
            btn.forEach(function(btnAll){
                btnAll.style.color = 'hsl(52, 100%, 62%)'
                btnAll.style.backgroundColor = "hsl(268, 47%, 21%)";
                btnAll.style.borderBottom = "4px solid hsl(290, 70%, 36%)"
            });
        }
    })
})

const calculate = {
    "/":(fistNumber,secondNumber)=>secondNumber != "0" ? fistNumber/secondNumber : "0",
    "*":(fistNumber,secondNumber)=>fistNumber*secondNumber,
    "+":(fistNumber,secondNumber)=>fistNumber+secondNumber,
    "-":(fistNumber,secondNumber)=>fistNumber-secondNumber,
    "=":(fistNumber,secondNumber)=>secondNumber,
}

let fistValue = 0;
let operatorValue = "";
let waitForNext = false;

function calOperan(operatorr){
    const currentValue = Number(calculatorDisplay.textContent);
    if(operatorValue && waitForNext){
        operatorValue = operatorr;
        return;
    }
    if(!fistValue){
        fistValue = currentValue;
    }
    else {
        const result = calculate[operatorValue](fistValue,currentValue);
        calculatorDisplay.textContent=result;
        fistValue=result;
    }
    operatorValue = operatorr;
    waitForNext = true;
    console.log(operatorValue);
}

function setNumber(number){
   if(waitForNext){
    calculatorDisplay.textContent = number;
    waitForNext = false;
   }
   else {
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === "0" ? number : displayValue + number;
    if(fistValue === "0") {
        clear();
    }
   }
}


function addDecimal(){
        if(waitForNext) return;
        if(!calculatorDisplay.textContent.includes(".")){
            calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
        }
    
}

inputBtn.forEach((input)=>{
    if(input.classList.length === 0) {
        input.addEventListener("click",()=>setNumber(input.value));
    }
    else if(input.classList.contains('operator')) {
        input.addEventListener("click",()=> calOperan(input.value));
    }
    else if(input.classList.contains('decimal')) {
        input.addEventListener("click",()=>addDecimal());
    }
});

function clear(){
    clearBtn.addEventListener("click",function(){
        calculatorDisplay.textContent = "0";
    });
};
clear();

deleteBtn.addEventListener('click',function(){
    let display = calculatorDisplay.textContent;
        display = display.slice(0,-1);
        calculatorDisplay.textContent = display;
        if(display.length < 1) {
            calculatorDisplay.textContent = "0"
        }
        console.log(display);
});
        

