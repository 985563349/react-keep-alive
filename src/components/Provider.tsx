import { useRef } from 'react';
import KeepAliveContext from './Context';

export interface KeepAliveProviderProps {
  keepAlive: any[];
  children: React.ReactNode;
}

function KeepAliveProvider({ keepAlive, children }: KeepAliveProviderProps) {
  const keepElements = useRef<any>({});

  const dropByCacheKey = (key: string) => {
    keepElements.current[key] = null;
  };

  return (
    <KeepAliveContext.Provider value={{ keepAlive, keepElements, dropByCacheKey }}>
      {children}
    </KeepAliveContext.Provider>
  );
}

export default KeepAliveProvider;
