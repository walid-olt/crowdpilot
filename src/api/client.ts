import axios from "axios";
import { QueryClient } from "@tanstack/react-query";
export const apiClient = axios.create({
  baseURL: "/api",
  timeout: 10_000,
});

export function setAuthToken(token: string | null) {
  if (token) {
    apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
    return;
  }

  delete apiClient.defaults.headers.common.Authorization;
}

export const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 3 } },
});
