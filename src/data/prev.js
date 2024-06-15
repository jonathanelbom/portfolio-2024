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
        fridaynightjamz: {
            tags: ['freelance'],
            id: 'fridaynightjamz',
            title: 'Friday Night Jamz',
            role: 'Lead Developer, Visual Designer, and Interaction Designer',
            descr: "This is a desktop and mobile website to share my hobby friday night jams with my group of friends who participate. We began by hosting our jams on SoundCloud, but soon ran out of space, so i decided to cook up this site. Each 'jam' has a custom name and image, and each jam session has details listing the date and participants.",
            assets: [
                {
                    label: '',
                    id: 'mmw1',
                    type: 'image',
                    uri: 'fridaynightjamz.jpg',
                },
            ],
            links: [
                {
                    label: 'View Site',
                    id: '',
                    url: 'http://fridaynightjamz.com',
                },
            ],
        },
        cmap: {
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
        mikeparsons: {
            tags: ['freelance'],
            id: 'mikeparsons',
            title: 'Mike Parsons',
            role: 'Lead Designer and Developer',
            descr: "For this project, my goal was to design a clean and minimal site that would visually conform to the size of the browser window and let Mike's art work take front stage.  I also succeed in providing an easy way for Mike to configure the structure of the site and update his work by using Flickr to manage his content. This project was done in HTML/CSS/JavaScript to allow for viewing on mobile devices as well as desktops and laptops.",
            assets: [
                {
                    label: '',
                    id: 'mikep1',
                    type: 'image',
                    uri: 'mikedparsons_go.jpg',
                },
            ],
            links: [
                {
                    label: 'View Site',
                    id: '',
                    url: 'http://www.mikedparsons.com',
                },
            ],
        },
        abbi: {
            tags: ['pearson'],
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
        beats: {
            tags: ['freelance'],
            id: 'beats',
            title: 'Beats Music Sentence Share',
            role: 'Front-End Developer (HTML/Javascript/CSS) ',
            descr: 'For a SXSW 2014 Hackday, my buddy at Beats got some friends together to riff off their "sentence player" and we made a sentence sharing twitter image posting mobile web app.  Unlike the sentence player, we added a "Write your own" option to solidify the MadLibs feel. I got to play a little with CSS3 3D and keyframe animations. After their acquisition by Apple, Beats took this site down.',
            assets: [
                {
                    label: '',
                    id: 'beats_3',
                    type: 'image',
                    uri: 'beats_3.png',
                },
                {
                    label: '',
                    id: 'beats_2',
                    type: 'image',
                    uri: 'beats_1.png',
                },
                {
                    label: '',
                    id: 'beats_1',
                    type: 'image',
                    uri: 'beats_2.png',
                },
            ],
            links: [
                {
                    label: "View people's #BeatsSentences",
                    id: '',
                    url: 'https://twitter.com/hashtag/beatssentence?f=realtime&src=hash',
                },
            ],
        },
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
            links: [
                {
                    label: 'View Project (Flash Player required)',
                    id: '',
                    url: 'http://portfolio.jonnybomb.com/work/springbox/interactiverfp/',
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
            links: [
                {
                    label: 'View Project (Flash Player required)',
                    id: '',
                    url: 'http://portfolio.jonnybomb.com/work/dell/swagarcade/',
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
            links: [
                {
                    label: 'View Project (Flash Player required)',
                    id: '',
                    url: 'http://portfolio.jonnybomb.com/work/nascar',
                },
            ],
        },
        steameffect: {
            tags: ['springbox'],
            id: 'steameffect',
            title: 'LG Steam Particle System Prototype',
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
            links: [
                {
                    label: 'View Prototype (Flash Player required)',
                    id: '',
                    url: 'http://portfolio.jonnybomb.com/work/lg/steameffect',
                },
            ],
        },
        san: {
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
                {
                    label: 'View Project (Flash Player required)',
                    id: '',
                    url: 'http://lungbooks.com/suddenlyalmostnearly/',
                },
            ],
        },
        wayfinder: {
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
                {
                    label: 'View Project (Flash Player required)',
                    id: '',
                    url: 'http://wayfinder.jonnybomb.com/hub_flash.htm',
                },
            ],
        },
        jonnybomb: {
            tags: ['freelance'],
            id: 'jonnybomb',
            title: 'JonnyBomb',
            role: 'Lead Designer and Developer',
            descr: "This project is my personal site, where I mainly showcase my music, but  where I also display personal photos and give folks a glimpse into my current likes and dislikes. I wanted to created a slick look that felt modern yet ethereal.  The site features an XML-driven streaming MP3 player with scrubbing functionality and an XML-based photo displayer which is configurable to easily allow me to display batches of photos based on my camera's default naming conventions. The site also features and XML-based links and comments section.",
            assets: [
                {
                    label: '',
                    id: 'jonnybomb1',
                    type: 'image',
                    uri: 'jonnybomb_1.jpg',
                },
            ],
            links: [
                {
                    label: 'View Site (Flash Player required)',
                    id: '',
                    url: 'http://www.jonnybomb.com',
                },
            ],
        },
        texasweather: {
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
                {
                    label: 'View Project (Flash Player required)',
                    id: '',
                    url: 'http://bancvue.jonnybomb.com',
                },
            ],
        },
        wedding: {
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
                {
                    label: 'View Site (Flash Player required)',
                    id: '',
                    url: 'http://portfolio.jonnybomb.com/work/billiejoandjonathan',
                },
            ],
        },
        rapidric: {
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
                {
                    label: 'View Site (Flash Player required)',
                    id: '',
                    url: 'http://portfolio.jonnybomb.com/work/rapidric',
                },
            ],
        },
        fcfado: {
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
                {
                    label: 'View Project (Flash Player required)',
                    id: '',
                    url: 'http://www.fcfado.com/inprogress',
                },
            ],
        },
        scion: {
            tags: ['springbox'],
            id: 'scion',
            title: 'Springbox Scion Demo',
            role: 'Lead Developer',
            descr: 'The two demos were created for a scion pitch to design their vehicle configurator. Demo 1 was more or less a reskinning of the existing functionality (with some new bells and whistles) while Demo 2 took a more figurative approach to the building of your custom scion vehicle.',
            assets: [
                {
                    label: '',
                    id: '',
                    type: 'image',
                    uri: 'sb_scion1.jpg',
                },
            ],
            links: [
                {
                    label: 'View Demo 1 (Flash Player required)',
                    id: '',
                    url: 'http://portfolio.jonnybomb.com/work/springbox/scion1',
                },
                {
                    label: 'View Demo 2 (Flash Player required)',
                    id: '',
                    url: 'http://portfolio.jonnybomb.com/work/springbox/scion2',
                },
            ],
        },
        screensaver: {
            tags: ['springbox'],
            id: 'screensaver',
            title: 'Springbox Sixth Anniversary Screensaver',
            role: 'Lead Developer',
            descr: "For Springbox's sixth anniversary, I created a screensaver that pulls images from Flickr and transitions them them in a flipping, 3D manner. The final screensaver had options to let the user control the amount of image overlap, base piece size, flipping speed, and even allows users to customize the feed to their own Flickr account.",
            assets: [
                {
                    label: '',
                    id: '',
                    type: 'image',
                    uri: 'sb_screensaver.jpg',
                },
            ],
            links: [
                {
                    label: 'View Project (Flash Player required)',
                    id: '',
                    url: 'http://portfolio.jonnybomb.com/work/springbox/screensaver',
                },
            ],
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
            links: [
                {
                    label: 'View Project (Flash Player required)',
                    id: '',
                    url: 'http://portfolio.jonnybomb.com/work/disney',
                },
            ],
        },
        superview: {
            tags: ['springbox'],
            id: 'superview',
            title: 'Springbox Superview Prototype',
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
            links: [
                {
                    label: 'View Prototype (Flash Player required)',
                    id: '',
                    url: 'http://portfolio.jonnybomb.com/work/springbox/superview',
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
            links: [
                {
                    label: 'View Project (Flash Player required)',
                    id: '',
                    url: 'http://portfolio.jonnybomb.com/work/laf/imageviewer/',
                },
            ],
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
            links: [
                {
                    label: 'View Project (Flash Player required)',
                    id: '',
                    url: 'http://portfolio.jonnybomb.com/work/paypal/agencyofrecord',
                },
            ],
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
            links: [
                {
                    label: 'View Project (Flash Player required)',
                    id: '',
                    url: 'http://portfolio.jonnybomb.com/work/dell/transposer',
                },
            ],
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
            links: [
                {
                    label: 'View Project (Flash Player required)',
                    id: '',
                    url: 'http://portfolio.jonnybomb.com/work/paypal/safetytraining',
                },
            ],
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
            links: [
                {
                    label: 'View Project (Flash Player required)',
                    id: '',
                    url: 'http://portfolio.jonnybomb.com/work/laf/homepagerotator/',
                },
            ],
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
            links: [
                {
                    label: 'View Project (Flash Player required)',
                    id: '',
                    url: 'http://portfolio.jonnybomb.com/work/experian',
                },
            ],
        },
        steamlaundry: {
            tags: ['springbox'],
            id: 'steamlaundry',
            title: 'LG Steam Laundry Microsite',
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
            links: [
                {
                    label: 'View Project (Flash Player required)',
                    id: '',
                    url: 'http://portfolio.jonnybomb.com/work/lg/steamlaundrymicrosite',
                },
            ],
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
            links: [
                {
                    label: 'View Project (Flash Player required)',
                    id: '',
                    url: 'http://portfolio.jonnybomb.com/work/callaway',
                },
            ],
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
            links: [
                {
                    label: 'View Project (Flash Player required)',
                    id: '',
                    url: 'http://portfolio.jonnybomb.com/work/dell/hometabmap',
                },
            ],
        },
        k12: {
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
        },
        pnc: {
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
        },
        alms: {
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
        },
        pearson: {
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
        },
        flashvue: {
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
        },
        sap: {
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
        },
        vnsny: {
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
        },
    },
};

export const _prev_projects = Object.entries(prev.projects).map(([key, value]) => ({
    key,
    ...transformProject(value),
}));
export const prev_projects = filterAndSort(_prev_projects);
