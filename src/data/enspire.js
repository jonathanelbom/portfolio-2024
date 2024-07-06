import { filterAndSort, transformProject } from './util';

export const _enspire = [
    {
        tags: ['enspire'],
        id: 'k12',
        title: 'K-12 Science Demo',
        role: 'Lead Designer and Developer',
        descr: "This was an interactive demo targeted at providing computer based equivalents to hands-on classroom experiments for junior high children in Natural Science classes. The activity aimed to help students determine an element's group in the periodic table by allowing them to immerse it in hydrochloric acid, test it's electrical conductivity, and view the electrons in it's outer layer. I collaborated in the concepting, and did all the design and coding for the project.",
        assets: [
            {
                label: '',
                id: 'hrw1',
                type: 'image',
                uri: 'hrw_1.jpg',
            },
            {
                label: '',
                id: 'hrw2',
                type: 'image',
                uri: 'hrw_2.jpg',
            },
            {
                label: '',
                id: 'hrw3',
                type: 'image',
                uri: 'hrw_3.jpg',
            },
        ],
        links: [],
        sizes: ['desktop'],
        imageBgColor: '#DDEAF0',
    },
    {
        tags: ['enspire'],
        id: 'pnc',
        title: 'PNC Trivia Game',
        role: 'Lead Designer and Developer',
        descr: "This was a time based trivia game used to train newly transitioning tellers in a recent bank acquisition. The game randomly draws from a bank of questions, provides contextual feedback, and reports completion and scores to the client's LMS. I created an iconographic system to help user identify the 5 categories of trivia, as well as a customer service category that playfully represented a real-life customer scenario. I designed the UI, the majority of the graphic work, and managed another designer who helped create assets. I did all the coding for this as well, using an Object Oriented Design implemented in ActionScript 2.0.",
        assets: [
            {
                label: '',
                id: 'pnc1',
                type: 'image',
                uri: 'pnc_1.jpg',
            },
            {
                label: '',
                id: 'pnc2',
                type: 'image',
                uri: 'pnc_2.jpg',
            },
            {
                label: '',
                id: 'pnc3',
                type: 'image',
                uri: 'pnc_3.jpg',
            },
        ],
        links: [],
        sizes: ['desktop'],
        imageBgColor: '#E1F1F6',
    },
    {
        tags: ['enspire'],
        id: 'alms',
        title: 'ALMS',
        role: 'Lead Designer and Developer',
        descr: 'This was a five hour, five module course designed to help train Arkansas students how to use rulers and protractors, factor and find greatest common factors and least common multiples, and add and subtract fractions. I collaborated in the concepting of the interactive componenets, and did all the design and development. I also did the UI design and created the majority of the didactic media. After the completion of these five courses, I was invited to lead a two day Flash training seminar for Arkansas high school students.',
        assets: [
            {
                label: '',
                id: 'alms1',
                type: 'image',
                uri: 'alms_1.jpg',
            },
            {
                label: '',
                id: 'alms2',
                type: 'image',
                uri: 'alms_2.jpg',
            },
            {
                label: '',
                id: 'alms3',
                type: 'image',
                uri: 'alms_3.jpg',
            },
        ],
        links: [],
        sizes: ['desktop'],
    },
    {
        tags: ['enspire'],
        id: 'pearson',
        title: 'Pearson',
        role: 'Lead Designer and Developer',
        descr: 'For this project, I designed and developed a series of Flash templates and custom component inspectors used to create TEA-approved interactive online Standardized Test Questions which are deployed on Java based client application. Several of the templates, such as the drag and drop template, did not required the creation of graphics, while others, like the microscope and titration templates required dynamic display graphics and user controls.  These templates were developed using an Object Oriented Design in ActionScript 2.0 and were created in a modular manner such that multiple templates could be combined for one test item, giving the author control of the weight and method of scoring.',
        assets: [
            {
                label: '',
                id: 'pearson1',
                type: 'image',
                uri: 'pearson_1.jpg',
            },
            {
                label: '',
                id: 'pearson2',
                type: 'image',
                uri: 'pearson_2.jpg',
            },
            {
                label: '',
                id: 'pearson3',
                type: 'image',
                uri: 'pearson_4.jpg',
            },
        ],
        links: [],
        sizes: ['desktop'],
    },
    {
        tags: ['enspire', 'exclude'],
        id: 'flashvue',
        title: 'Flashvue',
        role: 'Lead Designer and Developer',
        descr: 'This was an hour long course designed to both provide job interview training and create video interview profiles for people actively seeking employment. This course was deployed on touch screen kiosks equiped with web cams and actively interfaced with a proprietary video-capture application developed by the client. I designed the UI, the didactic media, and a series of self assessment interactivities, as well as implementing a video player and support for multiple languages (including Simplified Chinese).',
        assets: [
            {
                label: '',
                id: 'flashvue1',
                type: 'image',
                uri: 'flashvue_1.jpg',
            },
            {
                label: '',
                id: 'flashvue2',
                type: 'image',
                uri: 'flashvue_2.jpg',
            },
            {
                label: '',
                id: 'flashvue3',
                type: 'image',
                uri: 'flashvue_3.jpg',
            },
        ],
        links: [],
        sizes: ['desktop'],
    },
    {
        tags: ['enspire'],
        id: 'sap',
        title: 'SAP Virtual Team Management',
        role: 'Lead Designer and Developer',
        descr: 'This was a five-hour course on successful virtual project management created for SAP. I created the design templates for the didactic content and oversaw a team of 3-4 designer and one illustrator build out that content, as well as build some out myself. I also designed and developed the an accordian-style multiple choice interactive question template that allowed us to display a large amount of information in context using a small amount of space.',
        assets: [
            {
                label: '',
                id: '',
                type: 'image',
                uri: 'sap_1.jpg',
            },
            {
                label: '',
                id: '',
                type: 'image',
                uri: 'sap_2.jpg',
            },
            {
                label: '',
                id: '',
                type: 'image',
                uri: 'sap_3.jpg',
            },
        ],
        links: [],
        sizes: ['desktop'],
    },
    {
        tags: ['enspire', 'exclude'],
        id: 'vnsny',
        title: 'Visiting Nurse Services of New York',
        role: 'Lead Designer and Developer',
        descr: 'This project included two hours of visiting nurse services training that was deployed on touch screen tablet devices. I managed 2 other designers who worked on this course as well as developed a series of interactive question templates.',
        assets: [
            {
                label: '',
                id: '',
                type: 'image',
                uri: 'vnsny_1.jpg',
            },
            {
                label: '',
                id: '',
                type: 'image',
                uri: 'vnsny_2.jpg',
            },
            {
                label: '',
                id: '',
                type: 'image',
                uri: 'vnsny_3.jpg',
            },
        ],
        links: [],
        sizes: ['desktop'],
    },
];

export const enspire = filterAndSort(
    _enspire.map((p) => transformProject(p)),
    false,
);
