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

describe("GET Request", () => {
  it("should fetch a single user", () => {
    cy.request("GET", "https://reqres.in/api/users/2").then((response) => {
      // Verify the returned data
      expect(response.body).to.have.property("data");
      expect(response.body.data).to.be.an("object");
      expect(response.body.data).to.have.property("id", 2);
      expect(response.body.data).to.have.property(
        "email",
        "janet.weaver@reqres.in"
      );
      expect(response.body.data).to.have.property("first_name", "Janet");
      expect(response.body.data).to.have.property("last_name", "Weaver");
      expect(response.body.data).to.have.property(
        "avatar",
        "https://reqres.in/img/faces/2-image.jpg"
      );

      // Verify the support information
      expect(response.body).to.have.property("support");
      expect(response.body.support).to.be.an("object");
      expect(response.body.support).to.have.property(
        "url",
        "https://reqres.in/#support-heading"
      );
      expect(response.body.support).to.have.property(
        "text",
        "To keep ReqRes free, contributions towards server costs are appreciated!"
      );
    });
  });
});

describe("POST Request", () => {
  it("should create a new user", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: {
        name: "morpheus",
        job: "leader",
      },
    }).then((response) => {
      // Verify status code
      expect(response.status).to.eq(201);

      // Verify the returned data
      expect(response.body).to.have.property("name", "morpheus");
      expect(response.body).to.have.property("job", "leader");
      //expect(response.body).to.have.property("id", "415");
      expect(response.body)
        .to.have.property("createdAt")
        .and.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/);
    });
  });
});
