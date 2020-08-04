if ("0"){
    alert('Hello') 
} //No

let officialName = prompt ("Whats is officail name of Javascript?")
if (officialName=='ECMAScript'){
    alert ('Right!')
} else {
    alert ('You don\'t know ECMAscript?')
}

let enteredNumber = prompt ("Enter a number")
if (enteredNumber>0){
    alert ('1')
} else if (enteredNumber < 0) {
    alert ('-1')
} else if (enteredNumber==0){
    alert ('0')
}

let result = (a+b<4) ? "Below" : "Over"


let message = (login == 'Employee') ? 'Hello' : (login=='Director') ? 'Greetings': (login=='') ? 'No login' : ''