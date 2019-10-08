
Feature: Pesquisar Reserva
As user
I want to can performs a search of a office rooms
For can to show the office rooms that was reserved


Background: 
    Given Login with successfully
    """
    Scenario: Login with success
        Given that view url "https://triadproject.herokuapp.com/login.php"
        When insert email "admin@gmail.com" and password "123456"
        Then view my authentication with success
    """

Scenario: Performs a reserves office rooms as success
    Given insert a office room "Sala da justiça" search field
    Then show office room "Sala da Justiça" in the list
    
