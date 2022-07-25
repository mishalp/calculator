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
    digit1 = result
    digit2 = ""
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
    if(dec){
        operate(parseFloat(digit1),parseFloat(digit2),operator,"=")

    }else{
        operate(parseInt(digit1),parseInt(digit2),operator,"=")
    }
    
}




function clr(){
    document.getElementById('display').value =""
    document.getElementById('dec').disabled = false
    operatorClicked = false
    digit1 = ""
    digit2 = ""
    dig1Full = false
    operator = ""
    newOp = ""
    result = 0
    dec = false
}