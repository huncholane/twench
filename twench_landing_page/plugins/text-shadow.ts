import plugin from "tailwindcss/plugin";

const textShadowPlugin = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      "text-shadow": (value: string) => ({
        textShadow: `${value} ${value} 0 #000, -${value} -${value} 0 #000, ${value} -${value} 0 #000,
        -${value} ${value} 0 #000, ${value} 0 0 #000, -${value} 0 0 #000, 0 ${value} 0 #000, 0 -${value} 0 #000;`,
      }),
    },
    {
      values: theme("textShadow"),
    }
  );
});

export default textShadowPlugin;
