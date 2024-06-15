import { Box, Button, Typography } from '@mui/material';
import { useIntersctionSentinel } from '../../hooks/useIntersectionSentinel';
import { prev_projects } from '../../data/prev';
import { vrbo_prod, vrbo_proto } from '../../data/vrbo';
import { mm } from '../../data/mentalmodeler';
import { pearson } from '../../data/pearson';
import { indeed } from '../../data/indeed';
import { maxWidthContent, subwork_decoration } from '../../constants/styles';
import { Compress, Expand, WavingHandOutlined, WebOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { ProjectGrid } from '../ProjectGrid/ProjectGrid';
import { Grid } from '../Grid/Grid';
import { AccordianProvider } from '../AccordianContext/AccordianContext';
import { Flex } from '../IFL/ifl';

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
                            <Flex gap={1} align="center">
                                {Icon && <Icon />}
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
    const springbox = prev_projects.filter((project) => project.tags.includes('springbox'));
    const enspire = prev_projects.filter((project) => project.tags.includes('enspire'));
    const jonnybomb = prev_projects.filter((project) => project.tags.includes('freelance'));
    const [allExpanded, setAllExpanded] = useState(false);
    const [compressed, setCompressed] = useState(false);
    const iconStyle = { transform: 'rotate(90deg)' };
    return (
        <>
            <Button
                onClick={() => setCompressed((prev) => !prev)}
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
                {compressed ? <Expand sx={{ ...iconStyle }} /> : <Compress sx={{ ...iconStyle }} />}
            </Button>
            <Sentinel sx={{ opacity: 0, height: '10px' }} />
            <Flex
                as="main"
                className="main-content"
                direction="column"
                gap={8}
                sx={{
                    // maxWidth: '50rem',
                    ...(compressed && { maxWidth: 'var(--max-content-width)' }),
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
                <AccordianProvider>
                    <Section
                        title="Work"
                        Icon={WebOutlined}
                        altControl={
                            // <Box as="label" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'pointer' }}>
                            <Button
                                variant="text"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setAllExpanded((prev) => !prev);
                                }}
                                // id={`toggle-expand-${company}`}
                                sx={{
                                    marginInlineEnd: '0',
                                    // padding: '4px',
                                    // minWidth: 'unset',
                                    //  borderRadius: '24px',
                                }}
                            >
                                {allExpanded ? 'HIDE ALL' : 'SHOW ALL'}
                            </Button>
                            // </Box>
                        }
                    >
                        <MinWidthSection>
                            <Typography>
                                {
                                    'Welcome to my work. I have recently updated this section and will be continually improving it, adding more descriptions, videos, and links to prototypes and demos. Click each row to expand or collapse it or use the show/hide all to toggle all rows at once.'
                                }
                            </Typography>
                        </MinWidthSection>
                        <ProjectGrid
                            items={indeed}
                            company="Indeed"
                            dates="Sept 2022 - May 2024"
                            role="Lead UX Developer"
                            allExpanded={allExpanded}
                        ></ProjectGrid>
                        <ProjectGrid
                            items={vrbo_proto.concat(vrbo_prod)}
                            company="Vrbo/EG"
                            dates="July 2016 - Sept 2022"
                            role="Sr. Design Technologist | UX Engineer"
                            allExpanded={allExpanded}
                            // sx={{ paddingBlockEnd: 12 }}
                        >
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
                            allExpanded={allExpanded}
                        ></ProjectGrid>
                        <ProjectGrid
                            items={pearson}
                            company="Pearson"
                            dates="Nov 2010 - July 2016"
                            role="Sr. Frontend Developer | UX Lead"
                            allExpanded={allExpanded}
                        ></ProjectGrid>
                        <ProjectGrid
                            items={springbox}
                            company="Springbox"
                            dates="Oct 2007 - Nov 2010"
                            role="Sr. Rich Media Designer|Developer"
                            allExpanded={allExpanded}
                        ></ProjectGrid>
                        <ProjectGrid
                            items={enspire}
                            company="Enspire Learning"
                            dates="Nov 2001 - Oct 2007"
                            role="Rich Media Designer|Developer"
                            allExpanded={allExpanded}
                        ></ProjectGrid>
                        <ProjectGrid
                            items={jonnybomb}
                            company="Jonnybomb"
                            dates="Nov 2001 - Nov 2010"
                            role="Designer | Developer"
                            allExpanded={allExpanded}
                        ></ProjectGrid>
                    </Section>
                </AccordianProvider>
            </Flex>
        </>
    );
};
