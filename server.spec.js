const req = require("supertest");
const app = require("./index");

describe("get /", () => {
  it("Returns status 200 with Message", () => {
    return req(app)
      .get("/")
      .expect(200)
      .then(res => expect(res.body.msg).toBe("Welcome to my api"));
  });
});
const db = [
  {
    firstname: "John",
    lastname: "Doe"
  },
  {
    firstname: "Steven",
    lastname: "Robinson"
  },
  {
    firstname: "Random",
    lastname: "Guy"
  }
];
describe("get /db", () => {
  it("Returns status 200 with Message", () => {
    return req(app)
      .get("/db")
      .expect(200)
      .then(res => expect(res.body.db).toStrictEqual(db));
  });
});
describe("post /db/add", () => {
  it("Returns status 200 with Message", () => {
    return req(app)
      .post("/db/add")
      .expect(200)
      .then(res =>
        expect(res.body.db).toStrictEqual([
          ...db,
          { firstname: "New", lastname: "Guy" }
        ])
      );
  });
});
describe("post /db/remove", () => {
  it("Returns status 200 with Message", () => {
    return req(app)
      .post("/db/remove")
      .expect(200)
      .then(res => expect(res.body.db).toStrictEqual(db));
  });
});
