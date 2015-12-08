Feature: home page

  Background:
    Given I am viewing the app

  Scenario: The app is present
    Then I should see "Pretty Pictures"
    And I should see "The 100 prettiest pictures on 500px!"
