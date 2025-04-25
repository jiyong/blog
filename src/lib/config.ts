export const config = {
  site: {
    title: "Jiyong的博客",
    name: "Jiyong的博客",
    description: "学习、生活、记录",
    keywords: ["Jiyong", "AI", "Full Stack Developer"],
    url: "https://jiyong.me",
    baseUrl: "https://jiyong.me",
    image: "https://xxx.com/og-image.png",
    favicon: {
      ico: "/favicon.ico",
      png: "/favicon.png",
      svg: "/favicon.svg",
      appleTouchIcon: "/favicon.png",
    },
    manifest: "/site.webmanifest",
    rss: {
      title: "Jiyong的博客",
      description: "Thoughts on Full-stack development, AI",
      feedLinks: {
        rss2: "/rss.xml",
        json: "/feed.json",
        atom: "/atom.xml",
      },
    },
  },
  author: {
    name: "Jiyong",
    email: "qu#jiyong.me",
    bio: "这是Jiyong的博客",
  },
  social: {
    github: "https://github.com/jiyong",
    x: "https://x.com/jiyong_me",
    xiaohongshu: "https://www.xiaohongshu.com/user/profile/5f670aac000000000100bcf5",
    wechat: "https://storage.xxx.com/images/wechat-official-account.png",
    buyMeACoffee: "https://www.buymeacoffee.com/xxx",
  },
  giscus: {
    repo: "guangzhengli/hugo-ladder-exampleSite",
    repoId: "R_kgDOHyVOjg",
    categoryId: "DIC_kwDOHyVOjs4CQsH7",
  },
  navigation: {
    main: [
      { 
        title: "文章", 
        href: "/blog",
      },
    ],
  },
  seo: {
    metadataBase: new URL("https://jiyong.me"),
    alternates: {
      canonical: './',
    },
    openGraph: {
      type: "website" as const,
      locale: "zh_CN",
    },
    twitter: {
      card: "summary_large_image" as const,
      creator: "@xxx",
    },
  },
};
