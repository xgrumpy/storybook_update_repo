import { Options, Response } from './http.d';

export type { Options, Response };

/**
 * Wrapper around fetch that adds headers and parses JSON.
 *
 * @param url
 * @param method
 * @param options
 * @returns
 */
async function fetchWrapper(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  options: Options = {}
): Promise<Response> {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  let body = options.body;

  if (options.body && typeof options.body !== 'string') {
    body = JSON.stringify(options.body);
  }

  const response = await fetch(url, { method, headers, body });

  try {
    let error = null;
    // @TODO: review this? given our flow we don't need to throw an error
    if (!response.ok) {
      // return { ok: response.ok, data: null, response, error: { message: `HTTP error! status: ${response.status}` }, url, status: response.status };
      let error = { message: `HTTP error! status: ${response.status}` };
      // @TODO: Include
      // throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    let data;
    if (response.headers.get('content-type')?.includes('text/plain') && text) {
      data = { message: text };
    }

    const contentTypes = ['application/json', 'application/fhir+json'];
    const ContentType = response.headers.get('content-type') as string;

    if (contentTypes.some(type => ContentType.includes(type)) && text) {
      data = JSON.parse(text);
    }

    return { ok: response.ok, data, text, response, error, url, status: response.status };
  } catch (error_text) {
    console.error(`Fetch error: ${error_text}`);
    const error = { message: `HTTP catch error! status: ${error_text}` };
    // throw error;
    return { ok: response.ok, data: null, response, error, url, status: response.status };
  }
};

const methods = {
  /**
   * Performs a GET fetch async
   *
   * @param url
  * @param options
   */
  get: (url: string, options?: Options) => fetchWrapper(url, 'GET', options),
  post: (url: string, options?: Options) => fetchWrapper(url, 'POST', options),
  put: (url: string, options?: Options) => fetchWrapper(url, 'PUT', options),
};

export default methods;
