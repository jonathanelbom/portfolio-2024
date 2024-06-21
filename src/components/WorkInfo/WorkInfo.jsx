import { Box, Typography } from '@mui/material';
import { maxWidthContent, subwork_decoration } from '../../constants/styles';
import { Flex } from '../IFL/ifl';

export const WorkInfo = ({ title, content }) => {
    return (
        <Box sx={{ ...maxWidthContent, marginBlockStart: 3, marginBlockEnd: 3 }}>
            <Flex direction="column" gap={1}>
                {title && (
                    <Typography
                        variant="subWorkTitle"
                        sx={{ position: 'relative', paddingInline: 2, ...subwork_decoration }}
                    >
                        {title}
                    </Typography>
                )}
                {content && <Typography variant="body1" dangerouslySetInnerHTML={{ __html: content }} />}
            </Flex>
        </Box>
    );
};
