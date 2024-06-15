import { filterAndSort, template, transformProject } from './util';

const images = ['mentalmodeler_web.jpg', 'mm_scenario_1.jpg', 'mm_scenario_3.jpg', 'mmcompare.png', 'mmlab.png'];

const titles = ['Homepage', 'Mental Modeler - Map', 'Mental Modeler - Scenario', 'Mental Modeler Compare', 'UMass Lab'];

const source = images.map((image, i) => {
    const title = titles[i];
    const id = title.split(' ').join('').toLowerCase();
    return transformProject({
        ...template,
        title,
        id,
        assets: [
            {
                label: '',
                id,
                type: 'image',
                uri: `${image}`,
            },
        ],
        tags: ['mentalmodeler'],
    });
});

export const _mm = [
    {
        image: {
            label: '',
            id: 'homepage',
            type: 'image',
            uri: 'mentalmodeler_web.jpg',
        },
        title: 'Website',
        description: '',
        tags: ['mentalmodeler'],
    },
    {
        image: {
            label: '',
            id: 'mentalmodeler-map',
            type: 'image',
            uri: 'mm_scenario_1.jpg',
        },
        title: 'Mental Modeler App - Map',
        description: '',
        tags: ['mentalmodeler'],
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
    },
];

export const mm = filterAndSort(_mm);

// export const vrbo_proto = vrbo.filter(({ tags }) => tags.includes('proto')).map((project) => transformProject(project));
// export const vrbo_prod = vrbo.filter(({ tags }) => tags.includes('prod')).map((project) => transformProject(project));
