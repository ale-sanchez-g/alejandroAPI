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

  