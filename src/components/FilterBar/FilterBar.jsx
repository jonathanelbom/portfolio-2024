import { Box, Chip, Stack } from '@mui/material';
import { ACTION_TYPE, useAppDispatch, useAppState } from '../../context/AppContext/AppContext';
import { maxWidthContent } from '../../constants/styles';
import { useIntersctionSentinel } from '../../hooks/useIntersectionSentinel';

const TYPE_TAGS = ['prototype', 'production', 'case-study'];
const CRAFT_TAGS = ['design-system', 'motion', 'gesture', 'ai'];
const chipSize = 'medium';

export const FilterBar = () => {
    const { activeFilters } = useAppState();
    const dispatch = useAppDispatch();
    const { isIntersecting, hasScrolledPast, Sentinel } = useIntersctionSentinel({
        threshold: 1,
        rootMarginValues: '-3px 0px 0px 0px',
        topOffset: 3,
    });
    const toggleFilter = (tag) => dispatch({ type: ACTION_TYPE.SET_ACTIVE_FILTER, value: tag });
    const clearFilters = () => dispatch({ type: ACTION_TYPE.SET_ACTIVE_FILTER, value: null });
    const chipStyle = {
        textTransform: 'capitalize',
        fontWeight: 500,
    };
    return (
        <Box
            sx={{
                width: '100%',
                position: 'sticky',
                top: '0px',
                backgroundColor: 'white',
                zIndex: 3,
                borderBlock: '1px solid #d5d3d2',
            }}
        >
            <Sentinel sx={{ opacity: 0, height: '40px' }} />
            <Box
                sx={{
                    ...maxWidthContent,
                    width: '100%',
                    paddingInline: '0px',
                    paddingBlock: '8px 4px',
                    interpolateSize: 'allow-keywords',
                    // borderBlockEnd: '1px solid #d5d3d2',
                }}
            >
                <Box
                    sx={{
                        overflowX: 'auto',
                        paddingInline: '16px',
                        display: 'grid',
                        gridTemplateColumns: `${!hasScrolledPast ? 0 : 1}fr auto 1fr`,
                        transition: 'grid-template-columns 250ms ease',
                    }}
                >
                    <div />
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{
                            flexWrap: 'nowrap',
                            paddingBlock: 1,
                            width: 'max-content',
                            // transition: 'margin-left 350ms ease',
                            // marginRight: 'auto',
                            // marginLeft: isIntersecting ? '0' : 'auto',
                        }}
                    >
                        <Chip
                            label="All"
                            onClick={clearFilters}
                            color={activeFilters.length === 0 ? 'primary' : 'default'}
                            variant={activeFilters.length === 0 ? 'filled' : 'outlined'}
                            size={chipSize}
                            sx={chipStyle}
                        />
                        <Box
                            sx={{
                                borderLeft: '1px solid',
                                borderColor: 'divider',
                                height: 20,
                                flexShrink: 0,
                                mx: 0.5,
                            }}
                        />
                        {TYPE_TAGS.map((tag) => (
                            <Chip
                                key={tag}
                                label={tag}
                                onClick={() => toggleFilter(tag)}
                                color={activeFilters.includes(tag) ? 'primary' : 'default'}
                                variant={activeFilters.includes(tag) ? 'filled' : 'outlined'}
                                size={chipSize}
                                sx={chipStyle}
                            />
                        ))}
                        <Box
                            sx={{
                                borderLeft: '1px solid',
                                borderColor: 'divider',
                                height: 20,
                                flexShrink: 0,
                                mx: 0.5,
                            }}
                        />
                        {CRAFT_TAGS.map((tag) => (
                            <Chip
                                key={tag}
                                label={tag}
                                onClick={() => toggleFilter(tag)}
                                color={activeFilters.includes(tag) ? 'primary' : 'default'}
                                variant={activeFilters.includes(tag) ? 'filled' : 'outlined'}
                                size={chipSize}
                                sx={chipStyle}
                            />
                        ))}
                    </Stack>
                    <div />
                </Box>
            </Box>
        </Box>
    );
};
