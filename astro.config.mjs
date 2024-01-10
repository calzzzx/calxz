import { defineConfig,squooshImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import astroI18next from 'astro-i18next'

import { remarkReadingTime } from "./src/utilsone/all";
import lazyLoadPlugin from 'rehype-plugin-image-native-lazy-loading'


// import image from '@astrojs/image'
// import { Image } from 'astro:assets'

// https://astro.build/config,网址待定,  site: '#',

// export default defineConfig({
//   integrations: [
//     tailwind(),
//     react(),
//     mdx(),
//     sitemap({
//       i18n: {
//         defaultLocale: 'zh',
//         locales: {
//           en: 'en-US',
//           zh: 'zh-CN',
//         },
//         routing: {
//           prefixDefaultLocale: false
//       },
//     }}),
//   ],
// })

// astroI18next(),

// astro-i18next
export default defineConfig({
  image: {
    domains: ["astro.build"],
    service: squooshImageService()
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [lazyLoadPlugin],
    extendDefaultPlugins: true,
  },
  integrations: [
    tailwind(),
    react(),
    sitemap(),
    mdx(),
    astroI18next(
      {
        baseLanguage: "zh",
        i18next: {
          debug: true, // convenient during development to check for missing keys
          supportedLngs: ["en", "zh"],
      },
      }
    ),
 
  ],
})