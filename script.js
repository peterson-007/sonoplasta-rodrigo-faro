let audios = [
    {caminho:"audios/ai ai ai.mp3", legenda:"AI AI AI"},
    {caminho:"audios/auhbra.mp3", legenda:"Auhbrabra"},
    {caminho:"audios/chega.mp3", legenda:"Chega"},
    {caminho:"audios/dança gatinho.mp3", legenda:"Dança Gatinho"},
    {caminho:"audios/demais.mp3", legenda:"Demais"},
    {caminho:"audios/ele-gosta.mp3", legenda:"Ele gosta"},
    {caminho:"audios/jesus.mp3", legenda:"Jesus"},
    {caminho:"audios/ui.mp3", legenda:"Uiii"},
    {caminho:"audios/xii.mp3", legenda:"Xiii"},
];

let botoes = document.querySelectorAll(".botao");
let legendas = document.querySelectorAll("p");

for(let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    /*Cria um atributo em cada elemento*/
    botoes[i].setAttribute("data-item", i);
}

let audioTag = document.querySelector("audio");

botoes.forEach( botao => {
    botao.addEventListener("click", () =>{
        let som = audios[botao.getAttribute("data-item")];
        audioTag.setAttribute("src", som.caminho);
       audioTag.addEventListener("loadeddata", () => { 
            audioTag.play();
       });
    })
})