export async function getRequest(path: string, authToken: string, opts = {}) {
  return fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/${path}`, {
    method: "GET",
    headers: {
      authorization: authToken,
      "Content-Type": "application/json",
    },
    ...opts
  });
}
