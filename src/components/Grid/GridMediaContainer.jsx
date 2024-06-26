import { Box } from '@mui/material';
import { aspectRatio_4_3, aspectRatio_16_9, gridItemHoverTransDur } from '../../constants/styles';

export const GridMediaContainer = ({ item, children, inDialog }) => {
    const { link, video, imageBgColor } = item || {};
    const aspectRatio = video && inDialog ? aspectRatio_16_9 : aspectRatio_4_3;
    return (
        <Box
            className="image-container"
            sx={{
                display: 'flex',
                position: 'relative',
                flexGrow: 0,
                flexShrink: 0,
                backgroundColor: imageBgColor || '#f5f3f2',
                width: 'calc(100% - 2px)', // for border
                ...((link || video) && {
                    ...(!inDialog && { boxShadow: '0 5px 20px rgba(0 ,0 , 0, .05), 0 2px 6px rgba(0 ,0 , 0, .05)' }),
                    border: '1px solid #e5e3e2',
                }),
                ...(!inDialog && {
                    overflow: 'hidden',
                    ...aspectRatio,
                }),
                ...(video && inDialog && aspectRatio),
                transition: `transform ${gridItemHoverTransDur} ease`,
            }}
        >
            {children}
        </Box>
    );
};
