export default {
  kind: 'customsearch#search',
  url: {
    type: 'application/json',
    template:
      'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json',
  },
  queries: {
    request: [
      {
        title: 'Google Custom Search - apple',
        totalResults: '3960000000',
        searchTerms: 'apple',
        count: 10,
        startIndex: 1,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '772ffa1a76e658550',
      },
    ],
    nextPage: [
      {
        title: 'Google Custom Search - apple',
        totalResults: '3960000000',
        searchTerms: 'apple',
        count: 10,
        startIndex: 11,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '772ffa1a76e658550',
      },
    ],
  },
  context: {
    title: 'Google',
  },
  searchInformation: {
    searchTime: 1.245,
    formattedSearchTime: '1.25',
    totalResults: '3960000000',
    formattedTotalResults: '3,960,000,000',
  },
  items: [
    {
      kind: 'customsearch#result',
      title: 'Apple',
      htmlTitle: '\u003cb\u003eApple\u003c/b\u003e',
      link: 'https://www.apple.com/',
      displayLink: 'www.apple.com',
      snippet:
        'Discover the innovative world of Apple and shop everything iPhone, iPad, Apple \nWatch, Mac, and Apple TV, plus explore accessories, entertainment, and expert ...',
      htmlSnippet:
        'Discover the innovative world of \u003cb\u003eApple\u003c/b\u003e and shop everything iPhone, iPad, \u003cb\u003eApple\u003c/b\u003e \u003cbr\u003e\nWatch, Mac, and \u003cb\u003eApple\u003c/b\u003e TV, plus explore accessories, entertainment, and expert&nbsp;...',
      cacheId: 'xEELJvdODswJ',
      formattedUrl: 'https://www.apple.com/',
      htmlFormattedUrl: 'https://www.\u003cb\u003eapple\u003c/b\u003e.com/',
      pagemap: {
        cse_thumbnail: [
          {
            src:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRacUJY6Fo27MdruwueoOCvlCRtLKZJLAtr5ecuBF6SJq46TXz0n2zL0s0',
            width: '310',
            height: '163',
          },
        ],
        metatags: [
          {
            'analytics-s-bucket-1': 'appleglobal,applestoreww',
            'analytics-s-bucket-0': 'appleglobal,applestoreww',
            'og:image':
              'https://www.apple.com/ac/structured-data/images/open_graph_logo.png?201809210816',
            'og:type': 'website',
            'og:site_name': 'Apple',
            'og:title': 'Apple',
            'ac-gn-store-key': 'SFX9YPYY9PPXCU9KH',
            'og:description':
              'Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment, and expert device support.',
            'analytics-s-channel': 'homepage',
            viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
            'og:locale': 'en_US',
            'og:url': 'https://www.apple.com/',
            'analytics-track': 'Apple - Index/Tab',
            'analytics-s-bucket-2': 'appleglobal,applestoreww',
          },
        ],
        cse_image: [
          {
            src:
              'https://www.apple.com/ac/structured-data/images/open_graph_logo.png?201809210816',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Official Apple Support',
      htmlTitle: 'Official \u003cb\u003eApple\u003c/b\u003e Support',
      link: 'https://support.apple.com/',
      displayLink: 'support.apple.com',
      snippet:
        'Apple support is here to help. Learn more about popular topics and find \nresources that will help you with all of your Apple products.',
      htmlSnippet:
        '\u003cb\u003eApple\u003c/b\u003e support is here to help. Learn more about popular topics and find \u003cbr\u003e\nresources that will help you with all of your \u003cb\u003eApple\u003c/b\u003e products.',
      cacheId: 'n8Ff-cRc6J0J',
      formattedUrl: 'https://support.apple.com/',
      htmlFormattedUrl: 'https://support.\u003cb\u003eapple\u003c/b\u003e.com/',
      pagemap: {
        cse_thumbnail: [
          {
            src:
              'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRgHa-wv4HBeGffVC-SoafJs1T1vi07simG7dDOssO60LVYs-PXx49P-MM',
            width: '380',
            height: '132',
          },
        ],
        BreadcrumbList: [{}],
        metatags: [
          {
            'apple-itunes-app':
              'app-id=1130498044,affiliate-data=ct=support.home&pt=2003',
            'ac-gn-store-key': 'S2A49YFKJF2JAT22K',
            'analytics:s-pagename': 'acs::web::home::home::landing (en_US)',
            'ac-gn-search-field[locale]': 'en_US',
            'ac-gn-search-input': 'q',
            'analytics:s-account': 'appleglobal,applesupport',
            'ac-gn-search-action': 'https://support.apple.com/kb/index',
            'analytics:s-pagetype': 'home',
            viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
            'ac-gn-search-field[src]': 'globalnav_support',
            'ac-gn-search-field[type]': 'organic',
            position: '1',
            'analytics:s-channel': 'www.us.support',
            'ac-gn-search-field[page]': 'search',
          },
        ],
        cse_image: [
          {
            src:
              'https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/hero-banner-homepage.image.large_2x.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'iPhone - Apple',
      htmlTitle: 'iPhone - \u003cb\u003eApple\u003c/b\u003e',
      link: 'https://www.apple.com/iphone/',
      displayLink: 'www.apple.com',
      snippet:
        "Explore iPhone, the world's most powerful personal device. Check out iPhone 11 \nPro, iPhone 11 Pro Max, iPhone 11, iPhone SE, and iPhone XR.",
      htmlSnippet:
        'Explore iPhone, the world&#39;s most powerful personal device. Check out iPhone 11 \u003cbr\u003e\nPro, iPhone 11 Pro Max, iPhone 11, iPhone SE, and iPhone XR.',
      cacheId: 'JIjFa1byZv4J',
      formattedUrl: 'https://www.apple.com/iphone/',
      htmlFormattedUrl:
        'https://www.\u003cb\u003eapple\u003c/b\u003e.com/iphone/',
      pagemap: {
        cse_thumbnail: [
          {
            src:
              'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQVlTp8O6m8Y5HyWSnt9dPLLdP98G9R_MReJdX9_cBfVIL4QtXIEYohXds',
            width: '310',
            height: '163',
          },
        ],
        BreadcrumbList: [{}],
        metatags: [
          {
            'analytics-s-bucket-1': 'appleglobal,applestoreww',
            'og:image':
              'https://www.apple.com/v/iphone/home/am/images/meta/og__byyl1jl4xsvm.png?202008271301',
            'analytics-s-bucket-0': 'appleglobal,applestoreww',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'og:site_name': 'Apple',
            'al:ios:app_name': 'Apple Store',
            'og:title': 'iPhone',
            'ac-gn-store-key': 'SFX9YPYY9PPXCU9KH',
            'al:ios:url': 'https://www.apple.com/us/xc/iphone?cid=AOS_ASA',
            'og:description':
              'Explore iPhone, the world’s most powerful personal device. Check out iPhone 11 Pro, iPhone 11 Pro Max, iPhone 11, iPhone SE, and iPhone XR.',
            'al:ios:app_store_id': '375380948',
            'analytics-s-channel': 'iphone.tab+other',
            'twitter:site': '@Apple',
            viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
            'og:locale': 'en_US',
            position: '1',
            'og:url': 'https://www.apple.com/iphone/',
            'analytics-track': 'iPhone - Index/Tab',
            'analytics-s-bucket-2': 'appleglobal,applestoreww',
          },
        ],
        cse_image: [
          {
            src:
              'https://www.apple.com/v/iphone/home/am/images/meta/og__byyl1jl4xsvm.png?202008271301',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Apple Inc. - Wikipedia',
      htmlTitle: '\u003cb\u003eApple\u003c/b\u003e Inc. - Wikipedia',
      link: 'https://en.wikipedia.org/wiki/Apple_Inc.',
      displayLink: 'en.wikipedia.org',
      snippet:
        'Apple Inc. is an American multinational technology company headquartered in \nCupertino, California, that designs, develops, and sells consumer electronics, ...',
      htmlSnippet:
        '\u003cb\u003eApple\u003c/b\u003e Inc. is an American multinational technology company headquartered in \u003cbr\u003e\nCupertino, California, that designs, develops, and sells consumer electronics,&nbsp;...',
      formattedUrl: 'https://en.wikipedia.org/wiki/Apple_Inc.',
      htmlFormattedUrl:
        'https://en.wikipedia.org/wiki/\u003cb\u003eApple\u003c/b\u003e_Inc.',
      pagemap: {
        hcard: [
          {
            url_text: 'www.apple.com',
            bday: '1976-04-01',
            fn: 'Apple Inc.',
            nickname:
              'Apple Computer Company[1] (1976–1977) Apple Computer, Inc.[2] (1977–2007)',
            logo:
              'Overhead view of Apple Park located in Cupertino, California',
            label: '1 Apple Park Way Cupertino, California, United States',
            category: 'Public',
            url: 'www.apple.com',
          },
        ],
        cse_thumbnail: [
          {
            src:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRS_kAtLrHahJejVIzi0Uesg4N-a1qxKcERoZ_6sxDMavhB7o5zsoGPeI',
            width: '300',
            height: '168',
          },
        ],
        metatags: [
          {
            referrer: 'origin',
            'og:image':
              'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Apple_park_cupertino_2019.jpg/1200px-Apple_park_cupertino_2019.jpg',
          },
        ],
        cse_image: [
          {
            src:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Apple_park_cupertino_2019.jpg/1200px-Apple_park_cupertino_2019.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Watch - Apple',
      htmlTitle: 'Watch - \u003cb\u003eApple\u003c/b\u003e',
      link: 'https://www.apple.com/watch/',
      displayLink: 'www.apple.com',
      snippet:
        'Apple Watch is the ultimate device for a healthy life. Choose from all the latest \nmodels like Apple Watch Series 5 with the Always-On Retina display.',
      htmlSnippet:
        '\u003cb\u003eApple\u003c/b\u003e Watch is the ultimate device for a healthy life. Choose from all the latest \u003cbr\u003e\nmodels like \u003cb\u003eApple\u003c/b\u003e Watch Series 5 with the Always-On Retina display.',
      cacheId: '725XSlUCc6kJ',
      formattedUrl: 'https://www.apple.com/watch/',
      htmlFormattedUrl:
        'https://www.\u003cb\u003eapple\u003c/b\u003e.com/watch/',
      pagemap: {
        cse_thumbnail: [
          {
            src:
              'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQTXpzmtjnG1pX9SnUfjE2kXFiaUGBXCpZQX0VgZw4JCVhLFptQkD791RI',
            width: '310',
            height: '163',
          },
        ],
        BreadcrumbList: [{}],
        metatags: [
          {
            'analytics-s-bucket-1': 'appleglobal,applestoreww',
            'og:image':
              'https://www.apple.com/v/watch/home/ab/images/meta/gps-lte/og__n5qzveqr596m.png?202008181538',
            'analytics-s-bucket-0': 'appleglobal,applestoreww',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'og:site_name': 'Apple',
            'al:ios:app_name': 'Apple Store',
            'og:title': 'Watch',
            'ac-gn-store-key': 'SFX9YPYY9PPXCU9KH',
            'al:ios:url': 'https://www.apple.com/us/xc/watch?cid=AOS_ASA',
            'og:description':
              'Apple Watch is the ultimate device for a healthy life. Choose from all the latest models like Apple Watch Series 5 with the Always-On Retina display.',
            'al:ios:app_store_id': '375380948',
            'analytics-s-channel': 'applewatch.tab+other',
            'twitter:site': '@Apple',
            viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
            'ac:pricing-alias': 'series-3-gps=W17_AL_SI_SP_WH_G',
            'og:locale': 'en_US',
            position: '1',
            'og:url': 'https://www.apple.com/watch/',
            'analytics-track': 'Watch - index/tab',
            'analytics-s-bucket-2': 'appleglobal,applestoreww',
          },
        ],
        cse_image: [
          {
            src:
              'https://www.apple.com/v/watch/home/ab/images/meta/gps-lte/og__n5qzveqr596m.png?202008181538',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Apple Developer',
      htmlTitle: '\u003cb\u003eApple\u003c/b\u003e Developer',
      link: 'https://developer.apple.com/',
      displayLink: 'developer.apple.com',
      snippet:
        "There's never been a better time to develop for Apple Platforms.",
      htmlSnippet:
        'There&#39;s never been a better time to develop for \u003cb\u003eApple\u003c/b\u003e Platforms.',
      cacheId: '4_qFJakwvtAJ',
      formattedUrl: 'https://developer.apple.com/',
      htmlFormattedUrl:
        'https://developer.\u003cb\u003eapple\u003c/b\u003e.com/',
      pagemap: {
        cse_thumbnail: [
          {
            src:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ta3P1TBz9aMf0Y9FDu7SvZkocgbFS5ySFZTYxv5P-VJb_MeoORZ6p_g3',
            width: '294',
            height: '172',
          },
        ],
        metatags: [
          {
            omni_page: 'Apple Developer - (English)',
            viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
            author: 'Apple Inc.',
          },
        ],
        cse_image: [
          {
            src:
              'https://developer.apple.com/home/images/hero-xcode-12/xcode-12-large_2x.png',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Apple Store Online - Apple',
      htmlTitle:
        '\u003cb\u003eApple\u003c/b\u003e Store Online - \u003cb\u003eApple\u003c/b\u003e',
      link: 'https://www.apple.com/shop',
      displayLink: 'www.apple.com',
      snippet:
        'Shop apple.com with the services you love: personal shopping help, trade in, \nflexible payment options, expert support, and free no-contact delivery.',
      htmlSnippet:
        'Shop \u003cb\u003eapple\u003c/b\u003e.com with the services you love: personal shopping help, trade in, \u003cbr\u003e\nflexible payment options, expert support, and free no-contact delivery.',
      cacheId: 'l0JcXBmVic4J',
      formattedUrl: 'https://www.apple.com/shop',
      htmlFormattedUrl: 'https://www.\u003cb\u003eapple\u003c/b\u003e.com/shop',
      pagemap: {
        cse_thumbnail: [
          {
            src:
              'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQUs9xClfllPLJoGMr4Y5hdLlocRdwUEkB0b_B0SL0m1W_aVs0TkAXJy7k',
            width: '310',
            height: '163',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://as-images.apple.com/is/og-default?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1525370171638',
            'og:type': 'product',
            'twitter:card': 'summary_large_image',
            'og:site_name': 'Apple',
            'og:title': 'Apple Store Online',
            'ac-gn-store-key': 'SJHJUH4YFCTTPD4F4',
            'og:description':
              'Shop apple.com with the services you love: personal shopping help, trade in, flexible payment options, expert support, and free no-contact delivery.',
            'ac-gn-segmentbar-redirect': 'true',
            'twitter:site': '@apple',
            viewport:
              'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2, user-scalable=1, viewport-fit=cover',
            'og:locale': 'en_US',
            'og:url': 'https://www.apple.com/shop',
            'format-detection': 'telephone=no',
          },
        ],
        cse_image: [
          {
            src:
              'https://as-images.apple.com/is/og-default?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1525370171638',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'United States - Jobs at Apple',
      htmlTitle: 'United States - Jobs at \u003cb\u003eApple\u003c/b\u003e',
      link: 'https://jobs.apple.com/en-us/search?location=united-states-USA',
      displayLink: 'jobs.apple.com',
      snippet:
        "Results 1 - 20 of 2586 ... The challenges and opportunities of a continuously evolving business make \nleadership at the Apple Store a rewarding career. It's your job ...",
      htmlSnippet:
        'Results 1 - 20 of 2586 \u003cb\u003e...\u003c/b\u003e The challenges and opportunities of a continuously evolving business make \u003cbr\u003e\nleadership at the \u003cb\u003eApple\u003c/b\u003e Store a rewarding career. It&#39;s your job&nbsp;...',
      cacheId: 'T7LQSOJ_twUJ',
      formattedUrl:
        'https://jobs.apple.com/en-us/search?location=united-states-USA',
      htmlFormattedUrl:
        'https://jobs.\u003cb\u003eapple\u003c/b\u003e.com/en-us/search?location=united-states-USA',
      pagemap: {
        BreadcrumbList: [{}],
        metatags: [
          {
            'og:type': 'website',
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
            'og:title': 'United States - Jobs at Apple',
            position: '1',
            'og:url':
              'https://jobs.apple.com/en-us/search?location=united-states-USA',
            'og:description':
              'Explore all United States jobs at Apple. Create a profile and apply today.',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: '@apple • Instagram photos and videos',
      htmlTitle:
        '@\u003cb\u003eapple\u003c/b\u003e • Instagram photos and videos',
      link: 'https://www.instagram.com/apple/?hl=en',
      displayLink: 'www.instagram.com',
      snippet:
        "apple. Everyone has a story to tell. Tag #ShotoniPhone to take part. Vertical \nCinema's profile picture. Vertical Cinema. Hermitage 's profile picture. Hermitage\n ...",
      htmlSnippet:
        '\u003cb\u003eapple\u003c/b\u003e. Everyone has a story to tell. Tag #ShotoniPhone to take part. Vertical \u003cbr\u003e\nCinema&#39;s profile picture. Vertical Cinema. Hermitage &#39;s profile picture. Hermitage\u003cbr\u003e\n&nbsp;...',
      formattedUrl: 'https://www.instagram.com/apple/?hl=en',
      htmlFormattedUrl:
        'https://www.instagram.com/\u003cb\u003eapple\u003c/b\u003e/?hl=en',
      pagemap: {
        cse_thumbnail: [
          {
            src:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYuUlFW848fzKN8waRISVK9lf6L2agekWGf8pCSKkzGDPeApkB0HFkdQB',
            width: '201',
            height: '251',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s150x150/20635165_1942203892713915_5464937638928580608_a.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=noIpB8QY0zcAX_WXZcc&oh=564da42aabec3d298450fa1b2351cef5&oe=5F84F564',
            'theme-color': '#ffffff',
            'og:type': 'profile',
            'al:ios:app_name': 'Instagram',
            'og:title': '@apple • Instagram photos and videos',
            'al:android:package': 'com.instagram.android',
            'al:ios:url': 'instagram://user?username=apple',
            'og:description':
              '23.6m Followers, 6 Following, 668 Posts - See Instagram photos and videos from @apple',
            'al:ios:app_store_id': '389801252',
            'al:android:url': 'https://www.instagram.com/_u/apple/',
            'apple-mobile-web-app-status-bar-style': 'default',
            viewport:
              'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover',
            'mobile-web-app-capable': 'yes',
            'og:url': 'https://www.instagram.com/apple/',
            'al:android:app_name': 'Instagram',
          },
        ],
        cse_image: [
          {
            src:
              'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2388707841077116709',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Check Your Service and Support Coverage - Apple Support',
      htmlTitle:
        'Check Your Service and Support Coverage - \u003cb\u003eApple\u003c/b\u003e Support',
      link: 'https://checkcoverage.apple.com/',
      displayLink: 'checkcoverage.apple.com',
      snippet:
        'Check your Apple warranty status. Enter a serial number to review your eligibility \nfor support and extended coverage.',
      htmlSnippet:
        'Check your \u003cb\u003eApple\u003c/b\u003e warranty status. Enter a serial number to review your eligibility \u003cbr\u003e\nfor support and extended coverage.',
      cacheId: '7V8SM38rhaoJ',
      formattedUrl: 'https://checkcoverage.apple.com/',
      htmlFormattedUrl:
        'https://checkcoverage.\u003cb\u003eapple\u003c/b\u003e.com/',
      pagemap: {
        metatags: [
          {
            omni_page: 'acs::tools::wck::1-enter serial number',
            'apple-itunes-app':
              'app-id=1130498044,affiliate-data=ct=support.coverage&pt=2003',
            'ac-gn-search-action': 'https://support.apple.com/kb/index',
            viewport: 'width=device-width, initial-scale=1',
            'ac-gn-store-key': 'S2A49YFKJF2JAT22K',
            'ac-gn-search-field[src]': 'globalnav_support',
            'ac-gn-search-field[type]': 'organic',
            'ac-gn-search-field[locale]': 'en_US',
            'ac-gn-search-field[page]': 'search',
            'ac-gn-search-input': 'q',
          },
        ],
      },
    },
  ],
};
