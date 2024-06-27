import { filterAndSort, transformProject } from './util';

export const _dropparty = [
    {
        images: [
            {
                label: '',
                id: 'homepage',
                type: 'image',
                uri: 'drop_party.png',
            },
        ],
        title: 'Instagram Drop Demo',
        id: 'dropparty-homepage',
        description:
            'This is a mobile, touch-first experience composed of the different UI components I built. This expereince demonstates the user flow of landing on and registering for the initial instagram drop.',
        tags: ['dropparty'],
        sizes: ['mobile'],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/drop-party/',
            },
        ],
        imageBgColor: '#EFF4EB',
    },
    {
        images: [
            {
                label: '',
                id: 'components',
                type: 'image',
                uri: 'drop_party_ui.png',
            },
        ],
        id: 'dropparty-components',
        title: 'Drop UI Components',
        description:
            'I worked with the Drop Party lead designer and lead engineer to build out these controlled React components. This work invovled building a custom swipable carousel, as well as a host of form elements.',
        tags: ['dropparty'],
        sizes: ['mobile'],
        links: [
            {
                label: '',
                id: '',
                url: 'https://portfolio.jonnybomb.com/work/drop-party/components.html',
            },
        ],
        imageBgColor: '#EFF4EB',
    },
];

export const dropparty = filterAndSort(
    _dropparty.map((p) => transformProject(p)),
    false,
);
