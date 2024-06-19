import { createTheme } from '@mui/material/styles';
const _theme = createTheme({
    palette: {
        primary: {
            main: '#8a1b12',
        },
        text: {
            primary: '#292929',
        },
    },
    // breakpoints: {
    //     values: {
    //         xs: 0,
    //         sm: 480,
    //         md: 800,
    //         lg: 1020,
    //         xl: 1400,
    //     },
    // },
});

export const theme = createTheme(_theme, {
    typography: {
        headlineTop: {
            fontSize: '1.6rem',
            fontWeight: '300',
            // color: _theme.palette.primary.main,
        },
        headlineBottom: {
            fontSize: '3.25rem',
            lineHeight: '3.25rem',
            fontWeight: '600',
            fontFamily: 'Roboto Condensed',
            color: _theme.palette.primary.main,
        },
        sectionHeadline: {
            fontSize: '2rem',
            fontWeight: '700',
            fontFamily: 'Roboto Condensed',
            color: _theme.palette.primary.main,
        },
        sectionItemHeadline: {
            fontSize: '3.25rem',
            fontWeight: '600',
            fontFamily: 'Roboto Condensed',
            color: _theme.palette.primary.main,
        },
        projectTitle: {
            fontFamily: 'Roboto Condensed',
            fontWeight: '600',
            fontSize: '1.25rem',
        },
        projectSizes: {
            fontFamily: 'Roboto',
            fontWeight: '300',
            fontSize: '1.125rem',
            textTransform: 'uppercase',
        },
        workTitle: {
            fontFamily: 'Roboto Condensed',
            fontWeight: '600',
            fontSize: '1.35rem',
            color: _theme.palette.primary.main,
        },
        workDate: {
            fontFamily: 'Roboto Condensed',
            fontWeight: '300',
            fontSize: '1.25rem',
        },
        workRole: {
            fontFamily: 'Roboto',
            fontWeight: '400',
            fontSize: '1.25rem',
        },
        subWorkTitle: {
            fontFamily: 'Roboto Condensed',
            fontWeight: '500',
            fontSize: '1.35rem',
        },
        // button: {
        //     textTransform: 'none',
        // },
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                // The props to change the default for.
                disableRipple: true, // No more ripple, on the whole application 💣!
            },
        },
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    borderRadius: '2rem',
                    // boxShadow: 'none',
                    // '&:focus': {
                    //     outline: '1px solid #8a1b12',
                    // },
                },
            },
            variants: [
                {
                    props: { variant: 'resume' },
                    style: {
                        borderRadius: '24px',
                        // color: 'blue',
                        backgroundColor: '#e5e3e2',
                        paddingBlock: '4px',
                        paddingInline: '8px',
                        minWidth: 'unset',
                        marginInlineEnd: '16px',
                        textTransform: 'none',
                    },
                },
                {
                    props: { variant: 'contained' },
                    style: {
                        boxShadow: 'none',
                    },
                },
            ],
        },
    },

    //     // MuiTypography: {
    //     //     defaultProps: {
    //     //         color: 'primary',
    //     //     },
    //     // },
    // },
});
