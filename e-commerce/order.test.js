//this file is going to test the order methods are admin methods
const createOrder = require("./order");

//create dummy users....
let userOne = new createOrder.User("Rukee", "rukeeojigbo@gmail.com", 1001);
let userTwo = new createOrder.User("Seyi", "seyimils@gmail.com", 1002);
let userThree = new createOrder.User("GoodLuck", "goodluck@gmail.com", 1003);

//make dummy orders...
userOne.makeAnOrder("akamu");
userTwo.makeAnOrder("sweet orange");
userThree.makeAnOrder("soft drink");

let myAdmin = new createOrder.Admin();

//actual tests...
describe("MakeAnOrder Method", function() {
  it("should return a string on successful creation of the order", function() {
    //made another order here...this adds to the list of orders in the array
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

  it("should return an array containing the total orders made", function() {
    expect(myAdmin.readAllOrders()).toEqual([
      {
        Products: "akamu",
        UserId: 0,
        UserName: "Rukee",
        dateOfOrder: 19,
        order_Id: 1,
        timeOfOrder: "07:23:03"
      },
      {
        Products: "sweet orange",
        UserId: 1,
        UserName: "Seyi",
        dateOfOrder: 19,
        order_Id: 2,
        timeOfOrder: "07:23:03"
      },
      {
        Products: "soft drink",
        UserId: 2,
        UserName: "GoodLuck",
        dateOfOrder: 19,
        order_Id: 3,
        timeOfOrder: "07:23:03"
      },
      {
        Products: "Akara",
        UserId: 0,
        UserName: "Rukee",
        dateOfOrder: 19,
        order_Id: 4,
        timeOfOrder: "07:23:03"
      }
    ]);
  });
});

describe("readOneOrder", function() {
  it("should return the order belonging to that id", function() {
    expect(myAdmin.readOneOrder(1)).toEqual({
      UserId: 0,
      UserName: "Rukee",
      timeOfOrder: "07:23:03",
      dateOfOrder: 19,
      order_Id: 1,
      Products: "akamu"
    });
  });
});

/**
 * Create a new order
Read all the orders(*)
Read one order by its ID(*)
Update order details(*)
Delete one order(*)
Delete all orders(*)

 */
/*
//should delete one user....
describe("deleteUserOrder", function() {
  it("should return the total orders with the deleted one out", function() {
    // console.log(myAdmin.deleteUserOrder(1));
    expect(myAdmin.deleteUserOrder(1)).toEqual([
      {
        UserId: 1,
        UserName: "Seyi",
        timeOfOrder: "07:23:03",
        dateOfOrder: 19,
        order_Id: 2,
        Products: "sweet orange"
      },
      {
        UserId: 2,
        UserName: "GoodLuck",
        timeOfOrder: "07:23:03",
        dateOfOrder: 19,
        order_Id: 3,
        Products: "soft drink"
      },
      {
        UserId: 0,
        UserName: "Rukee",
        timeOfOrder: "07:23:03",
        dateOfOrder: 19,
        order_Id: 4,
        Products: "Akara"
      }
    ]);
  });
});

describe("Delete all orders", function() {
  it("should return an empty array when called", function() {
    expect(myAdmin.deleteAllOrders()).toEqual([]);
  });
});

*/
