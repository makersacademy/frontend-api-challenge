import ChitterClient, { chitterClientType } from "../src/utils/chitterClient";

describe("ChitterClient", () => {
  let client: chitterClientType;

  beforeEach(() => {
    client = new ChitterClient();
  });

  describe("#getAllPeeps", () => {
    it("should return a list of peeps", async () => {
      const peeps = await client.getAllPeeps();
      expect(peeps.length).toBe(50);
    });
  });

  describe("#findPeepById", () => {
    it("should return one peep with the correct ID", async () => {
      const peepId: number = 1;
      const peep = await client.findPeepById({ peepId: peepId.toString() });
      expect(peep.id).toEqual(peepId);
    });

    it("should handle an error correctly", async () => {
      const peepId: number = 999999;
      await expect(
        client.findPeepById({ peepId: peepId.toString() })
      ).rejects.toThrow(
        `Failed to fetch the peep with ID: ${peepId}. Please try again later.`
      );
    });
  });

  describe("#getSession", () => {
    it("should return user_id and session_key", async () => {
      const session = await client.getSession({
        handle: "terryhycheng",
        password: "password",
      });
      expect(session.user_id).toEqual(1240);
      expect(session.session_key).toBeDefined();
    });

    it("should return errors with wrong input credentials", async () => {
      await expect(
        client.getSession({ handle: "terryhycheng", password: "password1" })
      ).rejects.toThrow("Invalid username or password");
    });
  });

  describe("#createUser", () => {
    it("should return user_id and user_handle", async () => {
      const handle = crypto.randomUUID().slice(0, 10);
      const res = await client.createUser({
        handle,
        password: "password",
      });
      expect(res.id).toBeDefined();
      expect(res.handle).toEqual(handle);
    });

    it("should handle an error correctly", async () => {
      const handle = crypto.randomUUID();
      await expect(
        client.createUser({
          handle,
          password: "password",
        })
      ).rejects.toThrow("Handles must be under 30 characters.");
    });

    it("should return errors with wrong input credentials", async () => {
      await expect(
        client.createUser({ handle: "terryhycheng", password: "password" })
      ).rejects.toThrow("has already been taken");
    });
  });
});
