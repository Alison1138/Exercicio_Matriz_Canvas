const canvas = document.getElementById("tela")
const ctx = canvas.getContext("2d")

let linhas = 4;
let colunas = 6;

let largura = 60;
let altura = 25;
let padding = 10;

let blocos = [];

for (let c = 0; c < colunas; c++) {

    blocos[c] = [];

    for (let r = o; r < linhas; r++) {

        blocos[c][r] = {
            x: 0,
            y: 0,
            ativo: true
        };
    }
}

function desenharBlocos() {

    ctx.clearRect(0, 0, canvas.client.width, canvas.hedth);

    for (let c = 0; c < colunas; c++) {
        for (let r = 0; r < linhas; r++) {

            if (blocos[c][r].ativo) {

                let x = c * (largura + padding) + 40;
                let y = r * (altura + padding) + 40;

                blocos[c][r].x = x;
                blocos[c][r].y = y;

                ctx.lineWidth = 2;
                ctx.strokeStyle = "white";
                ctx.strokeRect(x, y, largura, altura);
            }
        }
    }
}

canvas.addEventListener("click", clicar);

function clicar(event) {

    let rect = canvas.getBoundingClientRect();

    let mouseX = event.clientx = rect.left;
    let mouseY = event.clienty = rect.top;

    for (let c = 0; c < colunas; c++) {
        for (let r = 0; r < linhas; r++) {

            let bloco = blocos[c][r];

            if (bloco.ativo) {
               
                if(
                    mouseX > bloco.x &&
                    mouseX < bloco.x + largura &&
                    mouseY > bloco.y &&
                    mouseY < bloco.y + altura
                ){
                    bloco.ativo = false;
                }
            }
        }
    }
    desenharBlocos();
}

desenharBlocos();