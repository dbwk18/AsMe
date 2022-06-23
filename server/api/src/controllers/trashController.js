const axios = require('axios');
const trashService = require('../services/trashService');
const postService = require('../services/postService');

exports.selectClusterList = async (req, res) => {
    let { cluster_id } = req.params
    try {

        let list = await trashService.selectClusterList(cluster_id);
        return res.status(200).json({
            clusters: list
        })
    } catch (error) {
        return res.status(500).json(error);
    }
}


exports.deleteTrash = async (req, res) => {
    let trash_id = req.params.trash_id;
    let { user_id } = req.body;
    try {
        await trashService.deleteTrash(trash_id);
        let check = await trashService.selectTrash(trash_id);
        console.log(check[0]);
        if (check[0] == null) {
            // trash list post
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
            res.status(200).json({ message: "삭제되었습니다." });
        } else {
            res.status(200).json({ message: "삭제를 실패하였습니다." });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}
exports.selectCluster = async (req, res) => {
    let { user_id } = req.body;
    try {
        let cluster = await trashService.selectCluster([user_id]);
        res.status(200).json({
            clusters: cluster
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}


exports.test = (req, res) => {
    try {
        let response = {
            "cluster_article": [(0, [3, 4, 5]), (1, [1, 2]), (2, [6, 7]), (3, [8]), (4, [9])],
            "cluster_topic": { 0: '경기', 1: '학습', 2: '사과', 3: '놀이공원', 4: '기타' }
        }
        let check = trashService.selectTrash(8);
        let article = response.cluster_article;
        let topic = Object.values(response.cluster_topic);

        for (let i = 0; i < article.length; i++) {
            for (let j = 0; j < article[0].length; j++) {
                console.log([article[i][j], topic[i], check[i]]);
                trashService.insertArticle([article[i][j], topic[i], check[i]]);
            }
        }
        res.status(200).json(clusters);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}