import { useSelector } from 'react-redux';
import type { RootState } from '../store';

import { useDispatch } from 'react-redux';
import { setTheme } from '../store/slices/dashboardSettingsSlice';

export const useTheme = () => {
  const theme = useSelector((state: RootState) => state.dashboardSettings.theme);
  const dispatch = useDispatch();
  
  const updateTheme = (newTheme: 'light' | 'dark' | 'system') => {
    dispatch(setTheme(newTheme));
  };
  
  return { theme, setTheme: updateTheme };
};


export const useDashboardSettings = () => {
  return useSelector((state: RootState) => state.dashboardSettings);
}; 