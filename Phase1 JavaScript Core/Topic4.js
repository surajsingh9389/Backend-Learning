// Functions (pure vs impure)
// function createUser(req){
//    const newReq = JSON.parse(JSON.stringify(req));
//    newReq.body.role = "user";
//    return newReq.body;
// }

function updateUser(user){
    return {...user, active: true};
}