# Food Filter
Run this project without making any changes to it. You'll see it produces a page in the browser with many prompts. Your goal is to fill in the snippets of code with map, filter, and reduce expressions that satisfy those prompts.

The source data is under a binding named `data`. This is what you will be filtering, mapping, and reducing. 

All the problems in this problem set are answered in the same way: use one or a combination of map, filter, and reduce operations to produce the required values bound to the appropriate variable names:

### Problem 1
`allFoods` contain an array of emojis, one per entry, for every entry in the `data` array. 

### Problem 2
`onlyFruit` contains an array of emojis of foods that have the `fruit` property set to `true`.

### Problem 3
`onlyVeg` contains an array of emojis of foods that have the `vegetable` property set to `true`.

### Problem 4
`sweetFoods` contains an array of emojis of foods that have the `sweet` property set to `true`.

### Problem 5
`sweetGreens` contains an array of emojis of foods that have the `sweet` property set to true and the `color` property set to `green`.

### Problem 6
`nonSweetFoods` contains an array of emojis of foods that have the `sweet` property set to `false`.

### Problem 7
`purpleOrWhite` contains an array of emojis of foods whose color are either purple or white.

### Problem 8
`countVeg` contains the total number of foods whose `vegetable` property is true.

### Problem 9
`countFruit` contains the total number of foods whose `fruit` property is true.

### Problem 10
`contains` is a **function** of two arguments: `list, value`. It will return true if `value` is found as an element in `list`. Essentially, it asks "does this `list` contain this `value`?" 

Implement this using a `reduce` operation. 

You may test your `contains` function in the browser terminal using a statement like these: `contains([1,2,3], 3)` and `contains([1,2,3], 4)`. These examples should return `true` and `false` respectively.

### Problem 11
`foodColors` contains an array of colors (expressed as strings), of every color present in the data, but each color is in the array only once. You probably want to use a loop to build a new array (don't forget about `for ... in`) Use the `contains` function you previously wrote to make life easier.

### Problem 12
You may notice that the output page has commas separating the emoji. That's ok, but we can make it look better. 

Find the function bound to `stringify` at the top of the file and modify it to convert a given array into a single string where elements of that array are separated by a single space between each. It should also use a map, filter, and/or reduce operation. (A trailing space is ok.)

Example:
```
['🍓','🍌','🍎'] ➡️ '🍓 🍌 🍎'
```
Formally:

`stringify` is a **function** of one argument (`list`) that returns a single string where every element of the `list` is present, in the same order, separated by space characters.

## Requirements

* All the bindings above must contain the data described when the program is run (one for each Problem).
* Do not change the structure of the program, the data, or the setup function.
* Do not create new global bindings. 
* ONLY make changes in the `sketch.js` file.