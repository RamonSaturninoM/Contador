

// necesito que este contador haga 3 cosas:
// incremente de uno en uno
// decremente de uno en uno
// borre toda la cuenta
// necesitamos iniciar en 0

var valorContador = 0; //iniciamos nuestra variable en 0

function incrementar(){
    valorContador++; //incrementar de 1 en 1
    document.getElementById("contador").innerHTML = valorContador;
}

function decrementar(){
    valorContador--; //decrementa de 1 en 1
    document.getElementById("contador").innerHTML = valorContador;
}

function resetear(){
    valorContador = 0
    document.getElementById("contador").innerHTML = valorContador;
}
