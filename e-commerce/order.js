/* crazy helper functions*/
/**these are functions were added to ease certain process...not exactly part of the core project */
function toHHMMSS(milliseconds) {
  //var milliseconds = parseInt((milliseconds % 1000) / 100),
  (seconds = parseInt((milliseconds / 1000) % 60)),
    (minutes = parseInt((milliseconds / (1000 * 60)) % 60)),
    (hours = parseInt((milliseconds / (1000 * 60 * 60)) % 24));

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}

//create a global array...
let user_array = [];
//global count of user_id
let user_id = 0;
//global array for orders
let order_array = [];
//global count for order_id
let orderId = 0;
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

//get user id
User.prototype.getMyId = function() {
  return name;
};

//adding the create order method to the user
User.prototype.createOrder = function(Products) {
  UserId = this.id;
  UserName = this.name;
  timeOfOrder = toHHMMSS(new Date().getTime());
  dateOfOrder = new Date().getDate();
  order_Id = orderId++; //check the global space above for this guy.
  Products = Products;

  console.log(UserId, UserName, timeOfOrder, dateOfOrder, order_Id, Products);
};

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

Admin.prototype.deleteAllUsers = function() {
  user_array = [];
  console.log("all users have been deleted");
  return user_array;
};

//i am putting my order constructor here....just to see...even if i fill it should be at the top of the sheet;
function Order(UserId, UserName, timeOfOrder, dateOfOrder,order_Id,Products) {
  this.UserId = UserId;
  this.UserName = UserName;
  this.timeOfOrder = timeOfOrder;
  this.dateOfOrder = dateOfOrder;
  this.order_Id = order_Id;
  this.Products = Products

}

// module.exports = {
//   User,
//   Admin,
//   user_array
// };
