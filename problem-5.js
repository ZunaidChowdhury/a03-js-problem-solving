/* 
    Invalid if not String
    
    find the largest word in a string
    find how many characters are there in the string (without spaces)

    output: { longwords: "little", token: 22 }
            { longwords:String, token: Number }

    longwords → সবচেয়ে বড় শব্দের একটা string  (highest সাইজ এর ওয়ার্ড multiple হলে প্রথম টা)
    token → Sentence এর total length without স্পেস 

    Hints 💡:  split(), join() মেথড ব্যবহার করতে পারো।

*/



function analyzeText(str) {

    if (typeof str !== "string" || str === "") {
        return "Invalid";
    }

    let longwords = '';
    let token = 0;

    // finding largest word 
    let wordList = str.split(' ');
    
    longwords = wordList.sort((a, b) => b.length - a.length)[0];
    token = wordList.join('').length;


    return { longwords: longwords, token }

}



const output = analyzeText("I am a little honest person");
console.log(output);

// expected: { longwords: "little", token: 22 }



