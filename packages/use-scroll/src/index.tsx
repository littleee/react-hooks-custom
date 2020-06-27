import { useState, useEffect } from 'react';

type ScrollType = {
  scrollX: number;
  scrollY: number;
}

const useScroll = (): ScrollType => {
  const [scroll, setScroll] = useState<ScrollType>({
    scrollX: 0,
    scrollY: 0
  });
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  },[]);
  const scrollHandler = () => {
    const supportPageOffset = window.pageXOffset !== undefined;
    const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    const scrollX = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    const scrollY = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    setScroll({scrollX, scrollY});
  };
  return scroll;
};

export default useScroll;
