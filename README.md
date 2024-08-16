# 🚀🚀 Repositorio de Tomas Balladares 🚀🚀

### Ejercicio 1
Encontré varios errores:
En la linea 15: cuando iguala sentence[j]=result[i]:
Hay dos errores, lo primero es que itera sobre el length de sentence, lo cual no tendría sentido sentence[j], si no que, debería ser sentence[i] (Debido a que el while, itera a i en sentence).
El otro error, es que, al igualar sentence[i] = result[j], debería de ser al reves, debido a que, nosotros necesitamos setear el ese char en result, de la manera que está en la linea 15, está al revés.
Con respecto a lo que nos indica el dominio, de que nos retorne "ERROR" a la hora de encontrar un caracter especial, no comprendí muy bien a lo que se refiere ya que, con el condicional, estaríamos "evitando" estos.
En el caso de querer que tire error a la hora de encontrar un caracter especial, habría que agregar un else,
y un return "ERROR";
En el caso de evaluar otros caracteres, deberíamos agregar un condicional más.




