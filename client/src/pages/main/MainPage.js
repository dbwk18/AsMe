import React, { useState } from 'react';
import { Typography, Stack, Box } from '@mui/material';
import { makeStyles, styled } from '@mui/styles';
import RecyleBin from './subsections/RecyleBin';
import Logo from '../../assets/images/Logo.png';
import PencilCase from '../../assets/images/PencilCase.png';
import PencilCaseTop from '../../assets/images/PencilCaseTop.png';
import Pencil from '../../assets/images/Pencil.png';
import Drawing from '../../assets/images/Drawing.png';
import PaperRoll from '../../assets/images/PaperRoll.png';
import Floor from '../../assets/images/Floor.png';


function MainPage() {
    const classes = useStyles();
    const [openCase, setOpenCase] = useState(false);
    const [articles, setArticles] = useState([
        {"post_id": 1, "title": "제목1", "creation_time": "2022-06-22"},
        {"post_id": 2, "title": "제목2", "creation_time": "2022-06-22"},
        {"post_id": 3, "title": "제목3", "creation_time": "2022-06-23"},
        {"post_id": 4, "title": "제목4", "creation_time": "2022-06-23"},
        {"post_id": 5, "title": "제목5", "creation_time": "2022-06-23"},
    ]);

    return (
        <Box height="100vh" sx={{ py: "2rem" }}>
            <Box sx={{ pl: "14rem" }}>
                <Box display="flex" alignItems="center">
                    <img src={Logo} height="64px" />
                </Box>
                <Box sx={{ pt: "1.5rem" }}>
                    <Stack direction="row" spacing={"1rem"}>
                        <Box backgroundColor="black" width="2rem" height="3px" mt={"0.5rem"} />
                        <Stack spacing={"0.5rem"}>
                            <Typography>완성하지 못한 글쓰기에<br />마침표를 찍을 수 있게 도와줍니다.</Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
            <Box sx={{ pt: "8rem", pr: "3rem" }} display="flex" justifyContent="flex-end">
                <Stack>
                    <Typography letterSpacing={10} fontSize="24px" color="#BBBBBB" ml="7rem">{openCase ? "　" : "케이스를 당겨주세요."}</Typography>
                    <Stack direction="row" spacing={"1rem"} mt="2rem" onClick={() => setOpenCase(!openCase)}>
                        <Box>
                            <Box className={classes.pencilTopImg} width={openCase ? "360px" : "100px"}  sx={{ mt: "-0.2rem", mr: "-3.75rem", transition: "width 2s, height 2s, transform 2s" }}>
                                <Stack alignItems="center" justifyContent="center" pt="4rem" ml="14rem" spacing={"1rem"}>
                                    <TransparentLink href="/draft" className={classes.pencilImg}>
                                        <Typography fontWeight="700" color="black">글쓰기</Typography>
                                    </TransparentLink>
                                    <TransparentLink href="/archive" className={classes.pencilImg}>
                                        <Typography fontWeight="700">글보관함</Typography>
                                    </TransparentLink>
                                    <TransparentLink href="/wastebasket" className={classes.pencilImg}>
                                        <Typography fontWeight="700">휴지통</Typography>
                                    </TransparentLink>
                                </Stack>
                            </Box>
                        </Box>
                        <img src={PencilCase} style={{ zIndex: 99 }} />
                    </Stack>
                </Stack>
            </Box>
            <Box sx={{ pt: "7.5rem" }} display="flex" justifyContent="center">
                <Stack alignItems="center">
                    <Typography textAlign="center" gutterBottom fontSize="1.5rem" fontWeight="500">영감을 주는 케이스</Typography>
                    <Typography textAlign="center">영감을 주는........하 뭐라해야되냐</Typography>
                </Stack>
            </Box>
            <Box sx={{ py: "3rem" }} display="flex" justifyContent="center" alignItems="center">
                <img src={Drawing} />
            </Box>
            <Box display="flex" justifyContent="center">
                <Stack alignItems="center" width="20rem" spacing="0.5rem">
                    <Box sx={{ mb: "2rem" }}>
                        <img src={PaperRoll} width="70px" />
                    </Box>
                    <Typography textAlign="center" gutterBottom fontSize="1.5rem" fontWeight="500">내가 버린 글감들</Typography>
                    <Typography textAlign="center">버린 글도 다시보자... 넌 멋쟁이거든...</Typography>
                </Stack>
            </Box>
            <Box sx={{ overflowX: "hidden" }}>
                <Stack width="104%" pt="7.5rem" direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ overflowX: "hidden" }}>
                    <RecyleBin imageNum={0} width={"230px"} height={"235px"} title={articles[0]?.title} number={1} creationTime={articles[0]?.creation_time}></RecyleBin>
                    <RecyleBin imageNum={3} width={"220px"} height={"334px"} title={articles[1]?.title} number={2} creationTime={articles[1]?.creation_time} />
                    <RecyleBin imageNum={4} width={"255px"} height={"274px"} title={articles[2]?.title} number={3} creationTime={articles[2]?.creation_time} />
                    <RecyleBin imageNum={1} width={"220px"} height={"298px"} title={articles[3]?.title} number={4} creationTime={articles[3]?.creation_time} />
                    <RecyleBin imageNum={2} width={"220px"} height={"334px"} title={articles[4]?.title} number={5} creationTime={articles[4]?.creation_time} />
                </Stack>
            </Box>
            <img src={Floor} width="100%" style={{ marginTop: "-0.5rem"}} />
        </Box>
    )
}

export default MainPage

const useStyles = makeStyles(theme => ({
    "pencilTopImg": {
        backgroundImage: `url(${PencilCaseTop})`, 
        height: "92%",
    },
    "pencilImg": {
        backgroundImage: `url(${Pencil})`, 
        width: "350px",
        height: "48px",
        transform :"scale(0.82)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "9",
        '&:hover': {
            cursor: "pointer"
        }
    }
}))

const TransparentLink = styled("a")({
    textDecoration: "none",
    color: "black"
});
