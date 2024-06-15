import { Box, Button, Typography } from '@mui/material';
import { aspectRatio_4_3, hit_area } from '../../constants/styles';
import { useMemo } from 'react';
import { Flex } from '../IFL/ifl';
import { Launch, ReadMoreOutlined, Slideshow } from '@mui/icons-material';

const GridItem = ({ item }) => {
    const { links, title, description, image } = item;
    const link = links?.[0];
    const iconProps = {
        color: 'primary',
        // fontSize: 'small',
    };
    return (
        <Box
            as="li"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 3,
                padding: 4,
                position: 'relative',
                backgroundColor: 'grey.50', //  '#f9f7f6',
                boxShadow: '0 0 0 1px #d5d3d2',
                // '&:nth-child(odd)': {
                //     background: '#f5f3f2',
                // },
                ...(link && {
                    '&:hover': {
                        '.project-link': {
                            opacity: 1,
                        },
                        '.image-container': {
                            transform: 'scale(.9)',
                        },
                        button: {
                            transform: 'scale(1)',
                        },
                    },
                }),
            }}
        >
            <Flex
                justify="flex-end"
                sx={{ padding: 1, gap: 1, position: 'absolute', top: 0, left: 0, right: 0, pointerEvents: 'none' }}
            >
                {link && <Launch {...iconProps} />}
                {/* <ReadMoreOutlined {...iconProps} />
                <Slideshow {...iconProps} /> */}
            </Flex>

            <Typography variant="projectTitle">{title}</Typography>

            <Box
                className="image-container"
                sx={{
                    display: 'flex',
                    flexGrow: 0,
                    backgroundColor: '#f5f3f2',
                    ...aspectRatio_4_3,
                    width: '100%',
                    overflow: 'hidden',
                    ...(link && { boxShadow: '0 5px 20px rgba(0 ,0 , 0, .05), 0 2px 6px rgba(0 ,0 , 0, .05)' }),
                    border: '1px solid #e5e3e2',
                    transition: 'transform 300ms ease',
                }}
            >
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
            </Box>
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
            {link && (
                <Flex
                    className="project-link"
                    justify="center"
                    align="center"
                    sx={{
                        cursor: 'pointer',
                        position: 'absolute',
                        inset: 0,
                        opacity: 0,
                        transition: 'opacity 300ms ease',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: '#8a1b121a',
                            pointerEvents: 'none',
                        },
                    }}
                >
                    <Box as="a" href={link.uri} target="_blank" sx={{ ...hit_area, zIndex: 10 }} />
                    <Button variant="contained" sx={{ transition: 'transform 300ms ease', transform: 'scale(.5)' }}>
                        View
                    </Button>
                </Flex>
            )}
        </Box>
    );
};

export const Grid = ({ items = [], topBorder, sx = {}, sizing = [1, 2, 3, 3, 4] }) => {
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
