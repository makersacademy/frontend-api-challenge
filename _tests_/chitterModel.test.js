const ChitterModel = require("../src/chitterModel");

describe("ChitterModel", () => {
  beforeEach(() => {
    model = new ChitterModel();
  });

  it("returns empty array", () => {
    const peeps = model.getPeeps();
    expect(peeps).toEqual([]);
  });

  it("returns two peeps", () => {
    model.addPeep("Test peep 1");
    model.addPeep("Test peep 2");
    expect(model.getPeeps()).toEqual(["Test peep 1", "Test peep 2"]);
  });

  it("returns the list of notes", () => {
    peepsList = model.setPeeps("Test peep 1, Test peep 2");
    expect(peepsList).toEqual("Test peep 1, Test peep 2");
  });

  it("returns the peeps that match the user ID", () => {
    const mockPeep1 = {
      id: 1,
      body: "my first peep :)",
      created_at: "2018-06-23T13:12:29.945Z",
      updated_at: "2018-06-23T13:12:29.945Z",
    };
    const mockPeep2 = {
      id: 2,
      body: "my second peep :)",
      created_at: "2022-02-23T13:12:29.945Z",
      updated_at: "2022-02-23T13:12:29.945Z",
    };
    model.addPeep(mockPeep1);
    model.addPeep(mockPeep2);
    expect(model.getPeepById(1)).toEqual(mockPeep1);
  });
});
