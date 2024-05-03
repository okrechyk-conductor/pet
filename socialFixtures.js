const mockGridData = [
    {
        canonicalType: 'internalSelf',
        canonicalUrl: 'https://www.conductor.com/',
        domain: 'www.conductor.com',
        https: true,
        indexable: true,
        isDisallowedInRobotsTxt: false,
        isIndexableDueToMetaRobots: 'yes',
        isIndexableDueToXRobotsTag: 'yes',
        lighthousePerformance: { value: 82, range: 'WebVitalRange.Good'},
        lighthouseFcp: { value: 1700, range: 'WebVitalRange.Good'},
        lighthouseTti: { value: 9200, range: 'WebVitalRange.Bad'},
        lighthouseSi: { value: 1500, range: 'WebVitalRange.Good'},
        lighthouseTbt: { value: 439, range: 'WebVitalRange.Bad'},
        lighthouseLcp: { value: 1900, range: 'WebVitalRange.Good'},
        lighthouseCls: { value: 0, range: 'WebVitalRange.Good'},
        redirectTarget: 'https://www.conductor.com/',
        schemaItems: 2,
        schemaTypes: 'Person, WebSite',
        statusCode: 200,
        url: 'https://www.conductor.com/',
        urlDepth: 12,
        urlType: 'PageType.Page',
    },
    {
        canonicalType: 'cross_domain',
        canonicalUrl: 'https://www.conductor.com/recipes',
        domain: 'www.conductor.com',
        https: false,
        indexable: true,
        inXMLSitemap: true,
        isDisallowedInRobotsTxt: false,
        isIndexableDueToMetaRobots: 'no',
        isIndexableDueToXRobotsTag: 'yes',
        lighthousePerformance: { value: 62, range: 'WebVitalRange.NeedsImprovement'},
        lighthouseFcp: { value: 1600, range: 'WebVitalRange.Good'},
        lighthouseTti: { value: 3200, range: 'WebVitalRange.Good'},
        lighthouseSi: { value: 2600, range: 'WebVitalRange.Good'},
        lighthouseTbt: { value: 494, range: 'WebVitalRange.Bad'},
        lighthouseLcp: { value: 2000, range: 'WebVitalRange.Good'},
        lighthouseCls: { value: 10, range: 'WebVitalRange.NeedsImprovement'},
        redirectTarget: 'https://www.conductor.com/recipes',
        schemaItems: 1,
        schemaTypes: 'WebSite',
        statusCode: 301,
        url: 'https://www.conductor.com/recipes',
        urlDepth: 1,
        urlType: 'PageType.Redirect',
    },
    {
        domain: 'www.conductor.com',
        https: null,
        indexable: true,
        inXMLSitemap: false,
        isDisallowedInRobotsTxt: true,
        isIndexableDueToMetaRobots: 'no',
        isIndexableDueToXRobotsTag: 'no',
        lighthousePerformance: { value: 67, range: 'WebVitalRange.NeedsImprovement'},
        lighthouseFcp: { value: 1000, range: 'WebVitalRange.Good'},
        lighthouseTti: { value: 2200, range: 'WebVitalRange.Good'},
        lighthouseSi: { value: 3200, range: 'WebVitalRange.Good'},
        lighthouseTbt: { value: 308, range: 'WebVitalRange.NeedsImprovement'},
        lighthouseLcp: { value: 2200, range: 'WebVitalRange.Good'},
        lighthouseCls: { value: 3, range: 'WebVitalRange.Good'},
        redirectTarget: 'https://www.conductor.com/recipes/vegan-salmon',
        schemaItems: 0,
        schemaTypes: null,
        statusCode: 0,
        url: 'https://www.conductor.com/recipes/vegan-salmon',
        urlDepth: 3,
        urlType: 'PageType.Missing',
    },
    {
        domain: 'www.conductor.com',
        canonicalType: null,
        canonicalUrl: 'https://www.conductor.com/blog',
        https: false,
        inXMLSitemap: false,
        isIndexableDueToMetaRobots: 'yes',
        isIndexableDueToXRobotsTag: 'yes',
        lighthousePerformance: { value: 72, range: 'WebVitalRange.NeedsImprovement'},
        lighthouseFcp: { value: 1000, range: 'WebVitalRange.Good'},
        lighthouseTti: { value: 8900, range: 'WebVitalRange.Bad'},
        lighthouseSi: { value: 4000, range: 'WebVitalRange.Good'},
        lighthouseTbt: { value: 210, range: 'WebVitalRange.NeedsImprovement'},
        lighthouseLcp: { value: 2100, range: 'WebVitalRange.Good'},
        lighthouseCls: { value: 0, range: 'WebVitalRange.Good'},
        redirectTarget: 'https://www.conductor.com/',
        schemaItems: 4,
        schemaTypes: 'Organization, Event, Review, WebSite',
        statusCode: 200,
        url: 'https://www.conductor.com/blog',
        urlDepth: 7,
        urlFull: 'https://www.conductor.com/blog',
        urlType: 'PageType.Page',
    },
    {
        domain: null,
        canonicalType: null,
        canonicalUrl: null,
        https: null,
        indexable: null,
        inXMLSitemap: null,
        isDisallowedInRobotsTxt: null,
        isIndexableDueToMetaRobots: null,
        isIndexableDueToXRobotsTag: null,
        lighthousePerformance: null,
        lighthouseFcp: null,
        lighthouseTti: null,
        lighthouseSi: null,
        lighthouseTbt: null,
        lighthouseLcp: null,
        lighthouseCls: null,
        redirectTarget: null,
        schemaItems: null,
        schemaTypes: null,
        statusCode: null,
        url: 'https://www.conductor.com/special/null',
        urlFull: 'https://www.conductor.com/special/null',
        urlType: null,
    },
    {
        domain: 'www.conductor.com',
        canonicalType: 'internalSelf',
        canonicalUrl: 'https://www.conductor.com/about',
        https: true,
        indexable: true,
        inXMLSitemap: true,
        isDisallowedInRobotsTxt: true,
        isIndexableDueToMetaRobots: 'no',
        isIndexableDueToXRobotsTag: 'yes',
        lighthousePerformance: { value: 62, range: 'WebVitalRange.NeedsImprovement'},
        lighthouseFcp: { value: 1400, range: 'WebVitalRange.Good'},
        lighthouseTti: { value: 6900, range: 'WebVitalRange.NeedsImprovement'},
        lighthouseSi: { value: 2400, range: 'WebVitalRange.Good'},
        lighthouseTbt: { value: 299, range: 'WebVitalRange.NeedsImprovement'},
        lighthouseLcp: { value: 1800, range: 'WebVitalRange.Good'},
        lighthouseCls: { value: 24, range: 'WebVitalRange.Bad'},
        redirectTarget: 'https://www.conductor.com/about',
        schemaItems: 4,
        schemaTypes: 'BreadcrumbList, Person, Article, Event',
        statusCode: 307,
        url: null,
        urlDepth: 1,
        urlFull: null,
        urlType: 'PageType.ServerError',
    },
    {
        domain: '',
        canonicalType: '',
        canonicalUrl: '',
        https: '',
        indexable: '',
        inXMLSitemap: '',
        isDisallowedInRobotsTxt: '',
        isIndexableDueToMetaRobots: '',
        isIndexableDueToXRobotsTag: '',
        lighthousePerformance: '',
        lighthouseFcp: '',
        lighthouseTti: '',
        lighthouseSi: '',
        lighthouseTbt: '',
        lighthouseLcp: '',
        lighthouseCls: '',
        redirectTarget: '',
        schemaItems: '',
        schemaTypes: '',
        statusCode: '',
        url: 'https://www.conductor.com/special/empty',
        urlDepth: '',
        urlFull: 'https://www.conductor.com/special/empty',
        urlType: '',
    },
    {
        domain: 'conductor.com',
        canonicalType: 'not_applicable',
        canonicalUrl: 'https://www.conductor.com/about/history',
        https: false,
        indexable: true,
        inXMLSitemap: true,
        isDisallowedInRobotsTxt: false,
        isIndexableDueToMetaRobots: 'yes',
        lighthousePerformance: { value: 73, range: 'WebVitalRange.NeedsImprovement'},
        lighthouseFcp: { value: 1700, range: 'WebVitalRange.Good'},
        lighthouseTti: { value: 3100, range: 'WebVitalRange.Good'},
        lighthouseSi: { value: 2500, range: 'WebVitalRange.Good'},
        lighthouseTbt: { value: 394, range: 'WebVitalRange.Bad'},
        lighthouseLcp: { value: 2300, range: 'WebVitalRange.Good'},
        lighthouseCls: { value: 0, range: 'WebVitalRange.Good'},
        redirectTarget: 'https://www.conductor.com/about/history',
        schemaItems: 3,
        schemaTypes: 'BreadcrumbList, Article, Review',
        statusCode: '',
        url: 'https://www.conductor.com/about?hello&somethingelse=hello',
        urlDepth: 8,
        urlFull: 'https://www.conductor.com/about?hello&somethingelse=hello',
        urlType: 'PageType.Unreachable',
    },
    {
        canonicalType: 'internalSelf',
        canonicalUrl: 'https://www.conductor.com/blog',
        https: true,
        indexable: true,
        inXMLSitemap: false,
        isDisallowedInRobotsTxt: false,
        isIndexableDueToXRobotsTag: 'yes',
        lighthousePerformance: { value: 56, range: 'WebVitalRange.Bad'},
        lighthouseFcp: { value: 1000, range: 'WebVitalRange.Good'},
        lighthouseTti: { value: 8800, range: 'WebVitalRange.Bad'},
        lighthouseSi: { value: 3800, range: 'WebVitalRange.Good'},
        lighthouseTbt: { value: 542, range: 'WebVitalRange.Bad'},
        lighthouseLcp: { value: 2400, range: 'WebVitalRange.Good'},
        lighthouseCls: { value: 0, range: 'WebVitalRange.Good'},
        redirectTarget: 'https://www.conductor.com/blog',
        schemaItems: 1,
        schemaTypes: 'LocalBusiness',
        statusCode: 404,
        urlDepth: 13,
        urlType: 'PageType.Redirect',
    },
    {
        canonicalType: undefined,
        canonicalUrl: undefined,
        domain: undefined,
        https: undefined,
        indexable: undefined,
        inXMLSitemap: undefined,
        isDisallowedInRobotsTxt: undefined,
        isIndexableDueToMetaRobots: undefined,
        isIndexableDueToXRobotsTag: undefined,
        lighthousePerformance: undefined,
        lighthouseFcp: undefined,
        lighthouseTti: undefined,
        lighthouseSi: undefined,
        lighthouseTbt: undefined,
        lighthouseLcp: undefined,
        lighthouseCls: undefined,
        redirectTarget: undefined,
        schemaItems: undefined,
        schemaTypes: undefined,
        statusCode: undefined,
        url: 'https://www.conductor.com/special/undefined',
        urlFull: 'https://www.conductor.com/special/undefined',
        urlType: undefined,
    },
    {
        canonicalType: 'none',
        canonicalUrl: 'https://www.conductor.com/blog/how-long-to-cook-steak',
        domain: 'www.conductor.com',
        https: true,
        indexable: false,
        inXMLSitemap: true,
        isIndexableDueToMetaRobots: 'yes',
        isIndexableDueToXRobotsTag: 'yes',
        lighthousePerformance: { value: 79, range: 'WebVitalRange.NeedsImprovement'},
        lighthouseFcp: { value: 1800, range: 'WebVitalRange.NeedsImprovement'},
        lighthouseTti: { value: 9000, range: 'WebVitalRange.Bad'},
        lighthouseSi: { value: 2200, range: 'WebVitalRange.Good'},
        lighthouseTbt: { value: 634, range: 'WebVitalRange.Bad'},
        lighthouseLcp: { value: 1100, range: 'WebVitalRange.Good'},
        lighthouseCls: { value: 0, range: 'WebVitalRange.Good'},
        redirectTarget: 'https://www.conductor.com/blog/how-long-to-cook-steak',
        schemaItems: 3,
        schemaTypes: 'Person, Event, LocalBusiness',
        statusCode: null,
        url: 'https://www.conductor.com/blog/how-long-to-cook-steak',
        urlDepth: 0,
        urlFull: 'https://www.conductor.com/blog/how-long-to-cook-steak',
        urlType: 'PageType.Page',
    },
    {
        canonicalType: 'invalid',
        canonicalUrl: 'https://www.conductor.com/recipes/easy-filet',
        domain: 'conductor.com',
        https: true,
        indexable: false,
        inXMLSitemap: false,
        isDisallowedInRobotsTxt: false,
        isIndexableDueToMetaRobots: 'no',
        isIndexableDueToXRobotsTag: 'yes',
        lighthousePerformance: { value: 97, range: 'WebVitalRange.Good'},
        lighthouseFcp: { value: 1600, range: 'WebVitalRange.Good'},
        lighthouseTti: { value: 5000, range: 'WebVitalRange.NeedsImprovement'},
        lighthouseSi: { value: 3600, range: 'WebVitalRange.Good'},
        lighthouseTbt: { value: 252, range: 'WebVitalRange.NeedsImprovement'},
        lighthouseLcp: { value: 1800, range: 'WebVitalRange.Good'},
        lighthouseCls: { value: 0, range: 'WebVitalRange.Good'},
        schemaItems: 2,
        schemaTypes: 'Article, Review',
        url: 'https://www.conductor.com/recipes/easy-filet',
        urlDepth: 11,
        urlFull: 'https://www.conductor.com/recipes/easy-filet',
        urlType: 'PageType.OverQuota',
    },
    {
        canonicalType: 'cross_domain',
        canonicalUrl: 'https://www.conductor.com/recipes/vegan-salmon',
        domain: 'www.conductor.com',
        indexable: true,
        inXMLSitemap: true,
        isDisallowedInRobotsTxt: true,
        isIndexableDueToMetaRobots: 'not_applicable',
        isIndexableDueToXRobotsTag: 'not_applicable',
        lighthousePerformance: { value: 85, range: 'WebVitalRange.Good'},
        lighthouseFcp: { value: 1200, range: 'WebVitalRange.Good'},
        lighthouseTti: { value: 8400, range: 'WebVitalRange.Bad'},
        lighthouseSi: { value: 3000, range: 'WebVitalRange.Good'},
        lighthouseTbt: { value: 466, range: 'WebVitalRange.Bad'},
        lighthouseLcp: { value: 1000, range: 'WebVitalRange.Good'},
        lighthouseCls: { value: 0, range: 'WebVitalRange.Good'},
        redirectTarget: 'https://www.conductor.com/',
        schemaItems: 1,
        schemaTypes: 'Product',
        statusCode: 500,
        url: 'https://www.conductor.com/about/history',
        urlDepth: 4,
        urlFull: 'https://www.conductor.com/about/history',
        urlType: 'PageType.Unknown',
    },
    {
        canonicalType: 'internalSelf',
        canonicalUrl: 'https://www.conductor.com/blog/5-best-chicken-recipes',
        domain: 'www.conductor.com',
        https: true,
        indexable: true,
        inXMLSitemap: true,
        isDisallowedInRobotsTxt: false,
        isIndexableDueToMetaRobots: 'not_applicable',
        isIndexableDueToXRobotsTag: 'yes',
        lighthousePerformance: { value: 94, range: 'WebVitalRange.Good'},
        lighthouseFcp: { value: 1300, range: 'WebVitalRange.Good'},
        lighthouseTti: { value: 2100, range: 'WebVitalRange.Good'},
        lighthouseSi: { value: 3000, range: 'WebVitalRange.Good'},
        lighthouseTbt: { value: 515, range: 'WebVitalRange.Bad'},
        lighthouseLcp: { value: 2600, range: 'WebVitalRange.NeedsImprovement'},
        lighthouseCls: { value: 0, range: 'WebVitalRange.Good'},
        redirectTarget: 'https://www.conductor.com/blog/5-best-chicken-recipes',
        schemaItems: 0,
        schemaTypes: null,
        statusCode: 200,
        url: 'https://www.conductor.com/blog/5-best-chicken-recipes',
        urlDepth: null,
        urlFull: 'https://www.conductor.com/blog/5-best-chicken-recipes',
        urlType: 'PageType.Missing',
    },
    {
        canonicalType: 'internal_other',
        canonicalUrl: 'https://www.conductor.com/blog/10-best-vegan-recipes',
        domain: 'www.conductor.com',
        https: true,
        indexable: true,
        inXMLSitemap: true,
        isDisallowedInRobotsTxt: false,
        isIndexableDueToMetaRobots: 'yes',
        isIndexableDueToXRobotsTag: 'no',
        lighthousePerformance: { value: 78, range: 'WebVitalRange.NeedsImprovement'},
        lighthouseFcp: { value: 1100, range: 'WebVitalRange.Good'},
        lighthouseTti: { value: 8200, range: 'WebVitalRange.Bad'},
        lighthouseSi: { value: 3600, range: 'WebVitalRange.Good'},
        lighthouseTbt: { value: 300, range: 'WebVitalRange.NeedsImprovement'},
        lighthouseLcp: { value: 1400, range: 'WebVitalRange.Good'},
        lighthouseCls: { value: 0, range: 'WebVitalRange.Good'},
        redirectTarget: 'https://www.conductor.com/blog/10-best-vegan-recipes',
        schemaItems: 3,
        schemaTypes: 'BreadcrumbList, Organization, Review',
        statusCode: 404,
        url: 'https://www.conductor.com/blog/10-best-vegan-recipes',
        urlFull: 'https://www.conductor.com/blog/10-best-vegan-recipes',
        urlType: 'PageType.Other',
    },
];

  const websiteTitles = {
    'https://www.conductor.com/': 'Conductor - Home',
    'https://www.conductor.com/recipes': 'Conductor - Recipes',
    'https://www.conductor.com/blog': 'Conductor - Blog',
    'https://www.conductor.com/about': 'Conductor - About',
    'https://www.conductor.com/about/history': 'Conductor - History',
    'https://www.conductor.com/blog/how-long-to-cook-steak': 'Conductor - How long to cook steak',
    'https://www.conductor.com/recipes/easy-filet': 'Conductor - Easy filet',
    'https://www.conductor.com/recipes/vegan-salmon': 'Conductor - Vegan salmon',
    'https://www.conductor.com/blog/5-best-chicken-recipes': 'Conductor - 5 best chicken Recipes',
    'https://www.conductor.com/blog/10-best-vegan-recipes': 'Conductor - 10 best vegan Recipes'
  }

  const websiteDescriptions = {
    'https://www.conductor.com/': 'Explore culinary wonders with Conductor - recipes, blogs, and more!',
    'https://www.conductor.com/recipes': 'Discover a world of flavor - Conductor\'s diverse recipe collection awaits!',
    'https://www.conductor.com/blog': 'Get culinary insights and recipe recommendations from Conductor\'s blog.',
    'https://www.conductor.com/about': 'Learn about Conductor\'s mission and the team behind the culinary magic.',
    'https://www.conductor.com/about/history': 'Trace Conductor\'s journey from inception to culinary innovation.',
    'https://www.conductor.com/blog/how-long-to-cook-steak': 'Master steak perfection with Conductor\'s expert cooking tips.',
    'https://www.conductor.com/recipes/easy-filet': 'Enjoy delicious, hassle-free filet recipes with Conductor.',
    'https://www.conductor.com/recipes/vegan-salmon': 'Dive into plant-based delights with Conductor\'s vegan salmon recipes.',
    'https://www.conductor.com/blog/5-best-chicken-recipes': 'Discover Conductor\'s top-rated chicken dishes for culinary bliss.',
    'https://www.conductor.com/blog/10-best-vegan-recipes': 'Explore Conductor\'s finest vegan creations for a plant-powered feast.'
  };

    const websiteImages = {
        'https://www.conductor.com/': 'https://www.conductor.com/images/home.jpg',
        'https://www.conductor.com/recipes': 'https://www.conductor.com/images/recipes.jpg',
        'https://www.conductor.com/blog': 'https://www.conductor.com/images/blog.jpg',
        'https://www.conductor.com/about': 'https://www.conductor.com/images/about.jpg',
        'https://www.conductor.com/about/history': 'https://www.conductor.com/images/history.jpg',
        'https://www.conductor.com/blog/how-long-to-cook-steak': 'https://www.conductor.com/images/steak.jpg',
        'https://www.conductor.com/recipes/easy-filet': 'https://www.conductor.com/images/filet.jpg',
        'https://www.conductor.com/recipes/vegan-salmon': 'https://www.conductor.com/images/salmon.jpg',
        'https://www.conductor.com/blog/5-best-chicken-recipes': 'https://www.conductor.com/images/chicken.jpg',
        'https://www.conductor.com/blog/10-best-vegan-recipes': 'https://www.conductor.com/images/vegan.jpg'
    };
  


    console.log(mockGridData.map((item) => {
        return {
            canonicalType: item.canonicalType,
            canonicalUrl: item.canonicalUrl,
            domain: item.domain,
            https: item.https,
            indexable: item.indexable,
            inXMLSitemap: item.inXMLSitemap,
            isDisallowedInRobotsTxt: item.isDisallowedInRobotsTxt,
            isIndexableDueToMetaRobots: item.isIndexableDueToMetaRobots,
            isIndexableDueToXRobotsTag: item.isIndexableDueToXRobotsTag,
            lighthousePerformance: item.lighthousePerformance,
            lighthouseFcp: item.lighthouseFcp,
            lighthouseTti: item.lighthouseTti,
            lighthouseSi: item.lighthouseSi,
            lighthouseTbt: item.lighthouseTbt,
            lighthouseLcp: item.lighthouseLcp,
            lighthouseCls: item.lighthouseCls,
            redirectTarget: item.redirectTarget,
            openGraphDescription: websiteDescriptions[item.canonicalUrl] || item.canonicalUrl,
            openGraphImage: websiteImages[item.canonicalUrl] || item.canonicalUrl,
            openGraphTitle: websiteTitles[item.canonicalUrl] || item.canonicalUrl,
            openGraphType: item.canonicalUrl ? 'website' : item.canonicalUrl,
            openGraph_url: item.canonicalUrl ,
            schemaItems: item.schemaItems,
            schemaTypes: item.schemaTypes,
            statusCode: item.statusCode,
            twitterCard: item.canonicalUrl ? 'summaryLargeImage' : item.canonicalUrl,
            twitterDescription: websiteDescriptions[item.canonicalUrl] || item.canonicalUrl,
            twitterImage: websiteImages[item.canonicalUrl] || item.canonicalUrl,
            twitterSite: item.canonicalUrl ? '@conductor' : item.canonicalUrl,
            twitterTitle: websiteTitles[item.canonicalUrl] || item.canonicalUrl,
            url: item.url,
            urlDepth: item.urlDepth,
            urlFull: item.urlFull,
            urlType: item.urlType,
        };
    }));