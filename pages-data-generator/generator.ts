const getRandomNum = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const pickRandomValue = <T>(arr: T[]) => arr[getRandomNum(0, arr.length - 1)];
const pickRandomNumOfValues = <T>(arr: T[], num: number) => {
    const initArr = [...arr]; // Keep a copy of the initial array
    const result = [] as T[];
    for(let i = 0; i < num; i++){
      if(arr.length > 0){
        const randomIndex = Math.floor(Math.random() * arr.length);
        result.push(arr[randomIndex]);
        arr.splice(randomIndex, 1);
      }
    }
    // Sort the result array based on the order of the elements in the initial array
    result.sort((a, b) => initArr.indexOf(a) - initArr.indexOf(b));
    return result;
}
type RandomValueGetter = () => unknown;
type RandomValueweightGetter = {
    getter: RandomValueGetter;
    weight: number;
}
const getRandomValueByWeight = (getters: RandomValueweightGetter[]) => {
    // Sorry LeetCode, I know this is O(n) but I'm lazy
    const totalweight = getters.reduce((acc, { weight }) => acc + weight, 0);
    const randomNum = getRandomNum(0, totalweight - 1);
    let currentweight = 0;
    for (const { getter, weight } of getters) {
        currentweight += weight;
        if (randomNum < currentweight) {
            return getter();
        }
    }
    throw new Error('Should not happen');
}

const allChangeTypes = [
    'ADOBE_ANALYTICS',
    'ADOBE_TAG_MANAGER',
    'CANONICAL_TO_SELF',
    'CANONICAL',
    'CANONICAL_LINK',
    'CLICKTALE',
    'CLICKY',
    'CONTENTSQUARE',
    'CRAZY_EGG',
    'GOOGLE_ANALYTICS',
    'GOOGLE_TAG_MANAGER',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'HOTJAR',
    'INSPECTLET',
    'IS_DISALLOWED_IN_ROBOTS_TXT',
    'LIGHTHOUSE_CLS_RANGE',
    'LIGHTHOUSE_FCP_RANGE',
    'LIGHTHOUSE_LCP_RANGE',
    'LIGHTHOUSE_PERFORMANCE_RANGE',
    'LIGHTHOUSE_SI_RANGE',
    'LIGHTHOUSE_TBT_RANGE',
    'LIGHTHOUSE_TTI_RANGE',
    'LINK_ALTERNATE_HREFLANG',
    'LINK_AMP',
    'LINK_CANONICAL_HEADER',
    'LINK_NEXT',
    'LINK_PREV',
    'MOBILE_VARIANT',
    'MOUSEFLOW',
    'IS_IN_SITEMAP',
    'IS_INDEXABLE',
    'IS_SECURED',
    'LAST_UNRELIABLE_RESPONSE',
    'LOADING_DETAILS',
    'META_BINGBOT',
    'META_DESCRIPTION',
    'META_GOOGLEBOT',
    'META_ROBOTS',
    'META_SLURP',
    'META_YANDEX',
    'MICROSOFT_CLARITY',
    'NOT_LOADED_YET',
    'OPEN_GRAPH_DESCRIPTION',
    'OPEN_GRAPH_IMAGE',
    'OPEN_GRAPH_TITLE',
    'OPEN_GRAPH_TYPE',
    'OPEN_GRAPH_URL',
    'QUALITATIVE_ANALYTICS',
    'QUANTITATIVE_ANALYTICS',
    'REDIRECT',
    'SCHEMA_ORG_TYPES',
    'SEGMENT_COM_TAG_MANAGER',
    'SMARTLOOK',
    'STATUS_CODE',
    'TAG_MANAGEMENT',
    'TITLE',
    'TYPE',
    'TWITTER_CARD',
    'TWITTER_DESCRIPTION',
    'TWITTER_IMAGE',
    'TWITTER_SITE',
    'TWITTER_TITLE',
    'URL',
    'X_ROBOTS_TAG',
]
const allSchemaTypes = ['Article', 'Breadcrumb', 'Event', 'FAQPage', 'JobPosting', 'LocalBusiness', 'Organization', 'Person', 'Product', 'Review', 'Video'];

const websiteData = [
    {
      url: 'https://www.conductor.com/',
      h1: 'Transform Your Website Into a Growth Engine',
      description: 'Boost traffic, engagement, and conversions with actionable SEO, content, and technical insights—all in one platform.',
      image: 'https://www.conductor.com/img.png',
      title: 'Conductor — Website Optimization & Intelligence Platform'
    },
    {
      url: 'https://www.conductor.com/academy/',
      h1: 'Conductor Academy',
      description: 'Level up your skills on the Conductor Academy with all the digital marketing, content marketing, and SEO resources you need.',
      image: 'https://www.conductor.com/academy/img.png',
      title: 'Conductor Academy — Free SEO Training & SEO Courses'
    },
    {
      url: 'https://www.conductor.com/careers/',
      h1: 'Want to grow and make a difference?',
      description: 'Conductor is continually named "Best Place to Work" and here to make an impact on our customers, each other, and our industry. See our open positions now.',
      image: 'https://www.conductor.com/careers/img.png',
      title: 'Join Conductor: See Careers and Open Roles | Conductor'
    },
    {
      url: 'https://www.conductor.com/platform/',
      h1: 'SEO, content optimization, & website monitoring made easy with Conductor',
      description: 'Conductor provides everything you need to optimize your website and digital experiences to fuel growth.',
      image: 'https://www.conductor.com/platform/img.png',
      title: 'Platform for SEO, content creation and website monitoring'
    },
    {
      url: 'https://www.conductor.com/about/',
      h1: 'One Company. Two missions.',
      description: 'Everything you wanted to know about Conductor.',
      image: 'https://www.conductor.com/about/img.png',
      title: 'About us | Conductor'
    },
    {
      url: 'https://www.conductor.com/events/',
      h1: 'Events',
      description: "In-person and virtual events — Conductor's got you covered. Learn together with us about all things organic marketing!",
      image: 'https://www.conductor.com/events/img.png',
      title: 'Events | Conductor'
    },
    {
      url: 'https://www.conductor.com/contact/',
      h1: 'Give us a shout',
      description: "Send us a message and we'll get back to you soon.",
      image: 'https://www.conductor.com/contact/img.png',
      title: 'Contact | Conductor'
    },
    {
      url: 'https://www.conductor.com/blog/',
      h1: 'Conductor Blog',
      description: "Conductor's Blog shares the latest industry news, product news, awards and Conductor news.",
      image: 'https://www.conductor.com/blog/img.png',
      title: 'Conductor Blog: product updates and SEO industry news'
    },
    {
      url: 'https://www.conductor.com/customer-stories/',
      h1: 'Top brands grow their SEO efforts with Conductor',
      description: 'Top brands grow their SEO efforts with Conductor',
      image: 'https://www.conductor.com/customer-stories/img.png',
      title: 'Top brands grow their SEO efforts with Conductor'
    },
    {
      url: 'https://www.conductor.com/de/',
      h1: 'Unternehmens­wachstum durch Website­optimierung',
      description: 'Mit der Conductor-Plattform können Marketingprofis durch ihren Content mehr Traffic auf ihre Website bringen und damit Wachstum und Umsatz steigern.',
      image: 'https://www.conductor.com/de/img.png',
      title: 'Conductor – SEO und Content Marketing Plattform'
    },
    {
      url: 'https://www.conductor.com/get-started/',
      h1: 'Book a free live demo tailored to your business needs',
      description: 'Book a free live demo tailored to your business needs. Schedule a session with one of our digital marketing experts to see how Conductor can help you reach your business goals.',
      image: 'https://www.conductor.com/get-started/img.png',
      title: 'Request a Free Live Demo of Conductor’s Platform'
    },
    {
      url: 'https://www.conductor.com/platform/features/chrome-extension/',
      h1: 'Powerful SEO & content insights in one click',
      description: 'Our free SEO Chrome Extension uses the most advanced search intelligence available, making all things SEO and content marketing smarter, better, and faster.',
      image: 'https://www.conductor.com/platform/features/chrome-extension/img.png',
      title: '#1 Enterprise SEO Chrome Extension | Conductor Features'
    },
    {
      url: 'https://www.conductor.com/about/leadership/',
      h1: 'Meet Conductor’s Leaders',
      description: 'Conductor CEO Seth Besmertnik and the rest of the Conductor leadership team are committed to revolutionizing digital marketing. Learn more about our team.',
      image: 'https://www.conductor.com/about/leadership/img.png',
      title: 'Conductor Leadership | Conductor'
    },
    {
      url: 'https://www.conductor.com/blog/conductor-news/',
      h1: 'Conductor Blog',
      description: 'Conductor News',
      image: 'https://www.conductor.com/blog/conductor-news/img.png',
      title: 'Conductor News — Conductor'
    },
    {
      url: 'https://www.conductor.com/events/30-30-webinars/',
      h1: 'Events',
      description: "Join Conductor's free monthly SEO webinar series to break down updates in search, technical SEO, and content marketing from the last 30 days in 30 minutes.",
      image: 'https://www.conductor.com/events/30-30-webinars/img.png',
      title: 'Free SEO Webinars: The Latest SEO News 2023 | Conductor 30|30'
    },
    {
      url: 'https://www.conductor.com/academy/research-hub/',
      h1: 'Research Studies',
      description: 'Research Studies hub',
      image: 'https://www.conductor.com/academy/research-hub/img.png',
      title: 'Research Studies hub'
    },
    {
      url: 'https://www.conductor.com/partners/',
      h1: 'Harness the power of our partner ecosystem',
      description: 'Conductor has developed a partner ecosystem which enables advanced marketing capabilities inside of the platform. Learn more about our diverse agency and technology partnerships.',
      image: 'https://www.conductor.com/partners/img.png',
      title: 'Partners - Meet Our Platform Collaborators | Conductor'
    },
    {
      url: 'https://www.conductor.com/academy/technical-seo-hub/',
      h1: 'Technical SEO',
      description: 'Technical SEO Hub',
      image: 'https://www.conductor.com/academy/technical-seo-hub/img.png',
      title: 'Technical SEO Hub'
    },
    {
      url: 'https://www.conductor.com/academy/faq/',
      h1: 'Frequently Asked SEO Questions',
      description: "Looking for the most frequently asked SEO questions? We've covered them all. Check it out now!",
      image: 'https://www.conductor.com/academy/faq/img.png',
      title: 'SEO FAQ: Most Frequently Asked SEO Questions'
    },
    {
      url: 'https://www.conductor.com/academy/seo-fundamentals-hub/',
      h1: 'SEO Fundamentals',
      description: 'Our SEO Fundamentals articles are great learning material and refreshers for basic SEO concepts.',
      image: 'https://www.conductor.com/academy/seo-fundamentals-hub/img.png',
      title: 'SEO Fundamentals | Conductor'
    },
    {
      url: 'https://www.conductor.com/academy/ecommerce-seo-hub/',
      h1: 'eCommerce SEO',
      description: 'eCommerce SEO meta',
      image: 'https://www.conductor.com/academy/ecommerce-seo-hub/img.png',
      title: 'eCommerce SEO hub'
    },
    {
      url: 'https://www.conductor.com/academy/robotstxt/',
      h1: 'Robots.txt for SEO: The Ultimate Guide',
      description: 'Learn how to help search engines crawl your website more efficiently using the robots.txt file to achieve a better SEO performance.',
      image: 'https://www.conductor.com/academy/robotstxt/img.png',
      title: 'Robots.txt for SEO: Create the Best one With This 2023 Guide'
    },
    {
      url: 'https://www.conductor.com/academy/content-creation/',
      h1: 'Content Creation: How to Create Great Web Content',
      description: 'How do you create content? Follow this expert content creation process from ideation all the way through publishing to make content consumers want.',
      image: 'https://www.conductor.com/academy/content-creation/img.png',
      title: "What is Content Creation? A Beginner's Guide to Creating Content"
    },
    {
      url: 'https://www.conductor.com/academy/google-remove-urls/',
      h1: 'How to Remove URLs from Google Search in a Snap!',
      description: 'Duplicate, outdated, sensitive content or a staging environment indexed by Google? Learn how to remove these URLs, quickly!',
      image: 'https://www.conductor.com/academy/google-remove-urls/img.png',
      title: 'How to Remove URLs from Google Search Quickly'
    },
    {
      url: 'https://www.conductor.com/press/',
      h1: 'See our recent news and recognition',
      description: 'Learn the latest developments and recognitions at Conductor, where we believe putting customers first is a better way to do marketing.',
      image: 'https://www.conductor.com/press/img.png',
      title: 'Conductor Press and Awards. See all our recent news!'
    },
    {
      url: 'https://www.conductor.com/academy/google-index/faq/recrawl/',
      h1: 'How do I get Google to recrawl my website?',
      description: 'In these 4 steps, we explain how to get your site recrawled as fast as possible!',
      image: 'https://www.conductor.com/academy/google-index/faq/recrawl/img.png',
      title: 'How do I get Google to recrawl my website?'
    },
    {
      url: 'https://www.conductor.com/academy/identify-competitors/',
      h1: 'How to Identify Your Competitors in 6 Steps',
      description: "Competitive research can prove tricky if you don't know who your competitors are. Follow our guide to find and identify direct and indirect competitors.",
      image: 'https://www.conductor.com/academy/identify-competitors/img.png',
      title: '6 Steps for Identifying Your Top Competitors | Conductor'
    },
    {
      url: 'https://www.conductor.com/academy/google-index/faq/submit-url/',
      h1: 'How do I submit a URL to Google?',
      description: 'No one can force Google to index anything. But there are many ways to make it easier for them to discover, crawl, and index your URLs!',
      image: 'https://www.conductor.com/academy/google-index/faq/submit-url/img.png',
      title: 'How do I submit a URL to Google'
    },
    {
      url: 'https://www.conductor.com/academy/customer-needs/',
      h1: 'Identifying and Meeting Customer Needs',
      description: "Knowing your customers' needs is critical to effectively reaching and engaging with them. Learn how to find, analyze, and meet these needs using our guide.",
      image: 'https://www.conductor.com/academy/customer-needs/img.png',
      title: 'Identifying and Meeting Customer Needs'
    },
    {
      url: 'https://www.conductor.com/academy/headings/',
      h1: 'H1-H6 Headings and SEO: everything you need to know',
      description: 'Headings still play an important role in SEO. Learn how to make headings H1-H6 work for you and gain better rankings.',
      image: 'https://www.conductor.com/academy/headings/img.png',
      title: 'H1-H6 Heading Tags and SEO: the Ultimate Guide - ContentKing"'
    },
    {
      url: 'https://www.conductor.com/academy/open-graph/',
      h1: 'Open Graph: Take Control of Your Snippets on Facebook',
      description: 'Take control of what your snippets look like when your URLs are shared on Facebook. You do the same for SEO, right?',
      image: 'https://www.conductor.com/academy/open-graph/img.png',
      title: 'Open Graph: Take Control of Your Snippets on Facebook'
    },
    {
      url: 'https://www.conductor.com/academy/url-inspection-tool/',
      h1: 'Google Search Console URL Inspection Tool explained',
      description: "Learn what's stopping Google from correctly discovering, crawling and indexing your URLs with this in-depth walkthrough of the URL Inspection Tool!",
      image: 'https://www.conductor.com/academy/url-inspection-tool/img.png',
      title: 'Google Search Console URL Inspection Tool: Ultimate Guide'
    },
    {
      url: 'https://www.conductor.com/de/plattform/',
      h1: 'Technologie für Unternehmen und ihre Marketingteams',
      description: 'Conductor ist die führende SEO-Plattform für kundenorientierte Teams. Sie verschaffen sich einen Wettbewerbsvorteil durch mehr Sichtbarkeit in Suchen.',
      image: 'https://www.conductor.com/de/plattform/img.png',
      title: 'Die Top-Plattform für Organic Marketing und SEO | Conductor'
    },
    {
      url: 'https://www.conductor.com/about/foundation/',
      h1: 'The Conductor Foundation',
      description: 'The Conductor Foundation recognizes charitable organizations and seeks to support their missions. Learn how to apply for the Foundation Grant.',
      image: 'https://www.conductor.com/about/foundation/img.png',
      title: 'Conductor Foundation | Conductor'
    },
    {
      url: 'https://www.conductor.com/academy/content-marketing-hub/',
      h1: 'Content Marketing',
      description: 'Content Marketing hub',
      image: 'https://www.conductor.com/academy/content-marketing-hub/img.png',
      title: 'Content Marketing hub'
    },
    {
      url: 'https://www.conductor.com/academy/state-of-organic-marketing/',
      h1: 'The State of SEO in 2024',
      description: 'Staying on top of the latest SEO changes and trends is the key to organic search success. Here are the most important ones to know about for 2024.',
      image: 'https://www.conductor.com/academy/state-of-organic-marketing/img.png',
      title: 'The State of SEO in 2024: Data, Trends, and Predictions'
    },
    {
      url: 'https://www.conductor.com/academy/what-are-meta-tags/',
      h1: 'Meta Tags in SEO: the Ultimate Guide',
      description: 'Meta tags are HTML elements that have a huge effect on SEO and user experience on your website. Learn how to use them properly!',
      image: 'https://www.conductor.com/academy/what-are-meta-tags/img.png',
      title: 'Meta Tags in SEO: the Ultimate Guide'
    },
    {
      url: 'https://www.conductor.com/platform/integrations/',
      h1: 'Integrate with your entire tech stack',
      description: "Speed up your marketing workflow using our platform's integrations with website analytics, extensive keyword data, and productivity tools like Jira and Asana.",
      image: 'https://www.conductor.com/platform/integrations/img.png',
      title: 'Conductor Workflow Integrations | Conductor Integrations'
    },
    {
      url: 'https://www.conductor.com/academy/marketing-strategy-hub/',
      h1: 'Marketing Strategy',
      description: 'Marketing Strategy hub',
      image: 'https://www.conductor.com/academy/marketing-strategy-hub/img.png',
      title: 'Marketing Strategy hub'
    },
    {
      url: 'https://www.conductor.com/academy/redirects/faq/html-meta-redirect/',
      h1: 'HTML Redirect code to another page: meta refresh explained',
      description: 'How do HTML redirects work, what are the pros and cons and how do you implement them? We explain everything in this article!',
      image: 'https://www.conductor.com/academy/redirects/faq/html-meta-redirect/img.png',
      title: 'HTML redirect code: the meta refresh explained'
    },
    {
      url: 'https://www.conductor.com/services/migrations/',
      h1: "Unlock your website's full potential",
      description: 'Relaunch your website and radically transform your digital presence with the white glove services of Migration Solutions by Conductor.',
      image: 'https://www.conductor.com/services/migrations/img.png',
      title: 'Website Migration Services & Solutions - Conductor'
    },
    {
      url: 'https://www.conductor.com/academy/index-coverage/faq/alternate-page-canonical/',
      h1: 'Alternate page with proper canonical tag: what does it mean and how to fix it?',
      description: 'This article explains what the "Alternate page with proper canonical tag" error means, and how to fix it!',
      image: 'https://www.conductor.com/academy/index-coverage/faq/alternate-page-canonical/img.png',
      title: 'How to Fix "Alternate page with proper canonical tag" error in Google Search Console'
    },
    {
      url: 'https://www.conductor.com/academy/keyword-research/',
      h1: 'What is Keyword Research? A Guide for Top Research Methods & Best Practices',
      description: 'Keyword research is fundamental to SEO. We show you the best way to do it and how to leverage your research to create the best content for your audiences.',
      image: 'https://www.conductor.com/academy/keyword-research/img.png',
      title: 'What is Keyword Research? A Complete Guide | Conductor'
    },
    {
      url: 'https://www.conductor.com/academy/google-index/faq/indexing-speed/',
      h1: 'How long does it take for Google to index a website?',
      description: 'Small websites usually take 3–4 weeks, while larger sites can take up to 6–12 months if you don’t take matters into your own hands. Speed up the process!',
      image: 'https://www.conductor.com/academy/google-index/faq/indexing-speed/img.png',
      title: 'How long does it take for Google to index a website?'
    },
    {
      url: 'https://www.conductor.com/academy/http-status-codes/',
      h1: 'The SEO’s Guide to HTTP Status Codes',
      description: 'HTTP status codes are instrumental to diagnosing SEO issues. Learn about the most common status codes and what role they play in SEO.',
      image: 'https://www.conductor.com/academy/http-status-codes/img.png',
      title: 'HTTP Status Codes and SEO: what you need to know'
    },
    {
      url: 'https://www.conductor.com/academy/why-seo-is-important/',
      h1: 'Why SEO: What is SEO & Why Is It Important for Business?',
      description: 'Better understand the importance of SEO in digital marketing, including the benefits of competing in organic search and why SEO should be a priority.',
      image: 'https://www.conductor.com/academy/why-seo-is-important/img.png',
      title: 'What is SEO & Why is it Important for Business? | Conductor'
    },
    {
      url: 'https://www.conductor.com/academy/urls/faq/absolute-vs-relative/',
      h1: 'Absolute vs Relative URLs: when to use which for SEO?',
      description: "When should you use an absolute URL, and when a relative URL? In this article we'll give our recommendations for when to use which.",
      image: 'https://www.conductor.com/academy/urls/faq/absolute-vs-relative/img.png',
      title: 'Absolute vs Relative URLs: when to use which for SEO?'
    },
    {
      url: 'https://www.conductor.com/blog/industry-news/',
      h1: 'Conductor Blog',
      description: 'Industry News',
      image: 'https://www.conductor.com/blog/industry-news/img.png',
      title: 'Industry News by Conductor'
    },
    {
      url: 'https://www.conductor.com/academy/robotstxt/faq/how-find-it/',
      h1: 'How do I find my robots.txt file?',
      description: "In this article we'll explain how to find your robots.txt file!",
      image: 'https://www.conductor.com/academy/robotstxt/faq/how-find-it/img.png',
      title: 'How to find my robots.txt'
    },
    {
      url: 'https://www.conductor.com/de/academy/',
      h1: 'Conductor Academy',
      description: 'Erweitere deine Kompetenzen und dein Wissen in der Conductor Academy – mit allem zu Online-Marketing, Content-Marketing und SEO, was du brauchst.',
      image: 'https://www.conductor.com/de/academy/img.png',
      title: 'Conductor Academy – kostenloses SEO-Training und SEO-Kurse'
    },
    {
      url: 'https://www.conductor.com/academy/ranking-drop/',
      h1: 'Google Ranking Dropped Dramatically? Here’s How to Recover in 13 Easy Steps',
      description: "Did your Google rankings drop dramatically? Don't panic, and use this guide to quickly diagnose the issue and recover!",
      image: 'https://www.conductor.com/academy/ranking-drop/img.png',
      title: "Google Ranking Dropped Dramatically — Here's How To Recover [2023]"
    },
    {
      url: 'https://www.conductor.com/academy/redirects/',
      h1: 'HTTP redirect codes for SEO explained',
      description: "What HTTP redirect code to use in what situation? In this guide, we'll explain all the redirect types with their pros and cons!",
      image: 'https://www.conductor.com/academy/redirects/img.png',
      title: 'HTTP redirect code overview: the redirects guide for SEO'
    },
    {
      url: 'https://www.conductor.com/academy/xml-sitemap/',
      h1: 'XML Sitemap',
      description: 'Questions about XML Sitemap? Read the ultimate reference guide explaining the benefits but also its limitations from an SEO and UX point of view.',
      image: 'https://www.conductor.com/academy/xml-sitemap/img.png',
      title: 'XML Sitemap: the ultimate reference guide'
    },
    {
      url: 'https://www.conductor.com/academy/google-search-console-hub/',
      h1: 'Google Search Console',
      description: 'Google Search Console hub',
      image: 'https://www.conductor.com/academy/google-search-console-hub/img.png',
      title: 'Google Search Console hub'
    },
    {
      url: 'https://www.conductor.com/academy/search-generative-experience/',
      h1: 'An In-Depth Look at Google’s Search-Generative Experience',
      description: 'Google’s AI-powered search generative experience is changing search as we know it. Learn how it will impact your site and how you can prepare.',
      image: 'https://www.conductor.com/academy/search-generative-experience/img.png',
      title: 'Your Comprehensive Guide to Preparing for Google’s SGE'
    },
    {
      url: 'https://www.conductor.com/de/academy/glossar/suchmaschinenoptimierung/',
      h1: 'Suchmaschinenoptimierung',
      description: 'Unter Suchmaschinenoptimierung werden alle technischen & inhaltlichen Maßnahmen verstanden, um das Ranking einer Website zu verbessern.',
      image: 'https://www.conductor.com/de/academy/glossar/suchmaschinenoptimierung/img.png',
      title: 'Was ist SEO und wie funktioniert Suchmaschinenoptimierung?'
    },
    {
      url: 'https://www.conductor.com/academy/meta-robots-tag/',
      h1: 'Meta Robots Tag Guide',
      description: 'Learn how you can improve search engine’s crawling and indexing behavior, and take control of your snippets in the SERP.',
      image: 'https://www.conductor.com/academy/meta-robots-tag/img.png',
      title: 'Meta Robots Tag Guide for 2023'
    },
    {
      url: 'https://www.conductor.com/resources/',
      h1: 'Resources',
      description: 'Resources',
      image: 'https://www.conductor.com/resources/img.png',
      title: 'Resources | Conductor'
    },
    {
      url: 'https://www.conductor.com/academy/fix-slow-loading-pages/',
      h1: 'How to Fix Slow Loading Pages: 5 Practical Tips to Improve Site Speed',
      description: 'If your website is loading slow, that could hurt your search engine optimization (SEO) efforts. Use these tips to fix web pages loading slowly.',
      image: 'https://www.conductor.com/academy/fix-slow-loading-pages/img.png',
      title: '5 Ways to Fix a Slow Loading Website | Conductor'
    },
    {
      url: 'https://www.conductor.com/academy/reporting-hub/',
      h1: 'Reporting',
      description: 'Reporting hub',
      image: 'https://www.conductor.com/academy/reporting-hub/img.png',
      title: 'Reporting hub'
    },
    {
      url: 'https://www.conductor.com/legal/terms-of-use/',
      h1: 'Terms of Use',
      description: 'Terms of Use | Conductor',
      image: 'https://www.conductor.com/legal/terms-of-use/img.png',
      title: 'Terms of Use | Conductor'
    },
    {
      url: 'https://www.conductor.com/academy/international-seo-hub/',
      h1: 'International SEO',
      description: 'International SEO hub',
      image: 'https://www.conductor.com/academy/international-seo-hub/img.png',
      title: 'International SEO hub'
    },
    {
      url: 'https://www.conductor.com/academy/headings/faq/h1/',
      h1: 'Write the Perfect H1 Heading Tag for SEO',
      description: 'Write H1 headings which move the SEO needle, and work great for your visitors!',
      image: 'https://www.conductor.com/academy/headings/faq/h1/img.png',
      title: 'How to Write the Perfect H1 Heading Tag for SEO'
    },
    {
      url: 'https://www.conductor.com/academy/nofollow/',
      h1: 'Nofollow link and rel=nofollow explained',
      description: 'Despite "sponsored" and "ugc", the nofollow link attribute remains an important factor to consider when creating and building links!',
      image: 'https://www.conductor.com/academy/nofollow/img.png',
      title: 'Nofollow link and rel=nofollow explained'
    },
    {
      url: 'https://www.conductor.com/legal/privacy-policy/',
      h1: 'Conductor Privacy Policy',
      description: 'Conductor Privacy Policy',
      image: 'https://www.conductor.com/legal/privacy-policy/img.png',
      title: 'Conductor Privacy Policy | Conductor'
    },
    {
      url: 'https://www.conductor.com/about/diversity/',
      h1: 'Our mission to build a diverse and inclusive workplace',
      description: "Learn about Conductor's commitment to diversity, inclusion, and belonging. Join our community.",
      image: 'https://www.conductor.com/about/diversity/img.png',
      title: "Diversity & Inclusion: Conductor's Culture of Belonging | Conductor"
    },
    {
      url: 'https://www.conductor.com/blog/product-news/',
      h1: 'Conductor Blog',
      description: 'Conductor Product News',
      image: 'https://www.conductor.com/blog/product-news/img.png',
      title: 'Conductor Product News'
    },
    {
      url: 'https://www.conductor.com/academy/canonical/',
      h1: 'Use Canonical URL to Resolve Duplicate Content Issues',
      description: 'Questions about the canonical URL? Read the ultimate reference guide explaining the benefits and limitations from an SEO and UX point of view.',
      image: 'https://www.conductor.com/academy/canonical/img.png',
      title: 'Canonical URL: the ultimate reference guide on using them'
    },
    {
      url: 'https://www.conductor.com/academy/ai-generated-content/',
      h1: 'Everything You Need to Know About AI-Generated Content',
      description: 'Make the most of AI with this guide to understanding and leveraging AI-generated content. Discover what these tools can do for you.',
      image: 'https://www.conductor.com/academy/ai-generated-content/img.png',
      title: 'AI-Generated Content and ChatGPT: A Complete Guide'
    },
    {
      url: 'https://www.conductor.com/academy/title-tag/',
      h1: 'Title tag',
      description: 'The title tag is the strongest on-page element you can leverage to boost your rankings. Learn how to make the most of it here!',
      image: 'https://www.conductor.com/academy/title-tag/img.png',
      title: 'Title tag: the ultimate reference guide to make it work for you'
    },
    {
      url: 'https://www.conductor.com/academy/http-status-codes/faq/server-error-5xx/',
      h1: 'Server Error (5xx): what is it and how to find it?',
      description: 'Don’t let 5xx server errors hurt your SEO performance. Learn what they are, why they happen and how to fix them.',
      image: 'https://www.conductor.com/academy/http-status-codes/faq/server-error-5xx/img.png',
      title: 'Server Error (5xx): what is it and how to find it?'
    },
    {
      url: 'https://www.conductor.com/academy/glossary/on-page-optimization/',
      h1: 'Onpage Optimization',
      description: 'What is a onpage optimization? Our SEO Glossary provides a wide range of technical terms related to Search Engine Optimization.',
      image: 'https://www.conductor.com/academy/glossary/on-page-optimization/img.png',
      title: 'Onpage Optimization Definition - SEO Glossary'
    },
    {
      url: 'https://www.conductor.com/academy/glossary/rankings/',
      h1: 'Rankings',
      description: 'What are rankings? Our SEO Glossary provides a wide range of technical terms related to Search Engine Optimization and more.',
      image: 'https://www.conductor.com/academy/glossary/rankings/img.png',
      title: 'Rankings Definition – SEO Glossary'
    },
    {
      url: 'https://www.conductor.com/academy/processes-hub/',
      h1: 'Processes',
      description: 'Processes hub',
      image: 'https://www.conductor.com/academy/processes-hub/img.png',
      title: 'Processes hub'
    },
    {
      url: 'https://www.conductor.com/de/academy/glossar/url/',
      h1: 'URL',
      description: 'Die URL beschreibt die genaue Adresse einer Website. Alle Infos zu Aufbau und Kodierung von URLs im Conductor Glossar.',
      image: 'https://www.conductor.com/de/academy/glossar/url/img.png',
      title: 'Was ist eine URL - Uniform Resource Locator?'
    },
    {
      url: 'https://www.conductor.com/academy/index-coverage/faq/discovered-not-indexed/',
      h1: 'Discovered - currently not indexed: what does it mean and how to fix?',
      description: 'This article explains what the "Discovered - currently not indexed" issue means, and how to fix it!',
      image: 'https://www.conductor.com/academy/index-coverage/faq/discovered-not-indexed/img.png',
      title: 'Discovered - currently not indexed in Google Search Console: How to Fix'
    },
    {
      url: 'https://www.conductor.com/academy/team-enablement-hub/',
      h1: 'Team Enablement',
      description: 'Team Enablement hub',
      image: 'https://www.conductor.com/academy/team-enablement-hub/img.png',
      title: 'Team Enablement hub'
    },
    {
      url: 'https://www.conductor.com/academy/core-web-vitals/',
      h1: 'The Ultimate Guide to Core Web Vitals',
      description: 'Learn what Core Web Vitals are, what they are not, why they matter and how to improve them!',
      image: 'https://www.conductor.com/academy/core-web-vitals/img.png',
      title: 'Core Web Vitals: The Ultimate Guide'
    },
    {
      url: 'https://www.conductor.com/academy/index-coverage/faq/indexed-blocked/',
      h1: '"Indexed, though blocked by robots.txt": what does it mean and how to fix?',
      description: 'This article explains what the "Indexed, though blocked by robots.txt" issue means, and how to fix it!',
      image: 'https://www.conductor.com/academy/index-coverage/faq/indexed-blocked/img.png',
      title: 'How to Fix "Indexed, though blocked by robots.txt" in Google Search Console'
    },
    {
      url: 'https://www.conductor.com/academy/robotstxt/faq/example-file/',
      h1: 'Robots.txt example file',
      description: "Here's an example robots.txt file, including a detailed explanation what it does. Up your SEO game now!",
      image: 'https://www.conductor.com/academy/robotstxt/faq/example-file/img.png',
      title: 'Robots.txt example file'
    },
    {
      url: 'https://www.conductor.com/academy/product-page-seo/',
      h1: 'Product Page SEO: 17 eCommerce Best Practices',
      description: `Optimizing product pages is no small feat. Learn how to ace it and boost your product pages' SEO performance by following these 17 best practices!"`,
      image: 'https://www.conductor.com/academy/product-page-seo/img.png',
      title: 'Product Page SEO: 17 eCommerce Best Practices'
    },
    {
      url: 'https://www.conductor.com/blog/events/',
      h1: 'Conductor Blog',
      description: 'Read about all the events Conductor organized, or attended only on the Conductor Blog.',
      image: 'https://www.conductor.com/blog/events/img.png',
      title: 'Conductor Events'
    },
    {
      url: 'https://www.conductor.com/legal/imprint/',
      h1: 'Imprint',
      description: 'Imprint',
      image: 'https://www.conductor.com/legal/imprint/img.png',
      title: 'Imprint | Conductor'
    },
    {
      url: 'https://www.conductor.com/industries/retail/',
      h1: 'Win shoppers in every market at every moment',
      description: 'Conductor Searchlight is a leading organic marketing platform for retail. Learn how Conductor can help you optimize your web presence for your industry.',
      image: 'https://www.conductor.com/industries/retail/img.png',
      title: 'Retail Organic Marketing Platform | Conductor'
    },
    {
      url: 'https://www.conductor.com/academy/google-index/',
      h1: 'How to Get Google to Index Your Website',
      description: 'Boost your online visibility with this ultimate guide to Google indexing. Learn how to get your website to Google search.',
      image: 'https://www.conductor.com/academy/google-index/img.png',
      title: 'How to Get Google to Index Your Website'
    },
    {
      url: 'https://www.conductor.com/academy/google-posts-for-business/',
      h1: 'Your Guide to Google Posts: How to Use Google Posts for Your Business',
      description: "Google Posts is now live in all Google My Business accounts. Here's how, why and when to create a Google Post for your business.",
      image: 'https://www.conductor.com/academy/google-posts-for-business/img.png',
      title: 'How to Use Google Posts for Business: Your Guide to Google Posts'
    },
    {
      url: 'https://www.conductor.com/academy/meta-description/',
      h1: 'Meta description',
      description: 'Questions about the meta description tag? Read the ultimate reference guide explaining how to get the most out of yours.',
      image: 'https://www.conductor.com/academy/meta-description/img.png',
      title: 'Meta description: the ultimate reference guide'
    },
    {
      url: 'https://www.conductor.com/de/academy/glossar/net-promoter-score-nps/',
      h1: 'Net Promoter Score (NPS) – Definition, Messung, Pro & Cons',
      description: 'Der Net Promoter Score ist eine Kennzahl, die die Zufriedenheit, Treue und Bindung von Kund*innen darstellt. Weitere Infos im Conductor Glossar!',
      image: 'https://www.conductor.com/de/academy/glossar/net-promoter-score-nps/img.png',
      title: 'Net Promoter Score - die Weiterempfehlungsrate'
    },
    {
      url: 'https://www.conductor.com/industries/finance/',
      h1: 'Attract customers with a unified digital experience',
      description: 'Conductor Searchlight is a leading organic marketing platform for finace. Learn how Conductor can help you optimize your web presence for your industry.',
      image: 'https://www.conductor.com/industries/finance/img.png',
      title: 'Finance Organic Marketing Platform - Conductor'
    },
    {
      url: 'https://www.conductor.com/academy/index-coverage/faq/duplicate-without-canonical/',
      h1: 'Duplicate without user-selected canonical: what does it mean and how to fix?',
      description: 'This article explains what the "Duplicate without user-selected canonical" issue means, and how to fix it!',
      image: 'https://www.conductor.com/academy/index-coverage/faq/duplicate-without-canonical/img.png',
      title: 'How to Fix Duplicate without user-selected canonical in Google Search Console'
    },
    {
      url: 'https://www.conductor.com/academy/robotstxt/faq/crawl-delay-10/',
      h1: 'What does crawl-delay: 10 mean in robots.txt?',
      description: 'In this article we explain the meaning of the crawl-delay: 10 directive for SEO.',
      image: 'https://www.conductor.com/academy/robotstxt/faq/crawl-delay-10/img.png',
      title: 'Crawl-delay: 10 in robots.txt: what does it mean?'
    },
    {
      url: 'https://www.conductor.com/academy/crawl-budget/',
      h1: 'Crawl budget explained',
      description: 'Search engines assign crawl budget to websites, based on two factors: crawl limit and crawl demand. Learn how to find and fix crawl budget issues so you can rank like a boss!',
      image: 'https://www.conductor.com/academy/crawl-budget/img.png',
      title: 'Crawl budget for SEO: the ultimate reference guide'
    },
    {
      url: 'https://www.conductor.com/academy/glossary/search-result/',
      h1: 'Search Result',
      description: 'What are search result? Our SEO Glossary provides a wide range of technical terms related to Search Engine Optimization and more.',
      image: 'https://www.conductor.com/academy/glossary/search-result/img.png',
      title: 'Search Result Definition - SEO Glossary'
    },
    {
      url: 'https://www.conductor.com/de/ueber-uns/',
      h1: 'Ein Unternehmen. Zwei Ziele.',
      description: 'Alles, was du über Conductor wissen solltest: unsere Werte, Unternehmenskultur und Initiativen.',
      image: 'https://www.conductor.com/de/ueber-uns/img.png',
      title: 'Über uns | Conductor SEO-Plattform'
    },
    {
      url: 'https://www.conductor.com/academy/magento-seo/',
      h1: 'The Ultimate SEO Guide to Magento 2',
      description: 'Learn how to configure your Magento store for maximum SEO success in the most complete and updated guide.',
      image: 'https://www.conductor.com/academy/magento-seo/img.png',
      title: 'Magento SEO: The Ultimate Guide full of Best Practices [2023]'
    },
    {
      url: 'https://www.conductor.com/academy/index-coverage/',
      h1: 'Find and Fix Index Coverage Errors in Google Search Console',
      description: 'Is Google Search Console reporting Index Coverage issues? This article explains what each issue means, and how to fix it!',
      image: 'https://www.conductor.com/academy/index-coverage/img.png',
      title: 'Find and Fix Index Coverage Errors in Google Search Console'
    }
  ]

const res = websiteData.map(data => {
    const schemaTypes = pickRandomNumOfValues(allSchemaTypes, getRandomNum(0, 5));
    return {
        analyticsServices: getRandomValueByWeight([
            { getter: () => null, weight: 50 },
            { getter: () => pickRandomValue([
                ['ChangeType.GOOGLE_ANALYTICS'],
                ['ChangeType.ADOBE_ANALYTICS', 'ChangeType.ADOBE_ANALYTICS']
            ]), weight: 50 },
        ]),
        canonicalType: getRandomValueByWeight([
            { getter: () => 'internal_self', weight: 50 },
            { getter: () => pickRandomValue(['cross_domain', 'not_applicable', 'invalid']), weight: 50 },
        ]),
        canonicalUrl: data.url,
        domain: getRandomValueByWeight([
            { getter: () => 'conductor.com', weight: 90 },
            { getter: () => 'www.conductor.com', weight: 5 },
            { getter: () => 'cross_domain', weight: 5 },
        ]),
        https: getRandomValueByWeight([
            { getter: () => true, weight: 90 },
            { getter: () => false, weight: 10 },
        ]),
        indexable: getRandomValueByWeight([
            { getter: () => true, weight: 90 },
            { getter: () => false, weight: 10 },
        ]),
        inXMLSitemap: getRandomValueByWeight([
            { getter: () => true, weight: 90 },
            { getter: () => false, weight: 10 },
        ]),
        isDisallowedInRobotsTxt: pickRandomValue([true, false]),
        isIndexableDueToMetaRobots: pickRandomValue(['yes', 'no', 'not_applicable']),
        isIndexableDueToXRobotsTag: pickRandomValue(['yes', 'no', 'not_applicable']),
        h1: data.h1.replace('\'', ''),
        lighthousePerformance: getRandomValueByWeight([
            { getter: () => ({ value: getRandomNum(90, 100), range: 'WebVitalRange.Good' }), weight: 10},
            { getter: () => ({ value: getRandomNum(50, 89), range: 'WebVitalRange.NeedsImprovement' }), weight: 10},
            { getter: () => ({ value: getRandomNum(0, 49), range: 'WebVitalRange.Bad' }), weight: 10},
        ]),
        lighthouseCLS: getRandomValueByWeight([
            { getter: () => ({ value: getRandomNum(0, 3), range: 'WebVitalRange.Good' }), weight: 90},
            { getter: () => ({ value: getRandomNum(3, 25), range: 'WebVitalRange.NeedsImprovement' }), weight: 5},
            { getter: () => ({ value: getRandomNum(25, 100), range: 'WebVitalRange.Bad' }), weight: 5},
        ]),
        lighthouseFCP: getRandomValueByWeight([
            { getter: () => ({ value: getRandomNum(0, 1000), range: 'WebVitalRange.Good' }), weight: 90},
            { getter: () => ({ value: getRandomNum(1000, 3000), range: 'WebVitalRange.NeedsImprovement' }), weight: 5},
            { getter: () => ({ value: getRandomNum(3000, 5000), range: 'WebVitalRange.Bad' }), weight: 5},
        ]),
        lighthouseLCP: getRandomValueByWeight([
            { getter: () => ({ value: getRandomNum(0, 2500), range: 'WebVitalRange.Good' }), weight: 90},
            { getter: () => ({ value: getRandomNum(2500, 4000), range: 'WebVitalRange.NeedsImprovement' }), weight: 5},
            { getter: () => ({ value: getRandomNum(4000, 6000), range: 'WebVitalRange.Bad' }), weight:5},
        ]),
        lighthouseSI: getRandomValueByWeight([
            { getter: () => ({ value: getRandomNum(0, 4300), range: 'WebVitalRange.Good' }), weight: 100},
            { getter: () => ({ value: getRandomNum(4300, 5800), range: 'WebVitalRange.NeedsImprovement' }), weight: 0},
            { getter: () => ({ value: getRandomNum(5800, 7000), range: 'WebVitalRange.Bad' }), weight: 0},
        ]),
        lighthouseTBT: getRandomValueByWeight([
            { getter: () => ({ value: getRandomNum(0, 300), range: 'WebVitalRange.Good' }), weight: 10 },
            { getter: () => ({ value: getRandomNum(300, 600), range: 'WebVitalRange.NeedsImprovement' }), weight: 45 },
            { getter: () => ({ value: getRandomNum(600, 1000), range: 'WebVitalRange.Bad' }), weight: 45 },
        ]),
        lighthouseTTI: getRandomValueByWeight([
            { getter: () => ({ value: getRandomNum(0, 3800), range: 'WebVitalRange.Good' }), weight: 30 },
            { getter: () => ({ value: getRandomNum(3800, 7300), range: 'WebVitalRange.NeedsImprovement' }), weight: 30 },
            { getter: () => ({ value: getRandomNum(7300, 10000), range: 'WebVitalRange.Bad' }), weight: 30},
        ]),
        metaDescription: data.description.replace('\'', ''),
        redirectTarget:  data.url,
        openGraphDescription: data.description.replace('\'', ''),
        openGraphImage: data.image,
        openGraphTitle: data.title.replace('\'', ''),
        openGraphType:  'website',
        openGraphUrl:  data.url,
        schemaItems: schemaTypes.length,
        schemaTypes,
        sessions: getRandomValueByWeight([
            { getter: () => getRandomNum(0, 100), weight: 70 },
            { getter: () => getRandomNum(10000, 10000000), weight: 30 },
        ]),
        statusCode: getRandomValueByWeight([
            { getter: () => 200, weight: 80 },
            { getter: () => 404, weight: 5 },
            { getter: () => 500, weight: 5 },
            { getter: () => 307, weight: 5 },
        ]),
        tagManagers: pickRandomValue([
            null,
            ['ChangeType.GOOGLE_TAG_MANAGER'],
            ['ChangeType.ADOBE_TAG_MANAGER']
        ]),
        title: data.title.replace('\'', ''),
        twitterCard: 'summary_large_image',
        twitterDescription: data.description.replace('\'', ''),
        twitterImage: data.image,
        twitterSite: data.url,
        twitterTitle: data.title.replace('\'', ''),
        url: data.url,
        urlDepth: getRandomNum(0, 20),
        urlFull: data.url,
        urlType: getRandomValueByWeight([
            { getter: () => 'PageType.Page', weight: 90 },
            { getter: () => pickRandomValue([
                'PageType.Missing',
                'PageType.Other',
                'PageType.OverQuota',
                'PageType.Page',
                'PageType.Redirect',
                'PageType.ServerError',
                'PageType.Special',
                'PageType.Unknown',
                'PageType.Unreachable',
            ]), weight: 10 },
        ]),
        visualAnalyticsServices: getRandomValueByWeight([
            {
                getter: () => null,
                weight: 50,
            },
            {
                getter: () => pickRandomNumOfValues(
                    allChangeTypes,
                    getRandomNum(0, 3)
                ),
                weight: 50
            },
        ]),
        wordCount: getRandomValueByWeight([
            {
                getter: () => getRandomNum(0, 12098340598),
                weight: 20,
            },
            {
                getter: () => getRandomNum(0, 1000),
                weight: 80
            },
        ]),
        

    }
});


const specialColumns = [
    {
        analyticsServices: null,
        canonicalType: null,
        canonicalUrl: null,
        domain: null,
        https: null,
        indexable: null,
        inXMLSitemap: null,
        isDisallowedInRobotsTxt: null,
        isIndexableDueToMetaRobots: null,
        isIndexableDueToXRobotsTag: null,
        h1: null,
        lighthousePerformance: null,
        lighthouseCLS: null,
        lighthouseFCP: null,
        lighthouseLCP: null,
        lighthouseSI: null,
        lighthouseTBT: null,
        lighthouseTTI: null,
        metaDescription: null,
        redirectTarget: null,
        openGraphDescription: null,
        openGraphImage: null,
        openGraphTitle: null,
        openGraphType: null,
        openGraphUrl: null,
        schemaItems: null,
        schemaTypes: null,
        sessions: null,
        statusCode: null,
        tagManagers: null,
        title: null,
        twitterCard: null,
        twitterDescription: null,
        twitterImage: null,
        twitterSite: null,
        twitterTitle: null,
        url: 'https://www.conductor.com/special/null',
        urlDepth: undefined,
        urlFull: 'https://www.conductor.com/special/null',
        urlType: null,
        visualAnalyticsServices: null,
        wordCount: null,
    },
    {
        analyticsServices: undefined,
        canonicalType: undefined,
        canonicalUrl: undefined,
        domain: undefined,
        https: undefined,
        indexable: undefined,
        inXMLSitemap: undefined,
        isDisallowedInRobotsTxt: undefined,
        isIndexableDueToMetaRobots: undefined,
        isIndexableDueToXRobotsTag: undefined,
        h1: undefined,
        lighthousePerformance: undefined,
        lighthouseCLS: undefined,
        lighthouseFCP: undefined,
        lighthouseLCP: undefined,
        lighthouseSI: undefined,
        lighthouseTBT: undefined,
        lighthouseTTI: undefined,
        metaDescription: undefined,
        redirectTarget: undefined,
        openGraphDescription: undefined,
        openGraphImage: undefined,
        openGraphTitle: undefined,
        openGraphType: undefined,
        openGraphUrl: undefined,
        schemaItems: undefined,
        schemaTypes: undefined,
        sessions: undefined,
        statusCode: undefined,
        tagManagers: undefined,
        title: undefined,
        twitterCard: undefined,
        twitterDescription: undefined,
        twitterImage: undefined,
        twitterSite: undefined,
        twitterTitle: undefined,
        url: 'https://www.conductor.com/special/undefined',
        urlDepth: undefined,
        urlFull: 'https://www.conductor.com/special/undefined',
        urlType: undefined,
        visualAnalyticsServices: undefined,
        wordCount: undefined,
    },
    {
        analyticsServices: '',
        canonicalType: '',
        canonicalUrl: '',
        domain: '',
        https: '',
        indexable: '',
        inXMLSitemap: '',
        isDisallowedInRobotsTxt: '',
        isIndexableDueToMetaRobots: '',
        isIndexableDueToXRobotsTag: '',
        h1: '',
        lighthousePerformance: '',
        lighthouseCLS: '',
        lighthouseFCP: '',
        lighthouseLCP: '',
        lighthouseSI: '',
        lighthouseTBT: '',
        lighthouseTTI: '',
        metaDescription: '',
        redirectTarget: '',
        openGraphDescription: '',
        openGraphImage: '',
        openGraphTitle: '',
        openGraphType: '',
        openGraphUrl: '',
        schemaItems: '',
        schemaTypes: '',
        sessions: '',
        statusCode: '',
        tagManagers: '',
        title: '',
        twitterCard: '',
        twitterDescription: '',
        twitterImage: '',
        twitterSite: '',
        twitterTitle: '',
        url: 'https://www.conductor.com/special/empty',
        urlDepth: '',
        urlFull: 'https://www.conductor.com/special/empty',
        urlType: '',
        visualAnalyticsServices: '',
        wordCount: '',
    },
    {
        analyticsServices: '',
        canonicalType: '',
        canonicalUrl: '',
        domain: '',
        https: '',
        indexable: '',
        inXMLSitemap: '',
        isDisallowedInRobotsTxt: '',
        isIndexableDueToMetaRobots: '',
        isIndexableDueToXRobotsTag: '',
        h1: '',
        lighthousePerformance: '',
        lighthouseCLS: '',
        lighthouseFCP: '',
        lighthouseLCP: '',
        lighthouseSI: '',
        lighthouseTBT: '',
        lighthouseTTI: '',
        metaDescription: '',
        redirectTarget: '',
        openGraphDescription: '',
        openGraphImage: '',
        openGraphTitle: '',
        openGraphType: '',
        openGraphUrl: '',
        schemaItems: '',
        schemaTypes: '',
        sessions: '',
        statusCode: '',
        tagManagers: [
            'ChangeType.GOOGLE_TAG_MANAGER',
            'ChangeType.SEGMENT_COM_TAG_MANAGER',
            'fake_tag_manager',
        ],
        title: '',
        twitterCard: '',
        twitterDescription: '',
        twitterImage: '',
        twitterSite: '',
        twitterTitle: '',
        url: 'https://www.conductor.com/special/invalid',
        urlDepth: '',
        urlFull: 'https://www.conductor.com/special/invalid',
        urlType: '',
        visualAnalyticsServices: '',
        wordCount: '',
    },
];

const finalRes = [...res, ...specialColumns].sort((a, b) => (a.url || '').localeCompare(b.url || ''));

console.log(
    JSON.stringify(finalRes, null, 4)
    .replace(/"((ChangeType|WebVitalRange|PageType)\.[a-zA-Z_]+)"/g, '$1')
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/"/g, "'")
);

