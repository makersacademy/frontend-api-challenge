function addPostsAndDisplay(){
  var listOfPosts = new ListOfPosts();
  listOfPosts.add("Hey, I'm on Chitter.");
  listOfPosts.add("Have a nice day!");
  expects.isTrue(listOfPosts.display()[0].id === 0);
  expects.isTrue(listOfPosts.display()[0].text === "Hey, I'm on Chitter.");
  expects.isTrue(listOfPosts.display()[1].id === 1);
  expects.isTrue(listOfPosts.display()[1].text === "Have a nice day!");
}

addPostsAndDisplay();