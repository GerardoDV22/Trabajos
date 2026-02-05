let productos = [
{ nombre:"Americano", precio:20, cantidad:0 },
{ nombre:"Cappuchino", precio:35, cantidad:0 },
{ nombre:"Muffin", precio:15, cantidad:0 }
];

function cambiarCantidad(index,cambio){

productos[index].cantidad += cambio;

if(productos[index].cantidad < 0){
productos[index].cantidad = 0;
}

document.getElementById("cant"+index).innerText = productos[index].cantidad;

actualizarResumen();
actualizarTotal();
calcular();
}

function actualizarResumen(){

productos.forEach((p,i)=>{

document.getElementById("p"+i).innerText = p.nombre;
document.getElementById("c"+i).innerText = p.cantidad;
document.getElementById("t"+i).innerText = "$"+(p.precio*p.cantidad);

});
}

function actualizarTotal(){

let total=0;

productos.forEach(p=>{
total += p.precio*p.cantidad;
});

document.getElementById("total").innerText = total;
}

function calcular(){

let total = parseInt(document.getElementById("total").innerText)||0;
let recibidoInput = document.getElementById("recibido");

let recibido = recibidoInput.value.replace(/\D/g,"");
recibidoInput.value = recibido;

let diferencia = recibido-total;

if(recibido===""){
document.getElementById("resultado").innerText="$0";
return;
}

if(diferencia>=0){
document.getElementById("resultado").innerText="Cambio: $"+diferencia;
}else{
document.getElementById("resultado").innerText="Falta: $"+Math.abs(diferencia);
}
}

function reiniciar(){
if(document.getElementById("total").innerText != 0)
    if (confirm("¿Estás seguro de que deseas reiniciar todos los valores del pedido?")) {
    productos.forEach((p,i)=>{
        p.cantidad=0;   
        document.getElementById("cant"+i).innerText=0;
        });

        document.getElementById("total").innerText=0;
        document.getElementById("recibido").value="";
        document.getElementById("resultado").innerText="$0";

        actualizarResumen();
    }
}