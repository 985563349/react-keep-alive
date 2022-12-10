import { createContext } from 'react';

export interface KeepAliveContextValue {
  keepAlive: any[];
  keepElements?: any;
  dropByCacheKey?: (key: string) => void;
}

const KeepAliveContext = createContext<KeepAliveContextValue>(null as any);

export type KeepAliveContextInstance = typeof KeepAliveContext;

if (process.env.NODE_ENV !== 'production') {
  KeepAliveContext.displayName = 'KeepAlive';
}

export default KeepAliveContext;
