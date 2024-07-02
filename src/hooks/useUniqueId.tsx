import { useState } from "react";

let nextId = 0;

export function useUniqueId() {
  const [id] = useState((nextId += 1));
  return `${id}`;
}
