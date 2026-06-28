import { filterAndSort, transformProject } from './util';

export const _jonnybomb_js = [
    {
        tags: ['personal', 'production', 'ai'],
        id: 'personal-bedtime',
        title: 'Bedtime',
        role: 'Full Stack AI Product Developer',
        descr: "<b>What it is</b><br/>Bedtime generates a bespoke AI rhythm-section assistant calibrated to your exact sonic world. You describe a moment in your track—genre, mood, time of day, movement, DAW, and instrument—and the AI creates a custom assistant voice (with its own generated name, reference universe, and metaphor vocabulary), then streams back structured production guidance: tempo, drums, bass, chords, keys, your instrument's expressive texture layer, and what to avoid. Every user gets a different AI. The voice is calibrated from genre + time + movement + mood as a unified sonic moment—lo-fi + late night + drift + reflective yields a hazy, interior sound; house + night + bounce + euphoric yields kinetic, forward-leaning, pulse-driven. The underlying Neiliyo creative philosophy (feel over theory, restraint, metaphor) is the preserved DNA.<br/><br/><b>How it evolved</b><br/>Started as a custom GPT tuned to a single sound: the <b>Neiliyo Future Yacht</b> (future R&B + yacht rock). A chat interface where the user types a vibe and the AI responds in prose. Problem: production guidance as a wall of text is useless when you're in Ableton mid-session and just need to know the tempo.<br/><br/>First iteration — <b>structured JSON response</b>: constrained the AI to respond with a discriminated-union schema (either clarifying questions or a full seven-section response object). Each section has a <code>title</code>, <code>feel</code> direction, <code>ableton_tip</code>, and optional <code>reference</code>. The UI renders scannable cards and a detail-per-section drill-down.<br/><br/>Second iteration — <b>generated persona pipeline</b>: rather than hardcode the system prompt, the form collects genre, mood, movement, time of day, DAW, and instrument. A first-stage <code>POST /api/generate-prompt</code> sends these preferences to GPT-4o with a meta-prompt that instructs the model to author a complete system prompt from scratch—not filling a template, but generating a custom persona including name, voice calibration, synthesized genre ecosystem, and inferred reference universe. That generated persona then drives the main <code>POST /api/chat</code> streaming call. This two-stage approach yields massively better quality than template-filling and makes each user's assistant genuinely theirs.<br/><br/><b>Technical highlights</b><br/><b>Generated AI persona per session</b> — GPT-4o authors a complete custom system prompt from scratch for each user, not a template fill. The persona includes a generated name and creative identity, voice calibration where metaphor vocabulary and tonal register emerge from the sonic moment, a synthesized (not mirrored) genre ecosystem, and an inferred reference universe. <b>Voice calibration as unified sonic moment</b> — tempo of language, metaphor vocabulary, and tonal register all derive from genre + time + movement + mood together, creating coherent personas across any combination. <b>Structured JSON streaming</b> — GPT-4o responds in raw JSON (never markdown); the client parses tokens in real time with a four-pass <code>jsonrepair</code> fallback strategy for malformed partial responses. <b>Progressive disclosure form</b> — Fields unlock sequentially via Vue <code>watch()</code> + <code>nextTick</code> scroll-into-view; no form library, just declarative Vue. <b>Session persistence</b> — <code>useSessionStore</code> holds preferences and structured response across navigation; a <code>preferencesChanged</code> dirty-check prevents redundant API calls. <b>Mock AI mode</b> — <code>MOCK_AI=true</code> streams pre-written fixtures through the full SSE pipeline, so the entire UI is testable without an API key.<br/><br/><b>So what</b><br/>The result is a highly specific AI tool that feels nothing like a ChatGPT wrapper. Every user gets an assistant that sounds like it was written for their exact sonic world — not because of clever prompting, but because the system generates its voice from first principles every session. The form fields, the opinionated constraints (feel over theory, restraint, metaphor), the scannable section cards, and the per-section DAW tips all work together to give producers guidance they can act on immediately. The generated persona approach is the key insight: it proves that opinionated AI isn't a prompt-engineering problem. It's a system design problem — structure the form inputs, generate a custom persona for each session, then stream the response through a fixed output schema. That architecture is what makes Bedtime work.",
        assets: [
            {
                label: '',
                id: 'bedtime-1',
                type: 'image',
                uri: 'bedtime-1.png',
            },
            {
                label: '',
                id: 'bedtime-2',
                type: 'image',
                uri: 'bedtime-2.png',
            },
        ],
        links: [
            {
                label: 'Try Bedtime',
                id: '',
                url: 'https://bedtime-zeta.vercel.app',
            },
            {
                label: 'View source on Github',
                id: '',
                url: 'https://github.com/jonathanelbom/bedtime',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['personal', 'prototype', 'motion', 'ai'],
        id: 'personal-imprompt-frivolous',
        title: 'imPROMPT Frivolous Pieces',
        role: 'Lead Developer and Interaction Designer',
        descr: `A collection of frivolous, 30-minute interactive pieces created during imPROMPT—an AI-powered creative jam session. While colleagues made comics, songs, and branded websites, I focused on rapid-fire vibe-coded interactions using ChatGPT and Claude. Each piece is intentionally playful and purposeless, designed to celebrate the joy of creative experimentation with AI. Inspired by 90s remix culture and exquisite corpse—pure exploration with no constraints.`,
        assets: [
            {
                label: '',
                id: 'frivolous-landing',
                type: 'image',
                uri: 'frivolous--landing.png',
            },
            {
                label: '',
                id: 'frivolous-plant-wormhole',
                type: 'image',
                uri: 'frivolous--plant-wormhole.png',
            },
            {
                label: '',
                id: 'frivolous-spaceship',
                type: 'image',
                uri: 'frivolous--spaceship.png',
            },
            {
                label: '',
                id: 'frivolous-unicorn-smack',
                type: 'image',
                uri: 'frivolous--unicorn-smack.png',
            },
            {
                label: '',
                id: 'frivolous-vacuum-cheer',
                type: 'image',
                uri: 'frivolous--vacuum-cheer.png',
            },
        ],
        links: [
            {
                label: 'Explore the frivolous pieces',
                id: '',
                url: 'https://frivolous.elbom.com',
            },
        ],
        sizes: ['mobile', 'desktop'],
    },
    {
        tags: ['personal', 'production', 'gesture'],
        id: 'personal-dotz',
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
        tags: ['personal', 'production'],
        id: 'personal-factorthat',
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
        imageBgColor: '#dedcdb',
    },
    {
        tags: ['personal', 'production'],
        id: 'personal-friday-night-jamz',
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
        tags: ['personal', 'production', 'motion'],
        id: 'personal-countdown',
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
        tags: ['personal', 'production'],
        id: 'personal-mike-parsons',
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
        tags: ['personal', 'production', 'motion'],
        id: 'personal-doggie-search',
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
        tags: ['personal', 'production', 'motion'],
        id: 'personal-beats',
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
