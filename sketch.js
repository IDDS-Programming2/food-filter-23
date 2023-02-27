let instructionsOnPage = true;

let data = [
  { emoji: '🍎', fruit: true, vegetable: false, color: 'red', cooked: false, sweet: true },
  { emoji: '🍊', fruit: true, vegetable: false, color: 'orange', cooked: false, sweet: true },
  { emoji: '🍌', fruit: true, vegetable: false, color: 'yellow', cooked: false, sweet: true },
  { emoji: '🍋', fruit: true, vegetable: false, color: 'yellow', cooked: false, sweet: false },
  { emoji: '🥔', fruit: false, vegetable: true, color: 'brown', cooked: false, sweet: false },
  { emoji: '🥦', fruit: false, vegetable: true, color: 'green', cooked: false, sweet: false },
  { emoji: '🥕', fruit: false, vegetable: true, color: 'orange', cooked: false, sweet: false },
  { emoji: '🥒', fruit: false, vegetable: true, color: 'green', cooked: false, sweet: false },
  { emoji: '🫑', fruit: false, vegetable: true, color: 'green', cooked: false, sweet: false },
  { emoji: '🧅', fruit: false, vegetable: true, color: 'white', cooked: false, sweet: false },
  { emoji: '🧄', fruit: false, vegetable: true, color: 'white', cooked: false, sweet: false },
  { emoji: '🫐', fruit: true, vegetable: false, color: 'blue', cooked: false, sweet: true },
  { emoji: '🥚', fruit: false, vegetable: false, color: 'white', cooked: false, sweet: false },
  { emoji: '🍓', fruit: true, vegetable: false, color: 'red', cooked: false, sweet: true },
  { emoji: '🍅', fruit: true, vegetable: true, color: 'red', cooked: false, sweet: false },
  { emoji: '🍆', fruit: false, vegetable: true, color: 'purple', cooked: false, sweet: false },
  { emoji: '🥜', fruit: false, vegetable: false, color: 'brown', cooked: false, sweet: false },
  { emoji: '🍏', fruit: true, vegetable: false, color: 'green', cooked: false, sweet: true },
  { emoji: '🍇', fruit: true, vegetable: false, color: 'purple', cooked: false, sweet: true },
  { emoji: '🍋', fruit: true, vegetable: false, color: 'yellow', cooked: false, sweet: false }
];

/* Do not make changes above this point */

let stringify = (list) => { return list; };

let allFoods = [];
let onlyFruit = [];
let onlyVeg = [];
let sweetFoods = [];
let sweetGreens = [];
let nonSweetFoods = [];
let purpleOrWhite = [];
let countVeg = 0;
let countFruit = 0;
let contains = (list, value) => {
  return false;
};
let foodColors = [];

/* Do not make changes below this point */
let instructions;
function preload () {
  instructions = loadStrings('README.md');
}
function setup () {
  noCanvas();
  let row = createDiv();
  row.class('row');
  let col1 = createDiv();
  let col2;
  col1.parent(row);
  if (instructionsOnPage) {
    col1.class('column');
    col2 = createDiv();
    col2.class('column');
    col2.parent(row);
  }
  createDiv('All Foods:').parent(col1);
  createDiv(stringify(allFoods)).parent(col1);
  createDiv('Only Fruit:').parent(col1);
  createDiv(stringify(onlyFruit)).parent(col1);
  createDiv('Only Vegetables:').parent(col1);
  createDiv(stringify(onlyVeg)).parent(col1);
  createDiv('Sweet Foods:').parent(col1);
  createDiv(stringify(sweetFoods)).parent(col1);
  createDiv('Sweet & Green Foods:').parent(col1);
  createDiv(stringify(sweetGreens)).parent(col1);
  createDiv('Non-Sweet Foods:').parent(col1);
  createDiv(stringify(nonSweetFoods)).parent(col1);
  createDiv('Foods that are Purple or White:').parent(col1);
  createDiv(stringify(purpleOrWhite)).parent(col1);
  createDiv(`There are ${countVeg} vegetables and ${countFruit} fruits.`).parent(col1);
  createDiv(`These are all the colors (each color mentioned once): ${stringify(foodColors)}`).parent(col1);

  if (instructionsOnPage) {
    createDiv(window.markdownit().render(instructions.join('\n'))).parent(col2);
  }
}
