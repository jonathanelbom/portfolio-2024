import { pdfjs } from 'react-pdf';
import { template, transformProject, filterAndSort } from './util';

const images = [
    'card-carousel-motion.png',
    'card-carousel.png',
    'drawer.png',
    'guest-picker.png',
    'hcom.png',
    'image-carousel.png',
    'inline-message.png',
    'modal.png',
    'northstar.png',
    'personalized-hp.png',
    'photos.png',
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
    'Guest Piker',
    'Hcom Property Details',
    'image-carousel.png',
    'Inline Message',
    'Modal Enhancements',
    '',
    'Personalized Homepage',
    'Photo Manager',
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
        descr: 'A slide motion study with controls to explore the motion options around the single and paging transitions of the Card Carousel.',
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
        descr: "A click and scrolling mode supporting single and multi-card paging carousel with an accompanying extensible aspect-ratio based child card component. This component is littered throughout our experience and I have done several exploration around the extension of it's child cards",
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
        descr: 'A panel and modal drawer implementation with header controls and a native-like experience for stepping through screens.',
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
        descr: 'During a multi-month project to improve the usability of our Guest Picker feature, I partnered with our Design Systems UX Lead to create an improved prodcution implementation of our Guest Picker component. I also created a sample implementation in our Properties Detail Page.',
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
        descr: 'This is a UX Lab demo done for Hotels.com to explore user sentiment as they work to add vacation rental inventory to their site. After Figma was unable to provide the intended sticky behavior, I created this prototype, that is a combination of live production data that power the images and availability calendar as well as static images for section that do not require user interaction.',
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
        descr: "This component was built during my 6-month stint working on Property Details Page team as we worked to transition their code-base to React. The continually looping carousel supports stills, captions, and videos, has responsive touch gesture support, and supports inline and full-screen usage. Multiple carousel can be composed to create an inline experience that translate to full-screen. Use your phone or browser's mobile emulator to check out the swipe geture handling.",
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
        descr: 'An inline message component with baked-in transition for showing, hiding, changing icons, and changing messaging. The component was created during my work with the Design Systems team on improving the Traveler Guest Picker component.',
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
        descr: 'These enhancements involved adding a scrolling body modal, complete with built in scroll signifying shadows, and a swipe-dismissable bottom sheet modal, used to create a native-like experience on mobile web.',
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
    // {
    //     tags: ['vrbo', 'proto', 'ds'],
    //     id: 'northstarexperience',
    //     title: 'Northstar experience',
    //     role: '',
    //     descr: 'Though technically never used for production, I spent my first year at Vrbo building this prototype of the entire Traveler experience. This prototype did consume our production APIs, but for the sake of stability, it now just uses a scraped, static version of this data. It is a responsive experience that works for both desktop and mobile web. Try it out for a trip to "Chamonix".',
    //     assets: [
    //         {
    //             label: '',
    //             id: 'northstarexperience',
    //             type: 'image',
    //             uri: 'vrbo/northstar.png',
    //         },
    //     ],
    //     links: [
    //         {
    //             label: '',
    //             id: '',
    //             url: 'https://portfolio.jonnybomb.com/work/vrbo/northstar/#init',
    //         },
    //     ],
    //     sizes: ['mobile', 'desktop'],
    // },
    {
        tags: ['vrbo', 'prod', 'ds'],
        id: 'personalizedhomepage',
        title: 'Personalized Homepage',
        role: '',
        descr: 'This served as a UX Lab and production demo for an initiative to re-imagine what a personalized landing experience could be like. I built numerous configurable modules used to compose mobile, tablet, and desktop experiences.                                            ',
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
        descr: 'A mobile study to explore the photo onboarding process for new partners. I used my extensive knowlege of mobile web gestures to build out the photo "re-arranging" portion of this prototype.',
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
    // {
    //     tags: ['vrbo', 'proto', 'ds'],
    //     id: 'tbpolling-iterations',
    //     title: 'Polling - Iterations',
    //     role: '',
    //     descr: 'This prototype if a continuation of the Trip Boards polling work. With learnings for the UX study, the design team moved ahead and I iterated on the multiple different modes in which we could present this polling experience.',
    //     assets: [
    //         {
    //             label: '',
    //             id: 'tbpolling-iterations',
    //             type: 'image',
    //             uri: 'vrbo/polling-explore.png',
    //         },
    //     ],
    //     links: [
    //         {
    //             label: '',
    //             id: '',
    //             url: 'https://portfolio.jonnybomb.com/work/vrbo/group-collab-polling/all-flows/?brand=vrbo',
    //         },
    //     ],
    //     sizes: ['mobile', 'desktop'],
    // },
    // {
    //     tags: ['vrbo', 'proto', 'ds'],
    //     id: 'tbpolling-uxlab',
    //     title: 'Polling - UX Lab',
    //     role: '',
    //     descr: 'The first polling prototype, this is a mobile viewport sized study (on desktop and mobile) used to gain insight around our evolving group polling feature for Trip Boards. This study contained a combination of invision prototypes as well as the high-fidelity prototype (featured here) which focuses on the nuances of the drag-and-drop interactions for ranking your top properties.',
    //     assets: [
    //         {
    //             label: '',
    //             id: 'tbpolling-uxlab',
    //             type: 'image',
    //             uri: 'vrbo/polling-lab.png',
    //         },
    //     ],
    //     links: [
    //         {
    //             label: '',
    //             id: '',
    //             url: 'https://portfolio.jonnybomb.com/work/vrbo/react-groupcollab-polling-study/',
    //         },
    //     ],
    //     sizes: ['mobile', 'desktop'],
    // },
    // {
    //     tags: ['vrbo', 'proto', 'ds'],
    //     id: 'tbpolling-prods',
    //     title: 'Polling - Production Demo',
    //     role: '',
    //     descr: 'After deciding upon the best user flow from our polling explorations, I built a production demo prototyoe that covered both the poll creation and poll taking experiences. For this work, I adopted a modified drag and drop experience to better match our native experiences, which were concurrently being developed.',
    //     assets: [
    //         {
    //             label: '',
    //             id: 'tbpolling-prods',
    //             type: 'image',
    //             uri: 'vrbo/polling.png',
    //         },
    //     ],
    //     links: [
    //         {
    //             label: '',
    //             id: '',
    //             url: 'https://portfolio.jonnybomb.com/work/vrbo/group-collab-polling/?brand=vrbo',
    //         },
    //     ],
    //     sizes: ['mobile', 'desktop'],
    // },
    {
        tags: ['vrbo', 'prod', 'ds'],
        id: 'proddemos',
        title: 'Production demos',
        role: '',
        descr: 'This is a collection of production demos created by composing and modifying the existing set of Vrbo Design System web components, focusing mainly on calendar implementations, web animations, and modal patterns. These demos serve to help UX designers understand what is possible in our tech stack, iterate and refine their ideas by seeing them come to life, accelerate our production engineering team by completing a chunk of the front-end work before it gets to them, and ensure our production experience has the craft and polish our users deserve.',
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
        descr: "A mobile exploration around the filters options on our Search page. The most interesting part of this prototype is the iOS tumbler pattern I created for the price filters. Check it out on mobile, or at least in a your browser's mobile emulator, because the buttons relies on touch events in order to give a responsive feel.",
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
        descr: "When the Search Results Page team needed a simplfied version of the Image Carousel for use in Google Maps, the Single Image Carousel was born. It supports showing only one still at a time, but has the same transition and responsive touch gesture support of its older sibling. Use your phone or browser's mobile emulator to check out the swipe geture handling.",
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
        descr: 'This is a native-like, touch-first swipable carousel with snap to and peaking functionality. It also supports pointer devices.',
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
    // {
    //     tags: ['vrbo', 'proto', 'ds'],
    //     id: 'tripboards',
    //     title: 'Trip Boards',
    //     role: '',
    //     descr: "This is a responsive desktop and mobile web production prototype for the Vrbo Tripboards app, where users can create curated collections of properties and invite collaborators to comment and vote. Click on the user in top left for settings to add or remove people, change who you are, and change the owner of the board. Click the invite link to invite others to the board (emails in the settings control). Click on the 'Learn more' link to see a localizable css driven animation promoting the chat feature.",
    //     assets: [
    //         {
    //             label: '',
    //             id: 'tripboards',
    //             type: 'image',
    //             uri: 'vrbo/tripboards.png',
    //         },
    //     ],
    //     links: [
    //         {
    //             label: '',
    //             id: '',
    //             url: 'https://portfolio.jonnybomb.com/work/vrbo/group-collab/',
    //         },
    //     ],
    //     sizes: ['mobile', 'desktop'],
    // },
    {
        tags: ['vrbo', 'prod', 'ds'],
        id: 'verticalimagecarousel',
        title: 'Vertical Image Carousel',
        role: '',
        descr: 'This vertically scrolling versions of the Image Carousel was created for a variant of the Property Details Page. It supports lazy loading images, captions, and video, and can be used in combinatino with a full-screen Image Carousel.',
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
        tags: ['vrbo', 'case-studies'],
        id: 'tripboardspollingvideo',
        title: 'Trip Boards Polling',
        role: '',
        descr: 'Highlights how my prototyping skills, specifically around mobile web touch interactions and motion design, aided in UX Lab tests, design iterations, and ultimately the final production build.<br/><br/><i>These demos can be viewed using the links below or from the projects listed in the Vrbo/EG prototypes section.</i>.',
        sizes: ['mobile', 'desktop'],
        assets: [
            // {
            //     label: '',
            //     id: 'video-tripboards-polling',
            //     type: 'image',
            //     uri: 'vrbo/video-tripboards-polling.png',
            // },
            {
                label: '',
                id: 'tbpolling-uxlab',
                type: 'image',
                uri: 'vrbo/polling-lab.png',
            },
            {
                label: '',
                id: 'tbpolling-iterations',
                type: 'image',
                uri: 'vrbo/polling-explore.png',
            },
            {
                label: '',
                id: 'tbpolling-prods',
                type: 'image',
                uri: 'vrbo/polling.png',
            },
        ],
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
        tags: ['vrbo', 'case-studies'],
        id: 'tripboardsvideo',
        title: 'Trip Boards Prototype',
        role: '',
        descr: "The responsive desktop and mobile web evergreen production prototype for the Vrbo Tripboards app, used to collaborate with design to ideate on new features or improvements and to guide production engineers on the frontend implementation. Users can create curated collections of properties and invite collaborators to comment and vote. Click on the user avatar in top left for settings to add or remove people, change who you are, and change the owner of the board. Click the invite link to invite others to the board (emails in the settings control). Click on the 'Learn more' link to see a localizable css driven animation promoting the chat feature.<br/><br/><i>This demos can be viewed using the link below</i>.",
        sizes: ['mobile', 'desktop'],
        assets: [
            {
                label: '',
                id: 'tripboards',
                type: 'image',
                uri: 'vrbo/tripboards.png',
            },
            // {
            //     label: '',
            //     id: 'video-tripboards',
            //     type: 'image',
            //     uri: 'vrbo/video-tripboards.png',
            // },
        ],
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
        tags: ['vrbo', 'case-studies'],
        id: 'northstarexperiencevideo',
        title: 'Homeaway Northstar Experience',
        role: '',
        descr: 'A responseive desktop and mobile vision demo for the  Homeaway Northstar experience, including Immersive Search, Search Results, Property Details, and Scratchpad (to become Trip Boards). This prototype did consume our production APIs, but for the sake of stability, it now just uses a static version of this data.<br/><br/>Try it out for a trip to "Chamonix".<br/><br/><i>This demos can be viewed using the link below.</i>.',
        sizes: ['mobile', 'desktop'],
        assets: [
            {
                label: '',
                id: 'video-northstar',
                type: 'image',
                uri: 'vrbo/video-northstar.png',
            },
        ],
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
        tags: ['vrbo', 'case-studies'],
        id: 'egconsolevideo',
        title: 'EG Console UX Transformation',
        role: '',
        descr: 'Demo of how I transformed the UX for the EG console experience. Shows the old version of the EG Console, and then the version where I systematically applied UX updates, including the introduction of the Left Nav and updates to page layouts and styles.',
        sizes: ['desktop'],
        assets: [
            {
                label: '',
                id: 'video-eg-console',
                type: 'image',
                uri: 'vrbo/video-eg-console.png',
            },
        ],
        videos: [
            {
                url: 'https://www.youtube.com/watch?v=ZN3KnsVjkBs',
            },
        ],
        links: [],
    },
    {
        tags: ['vrbo', 'case-studies'],
        id: 'egxpvideo',
        title: 'EG XP - Templates and Layouts',
        role: '',
        descr: 'A Walk-through of how to use the templates and layouts of the EG experience platform to create the different pages in the Supply Partner Unified Onboarding App (UFO).',
        sizes: ['desktop'],
        assets: [
            {
                label: '',
                id: 'video-templates',
                type: 'image',
                uri: 'vrbo/video-templates.png',
            },
        ],
        videos: [
            {
                url: 'https://www.youtube.com/watch?v=79cAIdAb9Tc',
            },
        ],
        links: [],
    },
    {
        tags: ['vrbo', 'case-studies'],
        id: 'portfolio review',
        title: 'Processes and Outcomes',
        role: '',
        descr: '', // 'A detailed review of my prototype portfolio, walking through my processes, workflows, and outcomes',
        sizes: ['pdf'],
        assets: [
            {
                label: '',
                id: 'proto-portfolio',
                type: 'image',
                uri: 'vrbo/Jonathan Elbom - Vrbo-EG - Prototype Portfolio.png',
            },
        ],
        pdfs: [
            {
                url: 'pdf/Jonathan Elbom - Vrbo-EG - Prototype Portfolio.pdf',
            },
        ],
        links: [],
    },
    {
        tags: ['vrbo', 'case-studies'],
        id: 'spxcollab',
        title: 'SPX Collaboration',
        role: '',
        descr: '', // 'A detailed review of my prototype portfolio, walking through my processes, workflows, and outcomes',
        sizes: ['pdf'],
        assets: [
            {
                label: '',
                id: 'spx-collab',
                type: 'image',
                uri: 'vrbo/Jonathan Elbom - EG Supply Partner Experience - XD Engineering.png',
            },
        ],
        pdfs: [
            {
                url: 'pdf/Jonathan Elbom - EG Supply Partner Experience - XD Engineering.pdf',
            },
        ],
        links: [],
    },
    {
        tags: ['vrbo', 'case-studies'],
        id: 'dsguestselector',
        title: 'Vrbo DS: Guest Selector',
        role: '',
        descr: '', // 'A detailed review of my prototype portfolio, walking through my processes, workflows, and outcomes',
        sizes: ['pdf'],
        assets: [
            {
                label: '',
                id: 'dsguestselector',
                type: 'image',
                uri: 'vrbo/Jonathan Elbom - Design System - Guest Selector.png',
            },
        ],
        pdfs: [
            {
                url: 'pdf/Jonathan Elbom - Design System - Guest Selector.pdf',
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
    vrbo.filter(({ tags }) => tags.includes('case-studies')).map((p) => transformProject(p)),
    false,
);

export const vrbo_all = [...vrbo_proto, ...vrbo_prod];
