//this file is going to test the order methods are admin methods
const createOrder = require("./order");

let userOne = new createOrder.User("Rukee", "rukeeojigbo@gmail.com", 1001);
let userTwo = new createOrder.User("Seyi", "seyimils@gmail.com", 1002);
let userThree = new createOrder.User("GoodLuck", "goodluck@gmail.com", 1003);

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
describe('', function(){});
