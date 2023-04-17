const { expect } = require("chai");

const request_url = require("supertest")("https://restful-booker.herokuapp.com");
const assert = require("chai").expect;

describe("Booking Function", function () {
  it("Success Create Booking", async function () {

    const response = await request_url
      .post("/booking")
      .set('Accept', 'application/json')
      .send({
        "firstname" : "Lisa",
        "lastname" : "Blackpink",
        "totalprice" : 60,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2023-04-15",
            "checkout" : "2023-04-30"
        },
        "additionalneeds" : "Dinner"
    });

    assert(response.statusCode).to.eql(200);
    expect ('Lisa');
    //assert(response.body.data).to.eql('Lisa');
    //assert(response.body.message).to.eql('data');
  });
  it("Failed Create Booking", async function () {

    const response = await request_url
      .post("/bookings")
      .set('Accept', 'application/json')
      .send();

    assert(response.statusCode).to.eql(404);
    //assert(response.body.data).to.eql('data');
    //assert(response.body.message).to.eql('data');
  });
  it("Get Booking", async function () {

    const response = await request_url
      .get("/booking/1")
      .set('Accept', 'application/json')
      .send();
    assert(response.statusCode).to.eql(200);
    //assert(response.body.page).to.eql(1);
    //assert(response.body.total).to.eql(12);
  });

  it("Get Booking ids", async function () {

    const response = await request_url
      .get("/booking")
      .set('Accept', 'application/json')
      .send();

    assert(response.statusCode).to.eql(200);
  });
});