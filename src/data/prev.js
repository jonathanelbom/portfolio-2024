import { filterAndSort, transformProject } from './util';

export const ROLES = {
    LEAD_DEV: 'Lead Developer',
    VIS_DES: 'Visual Designer',
    INT_DES: 'Interaction Designer',
};

export const TAGS = {
    JB: 'Jonnybomb',
    ELEARN: 'E-Learning',
    ADV: 'Advertizing',
};

export const BADGES = {
    PROD_PROTO: 'Production prototype',
    LAB_PROTO: 'Lab prototype',
    PROD_COMP: 'Production component',
};

export const prev = {
    globals: {
        resumeUrl: 'JonathanElbom_Resume.pdf',
        mailTo: 'mailto:jb@jonnybomb.com',
        imagePath: 'images/',
    },
    projects: {
        interactiverfp: {
            tags: ['springbox'],
            id: 'interactiverfp',
            title: 'Springbox Interactive RFP',
            role: 'Lead Developer, Motion Designer',
            descr: 'This is a project we created so that Springbox could have an interactive piece to send out to potential clients to introduce them to our team, or philosophy, and some of our previous work.<br><br>I concepted and developed the intro and the shell and worked on most of the content sections. This was my first foray into native Flash 3D, and i was particularly please with my "blast of cards in the wind" intro.',
            assets: [
                {
                    label: '',
                    id: '',
                    type: 'image',
                    uri: 'sb_interactiverfp.jpg',
                },
            ],
            links: [],
            sizes: ['desktop'],
            videos: [
                {
                    url: 'https://www.youtube.com/watch?v=-0aCfi3t5Qc',
                },
            ],
        },
        swagball: {
            tags: ['springbox'],
            id: 'swagball',
            title: 'Dell Swag Ball',
            role: 'Lead Developer, Game Designer, and Interaction Designer',
            descr: 'Swag Ball is the first game created for the Dell Lounge Swag Arcade, an old style arcade where user can play casual games and earn tickets to be entered into the daily raffle for great prizes (like an XBox 360, Dell Net-books, etc.). The Arcade came complete with prize counter and log-in, but alas, Dell had over estimated their funding levels, and Swag Ball has since been relegated to a mere facebook app with no prizes.<br><br>I came up with the original idea to do a Skee Ball style game, created the interaction design for the game, and worked with the creative team at Springbox to help flesh out the Arcade metaphor.',
            assets: [
                {
                    label: '',
                    id: '',
                    type: 'image',
                    uri: 'dell_swagball.jpg',
                },
            ],
            links: [],
            sizes: ['desktop'],
            videos: [
                {
                    url: 'https://www.youtube.com/watch?v=0mqY8RiqM5M',
                },
            ],
        },
        nascar: {
            tags: ['springbox'],
            id: 'nascar',
            title: 'Nascar Sweepstakes',
            role: 'Lead Developer, Game Designer, and Interaction Designer',
            descr: "This site was a redesign of the previous years sweepstakes website, though this version's main focus was a drag and drop mini game highlighting all of nascars partners in a much more engaging and interactive manner. This site won the 2009 Business-to-Consumer Automotive Communications Award.",
            assets: [
                {
                    label: '',
                    id: '',
                    type: 'image',
                    uri: 'nascar.jpg',
                },
            ],
            links: [],
            sizes: ['desktop'],
            videos: [
                {
                    url: 'https://www.youtube.com/watch?v=V0eDOdHVz10',
                },
            ],
        },
        steameffect: {
            tags: ['springbox'],
            id: 'steameffect',
            title: 'LG Steam Particle System',
            role: 'Lead Developer and Motion Designer',
            descr: 'This was the prototype for the steam particle system developed for the LG microsite. In this prototype, I linked sliders to all the different control parameters for the steam particle system so that i could easily tweak the settings to create the most realistic steam possible.',
            assets: [
                {
                    label: '',
                    id: '',
                    type: 'image',
                    uri: 'lg_steamparticles.jpg',
                },
            ],
            links: [],
            sizes: ['desktop'],
            videos: [
                {
                    url: 'https://www.youtube.com/watch?v=j79LM-bu5-w',
                },
            ],
        },
        scion1: {
            tags: ['springbox'],
            id: 'scion1',
            title: 'Scion Configurator',
            role: 'Lead Developer',
            descr: 'The two demos were created for a scion pitch to design their vehicle configurator. This first demo was more or less a reskinning of the existing functionality (with some new bells and whistles).',
            assets: [
                {
                    label: '',
                    id: '',
                    type: 'image',
                    uri: 'sb_scion1.jpg',
                },
            ],
            links: [],
            sizes: ['desktop'],
            videos: [
                {
                    url: 'https://www.youtube.com/watch?v=HYhwouRQkL0',
                },
            ],
        },
        scion2: {
            tags: ['springbox'],
            id: 'scion2',
            title: 'Scion Configurator (alt)',
            role: 'Lead Developer',
            descr: 'The two demos were created for a scion pitch to design their vehicle configurator. This second demo took a more figurative approach to the building of your custom scion vehicle.',
            assets: [
                {
                    label: '',
                    id: '',
                    type: 'image',
                    uri: 'sb_scion2.jpg',
                },
            ],
            links: [],
            sizes: ['desktop'],
            videos: [
                {
                    url: 'https://www.youtube.com/watch?v=lPy8Qe0KgHo',
                },
            ],
        },
        screensaver: {
            tags: ['springbox'],
            id: 'screensaver',
            title: '6th Anniversary Screensaver',
            role: 'Lead Developer',
            descr: "For Springbox's 6th anniversary, I created a screensaver that pulls images from Flickr and transitions them them in a flipping, 3D manner. The final screensaver had options to let the user control the amount of image overlap, base piece size, flipping speed, and even allows users to customize the feed to their own Flickr account.",
            assets: [
                {
                    label: '',
                    id: '',
                    type: 'image',
                    uri: 'sb_screensaver.jpg',
                },
            ],
            links: [],
            sizes: ['desktop'],
        },
        magicaldash: {
            tags: ['springbox'],
            id: 'magicaldash',
            title: 'Disney/Verizon Magical Dash',
            role: 'Lead Developer, Game Designer, and Interaction Designer',
            descr: 'Verizon and Disney needed a mini site to showcase the new Verizon DisneyLand mobile app. To do so, we created a time-based game that abstracts the main features from the mobile app into a jump through the park adventure where the user has to visit all the spots on their itinerary before the parl closes. The main challenge in this project was coming up with a navigation mechanism that allows users to easily move through the vast park in a fun and engaging manner. I created and implemented the game play mechanics for this project.',
            assets: [
                {
                    label: '',
                    id: '',
                    type: 'image',
                    uri: 'disney_magicaldash.jpg',
                },
            ],
            links: [],
            sizes: ['desktop'],
        },
        superview: {
            tags: ['springbox'],
            id: 'superview',
            title: 'Superview Prototype',
            role: 'Lead Developer',
            descr: 'This was a prototype created to be a reusable, waypoint-driven timeline navigator to showcase rich 3D photograhy of consumer goods in a lightweight, intuitive manner with fluid movement and transitions. This prototype showcases dell mini computers and is all but complete, except for one section.',
            assets: [
                {
                    label: '',
                    id: '',
                    type: 'image',
                    uri: 'sb_superview.jpg',
                },
            ],
            links: [],
            sizes: ['desktop'],
            videos: [
                {
                    url: 'https://www.youtube.com/watch?v=y0nB7wIBLvo',
                },
            ],
        },
        imageviewer: {
            tags: ['springbox', 'exclude'],
            id: 'imageviewer',
            title: 'LiveStrong Image Viewer',
            role: 'Lead Developer',
            descr: 'This project is for the Lance Armstrong Foundation and was created to give them an easy way to showcase their different Flickr photo sets throughout the Livestrong.org website.<br><br>This is one of several Flickr projects i have worked on using the Abode AS3FlickrLib. Phase I just included the large images and a next/back navigation, but i developed a 3D prototype integrating a thumbnail view as well.',
            assets: [
                {
                    label: '',
                    id: '',
                    type: 'image',
                    uri: 'laf_imageviewer.jpg',
                },
            ],
            links: [],
            sizes: ['desktop'],
        },
        aor: {
            tags: ['springbox'],
            id: 'aor',
            title: 'PayPal Agency of Record Demo',
            role: 'Lead Developer',
            descr: 'This was a sample project created to woo PayPal into considering Springbox for their agency of record. It was a quick sketch of a possible new way to design the main PayPal website. The highlight, for me, on this project was a new application of my smoke/steam particle system',
            assets: [
                {
                    label: '',
                    id: '',
                    type: 'image',
                    uri: 'paypal_aor.jpg',
                },
            ],
            links: [],
            sizes: ['desktop'],
        },
        transposer: {
            tags: ['springbox'],
            id: 'transposer',
            title: 'Dell X-Games Transposer',
            role: 'Lead Developer',
            descr: "Hot on the heels of JibJab, Dell Lounge wanted to create a flash app where user could upload, crop, and place images of themselves into the current action (whatever that may be). In this case, it was the X-Games. Final images were then saved to the user's Dell Lounge gallery where they could share their composited images with others.",
            assets: [
                {
                    label: '',
                    id: '',
                    type: 'image',
                    uri: 'dell_transposer.jpg',
                },
            ],
            links: [],
            sizes: ['desktop'],
        },
        safetytraining: {
            tags: ['springbox'],
            id: 'safetytraining',
            title: 'PayPal Safety Traing',
            role: 'Lead Developer',
            descr: 'This site was created for PayPal in order to help train their customers about online safety and security by providing an immersive educational environment while outlining PayPal’s latest online safety products. This site won an Adobe Site of the Day award on December 5, 2008.',
            assets: [
                {
                    label: '',
                    id: '',
                    type: 'image',
                    uri: 'paypal_safety.jpg',
                },
            ],
            links: [],
            sizes: ['desktop'],
        },
        homepagerotator: {
            tags: ['springbox', 'exclude'],
            id: 'homepagerotator',
            title: 'LiveStrong Home Page Rotator',
            role: 'Lead Developer',
            descr: 'This project is for the home page flash rotator for the livestrong.org main landing page. The goal was to create a homepage rotator that had some movement and pizzaz but would fit in with the new style guide. We developed a modular template system that provides livestrong a flexible way for creating content using Kentico.',
            assets: [
                {
                    label: '',
                    id: '',
                    type: 'image',
                    uri: 'laf_homerotator.jpg',
                },
            ],
            links: [],
            sizes: ['desktop'],
        },
        experian: {
            tags: ['springbox'],
            id: 'experian',
            title: 'Experian Product Demo',
            role: 'Lead Developer',
            descr: 'Experian needed a 3-5 minute informative piece to reach new users and let them know more about the freecreditreport.com website and its vast features, so we built a custom .swf player and created 4 minutes of flash-based motion graphics to help them deliver their message.',
            assets: [
                {
                    label: '',
                    id: '',
                    type: 'image',
                    uri: 'experian.jpg',
                },
            ],
            links: [],
            sizes: ['desktop'],
        },
        steamlaundry: {
            tags: ['springbox'],
            id: 'steamlaundry',
            title: 'LG Steam Microsite',
            role: 'Lead Developer',
            descr: 'LG needed a microsite to showcase their new steamwashers and steamdryers, so we made slick, modern site to meet their goala. For this site, i got to develop a steam particle system.',
            assets: [
                {
                    label: '',
                    id: '',
                    type: 'image',
                    uri: 'lg_steamlaundry.jpg',
                },
            ],
            links: [],
            sizes: ['desktop'],
        },
        callaway: {
            tags: ['springbox'],
            id: 'callaway',
            title: 'Callaway Netfits',
            role: 'Lead Developer',
            descr: "This site was developed to create a custom driver configurator for Callaway's new line of golf clubs. Users are taken through 5 stages of configuration, where they provide all the details of their drives, often using 3D modeled trajectories to fine tune their golfing needs. This site won a 2008 Austin Addy (Silver) for Interactive Media.",
            assets: [
                {
                    label: '',
                    id: '',
                    type: 'image',
                    uri: 'callaway_1.jpg',
                },
            ],
            links: [],
            sizes: ['desktop'],
        },
        hometabmap: {
            tags: ['springbox', 'exclude'],
            id: 'hometabmap',
            title: 'Dell Hometab Map',
            role: 'Lead Developer',
            descr: 'Dell need a new faecbook hometab map to provide user a quick and easy overview of all the countries which have a Dell presence. We utilized a paired-down google-like map system that allows user to freely navigate all over the globe.',
            assets: [
                {
                    label: '',
                    id: '',
                    type: 'image',
                    uri: 'dell_hometabmap.jpg',
                },
            ],
            links: [],
            sizes: ['desktop'],
        },
    },
};

export const _prev_projects = Object.entries(prev.projects).map(([key, value]) => ({
    key,
    ...transformProject(value),
}));
export const prev_projects = filterAndSort(_prev_projects);

export const springbox = prev_projects.filter((project) => project.tags.includes('springbox'));
export const jonnybomb = prev_projects.filter((project) => project.tags.includes('freelance'));
