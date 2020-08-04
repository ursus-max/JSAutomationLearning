let i=3
while (i){
    alert (i--)//3 2 1 
}

// 1 2 3 4 
//0 1 2 3 4 


//0 1 2 3 4
//0 2 3 4 5


for(let i=2; i<11; i++ ){
    if (i%2==0) {
        alert (i)
    }
}
let i=0
while(i<3){
    alert(`number ${i}`, i++)
}

while (true){
    let message = prompt("Enter number more than 100")
    if (message>100){
        break;
    }else if (message<100){
        alert("Enter number again");

    }else if (message=''){
        alert ('Canceled')
        break;
    }
}
