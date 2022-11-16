import React, { createContext } from "react";

const INITIAL_COLORS = {
  primary: "#007bff",
  danger: "#dc3545",
};

export const ThemeContext = createContext<{ [key: string]: string }>(
  INITIAL_COLORS
);

type Props = {
  theme?: { [key: string]: string };
  children: React.ReactNode;
};

export const Provider: React.FC<Props> = ({ theme, children }) => {
  return (
    <ThemeContext.Provider value={{ ...INITIAL_COLORS, ...theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
