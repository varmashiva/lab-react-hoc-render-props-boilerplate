import React from "react";
import Hoc from "./Hoc";

function LikeImage(props) {
  return (
    <div>
      <Hoc
        render={(count, click) => (
          <button onClick={click}>Like Image {count}</button>
        )}
      />
    </div>
  );
}

export default LikeImage;
