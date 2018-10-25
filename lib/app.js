/* eslint no-console: off */
const {
    // suits,
    symbols,
    shuffle
} = require('../data/cards');

// const deck = {};
// const oneSuit = suits.slice(0, 13);
const oneSymbol = symbols.slice(0, 13);

let shuffled = shuffle(oneSymbol.slice());
let clean = shuffled.filter(a => typeof a === 'number');
clean.push(1, 11, 12, 13);

console.log(clean);

const sorter = values => {
    if(values.length < 2) return values;

    let pivot = values[0];
    let left = [];
    let right = [];

    for(let i = 1; i < values.length; i++) {
        if(values[i] < pivot) left.push(values[i]);
        else right.push(values[i]);
    }

    return sorter(left).concat(pivot, sorter(right));
};

// console.log('BEFORE SORT', shuffled);
// console.log('AFTER SORT', sorter(clean));

console.log(clean.sort((a, b) => a - b));