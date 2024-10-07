import {
  ACCESS_TOKEN,
  BASE_API,
  EXPIRES_IN,
  TOKEN_TYPE,
  logout,
} from "./src/common";

// const playlist = await fetch(
//   `https://api.spotify.com/v1/browse/featured-playlists`,
//   {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token.access_token}`,
//     },
//   },
// );
// console.log(await playlist.json());

const getAccessToken = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  const expiry = localStorage.getItem(EXPIRES_IN);
  const token_type = localStorage.getItem(TOKEN_TYPE);
  if (Date.now() < expiry) {
    return { accessToken, token_type };
  } else {
    logout();
  }
};
const fetchRequest = async (endPoint, method = "GET") => {
  const { accessToken, token_type } = getAccessToken();
  const url = `${BASE_API}/${endPoint}`;
  const result = await fetch(url, {
    headers: {
      Authorization: `${token_type} ${accessToken}`,
    },
    method,
  });
  return result.json();
};
export { fetchRequest };
