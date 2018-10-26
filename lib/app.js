/* eslint no-console: off */
const {
    suits,
    symbols,
    shuffle,
    quick,
} = require('../data/cards');

const deck = [];
const oneSuit = suits.slice(0, 13);
const oneSymbol = symbols.slice(0, 13);

let shuffled = shuffle(oneSymbol.slice());
let clean = shuffled.filter(a => typeof a === 'number');

clean.push(1, 11, 12, 13);
let sorted = quick(clean.slice());

sorted[0] = 'a';
sorted[10] = 'j';
sorted[11] = 'q';
sorted[12] = 'k';

for(let i = 0; i < sorted.length; i++) {
    let card = {};
    card[sorted[i]] = oneSuit[i];
    deck.push(card);
}

console.log('DECK', deck);