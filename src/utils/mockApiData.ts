import {
  CreateUserRes,
  OpenApiRes,
  peepType,
  sessionType,
} from "../../types/apiData";

export const getAllPeepsDataSample: peepType[] = [
  {
    id: 1738,
    body: "Testing testing 123",
    created_at: "2023-02-05T23:11:59.157Z",
    updated_at: "2023-02-05T23:11:59.157Z",
    user: {
      id: 1234,
      handle: "oi",
    },
    likes: [
      {
        user: {
          id: 1234,
          handle: "oi",
        },
      },
      {
        user: {
          id: 1232,
          handle: "tim",
        },
      },
      {
        user: {
          id: 1238,
          handle: "rach",
        },
      },
    ],
  },
  {
    id: 1646,
    body: "test test",
    created_at: "2023-01-10T21:01:57.152Z",
    updated_at: "2023-01-10T21:01:57.152Z",
    user: {
      id: 1196,
      handle: "jude123",
    },
    likes: [
      {
        user: {
          id: 1232,
          handle: "tim",
        },
      },
      {
        user: {
          id: 1238,
          handle: "rach",
        },
      },
      {
        user: {
          id: 1204,
          handle: "orhan",
        },
      },
    ],
  },
];

export const signlePeepSample: peepType = {
  id: 1640,
  body: "hello",
  created_at: "2023-01-08T16:47:09.609Z",
  updated_at: "2023-01-08T16:47:09.609Z",
  user: {
    id: 34,
    handle: "kay",
  },
  likes: [
    {
      user: {
        id: 1196,
        handle: "jude123",
      },
    },
    {
      user: {
        id: 1238,
        handle: "rach",
      },
    },
  ],
};

export const sessionSample: sessionType = {
  user_id: 1,
  session_key: "terry_session_key",
};

export const UserSample: CreateUserRes = {
  id: 1,
  handle: "kay",
};

export const OpenApiResSample: OpenApiRes = {
  id: "cmpl-6qq4x5adRtUY1YYBSVJcVbhCpU9jb",
  object: "text_completion",
  created: 1678051267,
  model: "text-davinci-003",
  choices: [
    {
      text: " \n{username: 'Lola_K', content: 'This is a great post!'}\n{username: 'Pete_F', content: 'I'm so glad you shared this!'}\n{username: 'Gina_C', content: 'This is really helpful information!'}",
      index: 0,
      logprobs: null,
      finish_reason: "stop",
    },
  ],
  usage: {
    prompt_tokens: 55,
    completion_tokens: 63,
    total_tokens: 118,
  },
};
