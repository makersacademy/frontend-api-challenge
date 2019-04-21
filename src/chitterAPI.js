class chitterAPI {
  constructor() {
    this.url = 'https://chitter-backend-api.herokuapp.com';
    // our api resource
  }

  // peeps => given attributes at chitter api backend page
  renderPeeps() {
    $.get(`${this.url}/peeps`, function(responseData) {
      $(responseData).each(function() {
        $('#listPeeps').append(`<li class="peep" id="${this.id}">${this.body}<br>${this.user.handle} <br>${this.created_at.substr(11,5)} ${this.created_at.substr(0,10)}</li>`)
      })
    })
  }
  // substring implemented to get preferred form. reference from chitter api backend page

  signUpUser(handle, password) {
    alert('responding')
    let data = {"user": {"handle":handle, "password":password}};
    $.ajax({
      method: 'POST',
      url: `${this.url}/users`,
      headers: 'Content-Type: application/json',
      data: data
    }).done(function(data){
      console.log(data)
    })
  }

}
