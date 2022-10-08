/**
 * @jest-environment jsdom
 */
const ChitterView = require("../lib/chitterView");
const fs = require("fs");
const { default: JSDOMEnvironment } = require("jest-environment-jsdom");

describe("ChitterView", () => {
  const peepData = [
    {
      id: 3,
      body: "my first peep :)",
      created_at: "2018-06-23T13:21:23.317Z",
      updated_at: "2018-06-23T13:21:23.317Z",
      user: {
        id: 1,
        handle: "kay",
      },
      likes: [
        {
          user: {
            id: 1,
            handle: "kay",
          },
        },
      ],
    },
  ];
  it("renders peeps to the page", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const api = {
      getPeeps: (callback) => {
        callback(peepData);
      },
    };
    const model = {
      getPeeps: () => peepData,
    };
    const chitterView = new ChitterView(model, api);
    chitterView.renderPeeps(peepData);
    expect(document.querySelector("p").innerText).toBe("my first peep :)");
  });
  it("loads peeps when the page loads", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const api = {
      getPeeps: (callback) => {
        callback(peepData);
      },
    };
    const model = {
      setPeeps: () => {},
      getPeeps: () => peepData,
    };
    const chitterView = new ChitterView(model, api);
    chitterView.loadPeeps();
    expect(document.querySelector("p").innerText).toBe("my first peep :)");
  });
});
