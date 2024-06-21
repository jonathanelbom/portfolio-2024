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
        title: 'Instagram Experience',
        id: 'dropparty-homepage',
        description: '',
        tags: ['dropparty'],
        sizes: ['mobile'],
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
        title: 'Component Set',
        description: '',
        tags: ['dropparty'],
        sizes: ['mobile'],
    },
];

export const dropparty = filterAndSort(
    _dropparty.map((p) => transformProject(p)),
    false,
);
