import { jest } from '@jest/globals';
import { allPeeps } from '../models/peepViewController.js';
import { singlePeep } from '../models/peepViewController.js';
import { createPeep } from '../models/peepViewController.js'
import PeepView from '../models/peepView.js';

jest.mock('../models/peepView.js')

describe('allPeeps', () => {
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

describe('singlePeeps', () => {
  let mockFetch;
  let mockPeepView;
  beforeEach(() => {
    mockFetch = jest.fn().mockResolvedValue({
      json: () => { return [{"body": "first peep", id: "1"}] }
    })
    mockPeepView = new PeepView();
    global.fetch = mockFetch
  });

  it('calls fetch with correct url', async () => {
    try {
      await singlePeep(1);

      expect(mockFetch.mock.calls[0][0]).toEqual(`https://chitter-backend-api-v2.herokuapp.com/peeps/1`);
    } catch(error) {
      throw error;
    }  
  });

  it('calls peepView.singlePeepHTML with the data', async () => {
    try {
      await singlePeep(1);

      expect(mockPeepView.singlePeepHTML.mock.calls[0][0]).toEqual([{"body": "first peep", id: "1"}]);
    } catch(error) {
      throw error;
    }  
  });
})


describe('createPeep', () => {
  let mockFetch;
  let mockPeepView;
  beforeEach(() => {
    mockFetch = jest.fn().mockResolvedValue({
      json: () => { return {
        "id": 3,
        "body": "my first peep :)",
        "created_at": "2018-06-23T13:21:23.317Z",
        "updated_at": "2018-06-23T13:21:23.317Z",
        "user": {
          "id": 1,
          "handle": "kay"
        },
        "likes": [{
          "user": {
            "id": 1,
            "handle": "kay"
          }
        }]
      } }
    })
    mockPeepView = new PeepView();
    global.fetch = mockFetch
  });

  it('calls fetch with correct url and then fecthes all peeps again', async () => {
    try {
      await createPeep();

      expect(mockFetch.mock.calls[0][0]).toEqual(`https://chitter-backend-api-v2.herokuapp.com/peeps`);
      expect(mockFetch.mock.calls[1][0]).toEqual(`https://chitter-backend-api-v2.herokuapp.com/peeps`);
    } catch(error) {
      throw error;
    }  
  });
})