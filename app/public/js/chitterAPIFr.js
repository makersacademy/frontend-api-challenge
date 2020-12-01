class ChitterAPIFr {
  constructor (element,client){
  this.element = element
  this.client = client
  this.setup()
  }

  setup(){
    const url = "https://chitter-backend-api-v2.herokuapp.com/peeps"
    this.client.get(url)
    .then(data=>{
      this.items = data
      console.log(data);
      this.render()
    })
  }


  render() {
    this.element.innerHTML = this.items.map(item => `<p>${item.body} <br>posted by ${item.user.handle}, likes ${item.likes}</p>`).join('')
  }
}
