/**
 * type for the options for the fetch wrapper
 */
type Options = {
  headers?: Record<string, string>;
  body?: string | any;
};

export type Response = {
  ok: boolean,
  data?: any,
  response?: any,
  error?: any,
  url: string
  status: number,
  text?: string,
};

export type HTTP = {
  get: (url: string, options?: Options) => Promise<Response>,
  post: (url: string, options?: Options) => Promise<Response>,
  put: (url: string, options?: Options) => Promise<Response>,
};
