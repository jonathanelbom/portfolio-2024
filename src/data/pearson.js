import { filterAndSort, template, transformProject } from './util';

const images = ['abbi_1.jpg', 'abbi_2.jpg', 'abbi_3.jpg' /*'abbi_create_item_moduleCSS.jpg'*/];

const titles = ['Homepage', 'Create Item', 'Expert Mode'];

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
        tags: ['pearson', 'abbi'],
    });
});

const _pearson = [
    {
        image: {
            label: '',
            id: 'homepage',
            type: 'image',
            uri: 'abbi_1.jpg',
        },
        title: 'Homepage',
        description: '',
        tags: ['pearson', 'abbi'],
    },
    {
        image: {
            label: '',
            id: 'createitem',
            type: 'image',
            uri: 'abbi_2.jpg',
        },
        title: 'Create Item',
        description: '',
        tags: ['pearson', 'abbi'],
    },
    {
        image: {
            label: '',
            id: 'expertmode',
            type: 'image',
            uri: 'abbi_3.jpg',
        },
        title: 'Expert Mode',
        description: '',
        tags: ['pearson', 'abbi'],
    },
];

export const pearson = filterAndSort(_pearson, false);
