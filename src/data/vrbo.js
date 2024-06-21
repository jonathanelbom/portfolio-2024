import { template, transformProject, filterAndSort } from './util';

const images = [
    'card-carousel-motion.png',
    'card-carousel.png',
    'drawer.png',
    // 'drop-party-ui.png',
    // 'drop-party.png',
    'guest-picker.png',
    'hcom.png',
    'image-carousel.png',
    'inline-message.png',
    'modal.png',
    'northstar.png',
    'personalized-hp.png',
    'photos.png',
    // 'placeholder.png',
    'polling-explore.png',
    'polling-lab.png',
    'polling.png',
    'react-demos.png',
    'serp-filters.png',
    'single-image-carousel.png',
    'swipable.png',
    'tripboards.png',
    'vertical-carousel.png',
];

const titles = [
    'Carousel Motion Study',
    'Card Carousel',
    'Drawer',
    // 'drop-party-ui.png',
    // 'drop-party.png',
    'Guest Piker',
    'Hcom Property Details',
    'image-carousel.png',
    'Inline Message',
    'Modal Enhancements',
    '',
    'Personalized Homepage',
    'Photo Manager',
    // 'placeholder.png',
    'TB Polling - Iterations',
    'TB Polling - UX Lab',
    'TB Polling - Prods',
    'Prod demos',
    'Search Filters Study',
    'Single Image Carousel',
    'Swiepable Carousel',
    'Trip Boards',
    'Vertical Image Carousel',
];

export const _vrbo = images.map((image, i) => {
    const title = titles[i];
    const id = title.split(' ').join('').toLowerCase();
    return {
        ...template,
        title,
        id,
        assets: [
            {
                label: '',
                id,
                type: 'image',
                uri: `vrbo/${image}`,
            },
        ],
    };
});

export const vrbo = [
    {
        tags: ['vrbo', 'proto', 'ds'],
        id: 'carouselmotionstudy',
        title: 'Carousel Motion Study',
        role: '',
        descr: '',
        format: [],
        assets: [
            {
                label: '',
                id: 'carouselmotionstudy',
                type: 'image',
                uri: 'vrbo/card-carousel-motion.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/react-card-carousel/slide-motion/',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['vrbo', 'prod', 'ds'],
        id: 'cardcarousel',
        title: 'Card Carousel',
        role: '',
        descr: '',
        format: [],
        assets: [
            {
                label: '',
                id: 'cardcarousel',
                type: 'image',
                uri: 'vrbo/card-carousel.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/react-card-carousel/docs/',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['vrbo', 'prod', 'ds'],
        id: 'drawer',
        title: 'Drawer',
        role: '',
        descr: '',
        format: [],
        assets: [
            {
                label: '',
                id: 'drawer',
                type: 'image',
                uri: 'vrbo/drawer.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/react-drawers/#',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['vrbo', 'prod', 'ds'],
        id: 'guestpicker',
        title: 'Guest Picker',
        role: '',
        descr: '',
        format: [],
        assets: [
            {
                label: '',
                id: 'guestpicker',
                type: 'image',
                uri: 'vrbo/guest-picker.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/react-guest-picker/',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['vrbo', 'proto', 'ds'],
        id: 'hcompropertydetails',
        title: 'Hcom Property Details',
        role: '',
        descr: '',
        format: [],
        assets: [
            {
                label: '',
                id: 'hcompropertydetails',
                type: 'image',
                uri: 'vrbo/hcom.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/hcom-pdp/',
            },
        ],
        sizes: ['desktop'],
    },
    {
        tags: ['vrbo', 'prod', 'ds'],
        id: 'image-carousel.png',
        title: 'Image Carousel',
        role: '',
        descr: '',
        format: [],
        assets: [
            {
                label: '',
                id: 'image-carousel.png',
                type: 'image',
                uri: 'vrbo/image-carousel.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/react-image-carousel/',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['vrbo', 'prod', 'ds'],
        id: 'inlinemessage',
        title: 'Inline Message',
        role: '',
        descr: '',
        format: [],
        assets: [
            {
                label: 'https://portfolio.jonnybomb.com/work/vrbo/react-inline-message/docs/',
                id: 'inlinemessage',
                type: 'image',
                uri: 'vrbo/inline-message.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: '',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['vrbo', 'prod', 'ds'],
        id: 'modalenhancements',
        title: 'Modal Enhancements',
        role: '',
        descr: '',
        format: [],
        assets: [
            {
                label: '',
                id: 'modalenhancements',
                type: 'image',
                uri: 'vrbo/modal.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/react-modal/docs/',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['vrbo', 'proto', 'ds'],
        id: 'northstarexperience',
        title: 'Northstar experience',
        role: '',
        descr: '',
        format: [],
        assets: [
            {
                label: '',
                id: 'northstarexperience',
                type: 'image',
                uri: 'vrbo/northstar.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/northstar/#init',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['vrbo', 'prod', 'ds'],
        id: 'personalizedhomepage',
        title: 'Personalized Homepage',
        role: '',
        descr: '',
        format: [],
        assets: [
            {
                label: '',
                id: 'personalizedhomepage',
                type: 'image',
                uri: 'vrbo/personalized-hp.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/personlized-hp/',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['vrbo', 'proto', 'ds'],
        id: 'photomanager',
        title: 'Partner Photo Manager',
        role: '',
        descr: '',
        format: [],
        assets: [
            {
                label: '',
                id: 'photomanager',
                type: 'image',
                uri: 'vrbo/photos.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/prototype-mobilephotos/#/reorder',
            },
        ],
        sizes: ['mobile'],
    },
    {
        tags: ['vrbo', 'proto', 'ds'],
        id: 'tbpolling-iterations',
        title: 'Polling - Iterations',
        role: '',
        descr: '',
        format: [],
        assets: [
            {
                label: '',
                id: 'tbpolling-iterations',
                type: 'image',
                uri: 'vrbo/polling-explore.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/group-collab-polling/all-flows/?brand=vrbo',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['vrbo', 'proto', 'ds'],
        id: 'tbpolling-uxlab',
        title: 'Polling - UX Lab',
        role: '',
        descr: '',
        format: [],
        assets: [
            {
                label: '',
                id: 'tbpolling-uxlab',
                type: 'image',
                uri: 'vrbo/polling-lab.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/react-groupcollab-polling-study/',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['vrbo', 'proto', 'ds'],
        id: 'tbpolling-prods',
        title: 'Polling - Production Demo',
        role: '',
        descr: '',
        format: [],
        assets: [
            {
                label: '',
                id: 'tbpolling-prods',
                type: 'image',
                uri: 'vrbo/polling.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/group-collab-polling/?brand=vrbo',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['vrbo', 'prod', 'ds'],
        id: 'proddemos',
        title: 'Production demos',
        role: '',
        descr: '',
        format: [],
        assets: [
            {
                label: '',
                id: 'proddemos',
                type: 'image',
                uri: 'vrbo/react-demos.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/react-demos/docs/',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['vrbo', 'proto', 'ds'],
        id: 'searchfiltersstudy',
        title: 'Search Filters Study',
        role: '',
        descr: '',
        format: [],
        assets: [
            {
                label: '',
                id: 'searchfiltersstudy',
                type: 'image',
                uri: 'vrbo/serp-filters.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/mobile-filters/',
            },
        ],
        sizes: ['mobile'],
    },
    {
        tags: ['vrbo', 'prod', 'ds'],
        id: 'singleimagecarousel',
        title: 'Single Image Carousel',
        role: '',
        descr: '',
        format: [],
        assets: [
            {
                label: '',
                id: 'singleimagecarousel',
                type: 'image',
                uri: 'vrbo/single-image-carousel.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/react-single-image-carousel/docs/',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['vrbo', 'prod', 'ds'],
        id: 'swiepablecarousel',
        title: 'Swiepable Carousel',
        role: '',
        descr: '',
        format: [],
        assets: [
            {
                label: '',
                id: 'swiepablecarousel',
                type: 'image',
                uri: 'vrbo/swipable.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/react-swipable-carousel/docs/',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['vrbo', 'proto', 'ds'],
        id: 'tripboards',
        title: 'Trip Boards',
        role: '',
        descr: '',
        format: [],
        assets: [
            {
                label: '',
                id: 'tripboards',
                type: 'image',
                uri: 'vrbo/tripboards.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/group-collab/',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['vrbo', 'prod', 'ds'],
        id: 'verticalimagecarousel',
        title: 'Vertical Image Carousel',
        role: '',
        descr: '',
        format: [],
        assets: [
            {
                label: '',
                id: 'verticalimagecarousel',
                type: 'image',
                uri: 'vrbo/vertical-carousel.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/react-vertical-image-carousel/docs/',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['vrbo', 'video'],
        id: 'tripboardspollingvideo',
        title: 'Trip Boards Polling',
        role: '',
        descr: 'Highlights how my prototyping skills, specifically around mobile web touch interactions and motion design, aided in UX Lab tests, design iterations, and ultimately the final production build.<br/><br/><i>These demos can be viewed using the links below or from the projects listed in the Vrbo/EG prototypes section.</i>.',
        sizes: ['mobile', 'desktop'],
        assets: [],
        videos: [
            {
                url: 'https://www.youtube.com/watch?v=Y84gWdJdeWk',
            },
        ],
        links: [
            {
                label: 'UX Lab',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/react-groupcollab-polling-study/',
            },
            {
                label: 'Iterations',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/group-collab-polling/all-flows/?brand=vrbo',
            },
            {
                label: 'Production Demos',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/group-collab-polling/?brand=vrbo',
            },
        ],
    },
    {
        tags: ['vrbo', 'video'],
        id: 'tripboardsvideo',
        title: 'Trip Boards Prototype',
        role: '',
        descr: 'The Desktop and mobile Trip Boards experience evergreen prototype, where I can collaborate with design as we ideate on new features or improvements. <br/><br/><i>This demos can be viewed using the link below or from the project listed in the Vrbo/EG prototypes section.</i>.',
        sizes: ['mobile', 'desktop'],
        assets: [],
        videos: [
            {
                url: 'https://www.youtube.com/watch?v=rjR34Ua8YT0',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/group-collab/',
            },
        ],
    },
    {
        tags: ['vrbo', 'video'],
        id: 'northstarexperiencevideo',
        title: 'Homeaway Northstar Experience',
        role: '',
        descr: 'A vision demo for the  Homeaway Northstar experience, including Immersive Search, Search Results, Property Details, and Scratchpad (to become Trip Boards).  <br/><br/><i>This demos can be viewed using the link below or from the project listed in the Vrbo/EG prototypes section.</i>.',
        sizes: ['mobile', 'desktop'],
        assets: [],
        videos: [
            {
                url: 'https://www.youtube.com/watch?v=oUXfuAj7_cw',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/vrbo/northstar/#init',
            },
        ],
    },
    {
        tags: ['vrbo', 'video'],
        id: 'egxpvideo',
        title: 'EG Experience Platfrom',
        role: '',
        descr: 'A Walk-through of how to use the templates and layouts of the EG experience platform to create the different pages in the Supply Partner Unified Onboarding App (UFO).',
        sizes: ['desktop'],
        assets: [],
        videos: [
            {
                url: 'https://www.youtube.com/watch?v=79cAIdAb9Tc',
            },
        ],
        links: [],
    },
    {
        tags: ['vrbo', 'video'],
        id: 'egconsolevideo',
        title: 'EG Console UX transformation',
        role: '',
        descr: 'Demo of how I transformed the UX for the EG console experience. Shows the old version of the EG Console, and then the version where I systematically applied UX updates, including the introduction of the Left Nav and updates to page layouts and styles.',
        sizes: ['desktop'],
        assets: [],
        videos: [
            {
                url: 'https://www.youtube.com/watch?v=ZN3KnsVjkBs',
            },
        ],
        links: [],
    },
];

export const vrbo_proto = filterAndSort(
    vrbo.filter(({ tags }) => tags.includes('proto')).map((p) => transformProject(p)),
);
export const vrbo_prod = filterAndSort(
    vrbo.filter(({ tags }) => tags.includes('prod')).map((p) => transformProject(p)),
);
export const vrbo_videos = filterAndSort(
    vrbo.filter(({ tags }) => tags.includes('video')).map((p) => transformProject(p)),
    false,
);

export const vrbo_all = [...vrbo_proto, ...vrbo_prod];
