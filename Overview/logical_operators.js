alert ( null || 2 || undefined); // 2 
alert ( alert (1) || 2 || alert(3) ) //1 2
alert (1 && null && 2) //null
alert ( alert(1) && alert (2)) // 1  undefined
alert (null || 2 && 3 || 4) //3

if (!(age >= 14 && age <= 90))

if (age < 14 || age>90) {
    
}

let message = prompt ("Who'\s here")
if (message=='Admin'){
    let pass = prompt ('Enter pass')
    if (pass=="TheMaster"){
        alert ('Welcome!');
    }else if (pass==''){
        alert ('Wrong paasword')
    }else if (pass==null){
        alert ('Canceled')
    }
}else if (message==''){
    alert ("I don\'t know you")
} else if (message==null){
    alert ('Canceled')
}