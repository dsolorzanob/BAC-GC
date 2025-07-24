import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import dashboardSettingsReducer from './slices/dashboardSettingsSlice';
import dashboardDataReducer from './slices/dashboardDataSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboardSettings: dashboardSettingsReducer,
    dashboardData: dashboardDataReducer,
  },
});

// Tipos para hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
