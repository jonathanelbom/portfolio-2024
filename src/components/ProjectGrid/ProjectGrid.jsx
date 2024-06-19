import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { ExpandableTransition } from '../ExpandableTransition';
import { ProjecGridHeader } from '../ProjectGridHeader/ProjectGridHeader';
import { Grid } from '../Grid/Grid';
import { useAppState } from '../../context/AppContext/AppContext';
// import { useAccordian } from '../AccordianContext/AccordianContext';

export const ProjectGrid = ({
    items = [],
    company = 'Company',
    dates = 'From - To',
    role = 'Role',
    sx = {},
    children,
}) => {
    const ref = useRef(null);
    const rootRef = useRef(null);
    const { allExpanded } = useAppState();
    const [isExpanded, setIsExpanded] = useState(allExpanded);
    const toggleExpanded = () => {
        setIsExpanded((prev) => !prev);
        if (isExpanded && ref.current) {
            const { y } = rootRef.current.getBoundingClientRect();
            if (y <= 0) {
                rootRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    useEffect(() => setIsExpanded(allExpanded), [allExpanded]);

    return (
        <Box
            direction="column"
            gap="16px"
            ref={rootRef}
            sx={{
                position: 'relative',
                ...sx,
            }}
        >
            {/* sticky header */}
            <ProjecGridHeader
                company={company}
                dates={dates}
                role={role}
                expanded={isExpanded}
                toggleExpanded={toggleExpanded}
            />
            {/* <Box
                sx={{
                    ...(!expanded && { overflow: 'hidden', height: 0 }),
                }}
            > */}
            <ExpandableTransition
                isExpanded={isExpanded}
                duration={125 + items.length * 20}
                transitionProps={{ unmountOnExit: false }}
            >
                <Box ref={ref}>
                    {/* childern */}
                    {!!children && children}

                    {/* grid  */}
                    {!children && (
                        <Box sx={{ ...(items.length > 0 && { paddingBlockEnd: 12 }) }}>
                            <Grid items={items} expanded={isExpanded} />
                        </Box>
                    )}
                </Box>
            </ExpandableTransition>
            {/* </Box> */}
        </Box>
    );
};
