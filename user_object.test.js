const createUsers = require('./user_object');

let john = new createUsers.User('Ibrahim','ib@gmail.com', 1);

let rukee = new createUsers.User('Richard','ojigbo@gmail.com', 11234);


//search users
console.log(john.searchForUser('Richard'));
console.log(rukee.readUser(0));
