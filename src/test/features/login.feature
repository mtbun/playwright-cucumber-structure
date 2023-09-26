Feature: User Authentication tests

  Background:
    Given User navigates to the application
    And User click on the login link

  Scenario: Login should be success
    And User enter the username as "bm"
    And User enter the password as "mete1234"
    When User click on the login button
    Then Login should be success