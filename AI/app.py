from distutils.log import debug

from flask import Flask, Response
from flask_cors import CORS
import requests

app = Flask(__name__)


@app.route("/")
def main():
    return 'main test'


@app.route('/img/<textquery>', methods=['GET', 'POST'])
def getImage(textquery):
    print(textquery)
    r = requests.post(
        "https://api.deepai.org/api/text2img",
        data={
            'text': textquery,
        },
        headers={'api-key': '6d5202bd-5ed3-4db2-bb6f-1caead4fe46c'}
    )

    return r.json


CORS(app, resources={r'*': {'origins': 'http://localhost:3000'}})

if __name__ == "__main__":
    app.run(host='localhost', port=8080, debug=True)
