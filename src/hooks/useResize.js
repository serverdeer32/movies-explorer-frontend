import { useEffect, useCallback, useState } from 'react';

export function useResize() {
  const getScreenWidth = useCallback(() => window.innerWidth, []);

  const [screenWidth, setScreenWidth] = useState(getScreenWidth());

  useEffect(() => {
    function handleResize() {
      const val = getScreenWidth()
      setScreenWidth(val); 
    };

    window.addEventListener('resize', resizeController, false);

    let resizeTimer;

    function resizeController() {
      if (!resizeTimer) {
        resizeTimer = setTimeout(() => {
          resizeTimer = null;
          handleResize();
        }, 500);
      }
    };

    return () => window.removeEventListener('resize', resizeController);
  }, [getScreenWidth]);

  return screenWidth;
}