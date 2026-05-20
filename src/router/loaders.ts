import store from "@/store/store.ts";
import { login, logout } from "@/features/auth/authSlice.ts";
import { getLogedInUser } from "@/api/service.ts";
import { setAuthToken } from "@/api/client.ts";
import { redirect } from "react-router-dom";

async function bootstrapAuthFromStorage() {
  const token = localStorage.getItem("token");
  if (!token) {
    setAuthToken(null);
    return { token: null, user: null };
  }

  setAuthToken(token);
  const { user } = store.getState().auth;
  if (user) {
    return { token, user };
  }

  try {
    const fetchedUser = await getLogedInUser(token);
    store.dispatch(login({ user: fetchedUser, token }));
    return { token, user: fetchedUser };
  } catch {
    localStorage.removeItem("token");
    setAuthToken(null);
    store.dispatch(logout());
    return { token: null, user: null };
  }
}

export async function publicLoader() {
  const { token, user } = await bootstrapAuthFromStorage();
  if (user || token) {
    return redirect("/app/dashboard");
  }
  return null;
}

export async function authLoader() {
  const { token, user } = await bootstrapAuthFromStorage();
  if (!token || !user) {
    return redirect("/login");
  }
  return null;
}
