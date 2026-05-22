import { apiClient } from "@/api/client";
import type { ProjectsResponse } from "@/types/api";
import { AxiosError } from "axios";

export const getProjects = async (): Promise<ProjectsResponse> => {
  try {
    const { data } = await apiClient.get<ProjectsResponse>("/projects/mine");
    return data;
  } catch (e) {
    console.error("Error fetching projects:", e);
    if (e instanceof AxiosError) {
      throw new Error(`Failed to fetch projects: ${e.message}`, {
        cause: e,
        ...e.response?.data,
      });
    } else {
      throw e;
    }
  }
};
