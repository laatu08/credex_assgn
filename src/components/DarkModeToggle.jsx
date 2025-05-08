import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-700">
      {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-600" />}
    </button>
  );
};

export default DarkModeToggle;
