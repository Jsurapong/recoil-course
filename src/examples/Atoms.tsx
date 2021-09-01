import { useState } from "react";

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  

  return (
    <input
      type="checkbox"
      checked={darkMode}
      onChange={(e) => setDarkMode(e.currentTarget.checked)}
    />
  );
};

const Button = () => {
  return <button>My UI Button</button>;
};

export const Atoms = () => {
  return (
    <div>
      <div>
        <DarkModeSwitch />
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
};
