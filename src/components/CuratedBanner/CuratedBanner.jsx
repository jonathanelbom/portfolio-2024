import { Box, Button, Typography } from '@mui/material';
import { ACTION_TYPE, useAppDispatch, useAppState } from '../../context/AppContext/AppContext';
import { maxWidthContent } from '../../constants/styles';

export const CuratedBanner = () => {
    const { curatedView } = useAppState();
    const dispatch = useAppDispatch();

    const handleReset = () => {
        dispatch({ type: ACTION_TYPE.SET_CURATED_VIEW, value: null });
        dispatch({ type: ACTION_TYPE.SET_ACTIVE_FILTER, value: null });
    };

    return (
        <Box sx={{ ...maxWidthContent }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                    paddingBlock: 1.5,
                    paddingInline: 2,
                    backgroundColor: 'grey.50',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 1,
                }}
            >
                {curatedView?.blurb ? (
                    <Typography variant="body2" sx={{ flex: 1 }}>
                        {curatedView.blurb}
                    </Typography>
                ) : (
                    <Typography variant="body2" sx={{ flex: 1, color: 'text.secondary' }}>
                        Showing a curated selection of projects.
                    </Typography>
                )}
                <Button variant="outlined" size="small" onClick={handleReset} sx={{ flexShrink: 0 }}>
                    View Full Portfolio
                </Button>
            </Box>
        </Box>
    );
};
