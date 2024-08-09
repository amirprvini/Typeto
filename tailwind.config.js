/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {},
    // colors: {
    //   // Configure your color palette here

    //   'typetoColor':{
    //     100 : '#00cecb80',
    //     200 : '#00cecb33',
    //   },
      

    // } ,
    
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '830px',
      // => @media (min-width: 830px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

     keyframes: {
        openNavBar: {
           '0%'  : {right:'-120px'} ,
           '10%'  : {right:'-108px'} , 
           '20%' :  {right:'-96px'} , 
           '30%' : {right:'-84px'} , 
           '40%' : {right:'-72px'} ,
           '50%' : {right:'-60px'} ,
           '60%' : {right:'-48px'} ,
           '70%' : {right:'-36px'} ,
           '80%' : {right:'-24px'} ,
           '90%' : {right:'-12px'} , 
           '100%': {right:'0px'}
        },
        closeNavBar: {
           '0%'  : {right:'-0px'} ,
           '10%'  : {right:'-12px'} , 
           '20%' :  {right:'-24px'} , 
           '30%' : {right:'-36px'} , 
           '40%' : {right:'-48px'} ,
           '50%' : {right:'-60px'} ,
           '60%' : {right:'-72px'} ,
           '70%' : {right:'-84px'} ,
           '80%' : {right:'-96px'} ,
           '90%' : {right:'-108px'} , 
           '100%': {right:'-120px'}
        }
      } , 

      animation: {
        closeNavBar: 'closeNavBar .5s',
        openNavBar: 'openNavBar .5s',
      }
  },
  plugins: [],
}

