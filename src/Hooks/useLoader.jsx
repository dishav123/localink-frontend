// hooks/useLoader.js
import { useState } from "react";

export function useLoader() {
  const [loading, setLoading] = useState(false);

  const withLoader = async (asyncFn, delayMs = 1000) => {
    setLoading(true);
    try {
      await asyncFn();
      await new Promise((res) => setTimeout(res, delayMs)); // let animation breathe
    } finally {
      setLoading(false);
    }
  };

  return { loading, withLoader };
}