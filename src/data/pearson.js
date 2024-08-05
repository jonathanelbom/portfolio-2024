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
                uri: 'pearson/abbi_1.jpg',
            },
            {
                label: '',
                id: 'createitem',
                type: 'image',
                uri: 'pearson/abbi_2.jpg',
            },
            {
                label: '',
                id: 'expertmode',
                type: 'image',
                uri: 'pearson/abbi_3.jpg',
            },
        ],
        title: 'ABBI',
        description:
            "ABBI (Assessment Banking and Building for Interoperable solutions) is Pearson's flag-ship content authoring, banking, and form building tool used to create QTI compliant interoperable assessments. The first pass of the tool is focused on creating authoring modules and the basic functionality for creating, editing, and reviewing assessment content authored in or imported into ABBI.<br/><br/>This is a RESTful single page web application that, on the client side, uses Backbone.js, Underscore.js, Require.js, SASS, Bootstap, JQuery/UI/jqGrid, Font Awesome, and the TinyMCE rich text editor. For build automation and management, we use Grunt and Bower.<br/><br/>I did all the product, UX and interaction design for ABBI, and was a principal contributor to the infomation architecture and user-flows. I also led the client-side UI development as well as the authoring module development.",
        // description:
        //     'ABBI (Assessment Banking and Building for Interoperable solutions) is the single source for all the tools needed for banking and building interoperable (QTI) and accessible assessments. The first pass of the tool is focused on creating authoring modules and the basic functionality for creating, editing, and reviewing assessment content authored in or imported into ABBI.<br/><br/>This is a RESTful single page web application that, on the client side, uses Backbone.js, Underscore.js, Require.js, SASS, Bootstap, JQuery/UI/jqGrid, Font Awesome, and the TinyMCE rich text editor. For build automation and management, we use Grunt and Bower.<br/><br/>I did all the product, UX and interaction design for ABBI, and was a principal contributor to the infomation architecture and user-flows. I also led the client-side UI development as well as the authoring module development.',
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
                id: 'fngux1',
                type: 'image',
                uri: 'pearson/functionGraphingUX_1.png',
            },
            {
                label: '',
                id: 'fngux2',
                type: 'image',
                uri: 'pearson/functionGraphingUX_2.png',
            },
            {
                label: '',
                id: 'fngux3',
                type: 'image',
                uri: 'pearson/functionGraphingUX_3.png',
            },
            {
                label: '',
                id: 'fngux4',
                type: 'image',
                uri: 'pearson/functionGraphingUX_4.png',
            },
            {
                label: '',
                id: 'fngux5',
                type: 'image',
                uri: 'pearson/functionGraphingUX_5.png',
            },
            {
                label: '',
                id: 'fngux6',
                type: 'image',
                uri: 'pearson/functionGraphingUX_6.png',
            },
            {
                label: '',
                id: 'fngux7',
                type: 'image',
                uri: 'pearson/functionGraphingUX_7.png',
            },
            {
                label: '',
                id: 'fngux8',
                type: 'image',
                uri: 'pearson/functionGraphingUX_8.png',
            },
            {
                label: '',
                id: 'fngux9',
                type: 'image',
                uri: 'pearson/functionGraphingUX_9.png',
            },
        ],
        title: 'Function Graphing TEI',
        description:
            'These are function graphing technology enhanced items created for TestNav 7.5. After collaborating with our Math SME, I created the interaction and visual design and then implemented this items type in TestNav 7.5 using ActionScript3 and Flex.',
        tags: ['pearson', 'testnav'],
        sizes: ['desktop'],
    },
    {
        images: [
            {
                label: '',
                id: 'tno1',
                type: 'image',
                uri: 'pearson/iPad TestNav - Section Review - TNO 1.png',
            },
            {
                label: '',
                id: 'tno2',
                type: 'image',
                uri: 'pearson/iPad TestNav - Section Review - TNO 2.png',
            },
            {
                label: '',
                id: 'tno3',
                type: 'image',
                uri: 'pearson/iPad TestNav - Section Review - TNO 3.png',
            },
            {
                label: '',
                id: 'tno4',
                type: 'image',
                uri: 'pearson/iPad TestNav - Section Review - TNO 4.png',
            },
            {
                label: '',
                id: 'passage1',
                type: 'image',
                uri: 'pearson/iPad TestNav - Passage UI - TNO - page1.png',
            },
            {
                label: '',
                id: 'passage2',
                type: 'image',
                uri: 'pearson/iPad TestNav - Passage UI - TNO - page2.png',
            },
            {
                label: '',
                id: 'passagetabbed',
                type: 'image',
                uri: 'pearson/iPad TestNav - Passage UI - TNO - tabbed.png',
            },
        ],
        title: 'TestNav 7.5 - iOS Tablet Designs',
        description:
            'These are design I created for the porting the TestNav 7.5 Desktop app to iOS Tablet. These were created iteratively and collaboratively while working with a 3rd party vendor who would implement the iOS App.',
        tags: ['pearson', 'testnav'],
        sizes: ['tablet'],
    },
    // {
    //     images: [
    //         {
    //             label: '',
    //             id: 'createitem',
    //             type: 'image',
    //             uri: 'pearson/abbi_2.jpg',
    //         },
    //     ],
    //     title: 'Create Item UI',
    //     description: '',
    //     tags: ['pearson', 'abbi'],
    //     sizes: ['desktop'],
    // },
    // {
    //     images: [
    //         {
    //             label: '',
    //             id: 'expertmode',
    //             type: 'image',
    //             uri: 'pearson/abbi_3.jpg',
    //         },
    //     ],
    //     title: 'Expert Mode UI',
    //     description: '',
    //     tags: ['pearson', 'abbi'],
    //     sizes: ['desktop'],
    // },
];

export const pearson = filterAndSort(
    _pearson.map((p) => transformProject(p)),
    false,
);
