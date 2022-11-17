import React, { createContext } from "react";

type Theme = { colors?: { [key: string]: string } };

const INITIAL_COLORS = {
  colors: {
    primary: "#007bff",
    danger: "#dc3545",
  },
};

export const ThemeContext = createContext<Required<Theme>>({
  ...INITIAL_COLORS,
});

type Props = {
  theme?: Theme;
  children: React.ReactNode;
};

export const Provider: React.FC<Props> = ({ theme, children }) => {
  return (
    <ThemeContext.Provider value={{ ...INITIAL_COLORS, ...theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
