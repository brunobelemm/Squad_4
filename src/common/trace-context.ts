import { AsyncLocalStorage } from 'async_hooks';

const asyncLocalStorage = new AsyncLocalStorage<Map<string, string>>();

export const traceContext = {
  run: (traceId: string, callback: () => void) => {
    const store = new Map<string, string>();
    store.set('trace_id', traceId);
    asyncLocalStorage.run(store, callback);
  },
  getTraceId: (): string | undefined => {
    const store = asyncLocalStorage.getStore();
    return store?.get('trace_id');
  },
};