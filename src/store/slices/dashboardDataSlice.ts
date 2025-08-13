import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface DashboardData {
  totalUsers: number;
  activeSessions: number;
  lastUpdated: string;
}

const initialState: DashboardData = {
  totalUsers: 1000,
  activeSessions: 123,
  lastUpdated: new Date().toISOString(),
};

const dashboardDataSlice = createSlice({
  name: 'dashboardData',
  initialState,
  reducers: {
    // @ts-expect-error - This is a workaround to fix the type error
    setDashboardData: (state, action: PayloadAction<DashboardData>) => {
      return action.payload;
    },
  },
});

export const { setDashboardData } = dashboardDataSlice.actions;
export default dashboardDataSlice.reducer;
