import React from "react";
import Hoc from "./Hoc";

function LikePost(props) {
  return (
    <div>
      <Hoc
        render={(count, click) => (
          <button onClick={click}>Like Post {count}</button>
        )}
      />
    </div>
  );
}

export default LikePost;
