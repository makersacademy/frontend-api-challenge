class ChitterApi {

  loadPosts(url, extension, ) {
    
  }

  deletePosts(url, extension) {
    fetch(`${url} + ${extension}`, {
      method: 'DELETE'
    });
  }
}

module.exports = ChitterApi