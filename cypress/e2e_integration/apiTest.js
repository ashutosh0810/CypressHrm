describe("Login functionality Test2 ", function () {
  it.skip("Valid login", function () {
    //
    cy.visit(Cypress.env("baseUrl"));
    cy.log(" this will validate tthe forget password link visibility");
    cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").should(
      "be.visible"
    );
  });
});

describe("GET Request", function () {
  before(function () {
    cy.fixture("getResponse.json").as("expectedResponse");
  });

  it("should fetch a single user", function () {
    cy.request("GET", Cypress.env("GETapi")).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.equal(this.expectedResponse);
    });
  });
});

// describe("POST Request", function() {
//   it("should create a new user",function() {
//     cy.request({
//       method: "POST",
//       url: Cypress.env("POSTapi"),
//       body: {
//         name: "morpheus",
//         job: "leader",
//       },
//     }).then((response) => {
//       // Verify status code
//       expect(response.status).to.eq(201);

//       // Verify the returned data
//       expect(response.body).to.have.property("name", "morpheus");
//       expect(response.body).to.have.property("job", "leader");
//       //expect(response.body).to.have.property("id", "415");
//       expect(response.body)
//         .to.have.property("createdAt")
//         .and.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/);
//     });
//   });
// });

describe("POST Request", function () {
  beforeEach(function () {
    cy.fixture("newUser.json").as("newUser");
    cy.fixture("expectedPostResponse.json").as("expectedPostResponse");
  });

  it("should create a new user", function () {
    cy.request({
      method: "POST",
      url: Cypress.env("POSTapi"),
      body: this.newUser,
    }).then((response) => {
      // Verify status code
      expect(response.status).to.eq(201);

      // Verify the returned data
      expect(response.body).to.have.property(
        "name",
        this.expectedPostResponse.name
      );
      expect(response.body).to.have.property(
        "job",
        this.expectedPostResponse.job
      );

      // Validate id is a string of digits
      expect(response.body).to.have.property("id").and.match(/^\d+$/);

      // Validate createdAt is in a specific date-time format
      expect(response.body)
        .to.have.property("createdAt")
        .and.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/);
    });
    // Take a screenshot
    cy.screenshot("POST-request-response");
  });
});
