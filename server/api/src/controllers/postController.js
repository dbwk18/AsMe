const postService = require('../services/postService');

exports.selectPost = async (req, res) => {
    let { post_id } = req.params;
    try {
        let post = await postService.selectPost(post_id);
        res.status(200).json({
            layout_type: post[0].layout_type,
            title: post[0].title,
            content: post[0].content,
            creation_time: post[0].creation_time,
            image: post[0].image
        });
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.insertPost = async (req, res) => {
    let { title, content, image, layout_type, user_id } = req.body;
    try {
        let val = await postService.insertPost([title, content, image, layout_type, user_id]);
        let post = await postService.selectPost([val.insertId]);
        return res.status(200).json({
            layout_type: post[0].layout_type,
            title: post[0].title,
            content: post[0].content,
            creation_time: post[0].creation_time,
            image: post[0].image
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

exports.deletePost = async (req, res) => {
    let post_id = req.params.post_id;
    try {
        let post = await postService.selectPost(post_id);
        let title = post[0].title;
        let content = post[0].content;
        let creation_time = post[0].creation_time;
        let image = post[0].image;
        let layout_type = post[0].layout_type;
        let user_id = post[0].user_id;

        let check = await postService.insertTrash([post_id, title, content, creation_time, image, layout_type, user_id]);
        console.log(check);
        if (!check) {
            res.send('<script type="text/javascript">alert("삭제 실패..");</script>');
        } else {
            await postService.deletePost(post_id);
            res.send('<script type="text/javascript">alert("휴지통으로 전송되었습니다..");</script>');
            // return res.status(200).json({
            //     layout_type: check[0].layout_type,
            //     title: check[0].title,
            //     content: check[0].content,
            //     creation_time: check[0].creation_time,
            //     image: check[0].image
            // });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}




// exports.updatePost = async (req, res) => {
//     let post_uid = req.params;
//     let data = [req.body.post_title, req.body.post_content, req.body.post_writer, post_uid];
//     try {
//         await postService.updatePost(data);
//         let post = await postService.selectPost(post_uid);
//         return res.status(200).json({
//             post: post[0]
//         });
//     } catch (error) {
//         return res.status(500).json(error);
//     }
// }


