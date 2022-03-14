const ChitterApi = require("./chitterApi");
const ChitterModel = require("./chitterModel");
const ChitterView = require("./chitterView");

const api = new ChitterApi();
const model = new ChitterModel();
const view = new ChitterView(model, api);

// const GithubApi = require("./githubApi");
// const GithubModel = require("./githubModel");
// const GithubView = require("./githubView");

// const api = new GithubApi();
// const model = new GithubModel();
// const view = new GithubView(model, api);
