class MessagesModel {

  constructor() {
    this.messages = [];
  }

  getMessages() {
    return this.messages;    
  }

  addMessage(text) {
    this.messages.push({body: text});
  }

  setMessages(arrayOfMessages) {
    this.messages = arrayOfMessages;
  }
};


module.exports = MessagesModel;