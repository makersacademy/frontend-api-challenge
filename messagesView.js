class MessagesView {
  constructor(model) {
    this.model = model;

    this.mainContainerEl = document.querySelector('#main-container');
    this.addMessageInput = document.querySelector('#add-message-input');
    this.addMessageButton = document.querySelector('#add-message-button');

    this.addMessageButton.addEventListener('click', () => {
      this.addMessage(this.addMessageInput.value);
      this.addMessageInput.value = "";
    });
  }

  addMessage(text) {
    this.model.addMessage(text);
    this.displayMessages();
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