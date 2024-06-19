import { Box, Button, Typography } from '@mui/material';
import { useIntersctionSentinel } from '../../hooks/useIntersectionSentinel';
import { maxWidthContent, sticky_header, sticky_header_before, work_decoration } from '../../constants/styles';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Flex } from '../IFL/ifl';

export const ProjecGridHeader = ({ company, dates, role, expanded, toggleExpanded }) => {
    const { isIntersecting, Sentinel, elementRef } = useIntersctionSentinel({ threshold: 1 });
    const [showScrollShadow, setShowScrollShadow] = useState(false);
    useEffect(() => {
        if (!isIntersecting && elementRef.current) {
            const { y } = elementRef.current.getBoundingClientRect();
            if (y <= 0) {
                setShowScrollShadow(true);
            }
        } else {
            setShowScrollShadow(false);
        }
    }, [isIntersecting, elementRef]);

    return (
        <>
            <Sentinel />
            <Box
                sx={{
                    ...sticky_header,
                    paddingBlock: 0,
                    borderBlockEnd: '1px solid #d5d3d2',
                    '&::before': {
                        ...sticky_header_before,
                        opacity: showScrollShadow ? 1 : 0,
                    },
                }}
            >
                {/* <Box
                    as="label"
                    sx={{
                        cursor: 'pointer',
                        paddingBlock: 4,
                        background: '#fff',
                        display: 'block',
                        '@media (hover:hover)': {
                            '&:hover .work-title': {
                                transform: 'translateX(8px)',
                            },
                        },
                    }}
                    htmlFor={`toggle-expand-${company}`}
                > */}
                <Box sx={{ ...maxWidthContent }}>
                    <Flex
                        justify="space-between"
                        align="center"
                        gap={2}
                        as="label"
                        sx={{
                            cursor: 'pointer',
                            paddingBlock: 4,
                            background: '#fff',
                            '@media (hover:hover)': {
                                '&:hover .work-title': {
                                    transform: 'translateX(8px)',
                                },
                            },
                        }}
                        htmlFor={`toggle-expand-${company}`}
                    >
                        <Flex
                            className="work-title"
                            direction="column"
                            gap={0.5}
                            sx={{
                                paddingInlineStart: 2,
                                position: 'relative',
                                ...work_decoration,
                                transition: 'transform 250ms ease',
                            }}
                        >
                            <Flex columnGap={1} align="baseline" wrap="wrap">
                                <Typography variant="workTitle">{company}</Typography>
                                <Typography variant="workDate">{dates}</Typography>
                            </Flex>
                            <Typography variant="workRole">{role}</Typography>
                        </Flex>
                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                                toggleExpanded();
                            }}
                            id={`toggle-expand-${company}`}
                            variant="text" // "outlined"
                            sx={{
                                marginInlineEnd: '0',
                                padding: '8px',
                                minWidth: 'unset',
                                borderRadius: '24px',
                            }}
                        >
                            {expanded ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
                        </Button>
                    </Flex>
                </Box>
            </Box>
            {/* </Box> */}
        </>
    );
};
