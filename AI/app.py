from flask import Flask, request, jsonify
import requests

# # 플라스크 웹 서버 객체 생성
app = Flask(__name__) 
font_path = 'NanumGothic.ttf'

@app.route('/dalle', methods=['GET'])
def dalle_2():
    r = requests.post(
        "https://api.deepai.org/api/text2img",
        data={
            'text': 'YOUR_TEXT_URL',
        },
        headers={'api-key': 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K'}
    )
    return r.json()

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, threaded=True)   # 0.0.0.0 : localhost