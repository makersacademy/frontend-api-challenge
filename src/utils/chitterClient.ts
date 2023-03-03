import {
  CreateUserErrorRes,
  CreateUserRes,
  peepType,
  SessionError,
  sessionType,
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
      const res = await axios.post(`${url}/sessions`, data, axiosConfig);
      return res.data as sessionType;
    } catch (e: any) {
      const error = e as AxiosError;
      if (error.response?.status == 422) {
        const data = error.response.data as SessionError;
        throw new Error(data.errors?.password);
      } else {
        throw new Error("Failed to get session. Please try again later.");
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
  createPeep() {}

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
  likeByUser(peepId: number, userId: number) {}

  // removes the like on the peep by the user
  dislikeByUser(peepId: number, userId: number) {}
}

export type { ChitterClient as chitterClientType };
export default ChitterClient;
