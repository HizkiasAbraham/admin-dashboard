export async function getUserInfo(authToken: string) {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/userInfo`,
      {
        method: "GET",
        headers: {
          authorization: authToken,
          "Content-Type": "application/json",
        },
      }
    );

    return await result.json();
  } catch (error) {
    throw error;
  }
}
