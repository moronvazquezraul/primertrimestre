db.productos.deleteMany()

//Lista de inserciones para la base de datos donde recogemos los teléfonos que una empresa tiene dispuestos para el público. 

db.productos.insertOne(
    {   _id:01,
        Nombre:"Xiaomi Poco X3 Pro", 
        Precio:[285,265,200.99],
        versiones:{
            ram:"8GB", 
            memoria:["256GB", "128GB", "64GB"],
            procesador:"Snapdragon 860",
            bateria:"5260 mA",
            camara:["2Mp","8Mp","48Mp"]
        }, 
         
        colores:["Negro","Rosa","Dorado","Blanco","Azul"], 
        origen:["China"],  
        fechasalida: new Date("2021-03-26"), 
        android: true , 
        gaming:false
}
)

db.productos.insertMany([
    {_id:02,Nombre:"Huawei P30 Black", Precio:[294.99,210],versiones:{ram:"6GB", memoria:["256GB", "128GB", "64GB"],procesador:"Snapdragon 860",bateria:"5100 mA",camara:["2Mp","18Mp","64Mp"] }, colores:["Negro","Dorado","Blanco","Azul"], origen:["China"],fechasalida: new Date("2021-02-13"), android: true, gaming:false },
    {_id:03,Nombre:"Huawei P Smart Z", Precio:[250.99, 180.99, 160.99],versiones:{ram:["8GB","6GB","4GB"], memoria:["128GB, 64GB, 32GB"],procesador:"Snapdragon 650",bateria:"3500 mA",camara:["8Mp","64Mp"] }, colores:["Negro","Dorado","Blanco","Amarillo","Turquesa"], origen:["China"],fechasalida: new Date("2019-09-18"), android: true, gaming:false },
    {_id:04,Nombre:"Samsung Galaxy M12", Precio:229,versiones:{ram:"6GB", memoria:[ "128GB", "64GB"],procesador:"Exynos850",bateria:"6000 mA",camara:["2Mp","2Mp","18Mp","64Mp"] }, colores:["Negro","Blanco","Azul"], origen:["China"],fechasalida: new Date("2020-11-10"), android: true,gaming:false},
    {_id:05,Nombre:"Iphone 13 Mini", Precio:[1229,1118,1000.99],versiones:{ram:["(8GB","6GB","12GB"], memoria:[ "226GB", "118GB","556GB"],procesador:"A15 Bionic",bateria:"6000 mA",camara:["18Mp","64Mp"] }, colores:["Negro","Blanco","Azul","Rojo","Verde","Amarillo","Morado"], origen:["USA"],fechasalida: new Date("2021-09-24"), android: false, gaming:false },
    {_id:06,Nombre:"Huawei Honor 20", Precio:[230.99,185],versiones:{ram:["6GB","4GB"], memoria:[ "128GB", "64GB"],procesador:"Snapdragon 650",bateria:"3700 mA",camara:["8Mp","32Mp"] }, colores:["Negro","Blanco","Azul","Morado"], origen:["China"],fechasalida: new Date("2018-07-17"), android: true, gaming:false },
    {_id:07,Nombre:"Motorola Moto E20", Precio:[109.99,120.99],versiones:{ram:["4GB","2GB"], memoria:[ "32GB", "64GB"],procesador:"UNISOC T606",bateria:"4000 mA",camara:["2Mp","32Mp"] }, colores:["Negro","Blanco","Azul","Morado","Amarillo","Rojo"], origen:["China"],fechasalida: new Date("2020-09-02"), android: true, gaming:false },
    {_id:08,Nombre:"Samsung Galaxy A52s", Precio:[398.90],versiones:{ram:"6GB", memoria:"128GB",procesador:"Snapdragon 778G",bateria:"4500 mA",camara:["2Mp","5Mp","12Mp","64Mp"] }, colores:["Negro","Blanco","Azul","Morado","Amarillo","Rojo","Turquesa"], origen:["China"],fechasalida: new Date("2021-04-07"), android: true, gaming:false },
    {_id:09,Nombre:"Iphone 12", Precio:[859],versiones:{ram:"8GB", memoria:"128GB",procesador:"A14 Bionic",bateria:"5000 mA",camara:["12Mp","64Mp"] }, colores:["Negro","Blanco","Azul","Morado","Amarillo","Rojo"], origen:["USA"],fechasalida: new Date("2020-10-13"), android: false, gaming:false },
    {_id:10,Nombre:"Realme C11 2021", Precio:[109.99,80.99],versiones:{ram:["4GB","2GB"], memoria:["32GB","16GB"],procesador:"Helio G35",bateria:"5000 mA",camara:"12Mp" }, colores:["Negro","Blanco"], origen:["China"],fechasalida: new Date("2021-05-11"), android: true, gaming:false },
    {_id:11,Nombre:"Black Shark 4", Precio:444.99,versiones:{ram:"8GB", memoria:"128GB",procesador:"Snapdragon 870 + SDX55, 3,2 GHz",bateria:"4500 mA",camara:["48Mp","12Mp","8Mp"] }, colores:["Negro","Blanco","Gris"], origen:["China"],fechasalida: new Date("2021-05-06"), android: true, gaming:true },
    {_id:12,Nombre:"Xiaomi Pocophone F2 Pro", Precio:[432.99,499.99],versiones:{ram:["6GB","8GB"], memoria:["128GB","256GB"],procesador:"Snapdragon™ 865",bateria:"5000 mA",camara:"12Mp" }, colores:["Negro","Blanco","Azul","Morado","Marron"], origen:["China"],fechasalida: new Date("2021-07-22"), android: true, gaming:false }

])


//Los encargos son realizados por vendedores, deben encargar los teléfonos a la empresa y ella se encarga del envío. Se requiere dejar constancia 
//de los encargos y las fechas que realiza cada vendedor. 

db.encargos.insertOne({
    _id:1,
    nombre:"Jose Manuel Romero Romero",
    nacionalidad:"España",
    pedidos:[
        
            {telefonos:["Samsung Galaxy M12","Samsung Galaxy M12","Huawei P30 Black","Black Shark 4"]}
        ,
        
            {fechasdepedido:[new Date("2021-08-26"),new Date("2021-08-20"),new Date("2021-07-16"),new Date("2021-07-02")]}
        
    ],
    preciototal:1112.99,
    edad:45,
    cantidadunidades:4,
    fechacontrato: new Date("2021-01-22")

})

db.encargos.insertMany([
    {_id:2,nombre:"Jose María Romero Romero",nacionalidad:"España",pedidos:[{telefonos:["Samsung Galaxy M12","Samsung Galaxy M12","Huawei P30 Black","Black Shark 4"]},{fechasdepedido:[new Date("2021-08-26"),new Date("2021-08-20"),new Date("2021-07-16"),new Date("2021-07-02")]}],preciototal:1112.99,edad:45,cantidadunidades:4,fechacontrato: new Date("2021-01-22")},
    {_id:3,nombre:"Alessandro Luis Luna Sanchez",nacionalidad:"Italia",pedidos:[{telefonos:["Iphone 12","Xiaomi Pocophone F2 Pro"]},{fechasdepedido:[new Date("2021-05-12"),new Date("2021-04-26")]}],preciototal:1358.99,edad:24,cantidadunidades:2,fechacontrato: new Date("2020-07-10")},
    {_id:4,nombre:"Ismail Hessani Tabbi",nacionalidad:"Marruecos",pedidos:[{telefonos:["Iphone 12","Iphone 13 Mini"]},{fechasdepedido:[new Date("2021-11-01"),new Date("2021-10-25")]}],preciototal:1977,edad:37,cantidadunidades:2,fechacontrato: new Date("2021-02-18")},
    {_id:5,nombre:"Maria Zubeldia Gonzalez",nacionalidad:"Canarias",pedidos:[{telefonos:["Motorola Moto E20","Realme C11 2021","Huawei P Smart Z"]},{fechasdepedido:[new Date("2021-09-02"),new Date("2021-04-25",new Date("2021-04-22"))]}],preciototal:350.98,edad:27,cantidadunidades:3,fechacontrato: new Date("2021-04-21")}

])








