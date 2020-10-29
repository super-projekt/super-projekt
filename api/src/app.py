from flask import Flask
from flask_pymongo import PyMongo # na razie nie uzywamy

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run()
