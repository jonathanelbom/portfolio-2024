import { Box, useMediaQuery } from '@mui/material';
import { aspectRatio_4_3, aspectRatio_16_9, gridItemHoverTransDur } from '../../constants/styles';
import ScrollCarousel from '../ScrollCarousel/ScrollCarousel';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import { useMemo } from 'react';
// import { SwipeableCarouselStateful } from '../SwipeableCarousel';

export const GridMediaContainer = ({ item, children, inDialog }) => {
    const { link, video, image, imageBgColor } = item || {};
    // const isFeedback = tags?.includes('feedback');
    const aspectRatio = video && inDialog ? aspectRatio_16_9 : aspectRatio_4_3;
    return (
        <Box
            className="image-container"
            sx={{
                display: 'flex',
                position: 'relative',
                flexGrow: 0,
                flexShrink: 0,
                // paddingInline: 2,
                backgroundColor: imageBgColor || '#f5f3f2',
                width: 'calc(100% - 2px)', // for border
                ...((link || video || image) && {
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

export const ScrollGridMediaContainer = ({ item /*, inDialog*/ }) => {
    const { images, videos = [], imageBgColor } = item || {};
    // const aspectRatio = video && inDialog ? aspectRatio_16_9 : aspectRatio_4_3;
    const length = (images?.length || 0) + (videos?.length || 0);
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const scrollCarouselProps = isSmall ? { paddingInline: 24, itemPeak: 24 } : { paddingInline: 80, itemPeak: 80 };
    const content = useMemo(
        () => [
            ...videos.map((_video) => {
                return <VideoPlayer url={_video.url} key={_video.url} />;
            }),
            ...images.map((_image) => (
                <Box
                    key={_image.uri}
                    as="img"
                    sx={{
                        pointerEvents: 'none',
                        width: '100%',
                        // height: '400px',
                        maxHeight: '400px',
                        objectFit: 'contain',
                        objectPosition: 'center',
                        display: 'block',
                        backgroundColor: imageBgColor || '#f5f3f2',
                        border: '1px solid #e5e3e2',
                    }}
                    src={`../images/${_image?.uri}`}
                />
            )),
        ],
        [length],
    );
    return (
        <>
            {/* <SwipeableCarouselStateful cardCount={1} gutters={[36, 36]} guttersEdge={[36, 36]} cardMargin={12}>
                {content}
            </SwipeableCarouselStateful> */}
            <ScrollCarousel numCardsShown={1} itemGap={24} showNavArrows {...scrollCarouselProps}>
                {content}
            </ScrollCarousel>
        </>
    );
};
