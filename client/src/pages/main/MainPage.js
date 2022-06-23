import React, { useState } from 'react';
import { Typography, Stack, Box } from '@mui/material';
import { styled } from '@mui/styles';
import RecyleBin from './subsections/RecyleBin';


function MainPage() {
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
                <Box sx={{ p: "1rem" }} backgroundColor="primary.main" width="17rem" height="6rem" display="flex" alignItems="center">
                    <Typography fontSize="6rem" textAlign="center">asme</Typography>
                </Box>
                <Box sx={{ pt: "1.5rem" }}>
                    <Stack direction="row" spacing={"1rem"} alignItems="flex-start">
                        <Box backgroundColor="primary.light" width="3rem" height="1rem" />
                        <Stack spacing={"0.5rem"}>
                            <Typography>슬로건 1</Typography>
                            <Typography>슬로건 2</Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
            <Box sx={{ pt: "6rem", pr: "1rem" }} display="flex" justifyContent="flex-end">
                <Stack>
                    <Box sx={{ mb: "3rem", ml: "4rem" }} backgroundColor="primary.main" width="20rem">
                        <Typography textAlign="center">케이스를 당겨주세요...!</Typography>
                    </Box>
                    <Stack direction="row" spacing={"1rem"}>
                        <Box width="20px" height="276px" backgroundColor="primary.main">
                            이 부분 당겨주세요
                        </Box>
                        <img src={"https://img.freepik.com/free-vector/realistic-crumpled-paper-texture-background_389675-149.jpg?w=1480"} width="922px" height="295px" />
                    </Stack>
                </Stack>
            </Box>
            <Box sx={{ pt: "7.5rem" }} display="flex" justifyContent="center">
                <Stack alignItems="center" width="20rem">
                    <Box backgroundColor="primary.main" width="13rem">
                        <Typography textAlign="center">버린 글감통</Typography>
                    </Box>
                    <Box sx={{ my: "1rem" }} backgroundColor="primary.main" width="20rem">
                        <Typography textAlign="center">설명 간단하게</Typography>
                    </Box>
                </Stack>
            </Box>
            <Box sx={{ py: "3rem" }} display="flex" justifyContent="center" alignItems="center">
                <Box height="27rem" width="2rem" backgroundColor="secondary.main">
                    <Typography textAlign="center" sx={{ transform: "rotate(90deg)", pl: "1rem" }}>image</Typography>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center">
                <Stack alignItems="center" width="20rem" spacing="0.5rem">
                    <Box sx={{ mb: "1.5rem" }}>이미지</Box>
                    <Typography textAlign="center">버린 글감통</Typography>
                    <Typography textAlign="center">설명 간단하게</Typography>
                </Stack>
            </Box>
            <Box sx={{ overflowX: "hidden" }}>
                <Stack width="110%" pt="7.5rem" direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ overflowX: "hidden" }}>
                    <RecyleBin color={"primary.light"} width={"230px"} height={"235px"} title={articles[0]?.title} number={1} creationTime={articles[0]?.creation_time} />
                    <RecyleBin color={"primary.dark"} width={"220px"} height={"334px"} title={articles[1]?.title} number={2} creationTime={articles[1]?.creation_time} />
                    <RecyleBin color={"primary.dark"} width={"255px"} height={"274px"} title={articles[2]?.title} number={3} creationTime={articles[2]?.creation_time} />
                    <RecyleBin color={"primary.light"} width={"220px"} height={"298px"} title={articles[3]?.title} number={4} creationTime={articles[3]?.creation_time} />
                    <RecyleBin color={"primary.light"} width={"220px"} height={"334px"} title={articles[4]?.title} number={5} creationTime={articles[4]?.creation_time} />
                </Stack>
            </Box>
            <Box width="100%" height="10rem" backgroundColor="secondary.main">image</Box>
        </Box>
    )
}

export default MainPage
