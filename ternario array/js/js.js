function ternario (){
    var n1 = document.getElementById ("cx1").value;

    alert(n1<=10?"Menor que 10":"Maior que 10");
}
function mudar ()
{
    var nome = document.getElementById ("cx1").value;
    var matriz = ['Daniel', 'Carol'];
    matriz.push(nome);
    alert (matriz.length);
    for (var r=0; r <matriz.length; r++)
    {
        document.write(matriz[r]);
    }
}