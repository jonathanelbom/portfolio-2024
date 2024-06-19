import { filterAndSort, template, transformProject } from './util';

const images = ['mentalmodeler_web.jpg', 'mm_scenario_1.jpg', 'mm_scenario_3.jpg', 'mmcompare.png', 'mmlab.png'];

const titles = ['Homepage', 'Mental Modeler - Map', 'Mental Modeler - Scenario', 'Mental Modeler Compare', 'UMass Lab'];

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
//                 uri: `${image}`,
//             },
//         ],
//         tags: ['mentalmodeler'],
//     });
// });

export const _mm = [
    {
        image: {
            label: '',
            id: 'homepage',
            type: 'image',
            uri: 'mentalmodeler_web.jpg',
        },
        title: 'Website',
        id: 'homepage',
        description: '',
        tags: ['mentalmodeler'],
        sizes: ['mobile', 'desktop'],
    },
    {
        image: {
            label: '',
            id: 'mentalmodeler-map',
            type: 'image',
            uri: 'mm_scenario_1.jpg',
        },
        id: 'mentalmodeler-map',
        title: 'Mental Modeler App - Map',
        description: '',
        tags: ['mentalmodeler'],
        sizes: ['desktop'],
    },
    {
        image: {
            label: '',
            id: 'mentalmodeler-scenario',
            type: 'image',
            uri: 'mm_scenario_3.jpg',
        },
        title: 'Mental Modeler App - Scenario',
        description: '',
        tags: ['mentalmodeler'],
        id: 'mentalmodeler-scenario',
        sizes: ['desktop'],
    },
    {
        image: {
            label: '',
            id: 'mentalmodelercompare',
            type: 'image',
            uri: 'mmcompare.png',
        },
        title: 'Mental Modeler Compare App',
        description: '',
        tags: ['mentalmodeler'],
        id: 'mentalmodelercompare',
        sizes: ['mobile', 'desktop'],
    },
    {
        image: {
            label: '',
            id: 'umasslab',
            type: 'image',
            uri: 'mmlab.png',
        },
        title: 'UMass Lab Website',
        description: '',
        tags: ['mentalmodeler'],
        id: 'umasslab',
        sizes: ['mobile', 'desktop'],
    },
];

export const mm = filterAndSort(_mm);
