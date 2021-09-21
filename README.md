# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for my education. It is _not_ intended for use in good-boi software. (because it is not as robust at doing the exact same thing as lodash lol**

This project was created and published by wigglydonnie as part of my first week at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @wigglydonnie/lotide`

**Require it:**

`const _ = require('@wigglydonnie/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

these bad boys kinda work aight. if you ever look at this (there are a few thousand others from other students that function the same way lol) then here is the documentation of each function as they work based on my implementation of them. glhf 


* i HIGHLY recommend not using the assertion functions whatsoever and instead using the chai assertion library.
* `countLetters(string)`:returns an object with keys corresponding to each letter, and a values corresponding to how many of that letter were in the passed string . 
* `countOnly(input, key)`: takes an array as input and an object as a key. compares each index of the array against the passed key to return an object with the amount of values that were found in the key.
* `eqArrays(array1, array2)`: returns true or false based on if the two arrays passed contain the same values.

* `eqObjects(object1, object2)`: returns true or false based on if the two objects passed contain the same values. (yeah its the same as the one for arrays but this one was significantly harder to build lol. maybe just for me but damn).

* `findKey(object, callback)`: what seems to be a really roundabout way to find a key inside of an object which requires you to manually type the callback function asserting the key you want. this function may actually be harder to use than simply doing the coding yourself. Not sure about that one Donnie... but ok then (syntax for callback is expected to be ```(x) => {return (x === THE VALUE YOU WANT TO FIND IN THE OBJECT)}```)

* `findKeyByValue(object, value)`: returns the first key in an object corresponding to the passed value.

* `head(array)`: returns the first index of a passed array.

* `letterPositions(string)`: returns an object containing information about every index of the string where each letter was found. includes spaces, perhaps unneccesarily... lol!

* `map(array, callback)`: i'd have to read the lodash docs again to remember what this is actually for right now. not familiar with map yet so forgive me. tested it with an array with each index containing each word in the sentence "ground control to major tom". returns an array with only the first letter of each word instead.

* 'middle(array)': i just refactored this so its more robust while i was learning how to export modules and stop copy pasting my functions into code that needs them. works really really well now actually so if you were to actually try this library I would say you should start here and then enjoy the roller-coaster ride downhill from there. it takes an array and returns a new array that contains the middle indexes of the passed array. if the 'middle' is not a single value, meaning the input array contained an even number of elements; it will return the middle two.

* 'tail(array)': similar to head, but returning the body after you sliced it's head off.

* 'takeUntil(array, callback)': returns array with all the values of the inputted array UP TO THE POINT where the callback function is satisfied.

* 'without(yoooooooou, iamlooooooooooostt'): sings a really beautiful romantic melody which I composed myself. if you don't have speakers on your computer it will cause one of your RAM sticks to become a decepticon and sing it to you personally. if you only have one RAM stick then after the decepticon finishes singing his ballad; he will run off, and you have to go buy more RAM before you can use your computer again. LOL better not run this one boiii!