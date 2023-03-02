import ChitterClient, { chitterClientType } from "../src/utils/chitterClient";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getAllPeepsDataSample } from "../src/utils/mockApiData";

describe("ChitterClient", () => {
  let client: chitterClientType;
  const baseURL = "https://chitter-backend-api-v2.herokuapp.com";
  const mock = new MockAdapter(axios);

  beforeEach(() => {
    client = new ChitterClient();
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
});
