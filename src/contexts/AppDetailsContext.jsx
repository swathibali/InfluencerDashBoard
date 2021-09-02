import { createContext } from 'react';
import data from '../data'
export const AppDetailsContext = createContext({
    appDetails: data?.socialmedia?.instagram,
    setAppDetails: () => {}
  });
