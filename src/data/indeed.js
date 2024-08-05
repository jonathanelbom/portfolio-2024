import { filterAndSort /*, template, transformProject */, transformProject } from './util';

// const images = [
//     'build-quest.png',
//     'modal-contributions-1.png',
//     'my-jobs.png',
//     'pathways.png',
//     'profile-future-1.png',
//     'smart-apply.png',
// ];

// const titles = ['BuildQuest', 'DS Modal Improvements', 'My Jobs', 'Pathways', 'Profile Vision', 'Smart Apply'];

// const source = images.map((image, i) => {
//     const title = titles[i];
//     const id = title.split(' ').join('').toLowerCase();
//     return transformProject({
//         ...template,
//         title,
//         id,
//         assets: [
//             {
//                 label: '',
//                 id,
//                 type: 'image',
//                 uri: `indeed/${image}`,
//             },
//         ],
//         tags: ['indeed'],
//     });
// });

const _indeed = [
    {
        images: [
            {
                label: '',
                id: 'buildquestintro',
                type: 'image',
                uri: 'indeed/build-quest.png',
            },
            {
                label: '',
                id: 'buildquest',
                type: 'image',
                uri: 'indeed/build-quest-4-3.png',
            },
        ],
        title: 'BuildQuest',
        id: 'buildquest',
        description:
            'BuildQuest is a screener question json authoring and editing tool created to help author screener questions for Indeed Apply',
        tags: ['indeed'],
        videos: [
            {
                url: 'https://www.youtube.com/watch?v=nMf9z6TmZDo',
            },
        ],
        links: [
            {
                url: 'https://portfolio.jonnybomb.com/work/indeed/build-quest/',
            },
        ],
        sizes: ['desktop'],
        imageBgColor: '#f1f9fd',
    },
    {
        images: [
            {
                label: '',
                id: 'jelbomsplayground',
                type: 'image',
                uri: 'indeed/jelboms-playground.png',
            },
            {
                label: '',
                id: 'dsmodalimprovements',
                type: 'image',
                uri: 'indeed/modal-contributions-1.png',
            },
        ],
        videos: [
            {
                url: 'https://www.youtube.com/watch?v=LO6o5xvByfs',
            },
            {
                url: 'https://www.youtube.com/watch?v=yBvw5FTvF4w',
            },
            {
                url: 'https://www.youtube.com/watch?v=_dmn0qdGAk0',
            },
            {
                url: 'https://youtube.com/shorts/GFj-idz8Fa4',
            },
        ],
        links: [
            {
                url: 'https://portfolio.jonnybomb.com/work/indeed/jelbom-playground/',
            },
        ],
        title: "Jelbom's Playground",
        description:
            "Jelbom's Playground is an area where I can quickly and iteratively explore new and better component patterns and enhancemnts to existing components. It also provides an easy way to share these demos as well as their source code. This playground includes contributions I made to the Indeed Design System to improve the accessiblity and experience of the modal component, as well as a demostration of how to compose different layouts within the modal. I also explore IntersectionObserver API powered sticky scroll experiences as well as accessible navigation for complex radio groups.",
        id: 'jelbomsplayground',
        tags: ['indeed'],
        sizes: ['mobile', 'desktop'],
        imageBgColor: '#f1f9fd',
    },
    {
        images: [
            {
                label: '',
                id: 'myjobs',
                type: 'image',
                uri: 'indeed/my-jobs.png',
            },
            {
                label: '',
                id: 'myjobsplayground',
                type: 'image',
                uri: 'indeed/my-jobs-playground.png',
            },
        ],
        title: 'My Jobs Playground',
        description:
            'My Jobs Playground is a space to explore and experiment with the My Jobs Experience. It contains design-focused prototype, like the My Jobs Evergreen prototype, as well as POCs and production ready demos, like the 3rd Party Apply Starts and the transition components that power that experience.',
        tags: ['indeed'],
        id: 'myjobs',
        sizes: ['mobile', 'desktop'],
        links: [
            {
                label: 'My Jobs Playground',
                url: 'https://portfolio.jonnybomb.com/work/indeed/my-jobs/',
            },
            {
                label: 'My Jobs Evergreen Prototype',
                url: 'https://portfolio.jonnybomb.com/work/indeed/my-jobs/#/my-jobs-proto',
            },
        ],
        videos: [
            {
                url: 'https://www.youtube.com/watch?v=v3nrzJIqwfg',
            },
            {
                url: 'https://youtube.com/shorts/uIQtsA5yvyg',
            },
            {
                url: 'https://youtube.com/shorts/W2dbmI7kgKk',
            },
            {
                url: 'https://www.youtube.com/watch?v=l7ipf1J6vOo',
            },
            {
                url: 'https://www.youtube.com/watch?v=TKMfeE2Vgj8',
            },
        ],
        imageBgColor: '#f1f9fd',
    },
    {
        images: [
            {
                label: '',
                id: 'pathways',
                type: 'image',
                uri: 'indeed/pathways.png',
            },
        ],
        videos: [
            {
                url: 'https://www.youtube.com/watch?v=PFlBVl-vK8w',
            },
        ],
        title: 'Pathways',
        description:
            'A live-data prototype for a career trajectory, advancement, and discovery tool, being developed to help user map a path to evolve or change their career trajectory. This prototype was used for extensive user testing as well as a base for the production build of this experience.',
        tags: ['indeed'],
        id: 'pathways',
        sizes: ['mobile'],
        links: [
            {
                url: 'https://portfolio.jonnybomb.com/work/indeed/pathways/#/pathways',
            },
        ],
        imageBgColor: '#f1f9fd',
    },
    {
        images: [
            {
                label: '',
                id: 'profilevision',
                type: 'image',
                uri: 'indeed/profile-future-1.png',
            },
            {
                label: '',
                id: 'profilevision',
                type: 'image',
                uri: 'indeed/profile-future-2.png',
            },
        ],
        videos: [
            {
                url: 'https://www.youtube.com/watch?v=0_8i7SY4Gfg',
            },
        ],
        title: 'Profile Vision',
        description:
            'The Profile Vision prototype is a live-data, early development iteration of the new Profile northstar. It was built several months before the production engineering work began to run user testing to identify any areas where modifications should be made before starting the production build. This code provided a large head start for that production work.',
        tags: ['indeed'],
        id: 'profilevision',
        sizes: ['mobile'],
        links: [
            {
                url: 'https://portfolio.jonnybomb.com/work/indeed/profile-vision/',
            },
        ],
        imageBgColor: '#f1f9fd',
    },
    {
        images: [
            {
                label: '',
                id: 'smartapply',
                type: 'image',
                uri: 'indeed/smart-apply.png',
            },
            {
                label: '',
                id: 'smartapply-eeo',
                type: 'image',
                uri: 'indeed/smart-apply-eeo.png',
            },
            {
                label: '',
                id: 'smartapply-knockout',
                type: 'image',
                uri: 'indeed/smart-apply-knockout.png',
            },
            {
                label: '',
                id: 'smartapply-mulit-res',
                type: 'image',
                uri: 'indeed/smart-apply-multi-res-storybook-landscape.png',
            },
        ],
        videos: [
            {
                url: 'https://www.youtube.com/watch?v=UtedS90UmEw',
            },
        ],
        title: 'Indeed Apply',
        description:
            "Indeed Apply is a feature on Indeed's job platform that simplifies the application process for job seekers. This feature is designed to save time and make the application process more efficient.I led the frontend work on several features for Indeed Apply: <i>EEO Questions, 3rd Party Knockout Questions, and Multiple Resumes</i>.",
        tags: ['indeed'],
        id: 'smartapply',
        sizes: ['mobile', 'desktop'],
        imageBgColor: '#f1f9fd',
    },
];

export const indeed = filterAndSort(_indeed.map((p) => transformProject(p)));
