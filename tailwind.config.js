/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{vue,ts,css}',
        './index.html',
    ],

    safelist: [
        'list-move',
        'list-enter-active',
        'list-leave-active',
        'list-enter-from,',
        'list-leave-to',
        'list-leave-active',
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
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1024px',
                '2xl': '1024px',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
