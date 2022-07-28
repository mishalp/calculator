function sum(num1,num2){
    return num1+num2
}
function sub(num1, num2){
    return num1-num2
}
function mull(num1,num2){
    return num1*num2
}
function div(num1,num2){
    return num1/num2
}

result = 0
let tempDig1 = ""
let tempDig2 = ""
let tempOp = ""
function operate(num1,num2,op,opNew){
    if(op == '+'){
        result = sum(num1,num2)
    }else if(op == '-'){
        result = sub(num1,num2)
    }else if(op == '*'){
        result = mull(num1,num2)
    }else if(op == '/'){
        result = div(parseFloat(num1),parseFloat(num2))
    }
    document.getElementById('side').value = result
    tempDig1 = digit1
    tempDig2 = digit2
    tempOp = operator
    digit1 = result
    digit2 = ""
    operator2Clicked = false
    if(opNew == "="){
        document.getElementById('display').value = result;
        document.getElementById('side').value = ""
        operator1Clicked = false

    }else if(opNew){
        operator = opNew
        newOp = ""
    }
    result = 0

   // console.log(val);
}

let newOp = ""
let digit1 = ""
let operator1Clicked = false
let operator2Clicked = false
let operator = ""
let dig1Full = false
let digit2 = ""
let dec = false

function btnClick(val){
    document.getElementById('display').value += val
    if(!(val == '+' || val == '-' || val == '*' || val == '/')){
        if(val == '.'){
            document.getElementById("dec").disabled = true
            dec = true
        }
        if(dig1Full){
            digit2 += val
        }else{
            digit1 += val
        }
        
        
    }else{
        document.getElementById('dec').disabled = false
        if(operator1Clicked){
            operator2Clicked = true
            newOp = val
                operate(parseFloat(digit1),parseFloat(digit2),operator,newOp)


        }else{
            operator1Clicked = true
            operator = val
            dig1Full = true

        }

    }
   
}



function eql() {
       operate(parseFloat(digit1),parseFloat(digit2),operator,"=")
       document.getElementById('dec').disabled = false
}




function clr(){
    document.getElementById('display').value =""
    document.getElementById('dec').disabled = false
    operator1Clicked = false
    operator2Clicked = false
    digit1 = ""
    digit2 = ""
    dig1Full = false
    operator = ""
    newOp = ""
    result = 0
    dec = false
}
let str = ""
function dlt(){

    str = document.getElementById('display').value 
    let dltVal = str.slice(str.length-1)
    document.getElementById('display').value = str.slice(0, str.length-1)
    if(!(dltVal == '+' || dltVal == '-' || dltVal == '*' || dltVal == '/')){
        if(digit2){
            digit2 = digit2.slice(0 ,digit2.length-1)
        }else{
            digit1 = digit1.slice(0 ,digit1.length-1)
        }
        if(dltVal == '.'){
            dec = false
            document.getElementById('dec').disabled = false
        }
    }else{
        if(operator2Clicked){
            operator2Clicked = false
                digit1 = tempDig1
                digit2 = tempDig2
                operator = tempOp
                newOp = ""
                document.getElementById('side').value = ""


        }else{
            operator1Clicked = false
            operator = ""
            dig1Full = false

        }

    }
}