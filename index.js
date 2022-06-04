console.log("The Chitter app is running");

const MessagesModel = require('./messagesModel');
const ChitterApi = require('./chitterApi');
const MessagesView = require('./messagesView');


const model = new MessagesModel;
const api = new ChitterApi;
const view = new MessagesView(model, api);

view.displayMessagesFromApi();