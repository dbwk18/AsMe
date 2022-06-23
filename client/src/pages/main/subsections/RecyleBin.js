import React from 'react';
import { Typography, Stack, Box } from '@mui/material';


function RecyleBin({ color, width, height, title, number, creationTime }) {
    const zeroPad = (num, places) => String(num).padStart(places, '0');

    return (
        <Stack direction="row">
            <Stack justifyContent="flex-end" alignItems="flex-end">
                <Typography pt="0.75rem" pr="0.5rem">{creationTime}</Typography>

                <Box backgroundColor={color} width={width} height={height}>
                    Recyle3
                </Box>
            </Stack>
            <Stack>
                <Typography variant="h4" pl="0.5rem">{zeroPad(number, 2)}</Typography>
                <Typography sx={{ transform: "rotate(90deg)", height: "0.5rem", mt: "1.5rem", }}>{title}</Typography>

            </Stack>
        </Stack>
        
    )
}

export default RecyleBin
