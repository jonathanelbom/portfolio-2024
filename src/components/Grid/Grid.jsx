import { Box, Button, Typography } from '@mui/material';
import { gridItemHoverTransDur, hit_area } from '../../constants/styles';
import { useMemo } from 'react';
import { Flex } from '../IFL/ifl';
import { Launch /* ReadMoreOutlined, Slideshow */, PictureAsPdf, YouTube } from '@mui/icons-material';
import { ACTION_TYPE, useAppDispatch, useAppState } from '../../context/AppContext/AppContext';
// import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import { GridMediaContainer } from './GridMediaContainer';

const iconProps = {
    fontSize: 'small',
    color: '#fff',
};

const Details = ({ Icon }) => {
    return (
        <Flex
            justify="center"
            aling="center"
            sx={{
                backgroundColor: '#fff',
                borderRadius: '100%',
                padding: 0.5,
                // transform: 'scale(.8)',
            }}
        >
            <Icon {...iconProps} />
        </Flex>
    );
};

const LinkActionOverlay = ({ item }) => {
    const { link, pdf } = item;
    const url = link ? link.uri || link.url : pdf.url;
    return (
        <>
            <Box
                // as="a"
                // href={url}
                // target="_blank"
                sx={{ ...hit_area, zIndex: 1 }}
            />
            <Button
                href={url}
                target="_blank"
                role="presentation"
                id={item.title}
                variant="contained"
                sx={{
                    transition: `transform ${gridItemHoverTransDur} ease`,
                    transform: 'scale(.75)',
                    border: '1px solid #fff',
                }}
            >
                {pdf?.url ? 'View PDF' : 'Launch demo'}
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
                    border: '1px solid #fff',
                }}
            >
                {'View Details'}
            </Button>
        </>
    );
};

export const GridItem = ({ item, sx = {} }) => {
    const { link, title, description, image, images, sizes, video, pdf, tags } = item;
    const isFeedback = tags.includes('feedback');
    const hasAction = (pdf || link || video || description || images?.length > 1) && !isFeedback;
    const ActionOverlayComponent =
        video || (description && images?.length > 0) || images?.length > 1
            ? DetailsModalActionOverlay
            : LinkActionOverlay;
    return (
        <Box
            as="li"
            // tabIndex={0}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: 3,
                padding: 4,
                position: 'relative',
                backgroundColor: 'grey.50',
                boxShadow: '0 0 0 1px #d5d3d2',
                ...(hasAction && {
                    '@media (hover:hover)': {
                        '&:hover, &:focus-within': {
                            '.project-link': {
                                opacity: 1,
                            },
                            '.image-container': {
                                transform: 'scale(.925)',
                            },
                            'button, a': {
                                transform: 'scale(1)',
                            },
                        },
                    },
                }),
                ...sx,
            }}
        >
            <Flex
                justify="flex-end"
                sx={{ padding: 1, gap: 1, position: 'absolute', top: 0, left: 0, right: 0, pointerEvents: 'none' }}
            >
                {pdf && <Details Icon={PictureAsPdf} />}
                {video && <Details Icon={YouTube} />}
                {link && <Details Icon={Launch} />}
            </Flex>

            <Flex direction="column" gap={0.5}>
                <Typography variant="projectTitle">{title}</Typography>
                {sizes && <Typography variant="projectSizes">{sizes.join('/')}</Typography>}
            </Flex>

            {!isFeedback && (
                <GridMediaContainer item={item}>
                    {image && (
                        <>
                            <Box
                                as="img"
                                sx={{
                                    width: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'top left',
                                    display: 'block',
                                }}
                                src={`../images/${image?.uri}`}
                            />
                            {video && (
                                <Flex
                                    justify="center"
                                    align="center"
                                    sx={{
                                        position: 'absolute',
                                        inset: 0,
                                        '&::before': {
                                            content: "''",
                                            position: 'absolute',
                                            inset: '45%',
                                            backgroundColor: '#fff',
                                        },
                                    }}
                                >
                                    {/* <PlayCircleFilled */}
                                    <YouTube
                                        sx={{
                                            zIndex: 1,
                                            color: '#ea3323',
                                            display: 'block',
                                            position: 'relative',
                                            transform: 'scale(2.5)',
                                        }}
                                    />
                                </Flex>
                            )}
                        </>
                    )}
                </GridMediaContainer>
            )}
            {isFeedback && (
                <Typography
                    sx={
                        {
                            // display: '-webkit-box',
                            // WebkitBoxOrient: 'vertical',
                            // WebkitLineClamp: 3,
                            // overflow: 'hidden',
                            // textOverflow: 'ellipsis',
                        }
                    }
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

export const Grid = ({ items = [], topBorder, sx = {}, sizing, children }) => {
    const { condensed } = useAppState();
    // const hasVideos = useMemo(() => items.some(({ tags }) => tags.includes('video')), [items.length]);
    // if (hasVideos) {
    //     sizing = [1, 2, 2, 3];
    // }
    if (!sizing) {
        sizing = condensed ? [1, 2] : [1, 2, 3, 4, 5];
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
                ...((!!children || items.length > 0) && { borderBlockEnd: '1px solid #d5d3d2' }),
                ...((true || topBorder) && { borderBlockStart: '1px solid #d5d3d2' }),
                gridTemplateColumns,
                ...sx,
            }}
        >
            {!!children && children}
            {!children && items.map((item, i) => <GridItem key={`${item.id || ''}-${i}`} item={item} i={i} />)}
        </Box>
    );
};
