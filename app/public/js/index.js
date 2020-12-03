const output = document.querySelector('.peeps-bucket')

window.addEventListener('load', ()=>{


updatePeepsList();




function updatePeepsList(){
console.log("1");
const url = 'https://chitter-backend-api-v2.herokuapp.com/peeps'
fetch(url).then(function(res){
  return res.json()
}).then(function(data){
  console.log(data);
  data.forEach(function(peeps){
    console.log(peeps.body);
    output.innerHTML += `${peeps.body} <br>posted by ${peeps.user.handle} <br><br>`
  })
})
}






})
