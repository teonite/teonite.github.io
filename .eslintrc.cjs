module.exports = {
  extends: ["plugin:astro/recommended"],
  plugin: ["astro"],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "max-len": [
          "error",
          {
            code: 90,
            comments: 140,
            tabWidth: 2,
            ignorePattern: "^import .* |.*LL\\..*|.*d=.* | *from .*",
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreTemplateLiterals: true,
          },
        ],
      },
    },
    // ...
  ],
};
