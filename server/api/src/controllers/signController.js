const signService = require('../services/signService');


exports.signin = async (req, res) => {
    var { id, password } = req.body;
    try {
        let user = await signService.signin(id, password);

        if (!user[0]) {
            return res.send(`<script type="text/javascript">alert("아이디 비밀번호를 확인해주세요.");</script>`);
        } else {
            let user = await signService.selectUser(id);
            res.status(200).json({
                user_id: user[0].user_id
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}


exports.signup = async (req, res) => {
    const { id, password, name } = req.body;
    try {
        let user = await signService.selectUser(id);

        if (!user[0]) {
            await signService.signup(id, password, name);
            let user = await signService.selectUser(id);
            res.status(200).json({
                user_id: user[0].user_id
            });
        } else {
            return res.send(`<script type="text/javascript">
                alert("이미 사용중인 아이디 입니다."); 
                </script>`);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

