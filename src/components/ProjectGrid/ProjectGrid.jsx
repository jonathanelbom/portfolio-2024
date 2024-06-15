import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { ExpandableTransition } from '../ExpandableTransition';
import { ProjecGridHeader } from '../ProjectGridHeader/ProjectGridHeader';
import { Grid } from '../Grid/Grid';
// import { useAccordian } from '../AccordianContext/AccordianContext';

export const ProjectGrid = ({
    items = [],
    company = 'Company',
    dates = 'From - To',
    role = 'Role',
    sx = {},
    children,
    allExpanded,
}) => {
    const ref = useRef(null);
    const rootRef = useRef(null);
    // const { state, dispatch } = useAccordian();
    const [isExpanded, setIsExpanded] = useState(allExpanded);
    // const isExpanded = company === state.open;
    const toggleExpanded = () => {
        // dispatch({
        //     type: isExpanded ? 'close' : 'open',
        //     value: company,
        // });
        setIsExpanded((prev) => !prev);
        if (isExpanded && ref.current) {
            const { y } = rootRef.current.getBoundingClientRect();
            if (y <= 0) {
                rootRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    // useEffect(() => {
    //     if (isExpanded && ref.current) {
    //         console.log('rootRef.current:', rootRef?.current?.offsetTop);
    //         const { y } = ref.current.getBoundingClientRect();
    //         if (y <= 0) {
    //             ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //         }
    //     }
    // }, [isExpanded]);

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
