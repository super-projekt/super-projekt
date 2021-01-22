from flask import Flask
from pymongo import MongoClient


from src.goal.goal_service import GoalService
from src.task.task_service import TaskService
from src.user.user_service import UserService
from src.goal.goal_repository import GoalRepository
from src.task.task_repository import TaskRepository
from src.user.user_repository import UserRepository

client = MongoClient('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false')

# getting a database & specific collection
db = client['super-projekt']

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
