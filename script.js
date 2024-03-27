const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = '';

for(let i=0; i<friends.length; i++) {
    string += friends[i];
    if (i!== friends.length -1) {
        string += ', ';
    }
}

// через join:
// let string = friends.join(', ');

console.log(string);

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];

const cardToRemove = 'Карточка_3';

cards.splice(2, 1);

const cardToInsert = 'Карточка_6';

cardToInsert.indexOf();

cards.push('Карточка_6');

console.log(cards);
