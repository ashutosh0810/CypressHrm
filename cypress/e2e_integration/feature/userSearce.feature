Feature: User search a new created user in PIM


    #This is to validate the login Functionality

    Scenario: Verify application search the user and delete the record
        Given User launch the application
        When User enter the credentials
        Then Verify the login page title
        When User click the Admin left option
        Then User enter a name in the userNmae
        Then User click on search button
        Then User validate the user exists
        Then User delete the record
