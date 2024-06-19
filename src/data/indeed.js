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
            'BuildQuest is a screener question json authoring and edit tool created to help author screener questions for Indeed Apply',
        tags: ['indeed'],
        links: [
            {
                url: 'https://portfolio.jonnybomb.com/work/indeed/build-quest/',
            },
        ],
        sizes: ['desktop'],
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
        title: 'DS Modal Improvements',
        description: '',
        id: 'dsmodalimprovements',
        tags: ['indeed'],
        sizes: ['modal', 'desktop'],
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
    },
    {
        images: [
            {
                label: '',
                id: 'smartapply',
                type: 'image',
                uri: 'indeed/smart-apply.png',
            },
        ],
        title: 'Smart Apply',
        description: '',
        tags: ['indeed'],
        id: 'smartapply',
        sizes: ['mobile', 'desktop'],
    },
];

export const indeed = filterAndSort(_indeed.map((p) => transformProject(p)));
