import { defineConfig } from 'umi';
import routes from './router';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  devServer: {
    port: 8007,
  },
  // mfsu: {},
  extraPostCSSPlugins: [
    require('tailwindcss')({
      config: './tailwind.config.js',
    }),
    require('autoprefixer'),
  ],
});
