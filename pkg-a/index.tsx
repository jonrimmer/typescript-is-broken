import { Button } from "pkg-b";
import * as React from "react";

export const App = () => (
  <Button thisPropDoesNotExist={"TypeScript is broken"} />
);
