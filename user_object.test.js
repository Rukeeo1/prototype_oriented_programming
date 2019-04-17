const createUsers = require("./user_object");

let john = new createUsers.User("Ibrahim", "ib@gmail.com", 1);

let rukee = new createUsers.User("Richard", "ojigbo@gmail.com", 11234);

// //search users
// describe("testing that the constructor returns an object", function() {
//   it("the constructor should return an object", function() {
//     let john = new createUsers.User("Ibrahim", "ib@gmail.com", 1);
//     expect(typeof john).toBe("object");
//   });
// });

it("type of john should return object", function() {
  let john = new createUsers.User('Rukee', 'rukeeojigbo@gmail.com',2222);
  expect(typeof john).toBe('object');
});

it("shouldn't allow empty arguments", function() {
  let john = new createUsers.User(2,'rukeeojigbo@gmail.com', 2);
  expect(typeof john).toBe("object");
});

it("shouldn't allow empty arguments", function() {
    let mildred = new createUsers.User();
    console.log(mildred)
    expect(mildred).toBe('please ensure all fields are filled correctly');
  });
  
