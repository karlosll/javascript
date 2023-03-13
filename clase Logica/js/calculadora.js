class Calculadora{
    suma(){
        // capturar valores     
        let num1 = parseInt(document.getElementById("num1").value)
        let num2 = parseInt(document.getElementById("num2").value)
        let $resp = document.getElementById("resp")
        let sumar=0
        // procesar
        sumar = num1+num2
        // asignar valores a la respuesta
        $resp.textContent=sumar
    }
    limpiar(){
        let d=document
        d.getElementById('num1').value=""
        d.getElementById('num2').value=""
        d.getElementById('resp').textContent=""
    }
    sumaDivisores(num){
        let acu=0
        for(let divisor=1;divisor<num;divisor++){
            if (num % divisor == 0){
                acu=acu+divisor
            }
        }

        return acu
    }
    perfecto(){
        // capturar
        let d=document,acud=0
        let num1= parseInt(d.getElementById('num1').value)
        acud = this.sumaDivisores(num1)
        if (acud==num1){
            d.getElementById("resp").textContent=`${num1} es Perfecto`    
        }else{
            d.getElementById("resp").textContent=`${num1} No es Perfecto`
        }
        
    }
    amigos(){
        let d=document,acu1=0,acu2=0
        let num1= parseInt(d.getElementById('num1').value)
        let num2= parseInt(d.getElementById('num2').value)
        acu1 = this.sumaDivisores(num1)
        acu2 = this.sumaDivisores(num2)
        if (acu1==acu2){
            d.getElementById("resp").textContent=`${num1} y ${num2} son Amigos`    
        }else{
            d.getElementById("resp").textContent=`${num1} y ${num2} No son Amigos`
        }
    }
    isPrimo(num){
        let acu=0,divisor=2,band=1
        while(divisor < num && band == 1){
            if (num % divisor == 0){
                // romper ciclo es cambiar el valor de la bandera
                band=0
            }else{
                divisor=divisor+1
            }
        }
        return band
    }
    primo(){
        let d=document
        let num1= parseInt(d.getElementById('num1').value)
        if (this.isPrimo(num1)==1){
            d.getElementById("resp").textContent=`${num1} es Primo`    
        }else{
            d.getElementById("resp").textContent=`${num1} no es Primo`
        }
    }
    primoGemelos(){
        let d=document
        let num1= parseInt(d.getElementById('num1').value)
        let num2= parseInt(d.getElementById('num2').value)
        let primo1=this.isPrimo(num1)
        let primo2=this.isPrimo(num2)
        if (primo1==1 && primo2==1 && Math.abs(num1-num2)==2 ){
            d.getElementById("resp").textContent=`${num1} y ${num2} son primos gemelos`    
        }else{
            d.getElementById("resp").textContent=`${num1} y ${num2} no son primos gemelos`
        }
    }
}
let cal = new Calculadora() 