import { useState } from "react";
import axios from "axios";

const CreateUser = ({ onChangePage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function createUser(username, password) {
    const response = await axios.post(
      "https://chitter-backend-api-v2.herokuapp.com/users",
      {
        user: { handle: username, password: password },
      }
    );
    console.log(response);
  }

  const onCreateFormSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
    createUser(username, password).then(() => onChangePage("Home"));
    // onChangePage("Home");
  };
  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={onCreateFormSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            data-test="submit-btn"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
