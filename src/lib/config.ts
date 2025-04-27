export const config = {
  site: {
    title: "Jiyong的博客",
    name: "骐骥一跃，不能十步；驽马十驾，功在不舍",
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
    bio: "骐骥一跃，不能十步；驽马十驾，功在不舍",
  },
  social: {
    github: "https://github.com/jiyong",
    x: "https://x.com/jiyong_me",
    xiaohongshu: "https://www.xiaohongshu.com/user/profile/5f670aac000000000100bcf5",
    wechat: "https://github.com/jiyong/blog/blob/main/public/qrcode_for_gh_c0b057597eaa_258.jpg",
    // buyMeACoffee: "https://www.buymeacoffee.com/xxx",
  },
  giscus: {
    repo: "jiyong/blog",
    repoId: "R_kgDOOfaTAQ",
    categoryId: "DIC_kwDOOfaTAc4Cpgwm",
  },
  navigation: {
    main: [
      { 
        title: "文章", 
        href: "/blog",
      },{ 
        title: "读书", 
        href: "/book",
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
