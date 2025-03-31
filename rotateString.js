//This is a program to rotate a string periodically removing elements from right-end and joining at the beginning of the string

let word = "SoloLeveling";

console.log(word);

for (let i=0; i < word.length; i++) {
    
    let wordArray = word.split("");
    let popped = wordArray.pop();
    wordArray.unshift(popped);
    let newWord = wordArray.toString();

    // console.log(newWord);

    word = newWord.replace(/,/g , "");
    console.log(word);
}