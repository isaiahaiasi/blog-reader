import { API_HOST_NAME } from "./constants";

const root = API_HOST_NAME + "/api";
export const USER_ROUTE = root + "/user";
export const BLOG_ROUTE = root + "/blog";
export const LOGIN_ROUTE = root + "/auth/login";
export const REGISTER_ROUTE = root + "/user";

export const getUserBlog = (userid: string) => `${USER_ROUTE}/${userid}/blog`;
