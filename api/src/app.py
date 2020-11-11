from flask import Flask
from flask_pymongo import PyMongo

from .goal.goal_service import GoalService
from .task.task_service import TaskService
from .user.user_service import UserService
from .goal.goal_repository import GoalRepository
from .task.task_repository import TaskRepository
from .user.user_repository import UserRepository

dbClient = None # TODO connect with DB
db = dbClient.super_projekt

goalRepository = GoalRepository(db)
taskRepository = TaskRepository(db)
userRepository = UserRepository(db)
goalService = GoalService(goalRepository, taskRepository)
taskService = TaskService(taskRepository)
userService = UserService(userRepository)

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run()
