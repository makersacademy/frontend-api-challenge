//isItTheDuckingSame(executedFunction, expectedOutput, description)
//isItTheDuckingSameArray(executedFunction, [expectedOutput], description)
console.log("THESE ARE THE interface.js TESTS!")

console.log("#displayCries")
  //arrange
  let testDiv = document.createElement("div");
  testDiv.setAttribute('id', 'cryer-div');
  document.body.appendChild(testDiv)

  let stubbedData = [{ body: "This is a cry!", updated_at: "2021-02-16T19:48:17.065Z", user: {id: 34, handle: "kay"}}, { body: "This is another cry!", updated_at: "2021-02-16T19:48:17.065Z", user: {id: 34, handle: "kay"}}]
  let testInterface = new Interface((url, callback) => {
      callback(stubbedData)
  })

  //act
  testInterface.displayCries()

  //assert
  let testCryDiv = document.getElementById("cryer-div")

  isItTheDuckingSame(testCryDiv.children[0].children[1].innerText, "This is a cry!", "gets the list of cries from the database and displays them on the web page")
  isItTheDuckingSame(testCryDiv.children[0].children[0].children[0].innerText, `kay`, "gets the list of cries and display each cry's author");
  isItTheDuckingSame(testCryDiv.children[0].children[0].children[1].innerText, `19:48, 16-02-2021`, "gets the list of cries and display each cry's time of creation or last update");

// reset
document.getElementById("cryer-div").remove();

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
