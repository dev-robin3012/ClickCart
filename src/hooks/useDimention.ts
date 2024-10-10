import { useEffect, useState } from "react";

const useDimention = () => {
  const [dimension, setDimension] = useState({
    height: 0,
    width: 0,
  });

  const handleResize = () => {
    setDimension({ height: window.innerHeight, width: window.innerWidth });
  };

  useEffect(
    () =>
      setDimension({ height: window.innerHeight, width: window.innerWidth }),
    []
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dimension;
};

export default useDimention;
