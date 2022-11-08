/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{vue,ts,css}',
        './index.html',
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '1rem',
            },
            fontFamily: {
                title: ['Expletus', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
