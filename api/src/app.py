from flask import Flask
from flask_pymongo import PyMongo # na razie nie uzywamy

from .goal.goal_service import GoalService
from .task.task_service import TaskService
from .user.user_service import UserService


app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run()
