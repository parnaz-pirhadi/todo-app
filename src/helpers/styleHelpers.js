export const color = (name, shade = false) => (props) =>
  shade
    ? `${props.theme.colors[name]?.[shade]}`
    : `${props.theme.colors[name]}`;

export const hexToRgb = (hex) => {
  if (!hex) {
    return {
      red: 0,
      green: 0,
      blue: 0,
    };
  }

  const hexColor = hex.replace('#', '');
  return {
    red: parseInt(hexColor.substr(0, 2), 16),
    green: parseInt(hexColor.substr(2, 2), 16),
    blue: parseInt(hexColor.substr(4, 2), 16),
  };
};

export const makeRgba = (opacity, name, shade = false) => (props) => {
  const rgb = hexToRgb(color(name, shade)(props));
  return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${opacity})`;
};
