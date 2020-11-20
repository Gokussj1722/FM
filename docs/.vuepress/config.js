// .vuepress/config.js

const { description } = require('../../package')
module.exports = {
  title: 'FM WORLD Nicaragua',
  //plugins: ['vuepress-plugin-export'],
   head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}]
  ],
   
  locales: {
    '/': { lang: 'es-ES'}
      },
 
  //base: '/fmworld-nicaragua/',
   themeConfig: {    
    docsDir: 'docs',    
    logo: '/main.png',
      locales: {
      '/':{
    selectText: 'Lenguaje',
    label:'Español',
    sidebar: [
       '/',
       '/hombres',
       '/mujer',
       '/unisex'
		 
    ],
    plugins: [
      '@vuepress/plugin-back-to-top',
      '@vuepress/plugin-medium-zoom',
    ],
    sidebarDepth: 1, //Controla los sub niveles en las droplists
    displayAllHeaders: false, // Default: false
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Hombres', link: '/hombres'},     
      { text: 'Mujeres', link: '/mujer'},
      { text: 'Unisex', link: '/unisex'},
      { text: 'Facebook', link: 'https://www.facebook.com/fmworld.nicaragua'},
      { text: 'Instagram', link: 'https://www.instagram.com/p/CHK5n_wnm2f/?utm_source=ig_web_copy_link'},
      { text: 'Haz tu pedido aquí', link: 'https://wa.me/50588506541'}
    ]
  } //QUITAR ESTA LLAVE PARA MULTIIDIOMA
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: true },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2, 3] },
    config: md => {
      // use more markdown-it plugins!
      md.set({html: true})
      md.use(require("markdown-it-katex"));
      md.use(require('markdown-it-task-lists'));
      md.use(require("markdown-it-plantuml"));
      md.use(require("markdown-it-admonition"));
      // use for easy syntax mermaid diagrams
 
    }
  }
}
}