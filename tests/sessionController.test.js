import { jest } from '@jest/globals';
import Session from '../models/session.js';
import { signIn } from '../models/sessionController';


jest.mock('../models/session.js')

describe('signIn', () => {
  let mockFetch;
  let mockSession;
  beforeEach(() => {
    mockFetch = jest.fn().mockResolvedValue({
      json: () => { return [{user: {handle: "newuser", password: "pword"}}] }
    })
    mockSession = new Session();
    global.fetch = mockFetch
  });

  it('calls fetch to the correct url', async () => {
    try {
      await signIn("newuser", "pword");

      expect(mockFetch.mock.calls[0][0]).toEqual("https://chitter-backend-api-v2.herokuapp.com/sessions")
    } catch(error) {
      throw error;
    }
  });

  it('calls session.createSession with the data', async () => {
    try {
      await signIn("newuser", "pword");

      expect(mockSession.createSession.mock.calls[0][0]).toEqual([{"user": {"handle": "newuser", "password": "pword"}}]);
    } catch(error) {
      throw error;
    }
  });
})