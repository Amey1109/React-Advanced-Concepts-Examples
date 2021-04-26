import React, { useState } from "react";
import secureAxios from "./SecureAxios";
export default function UsingAxios() {
  const [data, setData] = useState({});
  const getData = () => {
    secureAxios({
      method: "GET",
      URL: "/posts",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <button onClick={() => getData()}>GET DATA</button>
    </div>
  );
}
