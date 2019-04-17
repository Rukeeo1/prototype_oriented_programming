const createUsers = require("./user_object");
//creating a global user for general test purposes....
let ute = new createUsers.User('Ute','ute@gmail.com',1234);

it("type of john should return object", function() {
  let john = new createUsers.User("Rukee", "rukeeojigbo@gmail.com", 2222);
  expect(typeof john).toBe("object");
});

it("shouldn't allow empty arguments", function() {
  let john = new createUsers.User("Ibrahim", "ibro@gmail.com", 22222);
  expect(john).toEqual({
    email: "ibro@gmail.com",
    id: 2,
    name: "Ibrahim",
    password: 22222
  });
});

it("shouldn't allow empty arguments", function() {
  let mildred = new createUsers.User();
  console.log(mildred);
  expect(mildred).toEqual({
    name: undefined,
    email: undefined,
    password: undefined,
    id: 3
  });
});

//testing the user method....search for a single user...
describe("searchForUser method", function() {
  it("", function() {
    let amakiri = new createUsers.User("Amakiri", "amk@gmail.com", 2222);
    expect(amakiri.searchForUser("Rukee")).toEqual(
      { name: "Rukee", email: "rukeeojigbo@gmail.com", password: 2222, id: 1 },
      true
    );
  });

  it('should return User not found, if wrong name is passed in', function(){
    console.log(ute.searchForUser('Amakiri'),'hello');
    expect(ute.searchForUser('Amakiri')).toBe("User not found");
  });
});


