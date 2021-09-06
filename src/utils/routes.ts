import { API_HOST_NAME } from "./constants";

//* API ROUTES
const API_ROOT = `${API_HOST_NAME}/api`;
export const API_USER = `${API_ROOT}/users`;
export const API_BLOGPOST = `${API_ROOT}/blogs`;
export const API_LOGIN = `${API_ROOT}/auth/login`;
export const API_REGISTER = `${API_ROOT}/users`;
export const API_COMMENT = `${API_ROOT}/comments`;

export const getUserBlog = (userid: string) => `${API_USER}/${userid}/blogs`;
export const getPost = (blogid: string) => `${API_BLOGPOST}/${blogid}`;
export const getPostComments = (blogid: string) =>
  `${API_BLOGPOST}/${blogid}/comments`;
export const getComment = (commentid: string) => `${API_COMMENT}/${commentid}`;

//* PAGE ROUTES
export const ROUTER_USER_FEED_BASE = "/feed/user";
export const ROUTER_POST = "/post";
