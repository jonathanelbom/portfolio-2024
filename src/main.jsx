import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { GlobalStyles, ThemeProvider } from '@mui/material';
import { theme } from './constants/theme.js';

// const ThemeProvider = ({ children, theme }) => {
//     const searchParams = new URL(document.location).searchParams;
//     const isRTL = searchParams.has('rtl');

//     useEffect(() => {
//         if (isRTL) {
//             document.documentElement.setAttribute('dir', 'rtl');
//         }
//     }, [isRTL]);

//     return (
//         <IndeedThemeProvider
//             theme={{
//                 ...theme,
//                 direction: isRTL ? 'rtl' : 'ltr',
//             }}
//         >
//             {children}
//         </IndeedThemeProvider>
//     );
// };

console.log('theme:', theme);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles
                styles={{
                    html: {
                        '--max-content-width': '50rem',
                    },
                    // 'body&::before': {
                    //     content: "''",
                    //     ...header_bg,
                    //     position: 'fixed',
                    //     transform: 'scale(-1, 1)',
                    //     backgroundAttachment: 'fixed',
                    // },
                    // body: {
                    //     color: '#ff0000',
                    // },
                    // '.router-link': {
                    //     textDecoration: 'none',
                    //     color: 'neutral.800',
                    // },
                }}
            />
            <HashRouter>
                <App />
            </HashRouter>
        </ThemeProvider>
    </React.StrictMode>,
);
