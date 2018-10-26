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

const quick = values => {
    if(values.length < 2) return values;

    let pivot = values[0];
    let left = [];
    let right = [];

    for(let i = 1; i < values.length; i++) {
        if(values[i] < pivot) left.push(values[i]);
        else right.push(values[i]);
    }

    return quick(left).concat(pivot, quick(right));
};

const bubble = values => {
    let i = 0;

    while(i < values.length - 1) {
        let left = values[i];
        let right = values[i + 1];

        if(i < 0) i = 0;
        if(left === right) i++;
        if(left > right) {
            values[i] = right;
            values[i + 1] = left;
            i--;
        }
        if(left < right) i++;
    }
    return values;
};

const split = arr => {
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return [left, right];
};

const merger = (left, right) => {
    let merged = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            merged.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return merged;
};

module.exports = {
    suits,
    symbols,
    shuffle,
    quick,
    bubble,
    split,
    merger
};