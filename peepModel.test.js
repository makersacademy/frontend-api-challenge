const PeepModel = require("./peepModel");

describe("model", () => {
  it("Initializes", () => {
    const model = new PeepModel();
    expect(model.getPeeps()).toEqual([]);
  });
  it("Adds a peep", () => {
    const model = new PeepModel();
    model.addPeep({
      id: 1494,
      body: "First peep",
      created_at: "2022-08-20T11:33:02.912Z",
      updated_at: "2022-08-20T11:33:02.912Z",
      user: { id: 1124, handle: "jony144" },
      likes: [{ user: { id: 1120, handle: "margaritapeter" } }],
    });
    expect(model.getPeeps()[0]).toEqual({
      id: 1494,
      body: "First peep",
      created_at: "2022-08-20T11:33:02.912Z",
      updated_at: "2022-08-20T11:33:02.912Z",
      user: { id: 1124, handle: "jony144" },
      likes: [{ user: { id: 1120, handle: "margaritapeter" } }],
    });
  });
  it("Sets an array of peeps", () => {
    const model = new PeepModel();
    model.setPeeps([
      {
        id: 1494,
        body: "First peep",
        created_at: "2022-08-20T11:33:02.912Z",
        updated_at: "2022-08-20T11:33:02.912Z",
        user: { id: 1124, handle: "jony144" },
        likes: [{ user: { id: 1120, handle: "margaritapeter" } }],
      },
      {
        id: 1461,
        body: "i'm tiz",
        created_at: "2022-08-07T12:04:31.253Z",
        updated_at: "2022-08-07T12:04:31.253Z",
        user: { id: 1113, handle: "tiz" },
        likes: [],
      },
    ]);
    expect(model.getPeeps()[1]).toEqual({
      id: 1461,
      body: "i'm tiz",
      created_at: "2022-08-07T12:04:31.253Z",
      updated_at: "2022-08-07T12:04:31.253Z",
      user: { id: 1113, handle: "tiz" },
      likes: [],
    });
  });
  it("Resets", () => {
    const model = new PeepModel();
    model.addPeep({
      id: 1494,
      body: "First peep",
      created_at: "2022-08-20T11:33:02.912Z",
      updated_at: "2022-08-20T11:33:02.912Z",
      user: { id: 1124, handle: "jony144" },
      likes: [{ user: { id: 1120, handle: "margaritapeter" } }],
    });
    model.reset();
    expect(model.getPeeps()).toEqual([]);
  });
});
