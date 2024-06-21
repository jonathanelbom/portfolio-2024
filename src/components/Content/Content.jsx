import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useIntersctionSentinel } from '../../hooks/useIntersectionSentinel';
import { springbox } from '../../data/prev';
import { enspire } from '../../data/enspire';
import { dropparty } from '../../data/dropparty';
import { vrbo_all, vrbo_prod, vrbo_proto, vrbo_videos } from '../../data/vrbo';
import { mm } from '../../data/mentalmodeler';
import { pearson } from '../../data/pearson';
import { indeed } from '../../data/indeed';
import { contentMaxWidth, maxWidthContent } from '../../constants/styles';
import {
    CelebrationOutlined,
    Compress,
    Expand,
    SupervisorAccountOutlined,
    WavingHandOutlined,
    WebOutlined,
    // BrokenImageOutlined,
} from '@mui/icons-material';
import { ProjectGrid } from '../ProjectGrid/ProjectGrid';
import { Grid } from '../Grid/Grid';
import { Flex } from '../IFL/ifl';
import { ACTION_TYPE, SECTION, useAppDispatch, useAppState } from '../../context/AppContext/AppContext';
import { jonnybomb_js } from '../../data/jonnybomb_js';
import { jonnybomb_as } from '../../data/jonnybomb_as';
import { WorkInfo } from '../WorkInfo/WorkInfo';

const MinWidthSection = ({ children, sx = {} }) => (
    <Box
        sx={{
            ...maxWidthContent,
            ...sx,
        }}
    >
        {children}
    </Box>
);

export const Section = ({ children, sx, title, Icon, padding = 'header', altControl }) => {
    return (
        <>
            <Flex direction="column" sx={{ ...sx, position: 'relative' }}>
                <Box sx={{ paddingBlock: 2 }}>
                    <Box
                        sx={{
                            ...maxWidthContent,
                        }}
                    >
                        <Flex justify="space-between">
                            <Typography component="h2" variant="sectionHeadline">
                                <Flex gap={1.5} align="center">
                                    {Icon && <Icon sx={{ transform: 'scale(1.25)' }} />}
                                    {title}
                                </Flex>
                            </Typography>
                            {!!altControl && altControl}
                        </Flex>
                    </Box>
                </Box>
                {padding === 'full' && <Box sx={{ ...maxWidthContent }}>{children}</Box>}
                {padding !== 'full' && children}
            </Flex>
        </>
    );
};

const ToggleExpandedButton = ({ section }) => {
    const dispatch = useAppDispatch();
    const state = useAppState();
    const allExpanded = state[`allExpanded${section}`];
    return (
        <Button
            sx={{ marginInlineEnd: '0', position: 'sticky', top: 0 }}
            variant="text"
            onClick={(e) => {
                e.preventDefault();
                dispatch({
                    type: ACTION_TYPE.TOGGLE_SECTION_ALL_EXPANDED,
                    value: {
                        expanded: !allExpanded,
                        section,
                    },
                });
            }}
        >
            {allExpanded ? 'HIDE ALL' : 'SHOW ALL'}
        </Button>
    );
};

export const Content = ({ children }) => {
    const { isIntersecting, Sentinel } = useIntersctionSentinel({ threshold: 1 });
    const { condensed } = useAppState();
    const dispatch = useAppDispatch();
    const showExpandContract = useMediaQuery(`(min-width: calc(${contentMaxWidth} + 32px))`);
    const ExpandIcon = condensed ? Expand : Compress;
    return (
        <>
            {showExpandContract && (
                <Button
                    onClick={() =>
                        dispatch({
                            type: ACTION_TYPE.TOGGLE_CONDENSED,
                            value: !condensed,
                        })
                    }
                    variant="contained"
                    sx={{
                        position: 'fixed',
                        bottom: '16px',
                        right: '16px',
                        zIndex: 2,
                        minWidth: 'unset',
                        padding: 1,
                    }}
                >
                    <ExpandIcon sx={{ transform: 'rotate(90deg)' }} />
                </Button>
            )}
            <Sentinel sx={{ opacity: 0, height: '10px' }} />
            <Flex
                as="main"
                className="main-content"
                direction="column"
                gap={8}
                sx={{
                    maxWidth: condensed ? `calc(${contentMaxWidth} + 48px)` : '100vw',
                    transition: 'max-width 500ms ease',
                    marginInline: 'auto',
                    paddingBlockStart: [2, 2, 3],
                    paddingBlockEnd: 10,
                    backgroundColor: 'background.paper',
                    position: 'relative',
                    zIndex: 1,
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        boxShadow: '0 16px 60px rgba(0, 0, 0, 0.15)',
                        opacity: isIntersecting ? 0 : 1,
                        transition: 'opacity 300ms ease',
                    },
                }}
            >
                {children}
                <Section title="Hello" Icon={WavingHandOutlined} padding="full">
                    <Typography
                        as="p"
                        dangerouslySetInnerHTML={{
                            __html: 'My name is Jonathan and my passion is to bring extraordinary user experiences to life.<br/><br/>I live at the intersection of technology and design, blending frontend web engineering and UX design and into a single progressive discipline. I utilize my understanding of technical capabilities and design intent to transform concepts and mockups into delightful, accessible, and performant experiences.<br/><br/>I approach my work with empathy and compassion, championing cross-functional collaboration to deliver crafted solutions.',
                        }}
                    />
                </Section>
                <Section
                    title="Full Time Work"
                    Icon={WebOutlined}
                    altControl={<ToggleExpandedButton section={SECTION.WORK} />}
                >
                    <MinWidthSection>
                        <Typography
                            dangerouslySetInnerHTML={{
                                __html: 'Welcome to my work. This section is in-progress and I am continually improving it, adding more descriptions, videos, and links to prototypes and demos.<br/><br/> <i>Click each row to expand or collapse it or use the show/hide all to toggle all rows at once.',
                            }}
                        />
                    </MinWidthSection>
                    <ProjectGrid
                        items={indeed}
                        company="Indeed"
                        dates="Sept 2022 - May 2024"
                        role="Lead UX Developer"
                        section={SECTION.WORK}
                        title="Polished Experiences: Prototypes to Production"
                        content="Much of this work demonstrates my collaborative process with designers and engineers as I iterated on experiences and took them from prototypes to production."
                    ></ProjectGrid>
                    <ProjectGrid
                        items={vrbo_all}
                        company="Vrbo/EG"
                        dates="July 2016 - Sept 2022"
                        role="Sr. Design Technologist | UX Engineer"
                        section={SECTION.WORK}
                    >
                        <Box sx={{ paddingBlock: 3 }}>
                            <WorkInfo
                                title="Videos: Case Studies and Demos"
                                content="Videos I created to walk through demos and case studies of the work I did at Vrbo/Expedia Group"
                            />
                            <Grid items={vrbo_videos} topBorder />
                        </Box>
                        <Box sx={{ paddingBlock: 3 }}>
                            <WorkInfo
                                title="Prototypes: The Lab and Beyond"
                                content="At Vrbo, I started with high-fidelity prototypes for user labs but soon expanded
                                        to impactful workflows like production prototypes and demos. These parallel
                                        experiences allow collaboration with designers to create interaction-rich
                                        features, providing blueprints and usable UI code for production engineering"
                            />
                            <Grid items={vrbo_proto} topBorder />
                        </Box>
                        <Box sx={{ paddingBlock: 3, marginBlockEnd: 9 }}>
                            <WorkInfo
                                title="Design System and Shared Components"
                                content="These production components, which I initially prototyped with other designers,
                                        are shared design system web components. Built in React,
                                        often in collaboration with the UI-Toolkit team, these components are maintained
                                        and improved for both desktop and mobile web. The demos are static builds of the
                                        component dev harnesses.<br/><br/><BrokenImageOutlined/><i>The media URLs originally used for these have changed. I am in the process of updaing these demos, but until that is complete, many photos might not load.</i>"
                            />
                            <Grid items={vrbo_prod} topBorder />
                        </Box>
                    </ProjectGrid>
                    <ProjectGrid
                        items={pearson}
                        company="Pearson"
                        dates="Nov 2010 - July 2016"
                        role="Sr. Frontend Developer | UX Lead"
                        section={SECTION.WORK}
                        title="ABBI - Assessment Banking and Building for Interoperable solutions"
                        content="ABBI is Pearson's flag-ship content authoring, banking, and form building tool used to create QTI compliant interoperable assessments."
                    ></ProjectGrid>
                    <ProjectGrid
                        items={springbox}
                        company="Springbox"
                        dates="Oct 2007 - Nov 2010"
                        role="Sr. Rich Media Designer | Developer"
                        title="Digital Ad Agency Moments of Delight"
                        content="This collection of ActionScript 3 work showcases my interaction and motion design and implementation skills, as I colloborated with content, design, and technology to deliver delightful micro-sites, touch kiosks, and mini-games to big name clients."
                        section={SECTION.WORK}
                    ></ProjectGrid>
                    <ProjectGrid
                        items={enspire}
                        company="Enspire Learning"
                        dates="Nov 2001 - Oct 2007"
                        role="Rich Media Designer | Developer"
                        section={SECTION.WORK}
                        title="E-Learning Experiences to Remember"
                        content="Enspire Learning is where I spent the formative years of my digital career, honing my visual design skills and beganing my foray into scripting and interactive development."
                    ></ProjectGrid>
                </Section>
                <Section
                    title="Consulting Work"
                    Icon={SupervisorAccountOutlined}
                    altControl={<ToggleExpandedButton section={SECTION.CONSULTING} />}
                >
                    <ProjectGrid
                        items={mm}
                        company="Mental Modeler"
                        dates="Jan 2011 -  Present"
                        role="Co-Creator | Designer | Developer"
                        section={SECTION.CONSULTING}
                        title="Fun Project to Mainstay in Academia"
                        content="What began as a fun challenge to create an intuitive node graphing application for my professor friend's Fuzzy Logic Cognitive mapping software has turned into a mainstay in the world of academia. This project has received over a million dollars in grant funding since 2012 and attracts 50,000 users annually. It has supported the publication of over 40 academic papers each year since 2018 and has attracted collaborators such as the Nation Science Foundation, Mitre, DARPA, and the World Wildlife Foundation"
                    ></ProjectGrid>
                    <ProjectGrid
                        items={dropparty}
                        company="Drop Party"
                        dates="July 2019 - Sept 2019"
                        role="Developer"
                        section={SECTION.CONSULTING}
                    ></ProjectGrid>
                </Section>
                <Section
                    title="Personal Projects"
                    Icon={CelebrationOutlined}
                    altControl={<ToggleExpandedButton section={SECTION.PERSONAL} />}
                >
                    <ProjectGrid
                        items={jonnybomb_js}
                        company="JavaScript / HTML / CSS"
                        dates="Jan 2011 - Present"
                        role="Designer | Developer"
                        section={SECTION.PERSONAL}
                    ></ProjectGrid>
                    <ProjectGrid
                        items={jonnybomb_as}
                        company="Flash / ActionScript / Flex"
                        dates="Nov 2001 - Dec 2010"
                        role="Designer | Developer"
                        section={SECTION.PERSONAL}
                    ></ProjectGrid>
                </Section>
            </Flex>
        </>
    );
};
