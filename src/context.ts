import React from "react";

interface ContextProps {
  breakpoint?: {
    index: number;
    value: number;
  };
  breakpoints?: number[];
  rowGap?: string[];
  columnGap?: string[];
  colspan?: number[];
  media?: any[];
  controlIsVisible?: boolean;
  controlColor?: string;
}

const Context = React.createContext<ContextProps>({});

function useRaster(): ContextProps {
  return React.useContext(Context);
}

export { useRaster };

export default Context;
