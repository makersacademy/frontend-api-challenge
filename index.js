const GithubApi = require("./githubApi");
const GithubModel = require("./githubModel");
const GithubView = require("./githubView");

const api = new GithubApi();
const model = new GithubModel();
const view = new GithubView(model, api);