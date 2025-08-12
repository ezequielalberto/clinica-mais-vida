//ANIMATION SLIDE BLOG
var radioSlide = document.querySelector('.manualBtn')
var contadorSlide = 1
// para que o primeiro input esteje checado, marcado
document.getElementById('radio1').checked = true
// tempo que as imagens vao demorar para funcionarem
setInterval(() => {
    proximaImg()
}, 5000)//vai demorar de 5s (5000) em 5s (5000) para realizar a funcao

// funcao para trocar de imagem
function proximaImg(){
    contadorSlide++

    if(contadorSlide > 4){
        contadorSlide = 1
    }

    document.getElementById('radio'+contadorSlide).checked = true
}