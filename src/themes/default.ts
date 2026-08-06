import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  fonts: {
    // Actual font-family (from next/font) is applied via the wrapper div in _app.tsx;
    // this is just the base fallback stack.
    title: "system-ui, sans-serif",
    main: "system-ui, sans-serif"
  },
  // Colors for layout
  colors: {
    primary1: "#FFFFFF",
    background1: "#000000",
    accent1: "hsl(0,0%,70%)",
    button: "hsl(0,0%,20%)",
    background2: "hsl(0,0%,10%)",
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },
};

export default theme;
