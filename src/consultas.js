db.productos.find()
//Consulta para mostrar toda la tabla de productos.

db.encargos.find()
//Consulta para mostrar toda la tabla de encargos.

db.productos.find({Precio:285}).limit(1).pretty()
//Consulta que busca un teléfono con un precio de 285 euros. 

db.productos.find({Precio:{$lt:500}}).pretty()
//muestra productos con un precio menor de 500.

db.productos.find({$and:[
    {
        Precio:{$lt:250}
    },
    {
        Precio:{$gt:100}
    },
    {
        colores:"Rojo"
    }
]})
//muestra teléfonos de un precio inferior a 250, superior a 100 y con un color rojo entre sus unidades disponibles. 


