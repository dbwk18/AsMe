from distutils.log import debug

from flask import Flask, Response, request, jsonify
from flask_cors import CORS



import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans

from krwordrank.word import KRWordRank
from krwordrank.hangle import normalize
from krwordrank.word import summarize_with_keywords


# # 플라스크 웹 서버 객체 생성
app = Flask(__name__) 


@app.route("/")
def main():
    return 'main test'


@app.route('/img/<textquery>', methods=['GET', 'POST'])
def getImage(textquery):
    print(textquery)

@app.route('/dalle', methods=['GET', 'POST'])
def dalle_2():
    lists = request.args['file_name']
    lists = lists.split(',')
    data = []

@app.route("/api/topic", methods=["GET", "POST"])
def topic():
    # get documents
    articles = request.get_json()["articles"]
    df = pd.DataFrame.from_records(articles)
    article_ids = list(df["article_id"])
    documents = list(df["content"])

    # stopwords
    with open('./stopwords.txt', 'r') as f:
        stopwords = []
        for line in f:
            stopwords.append(line[:-1])
        
    stopwords = set(stopwords)

    # document similarity
    vectorizer = TfidfVectorizer(stop_words=stopwords)
    X = vectorizer.fit_transform(documents)

    # document clustering
    true_k = 5  # 클러스터 개수
    model = KMeans(n_clusters=true_k, init='k-means++', max_iter=200, n_init=10)
    model.fit(X)
    labels=model.labels_
    cluster_dict = {}
    for i in range(len(labels)):
        cluster_id = int(labels[i])
        if cluster_id in cluster_dict:
            cluster_dict[cluster_id].append(article_ids[i])
        else:
            cluster_dict[cluster_id] = [article_ids[i]]
    cluster_dict = sorted(cluster_dict.items())

    result={'cluster_id': labels, 'article_id': article_ids, 'documents': documents}
    result=pd.DataFrame(result)

    min_count = 5   # 단어의 최소 출현 빈도수 (그래프 생성 시)
    max_length = 10 # 단어의 최대 길이
    verbose =True
    
    beta = 0.85    # PageRank의 decaying factor beta
    max_iter = 10

    topic_dict = {}
    
    for k in range(0,true_k):
        s=result[result.cluster_id==k]
        text=s['documents'].str.cat(sep=' ')
        text=text.lower()
        text=' '.join([word for word in text.split()])

        texts = []
        texts = text.split('. ')

        wordrank_extractor = KRWordRank(min_count, max_length , verbose)
        try:
            keywords, rank, graph = wordrank_extractor.extract(texts, beta, max_iter)
            # for word, r in sorted(keywords.items(), key=lambda x:x[1], reverse=True)[:30]:
            #     print('%8s:\t%.4f' % (word, r))

            cluster_keywords = {word:score for word, score in sorted(
            keywords.items(), key=lambda x:-x[1])[:3]}

            topic_dict[k] = list(cluster_keywords.keys())[0]
        except:
            topic_dict[k] = "기타"

    return jsonify({
        "cluster_article": cluster_dict,
        "cluster_topic": topic_dict
    })



CORS(app, resources={r'*': {'origins': 'http://localhost:3000'}}) 

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, threaded=True, debug=True)  # 0.0.0.0 : localhost

