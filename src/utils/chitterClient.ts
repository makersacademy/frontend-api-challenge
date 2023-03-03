import {
  CreateUserErrorRes,
  CreateUserRes,
  peepType,
  SessionError,
  sessionType,
  userType,
} from "../../types/apiData";
import axios, { AxiosError } from "axios";
import { QueryKeyType } from "../hooks/useFetch";

const url = "https://chitter-backend-api-v2.herokuapp.com";
class ChitterClient {
  // creates a new user
  async createUser({ handle, password }: QueryKeyType): Promise<CreateUserRes> {
    const body = {
      user: {
        handle,
        password,
      },
    };
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(`${url}/users`, body, axiosConfig);
      return res.data as CreateUserRes;
    } catch (e) {
      const error = e as AxiosError;
      if (error.response?.status == 422) {
        const data = error.response.data as CreateUserErrorRes;
        throw new Error(data.handle[0]);
      } else {
        throw new Error("Failed to create user. Please try again later.");
      }
    }
  }

  // creates a new session
  async getSession({ handle, password }: QueryKeyType): Promise<sessionType> {
    const data = {
      handle,
      password,
    };
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const sessionRes = await axios.post(`${url}/sessions`, data, axiosConfig);
      const session: sessionType = sessionRes.data;
      const userRes = await axios.get(`${url}/users/${session.user_id}`);
      const user: userType = userRes.data;
      return { ...session, handle: user.handle };
    } catch (e: any) {
      const error = e as AxiosError;
      if (error.response?.status == 422) {
        const data = error.response.data as SessionError;
        throw new Error(data.errors?.password);
      } else {
        throw new Error(
          "No record is found for this username. Have you registered?"
        );
      }
    }
  }

  // returns a list of the last 50 peeps
  async getAllPeeps(): Promise<peepType[]> {
    try {
      const res = await axios.get(`${url}/peeps`);
      return res.data as peepType[];
    } catch (e) {
      throw new Error("Failed to fetch peeps. Please try again later.");
    }
  }

  // creates a new peep
  async createPeep({
    userId,
    sessionKey,
    content,
  }: QueryKeyType): Promise<peepType> {
    try {
      const body = {
        peep: {
          user_id: userId,
          body: content,
        },
      };
      const axiosConfig = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token token=${sessionKey}`,
        },
      };
      const res = await axios.post(`${url}/peeps`, body, axiosConfig);
      return res.data as peepType;
    } catch (error) {
      throw new Error(`Failed to create a peep. Please try again later.`);
    }
  }

  // returns a single Peep
  async findPeepById({ peepId }: QueryKeyType): Promise<peepType> {
    try {
      const res = await axios.get(`${url}/peeps/${peepId}`);
      return res.data as peepType;
    } catch (e) {
      throw new Error(
        `Failed to fetch the peep with ID: ${peepId}. Please try again later.`
      );
    }
  }

  // adds a like to the peep by the user
  async likePeep({ peepId, userId, sessionKey }: QueryKeyType) {
    const axiosConfig = {
      headers: {
        Authorization: `Token token=${sessionKey}`,
      },
    };
    try {
      await axios.put(
        `${url}/peeps/${peepId}/likes/${userId}`,
        {},
        axiosConfig
      );
    } catch (error) {
      throw new Error(`Failed to like a peep. Please try again later.`);
    }
  }

  // removes the like on the peep by the user
  async dislikePeep({ peepId, userId, sessionKey }: QueryKeyType) {
    const axiosConfig = {
      headers: {
        Authorization: `Token token=${sessionKey}`,
      },
    };
    try {
      await axios.delete(`${url}/peeps/${peepId}/likes/${userId}`, axiosConfig);
    } catch (error) {
      throw new Error(`Failed to dislike a peep. Please try again later.`);
    }
  }

  // removes a peep
  async deletePeep({ peepId, sessionKey }: QueryKeyType) {
    const axiosConfig = {
      headers: {
        Authorization: `Token token=${sessionKey}`,
      },
    };
    try {
      await axios.delete(`${url}/peeps/${peepId}`, axiosConfig);
    } catch (error) {
      throw new Error(`Failed to delete a peep. Please try again later.`);
    }
  }
}

export type { ChitterClient as chitterClientType };
export default ChitterClient;
