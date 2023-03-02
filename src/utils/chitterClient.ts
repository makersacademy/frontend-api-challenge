import { peepType } from "../../types/apiData";
import axios, { AxiosError } from "axios";

const baseURL = "https://chitter-backend-api-v2.herokuapp.com";

class ChitterClient {
  constructor() {}

  // creates a new user
  createUser() {}

  // creates a new session
  login() {}

  // returns a list of the last 50 peeps
  async getAllPeeps(): Promise<peepType[]> {
    try {
      const res = await axios.get(`${baseURL}/peeps`);
      return res.data as peepType[];
    } catch (e) {
      throw new Error("Failed to fetch peeps. Please try again later.");
    }
  }

  // creates a new peep
  createPeep() {}

  // returns a single Peep
  findPeepById(peepId: number) {}

  // adds a like to the peep by the user
  likeByUser(peepId: number, userId: number) {}

  // removes the like on the peep by the user
  dislikeByUser(peepId: number, userId: number) {}
}

export type { ChitterClient as chitterClientType };
export default ChitterClient;
