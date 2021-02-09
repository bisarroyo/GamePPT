var stone = document.getElementById("stone").addEventListener("click", function(){game(1)});
var paper = document.getElementById("paper").addEventListener("click", function(){game(2)});
var scissors = document.getElementById("scissors").addEventListener("click", function(){game(3)});

var piedra = 1;
var papel = 2;
var tijera = 3;

//storage numbr of times the player win draw or loss.
var win = [];
var draw = [];
var loss = [];

function game(user)
{
    var maquina = parseInt(Math.random() * 3 + 1);
    var select;
    var result;
    if (maquina === 1){
        select = "<i class='fas fa-hand-rock icon-machine'></i>";
        result = "<p id='result-game'>Piedra</p>";
    }else if (maquina === 2){
        select = "<i class='fas fa-hand-paper icon-machine'></i>";
        result = "<p id='result-game'>Papel</p>";
    }else {
        select = "<i class='fas fa-hand-scissors icon-machine'></i>";
        result = "<p id='result-game'>Tijera</p>";
    }
    if (user === maquina)
    {
        document.getElementById("resultado").innerHTML = "Has empatado !!!";
        document.getElementById("machine").innerHTML = select;
        document.getElementById("result-game").innerHTML = result;
        draw.push(1);
    }else if (
        (user === piedra && maquina === tijera) ||
        (user === papel && maquina === piedra) ||
        (user === tijera && maquina === papel)
        )
    {
        document.getElementById("resultado").innerHTML = "Has ganado !!!"
        document.getElementById("machine").innerHTML = select;
        document.getElementById("result-game").innerHTML = result;
        win.push(1);
    }else
    {
        document.getElementById("resultado").innerHTML = "Has perdido !!!"
        document.getElementById("machine").innerHTML = select;
        document.getElementById("result-game").innerHTML = result;
        loss.push(1);
    }
    console.log("la opción de la maquina es: " + maquina);
    document.getElementById("win-result").innerHTML = win.length;
    document.getElementById("loss-result").innerHTML = loss.length;
    document.getElementById("draw-result").innerHTML = draw.length;
    switch (true){
        case (win.length === 3):
            alert("Has ganado a la máquina");
        break
        case (loss.length === 3):
            alert("Mas suerte para lapróxima");
        break
    }
}