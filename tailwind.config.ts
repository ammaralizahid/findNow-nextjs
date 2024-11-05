import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal-custom': '#20bead',
        hoverSidebarText: 'rgb(61, 77, 105)',
        sideBarText: 'rgba(61, 77, 105, 0.7)',
        customGreen: 'rgb(32, 190, 173)',
        customGreenBorder: 'rgb(136, 224, 215)',
        customGreenHover: '#eaf9f7',
        NoCustomGreen: 'rgb(32, 190, 173)',
        NoCustomHoverBtn: 'rgb(29, 172, 156)',
        dangerBtn: 'rgb(248 113 113)',
        dangerBtnHover: 'rgb(239 68 68)',
        tableStrippedClr: 'rgb(248, 249, 252)',
        customBlue: 'rgb(61, 77, 105)',
        customGrayBg: '#f6f6f6',
        customText: 'rgba(61, 77, 105, 0.8)',
        NoCustomText: 'rgba(61, 77, 105, 0.8)',
        customBackgroundBlue: 'rgb(234, 249, 247)',
        brightWhite: 'rgb(255, 255, 255)',
        lightgray: 'rgb(243, 245, 249)',
        custombgBlue: 'rgb(248, 249, 252)',
      },
      fontSize: {
        customExtraSmall: '11px',
        customSmall: '13px',
        customMedium: '14px',
        customLarge: '15px',
        customSmallMobile: '10px',
        22: '22px',
        16: '16px',
        18: '18px',
        20: '20px',
        24:  '24px',
        26: "26px",
        28: "28px",
        32: "32px",
        14: "14px",
        12: "12px",
        13: "13px",
        40: "40px",
      },
      lineHeight:{
        52: "52px"
      },
      spacing: {
        3: '12px', // 12px
        3.25: '13px', // 13px
        1.25: '5px', // 5px
        8.5: '34px', // 34px
      },
      width: {
        64: '16rem',
        16: '4rem',
        220: '220px',
        170: '170px',
        14: '15%',
        15: '15px',
        30: '30px',
        100:'100px',
        37: '37px',
        40: '40px',
        9.5: '9.5px',
        13.45: '13.45rem',
        155: '155px',
        622: '622px',
        95: '95%',
        94.95: '94.95rem',
        'panel-width': '566px',
        'panel-height': '385px',
      },
      fontWeight: {
        custom: '600',
        customweight: '500', // You can customize the name and weight here
        // You can customize the name and weight here
      },
      fontFamily: {
        "montserrat": ['Montserrat', 'sans-serif'],
        NoMontserrat: ['Montserrat', 'sans-serif'],
      },
      height: {
        pannelHeight: '385px',
        pannelWidth: '295px',
        18: '18px',
        40: '40px',
        37: '37px',
        28: '28px',
        20: '20px',
        32: '32px',
        9.5: '9.5px',
        1.85: '1.85rem',
        80: '80px',
        96: '96px',
        100: '100px',
      },
      padding: {
        custompadding: ' 7px 20px 0px;',
      },
      gridTemplateColumns: {
        // Custom grid template columns
        '49-5': '49.5% 49.5%',
      },
      zIndex: {
        999: '999',
      },
      screens: {
        sm1:{min: '320px', max: '768px'},
        ml: {min: '768px', max: '1024px'},
        xs: { min: '320px', max: '640px' },
        // sm: { min: '320px', max: '768px' },
        // md: { min: '768px', max: '1024px' },
        // lg: { min: '1024px', max: '1240px' },
        lg_1: { min: '1024px', max: '1090px' },
        xl: { min: '1240px', max: '2000px' },
      },
    },
  },
  plugins: [],
};
export default config;
