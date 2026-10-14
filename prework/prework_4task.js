//OBJECT
let user = {};  // create empty object
user.name = 'John'; // put the name in object
user.surname = 'Smith'; // puut surname
user.name = 'Pete'; // change the name 
delete user.name; // ddelete name 
console.log(user);
// 
function isEmpty (obj) { // 
    for (let key in obj) {
        return false;
    }
    return true;
}
console.log(isEmpty({}));
console.log(isEmpty({food: 'milk'}));
//
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let summ= 0;
for (let key in salaries) {
    summ += salaries[key];
}
console.log(summ);
//
function myltiply(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}
let menu = {
    width:200,
    height:300,
    title: 'my menu'
};
myltiply(menu);
console.log(menu);
