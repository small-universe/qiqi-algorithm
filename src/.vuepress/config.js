const sidebar = require('./lib/sidebar/')
const private = require('./private')
module.exports = {
    title: "七七算法",
    plugins: [
        require('./lib/Notification.js'),
        [require('./plugin/enhanced-search'), { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
            thirdparty: [ // 可选，默认 []
                {
                    title: '在 <span style="color: blue; ">Baidu</span> &nbsp;&nbsp;中搜索 ',
                    frontUrl: 'https://www.baidu.com/s?wd=',
                },
                {
                    title: '在 <span style="color: red; ">Google</span> 中搜索 ',
                    frontUrl: 'https://www.google.com/search?q=',
                }
            ]
        }]
    ],
    description: '算法题解',
    // root : "./hell-algorithm",
    theme: "reco",
    themeConfig: {
        logo: '/logo.png',
        sidebar,
        searchPlaceholder: "search...",
        nav: [
            {text: 'GitHub', link: 'https://github.com/small-universe/QiQi-Algorithm', icon: 'reco-github'}
        ],
        head: [
            ['link', {rel: 'shortcut icon', href: '/favicon.ico'}]
        ],
        type: 'blog',
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: '文章修订于',
        author: '南辞',
        authorAvatar: '/code.png',
        startYear: '2019',
        valineConfig: {
            visitor: false,
            enable: true,
            placeholder: "留下你的问题或者意见和建议",
            avatar: "wavatar",
            requiredFields: ['nick'],
            appId: private.valineComment.AppID,
            appKey: private.valineComment.AppKey,
        },
        noFoundPageByTencent: false
    },
    markdown: {
        lineNumbers: true,
    }
}
