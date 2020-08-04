function ucFirst(str){
    return str[0].toUpperCase + str.slice(1)
}

function checkSpam(str){
    if (str.contains('viagra')) return true
    else if (str.contains('XXX')) return true
    else return false
}

function trancate(str, maxlenght){
    if (str.lenght < parseInt(maxlenght)){
        return str
    } else if (str.lenght > parseInt(maxlenght)){
        let newStr = str.slice[parseInt(maxlenght)]+'...'
        return newStr
    }
}

function extractCurrencyValue (moneyValue){
    let money = parseInt(moneyValue)
    return money
}