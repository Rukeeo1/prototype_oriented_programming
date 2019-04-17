//create a global array...
let user_array = [];
//global count
let user_id = 0;
//create user constructor function;
function User(name, email, password) {
  (this.name = name),
    (this.email = email),
    (this.password = password),
    (id = this.id = user_id++);

  user_array.push({ name, email, password, id });
}

let rukee = new User("rukee", "seyi", "9999");
let seyi = new User("seyi", "fagbamila", "1111");
let beautifulMARY = new User("mary", "fagbamila", "2222");
console.log(rukee);
console.log(seyi);

User.prototype.readUser = function(id) {
  console.log(user_array.filter(item => item.id == id));
};

User.prototype.updateUserDetails = function() {
  console.log(id);
};

User.prototype.searchForUser = function(name) {
  let returnedArr = user_array.filter(item => item.name == name);
  if (returnedArr.length == 0) {
    console.log("User Name not found");
    return false;
  } else {
    console.log(returnedArr[0]);
    return true;
  }
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

Admin.prototype.deleteAllUser = function (){
    user_array = [];
    console.log('all users have been deleted');
}