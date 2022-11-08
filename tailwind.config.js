/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{vue,ts}',
        './index.html',
    ],
    theme: {
        extend: {
            container: {
                center: true,
            },
        },
    },
    plugins: [],
};
