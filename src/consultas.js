//Consultas que puede realizar un administrador de una empresa que contrata a vendedores que a su vez venden teléfonos.
//De esta forma, podemos encontrar información de los vendedores y de los productos. 

db.productos.find()
//Consulta para mostrar toda la tabla de productos.

db.encargos.find()
//Consulta para mostrar toda la tabla de encargos.

db.productos.find({precio:285}).limit(1).pretty()
//Consulta que busca un teléfono con un precio de 285 euros. 

db.productos.find({precio:{$lt:500}}).pretty()
//muestra productos con un precio menor de 500.

db.productos.find({$and:[
    {
        precio:{$lt:250}
    },
    {
        precio:{$gt:100}
    },
    {
        colores:"Rojo"
    }
]})
//muestra teléfonos de un precio inferior a 250, superior a 100 y con un color rojo entre sus unidades disponibles. 

db.productos.find(
    {
        gaming:{$exists: true}
    }
)
//Comprueba que los telefonos sean gaming. 


db.productos.find({$and:[
    {precio:{$gt:[400]}},
    {nombre:{$ne:"Iphone 13 Mini"}},
    {versiones:{$elemMatch:{ram:"8GB"}}},
    {colores:{$size:7}},
    {android:false}

]})
//Muestra los productos que tienen un precio superior a 400 euros, que no sea un Iphone 13 Mini y que su capacidad de ram sea de 8GB.
//Además de no ser android. 

db.encargos.find({$and:[
    {$or:[
        {nacionalidad:"España"},
        {nacionalidad:"Marruecos"}
    ]},
    {nacionalidad:"España"},
    {preciototal:{$gt:700}},
    {$or:[
        {"pedidos.telefonos":{$elemMatch:{$all:["Samsung Galaxy M12"]}}},
        {"pedidos.telefonos":{$elemMatch:{$all:["Iphone 12"]}}}
    ]},
    {preciototal:{$lt:2000}}
]})
//Un empleado de la empresa debe comprobar cuales de nuestros vendedores que viven cerca del Estrecho de Gibraltar han vendido teléfonos de los modelos
//más caros que hay sin vender en stock. Todo eso siendo el precio total vendido por ellos mayor que 700 euros.
//Además de 2000 euros. 


db.productos.aggregate([
    { $project:{_id:1,nombre: 1,colores:1,fechasalida:1,android:1 } }
  ]).pretty()

//Muestra los datos de id, colores, fecha de salida y android. 






db.productos.aggregate(
    [
      {
        $group:
          {
            _id: "$versiones.bateria",
            total: { $sum: { $multiply: [ "$precio", 1] } },
            count: { $sum: 1 }
          }
      },
      
    ]
 )
 //Debemos conocer cuantos teléfonos tienen la misma cantidad de bateria. De esta forma podemos ver cuanta cuanta cantidad 
 //de dispositivos poseen el mismo tipo de batería. 

 db.encargos.find({
    nacionalidad:{$regex:/^Italia/i}
})
//Muestra los campos con valores en su nacionalidad "Italia" debido a una necesidad de un cliente.

db.encargos.aggregate(
    {
        $group:{_id:"$nacionalidad", nombre:{$addToSet:"$nombre"}}
    }
)
//Encuentra un nombre único. 
