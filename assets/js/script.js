// função para mostrar o data atual em que estamos

function mostrarAnoAtual(){
    var data = new Date();
    var ano = data.getFullYear();
    document.getElementById("ano").innerHTML = ano;
}

mostrarAnoAtual();
