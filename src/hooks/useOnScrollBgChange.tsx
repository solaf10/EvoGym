import { useEffect, useState } from "react";

const useOnScrollBgChange = () => {
  const [isTop, setIsTop] = useState<boolean>(true);
  useEffect(() => {
    function scrollListener() {
      if (window.scrollY == 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    }
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return isTop;
};

export default useOnScrollBgChange;
