import { Box, Button, Typography } from '@mui/material';
import { ACTION_TYPE, useAppDispatch, useAppState } from '../../context/AppContext/AppContext';
import { maxWidthContent } from '../../constants/styles';
import { Flex } from '../IFL/ifl';

export const CuratedBanner = () => {
    const { curatedView } = useAppState();
    const dispatch = useAppDispatch();

    const handleReset = () => {
        dispatch({ type: ACTION_TYPE.SET_CURATED_VIEW, value: null });
        dispatch({ type: ACTION_TYPE.SET_ACTIVE_FILTER, value: null });
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
            <Box
                sx={{
                    ...maxWidthContent,
                    width: '100%',
                    height: '53px',
                }}
            >
                <Flex justify="center" align="center" sx={{ height: '100%', paddingInline: '16px' }}>
                    <Flex align="center" gap={2}>
                        {curatedView?.blurb ? (
                            <Typography variant="body2">{curatedView.blurb}</Typography>
                        ) : (
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Showing a curated selection of projects.
                            </Typography>
                        )}
                        <Button variant="outlined" size="small" onClick={handleReset} sx={{ flexShrink: 0 }}>
                            View Full Portfolio
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};
