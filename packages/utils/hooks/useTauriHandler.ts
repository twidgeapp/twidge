/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { invoke } from '@tauri-apps/api/tauri';
import { useEffect, useState } from 'react';

/**
 * React hook to send tauri events,
 * and receive responses from the rust side.
 * Helps to avoid the need to use the `invoke` function.
 * Exposes send, result and sent variables to the component.
 * Also exposes a cache handler along with a cache time to always show the latest and greatest data
 * @param name The name of the event.
 * @param args The arguments to pass to the event.
 * @param invalidateCache Whether to invalidate the cache.
 * @param invalidateTime The time to invalidate the cache at intervals.
 */
function useTauriHandler<T>({
  name, args, invalidateCache, invalidateTime,
}: {
    name: string;
    args?: any;
    invalidateCache?: boolean;
    invalidateTime?: number;
}): {
    send: (args?: any) => void;
    result: T | undefined;
    sent: boolean;
} {
  const [result, setResult] = useState<T>();
  const [sent, setSent] = useState(false);

  const send = async () => {
    const result: any = await invoke(name, args);
    setResult(JSON.parse(result));
    setSent(true);
  };

  useEffect(() => {
    // check if invalidateCache is not undefined and is set to true
    if (invalidateCache != null && invalidateCache === true) {
      // check if invaldeTime is not undefined and is set to a number
      if (!invalidateTime) throw new Error('invalidateTime is required when invalidateCache is true');

      setInterval(() => {
        setSent(false);
        send();
      }, invalidateTime! * 1000);
    }
  }, []);

  return { send, result, sent };
}

export default useTauriHandler;
