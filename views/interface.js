function getPostData() {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then(response => {
    response.json().then(post => {
     // ...to here.
    //  console.log(post)
     post.forEach((element, index, array) => {
        // var node = document.createElement("LI"); 
         let peeps = element.body

         document.getElementById("peeps").append(peeps)
         document.getElementById("peeps").innerHTML += "<br>";
         
        })
        // let rendered = renderPost(element);
        // document.getElementById("peeps").innerHTML = rendered;
    // var keys = []
    // var values = []
    // for (var i = 0; i < post.length; i++) {
    //     for (var key in post[i]) {
    //         if (post[i].hasOwnProperty(key)) {
    //             keys.push(key);
    //             values.push(post[i][key]);
    //         }
    //     }
    // }
    // // document.getElementById("peeps").innerHTML = keys;
    // document.getElementById("peeps").innerHTML = values;
   })
   
 })
 
}
let button = document.getElementById('find-peep')
button.addEventListener("click", function() {
    let area = document.getElementById('peep-id')
    let id = area.value
    area.value = ""
    getSinglePeep(id)
    // emojifyText()
    })

function getSinglePeep(id) {
    
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps" + `/${id}`).then(response => {
    response.json().then(post => {
    console.log(post)
     document.getElementById('peeps').innerHTML = `${post.body}`;
    //  post.forEach((element, index, array) => {
    //     // var node = document.createElement("LI"); 
    //      let peeps = element.body

    //      document.getElementById("peeps").append(peeps)
    //      document.getElementById("peeps").innerHTML += "<br>";
         
    //     })
        // let rendered = renderPost(element);
        // document.getElementById("peeps").innerHTML = rendered;
    // var keys = []
    // var values = []
    // for (var i = 0; i < post.length; i++) {
    //     for (var key in post[i]) {
    //         if (post[i].hasOwnProperty(key)) {
    //             keys.push(key);
    //             values.push(post[i][key]);
    //         }
    //     }
    // }
    // // document.getElementById("peeps").innerHTML = keys;
    // document.getElementById("peeps").innerHTML = values;
   })
   
 })
 
}

function renderPost(postData) {
    let postHeadingHTML = `<p>${postData.id}</p>`;
    let postBodyHTML = `<p>${postData.body}</p>`;
        return `${postHeadingHTML}${postBodyHTML}`;
}
// entries.forEach(function(note) {
//     getPostData(`${note.text}`, `${note.id}`)
//     let noteDiv = document.getElementById(`${note.id}`)
//     console.log(noteDiv)

getPostData();