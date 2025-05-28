let cucumber = "cucumber";
function countVowels (words){
    const vowels = ["a", "e", "i", "o", "u"]
    console.log(words.split("").filter(letter => vowels.includes(letter)).length);
}
countVowels(cucumber);

module.export = {countVowels}