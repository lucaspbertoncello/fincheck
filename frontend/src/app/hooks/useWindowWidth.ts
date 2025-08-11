import { useCallback, useEffect, useState } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return width;
}
