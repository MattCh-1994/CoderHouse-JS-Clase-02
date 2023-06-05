// CONDICIONALES

/* Estructura sintáctica que permite obtener un resultado de una condición.Ej: 
Si (condición), entonces (resultado u operación). */

// CONTROL DE FLUJOS

/* Hasta ahora aprendimos que todas las instruciones se leen en lína recta, es
decir, de la línea 1,2,3,4, etc. Sin embaro, el control de flujos nos permite 
saltear un bloque de código. Ej: Tenemos una condición en la línea 5 que provoca
un salto hasta la linea 20 */

// Valores Booleanos

/* Estos controles van de la mano de los valores booleanos, que tiene dos valores
posibles: True or False. Entonces, nuestra condición tendrá que tomar dos caminos.
Si es True, tomará un camino, y si False, tomará otro camino. */

// ESTRUCTURA DE CONTROL DE FLUJOS: IF

/* Es la estructura más utilizada en todos los lenguajes, incluido JS. Si la 
condición es FALSE, el programa no ejecutará lo que esté entre {} y se salteará 
todo ese bloque de código. */

// OPERADORES MATEMÁTICOS = COMPARACIÓN

/* Para comparar dos números usamos (==) que significa 'igual a'. Ej: */
let unNumero = 10; /* el '=' funciona para asignar un valor a la variable */
if (unNumero == 10){
    console.log('Ves este mensaje porque la comparación es true. 10 es igual a 10');
}

if(unNumero == 15){
    console.log('Esta comparación es FALSE. 10 no es igual a 15. No ves este mensaje');
}

// IF... ELSE

/* Normalmente, las condiciones que son FALSE requieren que se produzca un resultado
diferente. Ej: */
let unColor = 'Rojo';
if (unColor == 'Rojo'){
    console.log('el color es ROJO');
}else{
    // ELSE = 'sino'. Esta instrucción se interpreta cuando unColor no es rojo.
    console.log('el color NO ES ROJO')
}

/* Otro Ejemplo */
let nombreUsuario = prompt ('Ingrese su nombre de usuario');
if (nombreUsuario == ''){
    alert('No ingresaste tu nombre de usuario!');
}else {
    alert('Nombre de usuario ingresado' + ' ' + nombreUsuario);
}

// ANIDACIONES EN CONDICIONES

/* Las anidaciones nos permiten juntar cosas, en este caso, varios IF. Ej: */
let precio = parseInt(prompt ('Ingrese el precio'));
if (precio < 20){
    alert ('Precio menor a 20');
}else if (precio < 50){
    alert ('Precio menor a 50');
}else if (precio < 90){
    alert ('Precio menor a 90');
}else {
    alert ('Precio mayor a 100')
}
/* Se puede hacer todas las anidaciones que queramos, pero no es lo recomendable.
Hacer 3 o 4 es lo máximo. */

/* DUDA! ----> Es necesaio parsear todo el tiempo que trabajamos con números? Porque
en el ejemplo de arriba no PARSIE la variable 'precio' y no tuve problemas. Me parece
que lo mejor es hacer un parseo cuando necesitamos hacer una suma. */

// OTROS OPERADORES LÓGICOS

/* (&&) = y / and. Ej: */
let edad = parseInt(prompt ('Ingrese su edad'));
if (edad >= 0 && edad <= 17){
    alert('Sos menor de edad');
}else (edad >= 18);{
    alert('sos mayor de edad');
}
/* El operador '&&' se usa para hacer comparaciones que ambas sean verdaderas. En el
ejemplo de arriba, tenemos dos condiones. La primera es que sea mayor o igual a 0, y
la segunda es que sea menor o igual a 17. Si alguna de esas dos condiciones no se 
cumple, entonces me va a dar FALSE, ya que ambas condiciones tienen que cumplirse. */

/* DUDA ---->  En la lína 83, me sale error si no pongo el ';'. No entiendo porqué está 
mal. */

/* (||) = o / or. Ej: */
let grados = 20;
let clima = 'lluvia';
if(grados == 30 || clima == 'lluvia'){
    console.log('Me quedo en casa');
}else{
    console.log('Juego a la pelota');
};
/* El operador '||' se usa cuando queremos que al menos una variable de las dos sea
TRUE. En el ejemplo, vemos que la variable 'clima' sí se cumple, así que es true, a
pesar de que la variable 'grados' sea FALSE. */

/* (!=) = distinto a. Ej: */
let nombre = prompt('Ingrese su nombre');
if(nombre != ''){
    alert ('Su nombre es ' + nombre);
}

/* También podemos convinar los operadores. Ej: */
let nombreMascota = 'Daisy';
if (nombreMascota != '' && (nombreMascota == 'Daisy' || nombreMascota == 'daisy')){
    console.log('El nombre de tu mascota es ' + nombreMascota);
}else{
    console.log('No ha ingresado el nombre de su mascota');
}