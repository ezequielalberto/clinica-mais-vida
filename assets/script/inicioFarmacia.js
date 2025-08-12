function attentionClose(){
    document.querySelector(".attention").classList.add("closeA")
}


//EVENTO SCROLL
window.addEventListener("scroll", function(){
    let containerNav = document.querySelector('.containerNav')
    containerNav.classList.toggle('rolagem',window.scrollY > 0)
})

//MENU MOBILE
document.querySelector('.mobile_menu').addEventListener('click', function() {
    document.querySelector('nav menu').classList.toggle('open_menu');
});

document.querySelector('.liSobre').addEventListener('click', function() {
    document.querySelector('.ulSubLi').classList.toggle('flexElement');
});


//VIEW SCROLL CARD PRODUTOS
const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach((entry) => {
            if(entry.isIntersecting === true) {
                entry.target.classList.add('view')
            } else {
                entry.target.classList.remove('view')
            }
        });
    },
    { threshold: [0.7] }
)

const elements = document.querySelectorAll('.scrollViewProdutos')
elements.forEach((entry) => {
    observer.observe(entry)
}) 


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


// funcao para trocar de imagem

let divs= document.querySelectorAll(".containerSlideDepoimentos>div")
function toggleClass(index, className){
    //remove a class dev todos os elementos
    divs.forEach(div => div.classList.remove(className))

    //adiciona a classe no elemento especifico
    if(divs[index]){
        divs[index].classList.add(className)
    }
}
//exemplo de uso:alternar a class dinamicamente
let currentIndex =0
const className = 'flash'
//simular a alternancia com um intervalo
const interval = setInterval(() => {
    toggleClass(currentIndex, className)
    currentIndex = (currentIndex +1)%divs.length //alterna entre os indices 0, 1 ,2
}, 7000);

//use clearInterval(interval) para parar a alternancia, se necessario