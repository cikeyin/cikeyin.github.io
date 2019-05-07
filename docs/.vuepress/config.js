module.exports = {
    title: '文物事业部',  // 设置网站标题
    description: '国信司南文物事业部团队网站',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    dest: './dist',    // 设置输出目录
    base: '/', // 设置站点根路径
    repo: 'https://github.com/txs1992/mt-blog', // 添加 github 链接
    themeConfig: {
        // 添加导航栏
        nav: [
          { text: '介绍', link: '/' },
          { text: '成果积累', link: '/blog/reg' },
          { text: '资源下载', link: '/resource/' }
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/blog/': [
                '/blog/reg',
                '/blog/markdown',
                '/blog/browserCache',
                '/blog/eventLoop',
                '/blog/promise',
                '/blog/algorithm',
            ]
        }
      }

  }