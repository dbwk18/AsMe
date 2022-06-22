import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, auth } from '../../services/actions/user_actions';
import { Link } from 'react-router-dom';
import { makeStyles, styled } from '@mui/styles';
import { TextField, Container, Typography, Divider, Stack, Button } from '@mui/material';


function LoginPage(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [fail, setFail] = useState(false);

    const handleSubmit = () => {
        let dataToSubmit = {
            id: id,
            password: password
        }

        dispatch(loginUser(dataToSubmit))
        .then(response => {
            if (response.type==='login_user' && response.payload!==undefined) {
                console.log(response);
                window.localStorage.setItem('accessToken', response.payload.accessToken);
                window.localStorage.setItem('refreshToken', response.payload.refreshToken);

                dispatch(auth(response.payload.accessToken))
                .then(response => {
                    if (response.type==='auth_user' && response.payload!==undefined) {
                        console.log(response);
                        props.history.push("/");
                    }
                })
                .catch(error => {
                    console.log(error);
                    alert("예기치 못한 오류가 발생하였습니다. 로그인을 다시 시도해주세요.");
                })
            }
            else {
                setFail(true);
            }
        })
        .catch(err => {
            console.log(err);
            setFail(true);
        })
    }

    // TODO: (소셜 로그인)
    return (
        <div className={classes.container}>
            <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <BlackLink to="/">
                    <Typography 
                        variant="h2"
                        sx={{ 
                            pb: 5, 
                            letterSpacing: 8,                             
                            fontFamily: ["Helvetica"],
                        }} 
                        align="center" 
                        color="primary"
                    >
                        LOGO
                    </Typography>
                </BlackLink>
                <TextField
                    required
                    id="id-input"
                    label="아이디"
                    autoComplete="current-id"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setId(e.target.value)}
                />
                <TextField
                    required
                    id="password-input"
                    label="비밀번호"
                    type="password"
                    autoComplete="current-password"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                { fail ? 
                    <Typography variant="body2" alignSelf="flex-start" sx={{ color: "red", ml: 1 }}>
                        *아이디/비밀번호가 일치하지 않습니다.
                    </Typography>
                :   <Typography>&nbsp;</Typography> 
                }
                <Button onClick={handleSubmit} fullWidth size="large" color="primary" variant="contained" sx={{ mt: 4, mb: 8, fontWeight: 700 }}>
                    로그인
                </Button>
                <BlackLink to="/signup"><Typography>회원가입</Typography></BlackLink>
            </Container>
        </div>
    )
}

export default LoginPage


const useStyles = makeStyles({
    container: {
        height: "100vh",
        width: "100vw",
        padding: "10rem 0",
        margin: "auto"
    }
})

const BlackLink = styled(Link)({
    textDecoration: "none",
    color: "black"
})
