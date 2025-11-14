import { useMemo } from 'react';

export function useBrowserDetection() {
  const isSafari = useMemo(() => {
    return (
      typeof navigator !== 'undefined' &&
      navigator.userAgent.indexOf("Safari") > -1 && 
      navigator.userAgent.indexOf("Chrome") === -1
    );
  }, []);

  return { isSafari };
}
