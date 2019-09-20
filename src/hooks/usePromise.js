import { useEffect, useState, useRef } from 'react';

export const STATE = {
  ERROR: 'ERROR',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS'
};

const usePromise = (promise, ...args) => {
  const [result, setResult] = useState(undefined);
  const [state, setState] = useState(STATE.LOADING);
  const mounted = useRef(false);
  const didCancel = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const resolve = async () => {
    try {
      const r = await promise(...args);

      if (mounted.current && !didCancel.current) {
        setResult(r);
        setState(STATE.SUCCESS);
      }
    } catch (e) {
      if (mounted.current && !didCancel.current) {
        // eslint-disable-next-line no-console
        console.error('Unable to resolve promise', e);
        setState(STATE.ERROR);
      }
    }
  };

  useEffect(() => {
    resolve();

    return () => {
      didCancel.current = true;
    };
  }, [promise]);

  return [result, state];
};

export default usePromise;
