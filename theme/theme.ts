import color from './colors';

export interface Theme {
  color: typeof color;
}

const theme: Theme = {
  color,
};

export default theme;
