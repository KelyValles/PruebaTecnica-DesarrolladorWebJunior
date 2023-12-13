let arrayPruebas= [
    {"cantidadVendida":2,"NombreProducto":"Té Dharamsala","Proveedor":"Exotic Liquids","Categoria":"Bebidas","PrecioUnidad":"18"},
    {"cantidadVendida":20,"NombreProducto":"Cerveza tibetana Barley","Proveedor":"Exotic Liquids","Categoria":"Bebidas","PrecioUnidad":"19"},
    {"cantidadVendida":12,"NombreProducto":"Sirope de regaliz","Proveedor":"Exotic Liquids","Categoria":"Condimentos","PrecioUnidad":"10"},
    {"cantidadVendida":21,"NombreProducto":"Especias Cajun del chef Anton","Proveedor":"New Orleans Cajun Delights","Categoria":"Condimentos","PrecioUnidad":"22"},
    {"cantidadVendida":2,"NombreProducto":"Mezcla Gumbo del chef Anton","Proveedor":"New Orleans Cajun Delights","Categoria":"Condimentos","PrecioUnidad":"21,35"},
    {"cantidadVendida":32,"NombreProducto":"Mermelada de grosellas de la abuela","Proveedor":"Grandma Kelly's Homestead","Categoria":"Condimentos","PrecioUnidad":"25"},
    {"cantidadVendida":4,"NombreProducto":"Peras secas orgánicas del tío Bob","Proveedor":"Grandma Kelly's Homestead","Categoria":"Frutas/Verduras","PrecioUnidad":"30"},
    {"cantidadVendida":32,"NombreProducto":"Salsa de arándanos Northwoods","Proveedor":"Grandma Kelly's Homestead","Categoria":"Condimentos","PrecioUnidad":"40"},
    {"cantidadVendida":5,"NombreProducto":"Buey Mishi Kobe","Proveedor":"Tokyo Traders","Categoria":"Carnes","PrecioUnidad":"97"},
    {"cantidadVendida":4,"NombreProducto":"Pez espada","Proveedor":"Tokyo Traders","Categoria":"Pescado/Marisco","PrecioUnidad":"31"},
    {"cantidadVendida":7,"NombreProducto":"Queso Cabrales","Proveedor":"Cooperativa de Quesos 'Las Cabras'","Categoria":"Lácteos","PrecioUnidad":"21"},
    {"cantidadVendida":65,"NombreProducto":"Queso Manchego La Pastora","Proveedor":"Cooperativa de Quesos 'Las Cabras'","Categoria":"Lácteos","PrecioUnidad":"38"},
    {"cantidadVendida":8,"NombreProducto":"Algas Konbu","Proveedor":"Mayumi's","Categoria":"Pescado/Marisco","PrecioUnidad":"6"},
    {"cantidadVendida":6,"NombreProducto":"Cuajada de judías","Proveedor":"Mayumi's","Categoria":"Frutas/Verduras","PrecioUnidad":"23,25"},
    {"cantidadVendida":7,"NombreProducto":"Salsa de soja baja en sodio","Proveedor":"Mayumi's","Categoria":"Condimentos","PrecioUnidad":"15,5"},
    {"cantidadVendida":0,"NombreProducto":"Postre de merengue Pavlova","Proveedor":"Pavlova, Ltd.","Categoria":"Repostería","PrecioUnidad":"17,45"},
    {"cantidadVendida":7,"NombreProducto":"Cordero Alice Springs","Proveedor":"Pavlova, Ltd.","Categoria":"Carnes","PrecioUnidad":"39"},
    {"cantidadVendida":9,"NombreProducto":"Langostinos tigre Carnarvon","Proveedor":"Pavlova, Ltd.","Categoria":"Pescado/Marisco","PrecioUnidad":"62,5"},
    {"cantidadVendida":8,"NombreProducto":"Pastas de té de chocolate","Proveedor":"Specialty Biscuits, Ltd.","Categoria":"Repostería","PrecioUnidad":"9,2"},
    {"cantidadVendida":6,"NombreProducto":"Mermelada de Sir Rodney's","Proveedor":"Specialty Biscuits, Ltd.","Categoria":"Repostería","PrecioUnidad":"81"}

];


function printReverseArray(word) {
    const reversedArray = word.split('').reverse();
    console.log(`Punto 1. ${word} ---> ${reversedArray}`);
}

function generateRandomPassword() {
    const characters =
      'qwertyuiopasdfghjklzxcvbnm0987654321QWERTYUIOPASDFGHJKLZXCVBNM';
    let password = '';
    const length = 10; 
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  
    console.log("Punto 2. Contraseña aleatoria:", password);
}


function bestSellingProduct() {
    const productoMasVendido = arrayPruebas.reduce((max, producto) => (producto.cantidadVendida > max.cantidadVendida) ? producto : max);
    console.log("Punto 3. Producto más vendido:", productoMasVendido);
}


function bestSellingSuppliers() {
    const proveedores = {};
    arrayPruebas.forEach(producto => {
        if (!proveedores[producto.Proveedor]) {
            proveedores[producto.Proveedor] = 0;
        }
        proveedores[producto.Proveedor] += producto.cantidadVendida;
    });

    const proveedoresOrdenados = Object.keys(proveedores).sort((a, b) => proveedores[b] - proveedores[a]);
    console.log("Punto 4. Proveedores más vendidos:", proveedoresOrdenados);
}

function productWithMostProfits() {
    const productoConMasGanancias = arrayPruebas.reduce((max, producto) => {
        const ganancias = producto.cantidadVendida * parseFloat(producto.PrecioUnidad.replace(',', '.'));
        return (ganancias > max.ganancias) ? { producto, ganancias } : max;
    }, { ganancias: 0 });
    console.log("Punto 5. Producto con más ganancias:", productoConMasGanancias);
}

function profitsByCategory() {
    const gananciasPorCategoria = arrayPruebas.reduce((result, producto) => {
        const ganancias = producto.cantidadVendida * parseFloat(producto.PrecioUnidad.replace(',', '.'));
        if (!result[producto.Categoria]) {
            result[producto.Categoria] = 0;
        }
        result[producto.Categoria] += ganancias;
        return result;
    }, {});
    console.log("Punto 6. Ganancias por categoría:", gananciasPorCategoria);
}

printReverseArray('Computador');
generateRandomPassword();
bestSellingProduct();
bestSellingSuppliers();
productWithMostProfits();
profitsByCategory();