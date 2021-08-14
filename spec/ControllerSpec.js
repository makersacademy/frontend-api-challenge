let mockResponse, mockJsonPromise, mockFetchPromise;

 describe('getPeeps', () => {
    beforeEach(function() {
      // var peeps;
      // spyOn(window, 'fetch')
      // peeps = getPeeps();
      mockResponse = {mockKey: 'mockValue'}
      mockJsonPromise = Promise.resolve(mockResponse);
      mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise
      });
      spyOn(window, 'fetch').and.callFake(() => mockFetchPromise)
    });

    it('responds to the API fetch request', () => {
      getPeeps();
      expect(window.fetch).toHaveBeenCalledWith("https://chitter-backend-api-v2.herokuapp.com/peeps");
    });
  });