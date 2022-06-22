import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})


// /// webpack.config.js
// const {DefinePlugin} = require('webpack');

// module.exports = {
//   ...
//   plugins: [
//     new DefinePlugin({
//       'process.env.MapboxAccessToken': JSON.stringify(process.env.NODE_ENV == 'production' ? process.env.MapboxAccessTokenProd : process.env.MapboxAccessTokenDev)
//     })
//   ]
// };

// /// rollup.config.js
// const replace = require('@rollup/plugin-replace').default;

// module.exports = {
//   ...
//   plugins: [
//     replace({ 
//       'process.env.MapboxAccessToken': JSON.stringify(process.env.NODE_ENV == 'production' ? process.env.MapboxAccessTokenProd : process.env.MapboxAccessTokenDev)
//     })
//   ]
// };