class Operacion{
    suma1(){
        let n1=parseInt(Math.random()*10)
        let n2=parseInt(Math.random()*10)
        let s=n1+n2
        console.log(s)
    }
    suma2(n1,n2){
        let s=n1+n2
        console.log(s)
    }
    suma3(n1,n2){
        let s=n1+n2
        return s
    }
    
}
let ope = new Operacion()
ope.suma1()
//ope.suma2(5,8)
//let n1=parseInt(Math.random()*10)
//let n2=parseInt(Math.random()*10)
//ope.suma2(n1,n2)
let su= ope.suma3(6,4)
if (su%2==0){
    console.log("suma par")
}else{
     console.log("suma impar")
 }

// console.log(su)
