import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(() => {
    try {
      const stored = typeof window !== "undefined" ? localStorage.getItem(key) : null;
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(`Failed writing ${key} to localStorage`, error);
    }
  }, [key, state]);

  return [state, setState] as const;
}

export default useLocalStorage;
