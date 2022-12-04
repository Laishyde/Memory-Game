const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const personagens = [
    'braking-bad',
    'cyberpunk',
    'dragonball',
    'matrix',
    'morty',
    'nirvana',
    'picles-barata',
    'picles',
    'pokemon',
    'mina',
   
];

let firstCard = '';
let secondCard = '';

const checkEndGame =() =>{
    const disabledCards = document.querySelectorAll('.disabled-card');
    if (disabledCards.length == 20){
        clearInterval(this.loop);
     alert(`Parabéns, você conseguiu! Seu tempo foi: ${timer.innerHTML}`);
    }
}

const ckeckCards = () => {
    const firstCharacter = firstCard.getAttribute('data-personagem');
    const secondCharacter = secondCard.getAttribute('data-personagem');
    if (firstCharacter == secondCharacter) {

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {

        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';


        }, 500);


    }

}


const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}
const revealCard = ({ target }) => {
    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }
    if (firstCard == '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secondCard == '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        ckeckCards();
    }


}

const createCard = (personagem) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../assets/imagem/${personagem}.jpg')`;


    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-personagem', personagem)

    return card;

}

const loadGame = () => {
    const duplicateCharacters = [...personagens, ...personagens];

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((personagem) => {

        const card = createCard(personagem);
        grid.appendChild(card);

    });

}
const startTimer = () =>{

   this.loop = setInterval(()=>{

        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
    },1000);
}

window.onload = () =>{
    spanPlayer.innerHTML =  localStorage.getItem('player');
    startTimer();
    loadGame();
}



