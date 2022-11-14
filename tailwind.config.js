/**  @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            colors: {
                darkText: '#434343',
                purpleText: '#A02279',
                whiteText: '#ffffff',
                blackText: '#000000',
                lightGrey: '#F1F3F9',
                midGrey: '#F8F9FA',
                transparent:
                    'rgba(64, 64, 64, 0.3)',
                borderColor: '#D7D7D7'
            },
            width: {
                90: '90vw',
            },
        },
    },
    plugins: [],
}
