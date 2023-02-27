let assert = require('chai').assert;
let rewire = require('rewire');
let sketch = rewire('../sketch.js');

describe('Data Types Check', function () {
  let dataTypeChecker = function (varName, shouldType) {
    let d2 = sketch.__get__(varName);
    describe(varName, function () {
      it(`should be ${shouldType}`, function () {
        assert.typeOf(d2, shouldType);
      });
    });
  };

  dataTypeChecker('allFoods', 'array');
  dataTypeChecker('onlyFruit', 'array');
  dataTypeChecker('onlyVeg', 'array');
  dataTypeChecker('sweetFoods', 'array');
  dataTypeChecker('sweetGreens', 'array');
  dataTypeChecker('nonSweetFoods', 'array');
  dataTypeChecker('purpleOrWhite', 'array');
  dataTypeChecker('countVeg', 'number');
  dataTypeChecker('countFruit', 'number');
  dataTypeChecker('contains', 'function');
  dataTypeChecker('foodColors', 'array');
  dataTypeChecker('stringify', 'function');
});

describe('Check input data', function () {
  let correctData = JSON.parse('[{"emoji":"🍎","fruit":true,"vegetable":false,"color":"red","cooked":false,"sweet":true},{"emoji":"🍊","fruit":true,"vegetable":false,"color":"orange","cooked":false,"sweet":true},{"emoji":"🍌","fruit":true,"vegetable":false,"color":"yellow","cooked":false,"sweet":true},{"emoji":"🍋","fruit":true,"vegetable":false,"color":"yellow","cooked":false,"sweet":false},{"emoji":"🥔","fruit":false,"vegetable":true,"color":"brown","cooked":false,"sweet":false},{"emoji":"🥦","fruit":false,"vegetable":true,"color":"green","cooked":false,"sweet":false},{"emoji":"🥕","fruit":false,"vegetable":true,"color":"orange","cooked":false,"sweet":false},{"emoji":"🥒","fruit":false,"vegetable":true,"color":"green","cooked":false,"sweet":false},{"emoji":"🫑","fruit":false,"vegetable":true,"color":"green","cooked":false,"sweet":false},{"emoji":"🧅","fruit":false,"vegetable":true,"color":"white","cooked":false,"sweet":false},{"emoji":"🧄","fruit":false,"vegetable":true,"color":"white","cooked":false,"sweet":false},{"emoji":"🫐","fruit":true,"vegetable":false,"color":"blue","cooked":false,"sweet":true},{"emoji":"🥚","fruit":false,"vegetable":false,"color":"white","cooked":false,"sweet":false},{"emoji":"🍓","fruit":true,"vegetable":false,"color":"red","cooked":false,"sweet":true},{"emoji":"🍅","fruit":true,"vegetable":true,"color":"red","cooked":false,"sweet":false},{"emoji":"🍆","fruit":false,"vegetable":true,"color":"purple","cooked":false,"sweet":false},{"emoji":"🥜","fruit":false,"vegetable":false,"color":"brown","cooked":false,"sweet":false},{"emoji":"🍏","fruit":true,"vegetable":false,"color":"green","cooked":false,"sweet":true},{"emoji":"🍇","fruit":true,"vegetable":false,"color":"purple","cooked":false,"sweet":true},{"emoji":"🍋","fruit":true,"vegetable":false,"color":"yellow","cooked":false,"sweet":false}]');
  let fileData = sketch.__get__('data');
  it('it should not be changed', function () {
    assert.deepEqual(fileData, correctData);
  });
});

describe('Correct Answers', function () {
  let rawAnswers = '{"allFoods":["🍎","🍊","🍌","🍋","🥔","🥦","🥕","🥒","🫑","🧅","🧄","🫐","🥚","🍓","🍅","🍆","🥜","🍏","🍇","🍋"],"onlyFruit":["🍎","🍊","🍌","🍋","🫐","🍓","🍅","🍏","🍇","🍋"],"onlyVeg":["🥔","🥦","🥕","🥒","🫑","🧅","🧄","🍅","🍆"],"sweetFoods":["🍎","🍊","🍌","🫐","🍓","🍏","🍇"],"sweetGreens":["🍏"],"nonSweetFoods":["🍋","🥔","🥦","🥕","🥒","🫑","🧅","🧄","🥚","🍅","🍆","🥜","🍋"],"purpleOrWhite":["🧅","🧄","🥚","🍆","🍇"],"countVeg":9,"countFruit":10,"foodColors":["red","orange","yellow","brown","green","white","blue","purple"]}';
  let answers = JSON.parse(rawAnswers);
  let keys = Object.keys(answers);
  keys.forEach((e) => {
    describe(e, function () {
      it('should hold correct data', function () {
        assert.deepEqual(answers[e], sketch.__get__(e));
      });
    });
  });
});

describe('Functions', function () {
  describe('contains function', function () {
    let contains = sketch.__get__('contains');
    it('should return true when element is in the list', function () {
      assert.isOk(contains(['a', 'b', 'c', 'd'], 'c'));
    });
    it('should return false when element is not in the list', function () {
      assert.isNotOk(contains(['a', 'b', 'c', 'd'], 'e'));
    });
  });

  describe('stringify function', function () {
    let stringify = sketch.__get__('stringify');
    it('should transform list into spaced string', function () {
      let a = stringify(['a', 'b', 'c', 'd']).trim();
      let b = "a b c d";
      assert.equal(a, b);
    });
  });
});

// describe('Testing new data', function () {
//   let answers = JSON.parse('{"data":[{"emoji":"🍇🍇","fruit":true,"vegetable":false,"color":"purple","cooked":false,"sweet":true},{"emoji":"🍋🍋","fruit":true,"vegetable":false,"color":"yellow","cooked":false,"sweet":false},{"emoji":"🍇🍎","fruit":true,"vegetable":false,"color":"red","cooked":false,"sweet":true},{"emoji":"🍇🍓","fruit":true,"vegetable":false,"color":"red","cooked":false,"sweet":true},{"emoji":"🍋🥚","fruit":false,"vegetable":false,"color":"white","cooked":false,"sweet":false},{"emoji":"🍋🥦","fruit":false,"vegetable":true,"color":"green","cooked":false,"sweet":false}],"allFoods":["🍇🍇","🍋🍋","🍇🍎","🍇🍓","🍋🥚","🍋🥦"],"onlyFruit":["🍇🍇","🍋🍋","🍇🍎","🍇🍓"],"onlyVeg":["🍋🥦"],"sweetFoods":["🍇🍇","🍇🍎","🍇🍓"],"sweetGreens":[],"nonSweetFoods":["🍋🍋","🍋🥚","🍋🥦"],"purpleOrWhite":["🍇🍇","🍋🥚"],"countVeg":1,"countFruit":4,"foodColors":["purple","yellow","red","white","green"]}');  
// });
