//isItTheDuckingSame(executedFunction, expectedOutput, description)
//isItTheDuckingSameArray(executedFunction, [expectedOutput], description)
console.log("THESE ARE THE interface.js TESTS!")

console.log("#displayCries")
//arrange
let testDiv = document.createElement("div");
testDiv.setAttribute('id', 'cryer-div');
document.body.appendChild(testDiv)
testDiv.insertAdjacentText("afterend", "can you see this")

let stubbedData = [{ body: "This is a cry!"}, { body: "This is another cry!"}]
let testInterface = new Interface((url, callback) => {
    callback(stubbedData)
})

//act
testInterface.displayCries()

//assert
let testCryDiv = document.getElementById("cryer-div")

isItTheDuckingSame(testCryDiv.children[0].innerText, "This is a cry!", "gets the list of cries from the database and displays them on the web page")

//reset
// document.getElementById("cryer-div").remove();

// let list = new List();
// let list2 = new List();
// let testContent = "This is my first note, I wrote it with Stu.";
// // let testNote = new Note(testContent);
//
// console.log("THESE ARE THE list.js TESTS!")
//
// isItTheDuckingSame(list.store.length, 0, 'list.store should be a empty array with length 0');
// isItTheDuckingSameArray(list.store, [], 'list.store should be a empty array');
//
// list.createNote(testContent)
// isItTheDuckingSame(list.store[0].getContent(), testContent , 'list.store with one note in it should return an array with that one note, checking the first item content in array');
