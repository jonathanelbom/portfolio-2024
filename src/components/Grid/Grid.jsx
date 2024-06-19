import { Box, Button, Typography } from '@mui/material';
import { gridItemHoverTransDur, hit_area } from '../../constants/styles';
import { useMemo } from 'react';
import { Flex } from '../IFL/ifl';
import { Launch /* ReadMoreOutlined, Slideshow */, ReadMoreOutlined, Slideshow } from '@mui/icons-material';
import { ACTION_TYPE, useAppDispatch, useAppState } from '../../context/AppContext/AppContext';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import { GridMediaContainer } from './GridMediaContainer';

const iconProps = {
    fontSize: 'small',
};

const Details = ({ Icon }) => {
    return (
        <Flex
            justify="center"
            aling="center"
            sx={{
                backgroundColor: 'grey.300',
                borderRadius: '100%',
                padding: 0.5,
            }}
        >
            <Icon {...iconProps} sx={{ transform: 'scale(.8)' }} />
        </Flex>
    );
};

const LinkActionOverlay = ({ item }) => {
    const { link } = item;

    return (
        <>
            <Box as="a" href={link.uri || link.url} target="_blank" sx={{ ...hit_area, zIndex: 1 }} />
            <Button
                role="presentation"
                id={item.title}
                variant="contained"
                sx={{
                    transition: `transform ${gridItemHoverTransDur} ease`,
                    transform: 'scale(.5)',
                }}
            >
                Launch
            </Button>
        </>
    );
};

const DetailsModalActionOverlay = ({ item }) => {
    const dispatch = useAppDispatch();
    return (
        <>
            <Box as="label" htmlFor={item.title} sx={{ ...hit_area }} />
            <Button
                id={item.title}
                onClick={() =>
                    dispatch({
                        type: ACTION_TYPE.SELECT_PROJECT,
                        value: { ...item },
                    })
                }
                variant="contained"
                sx={{
                    transition: `transform ${gridItemHoverTransDur} ease`,
                    transform: 'scale(.75)',
                    boxShadow: 'none',
                }}
            >
                View Details
            </Button>
        </>
    );
};

const GridItem = ({ item }) => {
    const { link, title, description, image, sizes, video } = item;
    const hasAction = link || video || description;
    const ActionOverlayComponent = video || description ? DetailsModalActionOverlay : LinkActionOverlay;
    return (
        <Box
            as="li"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                // justifyContent: 'space-between',
                gap: 3,
                padding: 4,
                position: 'relative',
                backgroundColor: 'grey.50',
                boxShadow: '0 0 0 1px #d5d3d2',
                ...(hasAction && {
                    '@media (hover:hover)': {
                        '&:hover': {
                            '.project-link': {
                                opacity: 1,
                            },
                            '.image-container': {
                                transform: 'scale(.925)',
                            },
                            button: {
                                transform: 'scale(1)',
                            },
                        },
                    },
                }),
            }}
        >
            <Flex
                justify="flex-end"
                sx={{ padding: 1, gap: 1, position: 'absolute', top: 0, left: 0, right: 0, pointerEvents: 'none' }}
            >
                {description && <Details Icon={ReadMoreOutlined} />}
                {video && <Details Icon={Slideshow} />}
                {link && <Details Icon={Launch} />}
            </Flex>

            <Flex direction="column" gap={0.5}>
                <Typography variant="projectTitle">{title}</Typography>
                {sizes && <Typography variant="projectSizes">{sizes.join('/')}</Typography>}
            </Flex>

            <GridMediaContainer item={item}>
                {video && <VideoPlayer url={video.url} />}
                {!video && image && (
                    <Box
                        as="img"
                        sx={{
                            width: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center left',
                            display: 'block',
                        }}
                        src={`../images/${image?.uri}`}
                    />
                )}
            </GridMediaContainer>
            {false && (
                <Typography
                    sx={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            )}

            {/* action overlay and action */}
            {hasAction && (
                <Flex
                    className="project-link"
                    justify="center"
                    align="center"
                    sx={{
                        cursor: 'pointer',
                        position: 'absolute',
                        inset: 0,
                        opacity: 0,
                        transition: `opacity ${gridItemHoverTransDur} ease`,
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'primary.main',
                            opacity: 0.125,
                            pointerEvents: 'none',
                        },
                    }}
                >
                    <ActionOverlayComponent item={item} />
                </Flex>
            )}
        </Box>
    );
};

export const Grid = ({ items = [], topBorder, sx = {}, sizing = [1, 2, 3, 3, 4] }) => {
    const { condensed } = useAppState();
    const hasVideos = useMemo(() => items.some(({ tags }) => tags.includes('video')), [items.length]);
    if (hasVideos) {
        sizing = [1, 2, 2, 3];
    }
    if (condensed) {
        sizing = [1, 2];
    }
    const gridTemplateColumns = useMemo(() => sizing.map((size) => `repeat(${size}, 1fr)`), [sizing]);
    return (
        <Box
            as="ul"
            sx={{
                display: 'grid',
                listStyle: ' none',
                padding: 0,
                margin: 0,
                backgroundColor: '#fff',
                ...(items.length > 0 && { borderBlockEnd: '1px solid #d5d3d2' }),
                ...(topBorder && { borderBlockStart: '1px solid #d5d3d2' }),
                gridTemplateColumns,
                ...sx,
            }}
        >
            {items.map((item, i) => (
                <GridItem key={`${item.id || ''}-${i}`} item={item} i={i} />
            ))}
        </Box>
    );
};
