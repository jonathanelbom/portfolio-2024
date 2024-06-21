import { filterAndSort, transformProject } from './util';

// const images = ['abbi_1.jpg', 'abbi_2.jpg', 'abbi_3.jpg' /*'abbi_create_item_moduleCSS.jpg'*/];

// const titles = ['Homepage', 'Create Item', 'Expert Mode'];

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
//         tags: ['pearson', 'abbi'],
//     });
// });

const _pearson = [
    {
        images: [
            {
                label: '',
                id: 'homepage',
                type: 'image',
                uri: 'abbi_1.jpg',
            },
        ],
        title: 'ABBI',
        description:
            'ABBI is the single source for all the tools needed for banking and building interoperable (QTI) and accessible assessments. The first pass of the tool is focused on creating authoring modules and the basic functionality for creating, editing, and reviewing assessment content authored in or imported into ABBI.<br/><br/>This is a RESTful single page web application that, on the client side, uses Backbone.js, Underscore.js, Require.js, SASS, Bootstap, JQuery/UI/jqGrid, Font Awesome, and the TinyMCE rich text editor. For build automation and management, we use Grunt and Bower.<br/><br/>I did all the product, UX and interaction design for ABBI, and was a principal contributor to the infomation architecture and user-flows. I also led the client-side UI development as well as the authoring module development.',
        tags: ['pearson', 'abbi'],
        sizes: ['desktop'],
        links: [
            {
                url: 'https://abbi.pearson.com/',
            },
        ],
    },
    {
        images: [
            {
                label: '',
                id: 'createitem',
                type: 'image',
                uri: 'abbi_2.jpg',
            },
        ],
        title: 'Create Item UI',
        description: '',
        tags: ['pearson', 'abbi'],
        sizes: ['desktop'],
    },
    {
        images: [
            {
                label: '',
                id: 'expertmode',
                type: 'image',
                uri: 'abbi_3.jpg',
            },
        ],
        title: 'Expert Mode UI',
        description: '',
        tags: ['pearson', 'abbi'],
        sizes: ['desktop'],
    },
];

export const pearson = filterAndSort(
    _pearson.map((p) => transformProject(p)),
    false,
);
