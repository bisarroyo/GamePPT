let stone = document.getElementById("stone").addEventListener("click", () => game(1));
let paper = document.getElementById("paper").addEventListener("click", () => game(2));
let scissors = document.getElementById("scissors").addEventListener("click", () => game(3));

let piedra = 1;
let papel = 2;
let tijera = 3;

//storage number of times the player win draw or loss.
let win = [];
let draw = [];
let loss = [];

function writeHTML(result, icon, iconResult) {
    document.getElementById("resultado").innerHTML = result;
    document.getElementById("machine").innerHTML = icon;
    document.getElementById("result-game").innerHTML = iconResult;
};

function game(user)
{
    let maquina = parseInt(Math.random() * 3 + 1);
    let select;
    let result;
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
        writeHTML("Has empatado", select, result);
        draw.push(1);
    }else if (
        (user === piedra && maquina === tijera) ||
        (user === papel && maquina === piedra) ||
        (user === tijera && maquina === papel)
        )
    {
        writeHTML("Has ganado", select, result);
        win.push(1);
    }else
    {
        writeHTML("Has perdido", select, result);
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
            alert("Más suerte para la próxima");
        break
    }
}