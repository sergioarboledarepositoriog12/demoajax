/**
 * autor carlos jose caceres ochoa
 * escrito 29/09/2021
 * Universidad Sergio Arboleda
 */

/**
 * endpoint api audience Oracle CLoud 
 */
const endpoint = "https://gdcdc7d0011250f-db202109231930.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/audience/audience"
const etp=document.getElementById("informacion")
/**
 * petición get de la api audience
 */

function peticionget() {

    /**
     * petición Asincronas al Servidor con ajax
     */
    $.ajax({

        method: "GET",
        url: endpoint,
        success: function (data) {
           mostrarProductos(data.items)
           getProducto(data.items)
        }
    });

    
}


/**
 * funcion para mostrar productos
 */

function mostrarProductos(productos){
    console.log("****************************************")
    productos.forEach(producto=>{
        
        console.log("Codigo del producto "+producto.codprod)
        console.log("producto "+producto.nomprod)
        console.log("precio "+producto.precio)
        console.log("Inventario "+producto.inventario)
        
    console.log("****************************************") 

    }
    );
}

function getProducto(productos){
  
    let cadena=""
    
    productos.forEach(producto=>{
        cadena+="<p>Codigo:"+producto.codprod+"</p>"+
                "<p>Producto:"+producto.nomprod+"</p>"+
                "<p>Precio:"+producto.precio+"</p>"+
                "<p>Inventario:"+producto.inventario+"</p>"
    }
    );
    console.log(etp)
    console.log(cadena)
    etp.innerHTML=cadena
}







    /**
     * peticion  post
     */

function peticionPost(){
    
    const data={
        codprod:"4",
        nomprod:"Jabon",
        precio:500,
        inventario:100
    }

    let datasend=JSON.stringify(data)
    $.ajax({

        method:"POST",
        url:endpoint,
        data:datasend,
        dataType:'json',
        contentType:"application/json",
        complete:function(response){
            console.log(response.status)
        }
        
    })  

}


/**
 * peticion put
 */


 function peticionPut(){
    
    const data={
        codprod:"4",
        nomprod:"Jabon de Baño",
        precio:600,
        inventario:99
    }

    let datasend=JSON.stringify(data)
    $.ajax({

        method:"PUT",
        url:endpoint,
        data:datasend,
        dataType:'json',
        contentType:"application/json",
        complete:function(response){
           console.log("Actualizo Registro")
        }
        
    })  

}

/**
 * peticion delete
 */
function peticionDelete(){
    
    const data={
        codprod:"3"
    }

    let datasend=JSON.stringify(data)
    $.ajax({

        method:"DELETE",
        url:endpoint,
        data:datasend,
        dataType:'json',
        contentType:"application/json",
        complete:function(response){
           console.log("Elimino Registro")
        }
        
    })  

}


/**llamado a la función peticionget */

peticionget()
//peticionPost()
//peticionPut()
//peticionDelete()

