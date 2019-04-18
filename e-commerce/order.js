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

// //this function reads either the user array or orders for one item;
// function readOne(intendedArray, id){
//     // let user = user_array.filter(item => item.id == id);
//     // console.log(user[0]);
//     // return user.length == 0 ? "user not found" : user[0];

//     let resultFromArray = intendedArray.filter(item.id == id);
//     if(resultFromArray.length == 0 && intendedArray == user_array) return 'user not found';
//     if(resultFromArray.length == 0 && intendedArray == order_array) return 'order not found';
//     return intendedArray[0]
// }

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
User.prototype.makeAnOrder = function(Products) {
  if (typeof Products !== "string") return "please enter a valid product";
  //checking if product is not string????
  UserId = this.id;
  UserName = this.name;
  timeOfOrder = toHHMMSS(new Date().getTime());
  dateOfOrder = new Date().getDate();
  order_Id = orderId++; //check the global space above for this guy.
  Products = Products;

  return "order was sucessfully made";
  order_array.push(
    new Order(UserId, UserName, timeOfOrder, dateOfOrder, order_Id, Products)
  );
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

Admin.prototype.readAllOrders = function() {
  return order_array;
};

Admin.prototype.readOneOrder = function(id) {
  let order = order_array.filter(item => item.order_Id == id);
  console.log(order[0]);
  return order.length == 0 ? "user not found" : order[0];
};

//update Orders
Admin.prototype.updateOrderDetails = function(Products, value, id) {
  let particularOrder = order_array.filter(item => item.id == id);
  if (particularOrder.length == 0) {
    return "please enter a valid order id";
  }
  particularOrder[0][Products] = value; //update's the user's data...
  console.log("sucessfully updated");
  return particularOrder[0];
};

//this is apparently a duplicate method
Admin.prototype.deleteUserOrder = function(id) {
  order_array = order_array.filter(function(orderInArray) {
    return orderInArray.order_Id != id;
  });
  return order_array;
};

Admin.prototype.deleteAllOrders = function() {
  order_array = [];
  return order_array;
};

//i am putting my order constructor here....just to see...even if i fill it should be at the top of the sheet;
function Order(UserId, UserName, timeOfOrder, dateOfOrder, order_Id, Products) {
  this.UserId = UserId;
  this.UserName = UserName;
  this.timeOfOrder = timeOfOrder;
  this.dateOfOrder = dateOfOrder;
  this.order_Id = order_Id;
  this.Products = Products;
}

module.exports = {
  User,
  Admin,
  user_array
};
