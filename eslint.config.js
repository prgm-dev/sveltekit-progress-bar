import js from "@eslint/js";
import ts from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
import globals from "globals";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs["flat/recommended"],
	{
		ignores: [
			"package/**",
			".env",
			".env.*",
			"!.env.example",
			// Ignore files for PNPM, NPM and YARN
			"pnpm-lock.yaml",
			"package-lock.json",
			"yarn.lock",
		],
	},
	{
		languageOptions: {
			ecmaVersion: 2020,
			globals: {
				...globals.browser,
				...globals.es2020,
				...globals.node,
			},
		},
	},
	{
		files: ["**/*.svelte"],
		languageOptions: {
			parserOptions: {
				parser: ts.parser,
			},
		},
	},
	{
		ignores: ["build/", ".svelte-kit/", "package/", "vite.config.ts.*"],
	},

	// Custom

	{
		// Allow $bindable, otherwise ESLint believes it's an undefined variable
		files: ["*.svelte", "*.svelte.ts", "*.svelte.js"],
		globals: { $bindable: "readonly" },
	},
];
