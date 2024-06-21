import { filterAndSort, transformProject } from './util';

export const _jonnybomb_as = [
    {
        tags: ['freelance'],
        id: 'san',
        title: 'Suddenly Almost Nearly',
        role: 'Lead Developer and Interaction Designer',
        descr: 'This project is for an interactive book, written by my good friend, Scout McComb. I colloborated with he and my other good friend, Parker Brooks, on the concept design, and functionality. Utitlizing TopSpin for tracking, advertizing, and merchandising, i created a flexible platform for Scout to create all his own content for this project, helping him craft a new and beautiful interactive experience.',
        assets: [
            {
                label: '',
                id: '',
                type: 'image',
                uri: 'suddenlyalmostnearly.jpg',
            },
        ],
        links: [
            // {
            //     label: 'View Project (Flash Player required)',
            //     id: '',
            //     url: 'http://lungbooks.com/suddenlyalmostnearly/',
            // },
        ],
        sizes: ['desktop'],
    },
    {
        tags: ['freelance'],
        id: 'wayfinder',
        title: 'UT Austin Wayfinder',
        role: 'Lead Developer, Game Designer, and Interaction Designer',
        descr: 'This is an in progress work for the University of Texas at Austin which provides guidance to undecided undergraduates. I work with the main content writer/user experience consultant to concept 4 mini games and a hub which explore different factors in choosing a major. I developed functional prototypes for all 4 mini games, and have built out everything except for the last 2 finished games.',
        assets: [
            {
                label: '',
                id: '',
                type: 'image',
                uri: 'wayfinder.jpg',
            },
        ],
        links: [
            // {
            //     label: 'View Project (Flash Player required)',
            //     id: '',
            //     url: 'http://wayfinder.jonnybomb.com/hub_flash.htm',
            // },
        ],
        sizes: ['desktop'],
    },
    {
        tags: ['freelance'],
        id: 'jonnybomb',
        title: 'JonnyBomb',
        role: 'Lead Designer and Developer',
        descr: "This project is my original personal site, where I mainly showcase my music, but  where I also display personal photos and give folks a glimpse into my current likes and dislikes. I wanted to created a slick look that felt modern yet ethereal.  The site features an XML-driven streaming MP3 player with scrubbing functionality and an XML-based photo displayer which is configurable to easily allow me to display batches of photos based on my camera's default naming conventions. The site also features and XML-based links and comments section.",
        assets: [
            {
                label: '',
                id: 'jonnybomb1',
                type: 'image',
                uri: 'jonnybomb_1.jpg',
            },
        ],
        links: [
            // {
            //     label: 'View Site (Flash Player required)',
            //     id: '',
            //     url: 'http://www.jonnybomb.com',
            // },
        ],
        sizes: ['desktop'],
    },
    {
        tags: ['freelance'],
        id: 'texasweather',
        title: 'Texas Weather',
        role: 'Lead Developer, Graphic Designer, and Interaction Designer',
        descr: 'This is a little project I did to practice custom skinning and functionality modifications with the Flex 4 components (spark). I went through all the steps of functional specs, wireframes, prototype, design comp, and final project just for fun.',
        assets: [
            {
                label: '',
                id: '',
                type: 'image',
                uri: 'texasweather_1.png',
            },
        ],
        links: [
            // {
            //     label: 'View Project (Flash Player required)',
            //     id: '',
            //     url: 'http://bancvue.jonnybomb.com',
            // },
        ],
        sizes: ['desktop'],
    },
    {
        tags: ['freelance'],
        id: 'wedding',
        title: 'Billie Jo and Jonathan',
        role: 'Lead Designer and Developer',
        descr: "This is a site I created for my wedding. It's primary goal was be to provide our guest with information about the ceremony, accommodations, and scheduling. The design is complimentary of the save-the-date and wedding invitations, which were designed by my fiancée and I.",
        assets: [
            {
                label: '',
                id: 'wedding1',
                type: 'image',
                uri: 'billiejoandjonathan_sample.jpg',
            },
        ],
        links: [
            // {
            //     label: 'View Site (Flash Player required)',
            //     id: '',
            //     url: 'http://portfolio.jonnybomb.com/work/billiejoandjonathan',
            // },
        ],
        sizes: ['desktop'],
    },
    {
        tags: ['freelance', 'exclude'],
        id: 'rapidric',
        title: 'DJ Rapid Ric',
        role: 'Lead Designer and Developer',
        descr: "This was a project I did for DJ Rapid Ric, the mix tape mechanic, a local DJ and creator of Southern Rap mix tapes.  Ric's mix tape sales were just beginning to boom and he wanted to get some web visibility, so he hired me to develop a site that complimented his current print materials and would enable him to dynamically update an online calendar of his upcoming shows and appearances.",
        assets: [
            {
                label: '',
                id: 'rapidric1',
                type: 'image',
                uri: 'rapidric_samples.jpg',
            },
        ],
        links: [
            // {
            //     label: 'View Site (Flash Player required)',
            //     id: '',
            //     url: 'http://portfolio.jonnybomb.com/work/rapidric',
            // },
        ],
        sizes: ['desktop'],
    },
    {
        tags: ['freelance', 'exclude'],
        id: 'fcfado',
        title: 'FCFado (incomplete)',
        role: 'Lead Designer and Developer',
        descr: "This is a project i had started for a local over-30 Division A men's soccer team. It was an entirely XML driven site that would allow the club manager to keep team members informed of match reports and division standing, as well as giving him the ability to upload photos and videos of the games. There would also be section that deals with the history of the club. The look and feel of the site is consistent with the Fado emblem and uses soccer jersey textures to create a subtle and familiar feel.",
        assets: [
            {
                label: '',
                id: 'fcfado1',
                type: 'image',
                uri: 'fcfado_sample.jpg',
            },
        ],
        links: [
            // {
            //     label: 'View Project (Flash Player required)',
            //     id: '',
            //     url: 'http://www.fcfado.com/inprogress',
            // },
        ],
        sizes: ['desktop'],
    },
    {
        tags: ['pearson', 'exclude'],
        id: 'abbi',
        title: 'ABBI',
        role: 'Lead UI/UX, Senior Front-End Developer',
        descr: 'This is a content authoring, banking, and form building tool used to author QTI compliant assessment content. The first pass of the tool is focused on creating authoring modules and the basic functionality for creating, editing, and reviewing assessment content authored in or imported into ABBI.<br/><br/>This is a RESTful single page web application that, on the client side, uses Backbone.js, Underscore.js, Require.js, SASS, Bootstap, JQuery/UI/jqGrid, Font Awesome, and the TinyMCE rich text editor. For build automation and management, we use Grunt and Bower.<br/><br/>I did all the visual design for this projects, most of the interaction design, and was a principal contributor to the infomation architecture and user-flow. I was also a princpal client-side developer and lead the authoring module development.',
        assets: [
            {
                label: '',
                id: 'abbi1',
                type: 'image',
                uri: 'abbi_1.jpg',
            },
            {
                label: '',
                id: 'abbi2',
                type: 'image',
                uri: 'abbi_edit_list.jpg',
            },
            {
                label: '',
                id: 'abbi7',
                type: 'image',
                uri: 'abbi_modal_lockForEdit.jpg',
            },
            {
                label: '',
                id: 'abbi4',
                type: 'image',
                uri: 'abbi_create_item_gapMatch.jpg',
            },
            {
                label: '',
                id: 'abbi5',
                type: 'image',
                uri: 'abbi_create_item_gapMatchAndText.jpg',
            },
            {
                label: '',
                id: 'abbi6',
                type: 'image',
                uri: 'abbi_create_item_hotspot.jpg',
            },
            {
                label: '',
                id: 'abbi3',
                type: 'image',
                uri: 'abbi_3.jpg',
            },
            {
                label: '',
                id: 'abbi8',
                type: 'image',
                uri: 'abbi_attachments.jpg',
            },
            {
                label: '',
                id: 'abbi9',
                type: 'image',
                uri: 'abbi_versions.jpg',
            },
            {
                label: '',
                id: 'abbi10',
                type: 'image',
                uri: 'abbi_create_item_dragToReorder.jpg ',
            },
            {
                label: '',
                id: 'abbi11',
                type: 'image',
                uri: 'abbi_create_item_functionGraph_1.jpg',
            },
            {
                label: '',
                id: 'abbi12',
                type: 'image',
                uri: 'abbi_create_item_functionGraph_2.jpg',
            },
            {
                label: '',
                id: 'abbi14',
                type: 'image',
                uri: 'abbi_create_item_functionGraph_3.jpg',
            },
            {
                label: '',
                id: 'abbi15',
                type: 'image',
                uri: 'abbi_create_item_functionGraph_narrow.jpg',
            },
            {
                label: '',
                id: 'abbi16',
                type: 'image',
                uri: 'abbi_create_item_moduleCSS.jpg',
            },
            {
                label: '',
                id: 'abbi17',
                type: 'image',
                uri: 'abbi_edit_item_previewMode_itemLayout.jpg',
            },
        ],
        links: [
            {
                label: 'View Project (password protected - please inquire for a tour)',
                id: '',
                url: 'http://abbi.pearson.com',
            },
        ],
    },
    {
        tags: ['freelance', 'exclude'],
        id: 'cmap',
        title: 'MentalModeler',
        role: 'Lead Developer (Javascript and ActionScript), Visual Designer, and Interaction Designer',
        descr: "This project that began as a prototype developed for a science professor at UMass Boston, who is developing software for creating fuzzy logic cognitive maps. He needed a concept mapping tool that was limited in scope to his needs and provided a very intuitive user experience. The prototype i developed was well received and helped him win a National Science Foundation grant, which has provide development funding for the next 3 years, and i continued to refined the prototype and add more features.<br/><br/>I was then employed to build a web-based version of their .net desktop app, which integrated with the actionscript concept mapping tool (i'm working on a javascript port of that piece now utilizing the jsPlumb library). I did all the design and development for this (HTML/CSS/Javascript), making a single page webapp with Backbone.js that utilizes the Javascript FileReader API for reading files and Actionscript and the flash plugin for writing files to the local file system.<br/><br/><p>I also made a small one-page scroller promotional site for the mental modeler, where new users could register for free access to the tool, as well as a similarly styled one-page scroller site for the Principal Investigator's UMass Boston Human-Environment Interactions Lab. The lab site is responsively designed.",
        assets: [
            {
                label: '',
                id: 'mmw1',
                type: 'image',
                uri: 'mentalmodeler-js_go.png',
            },
            {
                label: '',
                id: 'mmw1',
                type: 'image',
                uri: 'mentalmodeler_web.jpg',
            },
            {
                label: '',
                id: 'mm1',
                type: 'image',
                uri: 'mm_scenario_1.jpg',
            },
            {
                label: '',
                id: 'mm2',
                type: 'image',
                uri: 'mm_scenario_2.jpg',
            },
            {
                label: '',
                id: 'mm3',
                type: 'image',
                uri: 'mm_scenario_3.jpg',
            },
            {
                label: '',
                id: 'mm4',
                type: 'image',
                uri: 'mm_scenario_4.jpg',
            },
        ],
        links: [
            {
                label: 'Concept Mapping Tool (React Javascript version)',
                id: '',
                url: 'http://jonnybomb.com/mentalmodeler',
            },
            {
                label: 'Human-Environment Interactions Lab',
                id: '',
                url: 'http://jonnybomb.com/umasslab',
            },
            {
                label: 'Promotional Site',
                id: '',
                url: 'http://mentalmodeler.com',
            },
        ],
    },
];

export const jonnybomb_as = filterAndSort(
    _jonnybomb_as.map((p) => transformProject(p)),
    false,
);
