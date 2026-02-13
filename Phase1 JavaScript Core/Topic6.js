// Array methods: map, filter, reduce, some, every

// best way to deep copy of refrence data types without loses the Dates, maps, undefined use this - 

const deepCopy = structuredClone(obj);

// provide the immutability of object and also the convert the impure function to pure
function updateUser(user){
    return {...user, age: user.age+1};
}

function updateCity(user, city){
    return {
        ...user, address: {...user.address, city}
    };
}


const newCart = [...cart, item];
const removed = cart.filter(i => i.id !== id);


req.body.role = "user";
const user = {...req.body, role: "user"};


// Q1 - 3
// Q2 - function addSkill(user, skill){
//     return {...user, skills: [...user.skills, skill]}
// }

// Q3 - 20
// Q4 - function updateScore(player, score){
//     return {...player, stats: {...player.stats, score: score}}
// }

// Q5 - yes, but structuredClone loses the function,  undefined, Dates.
