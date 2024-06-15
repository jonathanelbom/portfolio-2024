import { filterAndSort, template, transformProject } from './util';

const images = [
    'build-quest.png',
    'modal-contributions-1.png',
    'my-jobs.png',
    'pathways.png',
    'profile-future-1.png',
    'smart-apply.png',
];

const titles = ['BuildQuest', 'DS Modal Improvements', 'My Jobs', 'Pathways', 'Profile Vision', 'Smart Apply'];

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
        image: {
            label: '',
            id: 'buildquest',
            type: 'image',
            uri: 'indeed/build-quest-4-3.png',
        },
        title: 'BuildQuest',
        description: '',
        tags: ['indeed'],
        links: [
            {
                uri: 'https://portfolio.jonnybomb.com/work/indeed/build-quest/',
            },
        ],
    },
    {
        image: {
            label: '',
            id: 'dsmodalimprovements',
            type: 'image',
            uri: 'indeed/modal-contributions-1.png',
        },
        title: 'DS Modal Improvements',
        description: '',
        tags: ['indeed'],
    },
    {
        image: {
            label: '',
            id: 'myjobs',
            type: 'image',
            uri: 'indeed/my-jobs.png',
        },
        title: 'My Jobs',
        description: '',
        tags: ['indeed'],
    },
    {
        image: {
            label: '',
            id: 'pathways',
            type: 'image',
            uri: 'indeed/pathways.png',
        },
        title: 'Pathways',
        description: '',
        tags: ['indeed'],
    },
    {
        image: {
            label: '',
            id: 'profilevision',
            type: 'image',
            uri: 'indeed/profile-future-1.png',
        },
        title: 'Profile Vision',
        description: '',
        tags: ['indeed'],
    },
    {
        image: {
            label: '',
            id: 'smartapply',
            type: 'image',
            uri: 'indeed/smart-apply.png',
        },
        title: 'Smart Apply',
        description: '',
        tags: ['indeed'],
    },
];

export const indeed = filterAndSort(_indeed);
