function getPostData() {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps/1").then(response => {
    response.json().then(post => {
     // ...to here.
     console.log(post)
     let rendered = renderPost(post);
     document.getElementById("peeps").innerHTML = rendered;
   })
 })
}

function renderPost(postData) {
 let postHeadingHTML = `<h1>${postData.id}</h1>`;
 let postBodyHTML = `<p>${postData.body}</p>`;
 return `${postHeadingHTML}${postBodyHTML}`;
}

getPostData();