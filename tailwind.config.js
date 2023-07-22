/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      
      colors:{
        //======principal element ==========
        "White":"hsl(0, 0%, 100%)",
        "Pale_blue":"hsl(221, 100%, 96%)",
        "Light_lavender":"hsl(241, 100%, 89%)",
        "Dark_gray_blue":"hsl(224, 30%, 27%)",

        //=======items element colors =========
        "Light_red": "hsl(0, 100%, 67%)",
        'Orangey_yellow': 'hsl(39, 100%, 56%)',
        "Green_teal": "hsl(166, 100%, 37%)",
        "Cobalt_blue": "hsl(234, 85%, 45%)",
        //=========background element colors ========
        "Lightred": "hsla(0, 100%, 67%,0.25)",
        'Orangeyyellow':'hsla(39, 100%, 56%,0.25)',
        "Greenteal": "hsla(166, 100%, 37%,0.22)",
        "Cobaltblue": "hsla(234, 85%, 45%,0.22)",

          // ==========background gradient=========
        "Light_slate_blue": "hsl(241, 100%, 67%)",
        "Light_royal_blue":"hsl(241, 81%, 54%)",
            // ==========background color circle ========
        "Violet_blue":"hsla(256, 72%, 46%, 1)",
        "Persian_blue":"hsla(241, 72%, 46%, 0.3)",

      },
     
      
    },
  },
  plugins: [],
}

