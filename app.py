# app.py
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/message', methods=['POST'])
def post_message():
    data = request.json
    message = data.get('message', '')
    # You would process the message here and return a response
    response = {
        'reply': f"Received message: {message}"
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
