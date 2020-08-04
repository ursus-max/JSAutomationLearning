let a = prompt ('Enter first number')
let b = prompt ('Enter second number')
alert (parseInt(a)+parseInt(b))

// 

function readNumber(){
    let a 
    do {
        a=prompt('Enter a number')
    } while (!isFinite(a));

    if (a === null || a==='') return null
    return +a
}

//precision loss


function randomInt (num1, num2){
    return num1 +Math.random() *(num2-num1)
}

