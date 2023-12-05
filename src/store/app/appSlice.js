import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isSaving: false,
    messageSaved: "",
    reports: [],
    active: null,
  },
  reducers: {
    addNewEmptyReport: (state, action) => {
      state.reports.push(action.payload);
      state.isSaving = true;
    },
    setActiveReport: (state, action) => {
      state.active = action.payload;
    },
    setReports: (state, action) => {
      state.reports = action.payload;
    },
    setSaving: (state) => {},
    updateReport: (state, action) => {},
    deleteReportById: (state, action) => {},
  },
});

export const {
  addNewEmptyReport,
  setActiveReport,
  setReports,
  setSaving,
  updateReport,
  deleteReportById,
} = appSlice.actions;
