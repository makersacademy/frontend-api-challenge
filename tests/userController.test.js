import { jest } from '@jest/globals';
import User from '../models/user.js';
import { signUp } from '../models/userController';


jest.mock('../models/user.js')

describe('signUp', () => {
  let mockFetch;
  let mockUser;
  beforeEach(() => {
    mockFetch = jest.fn().mockResolvedValue({
      json: () => { return [{user: {handle: "newuser", password: "pword"}}] }
    })
    mockUser = new User();
    global.fetch = mockFetch
  });

  it('calls fetch with the handle and password', async () => {
    try {
      await signUp("newuser", "pword");

      expect(mockFetch.mock.calls[0][0]).toEqual("https://chitter-backend-api-v2.herokuapp.com/users")
    } catch(error) {
      throw error;
    }
  });

  it('calls user.createUser with the data', async () => {
    try {
      await signUp("newuser", "pword");

      expect(mockUser.createUser.mock.calls[0][0]).toEqual([{"user": {"handle": "newuser", "password": "pword"}}]);
    } catch(error) {
      throw error;
    }
  });
})