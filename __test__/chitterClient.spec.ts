import ChitterClient from "../src/utils/chitterClient";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  getAllPeepsDataSample,
  sessionSample,
  signlePeepSample,
  UserSample,
} from "../src/utils/mockApiData";

describe("ChitterClient", () => {
  const client = new ChitterClient();
  const baseURL = "https://chitter-backend-api-v2.herokuapp.com";
  const mock = new MockAdapter(axios);

  beforeEach(() => {
    mock.reset();
  });

  describe("#getAllPeeps", () => {
    it("should return a list of peeps", async () => {
      mock.onGet(`${baseURL}/peeps`).replyOnce(200, getAllPeepsDataSample);
      const peeps = await client.getAllPeeps();
      expect(peeps.length).toBe(2);
    });

    it("should handle an error correctly", async () => {
      mock.onGet(`${baseURL}/peeps`).networkErrorOnce();
      await expect(client.getAllPeeps()).rejects.toThrow(
        "Failed to fetch peeps. Please try again later."
      );
    });
  });

  describe("#findPeepById", () => {
    it("should return one peep with the correct ID", async () => {
      const peepId: number = 1640;
      mock.onGet(`${baseURL}/peeps/${peepId}`).replyOnce(200, signlePeepSample);
      const peep = await client.findPeepById({ peepId: peepId.toString() });
      expect(peep.id).toEqual(peepId);
    });

    it("should handle an error correctly", async () => {
      const peepId: number = 999999;
      mock.onGet(`${baseURL}/peeps/${peepId}`).networkErrorOnce();
      await expect(
        client.findPeepById({ peepId: peepId.toString() })
      ).rejects.toThrow(
        `Failed to fetch the peep with ID: ${peepId}. Please try again later.`
      );
    });
  });

  describe("#getSession", () => {
    it("should return user_id and session_key", async () => {
      mock.onPost(`${baseURL}/sessions`).replyOnce(200, sessionSample);
      mock.onGet(`${baseURL}/users/1`).replyOnce(200, UserSample);
      const session = await client.getSession({
        handle: "kay",
        password: "password",
      });
      expect(session.user_id).toEqual(1);
      expect(session.handle).toEqual("kay");
      expect(session.session_key).toEqual("terry_session_key");
    });

    it("should handle an error correctly", async () => {
      mock.onPost(`${baseURL}/sessions`).networkErrorOnce();
      await expect(
        client.getSession({ handle: "kay", password: "password" })
      ).rejects.toThrow(
        "No record is found for this username. Have you registered?"
      );
    });

    it("should return errors with wrong input credentials", async () => {
      mock.onPost(`${baseURL}/sessions`).reply(422, {
        errors: {
          password: "Invalid username or password",
        },
      });
      await expect(
        client.getSession({ handle: "kay", password: "password" })
      ).rejects.toThrow("Invalid username or password");
    });
  });

  describe("#createUser", () => {
    it("should return user_id and user_handle", async () => {
      mock.onPost(`${baseURL}/users`).replyOnce(200, UserSample);
      const res = await client.createUser({
        handle: "kay",
        password: "password",
      });
      expect(res.id).toEqual(1);
      expect(res.handle).toEqual("kay");
    });

    it("should handle an error correctly", async () => {
      mock.onPost(`${baseURL}/users`).networkErrorOnce();
      await expect(
        client.createUser({ handle: "kay", password: "password" })
      ).rejects.toThrow("Failed to create user. Please try again later.");
    });

    it("should return errors with wrong input credentials", async () => {
      mock.onPost(`${baseURL}/users`).reply(422, {
        handle: ["has already been taken"],
      });
      await expect(
        client.createUser({ handle: "kay", password: "password" })
      ).rejects.toThrow("has already been taken");
    });
  });
});
