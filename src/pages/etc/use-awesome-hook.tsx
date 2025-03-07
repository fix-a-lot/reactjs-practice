import './weird-component';
import {useEffect, useState} from 'react';

export default function useAwesomeHook() {
  const [loadingStatus, setLoadingStatus] = useState<'unknown' | 'loading' | 'ready'>('unknown');

  useEffect(() => {
    setLoadingStatus('loading');
    const intervalId = setInterval(() => {
      if (typeof window.jQuery !== 'undefined') {
        setLoadingStatus('ready');
        clearInterval(intervalId);
      }
    }, 500);
  }, []);

  return {
    loadingStatus
  };
}
