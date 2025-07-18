import { useState } from 'react';

export function useBoolean(initialValue = false) {
  const [isOn, setInOn] = useState(initialValue);

  return {
    isOn,
    on: () => setInOn(true),
    toggle: () => setInOn((prev) => !prev)
  };
}
