//this file caters for the user object only. the other test file caters for the order object...
//i have seperated the files for ease of reading....
const createUsers = require("./order");

//creating a global user for general test purposes....
let userOne = new createUsers.User("User One", "userone@gmail.com", 1234); //formerly ute

let userTwo = new createUsers.User("User Two", "usertwo@gmail.com", 1235);

let userThree = new createUsers.User("User Three", "userthree@gmail.com", 1236);

let myTestAdmin = new createUsers.Admin();

it("constructor function should return an object", function() {
  expect(typeof userOne).toBe("object");
});

// it("shouldn't allow empty arguments", function(){
//   let emptyUserArgs = new createUsers.User();
//   expect(emptyUserArgs).toEqual('Error: Please ensure name and email are strings and arguments aren"t empty');

// });
//not functioning properly

it("shouldn't allow empty arguments", function() {
  let Ibrahim = new createUsers.User("Ibrahim", "ibro@gmail.com", 22222);
  expect(Ibrahim).toEqual({
    email: "ibro@gmail.com",
    id: 3,
    name: "Ibrahim",
    password: 22222
  });
});

describe("readUser function", function() {
  it("should return the user with the specified id", function() {
    expect(userOne.readUser(1)).toEqual({
      email: "usertwo@gmail.com",
      id: 1,
      name: "User Two",
      password: 1235
    });
  });

  it("should return user not found when a wrong id is entered", function() {
    expect(userOne.readUser(20)).toBe("User not found");
  });
});

describe("searchForUser method", function() {
  it("should return the user object", function() {
    expect(userTwo.searchForUser("User Two")).toEqual({
      email: "usertwo@gmail.com",
      id: 1,
      name: "User Two",
      password: 1235
    });
  });

  it("should return user not found if a wrong name is passed in", function() {
    expect(userTwo.searchForUser("hello boo")).toBe("User not found");
  });

  it("should accept only strings", function() {
    expect(userThree.searchForUser("")).toBe("please enter a valid  string");
  });
});

describe('should "updateUserDetails"', function() {
  expect(
    userOne.updateUserDetails("name", "I Updated User one's name", 0)
  ).toEqual({
    email: "userone@gmail.com",
    id: 0,
    name: "I Updated User one's name",
    password: 1234
  });

  it("should not work, when the id is not valid", function() {
    expect(userOne.updateUserDetails("email", "rukee@gmail.com", 90)).toEqual(
      "please enter a valid user id"
    );
  });
});

describe("readAllUsers", function() {
  console.log(myTestAdmin.readAllUsers());
  it("return all the registered users", function() {
    //when i update name's above, this test is likely to fail....
    expect(myTestAdmin.readAllUsers()).toEqual([
      {
        email: "userone@gmail.com",
        id: 0,
        name: "I Updated User one's name",
        password: 1234
      },
      { email: "usertwo@gmail.com", id: 1, name: "User Two", password: 1235 },
      {
        email: "userthree@gmail.com",
        id: 2,
        name: "User Three",
        password: 1236
      },
      { email: "ibro@gmail.com", id: 3, name: "Ibrahim", password: 22222 }
    ]);
  });
});

describe("admin should be able deleteUser", function() {
  it("admin should be able to delete a particular user", function() {
    expect(myTestAdmin.deleteUser(1)).toEqual([
      {
        email: "userone@gmail.com",
        id: 0,
        name: "I Updated User one's name",
        password: 1234
      },
      { email: "usertwo@gmail.com", id: 1, name: "User Two", password: 1235 },
      {
        email: "userthree@gmail.com",
        id: 2,
        name: "User Three",
        password: 1236
      },
      { email: "ibro@gmail.com", id: 3, name: "Ibrahim", password: 22222 }
    ]);
  });
});

describe("delete all users", function() {
  it("should return the empty DB", function() {
    expect(myTestAdmin.deleteAllUsers()).toEqual([]);
  });
});

/*



describe("deleteAllUsers", function() {
  it("admin should be able to delete all users", function() {
    expect(myTestAdmin.deleteAllUsers()).toEqual([]);
  });
});
// console.log("-------");
// console.log(createUsers.user_array)

*/
