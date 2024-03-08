import React, { useState } from "react";

function Hoc({ render }) {
  const [count, setCount] = useState(0);

  const helper = () => {
    setCount(count + 1);
  };

  return render(count, helper);
}

export default Hoc;
