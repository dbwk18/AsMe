from distutils.log import debug

from flask import Flask, Response
from flask_cors import CORS

import requests

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



CORS(app, resources={r'*': {'origins': 'http://localhost:3000'}}) 

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, threaded=True, debug=True)  # 0.0.0.0 : localhost

