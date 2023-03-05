export type CreateUserRes = {
  id: number;
  handle: string;
};

export type CreateUserErrorRes = {
  handle: string[];
};

export type userType = {
  id: number;
  handle: string;
};

export type peepType = {
  id: number;
  body: string;
  created_at: string;
  updated_at: string;
  user: userType;
  likes: {
    user: userType;
  }[];
};

export type sessionType = {
  user_id?: number;
  session_key?: string;
  handle?: string;
};

export type SessionError = {
  errors: {
    password: string;
  };
};

export type UserCredential = {
  handle: string;
  password: string;
};

export interface OpenApiRes {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
  usage: Usage;
}

export interface Choice {
  text: string;
  index: number;
  logprobs: null;
  finish_reason: string;
}

export interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

export interface CommentData {
  id: string;
  username: string;
  content: string;
}
