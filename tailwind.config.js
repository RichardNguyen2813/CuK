/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      margin:{
        "neg-4" : '-4px',
        
      },
    },
    colors: {
      "dk-gray-100": "#F3F4F6",
      "dk-gray-200": "#E5E7EB",
      "dk-gray-300": "#D1D5DB",
      "dk-gray-400": "#9CA3AF",
      "dk-gray-500": "#6B7280",
      "dk-gray-600": "#4B5563",
      "dk-gray-700": "#374151",
      "dk-gray-800": "#1F2937",
      "dk-gray-900": "#111827",
      "dk-dark-bg": "#313348",
      "dk-darker-bg": "#2a2b3d",
      "navbar-bg-color": "#6f6486",
      "sidebar-bg-color": "#252636",
      "purple-1": "rgb(96,9,240)",
      "white" : "rgb(255 255 255)",
      "violet-400"	: "rgb(167 139 250)",
      "violet-500"	: "rgb(139 92 246)",
      "violet-600"	: "rgb(124 58 237)",
      "violet-700"	: "rgb(109 40 217)",
      "violet-800"	: "rgb(91 33 182)",
      "violet-900"	: "rgb(76 29 149)",
      "violet-950"	: "rgb(46 16 101)"
    },
  },
  plugins: [],
};
