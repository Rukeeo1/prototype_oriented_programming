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
  //id should be a number
  let user = user_array.filter(item => item.id == id);
  console.log(user[0]);
  return user.length == 0 ? "user not found" : user[0];
};

User.prototype.updateUserDetails = function(property, value, id) {
  //search for user with the supplied id
  let user = user_array.filter(item => item.id == id);
  if (user.length == 0) {
    console.log("please enter a valid user id");
    return "please enter a valid user id";
  }
  user[0][property] = value; //update's the user's data...
  return user[0];
};

User.prototype.searchForUser = function(name) {
  if (typeof name !== "string" || name == "") {
    return "please enter a valid  string";
  }
  let returnedArr = user_array.filter(item => item.name == name);
  return returnedArr.length == 0 ? "User not found" : returnedArr[0];
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
    //changing for each to map here...
 return user_array.map(function(item) {
    return item;
  });
};

Admin.prototype.deleteUser = function(user) {
  user_array = user_array.filter(function(userInArray) {
    return userInArray.email != user;
  });

  return user_array;
};

Admin.prototype.deleteAllUser = function() {
  user_array = [];
  console.log("all users have been deleted");
};

module.exports = {
  User,
  Admin,
  user_array
};
