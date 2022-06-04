class MessagesModel {

  constructor() {
    this.messages = [];
  }

  displayMessages() {
    return this.messages;    
  }

  addMessage(text) {
    this.messages.push(text);
  }
};

module.exports = MessagesModel;