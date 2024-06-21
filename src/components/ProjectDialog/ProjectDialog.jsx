import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ACTION_TYPE, useAppDispatch, useAppState } from '../../context/AppContext/AppContext';
import { Box, IconButton, Slide, Typography, Zoom, styled, useMediaQuery, useTheme } from '@mui/material';
import { Flex } from '../IFL/ifl';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import { GridMediaContainer } from '../Grid';
import { Close, Launch } from '@mui/icons-material';
import { maxWidthContent } from '../../constants/styles';

const timeout = {
    enter: 400,
    exit: 250,
};

const Transition = React.forwardRef(function Transition(props, ref) {
    const onExited = () => {
        // deselect project here
        props.onExited();
    };
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const TransitionComponent = fullScreen ? Slide : Zoom;
    return <TransitionComponent direction="left" ref={ref} {...props} onExited={onExited} timeout={timeout} />;
});

const CustomizedDialog = styled(Dialog)(({ theme }) => ({
    '&.MuiDialog-root': {
        '&.has-video': {
            '& .MuiDialog-paper': {
                maxWidth: ['600px', '1000px'],
                width: '100%', //['600px', '1000px', '1000px'],
            },
        },
    },
    '& .MuiDialogContent-root': {
        paddingBlockStart: 0,
    },
    '& .MuiDialog-paper': {
        // maxWidth: ['600px'],
        // width: ['600px'],
        maxWidth: ['600px', '1000px', '1000px'],
        width: ['600px', '1000px', '1000px'],
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(2),
    },
}));

export const ProjectDialog = () => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { modalOpen, selectedProject } = useAppState();
    const dispatch = useAppDispatch();
    const { title, sizes, image, video, links, description } = selectedProject || {};
    const handleClose = () => {
        dispatch({
            type: ACTION_TYPE.TOGGLE_MODAL,
            value: false,
        });
    };

    return (
        <CustomizedDialog
            open={modalOpen}
            TransitionComponent={Transition}
            fullScreen={fullScreen}
            keepMounted={false}
            onClose={handleClose}
            {...(video && { className: 'has-video' })}
            aria-describedby="alert-dialog-slide-description"
            // scroll="body"
        >
            <DialogTitle>
                <Flex direction="column" gap={0}>
                    <Typography variant="projectTitle">{title}</Typography>
                    {sizes && (
                        <Typography variant="projectSizes" sx={{ marginBlockStart: -0.75 }}>
                            {sizes.join('/')}
                        </Typography>
                    )}
                </Flex>
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <Close />
            </IconButton>
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <GridMediaContainer item={selectedProject} inDialog={!video}>
                    {video && <VideoPlayer url={video.url} />}
                    {!video && image && (
                        <Box
                            as="img"
                            sx={{
                                width: '100%',
                                height: '400px',
                                objectFit: 'contain',
                                objectPosition: 'center',
                                display: 'block',
                            }}
                            src={`../images/${image?.uri}`}
                        />
                    )}
                </GridMediaContainer>
                {description && (
                    // <DialogContentText>
                    <Typography
                        as="span"
                        variant="body1"
                        dangerouslySetInnerHTML={{ __html: description }}
                        sx={{ ...maxWidthContent }}
                    />
                    // </DialogContentText>
                )}
            </DialogContent>
            <DialogActions sx={{ flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                {links &&
                    links.map((link, i) => {
                        const _url = link.uri || link.url;
                        const label = link.label || `Launch ${title}`;
                        return (
                            <Button
                                variant="contained"
                                sx={{
                                    gap: 1,
                                    textTransform: 'unset',
                                    margin: '0 !important',
                                }}
                                key={`${_url}-${i}`}
                                target="_blank"
                                href={_url}
                            >
                                <Launch fontSize="small" />
                                {label}
                            </Button>
                        );
                    })}
            </DialogActions>
        </CustomizedDialog>
    );
};
