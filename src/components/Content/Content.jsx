import { useEffect } from 'react';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useIntersctionSentinel } from '../../hooks/useIntersectionSentinel';
import { springbox } from '../../data/prev';
import { enspire } from '../../data/enspire';
import { dropparty } from '../../data/dropparty';
import { vrbo_prod, vrbo_proto, vrbo_videos } from '../../data/vrbo';
import { mm } from '../../data/mentalmodeler';
import { pearson } from '../../data/pearson';
import { factset_ai, factset_prototypes, factset_recipes } from '../../data/factset';
import { indeed } from '../../data/indeed';
import { collections } from '../../data/collections';
import { contentMaxWidth, maxWidthContent } from '../../constants/styles';
import {
    CelebrationOutlined,
    Compress,
    Expand,
    RecordVoiceOverOutlined,
    SupervisorAccountOutlined,
    WavingHandOutlined,
    WebOutlined,
    // BrokenImageOutlined,
} from '@mui/icons-material';
import { ProjectGrid } from '../ProjectGrid/ProjectGrid';
import { Grid, GridItem } from '../Grid/Grid';
import { Flex } from '../IFL/ifl';
import { ACTION_TYPE, SECTION, useAppDispatch, useAppState } from '../../context/AppContext/AppContext';
import { jonnybomb_js } from '../../data/jonnybomb_js';
import { jonnybomb_as } from '../../data/jonnybomb_as';
import { WorkInfo } from '../WorkInfo/WorkInfo';
import { feedback } from '../../data/feedback';
import { FilterBar } from '../FilterBar/FilterBar';
import { CuratedBanner } from '../CuratedBanner/CuratedBanner';

const applyFilter = (projects, activeFilters, curatedIds) => {
    let result = projects;
    if (curatedIds) result = result.filter((p) => curatedIds.includes(p.id));
    if (activeFilters.length > 0)
        result = result.filter((p) => p.tags && activeFilters.some((t) => p.tags.includes(t)));
    return result;
};

// eslint-disable-next-line no-unused-vars
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
            sx={{ marginInlineEnd: '0', position: 'sticky', top: 0, flexShrink: 0 }}
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
    const { condensed, activeFilters, curatedView } = useAppState();
    const dispatch = useAppDispatch();
    const showExpandContract = useMediaQuery(`(min-width: calc(${contentMaxWidth} + 32px))`);
    const ExpandIcon = condensed ? Expand : Compress;

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const viewKey = params.get('view');
        const rawIds = params.get('projects');

        if (viewKey && collections[viewKey]) {
            const col = collections[viewKey];
            dispatch({ type: ACTION_TYPE.SET_CURATED_VIEW, value: { blurb: col.blurb, ids: col.projects } });
        } else if (rawIds) {
            const ids = rawIds
                .split(',')
                .map((s) => s.trim())
                .filter(Boolean);
            dispatch({ type: ACTION_TYPE.SET_CURATED_VIEW, value: { blurb: null, ids } });
        }
    }, [dispatch]);

    const curatedIds = curatedView?.ids ?? null;

    const filteredFactsetProtos = applyFilter(factset_prototypes, activeFilters, curatedIds);
    const filteredFactsetRecipes = applyFilter(factset_recipes, activeFilters, curatedIds);
    const filteredFactsetAi = applyFilter(factset_ai, activeFilters, curatedIds);
    const filteredIndeed = applyFilter(indeed, activeFilters, curatedIds);
    const filteredVrboVideos = applyFilter(vrbo_videos, activeFilters, curatedIds);
    const filteredVrboProto = applyFilter(vrbo_proto, activeFilters, curatedIds);
    const filteredVrboProd = applyFilter(vrbo_prod, activeFilters, curatedIds);
    const filteredPearson = applyFilter(pearson, activeFilters, curatedIds);
    const filteredSpringbox = applyFilter(springbox, activeFilters, curatedIds);
    const filteredEnspire = applyFilter(enspire, activeFilters, curatedIds);
    const filteredMm = applyFilter(mm, activeFilters, curatedIds);
    const filteredDropparty = applyFilter(dropparty, activeFilters, curatedIds);
    const filteredJonnybombJs = applyFilter(jonnybomb_js, activeFilters, curatedIds);
    const filteredJonnybombAs = applyFilter(jonnybomb_as, activeFilters, curatedIds);

    const hasFactset =
        filteredFactsetProtos.length > 0 || filteredFactsetRecipes.length > 0 || filteredFactsetAi.length > 0;
    const hasVrbo = filteredVrboVideos.length > 0 || filteredVrboProto.length > 0 || filteredVrboProd.length > 0;
    const hasWork =
        hasFactset ||
        filteredIndeed.length > 0 ||
        hasVrbo ||
        filteredPearson.length > 0 ||
        filteredSpringbox.length > 0 ||
        filteredEnspire.length > 0;
    const hasConsulting = filteredMm.length > 0 || filteredDropparty.length > 0;
    const hasPersonal = filteredJonnybombJs.length > 0 || filteredJonnybombAs.length > 0;

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
                gap={6}
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
                            __html: "I've spent my career closing the gap between design intent and what actually ships. It started with a passion for HCI and interaction design, but when my designs weren't being implemented to the level of craft I cared about, I took that into my own hands. The result was deep taste across interaction design, motion, layout, and information architecture, and real craft in how to implement it. That gave me a clear picture of where the friction lives in design-to-engineering, and a genuine drive to remove it.<br/><br/>Now I'm going deep on how agentic AI workflows can be an exponential multiplier to close that gap. At FactSet, I built Fusion Foundry, a prototyping environment where UX designers can produce working, production-quality design system component compositions from natural language or a Figma selection, without my expertise in the loop. My approach: figure out the right way to do the work, prove it, then build the agent skills and infrastructure that enable the whole team to work the same way.<br/><br/>I care about the people I work with as much as the craft. Enabling others isn't a nice-to-have, it's half the job.",
                        }}
                    />
                </Section>
                {curatedView ? <CuratedBanner /> : <FilterBar />}
                {hasWork && (
                    <Section
                        title="Full Time Work"
                        Icon={WebOutlined}
                        altControl={<ToggleExpandedButton section={SECTION.WORK} />}
                    >
                        {hasFactset && (
                            <ProjectGrid
                                company="FactSet"
                                dates="Aug 2024 - Present"
                                role="Principal Design Technologist"
                                section={SECTION.WORK}
                            >
                                {filteredFactsetProtos.length > 0 && (
                                    <Box sx={{ paddingBlock: 3 }}>
                                        <WorkInfo
                                            title="From Prototypes to Production"
                                            content="High-fidelity prototypes built in FactSet's production Vue and Fusion stack — working experiments that stress-tested design intent against real constraints, not throwaway mockups. The best of this work found its way into production builds, design system releases, and shared component libraries. The FactSet Mobile App case study traces the full arc: nine months from first prototype to a shipped product, with the design system team building official releases on top of what started as demo code."
                                        />
                                        <Grid items={filteredFactsetProtos} topBorder />
                                    </Box>
                                )}
                                {filteredFactsetRecipes.length > 0 && (
                                    <Box sx={{ paddingBlock: 3 }}>
                                        <WorkInfo
                                            title="Recipe Repos"
                                            content="The shared layer between FactSet's Fusion design system and individual product apps - components too reusable for any one team but too specific for the core library. Both started as prototypes; teams adopted the demo code directly into production, which mandated the design system to officially support what had been proven out in the field."
                                        />
                                        <Grid items={filteredFactsetRecipes} topBorder />
                                    </Box>
                                )}
                                {filteredFactsetAi.length > 0 && (
                                    <Box sx={{ paddingBlock: 3, marginBlockEnd: 9 }}>
                                        <WorkInfo
                                            title="AI Enablement"
                                            content="Using AI as infrastructure that multiplies team capability, not just personal productivity. A semantic token taxonomy where designers run expert-level component audits through custom Claude Code skills — no terminal knowledge required. A prototype environment where any designer can build Fusion-accurate interactions starting from a Figma frame or a plain English description."
                                        />
                                        <Grid items={filteredFactsetAi} topBorder />
                                    </Box>
                                )}
                            </ProjectGrid>
                        )}
                        {filteredIndeed.length > 0 && (
                            <ProjectGrid
                                items={filteredIndeed}
                                company="Indeed"
                                dates="Sept 2022 - May 2024"
                                role="Lead UX Developer"
                                section={SECTION.WORK}
                                title="Polished Experiences: Prototypes to Production"
                                content="Much of this work demonstrates my collaborative process with designers and engineers as I iterated on experiences and took them from prototypes to production."
                            />
                        )}
                        {hasVrbo && (
                            <ProjectGrid
                                items={[...filteredVrboProto, ...filteredVrboProd]}
                                company="Vrbo/EG"
                                dates="July 2016 - Sept 2022"
                                role="Sr. Design Technologist | UX Engineer"
                                section={SECTION.WORK}
                            >
                                {filteredVrboVideos.length > 0 && (
                                    <Box sx={{ paddingBlock: 3 }}>
                                        <WorkInfo
                                            title="Case Studies and Demos: Videos, PDFs, and Interactive Experiences"
                                            content="Videos, presentations, and interactive experiences I created to walk through the work I did at Vrbo/Expedia Group"
                                        />
                                        <Grid items={filteredVrboVideos} topBorder />
                                    </Box>
                                )}
                                {filteredVrboProto.length > 0 && (
                                    <Box sx={{ paddingBlock: 3 }}>
                                        <WorkInfo
                                            title="Prototypes: The Lab and Beyond"
                                            content="At Vrbo, I started with high-fidelity prototypes for user labs but soon expanded
                                                    to impactful workflows like production prototypes and demos. These parallel
                                                    experiences allow collaboration with designers to create interaction-rich
                                                    features, providing blueprints and usable UI code for production engineering"
                                        />
                                        <Grid items={filteredVrboProto} topBorder />
                                    </Box>
                                )}
                                {filteredVrboProd.length > 0 && (
                                    <Box sx={{ paddingBlock: 3, marginBlockEnd: 9 }}>
                                        <WorkInfo
                                            title="Design System and Shared Components"
                                            content="These production components, which I initially prototyped with other designers,
                                                    are shared design system web components. Built in React,
                                                    often in collaboration with the UI-Toolkit team, these components are maintained
                                                    and improved for both desktop and mobile web. The demos are static builds of the
                                                    component dev harnesses.<br/><br/><BrokenImageOutlined/><i>The media URLs originally used for these have changed. I am in the process of updaing these demos, but until that is complete, many photos might not load.</i>"
                                        />
                                        <Grid items={filteredVrboProd} topBorder />
                                    </Box>
                                )}
                            </ProjectGrid>
                        )}
                        {filteredPearson.length > 0 && (
                            <ProjectGrid
                                items={filteredPearson}
                                company="Pearson"
                                dates="Nov 2010 - July 2016"
                                role="Sr. Frontend Developer | UX Lead"
                                section={SECTION.WORK}
                                title="Improving Educational Assessments from every angle"
                                content="Working on almost every aspect of educational assessments, I utilized my full gamet of skills - visual design, interaction design, ActionScript 3, Javascript, HTML, and CSS - to improve the flag-ship suite of testing products at Pearson, including assessment building, banking, and delivery"
                            />
                        )}
                        {filteredSpringbox.length > 0 && (
                            <ProjectGrid
                                items={filteredSpringbox}
                                company="Springbox"
                                dates="Oct 2007 - Nov 2010"
                                role="Sr. Rich Media Designer | Developer"
                                title="Digital Ad Agency Moments of Delight"
                                content="This collection of ActionScript 3 work showcases my interaction and motion design and implementation skills, as I colloborated with content, design, and technology to deliver delightful micro-sites, touch kiosks, and mini-games to big name clients."
                                section={SECTION.WORK}
                            />
                        )}
                        {filteredEnspire.length > 0 && (
                            <ProjectGrid
                                items={filteredEnspire}
                                company="Enspire Learning"
                                dates="Nov 2001 - Oct 2007"
                                role="Rich Media Designer | Developer"
                                section={SECTION.WORK}
                                title="E-Learning Experiences to Remember"
                                content="Enspire Learning is where I spent the formative years of my digital career, honing my visual design skills and beganing my foray into scripting and interactive development."
                            />
                        )}
                    </Section>
                )}
                {hasConsulting && (
                    <Section
                        title="Consulting Work"
                        Icon={SupervisorAccountOutlined}
                        altControl={<ToggleExpandedButton section={SECTION.CONSULTING} />}
                    >
                        {filteredMm.length > 0 && (
                            <ProjectGrid
                                items={filteredMm}
                                company="Mental Modeler"
                                dates="Jan 2011 -  Present"
                                role="Co-Creator | Designer | Developer"
                                section={SECTION.CONSULTING}
                                title="Fun Project to Mainstay in Academia"
                                content="What began as a fun challenge to create an intuitive node graphing application for my professor friend's Fuzzy Logic Cognitive mapping software has turned into a mainstay in the world of academia. This project has received over a million dollars in grant funding since 2012 and attracts 50,000 users annually. It has supported the publication of over 40 academic papers each year since 2018 and has attracted collaborators such as the Nation Science Foundation, Mitre, DARPA, and the World Wildlife Foundation"
                            />
                        )}
                        {filteredDropparty.length > 0 && (
                            <ProjectGrid
                                items={filteredDropparty}
                                company="Drop Party"
                                dates="July 2019 - Sept 2019"
                                role="Developer"
                                section={SECTION.CONSULTING}
                            />
                        )}
                    </Section>
                )}
                {hasPersonal && (
                    <Section
                        title="Personal Projects"
                        Icon={CelebrationOutlined}
                        altControl={<ToggleExpandedButton section={SECTION.PERSONAL} />}
                    >
                        {filteredJonnybombJs.length > 0 && (
                            <ProjectGrid
                                items={filteredJonnybombJs}
                                company="JavaScript / HTML / CSS"
                                dates="Jan 2011 - Present"
                                role="Designer | Developer"
                                section={SECTION.PERSONAL}
                            />
                        )}
                        {filteredJonnybombAs.length > 0 && (
                            <ProjectGrid
                                items={filteredJonnybombAs}
                                company="Flash / ActionScript / Flex"
                                dates="Nov 2001 - Dec 2010"
                                role="Designer | Developer"
                                section={SECTION.PERSONAL}
                            />
                        )}
                    </Section>
                )}
                <Section
                    title="What's That You Say"
                    Icon={RecordVoiceOverOutlined}
                    // altControl={<ToggleExpandedButton section={SECTION.FEEDBACK} />}
                >
                    <ProjectGrid
                        items={feedback}
                        company="Peer Feedback"
                        dates="Jan 2021 - Dec 2023"
                        role="Indeed | Expedia Group"
                        section={SECTION.FEEDBACK}
                        title=""
                        content=""
                    >
                        <Box sx={{ paddingBlock: 3 }}>
                            <WorkInfo
                                title="Let's Hear It From My Peers"
                                content="I've done enough talking. Here are some snippets that I received during peer feedback and evaluation cycles over the last few years."
                            />
                            <Grid topBorder sizing={condensed ? [1] : [1, 1, 2]}>
                                {feedback.map((item) => (
                                    <GridItem
                                        key={item.id}
                                        item={item}
                                        sx={{ alignItems: 'stretch', justifyContent: 'flex-start' }}
                                    />
                                ))}
                            </Grid>
                        </Box>
                    </ProjectGrid>
                </Section>
            </Flex>
        </>
    );
};
