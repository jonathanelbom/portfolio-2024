// import { Box, Button, Flex, Heading, Text } from '@indeed/ifl-components';
// import { ChevronLeft } from '@indeed/ifl-icons';

import { useLocation /*Routes, Route, Link, Navigate*/ } from 'react-router-dom';
// import { routes } from './routes';
import { useEffect } from 'react';
import { Box /*Button, Typography*/ } from '@mui/material';
import { Content } from './components/Content/Content';
import { PageHeader } from './components/PageHeader/PageHeader';
import { BrandStripe } from './components/BrandStripe/BrandStripe';

// import { ChevronRight } from '@mui/icons-material';

// const BackToHome = ({ positionVertical = 'top', positionHorizontal = 'left' }) => {
//     const hasIcon = positionHorizontal === 'left';
//     return null;
//     // return (
//     //     <Link to="/" className="router-link">
//     //         <Button
//     //             variant="text"
//     //             size="xs"
//     //             {...(hasIcon && { iconBefore: <ChevronLeft size="xs" /> })}
//     //             sx={{
//     //                 boxShadow: 'medium',
//     //                 paddingInline: 2,
//     //                 paddingBlock: 1,
//     //                 fontWeight: 650,
//     //                 fontSize: '14px',
//     //                 paddingInlineStart: hasIcon ? 0 : 2,
//     //                 color: 'neutral.1000',
//     //                 backgroundColor: 'background',
//     //                 position: 'fixed',
//     //                 zIndex: 1,
//     //                 ...(positionVertical === 'top' && { top: 2 }),
//     //                 ...(positionVertical !== 'top' && { bottom: 2 }),
//     //                 ...(positionHorizontal === 'left' && { left: 2 }),
//     //                 ...(positionHorizontal !== 'left' && { right: 2 }),
//     //                 '> svg': {
//     //                     marginInlineEnd: 0,
//     //                 },
//     //             }}
//     //         >
//     //             {'Home'}
//     //         </Button>
//     //     </Link>
//     // );
// };

// const TableOfContents = () => {
//     const labelStyle = {
//         display: 'inline-block',
//         bg: '#fff',
//         paddingInline: 2,
//         paddingBlock: 1,
//     };

//     return (
//         <Box
//             sx={{
//                 paddingInline: 5,
//                 paddingBlock: 5,
//             }}
//         >
//             <Typography variant="h3" component="h1"
//                 sx={{
//                     marginBlockEnd: 6,
//                     paddingInline: 2,
//                     paddingBlock: 1,
//                     display: 'inline-block',
//                     background: 'background.inverse',
//                     color: 'foreground.action.inverse',
//                 }}
//             >
//                 {"JElbom's Playground"}
//             </Typography>
//             <Box as="ul" sx={{ listStyleType: 'none', paddingInlineStart: 0 }}>
//                 {routes.map(({ title, subtitle, description, path }, i) => (
//                     <Box as="li" sx={{ marginBlockEnd: 5 }} key={`link-${i}`}>
//                         <Link to={path} className="router-link">
//                             <Flex
//                                 sx={{
//                                     flexDirection: 'column',
//                                     display: 'inline-flex',
//                                     alignItems: 'flex-start',
//                                     transition: 'color 300ms ease',
//                                     '> h2': {
//                                         transition: 'transform 300ms ease',
//                                     },
//                                     ':hover > h2': {
//                                         transform: 'translateX(12px)',
//                                     },
//                                 }}
//                             >
//                                 <Typography variant="h1" component="h2"
//                                     sx={{
//                                         ...labelStyle,
//                                         m: 0,
//                                     }}
//                                 >
//                                     {title}
//                                 </Typography >
//                                 {subtitle && (
//                                     <Typography level={3} sx={{ ...labelStyle, maxWidth: '50rem', fontWeight: 500 }}>
//                                         <i>{subtitle}</i>
//                                     </Typography>
//                                 )}
//                                 {description && (
//                                     <Typography level={2} sx={{ ...labelStyle, maxWidth: '50rem' }}>
//                                         {description}
//                                     </Typography>
//                                 )}
//                             </Flex>
//                         </Link>
//                     </Box>
//                 ))}
//             </Box>
//         </Box>
//     );
// };

// const Content = () => (
//     <Routes>
//         <Route path="" element={<HomeCotent />} />
//         {routes.map(({ path, Component, props }, i) => (
//             <Route path={path} element={<Component {...props} />} key={`route-${i}`} />
//         ))}
//         <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
// );

const App = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        document.scrollingElement.scrollTop = 0;
    }, [pathname]);

    return (
        <Box
            sx={{
                minBlockSize: '100vh',
            }}
        >
            <BrandStripe />
            <PageHeader />
            <Content />
        </Box>
    );
};

export default App;
