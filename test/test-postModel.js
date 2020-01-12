function displayNotes(){
  var post = new Post("Doing the Weekend Challenge...");
  expected.isTrue(post.display() == "Doing the Weekend Challenge...")
}

displayNotes();