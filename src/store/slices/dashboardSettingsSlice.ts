import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface DashboardSettings {
  theme: 'light' | 'dark';
  showSidebar: boolean;
  language: string;
}

const initialState: DashboardSettings = {
  theme: 'light',
  showSidebar: true,
  language: 'es',
};

const dashboardSettingsSlice = createSlice({
  name: 'dashboardSettings',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { toggleSidebar, setTheme, setLanguage } = dashboardSettingsSlice.actions;
export default dashboardSettingsSlice.reducer;