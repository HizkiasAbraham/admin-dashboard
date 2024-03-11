export const getUserInfo = () =>
  fetch("/api/getUserInfo", {
    headers: {
      "Content-Type": "application/json",
    },
    cache: 'no-store'
  })