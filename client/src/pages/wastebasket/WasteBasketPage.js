import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Stack, Box } from '@mui/material';
import { styled } from '@mui/styles';
import PaperRoll from '../../assets/images/PaperRoll.png';
import Back from '../../assets/images/Back.png';


function WasteBasketPage() {
    const [clusters, setClusters] = useState([
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
    const [topicId, setTopicId] = useState(undefined);
    const [wastes, setWastes] = useState([
        {
            "article_id": 1,
            "title": "안 되던 게 되는 날도 있다",
            "content": "요가를 하다 보면 그런 날이 있다.\n평소에 잘 되던 것도 아예 넘어가지\n않는 날.",
            "creation_time": "2022-06-22",
        },
        {
            "article_id": 2,
            "title": "축구한 날",
            "content": "손흥민을 보니까 축구가 하고 싶어\n서 축구를 했다",
            "creation_time": "2022-04-21",
        }
    ]);

    useEffect(() => {
        let dataToSubmit = {
            "user_id": window.localStorage.getItem("user_id")
        }

        axios.get(`/api/cluster`, dataToSubmit)
        .then(response => response.data)
        .then(response => {
            console.log(response);
            if (response?.clusters?.length) {
                setClusters(response.clusters);
            }
        })
        .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        if (topicId) {
            
        }
    }, [topicId]);

    return (
        <Box height="100%" sx={{ pt: "6rem", px: "10rem" }}>
            <Typography sx={{ position: "fixed", left: "-3rem", top: "32rem", transform: "rotate(-90deg)" }} fontSize="12px" color="#ADADAD">Writing Assistant, 'AsMe'</Typography>
            <BorderBox>
                {topicId ? (
                    <Box width="100%" height="100%" backgroundColor="#fff">
                        {wastes.map(waste => 
                            <Stack key={waste.article_id} sx={{ p: "4.5rem 6rem", borderBottom: "1px solid #00000080" }} spacing={3}>
                                <Typography color="#828282" letterSpacing={2}>{waste.creation_time}</Typography>
                                <Typography variant="h3">{waste.title}</Typography>
                                <Typography width="18rem" fontSize="20px" lineHeight="3">{waste.content}</Typography>
                            </Stack>    
                        )}
                        <TransparentLink onClick={() => setTopicId(undefined)}>
                            <img src={Back} style={{ borderRadius: "50%", position: "fixed", bottom: "3rem", left: "5rem"}} />
                        </TransparentLink>
                    </Box>
                ) : (
                    <React.Fragment>
                        <TransparentLink onClick={() => setTopicId(clusters[0]?.cluster_id)}>
                            <Stack my="4rem" mx="30rem" alignItems="center">
                                <img src={PaperRoll} width="168px" height="163px" />
                                <Typography color="black" backgroundColor="#00054533">{clusters[0]?.keyword}</Typography>
                            </Stack>
                        </TransparentLink>
                        <TransparentLink onClick={() => setTopicId(clusters[1]?.cluster_id)}>
                            <Stack mt="-5rem" mr="32rem" alignItems="center">
                                <img src={PaperRoll} style={{ transform: "rotate(30deg)" }} />
                                <Typography color="black" backgroundColor="#F166004D">{clusters[1]?.keyword}</Typography>
                            </Stack>
                        </TransparentLink>
                        <TransparentLink onClick={() => setTopicId(clusters[2]?.cluster_id)}>
                            <Stack mt="-10rem" ml="60rem" alignItems="center">
                                <img src={PaperRoll} width="200px" height="196px" style={{ transform: "rotate(-30deg)" }} />
                                <Typography color="black" backgroundColor=" #F1660033">{clusters[2]?.keyword}</Typography>
                            </Stack>
                        </TransparentLink>
                        <TransparentLink onClick={() => setTopicId(clusters[3]?.cluster_id)}>
                            <Stack mt="-4rem" mr="4rem" alignItems="center">
                                <img src={PaperRoll} width="157px" height="153px" style={{ transform: "rotate(-20deg)" }} />
                                <Typography color="black" backgroundColor="#ADADAD">{clusters[3]?.keyword}</Typography>
                            </Stack>
                        </TransparentLink>
                        <TransparentLink onClick={() => setTopicId(clusters[4]?.cluster_id)}>
                            <Stack mt="-2rem" mr="40rem" alignItems="center">
                                <img src={PaperRoll} width="190px" height="196px" />
                                <Typography color="black" backgroundColor="#ADADAD">{clusters[4]?.keyword}</Typography>
                            </Stack>
                        </TransparentLink>
                        <TransparentLink onClick={() => setTopicId(clusters[5]?.cluster_id)}>
                            <Stack mt="-4rem" ml="20rem" alignItems="center">
                                <img src={PaperRoll} width="170px" height="166px" style={{ transform: "rotate(40deg)" }} />
                                <Typography color="black" backgroundColor="primary.light">{clusters[5]?.keyword}</Typography>
                            </Stack>
                        </TransparentLink>
                        <Stack sx={{ position: "fixed", bottom: "3rem", right: "3.75rem" }} spacing="0.5rem">
                            <Typography fontSize="44px" textAlign="right" fontWeight="700">다시 꺼내 보세요.</Typography>
                            <Typography fontSize="24px" textAlign="right">마침표를 찍을 수 있게 도와줄게요!</Typography>
                        </Stack>
                    </React.Fragment>
                )}
            </BorderBox>
        </Box>
    )
}

export default WasteBasketPage

const BorderBox = styled(Box)({
    border: "1px solid #00000080", 
    width: "100%",
    height: "110vh",
    padding: "0.5rem"
});

const TransparentLink = styled("a")({
    textDecoration: "none",
    color: "#00000080",
    "&:hover": {
        cursor: "pointer"
    }
});