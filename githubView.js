class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.api.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.repoName = repoData.name
        this.repoDescription = repoData.description
        this.display()
      });
    });
  }

  display() {
    let names = document.querySelector('#repo-name')
    let descriptions = document.querySelector('#repo-description')
    names.innerText = this.repoName
    descriptions.innerText = this.repoDescription
  }
}

module.exports = GithubView;