function pesquisa ()
{
    var frutas = document.getElementById("cxpesquisa").value;
    var frutaria =
    [
        ['<h1>Abacaxi</h1>','f1.png'],
        ['<h1>Melão</h1>','f2.png'],
        ['<h1>Tomate</h1>','f3.png'],
        ['<h1>Goiaba</h1>','f4.png'],
        ['<h1>Uva</h1>','f5.png'],
    ];

    if(frutas == "Abacaxi")
    {
        document.write(frutaria[0] [0] + "</br>");
        document.write("<img src='img/" + frutaria[0][1] + "' height='600px' width='450px'></img>");
    }
    else if (frutas == 'Melão')
    {
        document.write (frutaria [1] [0] + "<br>");
        document.write ("<img src='img/" + frutaria[1][1] + "' height='600px' width='450px'></img>")
    }
    else if (frutas == 'Tomate')
    {
        document.write (frutaria [2] [0] + "<br>");
        document.write ("<img src='img/" + frutaria[2][1] + "' height='600px' width='450px'></img>")
    }
    else if (frutas == 'Goiaba')
    {
        document.write (frutaria [3] [0] + "<br>");
        document.write ("<img src='img/" + frutaria[3][1] + "' height='600px' width='450px'></img>")
    }
    else if (frutas == 'Uva')
    {
        document.write (frutaria [4] [0] + "<br>");
        document.write ("<img src='img/" + frutaria[4][1] + "' height='600px' width='450px'></img>")
    }
}