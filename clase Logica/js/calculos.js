class Calculo{
    venta(){
        //console.log("Probando venta2...")
        //alert("Calculo de venta")

        // se obtiene el elemento html dado su id
        let costo = document.getElementById("costo").value;
        costo = parseFloat(costo)
        let descuento = document.getElementById("descuento").value
        let iva = document.getElementById("iva").checked
       
        let $resp=document.getElementById("resp")
        let total=0,subtotal=0,valorIva=0
        const IVA=0.12
        descuento = parseFloat(descuento)/100
        descuento = (descuento*costo)
        descuento = parseFloat(descuento.toFixed(2))
        subtotal = costo-descuento
        if (iva){
          valorIva= subtotal*IVA
          valorIva = parseFloat(valorIva.toFixed(2))
        }
        total = (subtotal+valorIva)
        // modificando el atributo deseado del elemento html
        $resp.textContent = `costo: ${costo}\nDescuento: ${descuento}\nSubtotal: ${subtotal}\nIva: ${valorIva}\nTotal: ${total}`
        console.log($resp)
        

    }
}
let cal = new Calculo()
//cal.venta()