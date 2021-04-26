import { useState } from "react";

function useInput(InitialValue) {
  const [value, setValue] = useState(InitialValue);

  const reset = () => {
    setValue(InitialValue);
  };

  const bind = {
    value: value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, bind, reset];
}

export default useInput;
