const ChitterApi = require('./chitterApi')

require('jest-fetch-mock').enableMocks()

describe('ChitterApi class', () => {
  it('calls fetch and loads the Posts', async () => {
    const api = new ChitterApi()
    fetch.mockResponseOnce(JSON.stringify({
      posts: ['This note is coming from the server']
    }))
    api.loadPosts((posts) => {
      expect(posts.posts[0]).toEqual('This note is coming from the server')
    })
  })
  it('posts the user info to the server', async () => {
    const api = new ChitterApi()
  })
})
