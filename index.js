console.log("The Chitter app is running");

const MessagesModel = require('./messagesModel');
const ChitterApi = require('./chitterApi');
const MessagesView = require('./messagesView');
const UserModel = require('./userModel');


const model = new MessagesModel;
const api = new ChitterApi;
const user = new UserModel;
const view = new MessagesView(model, api, user);

view.displayMessagesFromApi();