

const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');
const ChitterApi = require('./chitterApi');

const model = new ChitterModel;
const api = new ChitterApi;
const view = new ChitterView(model, api);


api.loadPeeps((data) =>{
    model.setPeeps(data);
    view.displayPeeps();
});

