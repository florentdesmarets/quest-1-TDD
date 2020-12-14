

const assert = require('assert');


function capitalizeFirstLetters(input) {
     if (input.length != 0) {
    let words = ""
     words = input.split(" ")
    

     for (let i = 0; i < words.length; i++) {
        
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    
    return  words.join(" ");
} else {
    return("")
}


}




// Check that capitalizeFirst is a function

assert.strictEqual(typeof capitalizeFirstLetters, 'function');


// Check that capitalizeFirst accepts one argument

assert.strictEqual(capitalizeFirstLetters.length, 1);


// Check that capitalizeFirst transforms javaScript correctly

assert.strictEqual(capitalizeFirstLetters('javaScript javaScript'), 'JavaScript JavaScript');


// Check that it works for a 1-character string

assert.strictEqual(capitalizeFirstLetters('z'), 'Z');


// Check that it works for an empty string

assert.strictEqual(capitalizeFirstLetters(''), '');


