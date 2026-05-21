import { apiClient } from "@/api/client";
import type { ProjectResponse, ProjectsResponse } from "@/types/api";
import { AxiosError } from "axios";

export const getProjects = async (): Promise<ProjectsResponse> => {
  try {
    const { data } = await apiClient.get<ProjectsResponse>("/projects/mine");
    return data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data.message, {
        cause: e,
        ...e.response?.data,
      });
    } else {
      throw e;
    }
  }
};

export const deleteProject = async (id: string): Promise<ProjectResponse> => {
  try {
    const { data } = await apiClient.delete<ProjectResponse>(`/projects/${id}`);
    return data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data.message, {
        cause: e,
        ...e.response?.data,
      });
    } else {
      throw e;
    }
  }
};

export const getProjectById = async (id: string) => {
  try {
    const { data } = await apiClient.get<ProjectResponse>(`/projects/${id}`);
    return data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data.message, {
        cause: e,
        ...e.response?.data,
      });
    } else {
      throw e;
    }
  }
};
