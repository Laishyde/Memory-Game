const grid = document.querySelector('.grid');

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
     'irmã',
];

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;


}

const createCard =(personagem) =>{
    const card = createElement('div','card');
    const front = createElement('div', 'face front'); 
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../assets/imagem/${personagem}.jpg')`;


    card.appendChild(front);
    card.appendChild(back);
    
    return card;

}

const loadGame =() =>{
    const duplicateCharacters = [...personagens, ...personagens];

    const shuffledArray = duplicateCharacters.sort(() => Math.random()- 0.5);

    shuffledArray.forEach((personagem)=>{

    const card = createCard(personagem);
    grid.appendChild(card);

   });

   }
      loadGame();
    

