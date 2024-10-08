// routes

import { paths } from "./routes/paths";

// API
// ----------------------------------------------------------------------

export const HOST_API = import.meta.env.VITE_HOST_API;

export const HOST_IMAGE = `https://aabio.net/api_kweli`;
// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = paths.home.page; // as '/dashboard'
// export const PATH_AFTER_LOGIN_SPACE = paths.dashboard.one;
