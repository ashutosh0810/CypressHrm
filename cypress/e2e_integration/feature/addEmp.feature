Feature: User add a new Employee and grant admin access

    This test case will add an Employeea and login with the same user as Admin

    Scenario: Verify that a new user can be act as admin
        Given User launch the application
        When User enter the credentials
        Then Verify the login page title
        When User click the PIM
        When User click the add Button to add the new Employee
        #Then User should see the add Employee page
        When User enter the first name middlename last name
        When User click the create detail radio button
        Then User enter the username password and confirm password
        Then User click the save button
        Then User enter the personal details
        Then User click the personal details page save button

