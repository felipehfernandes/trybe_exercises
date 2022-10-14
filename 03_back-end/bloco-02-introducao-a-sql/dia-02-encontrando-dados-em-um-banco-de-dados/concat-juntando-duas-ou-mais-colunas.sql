SELECT CONCAT(first_name, last_name) FROM sakila.actor;

-- Seu resultado ficou estranho? Eu também achei! Tente agora a query a seguir.

SELECT CONCAT(first_name, ' ', last_name) FROM sakila.actor;

-- Muito melhor, certo? Mas dá para melhorar? Dá!

SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM sakila.actor;