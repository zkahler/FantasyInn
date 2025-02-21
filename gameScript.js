const aceCardImages = [
    'images/jack.png',
    'images/queen.png',
    'images/king.png',
    'images/ace.png'    // ace card
];

document.addEventListener('DOMContentLoaded', function() {
    const shuffleBtn = document.getElementById('shuffleGame-btn');
    const leaveBtn = document.getElementById('leaveGame-btn');
    const cardGrid = document.getElementById('ace-card-grid');
    const message = document.getElementById('message'); 

    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', function() {
            message.style.display = 'none'; 
            shuffleAndDealAceCards();
        });
    }
    if (leaveBtn) {
        leaveBtn.addEventListener('click', function() {
            window.location.href = 'inside.html';
        });
    }
});

function shuffleAndDealAceCards() {
    const shuffledAceCards = aceCardImages.sort(() => Math.random() - 0.5);
    const cardGrid = document.getElementById('ace-card-grid');
    cardGrid.innerHTML = '';

    shuffledAceCards.forEach((cardImage, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('ace-card-back');
        cardElement.innerHTML = `<img src="images/cardback.png" alt="Card Back">`;

        
        cardElement.style.setProperty('--animation-delay', `${index * 0.2}s`);

        cardElement.addEventListener('click', function() {
            flipAceCard(cardElement, cardImage);
        });

        cardGrid.appendChild(cardElement);

        // toss animation to each card
        cardElement.style.animation = 'tossAnimation 1s ease-out';
    });
}

function flipAceCard(cardElement, cardImage) {
    cardElement.innerHTML = `<img src="${cardImage}" alt="Card Face">`;
    cardElement.classList.remove('ace-card-back');
    cardElement.classList.add('ace-card-face');

    // display the message if the Ace card is found
    if (cardImage.includes('ace.png')) {
        const message = document.getElementById('message');
        message.textContent = "Aye! You found the Ace... double or nothing?";
        message.style.display = 'block';
    }

    if (cardImage.includes('jack.png')) {
        const message = document.getElementById('message');
        message.textContent = "Ha! Looks like your gold's mine, Stranger!";
        message.style.display = 'block';
    }

    if (cardImage.includes('queen.png')) {
        const message = document.getElementById('message');
        message.textContent = "Oh, my sweet Penelope! *ahem* You lost, Stranger. Shall we play again?";
        message.style.display = 'block';
    }

    if (cardImage.includes('king.png')) {
        const message = document.getElementById('message');
        message.textContent = "All Hail the King! Looks like taxes are due, Kid!";
        message.style.display = 'block';
    }
}
