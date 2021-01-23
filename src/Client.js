class Client {
  constructor() {
  }

  get(url) {
    return fetch(url)
      .then(response => response.json())
  }

  post(url, body) {
    debugger;
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    })
    .then(response => response.json())
  }

  postPeep(url, sessionKey, userId, peep) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${sessionKey}`
      },
      body: `{"peep": {"user_id":${userId}, "body":"${peep}"}}`
    })
    .then(response => response.json())
  }

  authorizedRequest(url, sessionKey, method) {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('Authorization', `Token token=${sessionKey}`)
    return fetch(url, {
      method: method,
      headers: myHeaders,
    })
    .then(response => response.json())
  }

}
