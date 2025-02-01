import { download } from 'express/lib/response';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#E7E6ED",
        auditContainerBg: "#496B92",
        downloadBtnBg: "#1C2458",
        tableRowBg: "#DAEAF5",
        tableHeadBg: "#EEACA1",
        attendantListHeadingBg: "#E4E2EA",
        tableListChildBg: "#F0EEF4",
        minorBg: "#EEACA1",
        majorBg: "#FF5263",
        labelColor1: "#C57315",
        labelColor2: "#EC671F",
        labelColor3: "#E90017",
        descriptionHeadBg: "#DBD8E4",
        errorTextColor: "#FF8C97",
        successTextColor: "#18B755",
        partialTextColor: "#F1BC7E",
      },
    },
  },
  plugins: [],
};

