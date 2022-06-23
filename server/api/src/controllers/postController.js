const axios = require('axios');
const postService = require('../services/postService');
const trashService = require('../services/trashService');

exports.selectAllPost = async (req, res) => {
    let { user_id } = req.body;
    try {
        let posts = await postService.selectAllPost(user_id);
        res.status(200).json({
            posts: posts
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

exports.insertPost = async (req, res) => {
    let { title, content, layout_type, user_id } = req.body;
    try {
        let val = await postService.insertPost([title, content, layout_type, user_id]);
        let post = await postService.selectPost([val.insertId]);
        return res.status(200).json({
            layout_type: post[0].layout_type,
            title: post[0].title,
            content: post[0].content,
            creation_time: post[0].creation_time,
            user_id: post[0].user_id
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

        await postService.insertTrash([post_id, title, content, creation_time, image, layout_type, user_id]);

        //trash list post
        let articles = await postService.getArticles(user_id);


        const postTrashes = await axios.post("http://localhost:5000/api/topic", {
            articles: articles
        });

        console.log("post result : " + postTrashes.data);

        //cluster list get
        const response = await axios.get("http://localhost:5000/api/topic");

        console.log("get result : " + response);
        let user = await trashService.getTrash(user_id);
        // let response = {
        //     "cluster_article": [(0, [3, 4, 5]), (1, [1, 2]), (2, [6, 7]), (3, [8]), (4, [9])],
        //     "cluster_topic": { 0: '경기', 1: '학습', 2: '사과', 3: '놀이공원', 4: '기타' }
        // }

        let article = response.cluster_article;
        let topic = Object.values(response.cluster_topic);

        for (let i = 0; i < article.length; i++) {
            for (let j = 0; j < article[i].length; j++) {
                await trashService.insertArticle([article[i][j], topic[i], user[i].trash_id]);
            }
        }
        await postService.deletePost(post_id);
        res.status(200).json({ message: "휴지통으로 이동되었습니다." });
    } catch (error) {
        return res.status(500).json(error);
    }
}
