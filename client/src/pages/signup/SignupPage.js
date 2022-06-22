import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signupUser } from '../../services/actions/user_actions';
import axios from 'axios';
import { makeStyles, styled } from '@mui/styles';
import { TextField, Container, Typography, Stack, Button, Grid, Checkbox, Box, Modal } from '@mui/material';
import { idValidator, passwordValidator } from '../../utils/Validator';
import { USER_SERVER } from '../../Config/config';


let submitFlag = false;   // 중복 클릭 차단

export default function RegisterPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [agreement, setAgreement] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [idUnique, setIdUnique] = useState(true);
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

    const handleIdUnique = () => {
        if (submitCheck()) { return; }

        if (idValid) {
            axios({
                method: 'post',
                url: `${USER_SERVER}/users/id-duplication`,
                data: {
                    "id": id
                }
            })
            .then(response => {
                console.log(response);
                if (response.data?.exists) {
                    setIdUnique(false);
                    alert("중복된 아이디입니다.");
                }
                else {
                    setIdUnique(true);
                }
            })
            .catch(error => console.log(error?.response))
        }
        else {
            alert("유효하지 않은 아이디입니다. 아이디 형식을 다시 확인해주세요.");
        }

        submitFlag = false;
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

        if (idUnique && passwordValid && passwordConfirmValid && agreement) {
            let dataToSubmit = {
                id: id,
                password: password
            }

            dispatch(signupUser(dataToSubmit))
            .then(response => {
                console.log(response);
                if (response.data?.success) {
                    alert("회원가입에 성공하였습니다.");
                    navigate("/login");
                }
                else {
                    alert("회원가입에 실패하였습니다. 다시시도해주세요.");
                }
            })
            .catch(err => console.log(err));
        }
        else if (!passwordConfirmValid) {
            alert("비밀번호가 일치하지 않습니다.");
        }
        else if (!agreement) {
            alert("약관 동의를 해주세요.");
        }

        submitFlag = false;
    }

    return (
        <div className={classes.container}>
            <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Grid container alignItems="center">
                    <Grid item xs={12} sx={{ pb: "2rem" }}>
                        <Typography variant="h4">
                            회원가입
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField
                            id="id-input"
                            placeholder="아이디"
                            value={id}
                            autoComplete="current-id"
                            fullWidth
                            margin="normal"
                            size="small"
                            sx={{ margin: 0 }}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={3} alignSelf="center" textAlign="end">
                        <Button
                            variant="contained"
                            onClick={handleIdUnique}
                            disabled={!idValid || (idValid && idUnique)}
                        >
                            중복확인
                        </Button>                           
                    </Grid>
                    
                    <Grid item xs={9} sx={{ ml: 1, mt: 1 }}>
                    {idValid ? (
                        idUnique && (
                            <Typography variant="body2" color="primary">
                                *사용 가능한 아이디입니다.
                            </Typography>
                        )
                    ) : (
                        id && (
                            <Typography variant="body2" sx={{ color: "red "}}>
                                *유효하지 않은 아이디입니다.
                            </Typography>
                        )
                    )}
                    </Grid>
                    <Grid item xs={9}>
                        <TextField
                            required
                            id="password-input"
                            label="비밀번호"
                            type="password"
                            autoComplete="current-password"
                            fullWidth
                            margin="normal"
                            size="small"
                            helperText="*비밀번호는 영문, 숫자, 특수문자를 혼합한 8자리 이상 16자리 이하여야 합니다."
                            onChange={handlePassword}
                        />
                    </Grid>
                    <Grid item xs={9} sx={{ ml: "13px", mt: 1 }}>
                    {password && !passwordValid && (
                        <Typography variant="body2" sx={{ color: "red" }}>
                            *비밀번호 형식이 올바르지 않습니다.
                        </Typography>
                    )}
                    </Grid>
                    <Grid item xs={9}>
                        <TextField
                        required
                        id="confirm-password-input"
                        label="비밀번호 확인"
                        type="password"
                        autoComplete="current-confirm-password"
                        fullWidth
                        margin="normal"
                        size="small"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Grid>
                    {confirmPassword &&
                        <Grid item xs={9} sx={{ ml: "13px", mt: 1 }}>
                        {passwordConfirmValid ? (
                            passwordValid && (
                                <Typography variant="body2" color="primary">
                                    *사용 가능한 비밀번호입니다.
                                </Typography>
                            )
                        ) : (
                            <Typography variant="body2" sx={{ color: "red "}}>
                                *비밀번호가 일치하지 않습니다.
                            </Typography>
                        )}
                        </Grid>
                    }
                    <Grid item xs={9} my={2}>
                        <Stack direction="row" alignItems="center">
                            <Checkbox
                                value={agreement}
                                onChange={(e) => {setAgreement(e.target.checked)}}
                            />
                            <Typography>
                            <Stack direction="row" alignItems="center">

                                <BlackLink onClick={() => setOpenModal(true)}>
                                    <Typography className={classes.agreement}>약관 내용</Typography>
                                </BlackLink>
                                에 동의합니다.
                            </Stack>

                            </Typography>
                        </Stack>
                        <Modal
                            open={openModal}
                            onClose={(e) => setOpenModal(false)}
                        >
                            <ScrollBox sx={modalStyle}>
                                <Typography variant="h6" sx={{ mb: 2 }}>약관</Typography>
                                <Typography sx={{ mb: 2 }}>
                                    &nbsp;...
                                </Typography>
                            </ScrollBox>
                        </Modal>
                    </Grid>
                    <Grid item xs={12} mt={4}>
                        <Button onClick={handleSubmit} color="primary" variant="contained" size="large" sx={{ px: 4 }}>
                            <Typography color="#fff" fontWeight="700">가입 완료</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}


const useStyles = makeStyles(theme => ({
    container: {
        height: "100vh",
        minWidth: "1440px",
        width: "100vw",
        padding: "10rem 0",
        marginBottom: "50rem"
    },
    agreement: { 
        color: "black", 
        '&:hover': { 
            color: theme.palette.primary.main, 
            cursor: "pointer" 
        } 
    }
}));

const ScrollBox = styled(Box)({
    overflowY: "scroll",
    '&::-webkit-scrollbar': {
        width: "12px",
        height: "80%",
        borderRadius: "2rem",
        backgroundColor: "#EBE9E9"
    },
    '&::-webkit-scrollbar-thumb': {
        width: "8px",
        backgroundColor: "#707070",
        borderRadius: "2rem"
    },
})

const BlackLink = styled("a")({ 
    textDecoration: "none", 
});

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