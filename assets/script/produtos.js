// SEARCH INPUT
const searchInput = document.getElementById('search');

const pararAnimation1 = document.getElementById('pararAnimation1');
const pararAnimation2 = document.getElementById('pararAnimation2');

searchInput.addEventListener('input', (event) => {
    // PARA PARAR A ANIMACAO QUANDO ESCREVER NA BARRA DE PESQUISA
    if(searchInput.value == 0){
        pararAnimation1.classList.add('pararAnimationOff1')
        pararAnimation1.classList.remove('FlexivelAnimationOff1')
        pararAnimation2.classList.add('pararAnimationOff2')
        pararAnimation2.classList.remove('FlexivelAnimationOff2')
    }else{
        pararAnimation1.classList.remove('pararAnimationOff1')
        pararAnimation1.classList.add('FlexivelAnimationOff1')
        pararAnimation2.classList.remove('pararAnimationOff2')
        pararAnimation2.classList.add('FlexivelAnimationOff2')
    }
    
    const textoPesquisado = formartString(event.target.value);

    const items = document.querySelectorAll('.items .item');
    const noResults = document.getElementById('no_results');

    let temResultado = false


    items.forEach(item => {

        const itemTitle = item.querySelector('.item-title').textContent
        /*PARA PESQUISAR TAMBEM PELA DESCRICAO REMOVE O COMENTARIO DISSO E O DO IF:
        const itemDescription = item.querySelector('.item-description').textContent*/


        if(formartString(itemTitle).indexOf(textoPesquisado) !== -1){/*|| formartString(itemDescription).indexOf(textoPesquisado) !== -1 */
            item.style.display = 'flex';

            temResultado = true;

        }else{
            item.style.display = 'none';
        }
    })

    if(temResultado){
        noResults.style.display = 'none'
    } else{
        noResults.style.display = 'block'
    }
});

function formartString(textoPesquisado){
    return textoPesquisado
        .toLowerCase()
        .trim()
        .normalize('NFD')/* substituir os acentos por algo por um outro caracter*/
        .replace(/[\u0300-\u036f]/g, '')/* remove os acentos que o normalize() encontrou */; /* coloca tudo em minusculas, e .trin() elimina os espacos */
}


