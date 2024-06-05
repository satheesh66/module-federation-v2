import React from "react";

import "./button.css";

import { Button as App3Button } from "app3/button";

export function Button() {
  return (
    <>
      <button className="app2button">App2 button</button>
      <br />
      ------ Rendered by app2 -------
      <br />
      {/* <App3Button /> */}
    </>
  );
}
