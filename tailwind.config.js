/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Geist', 'system-ui', 'sans-serif'],
                mono: ['Geist Mono', 'ui-monospace', 'monospace'],
                serif: ['Instrument Serif', 'Georgia', 'serif'],
            },
            colors: {
                blue: {
                    400: '#7dede1',
                    500: '#62e6d8',
                    600: '#3fc9bb',
                    900: 'rgba(98, 230, 216, 0.16)',
                },
                mint: { DEFAULT: '#62e6d8', 400: '#7dede1', 600: '#3fc9bb' },
                human: '#ffb547',
            },
        },
    },
    plugins: [],
};
