import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { GlobalStyles, ThemeProvider } from '@mui/material';
import { theme } from './constants/theme.js';
import { AppProvider } from './context/AppContext/AppContext.jsx';

// console.log('theme:', theme);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles
                styles={{
                    body: {
                        boxSizing: 'border-box',
                        '*': {
                            boxSizing: 'border-box',
                        },
                    },
                    // '.router-link': {
                    //     textDecoration: 'none',
                    //     color: 'neutral.800',
                    // },
                }}
            />
            <AppProvider>
                <HashRouter>
                    <App />
                </HashRouter>
            </AppProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
