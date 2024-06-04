import React from "react";

import { Button } from "app2/button";

export const App = () => {
  return (
    <div className="content">
      App 1
      <Button />
    </div>
  );
};

export function Button1() {
  return <button>App1 button</button>;
}
