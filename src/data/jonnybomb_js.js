import { filterAndSort, transformProject } from './util';

export const _jonnybomb_js = [
    {
        tags: ['personal'],
        id: 'dotz',
        title: 'Dotz',
        role: 'Lead Developer, Visual Designer, and Interaction Designer',
        descr: 'Rising to the challenge to make a vanilla javascript game from a static wireframe, I created this retro styled smash the dotz game. I built it with both pointer and touch input support, so get out your phone and start smashing!',
        assets: [
            {
                label: '',
                id: 'dotz',
                type: 'image',
                uri: 'dotz_with_bg.png',
            },
            {
                label: '',
                id: 'dotz-start',
                type: 'image',
                uri: 'dotz_instructions.png',
            },
        ],
        imageBgColor: '#F2E1F0',
        links: [
            {
                label: '',
                id: '',
                url: 'https://jonathanelbom.github.io/dotz/',
            },
            {
                label: 'View source on Github',
                id: '',
                url: 'https://github.com/jonathanelbom/dotz',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['personal'],
        id: 'factorthat',
        title: 'FactorTHAT',
        role: 'Lead Developer, Visual Designer, and Interaction Designer',
        descr: 'I once built a factoring game in ActionScript. Now I built a factoring game in JavaScript',
        assets: [
            {
                label: '',
                id: 'factorthat',
                type: 'image',
                uri: 'factor_that.png',
            },
            {
                label: '',
                id: 'factorthatstart',
                type: 'image',
                uri: 'factor_that_start.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://jonathanelbom.github.io/factoring/',
            },
            {
                label: 'View source on Github',
                id: '',
                url: 'https://github.com/jonathanelbom/factoring',
            },
        ],
        sizes: ['desktop'],
    },
    {
        tags: ['personal'],
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
                label: '',
                id: '',
                url: 'http://fridaynightjamz.com',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['personal'],
        id: 'countdown',
        title: 'Countdown Timer',
        role: 'Lead Developer, Visual Designer, and Interaction Designer',
        descr: 'Tackling another UX and Engineering challenge to build a digital version of an analog countdown timer, I could not shy away from the challenge of sub-second precision',
        assets: [
            {
                label: '',
                id: 'countdown',
                type: 'image',
                uri: 'countdown_timer.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://jonathanelbom.github.io/countdown-timer/',
            },
            {
                label: 'View source on Github',
                id: '',
                url: 'https://github.com/jonathanelbom/countdown-timer',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['personal'],
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
                label: '',
                id: '',
                url: 'http://www.mikedparsons.com',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['personal'],
        id: 'doggiesearch',
        title: 'Delightful Doggie Search',
        role: 'Lead Developer, Visual Designer, and Interaction Designer',
        descr: 'This demo is just a glimpse into my mastery of interaction and motion implementation in React, showcasing how I interweave my design skills in my engineering work.',
        assets: [
            {
                label: '',
                id: 'doggiesearch',
                type: 'image',
                uri: 'doggie_search_demo.png',
            },
        ],
        links: [
            {
                label: '',
                id: '',
                url: 'https://jonathanelbom.github.io/ux-demo/',
            },
            {
                label: 'View source on Github',
                id: '',
                url: 'https://github.com/jonathanelbom/ux-demo',
            },
        ],
        sizes: ['desktop'],
    },
    {
        tags: ['personal'],
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
        sizes: ['mobile', 'desktop'],
    },
];

export const jonnybomb_js = filterAndSort(
    _jonnybomb_js.map((p) => transformProject(p)),
    false,
);
