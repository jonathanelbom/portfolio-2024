// import { Box, Button, Flex, Heading, Text } from '@indeed/ifl-components';
// import { ChevronLeft } from '@indeed/ifl-icons';

// import { useLocation, Routes, Route, Link, Navigate } from 'react-router-dom';
// import { routes } from './routes';
// import { useEffect } from 'react';
import { Box /*Button, Typography*/ } from '@mui/material';
import { Content } from './components/Content/Content';
import { PageHeader } from './components/PageHeader/PageHeader';
import { BrandStripe } from './components/BrandStripe/BrandStripe';
import { ProjectDialog } from './components/ProjectDialog/ProjectDialog';

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
    // const { pathname } = useLocation();
    // useEffect(() => {
    //     document.scrollingElement.scrollTop = 0;
    // }, [pathname]);

    return (
        <>
            <Box
                sx={{
                    minBlockSize: '100vh',
                }}
            >
                <BrandStripe />
                <PageHeader />
                <Content />
            </Box>
            <ProjectDialog />
        </>
    );
};

export default App;
