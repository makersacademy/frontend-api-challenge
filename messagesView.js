class MessagesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

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
      messageEl.innerText = message.body;
      messageEl.className = 'message';
      this.mainContainerEl.append(messageEl);
    });
  }

  displayMessagesFromApi() {
    this.api.loadMessages(data => {
      this.model.setMessages(data);
      this.displayMessages();
    });
  }
};

module.exports = MessagesView;