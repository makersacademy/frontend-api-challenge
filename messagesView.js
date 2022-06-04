class MessagesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayMessages() {
    document.querySelectorAll('.message').forEach(element => element.remove());

    const messages = this.model.getMessages();

    messages.forEach(message => {
      const messageEl = document.createElement('div');
      messageEl.innerText = message;
      messageEl.className = 'message';
      this.mainContainerEl.append(messageEl);
    });
  }
};

module.exports = MessagesView;