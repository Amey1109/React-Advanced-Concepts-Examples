import React from "react";
import useInput from "./useInput";

function InputForm() {
  const [firstname, bindFirstName, resetFirstName] = useInput("");
  const [lastname, bindLastName, resetLastName] = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${firstname} ${lastname}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>FirstName</label>
          <input type="text" {...bindFirstName} />
        </div>

        <div>
          <label>Last Name</label>
          <input type="text" {...bindLastName} />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default InputForm;
