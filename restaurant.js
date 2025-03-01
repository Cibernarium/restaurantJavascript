/*FASE 1 (2 punts)
● Creeu una variable int per cada un dels bitllets que existeixen des de 5€ a 500€, haureu de crear un altre
variable per guardar el preu total del menjar. (1 punt)
● Creeu dos arrays, un on guardarem el menú (5 plats) i un altre on guardarem el preu de cada
plat. (1 punt)*/



var total = 0;
var menu = ['ENSALADA', 'MACARRONES', 'ENTREMES', 'CARNE', 'PESCADO'];
var price = [7, 8, 7, 10, 11];
var order = [];
var plate = " ";


/*
FASE 2 (3 punts)
● Amb un bucle for haurem d’omplir els dos arrays anteriorment creats. Afegirem el nom del plat i després
el preu. (1 punt)
● Un cop plens els dos arrays haurem de mostrar-los i preguntar que es vol per menjar, guardarem la
informació en una List fent servir un bucle while. (1 punt)
● Haurem de preguntar si es vol seguir demanant menjar. Podeu fer servir el sistema (1:Si / 0:No), per tant
haureu de crear un altre variable int per guardar la informació. (1 punt)*/


console.log("MENU DEL DIA");
console.log("------------");
for (var i = 0; i <= 4; i++) {
    console.log("Plato: " + menu[i] + " precio: " + price[i] + "€");
}
console.log("Que voldra per menjar?");
var i = 0;
while (plate != 'q' && plate != 'Q') {
    plate = prompt("Introdueix el plat('Q' per acabar la comanda)");
    order[i] = plate.toUpperCase();
    i++;
}
order.pop();


/*FASE 3 (5 punts)
● Un cop hem acabat de demanar el menjar, haurem de comparar la llista amb l’array que hem fet al
principi. En el cas que la informació que hem introduït a la List coincideixi amb la del array, haurem de
sumar el preu del producte demanat; en el cas contrari haurem de mostrar un missatge que digui que el
producte que hem demanat no existeix.*/


for (var j = 0; j < order.length; j++) {
    if (menu.includes(order[j])) {
        let position = menu.indexOf(order[j]);
        total += price[position];
        console.log("Ha demanat : " + order[j]);
    }
}
for (var k = 0; k < order.length; k++) {
    plate = menu.indexOf(order[k]);
    if (plate == -1) {
        console.log(order[k] + " :el plat no existeix al menu");
    }
}
console.log("Total del menu: " + total + " €");

