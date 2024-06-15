import { Box, Button, Typography } from '@mui/material';
import { contentMaxWidth, header_bg, max_width } from '../../constants/styles';
import { Flex } from '../Flex/Flex';
import avatar from '../../assets/images/jonathan-avatar.png';
import { useIntersctionSentinel } from '../../hooks/useIntersectionSentinel';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useResize } from '../../hooks/useResize';
import { DescriptionOutlined } from '@mui/icons-material';

export const PageHeader = () => {
    const headerRef = useRef(null);
    const [scrollTop, setScrollTop] = useState(0);
    const { isIntersecting, scrollPct, Sentinel } = useIntersctionSentinel();
    const { height } = useResize(headerRef, 100);

    const onScroll = useCallback(() => {
        setScrollTop(document.scrollingElement.scrollTop);
    }, [setScrollTop]);

    useEffect(() => {
        if (isIntersecting) {
            window.addEventListener('scroll', onScroll);
        }
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [isIntersecting, onScroll]);

    return (
        <>
            <Sentinel sx={{ opacity: 0, height: `${height}px` }} />
            <Flex
                ref={headerRef}
                direction="column"
                align="center"
                justify="center"
                sx={{
                    top: 0,
                    position: 'sticky',
                    // position: 'fixed',
                    // left: 0,
                    // right: 0,
                    // height: '300px',
                    backgroundColor: '#f5f4f3',
                    // transform: 'translateZ(100px)',
                    // position: 'absolute',
                    // inset: 0,

                    '&:before': {
                        content: "''",
                        ...header_bg,
                    },
                }}
            >
                <Flex
                    justify="flex-end"
                    sx={{
                        width: '100%',
                        maxWidth: contentMaxWidth,
                        marginInline: 'auto',
                        position: 'absolute',
                        top: 0,
                    }}
                >
                    <Button variant="resume" sx={{ marginBlockStart: 2 }}>
                        <DescriptionOutlined fontSize="small" />
                        <Box
                            as="span"
                            sx={{
                                overflow: 'hidden',
                                // maxWidth: 0,
                                paddingInlineStart: 1,
                                transition: 'max-width 300ms ease',
                            }}
                        >
                            Resume
                        </Box>
                    </Button>
                </Flex>
                <Box
                    sx={{
                        ...max_width,
                        paddingBlock: 8,
                        // transform: `translateY(-${scrollTop * 0.35}px)`,
                        willChange: 'transform',
                        transformOrigin: 'center',
                        // transform: `scale(${0.5 + (1 - scrollPct) * 0.5}) translateY(-${height * scrollPct * 0.5}px)`,
                        // opacity: 1 - scrollPct * 0.5,
                        // transition: 'transform 40ms linear',
                        // transform: `translateY(-${height * scrollPct * 0.35}px)`,
                    }}
                >
                    <Flex align="center" justify="center" colGap={2} sx={{ position: 'relative' }}>
                        <Box
                            as="img"
                            src={avatar}
                            sx={{
                                height: '100px',
                                width: 'auto',
                                flexShrink: 1,
                            }}
                        />
                        <Typography
                            component="h1"
                            variant="h2"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="headlineTop">JONATHAN ELBOM</Typography>
                            <Typography variant="headlineBottom">Crafted UX</Typography>
                        </Typography>
                    </Flex>
                    {/* <Typography
                        as="p"
                        sx={{
                            textAlign: 'center',
                            marginBlockStart: 3,
                            maxWidth: '22rem',
                        }}
                    >
                        Expertise in the design and implementation of Interaction, Motion, and UI/UX
                    </Typography> */}
                </Box>
            </Flex>
        </>
    );
};
