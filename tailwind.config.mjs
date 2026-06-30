export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg:           '#0c0b09',
        surface:      '#141210',
        'surface-up': '#1e1b15',
        border:       '#2e2a21',
        gold:         '#c9a84c',
        'gold-light': '#e8c97a',
        'gold-dim':   '#8a6f2e',
        teal:         '#2d5a6b',
        'teal-dim':   '#1e3d4a',
        parchment:    '#e8dcc8',
        muted:        '#a89880',
        dim:          '#6b5f50',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:  ['Lora', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        mono:  ['JetBrains Mono', 'monospace'],
      },
    },
  },
};