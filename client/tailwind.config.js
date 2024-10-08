/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    safelist: ["col-span-1", "col-span-2", "col-span-3", "col-span-4", "col-span-5", "col-span-6", "col-span-7", "col-span-8", "col-span-9", "col-span-10", "text-Teal", "text-Red", "text-Lavender", "text-Green", "text-Blue", "text-Yellow", "text-Pink", "bg-Red", "bg-Green", "bg-Blue", "bg-Pink", "bg-Yellow", "bg-Teal", "bg-Peach"],
    theme: {
        extend: {
            keyframes: {
                animatedBlob: {
                    '0%, 100%': {
                        borderRadius: '80% 50% 50% 70% / 70% 60% 70% 50%'
                    },
                    '33%': {
                        borderRadius: '50% 80% 90% 65% / 60% 100% 70% 60%'
                    },
                    '66%': {
                        borderRadius: '80% 50% 60% 90% / 90% 60% 60% 70%'
                    }
                }
            },
            animation: {
                animatedBlob: 'animatedBlob 3s ease-in infinite'
            },
            colors: {
                Rosewater: "#f5e0dc",
                Flamingo: "#f2cdcd",
                Pink: "#f5c2e7",
                Mauve: "#cba6f7",
                Red: "#f38ba8",
                Maroon: "#eba0ac",
                Peach: "#fab387",
                Yellow: "#f9e2af",
                Green: "#a6e3a1",
                Teal: "#94e2d5",
                Sky: "#89dceb",
                Sapphire: "#74c7ec",
                Blue: "#89b4fa",
                Lavender: "#b4befe",
                Text: "#cdd6f4",
                Subtext1: "#bac2de",
                Subtext0: "#a6adc8",
                Overlay2: "#9399b2",
                Overlay1: "#7f849c",
                Overlay0: "#6c7086",
                Surface2: "#585b70",
                Surface1: "#45475a",
                Surface0: "#313244",
                Base: "#1e1e2e",
                Mantle: "#181825",
                Crust: "#11111b",
            },
        }, plugins: [],
    },
};
