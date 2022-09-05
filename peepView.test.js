/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const ChitterApi = require("./api");
const PeepModel = require("./peepModel");
const PeepView = require("./peepView");

require("jest-fetch-mock").enableMocks();

describe("page view", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });
  it("displays the peeps", () => {
    const model = new PeepModel();
    const api = new ChitterApi();
    model.addPeep({
      id: 1494,
      body: "First peep",
      created_at: "2022-08-20T11:33:02.912Z",
      updated_at: "2022-08-20T11:33:02.912Z",
      user: { id: 1124, handle: "jony144" },
      likes: [{ user: { id: 1120, handle: "margaritapeter" } }],
    });
    const view = new PeepView(model, api);

    view.displayPeeps();
    expect(document.querySelectorAll(".peep").length).toEqual(1);
  });
  it("displays the peeps from the API", () => {
    const model = new PeepModel();
    const api = new ChitterApi();
    const view = new PeepView(model, api);

    fetch.mockResponseOnce(
      JSON.stringify([
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
      ])
    );

    view.displayPeepsFromApi(() => {
      expect(document.querySelector(".peep").length).toEqual(2);
      expect(document.querySelectorAll(".peep")[1].textContent).toBe(
        "i'm tiz - tiz"
      );
    });
  });
});
