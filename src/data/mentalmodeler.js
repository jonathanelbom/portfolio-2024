import { filterAndSort, transformProject } from './util';

export const _mm = [
    {
        images: [
            {
                label: '',
                id: 'mentalmodeler-map',
                type: 'image',
                uri: 'mentalmodeler-js_go.png',
                // uri: 'mm_scenario_1.jpg',
            },
        ],
        id: 'mentalmodeler-map',
        title: 'Concept Map / Node Graph',
        description:
            'The concept map / node graph interface that I designed and implemented which is the cornerstone of the success of Mental Modeler. This mapping tool is easily embeddable in other web applications and has a standardize API for loading and saving files',
        tags: ['mentalmodeler'],
        sizes: ['desktop'],
        links: [
            {
                label: '',
                id: '',
                url: 'https://mentalmodeler.github.io/mentalmodeler-js/',
            },
            {
                label: 'View embedable demo on Codepen',
                id: '',
                url: 'https://codepen.io/jonnybomb/details/JjEPPyE',
            },
        ],
    },
    {
        images: [
            {
                label: '',
                id: 'mentalmodeler-scenario',
                type: 'image',
                uri: 'mm_scenario_3.jpg',
            },
        ],
        title: 'Scenario Suite',
        description:
            'The full Mental Modeler suite that includes the Scenario view, matrix view, and preferred state & metrics<br/><br/><i>Username: mentalmodeler, Password: mentalmodeler</i>',
        tags: ['mentalmodeler'],
        id: 'mentalmodeler-scenario',
        sizes: ['desktop'],
        links: [
            {
                label: '',
                id: '',
                url: 'http://mentalmodeler.com/scenario',
            },
        ],
    },
    {
        images: [
            {
                label: '',
                id: 'mentalmodelercompare',
                type: 'image',
                uri: 'mmcompare.png',
            },
        ],
        title: 'Mental Modeler Compare',
        description:
            'Another grant project to create an academic tool for comparing models to a designated reference model',
        tags: ['mentalmodeler'],
        id: 'mentalmodelercompare',
        sizes: ['desktop'],
        links: [
            {
                label: '',
                id: '',
                url: 'http://mentalmodeler.com',
            },
        ],
    },
    {
        images: [
            {
                label: '',
                id: 'homepage',
                type: 'image',
                uri: 'mentalmodeler_web.jpg',
            },
        ],
        title: 'Instructional Site',
        id: 'homepage',
        description:
            'Instructional and promotion site built to introduce people to Mental Modeler. Users can provide their email to gain access to the Mental Modeler suite',
        tags: ['mentalmodeler'],
        sizes: ['mobile', 'desktop'],
        links: [
            {
                label: '',
                id: '',
                url: 'http://mentalmodeler.com',
            },
        ],
    },
    {
        images: [
            {
                label: '',
                id: 'umasslab',
                type: 'image',
                uri: 'mmlab.png',
            },
        ],
        title: 'UMass Lab',
        description: 'Human-Environment Interactins lab for academic team at UMass Boston',
        tags: ['mentalmodeler'],
        id: 'umasslab',
        sizes: ['mobile', 'desktop'],
        links: [
            {
                label: '',
                id: '',
                url: 'http://jonnybomb.com/umasslab/',
            },
        ],
    },
    {
        images: [
            {
                label: '',
                id: 'focosstrategies',
                type: 'image',
                uri: 'focos_strategies.png',
            },
            {
                label: '',
                id: 'focosstrategiesadd',
                type: 'image',
                uri: 'focos_strategies_add.png',
            },
            {
                label: '',
                id: 'focoscompare',
                type: 'image',
                uri: 'focos_compare.png',
            },
            {
                label: '',
                id: 'focosmodels',
                type: 'image',
                uri: 'focos_models.png',
            },
        ],
        title: 'FOCOS - Portland State University',
        description:
            'UX consulting and interface prototyping for Portland State University FOCOS project, that looks at using the scenario outcomes form Mental Modeler to improve business efficiency and safety.',
        tags: ['mentalmodeler'],
        id: 'umasslab',
        sizes: ['desktop'],
        links: [
            {
                label: '',
                id: '',
                url: 'https://jonathanelbom.github.io/psu-focos/',
            },
            {
                label: 'View source on Github',
                id: '',
                url: 'https://github.com/jonathanelbom/ux-demo',
            },
        ],
    },
];

export const mm = filterAndSort(
    _mm.map((p) => transformProject(p)),
    false,
);
