import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { styled, makeStyles } from '@mui/styles';
import { Box, Link, Typography, Button, Stack, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


function NavBar() {
    const user = useSelector(state => state[0]?.user);
    const classes= useStyles();
    const [userId, setUserId] = useState(undefined);    // TEST: undefined / 1
    const [openDrawer, setOpenDrawer] = useState(false);
    const [imgSrc, setImgSrc] = useState("https://as2.ftcdn.net/v2/jpg/02/79/66/93/1000_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg")
    const [openLoginForm, setOpenLoginForm] = useState(false);
    const [openSignupForm, setOpenSignupForm] = useState(false);


    useEffect(() => {
        if (userId) {
            // setImgSrc();
        }
    }, [userId]);

    useEffect(() => {
        if (!openDrawer) {
            setOpenLoginForm(false);
            setOpenSignupForm(false);
        }
    }, [openDrawer]);

    const toggleDrawer = (event) => {
        setOpenDrawer(!openDrawer);
    }

    return (
        <NavBox sx={{ backgroundColor: "inherit" }}>
            <Stack direction="row" spacing="0.5rem" alignItems="center">
                <Link href="/" underline="none">
                    <Box height={"4rem"} width={"4rem"} backgroundColor="primary.main" display="flex" justifyContent="center" alignItems="center">
                        <Typography letterSpacing={2} fontFamily="helvetica" color="black">로고</Typography>
                    </Box>
                </Link>
                <Typography sx={{ width: "4rem" }}>설명</Typography>
            </Stack>

            <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                <Stack direction="row" spacing={3}>
                    <Button onClick={toggleDrawer} color="primary" variant="contained" sx={{ maxWidth: "2.25rem", minWidth: "2.25rem" }}>
                        <MenuIcon />
                        <Drawer
                            sx={{ width: "28rem",
                                flexShrink: 0,
                                '& .MuiDrawer-paper': {
                                  width: "28rem",
                                  boxSizing: 'border-box',
                                  backgroundColor: "black"
                                }
                            }}
                            anchor="right"
                            open={openDrawer}
                            onKeyDown={() => setOpenDrawer(true)}
                            onClick={() => setOpenDrawer(true)}
                        >
                            <Box 
                                sx={{ pt: "10rem" }}
                                role="presentation"
                                onKeyDown={() => setOpenDrawer(true)}
                                onClick={() => setOpenDrawer(true)}
                            >
                                <Stack justifyContent="center" alignItems="center">
                                    <img src={imgSrc} width="164px" height="164px" />
                                    {userId ? (
                                        <React.Fragment>
                                            <Stack spacing="1rem" mt="2rem" alignItems="center">
                                                <Typography color="primary.light">이름</Typography>
                                                <Typography color="primary.light">아이디</Typography>
                                            </Stack>
                                            <Stack spacing={"2.5rem"} mt="6rem">
                                                <Button className={classes.menuButton} href="/draft" variant="contained" onClick={toggleDrawer}>
                                                    <Typography>글쓰기</Typography>
                                                </Button>
                                                <Button className={classes.menuButton} href="/archive" variant="contained" onClick={toggleDrawer}>
                                                    <Typography>보관함 가기</Typography>
                                                </Button>
                                                <Button className={classes.menuButton} href="/bin" variant="contained" onClick={toggleDrawer}>
                                                    <Typography>쓰레기통 가기</Typography>
                                                </Button>
                                            </Stack>
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            <Stack direction="row" spacing="1rem" mt="2rem" mb="3.5rem">
                                                <Button onClick={() => setOpenLoginForm(true)} variant="outlined"><Typography>로그인</Typography></Button>
                                                <Button onClick={() => setOpenSignupForm(true)} variant="outlined"><Typography>회원가입</Typography></Button>
                                            </Stack>
                                            <Typography color="primary.main" variant="h5" mb="6rem">글글글</Typography>
                                            <Link color="primary.light">비밀번호 찾기</Link>
                                        </React.Fragment>
                                    )}
                                </Stack>
                            </Box>
                        </Drawer>
                    </Button>
                </Stack>
            </Box>
        </NavBox>
    )
}

export default NavBar

const useStyles = makeStyles(theme => ({
    "menuButton": {
        backgroundColor: theme.palette.primary.light,
        width: "15rem"
    }
}))

const NavBox = styled(Box)({
    zIndex: 9, 
    display: "flex", 
    alignItems: "center",
    width: "100vw",
    maxWidth: "100%",
    height: "7rem",
    padding: "0 3.5rem"
})
