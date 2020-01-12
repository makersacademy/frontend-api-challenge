function displayNotes(){
  var post = new Post(0, "Doing the Weekend Challenge...");
  expects.isTrue(post.display() === "Doing the Weekend Challenge...")
}

displayNotes();