import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Project } from "@/types/api";

type state = {
  isEditingModalOpen: boolean;
  isDeleteModalOpen: boolean;
  currentProject: Project | null;
  projectToDelete: Project | null;
};
const initialState: state = {
  isEditingModalOpen: false,
  isDeleteModalOpen: false,
  currentProject: null,
  projectToDelete: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    openEditingModal: (state, action: PayloadAction<Project>) => {
      state.isEditingModalOpen = true;
      state.currentProject = action.payload;
    },
    closeEditingModal: (state) => {
      state.isEditingModalOpen = false;
      state.currentProject = null;
    },
    openDeleteDialogue: (state, action: PayloadAction<Project>) => {
      state.isDeleteModalOpen = true;
      state.projectToDelete = action.payload;
    },
    closeDeleteDialogue: (state) => {
      state.isDeleteModalOpen = false;
      state.currentProject = null;
    },
  },
});

export const {} = projectSlice.actions;
