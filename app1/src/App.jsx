import React from "react";

import { Button } from "app2/button";

import { Label } from "app2/label";

export const App = () => {
  return (
    <div className="content">
      App 1
      <Button />
      <Label />
    </div>
  );
};

export function Button1() {
  return <button>App1 button</button>;
}
