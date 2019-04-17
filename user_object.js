//create a global array...
let user_array = [];
//global count
let user_id = 0;
//create user constructor function;
function User(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
  id = this.id = user_id++;

  user_array.push({ name, email, password, id });
}

User.prototype.readUser = function(id) {
  let user = user_array.filter(item => item.id == id);
  console.log(user.length == 0 ? "user not found" : user[0]);
};

User.prototype.updateUserDetails = function(property, value, id) {
  //search for user with the supplied id
  let user = user_array.filter(item => item.id == id);
  if (user.length == 0) {
    console.log("please enter a valid user id");
  }
  console.log(user);
  console.log("---still here boo---");
  console.log((user[0].email = value)); //update's the user's data...
  console.log(user);
  //at this point i assume that the user has a valid user and an id has been returned
};

User.prototype.searchForUser = function(name) {
  let returnedArr = user_array.filter(item => item.name == name);
  returnedArr.length == 0
    ? console.log("User Name not found", false)
    : console.log(returnedArr[0], true);
};

//the function that extends...carries inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

//admin constructor...
function Admin() {}

extend(Admin, User);

//create an admin personel to test methods.
let myFirstAdmin = new Admin();

Admin.prototype.readAllUsers = function() {
  user_array.forEach(function(item) {
    console.log(item);
  });
};

Admin.prototype.deleteUser = function(user) {
  user_array = user_array.filter(function(userInArray) {
    return userInArray.email != user;
  });
};

Admin.prototype.deleteAllUser = function() {
  user_array = [];
  console.log("all users have been deleted");
};

module.exports = {
  User,
  Admin
};
