export const emailValidator = (email) => {
    const re = /\S+@\S+\.\S+/;

    if (!re.test(email) || !email || email.length <= 0) {
        return false;
    }

    return true;
};

export const passwordValidator = (password) => {
    const re =  /^(?=.*[a-zA-Z])(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[0-9]).{8,16}$/;

    if (!re.test(password) || !password || password.length <= 0) {
        return false;
    }

    return true;;
};

export const nameValidator = (name) => {
    const re = /^[가-힣]{2,15}$/;

    if (!re.test(name) || !name || name.length <= 0) {
        return false;
    }

    return true;
};

export const idValidator = (id) => {
    const re = /^[a-zA-Z0-9]+$/;

    if (!re.test(id) || !id || id.length <= 0) {
        return false;
    }

    return true;
};
