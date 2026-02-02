import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use scrollTo with instant behavior to ensure it happens immediately
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    // Also set document scroll position directly as fallback
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}
