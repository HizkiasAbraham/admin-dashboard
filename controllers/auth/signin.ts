export async function signIn(username: string, password: string) {
  try {
    let result = await fetch(`${process.env.API_SERVER_URL}/auth/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await result.json();
    return { status: result.status, data };
  } catch (error) {
    throw error;
  }
}
