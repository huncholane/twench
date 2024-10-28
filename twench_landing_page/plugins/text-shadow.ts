import plugin from "tailwindcss/plugin";

const textShadowPlugin = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      "text-shadow": (value: string) => ({
        textShadow: value,
      }),
    },
    {
      values: theme("textShadow"),
    }
  );
});

export default textShadowPlugin;
