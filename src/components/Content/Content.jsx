import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useIntersctionSentinel } from '../../hooks/useIntersectionSentinel';
import { enspire, jonnybomb, springbox } from '../../data/prev';
import { vrbo_all, vrbo_prod, vrbo_proto, vrbo_videos } from '../../data/vrbo';
import { mm } from '../../data/mentalmodeler';
import { pearson } from '../../data/pearson';
import { indeed } from '../../data/indeed';
import { contentMaxWidth, maxWidthContent, subwork_decoration } from '../../constants/styles';
import { Compress, Expand, WavingHandOutlined, WebOutlined } from '@mui/icons-material';
import { ProjectGrid } from '../ProjectGrid/ProjectGrid';
import { Grid } from '../Grid/Grid';
import { Flex } from '../IFL/ifl';
import { ACTION_TYPE, useAppDispatch, useAppState } from '../../context/AppContext/AppContext';

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

const WorkInfo = ({ title, content }) => {
    return (
        <Box sx={{ ...maxWidthContent, marginBlockStart: 3, marginBlockEnd: 3 }}>
            <Flex direction="column" gap={1}>
                {title && (
                    <Typography
                        variant="subWorkTitle"
                        sx={{ position: 'relative', paddingInline: 2, ...subwork_decoration }}
                    >
                        {title}
                    </Typography>
                )}
                {content && <Typography variant="body1">{content}</Typography>}
            </Flex>
        </Box>
    );
};

export const Section = ({ children, sx, title, Icon, padding = 'header', altControl }) => {
    return (
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
    );
};

export const Content = ({ children }) => {
    const { isIntersecting, Sentinel } = useIntersctionSentinel({ threshold: 1 });
    const { condensed } = useAppState();
    const dispatch = useAppDispatch();
    const { allExpanded } = useAppState();
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
                    <Typography as="p">
                        {'My name is Jonathan and my passion is to bring extraordinary user experiences to life.'}
                        <br />
                        <br />
                    </Typography>
                    <Typography as="p">
                        {
                            'I live at the intersection of technology and design, blending frontend web engineering and UX design and into a single progressive discipline. I utilize my understanding of technical capabilities and design intent to transform concepts and mockups into delightful, accessible, and performant experiences.'
                        }
                        <br />
                        <br />
                    </Typography>
                    <Typography>
                        {
                            'I approach my work with empathy and compassion, championing cross-functional collaboration to deliver crafted solutions.'
                        }
                    </Typography>
                </Section>
                <Section
                    title="Work"
                    Icon={WebOutlined}
                    altControl={
                        <Button
                            variant="text"
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch({
                                    type: ACTION_TYPE.TOGGLE_ALL_EXPANDED,
                                    value: !allExpanded,
                                });
                            }}
                            sx={{ marginInlineEnd: '0' }}
                        >
                            {allExpanded ? 'HIDE ALL' : 'SHOW ALL'}
                        </Button>
                    }
                >
                    <MinWidthSection>
                        <Typography>
                            {
                                'Welcome to my work. This section is in-progress and I am continually improving it, adding more descriptions, videos, and links to prototypes and demos.'
                            }
                            <br />
                            <br />
                            <i>
                                Click each row to expand or collapse it or use the show/hide all to toggle all rows at
                                once.
                            </i>
                        </Typography>
                    </MinWidthSection>
                    <ProjectGrid
                        items={indeed}
                        company="Indeed"
                        dates="Sept 2022 - May 2024"
                        role="Lead UX Developer"
                    ></ProjectGrid>
                    <ProjectGrid
                        items={vrbo_all}
                        company="Vrbo/EG"
                        dates="July 2016 - Sept 2022"
                        role="Sr. Design Technologist | UX Engineer"
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
                                content="The production components, which I initially prototyped with other designers,
                                        are shared design system web components on Vrbo (www.vrbo.com). Built in React,
                                        often in collaboration with the UI-Toolkit team, these components are maintained
                                        and improved for both desktop and mobile web. The demos are static builds of the
                                        component dev harnesses."
                            />
                            <Grid items={vrbo_prod} topBorder />
                        </Box>
                    </ProjectGrid>
                    <ProjectGrid
                        items={mm}
                        company="Mental Modeler"
                        dates="Jan 2011 -  Present"
                        role="Co-Creator | Designer | Developer"
                    ></ProjectGrid>
                    <ProjectGrid
                        items={pearson}
                        company="Pearson"
                        dates="Nov 2010 - July 2016"
                        role="Sr. Frontend Developer | UX Lead"
                    ></ProjectGrid>
                    <ProjectGrid
                        items={springbox}
                        company="Springbox"
                        dates="Oct 2007 - Nov 2010"
                        role="Sr. Rich Media Designer|Developer"
                    ></ProjectGrid>
                    <ProjectGrid
                        items={enspire}
                        company="Enspire Learning"
                        dates="Nov 2001 - Oct 2007"
                        role="Rich Media Designer|Developer"
                    ></ProjectGrid>
                    <ProjectGrid
                        items={jonnybomb}
                        company="Jonnybomb"
                        dates="Nov 2001 - Nov 2010"
                        role="Designer | Developer"
                    ></ProjectGrid>
                </Section>
            </Flex>
        </>
    );
};
