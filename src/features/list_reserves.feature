@teste
Feature: Pesquisar Reserva
As user
I want to can performs a search of a office rooms
For can to show the office rooms that was reserved


Background:
    Given User logged successfully
    
   
Scenario: Performs a reserves office rooms as success
    Given insert a office room "Sala da justiça" search field
    Then show office room "Sala da justiça" in the list
    
