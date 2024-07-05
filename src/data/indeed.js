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
                id: 'dsmodalimprovements',
                type: 'image',
                uri: 'indeed/modal-contributions-1.png',
            },
        ],
        videos: [
            {
                url: 'https://www.youtube.com/watch?v=yBvw5FTvF4w',
            },
            {
                url: 'https://www.youtube.com/watch?v=_dmn0qdGAk0',
            },
        ],
        title: 'DS Modal Improvements',
        description:
            'These are contributions I made to the Indeed Design System to improve the accessiblity and experience of the modal component, as well as a demostration of how to compose different layouts within the modal.',
        id: 'dsmodalimprovements',
        tags: ['indeed'],
        sizes: ['modal', 'desktop'],
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
        ],
        title: 'My Jobs',
        description: '',
        tags: ['indeed'],
        id: 'myjobs',
        sizes: ['mobile', 'desktop'],
        links: [
            {
                url: 'https://portfolio.jonnybomb.com/work/indeed/my-jobs/',
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
        title: 'Pathways',
        description: '',
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
        ],
        title: 'Profile Vision',
        description: '',
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
