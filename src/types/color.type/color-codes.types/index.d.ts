type RGB = `#${string}`;
type HEX =
  | `rgb(${number}, ${number}, ${number})`
  | `rgb(${number},${number},${number})`;
type RGBA =
  | `rgba(${number}, ${number}, ${number}, ${number})`
  | `rgba(${number},${number},${number},${number})`;
type HSL =
  | `hsl(${number}, ${number}%, ${number}%)`
  | `hsl(${number},${number}%,${number}%)`;
type HSLA =
  | `hsla(${number}, ${number}%, ${number}%, ${number})`
  | `hsla(${number},${number}%,${number}%,${number})`;
