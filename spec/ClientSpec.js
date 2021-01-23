let client, callback, data, opts, mockResponse, mockJsonPromise, mockFetchPromise;

describe('Client', () => {
  beforeEach(() => {
    client = new Client()
  })

  describe('get', () => {
    beforeEach(() => {
      callback = jasmine.createSpy("callback")
      mockResponse = { count: 3 }
      mockJsonPromise = Promise.resolve(mockResponse)
      mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise
      })

      spyOn(window, "fetch").and.callFake(() => mockFetchPromise)
    })

    it('calls fetch with url', () => {
      client.get("https://chitter-backend-api-v2.herokuapp.com/peeps")
      expect(window.fetch).toHaveBeenCalledWith("https://chitter-backend-api-v2.herokuapp.com/peeps")
    })

    it('call fetch with url and returns a json object as a promise', () => {
      // it returns the json
      expect(window.fetch()).toEqual(mockFetchPromise)
        // .then((data) => {
        //   expect(data).toEqual(mockFetchPromise)
        // })
    })
  })
})
