import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    typography: {
        fontFamily: [
            'Poppins',
        ].join(','),
    },

    palette: {
        mode: 'light',
        background:{
            default:'#f5f6f6'
        },
        primary: {
            main: '#37b87f'
        },
        secondary: {
            main: '#da5876'
        },
        info: {
            main:'#fff',
            dark:'#242f51',
            light:'#999',
            contrastText:'#999'
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                
            }
        },
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
                position: 'relative',
            },
            styleOverrides: {
                root: {
                    backgroundColor: '#232233',
                    color:'#f8f9f8',
                    padding:'1rem 0'
                },
            }
        },

        MuiDivider: {
            styleOverrides: {
                root: {
                    margin:'1rem 0'
                }
            }
        },

        MuiListItemText:{
            styleOverrides:{
                root:{
                    color:'#f5f6f6'
                }
            }
        },

        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 30,
                    fontWeight: 700
                },
                h2: {
                    fontSize: 20,
                    fontWeight: 600
                },
                subtitle1: {
                    fontSize: 18,
                    fontWeight: 600
                }
            }
        },

        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderRadius: '10px !important'
                }
            }
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    // minWidth: '450px',
                    width: '100%',
                    marginBottom:'1rem',
                    borderRadius:'40px'
                }
            }
        },

        MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'medium',
                disableElevation: true,
                color: 'primary',
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: '5px',
                    color:'#f5f6f6',
                    gap:'.5rem',
                    ":hover": {
                        // backgroundColor: 'rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease-in-out'
                    }
                }
            }
        },

        MuiCard: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                    transitionDuration:'.3s',
                    transitionProperty: 'all',
                    ':hover':{
                        boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
                        transform:'scale(1.025)',
                    }
                }
            }
        },
        MuiGrid:{
            styleOverrides: {
                root:{
                    alignItems: 'center',
                    justifyContent:'center'
                }
            }
        }

    }
});