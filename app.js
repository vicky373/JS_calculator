const display1E1=document.querySelector(".display-1");
const display2E1=document.querySelector(".display-2");
const tempResult=document.querySelector(".temp-result");
const numbersE1=document.querySelectorAll(".number");
const operations=document.querySelectorAll(".operation");
const equalE1=document.querySelector(".equal");
const clearALL=document.querySelector(".all-clear");
const clearLast=document.querySelector(".last-entity-clear");


let dis1Num="";
let dis2Num="";
let result = null;
let lastOperation="";
let havedot = false;

numbersE1.forEach(number =>{
    number.addEventListener("click",(e)=>{
        if(e.target.innerText === "." && !havedot){
            havedot=true;

        }else if(e.target.innerText==="." && havedot){
            return;
        }
        
        dis2Num +=e.target.innerText;
        display2E1.innerText=dis2Num;
    });
});

operations.forEach(operation =>{
    operation.addEventListener("click",(e)=>{
        if(!dis2Num)result;
        havedot=false;
        const operationName=e.target.innerText;
        if(dis1Num && dis2Num && lastOperation){
            mathOperation();
        }
        else{
            result=parseFloat(dis2Num);
        }

        clearVar(operationName);
        lastOperation=operationName;
        console.log(result);

    })
});

function clearVar(name = ""){
    dis1Num += dis2Num + " "+ name+ " ";
    display1E1.innerText=dis1Num;
    display2E1.innerText="";
    dis2Num = "";
    tempResult.innerText=result;
}
function mathOperation(){
    if(lastOperation === "X"){
        result = parseFloat(result)*parseFloat(dis2Num);
        
    }else if(lastOperation === "+"){
        result = parseFloat(result)+parseFloat(dis2Num);
    }else if(lastOperation === "-"){
    result = parseFloat(result)-parseFloat(dis2Num);
    }else if(lastOperation === "/"){
    result = parseFloat(result)/parseFloat(dis2Num);
    }else if(lastOperation === "%"){
    result = parseFloat(result)%parseFloat(dis2Num);
    }
}

equalE1.addEventListener("click",(e)=>{
    if(!dis1Num || !dis2Num)return;
    havedot=false;
    mathOperation();
    clearVar();
    display2E1.innerText=result;
    tempResult.innerText="";
    dis2Num=result;
    dis1Num="";
});

clearALL.addEventListener("click",(e)=>{
    display1E1.innerText="0";
    display2E1.innerText="0";
    dis1Num="";
    dis2Num="";
    result="";
    tempResult.innerText="0";
});

clearLast.addEventListener("click",(e)=>{
    display2E1.innerText="";
    dis2Num="";
});

window.addEventListener("keydown",(e)=>{
    if(e.key==="0" || e.key==="1"
    ||e.key==="2" || e.key==="3"||
     e.key==="4" || e.key==="5"
    ||e.key==="6" || e.key==="7"
    ||e.key==="8" || e.key==="9"
    ||e.key==="."){
        clickButtonE1(e.key);
    }
    else if(
        e.key ==="X" ||
        e.key ==="+" ||
        e.key ==="-"||
        e.key === "/"||
        e.key === "%"
    ){
        clickOperation(e.key);
    }else if(e.key === "*"){
        clickOperation("X");
    }else if(e.key === "Enter" || e.key === "="){
        clickEqual();
    }
});

function clickButtonE1(key){
    numbersE1.forEach(button =>{
        if(button.innerText===key){
            button.click();
        }
    });
}

function clickOperation(key){
    operations.forEach(button =>{
        if(button.innerText===key){
            button.click();
        }
    });
}

function clickEqual(){
    equalE1.click();
}