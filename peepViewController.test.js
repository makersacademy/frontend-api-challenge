import { jest } from '@jest/globals';
import { allPeeps } from './peepViewController.js';
import PeepView from './peepView.js';

jest.mock('./peepView.js')

describe('getPeeps', () => {
  let mockFetch;
  let mockPeepView;
  beforeEach(() => {
    mockFetch = jest.fn().mockResolvedValue({
      json: () => { return [{"body": "first peep"}] }
    })
    mockPeepView = new PeepView();
    global.fetch = mockFetch
  });

  it('calls fetch with the url', async () => {
    try {
      await allPeeps();

      // expect(mockFetch.toHaveBeenCalledWith('......'));
      // https://jestjs.io/docs/en/mock-functions#using-a-mock-function
      expect(mockFetch.mock.calls[0][0]).toEqual("https://chitter-backend-api-v2.herokuapp.com/peeps")
    } catch(error) {
      throw error;
    }
  });

  it('calls peepView.html with the data', async () => {
    try {
      await allPeeps();

      expect(mockPeepView.makeHTML.mock.calls[0][0]).toEqual([{"body": "first peep"}]);
    } catch(error) {
      throw error;
    }
  });
})

