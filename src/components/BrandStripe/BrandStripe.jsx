import { Box } from '@mui/material';
import { brand_stripe } from '../../constants/styles';

export const BrandStripe = () => {
    return (
        <Box
            className="brandStripe"
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 2,
                '&::before': {
                    content: "''",
                    ...brand_stripe,
                },
            }}
        />
    );
};
