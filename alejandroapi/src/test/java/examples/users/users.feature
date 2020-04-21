Feature: sample karate test script for alejandro API

  Background:
    * url 'http://localhost:8080'
    * def schema = { password: '#string'}
  
  Scenario Outline: Get a password in many lenguages
    Given path '<path>'
    When method get
    Then status 200
    And match response == schema
    
    Examples:
    | path     | 
    | password |
    | palabras |
    | worts    |
    | Jenb |

  Scenario: As a user I want to customize my password
    Given path '/api/password'
    And param number = 5
    * param language = "palabras"
    * param special = true
    When method get
    Then status 200
    And match response == schema
    

    Scenario: As a concerned user I want to Hash my password
    Given path "/api/hash"
    And param password = "mypassword"
    When method get
    Then status 200
    And match response == schema