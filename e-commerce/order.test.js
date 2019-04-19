//this file is going to test the order methods are admin methods
const createOrder = require("./order");

let userOne = new createOrder.User("Rukee", "rukeeojigbo@gmail.com", 1001);
let userTwo = new createOrder.User("Seyi", "seyimils@gmail.com", 1002);
let userThree = new createOrder.User("GoodLuck", "goodluck@gmail.com", 1003);

//the orders made...
userOne.makeAnOrder("akamu");
userTwo.makeAnOrder("sweet orange");
userThree.makeAnOrder('soft drink');

let myAdmin = new createOrder.Admin();

describe("MakeAnOrder Method", function() {
  it("should return a string on successful creation of the order", function() {
    expect(userOne.makeAnOrder("Akara")).toBe("order was sucessfully made");
  });

  it("shouldn't allow non-strings", function() {
    expect(userOne.makeAnOrder(1)).toBe("please enter a valid product");
  });
});

//the following test runs predominantly
describe("readAllOrders", function() {
  it("should return something", function() {
    expect(typeof myAdmin.readAllUsers()).toBe("object");
  });

  // //   it("should return an array containing the total orders made", function() {
  // //     expect(myAdmin.readAllOrders()).toEqual([
  // //       {
  // //         UserId: 0,
  // //         UserName: "Rukee",
  // //         timeOfOrder: "15:33:20",
  // //         dateOfOrder: 18,
  // //         order_Id: 1,
  // //         Products: "akamu"
  // //       },
  // //       {
  // //         UserId: 1,
  // //         UserName: "Seyi",
  // //         timeOfOrder: "15:33:20",
  // //         dateOfOrder: 18,
  // //         order_Id: 2,
  // //         Products: "sweet orange"
  // //       },
  // //       {
  // //         UserId: 0,
  // //         UserName: "Rukee",
  // //         timeOfOrder: "15:33:20",
  // //         dateOfOrder: 18,
  // //         order_Id: 3,
  // //         Products: "Akara"
  // //       }
  // //     ]);
  //   });
});

/**
 * Create a new order
Read all the orders(*)
Read one order by its ID(*)
Update order details(*)
Delete one order(*)
Delete all orders(*)

 */
console.log(myAdmin.readAllOrders());
describe("delete a specific order", function() {
  it("should return the total orders with the deleted one out", function() {
      console.log(myAdmin.deleteUserOrder(1))
   // expect(myAdmin.deleteUserOrder(1)).toEqual([]);

  });
});

describe("Delete all orders", function() {
  it("should return an empty array when called", function() {
    expect(myAdmin.deleteAllOrders()).toEqual([]);
  });
});


