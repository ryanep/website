import { useContext } from 'react';
import { ConfigContext } from '#/context/config';

export const useConfigContext = () => {
  const context = useContext(ConfigContext);

  if (!context) {
    throw new Error(
      'ConfigContext must be used within a ConfigContextProvider'
    );
  }

  return context;
};
