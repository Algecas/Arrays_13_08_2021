

//let generar = ()=> Math.trunc(Math.random()*10);
// let lista = new Array(20).fill(null);
// for(let i in lista){
//     lista[i] = generar();
// }
// lista = ["A","B","C","D","E","F"];
// lista.splice(-1,0,"hola")
// console.log(lista);



// console.log(lista);
// console.log(lista.slice(1,-2));

// console.log(-(lista.length-1));


//copyWithin
nombre = ["Albert","Stephen","Gerena","Castellanos"];
console.log(nombre.copyWithin(3, 0, 4));
//(i,d,h) i = indice donde copia d = indice desde donde copia h = indice hasta donde copia
//Albert Stephen Gerena Albert
dias = ["Lunes","Martes","Miercoles","Jueves"];
console.log(dias.copyWithin(1,0));
//Lunes Lunes Martes Miercoles 
//Si se coloca negativo cuenta de derecha a izquierda e inserta de izquierda a derecha
console.log(dias.copyWithin(0,-2));
//Martes Miercoles Martes Miercoles 



//find
const numDiez = [1,2,3,4,5,6,7,8,9,10];
const busqueda = numDiez.find(element => element != 2 && element != 1);
//Imprime el primer valor que cumple la condición
console.log(`Busqueda = ${busqueda}`);