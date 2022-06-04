class MessagesModel {

  constructor() {
    this.messages = [];
  }

  getMessages() {
    return this.messages;    
  }

  addMessage(text) {
    this.messages.push(text);
  }
};

module.exports = MessagesModel;