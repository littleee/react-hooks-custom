import { useState, useEffect } from 'react';

const useScroll = (): number => {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  },[]);
  const scrollHandler = (): void => {
    setScroll(window.scrollY);
  };
  return scroll;
};

export default useScroll;
