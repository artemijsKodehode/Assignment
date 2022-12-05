/*
function formatText(str) {
    return str.toLowerCase().trim()
}
console.log(formatText("      Lorem IPSUM.    "))*/

/*
const formatText = (str) => {
    return str.toLowerCase().trim()
}
console.log(formatText("      Lorem IPSUM.    "))*/

/*
function autoReply(customFunction) {
    customFunction("This is an automated response.")
  }
autoReply(console.log)


console.log(document.getElementById("app"))

function display() {
    document.getElementById("app").innerText = "hello world!" 
}
display()
autoReply(display)*/

/*
function twoArguments(text, text2) {
    text(text2)
}
twoArguments(console.log, "hi")*/

/*
function twoArguments(text, text2) {
    text(text2)
}
twoArguments(function(txt) {
    console.log(txt)
}, "hi")*/

/*
const fiveWords = ["one", "two", "three", "four", "five"]
function forEach() {
    for(let i = 0; i < fiveWords.length; i++)
    console.log(fiveWords[i])
}
forEach(fiveWords, console.log)

/*
const threeFruits = ["apple", "banana", "mango"]
function forEach() {
    for(let i = 0; i < threeFruits.length; i++)
    console.log(threeFruits[i])
}
forEach(threeFruits, console.log)*/

/*
const fiveWords = ["one", "two", "three", "four", "five"]
fiveWords.forEach(element => console.log(element))*/

/*
const threeFruits = ["apple", "banana", "mango"]
threeFruits.forEach(element => console.log(element))*/

/*
const fiveWords = ["one", "two", "three", "four", "five"]
console.log(fiveWords.indexOf('one'));*/

/*
const threeFruits = ["apple", "banana", "mango"]
console.log("apple at index ", threeFruits.indexOf('apple'));
console.log("banana at index ", threeFruits.indexOf('banana'));
console.log("mango at index ", threeFruits.indexOf('mango'));*/

/*
const nums = [1,2,3,4,5]
let tripleNums = nums.map(x => x * 3)
console.log(tripleNums)*/

/*
const nums = [1,2,3,4,5]
let oddNumbers = nums.filter((num) => num % 2 === 1)
console.log(oddNumbers)*/

/*
const nums = [1,2,3,4,5]
let evenNumbers = nums.filter((num) => num % 2 === 0)
console.log(evenNumbers)*/

/*
const nums = [1,2,3,4,5]
console.log(nums.includes(2))*/

/*
const nums = [1,2,3,4,5]
const result = (element) => element > 3;
console.log(nums.filter(result))*/
