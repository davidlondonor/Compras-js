const products = require("./products");
const productsList = require("./shopping-list");
const clients = require("./clients");

/**
 * Puedes crear las variables y funciones necesarias para que el sistema funcione.
 * Debe simular una compra en una tienda y arrojar el total de la compra teniendo en cuenta los siguientes descuentos:
 * León Ceballos: 5%
 * Cristian Vega: 10%
 * Jesse Cogollo: 2%
 **/

// const productsListIds = [34, 1, 9, 8, 23, 11, 40, 14, 6, 33, 29, 20, 41, 15, 5];
// const productsQuantities = [2, 5, 3, 9, 2, 4, 2, 3, 10, 8, 6, 12, 4, 5, 2, 7, 7];

/** 
 * Requerimientos:
 * 1: Dentro de la función principal deberás imprimir la lista de productos con la cantidad restante después de la compra.
 * 2: Imprimir el valor total sin aplicar el descuento. El número debe tener dos decimales.
 * 3: Imprimir el total del descuento aplicado.
 * 4: Si no hay suficientes productos se debe agregar a la lista de compra solo los que alcancen.
 **/

// TODO: Si crees que es necesesario incluye más funciones para las pequeñas tareas

// Funciones adicionales aquí...

// TODO: Función Principal getCostList
function getCostList(client, productsList) {
  let total = 0;
  productsList.forEach(item => {
    let subtotal;
    const cantidadAComprar = item.quantity;
    const productoAComprar = item.id;
    let productEnInventario = products.find(productsItem => productsItem.id === productoAComprar);

    if (productEnInventario.quantity >= cantidadAComprar) {
      subtotal = cantidadAComprar * productEnInventario.cost;
    } else {
      subtotal = productEnInventario.quantity * productEnInventario.cost;
    }
    total = subtotal + total;
  });

  if (client === 'Cristian Vega') {
    total = total - total * 0.1;
    console.log('este es el valor de compra Cris: ' + total);
  } else if (client === 'León Ceballos') {
    total = total - total * 0.05;
    console.log('este es valor de compra Simba: ' + total);
  } else if (client === 'Jesse Cogollo') {
    total = total - total * 0.02;
    console.log('este es el valor de compra jesse:' + total);
  } else {
    total = total;
  }
  return total.toFixed(2);
}

const result = getCostList(clients[0], productsList);

console.log('El total de la compra es: ' + result);


// Imprime el total de la compra
  //   stock = quantity[element];
  //   shop = quantities[index];
  //   if (stock >= shop) {
  //     total += costs[element] * shop;
  //     currentStock = stock - shop;
  //   } else {
  //     total += stock * costs[element];
  //     currentStock = 0;
  //   }
  //   currentStockList.push(currentStock);
  // });
  // console.log(currentStockList);

//   let totalPrice = total;
//   console.log(totalPrice);

/**
 * TE RECOMENDAMOS
 * 1. Primero recorre, suma y multiplica los productos de acuerdo a la cantidad
 * 2. Saca el descuento según el cliente
 * 3. Aplica el descuento  al total
 * 4. Al utilizar el console.log pon titulos a lo que imprimes
 */

/**
 * LISTA DE CHEQUEO
 * Calcular el total de la compra
 * Imprimir los productos con la  cantidad restante luego de la compra
 * Calcular el descuento
 * Imprimir el descuento
 * Aplicar descuento al total
 * Imprime el total
 * */
