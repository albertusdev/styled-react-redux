/*
  All style variables are declared here
  - Fonts are used for font-family names
  - Colors are HEX values / rgb() values
  - Linear-gradients are linear-gradient CSS string
  - Declare all font-family names into const here and export it
*/

export const SFProDisplay = 'SFProDisplay';

const breakpoint = {
  mobile: '32rem',
  tablet: '48rem',
  desktop: '60rem',
  largerDesktop: '72rem',
};

const color = {
  black: '#000',
  white: '#FFF',
};

const font = {
  SFProDisplay,
};

const fontSize = {
  small: '1rem',
  medium: '1.5rem',
  large: '2rem',
  jumbo: '3rem',
  huge: '5rem',
};

const linearGradient = {
  
};

const margin = {
  small: '1rem',
  medium: '2rem',
  large: '3rem',
};

const transition = {
  short: '1s',
  long: '2s',
};

const theme = {
  breakpoint,
  color,
  font,
  fontSize,
  linearGradient,
  margin,
  transition,
};

export default theme;
