#!/usr/bin/env python
from flask import Flask, send_file, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    return send_file('static/index.html')


@app.route('/books')
def posts():
    posts = {
        'books': [
            {
                'id': 1,
                'title': 'test',
                'image_url': 'http://google.com',
                'content': 'content'
            },
            {
                'id': 2,
                'title': 'test2',
                'image_url': 'http://google.com',
                'content': 'test content'
            }
        ]
    }
    return jsonify(posts)


if __name__ == '__main__':
    app.run(debug=True)
