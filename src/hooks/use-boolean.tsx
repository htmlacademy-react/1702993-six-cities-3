import { useState } from 'react';

export function useBoolean(initialValue = false) {
  const [isOn, setInOn] = useState(initialValue);

  return {
    isOn,
    toggle: () => setInOn((prev) => !prev)
  };
}
