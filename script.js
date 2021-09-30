/**
 * autor carlos jose caceres ochoa
 * escrito 29/09/2021
 * Universidad Sergio Arboleda
 */

/**
 * endpoint api audience Oracle CLoud 
 */
const endpoint = "https://gdcdc7d0011250f-db202109231930.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/audience/audience"

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
            console.log(data)
        }
    });

}

/**llamado a la función peticionget */

peticionget()




