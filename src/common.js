const BASE_AUTH_URL = "https://accounts.spotify.com";
const BASE_API = "https://api.spotify.com/v1";

const ACCESS_TOKEN = "access_token";
const EXPIRES_IN = "expires_in";
const TOKEN_TYPE = "token_type";
const REFRESH_TOKEN = "refersh_token";
const END_POINTS = {
  AUTH: "authorize",
  TOKEN: "api/token",
  FEATURED_PLAYLIST: "browse/featured-playlists?limit=10",
  DINNER_PLAYLIST: "browse/categories/dinner/playlists?limit=10",
  PARTY_PLAYLIST: "browse/categories/party/playlists?limit=10",
  PLAYLIST: "playlists",
  USER_PROFILE: "me",
};

const SECTION = {
  DASHBOARD: "dashboard",
  PLAYLIST: "playlists",
};
function logout() {
  localStorage.clear();
  window.location.href = "/login/index.html";
}

function getItemFromlocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
function saveItemLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export {
  BASE_API,
  BASE_AUTH_URL,
  END_POINTS,
  ACCESS_TOKEN,
  EXPIRES_IN,
  TOKEN_TYPE,
  REFRESH_TOKEN,
  SECTION,
  logout,
  saveItemLocalStorage,
  getItemFromlocalStorage,
};
