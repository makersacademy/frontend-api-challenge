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
      body: "my first peep",
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
    chitterView.renderPeeps();
    expect(document.getElementById("peeps").innerHTML).toContain(
      "my first peep"
    );
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

    expect(document.getElementById("peeps").innerHTML).toContain(
      "my first peep"
    );
  });
  it('creates a session when the "login" button is clicked', () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const api = {
      getPeeps: (callback) => {
        callback(peepData);
      },
      createSession: (username, password, callback) => {
        callback({ user_id: "1", session_key: "a_valid_session_key" });
      },
    };
    const model = {
      session: { user_id: "1", session_key: "a_valid_session_key" },
      setPeeps: () => {},
      getPeeps: () => peepData,
      setSession: () => {
        session = { user_id: "1", session_key: "a_valid_session_key" };
      },
    };
    const chitterView = new ChitterView(model, api);
    chitterView.loadPeeps();
    document.getElementById("username").value = "test";
    document.getElementById("password").value = "password";
    document.getElementById("log-btn").click();
    expect(model.session.user_id).toEqual("1");
  });
});
