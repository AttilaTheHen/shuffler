const suits = [
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'spades',
    'spades',
    'spades',
    'spades',
    'spades',
    'spades',
    'spades',
    'spades',
    'spades',
    'spades',
    'spades',
    'spades',
    'spades',
    'clubs',
    'clubs',
    'clubs',
    'clubs',
    'clubs',
    'clubs',
    'clubs',
    'clubs',
    'clubs',
    'clubs',
    'clubs',
    'clubs',
    'clubs',
    'diamonds',
    'diamonds',
    'diamonds',
    'diamonds',
    'diamonds',
    'diamonds',
    'diamonds',
    'diamonds',
    'diamonds',
    'diamonds',
    'diamonds',
    'diamonds',
    'diamonds',
];

const symbols = [
    'a', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k',
    'a', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k',
    'a', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k',
    'a', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k',
];

// Fisher-Yates shuffler
const shuffle = deck => {
    for(let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
};

module.exports = {
    suits,
    symbols,
    shuffle
};