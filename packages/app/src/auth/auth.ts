const AUTH = "auth";
interface IAuth {
  user?: string;
}
export const isValidUser = () => {
  try {
    const auth: IAuth = JSON.parse(
      globalThis.localStorage.getItem(AUTH) || "{}"
    );
    return Boolean(auth.user);
  } catch (e) {
    return false;
  }
};

export const setUser = (user: string) => {
  let auth: IAuth = {};
  try {
    JSON.parse(globalThis.localStorage.getItem(AUTH) || "{}");
  } catch (e) {
    auth = {};
  }
  auth.user = user;
  globalThis.localStorage.setItem(AUTH, JSON.stringify(auth));
};
