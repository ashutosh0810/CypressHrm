Feature: Login Functionality


    #This is to validate the login Functionality
    @smoke
    Scenario: Verify application getting logged in successfully with Valid Credentials
        Given User launch the application
        When User enter the credentials
        Then Verify the login page title


    @smoke
    Scenario Outline: Verify application login with wrong credentials
        Given User launch the application
        When User enter "<username>" as the username and "<password>" as the password
        Then User validate the error message

        Examples:
            | username     | password | outcome               |
            | eefqw        | passq123 | "Invalid credentials" |
            | testsuser2   | ew       | "Invalid credentials" |
            | invalisddusr | **       | "Invalid credentials" |


    Scenario: Verify forget password link working
        Given User launch the application
        When User click the forget password link
        #Then Reset Password text should be dispalyed
        Then User enter the username in the username text box and click reset button
        Then Verify the reset success message dispalyed