import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { makeStyles, styled } from '@mui/styles';
import { TextField, Typography, Stack, Button, Checkbox, Link, Drawer } from '@mui/material';
import { idValidator, passwordValidator } from '../../utils/Validator';
import SignupBackground from '../../assets/images/SignupBackground.jpg';
import Terms from '../../assets/images/Terms.png';


let submitFlag = false;   // 중복 클릭 차단

export default function RegisterPage() {
    const navigate = useNavigate();
    const classes = useStyles();
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [agreement, setAgreement] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [idValid, setIdValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [passwordConfirmValid, setPasswordConfirmValid] = useState(false);

    useEffect(() => {
        // window.location.pathname으로 navbar 여부를 정하는데,
        // scroll이 발생해야 window.location.pathname을 갖고올 수 있기 때문에 설정
        window.scrollTo({top: 1})
    }, []);

    useEffect(() => {
        if (id) {
            setIdValid(idValidator(id));
        }
    }, [id]);
    
    useEffect(() => {
        handlePasswordConfirmValid();
    }, [password, confirmPassword]);

    const submitCheck = () => {
        if (submitFlag) {
            return submitFlag;
        }
        else {
            submitFlag = true;
            return false;
        }
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
        setPasswordValid(passwordValidator(event.target.value));
    }

    const handlePasswordConfirmValid = () => {
        if (password && confirmPassword) {
            if (password === confirmPassword) {
                setPasswordConfirmValid(true);
            }
            else {
                setPasswordConfirmValid(false);
            }
        }
    }

    const handleSubmit = () => {
        if (submitCheck()) { return; }

        if (idValid && passwordValid && passwordConfirmValid) {
            let dataToSubmit = {
                name: name,
                id: id,
                password: password
            }

            axios.post(`/api/signup`, dataToSubmit)
            .then(response => response.data)
            .then(response => {
                console.log(response);
                if (response?.user_id) {
                    alert("회원가입에 성공하였습니다.");
                    navigate("/login");
                }
                else {
                    alert(response?.message);
                }
            })
            .catch(err => console.log(err));
        }
        else if (!passwordConfirmValid) {
            alert("비밀번호가 일치하지 않습니다.");
        }

        submitFlag = false;
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
                        id="id-input"
                        placeholder="이름"
                        value={name}
                        fullWidth
                        size="large"
                        sx={{ width: "22rem", backgroundColor: "#fff" }}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        id="id-input"
                        placeholder="아이디"
                        value={id}
                        autoComplete="current-id"
                        fullWidth
                        size="large"
                        sx={{ width: "22rem", backgroundColor: "#fff" }}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <TextField
                        required
                        id="password-input"
                        placeholder="비밀번호"
                        type="password"
                        autoComplete="current-password"
                        fullWidth
                        size="large"
                        sx={{ width: "22rem", backgroundColor: "#fff" }}
                        onChange={handlePassword}
                    />
                    <TextField
                        required
                        id="confirm-password-input"
                        placeholder="비밀번호 확인"
                        type="password"
                        autoComplete="current-confirm-password"
                        fullWidth
                        size="large"
                        sx={{ width: "22rem", backgroundColor: "#fff" }}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <img src={Terms} width="340px" style={{ marginBottom: "2rem" }} />
                    <Button onClick={handleSubmit} color="primary" variant="contained" size="large" sx={{ width: "22rem", py: 3, fontWeight: 700, borderRadius: 0 }}>
                        <Typography color="#fff" fontWeight="700" fontFamily="inter">가입 완료</Typography>
                    </Button>
                </Stack>
            </Drawer>
        </div>
    )
}


const useStyles = makeStyles(theme => ({
    container: {
        height: "100vh",
        width: "100vw",
        margin: "auto",
        backgroundImage: `url(${SignupBackground})`, 
        marginLeft: "0rem",
        marginTop: "-7rem",
    },
    agreement: { 
        color: "black", 
        '&:hover': { 
            color: theme.palette.primary.main, 
            cursor: "pointer" 
        } 
    }
}));

const BlackLink = styled(Link)({
    textDecoration: "none",
    color: "#fff"
})


const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    maxHeight: 400,
    overflowY: "scroll",
    bgcolor: 'background.paper',
    borderRadius: "0.25rem",
    boxShadow: 24,
    p: 4,
}