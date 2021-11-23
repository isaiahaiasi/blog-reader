// useStickyState hook
// a useState hook persisted by localStorage
// a refinement of my initial implementation of this concept,
// which I wrote prior to reading this blog post:
// https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/

import React, { useEffect, useState } from "react";

// If retrieved value is not JSON-serializable, defaultValue is returned instead
export default function useStickyState<T>(defaultValue: T, key: string) {
  const [value, setValue] = useState<T>(() => {
    const stickyValue = window.localStorage.getItem(key);

    try {
      return JSON.parse(stickyValue);
    } catch (err) {
      console.warn("stickyValue is not JSON-serializable!");
      return defaultValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [value: T, setValue: React.Dispatch<T>];
}
