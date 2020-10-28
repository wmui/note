module.exports = {
  title: 'wiki',
  description: '前端知识库',
  base: '/note/',
  themeConfig: {
    nav: [
      { text: 'H5', link: '/h5/' },
      { text: '小程序', link: '/mp/' },
    ],
    sidebar: {
      '/h5/': ['']
    }
  }
}
