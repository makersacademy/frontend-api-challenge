class ChitterView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.peepsContainer = document.querySelector("#peepsContainer");
  }

  displayPeeps() {
    this.model.getPeeps().forEach((peep) => {
      const peepContainer = document.createElement("div");
      peepContainer.className = "peep";

      const authorName = document.createElement("p");
      authorName.id = "author";
      authorName.textContent = `Author: ${peep.user.handle}`;
      peepContainer.appendChild(authorName);

      const content = document.createElement("p");
      content.id = "content";
      content.textContent = `Content: ${peep.body}`;
      peepContainer.appendChild(content);

      const createdAt = document.createElement("p");
      createdAt.id = "created_at";
      createdAt.textContent = `Created at: ${peep.created_at}`;
      peepContainer.appendChild(createdAt);

      const likes = document.createElement("p");
      likes.id = "likes";
      likes.textContent = `Likes: ${peep.likes.length}👍`;
      peepContainer.appendChild(likes);

      this.peepsContainer.appendChild(peepContainer);
    });
  }

  displayPeepsFromApi() {
    const callback = (data) => {
      this.model.setPeeps(data);
      this.displayPeeps();
    };
    this.client.loadPeeps(callback);
  }
}

module.exports = ChitterView;
