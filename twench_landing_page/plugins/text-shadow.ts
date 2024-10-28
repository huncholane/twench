import { text } from "stream/consumers";
import plugin from "tailwindcss/plugin";

function textShadow(value: string) {
  if (!value) {
    return "none";
  }
  return `${value} ${value} 0 #000, -${value} -${value} 0 #000, ${value} -${value} 0 #000, -${value} ${value} 0 #000, ${value} 0 0 #000, -${value} 0 0 #000, 0 ${value} 0 #000, 0 -${value} 0 #000`;
}

const textShadowPlugin = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "text-shadow": (value: string) => ({
          textShadow: textShadow(value),
        }),
      },
      {
        values: theme("textShadow"),
      }
    );
  },
  {
    theme: {
      textShadow: {
        DEFAULT: "1px",
        none: "0",
        sm: "2px",
        md: "3px",
        lg: "4px",
        xl: "5px",
      },
    },
  }
);

export default textShadowPlugin;
