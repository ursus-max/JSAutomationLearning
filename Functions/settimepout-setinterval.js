function printNumbers(from, to){
    let current = from
    let timerId = setInterval(function(){
        alert (current)
        if(current==to){
            clearInterval(timerId)
        }
        current++
    }, 1000);
}

function printNumbers(from, to){
    let current = from

    setTimeout(function go(){
        alert(current);
        if (current < to) {
            setTimeout(1000)
        }
        current++
    }, 1000)
}

//after script