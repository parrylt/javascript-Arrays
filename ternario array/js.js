function calcular()
{
    var v1 = document.getElementById("c1").value;
    var v2 = document.getElementById("c2").value;
    var v3 = document.getElementById("c3").value;
    var total = Number(v1) + Number(v2) + Number(v3);
    document.getElementById('re').value = total;
}

function dis1 (){
    document.getElementById("c1").disabled = true;
}

function dis2 (){
    document.getElementById("c2").disabled = true;
}

function dis3 (){
    document.getElementById("c3").disabled = true;
}