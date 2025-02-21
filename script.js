const deck = [
    { image: 'images/Balance Card.png' },
    { image: 'images/Comet Card.png' },
    { image: 'images/Donjon Card.png' },
    { image: 'images/Euryale.png' },
    { image: 'images/Flames Card.png' },
    { image: 'images/Fool Card.png' },
    { image: 'images/Gem Card.png' },
    { image: 'images/Idiot Card.png' },
    { image: 'images/Jester Card.png' },
    { image: 'images/Key Card.png' },
    { image: 'images/Knight Card.png' },
    { image: 'images/Moon Card.png' },
    { image: 'images/Rogue Card.png' },
    { image: 'images/Ruin Card.png' },
    { image: 'images/Skull Card.png' },
    { image: 'images/Star Card.png' },
    { image: 'images/Sun Card.png' },
    { image: 'images/Talons Card.png' },
    { image: 'images/The Fates Card.png' },
    { image: 'images/The Void Card.png' },
    { image: 'images/Throne Card.png' },
    { image: 'images/Vizier Card.png' }
];


let currentDeck = [...deck];
let topCardIndex = 0;

//index
document.addEventListener('DOMContentLoaded', function() {
    // Enter inn
    document.getElementById('enterInn-btn').addEventListener('click', function() {
        window.location.href = 'inside.html';
    });

});



//inside
document.addEventListener('DOMContentLoaded', function() {
    
    // Exit inn
    document.getElementById('leaveInn-btn').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // Sit at fortune table
    document.getElementById('fortune-btn').addEventListener('click', function() {
        window.location.href = 'fortune.html';
    });

    // Sit at game table
    document.getElementById('game-btn').addEventListener('click', function() {
        window.location.href = 'game.html';
    });
});

//fortune
document.addEventListener('DOMContentLoaded', function() {
    
    // Exit fortune table
    document.getElementById('leaveFortune-btn').addEventListener('click', function() {
        window.location.href = 'inside.html';
    });

   });

//JS FOR FORTUNE
document.getElementById('shuffle-btn').addEventListener('click', () => {
    resetDeck();
    applyShuffleAnimation();
});
document.getElementById('reset-btn').addEventListener('click', resetDeck);

function shuffleDeck() {
    for (let i = currentDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentDeck[i], currentDeck[j]] = [currentDeck[j], currentDeck[i]];
    }
    topCardIndex = 0;
    displayDeck();
}

function resetDeck() {
    currentDeck = [...deck];
    topCardIndex = 0;
    displayDeck();
}

function flipTopCard() {
    if (topCardIndex < currentDeck.length) {
        const card = currentDeck[topCardIndex];
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `<img src="${card.image}" alt="Tarot Card">`;
        
        cardElement.addEventListener('click', () => {
            topCardIndex++;
            flipTopCard();
        });

        document.getElementById('deck').innerHTML = '';
        document.getElementById('deck').appendChild(cardElement);
    } else {
        alert('No more cards in the deck.');
    }
}

function displayDeck() {
    const deckContainer = document.getElementById('deck');
    deckContainer.innerHTML = '';
    
    currentDeck.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card-back';
        cardElement.innerHTML = `<img src="images/cardback.png" alt="Card Back">`;
        cardElement.style.transform = `rotate(${index}deg)`; //card rotation
        
        cardElement.addEventListener('click', () => {
            flipTopCard();
        });

        deckContainer.appendChild(cardElement);
    });
}

function applyShuffleAnimation() {
    const cardElements = document.querySelectorAll('.card-back');
    cardElements.forEach(card => {
        card.classList.add('shuffling');
    });

    
    setTimeout(() => {
        cardElements.forEach(card => {
            card.classList.remove('shuffling');
        });
        
        shuffleDeck();
    }, 500); //timing
}

// initialize the deck display
displayDeck();








