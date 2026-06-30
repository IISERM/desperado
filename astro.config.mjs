import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://iiserm.github.io',
	base: '/desperado',
	output: 'static',
	integrations: [],

	vite: {
		plugins: [tailwindcss()],
	},
});
