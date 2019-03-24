function returnLikeButtonText(data) {
  const likedBy = [];
  for (var i = 0; i < data.likes.length; i ++) {
    likedBy.push(data.likes[i].user.id);
  }

  const userId = parseInt(sessionStorage.getItem('id'), 10);
  if (likedBy.includes(userId)) {
    return 'Unlike';
  } else {
    return 'Like';
  }

  function likePost(url) {
    fetch(url, {
      method: 'PUT',
      headers: { Authorization: `Token token=${sessionStorage.getItem('sessionkey')}`}
    }).then(res => res.json())
    .then((response) => {
      console.log('Post Liked!', response)
      window.location.reload();
    })
    .catch(error => console.log('Error: ', error));
  }

  function unLikePost(url) {
    fetch(url, {
      method: 'DELETE',
      headers: { Authorization: `Token token=${sessionStorage.getItem('sessionkey')}`}
    })
    .then((response) => {
      console.log('Post unliked!', response)
      window.location.reload();
    })
    .catch(error => console.log('Error: ', error));
  }

  function clickLike(postId){
    const id = PostId.slice(4);
    const url = `https://chitter-backend-api.herokuapp.com/peeps/${id}/likes/${sessionStorage.getItem("id")}`;
    const likeButton = document.getElementById(postId);

    if (likeButton.innerHTML === 'Unlike'){
      unLikePost(url);
    } else {
      likePost(url);
    }
  }
}
