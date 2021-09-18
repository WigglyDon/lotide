const findKey = function (object, callback) {

return undefined;
}


const testObject = {
1: 'a',
2: 'b',
3: 'c'
}

result1 = findKey(testObject, (x) => {return true});
console.log(result1);



// It should scan the object 
// and return the first key for which the callback returns a truthy value. 
// If no key is found, then it should return undefined.