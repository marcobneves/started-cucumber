Feature: Login
    As User
    I want can performs login in an application with e-mail and password valid
    For can view my authentication in application


 Scenario: Login with success
    Given that view url "https://triadproject.herokuapp.com/login.php"
    When insert email "admin@gmail.com" and password "123456"
    Then view my authentication with success


 Scenario Outline: login invalid
    Given that view url "https://triadproject.herokuapp.com/login.php"
    When insert email "<email>" and password "<password>"
    Then view Error message "<message>"

    Examples:
        |email             |password    |message                                            |
        |  eee@dfs         |    123456  | "E-mail:  Inválido."                              |
        |  eee@gmail.com   |            | "Senha:  não informada. "                         |
        |                  |            | "E-mail:  não informado.  Senha:  não informada. "|
        |                  |   123456   | "E-mail:  não informado. "                        |

