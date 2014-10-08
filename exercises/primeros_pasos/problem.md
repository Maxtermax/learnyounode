Escribe un programa que acepte uno o mas numeros como argumentos de la linea de comandos y que imprima la suma de los numeros en consola, con argumentos en la linea de comandos me refiero a las palabras de los comandos que escribes en consola por ejemplo:
```sh
$ node programa.js
```
`node` es un argumento y `programa.js` es otro. 
----------------------------------------------------------------------
## HINTS
Tu puedes acceder a los argumentos de la linea de comandos desde javascript mediante el objeto `process`.

Este objeto tiene un atributo llamado `argv` que es un array que contiene los argumentos pasados en la linea de comandos algo asi: `process.argv`.

Para comenzar escribe un simple programa que contenga:
```js
console.log(process.argv)
```
Ejecutalo con `node programa.js` y algunos numeros como argumentos algo asi:

```sh
$ node programa.js 1 2 3
```
Obtendras algo que como esto:
```js
[ 'node', '/ruta/de/tu/programa.js', '1', '2', '3' ]
```
Utiliza un ciclo para sumar los numeros que son pasados como argumentos en la linea de comandos.

Nota que 'node' y la 'ruta de tu programa' siempre seran el primer y segundo elemento que contenga` process.argv` entonces como solo nos interesa sumar los numeros necesitaremos comenzar a sumar desde el 3rd elemento, esto lo puedes hacer comenzando el indice del ciclo en 2 hasta la longitud del arreglo.

Ten encuenta que todos lo elementos de `process.argv` son cadenas de texto y tal vez necesitemos convertir los a numeros con la propiedad del operador `+` o pasando los elementos como parametros a el objeto `Number()` asi `Number(process.argv[2])`.

{appname} suministrara los argumentos para tu programa cuando lo ejecutes con `{appname} verify programa.js` no tienes que preocuparte por suministrar los tu. 

Para probar tu programa sin verificar puedes hacerlo con `{appname} run programa.js`  

Cuando utilizas `run` estas invocando el entorno de prueba {appname} que se establece en cada ejecicio. 
----------------------------------------------------------------------
