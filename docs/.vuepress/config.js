module.exports = {
  title: "LPieces's Blog",
  description : "Love Learning And Love Life.",
  theme: 'reco',
  author: 'LPieces',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'icon', href: 'https://p9-passport.byteacctimg.com/img/user-avatar/ed78b80d2ce13a5eddc5f007c926c424~300x300.image' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    // 项目开始时间
    startYear: '2021',
    type: 'blog',
    author: 'LPieces',
    logo: 'https://p9-passport.byteacctimg.com/img/user-avatar/ed78b80d2ce13a5eddc5f007c926c424~300x300.image',
    authorAvatar: 'https://p9-passport.byteacctimg.com/img/user-avatar/ed78b80d2ce13a5eddc5f007c926c424~300x300.image',
    nav: [
      {text: '主页', link: '/', icon: 'reco-home'},
      {text: '时间轴', link: '/timeline/', icon: 'reco-date'},
      {
        text: '联系', items: [
          { text: 'Github', link: 'https://github.com/LPieces', icon: 'reco-github' },
          { text: '稀土掘金', link: 'https://juejin.cn/user/176367608019806', icon: 'reco-juejin' }
        ], icon: 'reco-message'
      },
      // {text: '关于我', link: '/about/', icon: 'reco-account'}
    ],
    friendLink: [
      {
        title: 'JokerLZL',
        desc: '一个前端开发人员',
        logo: "https://jokerlzl.co/images/avatar.webp",
        link: 'https://jokerlzl.co'
      }
    ],
    subSidebar: 'auto',
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/LPieces' },
        { icon: 'reco-juejin', link: 'https://juejin.cn/user/176367608019806' }
      ]
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    // 中文转换为音译链接插件
    ['permalink-pinyin'],
    // 音乐播放器
    [
      "meting",
      {
        meting: {
          // 网易
          server: "netease",
          // 读取歌单列表
          type: "playlist",
          mid: "4888645755",
        },
        // 不配置该项的话不会出现全局播放器
        aplayer: {
          // 吸底模式
          fixed: true,
          mini: true,
          // 自动播放
          autoplay: true,
          // 歌曲栏折叠
          listFolded: true,
          // 播放顺序为随机
          order: "random",
          // 初始音量
          volume: 0.1,
          // 关闭歌词显示
          lrcType: 0,
        },
        mobile: {
          // 手机端去掉cover图
          cover: false,
        },
      },
    ],
    [
      "dynamic-title",
      {
        // Icon 建议根据自身需求选择
        showIcon: "",
        showText: "(●´∀｀●)嘿嘿~~ ",
        hideIcon: "",
        hideText: "(●—●)不要走啊，再看看！",
        recoverTime: 2000,
      },
    ]
  ]
}