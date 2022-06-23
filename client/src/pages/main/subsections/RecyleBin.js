import React from 'react';
import { Typography, Stack } from '@mui/material';
import WhitePaper1 from '../../../assets/images/WhitePaper1.png';
import WhitePaper2 from '../../../assets/images/WhitePaper2.png';
import WhitePaper3 from '../../../assets/images/WhitePaper3.png';
import NavyPaper1 from '../../../assets/images/NavyPaper1.png';
import NavyPaper2 from '../../../assets/images/NavyPaper2.png';


function RecyleBin({ imageNum, title, number, creationTime }) {
    const zeroPad = (num, places) => String(num).padStart(places, '0');
    const images = [WhitePaper1, WhitePaper2, WhitePaper3, NavyPaper1, NavyPaper2];

    return (
        <Stack direction="row">
            <Stack justifyContent="flex-end" alignItems="flex-end">
                <Typography pt="0.75rem" pr="0.5rem" color="#828282">{creationTime}</Typography>
                <img src={images[imageNum]} />
            </Stack>
            <Stack>
                <Typography variant="h4" pl="0.5rem">{zeroPad(number, 2)}</Typography>
                <Typography sx={{ transform: "rotate(90deg)", height: "0.5rem", mt: "1.5rem", }}>{title}</Typography>
            </Stack>
        </Stack>
    )
}

export default RecyleBin
