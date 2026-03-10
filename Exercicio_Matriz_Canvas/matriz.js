const canvas = document.getElementById("tela");
const ctx = canvas.getContext("2d");

let linhas = 3;
let colunas = 6;

let tamanho = 60;

let matriz = [];

for(let c = 0; c < colunas; c++){

    matriz[c] = [];

    for(let r = 0; r < linhas; r++){

        matriz[c][r] = 1;
    }
}

function desenhar(){

    for(let c = 0; c < colunas; c++){

        for(let r = 0; r < linhas; r++){

            let x = c * tamanho + 20;
            let y = r * tamanho + 20;

            ctx.strokeRect(x, y, tamanho, tamanho);

        }
    }
}

desenhar();