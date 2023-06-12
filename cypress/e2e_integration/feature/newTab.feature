Feature: Multiple tab testing

    Scenario: Verify a new tab open from parent tab
        Given User launch the Make my trip application
        When User click on superoffer link
        Then new tab should be open and user validate the target
