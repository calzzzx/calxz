/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: 'zh',
  locales: ['en', 'zh'],
  namespaces: [
    'home',
    'footer',
    'nav',
    'about',
    'blogs',
    'contact',
    'skills',
    'inprogress',
    'projects',
    'stack',
    'seo',
    '404',
  ],
  load: ['server'],
  i18nextClient: {
    detection: {
      order: ['querystring', 'path'],
    },
  },
}
