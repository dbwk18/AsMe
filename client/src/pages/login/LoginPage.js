import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, styled } from '@mui/styles';
import { TextField, Typography, Stack, Button, Drawer } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import LoginBackground from '../../assets/images/LoginBackground.jpg';


function LoginPage(props) {
    const navigate = useNavigate();
    const classes = useStyles();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        let dataToSubmit = {
            id: id,
            password: password
        }

        axios.post(`/api/signin`, dataToSubmit)
        .then(response => response.data)
        .then(response => {
            if (response?.user_id) {
                console.log(response);
                window.localStorage.setItem("user_id", response.user_id);
                window.localStorage.setItem("user_name", response.name);
                navigate("/");
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className={classes.container}>
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
                variant="permanent"
            >
                <Stack alignItems="center" spacing={2} pt="12rem">
                    <TextField
                        required
                        id="id-input"
                        placeholder="아이디"
                        autoComplete="current-id"
                        size="large"
                        sx={{ width: "24rem", backgroundColor: "#fff" }}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <TextField
                        required
                        id="password-input"
                        placeholder="비밀번호"
                        type="password"
                        autoComplete="current-password"
                        size="large"
                        sx={{ width: "24rem", backgroundColor: "#fff" }}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleSubmit} size="large" color="primary" variant="contained" sx={{ width: "24rem", py: 3, my: 2, fontWeight: 700, borderRadius: 0 }}>
                        <Typography>로그인</Typography>
                    </Button>
                    <BlackLink to="/signup"><Typography>회원가입</Typography></BlackLink>
                </Stack>
            </Drawer>
        </div>
    )
}

export default LoginPage


const useStyles = makeStyles({
    container: {
        height: "100vh",
        width: "100vw",
        margin: "auto",
        backgroundImage: `url(${LoginBackground})`, 
        marginLeft: "0rem",
        marginTop: "-7rem",
    }
})

const BlackLink = styled(Link)({
    textDecoration: "none",
    color: "black"
})
