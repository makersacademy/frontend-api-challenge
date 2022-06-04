const ChitterModel = require("./chitterModel");

describe("ChitterModel", () => {
  beforeEach(() => {
    model = new ChitterModel();
  });

  describe("peeps", () => {
    it("should start with no peeps", () => {
      expect(model.getPeeps()).toEqual([]);
    });

    it("adds a peep to the model", () => {
      model.addPeep("New peep");

      expect(model.getPeeps()).toEqual(["New peep"]);
    });

    it("resets the peeps to be empty", () => {
      model.reset();

      expect(model.getPeeps()).toEqual([]);
    });

    it("takes an array of peeps and adds them to the model", () => {
      model.setPeeps(["New peep", "Another peep"]);

      expect(model.getPeeps()).toEqual(["New peep", "Another peep"]);
    });

    it("resets the peeps before adding them to the model", () => {
      model.setPeeps(["New peep", "Another peep"]);
      model.setPeeps(["Test peep"]);

      expect(model.getPeeps()).toEqual(["Test peep"]);
    });
  });

  describe("sessions", () => {
    it("starts without a session", () => {
      expect(model.getSession()).toEqual(null);
    });

    it("stores the session", () => {
      const session = {
        user_id: 1,
        session_key: "a_valid_session_key",
      };
      model.saveSession(session);
      expect(model.getSession()).toEqual(session);
    });
  });
});
