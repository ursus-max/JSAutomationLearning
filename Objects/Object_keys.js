let salaries = {
    "John": 100,
    "pete": 300,
    "Mary": 250
};

function sumSalaries(sal){
    let sum=0
    for (let value of Object.values(sal)){
        sum+=value;
    }
    return sum
}

alert (sumSalaries(salaries))
//----------------//

let user ={
    name:"John",
    age:30
}

function count (obj){
    let i =0
    for (let key of Object.keys(obj)){
         i = ++i
    }
    return i
}

alert (count(user))