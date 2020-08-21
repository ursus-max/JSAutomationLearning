let user = {
    name: "Василий Иванович",
    age: 35
};


let user2 = JSON.parse(JSON.stringify(user))


let room = {
    number:23
};

let meetup = {
    title:"Meeting",
    occupiedBy: [{name:"Ivanov"}, {name:"Petrov"}],
    place:room
};
alert (JSON.stringify(meetup, function replacer (key, value){
    return (key != "" && value ==meetup) ? undefined : value;
}));