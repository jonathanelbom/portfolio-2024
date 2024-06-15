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
    'Northstar experience',
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
                url: '',
            },
        ],
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
                url: '',
            },
        ],
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
                url: '',
            },
        ],
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
                url: '',
            },
        ],
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
                url: '',
            },
        ],
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
                url: '',
            },
        ],
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
                label: '',
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
                url: '',
            },
        ],
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
                url: '',
            },
        ],
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
                url: '',
            },
        ],
    },
    {
        tags: ['vrbo', 'proto', 'ds'],
        id: 'photomanager',
        title: 'Photo Manager',
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
                url: '',
            },
        ],
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
                url: '',
            },
        ],
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
                url: '',
            },
        ],
    },
    {
        tags: ['vrbo', 'prod', 'ds'],
        id: 'tbpolling-prods',
        title: 'Polling - Production',
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
                url: '',
            },
        ],
    },
    {
        tags: ['vrbo', 'proto', 'ds'],
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
                url: '',
            },
        ],
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
                url: '',
            },
        ],
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
                url: '',
            },
        ],
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
                url: '',
            },
        ],
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
                url: '',
            },
        ],
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
                url: '',
            },
        ],
    },
];

export const vrbo_proto = filterAndSort(
    vrbo.filter(({ tags }) => tags.includes('proto')).map((project) => transformProject(project)),
);
export const vrbo_prod = filterAndSort(
    vrbo.filter(({ tags }) => tags.includes('prod')).map((project) => transformProject(project)),
);
