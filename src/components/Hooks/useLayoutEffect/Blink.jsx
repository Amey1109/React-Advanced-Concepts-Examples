import React, { useEffect, useLayoutEffect, useState } from "react";

export const Blink = () => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  // Uncomment this code to see the difference

  //   useEffect(() => {
  //     if (value === 0) {
  //       setValue(10 + Math.random() * 200);
  //     }
  //   }, [value]);
  

  //In Case of UseEffect -->
  //The screen will render when the value becames '0'  thats the reason you will see the flicker 

  //In Case of UseLayoutEffect -->
  //The Screen will render only after the operation is completed

  return <div onClick={() => setValue(0)}>{value}</div>;
};
