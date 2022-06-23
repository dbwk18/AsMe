import React, { useState } from 'react';
import { Typography, Stack, Box } from '@mui/material';
import { styled } from '@mui/styles';
import PaperRoll from '../../assets/images/PaperRoll.png';


function WasteBasketPage() {
    const [wastes, setWastes] = useState([
        {
            "cluster_id": 0,
            "keyword": "과일꾸러미"
        },
        {
            "cluster_id": 1,
            "keyword": "스포츠선수"
        },
        {
            "cluster_id": 2,
            "keyword": "하늘"
        },
        {
            "cluster_id": 3,
            "keyword": "다음날"
        },
        {
            "cluster_id": 4,
            "keyword": "해커톤"
        },
        {
            "cluster_id": 5,
            "keyword": "펜"
        },
    ]);

    return (
        <Box height="100%" sx={{ pt: "2rem", px: "10rem" }}>
            <BorderBox>
                <TransparentLink href={`/wastebasket/1`}>
                    <Stack my="4rem" mx="30rem" alignItems="center">
                        <img src={PaperRoll} width="168px" height="163px" />
                        <Typography backgroundColor="primary.light">{wastes[0].keyword}</Typography>
                    </Stack>
                </TransparentLink>
                <TransparentLink href={`/wastebasket/2`}>
                    <Stack mt="-5rem" mr="32rem" alignItems="center">
                        <img src={PaperRoll} width="170px" height="166px" style={{ transform: "rotate(30deg)" }} />
                        <Typography backgroundColor="primary.light">{wastes[1].keyword}</Typography>
                    </Stack>
                </TransparentLink>
                <TransparentLink href={`/wastebasket/3`}>
                    <Stack mt="-10rem" ml="45rem" alignItems="center">
                        <img src={PaperRoll} width="181px" height="176px" style={{ transform: "rotate(-30deg)" }} />
                        <Typography backgroundColor="secondary.main">{wastes[2].keyword}</Typography>
                    </Stack>
                </TransparentLink>
                <TransparentLink href={`/wastebasket/4`}>
                    <Stack mt="-4rem" mr="4rem" alignItems="center">
                        <img src={PaperRoll} width="137px" height="133px" style={{ transform: "rotate(-20deg)" }} />
                        <Typography backgroundColor="secondary.light">{wastes[3].keyword}</Typography>
                    </Stack>
                </TransparentLink>
                <TransparentLink href={`/wastebasket/5`}>
                    <Stack mt="-2rem" mr="40rem" alignItems="center">
                        <img src={PaperRoll} width="170px" height="166px" />
                        <Typography backgroundColor="primary.light">{wastes[4].keyword}</Typography>
                    </Stack>
                </TransparentLink>
                <TransparentLink href={`/wastebasket/6`}>
                    <Stack mt="-4rem" ml="20rem" alignItems="center">
                        <img src={PaperRoll} width="170px" height="166px" style={{ transform: "rotate(40deg)" }} />
                        <Typography backgroundColor="primary.light">{wastes[5].keyword}</Typography>
                    </Stack>
                </TransparentLink>
                <Stack sx={{ position: "fixed", bottom: "3rem", right: "3.75rem" }} spacing="0.5rem">
                    <Typography fontSize="44px" textAlign="right">다시 꺼내 보세요.</Typography>
                    <Typography fontSize="24px" textAlign="right">그게 겁나 천만관객 영화 대본이 될지도..?</Typography>
                </Stack>
            </BorderBox>
        </Box>
    )
}

export default WasteBasketPage

const BorderBox = styled(Box)({
    border: "1px solid rgba(0,0,0,0.5)", 
    width: "100%",
    height: "110vh",
});

const TransparentLink = styled("a")({
    textDecoration: "none",
    color: "black"
});
